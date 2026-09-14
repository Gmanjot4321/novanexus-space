import React, { useMemo } from 'react';
import { TelemetryEntity } from '../../data/telemetryDashboardsData';
import { audioEngine } from '../../utils/audioEngine';
import { Hexagon, Sparkles, Shield, Activity, Flame, Orbit, Trophy } from 'lucide-react';

interface TelemetryRadarViewProps {
  items: TelemetryEntity[];
  selectedEntity: TelemetryEntity | null;
  onSelect: (item: TelemetryEntity) => void;
  dashboardTitle: string;
}

interface RadarAxis {
  key: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

const RADAR_AXES: RadarAxis[] = [
  { key: 'magnitude', label: 'Scale Magnitude', icon: Trophy, description: 'Relative volumetric or quantitative scale in cosmos' },
  { key: 'extremity', label: 'Extremity Index', icon: Shield, description: 'Deviation from comfortable terrestrial conditions' },
  { key: 'physics', label: 'Core / Energy Output', icon: Flame, description: 'Internal pressure, thermodynamics or gravitational flux' },
  { key: 'dynamics', label: 'Dynamic Volatility', icon: Orbit, description: 'Orbital velocity, spin rate or temporal violence' },
  { key: 'rarity', label: 'Astrophysical Rarity', icon: Sparkles, description: 'Cosmic scarcity & observational milestone significance' }
];

export const TelemetryRadarView: React.FC<TelemetryRadarViewProps> = ({
  items,
  selectedEntity,
  onSelect,
  dashboardTitle
}) => {
  const activeEntity = selectedEntity || items[0];

  // Helper to compute deterministic 0-100 score for an entity on a given axis
  const calculateScores = (entity: TelemetryEntity, rankIdx: number, total: number) => {
    if (!entity) return { magnitude: 50, extremity: 50, physics: 50, dynamics: 50, rarity: 50 };

    // Magnitude: derived from relative ranking in the dashboard
    const rankPct = Math.max(15, Math.min(100, Math.round(100 - (rankIdx / Math.max(1, total)) * 75)));

    // Deterministic hash based on entity name characters for secondary natural variation
    const charSum = entity.name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const var1 = (charSum % 25);
    const var2 = ((charSum * 3) % 25);
    const var3 = ((charSum * 7) % 20);

    const isRecord = rankIdx === 0;
    const isExtreme = entity.badge.toLowerCase().includes('monster') || 
                      entity.badge.toLowerCase().includes('strongest') || 
                      entity.badge.toLowerCase().includes('record') ||
                      entity.badge.toLowerCase().includes('titan');

    const extremity = Math.min(100, isExtreme ? 95 : Math.max(30, rankPct + var1 - 10));
    const physics = Math.min(100, isRecord ? 98 : Math.max(25, rankPct + var2 - 12));
    const dynamics = Math.min(100, Math.max(30, 60 + var3 - (rankIdx % 5) * 5));
    const rarity = Math.min(100, isRecord ? 100 : Math.max(35, 85 - (rankIdx / total) * 45 + (charSum % 15)));

    return {
      magnitude: rankPct,
      extremity,
      physics,
      dynamics,
      rarity
    };
  };

  // Compute active entity scores
  const activeScores = useMemo(() => {
    if (!activeEntity) return { magnitude: 50, extremity: 50, physics: 50, dynamics: 50, rarity: 50 };
    const idx = items.findIndex(i => i.id === activeEntity.id);
    return calculateScores(activeEntity, idx >= 0 ? idx : 0, items.length);
  }, [activeEntity, items]);

  // Compute cluster average scores
  const clusterAverage = useMemo(() => {
    if (items.length === 0) return { magnitude: 50, extremity: 50, physics: 50, dynamics: 50, rarity: 50 };
    let sumMag = 0, sumExt = 0, sumPhy = 0, sumDyn = 0, sumRar = 0;
    items.forEach((item, idx) => {
      const s = calculateScores(item, idx, items.length);
      sumMag += s.magnitude;
      sumExt += s.extremity;
      sumPhy += s.physics;
      sumDyn += s.dynamics;
      sumRar += s.rarity;
    });
    const count = items.length;
    return {
      magnitude: Math.round(sumMag / count),
      extremity: Math.round(sumExt / count),
      physics: Math.round(sumPhy / count),
      dynamics: Math.round(sumDyn / count),
      rarity: Math.round(sumRar / count)
    };
  }, [items]);

  // Radar geometry
  const CX = 175;
  const CY = 175;
  const RADIUS = 115;
  const NUM_AXES = 5;

  // Convert polar coordinates (angle, value 0-100) to Cartesian (x, y)
  const getCoordinates = (axisIndex: number, score: number) => {
    const angle = (Math.PI * 2 / NUM_AXES) * axisIndex - Math.PI / 2;
    const r = (score / 100) * RADIUS;
    return {
      x: CX + r * Math.cos(angle),
      y: CY + r * Math.sin(angle)
    };
  };

  // Build SVG polygon points string
  const activePolygonPoints = useMemo(() => {
    const scoresArr = [
      activeScores.magnitude,
      activeScores.extremity,
      activeScores.physics,
      activeScores.dynamics,
      activeScores.rarity
    ];
    return scoresArr.map((score, i) => {
      const pt = getCoordinates(i, score);
      return `${pt.x},${pt.y}`;
    }).join(' ');
  }, [activeScores]);

  const avgPolygonPoints = useMemo(() => {
    const scoresArr = [
      clusterAverage.magnitude,
      clusterAverage.extremity,
      clusterAverage.physics,
      clusterAverage.dynamics,
      clusterAverage.rarity
    ];
    return scoresArr.map((score, i) => {
      const pt = getCoordinates(i, score);
      return `${pt.x},${pt.y}`;
    }).join(' ');
  }, [clusterAverage]);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto space-y-4 pr-1">
      {/* Top Header & Entity Dropdown Selector */}
      <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Hexagon className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
              <span>5-Axis Polar Radar Spider Profile</span>
              <span className="px-2 py-0.2 rounded-full text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Multi-Attribute Analysis
              </span>
            </h4>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Comparative multidimensional analysis vs. domain average in {dashboardTitle}
            </p>
          </div>
        </div>

        {/* Dropdown to switch active entity */}
        <select
          value={activeEntity?.id || ''}
          onChange={(e) => {
            const found = items.find(i => i.id === e.target.value);
            if (found) {
              audioEngine.playClickSound();
              onSelect(found);
            }
          }}
          className="w-full sm:w-auto px-3 py-1.5 rounded-xl bg-slate-900 border border-purple-500/40 text-xs font-mono font-bold text-white focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer"
        >
          {items.map((item, idx) => (
            <option key={item.id} value={item.id}>
              #{idx + 1} {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Main Radar Layout: Polar SVG Chart + Attribute Breakdown Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        
        {/* Left Column: Interactive Radar SVG */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/90 border border-white/10 shadow-inner">
          <svg viewBox="0 0 350 350" className="w-full max-w-[320px] select-none">
            <defs>
              <linearGradient id="radar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.35" />
              </linearGradient>
              <filter id="radar-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Concentric Pentagonal Rings (20%, 40%, 60%, 80%, 100%) */}
            {[0.2, 0.4, 0.6, 0.8, 1.0].map((level) => {
              const ringPoints = [0, 1, 2, 3, 4].map((i) => {
                const pt = getCoordinates(i, level * 100);
                return `${pt.x},${pt.y}`;
              }).join(' ');

              return (
                <polygon
                  key={level}
                  points={ringPoints}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Spokes from Center */}
            {[0, 1, 2, 3, 4].map((i) => {
              const edgePt = getCoordinates(i, 100);
              return (
                <line
                  key={i}
                  x1={CX}
                  y1={CY}
                  x2={edgePt.x}
                  y2={edgePt.y}
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Cluster Average Reference Polygon (Dashed White) */}
            <polygon
              points={avgPolygonPoints}
              fill="rgba(255, 255, 255, 0.04)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="3,3"
            />

            {/* Active Entity Polygon (Glowing Gradient Fill) */}
            <polygon
              points={activePolygonPoints}
              fill="url(#radar-gradient)"
              stroke="#22d3ee"
              strokeWidth="2.5"
              filter="url(#radar-glow)"
            />

            {/* Vertex Highlight Nodes for Active Entity */}
            {[
              activeScores.magnitude,
              activeScores.extremity,
              activeScores.physics,
              activeScores.dynamics,
              activeScores.rarity
            ].map((score, i) => {
              const pt = getCoordinates(i, score);
              return (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r="4.5"
                  fill="#ffffff"
                  stroke="#22d3ee"
                  strokeWidth="2"
                />
              );
            })}

            {/* Axis Labels positioned outside 100% boundary */}
            {RADAR_AXES.map((axis, i) => {
              const pt = getCoordinates(i, 118);
              return (
                <text
                  key={axis.key}
                  x={pt.x}
                  y={pt.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#94a3b8"
                  fontSize="9.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {axis.label.split(' ')[0]}
                </text>
              );
            })}
          </svg>

          {/* Quick Legend under chart */}
          <div className="flex items-center justify-center gap-4 text-[10px] font-mono mt-1">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
              <span>{activeEntity.name}</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2.5 h-0.5 border-t border-dashed border-white/50" />
              <span>Domain Avg</span>
            </span>
          </div>
        </div>

        {/* Right Column: 5-Axis Breakdown Metrics */}
        <div className="col-span-1 lg:col-span-6 space-y-2.5">
          {RADAR_AXES.map((axis) => {
            const val = activeScores[axis.key as keyof typeof activeScores];
            const avgVal = clusterAverage[axis.key as keyof typeof clusterAverage];
            const Icon = axis.icon;

            return (
              <div
                key={axis.key}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-white truncate">
                        {axis.label}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-300 font-bold">
                        {val}/100
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono truncate">
                      {axis.description}
                    </p>
                  </div>
                </div>

                {/* Score Progress Bar & Avg marker */}
                <div className="w-24 shrink-0 space-y-1">
                  <div className="w-full h-2 rounded-full bg-black/60 border border-white/5 relative overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500"
                      style={{ width: `${val}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-slate-500">
                    <span>Avg: {avgVal}</span>
                    <span className={val >= avgVal ? 'text-emerald-400' : 'text-amber-400'}>
                      {val >= avgVal ? `+${val - avgVal}` : `${val - avgVal}`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Narrative Synthesis Card */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-purple-950/20 to-slate-950/40 border border-white/10 text-[11px] font-mono text-slate-300 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white">{activeEntity.name} Profile: </strong>
          <span>
            Scoring {activeScores.magnitude}/100 in scale and {activeScores.extremity}/100 in environmental extremity, {activeEntity.name} stands as {activeEntity.badge.toLowerCase()} with {activeEntity.displayValue}.
          </span>
        </div>
      </div>
    </div>
  );
};
