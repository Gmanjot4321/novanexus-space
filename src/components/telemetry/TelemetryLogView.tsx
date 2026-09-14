import React, { useMemo } from 'react';
import { TelemetryEntity } from '../../data/telemetryDashboardsData';
import { audioEngine } from '../../utils/audioEngine';
import { motion } from 'motion/react';
import { Binary, ChevronRight, Sparkles } from 'lucide-react';

interface TelemetryLogViewProps {
  items: TelemetryEntity[];
  selectedEntity: TelemetryEntity | null;
  onSelect: (item: TelemetryEntity) => void;
  unitLabel: string;
  dashboardId: string;
}

export const TelemetryLogView: React.FC<TelemetryLogViewProps> = ({
  items,
  selectedEntity,
  onSelect,
  unitLabel,
  dashboardId
}) => {
  // Compute log10 values and min/max exponent range
  const { logItems, minLog, maxLog } = useMemo(() => {
    if (items.length === 0) return { logItems: [], minLog: 0, maxLog: 1 };

    const parsed = items.map((item) => {
      let val = Math.abs(item.value);
      if (dashboardId === 'coldest') {
        // Offset from absolute zero (-273.15)
        val = Math.max(0.0001, Math.abs(-273.15 - item.value));
      } else if (val <= 0) {
        val = 1e-35;
      }
      const log10 = Math.log10(val);
      return {
        item,
        log10
      };
    });

    const logs = parsed.map(p => p.log10);
    const min = Math.min(...logs);
    const max = Math.max(...logs);

    return {
      logItems: parsed,
      minLog: min,
      maxLog: max
    };
  }, [items, dashboardId]);

  const rangeSpan = useMemo(() => {
    const span = maxLog - minLog;
    return span <= 0 ? 1 : span;
  }, [maxLog, minLog]);

  return (
    <div className="space-y-4 flex-1 overflow-y-auto pr-1">
      {/* Logarithmic Scale Concept Explainer Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-slate-900/50 border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Binary className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
              <span>Orders of Magnitude Spectrum (Log₁₀)</span>
              <Sparkles className="w-3 h-3 text-purple-400" />
            </h4>
            <p className="text-[11px] text-slate-400 font-mono">
              Spans {rangeSpan.toFixed(1)} orders of magnitude from 10^{minLog.toFixed(1)} to 10^{maxLog.toFixed(1)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20 self-stretch sm:self-auto justify-center">
          <span>Scale: 1 Decade = 10× Factor</span>
        </div>
      </div>

      {/* Item List with Log10 Bars */}
      <div className="space-y-3">
        {logItems.map(({ item, log10 }, idx) => {
          const isSelected = selectedEntity?.id === item.id;
          
          // Normalized percentage from 0 to 100% across the log range
          let barPct = ((log10 - minLog) / rangeSpan) * 100;
          if (barPct < 4) barPct = 4;
          if (barPct > 100) barPct = 100;

          const exponentFormatted = log10 >= 0 
            ? `+${log10.toFixed(1)}` 
            : log10.toFixed(1);

          return (
            <button
              key={item.id}
              onClick={() => {
                audioEngine.playClickSound();
                onSelect(item);
              }}
              className={`w-full text-left p-3.5 rounded-2xl transition-all border group cursor-pointer ${
                isSelected
                  ? 'bg-purple-950/40 border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.2)] ring-1 ring-purple-500/40'
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/15'
              }`}
            >
              {/* Header row */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xs font-mono font-bold text-slate-500 w-6 shrink-0">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-white tracking-wide group-hover:text-purple-200 transition-colors truncate block">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 truncate block">
                      {item.category} • {item.badge}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  {/* Scientific Exponent Pill */}
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-mono text-xs font-bold border border-purple-500/30">
                    10<sup>{exponentFormatted}</sup>
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-300 hidden sm:inline">
                    {item.displayValue}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-purple-400' : 'text-slate-600 group-hover:text-slate-400'}`} />
                </div>
              </div>

              {/* Logarithmic Progress Track with Subdivisions */}
              <div className="w-full h-3.5 rounded-full bg-black/60 border border-white/10 relative overflow-hidden flex items-center">
                {/* Visual decade guide ticks */}
                <div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-30">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-white/40" />
                  ))}
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${barPct}%` }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.03 }}
                  className={`h-full rounded-full ${
                    idx === 0
                      ? 'bg-gradient-to-r from-fuchsia-600 via-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                      : 'bg-gradient-to-r from-purple-700 via-indigo-500 to-cyan-400 opacity-90'
                  }`}
                />
              </div>

              {/* Bottom detail text */}
              <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Decade Power: 10^{exponentFormatted} {unitLabel}</span>
                <span className="text-slate-400 sm:hidden">{item.displayValue}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
