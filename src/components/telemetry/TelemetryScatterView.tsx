import React, { useState, useMemo } from 'react';
import { TelemetryEntity } from '../../data/telemetryDashboardsData';
import { audioEngine } from '../../utils/audioEngine';
import { Target, Sparkles, Compass } from 'lucide-react';

interface TelemetryScatterViewProps {
  items: TelemetryEntity[];
  selectedEntity: TelemetryEntity | null;
  onSelect: (item: TelemetryEntity) => void;
  unitLabel: string;
}

export const TelemetryScatterView: React.FC<TelemetryScatterViewProps> = ({
  items,
  selectedEntity,
  onSelect,
  unitLabel
}) => {
  const [hoveredEntity, setHoveredEntity] = useState<TelemetryEntity | null>(null);

  // SVG coordinate bounds
  const WIDTH = 760;
  const HEIGHT = 380;
  const PAD_LEFT = 70;
  const PAD_RIGHT = 40;
  const PAD_TOP = 40;
  const PAD_BOTTOM = 60;

  const innerWidth = WIDTH - PAD_LEFT - PAD_RIGHT;
  const innerHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;

  // Compute log or normalized coordinate mappings
  const plottedNodes = useMemo(() => {
    if (items.length === 0) return [];

    // Calculate dynamic scaling (logarithmic when span is wide, linear otherwise)
    const absValues = items.map(i => Math.max(1e-35, Math.abs(i.value)));
    const minVal = Math.min(...absValues);
    const maxVal = Math.max(...absValues);
    const isWideSpan = maxVal / (minVal || 1) > 50;

    const minNorm = isWideSpan ? Math.log10(minVal) : minVal;
    const maxNorm = isWideSpan ? Math.log10(maxVal) : maxVal;
    const span = maxNorm - minNorm || 1;

    return items.map((item, idx) => {
      // X coordinate: even distribution along X axis
      const xPct = items.length === 1 ? 0.5 : idx / (items.length - 1);
      const cx = PAD_LEFT + xPct * innerWidth;

      // Y coordinate: normalized value inverted (higher is up)
      const raw = Math.max(1e-35, Math.abs(item.value));
      const norm = isWideSpan ? Math.log10(raw) : raw;
      const yPct = (norm - minNorm) / span;
      const cy = PAD_TOP + (1 - yPct) * innerHeight;

      // Bubble radius proportional to ranking and value
      const radius = 10 + (1 - idx / items.length) * 12;

      return {
        item,
        cx,
        cy,
        radius,
        color: item.color || '#38bdf8',
        idx
      };
    });
  }, [items, innerWidth, innerHeight]);

  const activeFocus = hoveredEntity || selectedEntity || items[0];

  return (
    <div className="flex flex-col flex-1 overflow-hidden space-y-4">
      {/* Top Telemetry Header & Active Node Indicator */}
      <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white">
                2D Telemetry Bubble Coordinate Plane
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {items.length} Nodes Plotted
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Hover or click celestial nodes to lock target reticle &amp; view astrophysics dossier
            </p>
          </div>
        </div>

        {activeFocus && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-950/50 border border-cyan-400/40 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold text-white">{activeFocus.name}:</span>
            <span className="text-cyan-300 font-bold">{activeFocus.displayValue}</span>
          </div>
        )}
      </div>

      {/* SVG Canvas Container */}
      <div className="flex-1 w-full bg-slate-950/90 border border-white/10 rounded-2xl p-2 relative shadow-inner overflow-hidden min-h-[340px]">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full h-full select-none"
          style={{ minHeight: '320px' }}
        >
          <defs>
            {/* Grid background pattern */}
            <pattern id="scatter-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </pattern>
            {/* Radial glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Grid Background */}
          <rect width={WIDTH} height={HEIGHT} fill="url(#scatter-grid)" />

          {/* Guide Axis Lines */}
          <line
            x1={PAD_LEFT}
            y1={HEIGHT - PAD_BOTTOM}
            x2={WIDTH - PAD_RIGHT}
            y2={HEIGHT - PAD_BOTTOM}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />
          <line
            x1={PAD_LEFT}
            y1={PAD_TOP}
            x2={PAD_LEFT}
            y2={HEIGHT - PAD_BOTTOM}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />

          {/* Horizontal Level Reference Ticks */}
          {[0.25, 0.5, 0.75].map((pct) => {
            const y = PAD_TOP + pct * innerHeight;
            return (
              <g key={pct}>
                <line
                  x1={PAD_LEFT}
                  y1={y}
                  x2={WIDTH - PAD_RIGHT}
                  y2={y}
                  stroke="rgba(255,255,255,0.06)"
                  strokeDasharray="4,4"
                  strokeWidth="1"
                />
              </g>
            );
          })}

          {/* Axis Labels */}
          <text
            x={PAD_LEFT}
            y={PAD_TOP - 12}
            fill="#38bdf8"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ▲ MAGNITUDE SCALE ({unitLabel})
          </text>
          <text
            x={WIDTH - PAD_RIGHT}
            y={HEIGHT - PAD_BOTTOM + 22}
            textAnchor="end"
            fill="#a855f7"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ASTROPHYSICAL RANK SEQUENCE ▶
          </text>

          {/* Selected Node Crosshair Target Reticle */}
          {plottedNodes.map((node) => {
            const isSelected = selectedEntity?.id === node.item.id;
            if (!isSelected) return null;

            return (
              <g key={`crosshair-${node.item.id}`} pointerEvents="none">
                {/* Horizontal guide to Y-axis */}
                <line
                  x1={PAD_LEFT}
                  y1={node.cy}
                  x2={node.cx}
                  y2={node.cy}
                  stroke="#22d3ee"
                  strokeDasharray="3,3"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                {/* Vertical guide to X-axis */}
                <line
                  x1={node.cx}
                  y1={node.cy}
                  x2={node.cx}
                  y2={HEIGHT - PAD_BOTTOM}
                  stroke="#22d3ee"
                  strokeDasharray="3,3"
                  strokeWidth="1.5"
                  opacity="0.7"
                />
                {/* Target Pulsing Outer Rings */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.radius + 10}
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.radius + 16}
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity="0.6"
                />
              </g>
            );
          })}

          {/* Interactive Celestial Bubbles */}
          {plottedNodes.map((node) => {
            const isSelected = selectedEntity?.id === node.item.id;
            const isHovered = hoveredEntity?.id === node.item.id;

            return (
              <g
                key={node.item.id}
                className="cursor-pointer transition-transform"
                onClick={() => {
                  audioEngine.playClickSound();
                  onSelect(node.item);
                }}
                onMouseEnter={() => setHoveredEntity(node.item)}
                onMouseLeave={() => setHoveredEntity(null)}
              >
                {/* Outer Glow on hover/selected */}
                {(isSelected || isHovered) && (
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.radius + 6}
                    fill={node.color}
                    opacity="0.3"
                    filter="url(#glow)"
                  />
                )}

                {/* Primary Bubble */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.radius}
                  fill={node.color}
                  stroke={isSelected ? '#ffffff' : 'rgba(255,255,255,0.4)'}
                  strokeWidth={isSelected ? 2.5 : 1}
                  opacity={isSelected ? 1 : 0.85}
                  filter="url(#glow)"
                />

                {/* Center Core Node */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={3}
                  fill="#ffffff"
                />

                {/* Entity Label directly above node */}
                <text
                  x={node.cx}
                  y={node.cy - node.radius - 8}
                  textAnchor="middle"
                  fill={isSelected ? '#ffffff' : '#cbd5e1'}
                  fontSize={isSelected ? '11' : '10'}
                  fontFamily="monospace"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                  className="pointer-events-none drop-shadow"
                >
                  {node.item.name.length > 14 ? `${node.item.name.slice(0, 13)}…` : node.item.name}
                </text>

                {/* Value readout directly below node */}
                <text
                  x={node.cx}
                  y={node.cy + node.radius + 14}
                  textAnchor="middle"
                  fill={isSelected ? '#22d3ee' : '#94a3b8'}
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  #{node.idx + 1}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Footer Instructions */}
      <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 px-2">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Click any bubble to pin target telemetry to the deep dossier panel.</span>
        </span>
        <span className="text-cyan-300">
          Selected: {selectedEntity?.name || items[0]?.name} ({selectedEntity?.displayValue || items[0]?.displayValue})
        </span>
      </div>
    </div>
  );
};
