import React, { useState, useMemo, useEffect } from 'react';
import { ViewMode } from '../types';
import { 
  BarChart3, 
  Flame, 
  ThermometerSnowflake, 
  Mountain, 
  ShieldAlert, 
  Sun, 
  Map, 
  Orbit, 
  Activity, 
  Trophy, 
  Search, 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ArrowUpDown, 
  LayoutGrid, 
  List, 
  ChevronRight,
  Info,
  Binary,
  CircleDot,
  Hexagon
} from 'lucide-react';
import { TELEMETRY_DASHBOARDS, TelemetryDashboard, TelemetryEntity } from '../data/telemetryDashboardsData';
import { audioEngine } from '../utils/audioEngine';
import { motion, AnimatePresence } from 'motion/react';
import { TelemetryLogView } from './telemetry/TelemetryLogView';
import { TelemetryScatterView } from './telemetry/TelemetryScatterView';
import { TelemetryRadarView } from './telemetry/TelemetryRadarView';

interface DashboardsViewProps {
  onNavigate?: (mode: ViewMode) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sun,
  ShieldAlert,
  Map,
  Mountain,
  Flame,
  ThermometerSnowflake,
  Orbit,
  Activity,
  Trophy,
  BarChart3,
  Binary,
  CircleDot,
  Hexagon
};

export const DashboardsView: React.FC<DashboardsViewProps> = () => {
  const [selectedDashboardId, setSelectedDashboardId] = useState<string>('stars');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortAscending, setSortAscending] = useState<boolean>(false);
  const [viewStyle, setViewStyle] = useState<'bars' | 'log' | 'scatter' | 'radar' | 'grid' | 'table'>('bars');
  const [selectedEntity, setSelectedEntity] = useState<TelemetryEntity | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const currentDashboard = useMemo(() => {
    return TELEMETRY_DASHBOARDS.find(d => d.id === selectedDashboardId) || TELEMETRY_DASHBOARDS[0];
  }, [selectedDashboardId]);

  const totalCatalogedItems = useMemo(() => {
    return TELEMETRY_DASHBOARDS.reduce((acc, d) => acc + d.items.length, 0);
  }, []);

  // Terminate speech on unmount
  useEffect(() => {
    return () => {
      audioEngine.stopSpeech();
    };
  }, []);

  const filteredItems = useMemo(() => {
    let items = [...currentDashboard.items];
    
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      );
    }

    if (sortAscending) {
      items.sort((a, b) => a.value - b.value);
    } else {
      items.sort((a, b) => b.value - a.value);
    }

    return items;
  }, [currentDashboard, searchQuery, sortAscending]);

  const activeTopPerformer = useMemo(() => {
    if (selectedEntity && currentDashboard.items.some(i => i.id === selectedEntity.id)) {
      return selectedEntity;
    }
    return filteredItems[0] || currentDashboard.items[0];
  }, [selectedEntity, filteredItems, currentDashboard]);

  // Calculate maximum absolute value for bar percentage scaling
  const maxAbsValue = useMemo(() => {
    if (filteredItems.length === 0) return 1;
    if (currentDashboard.id === 'coldest') {
      // For coldest temperatures, relative offset from Absolute Zero (-273.15)
      const absDiffs = filteredItems.map(item => Math.abs(-273.15 - item.value));
      return Math.max(...absDiffs) || 1;
    }
    return Math.max(...filteredItems.map(item => Math.abs(item.value))) || 1;
  }, [filteredItems, currentDashboard]);

  const handleToggleSpeech = (entity: TelemetryEntity) => {
    if (isSpeaking) {
      audioEngine.stopSpeech();
      setIsSpeaking(false);
    } else {
      const speechText = `${entity.name}. ${entity.type}. Current reading: ${entity.displayValue}. ${entity.description} Comparative scale: ${entity.humanAnalogy}`;
      audioEngine.speak(speechText, () => setIsSpeaking(false));
      setIsSpeaking(true);
    }
  };

  const handleSelectDashboard = (id: string) => {
    audioEngine.playClickSound();
    audioEngine.stopSpeech();
    setIsSpeaking(false);
    setSelectedDashboardId(id);
    setSelectedEntity(null);
    setSearchQuery('');
  };

  const IconComponent = ICON_MAP[currentDashboard.iconName] || BarChart3;

  return (
    <div className="w-full h-full relative bg-[#020617] overflow-y-auto pt-44 sm:pt-48 md:pt-52 lg:pt-48 pb-40 px-4 sm:px-6 lg:px-8 text-white select-none" style={{ backgroundColor: '#020617' }}>
      <div className="max-w-7xl mx-auto space-y-10 mt-2 sm:mt-4">
        
        {/* Main Title Section - Placed with ample breathing room beneath the top navbar */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 pb-6 border-b border-white/[0.08]"
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${currentDashboard.accentGradient} flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0`}>
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 tracking-tight font-mono uppercase">
                  Cosmic Records & Rankings
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {totalCatalogedItems} Astrophysical Records
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-400 font-mono mt-1">
                Galactic Extremes, All-Time Cosmic Records, Benchmarks &amp; Comparative Leaderboards
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-stretch lg:self-auto justify-end">
            <span className="text-[11px] font-mono text-slate-400 px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 hidden sm:inline-block">
              Active Category: <strong className="text-cyan-300">{currentDashboard.title}</strong>
            </span>
          </div>
        </motion.div>

        {/* Dashboard Selection Category Buttons - Cleanly separated and positioned with generous spacing */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Select Telemetry Domain ({TELEMETRY_DASHBOARDS.length} Dashboards Available)</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
              Click any dashboard to switch astrophysical metrics
            </span>
          </div>

          {/* Scrollable / Wrap Responsive Category Pills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2.5 p-2 rounded-2xl bg-slate-950/70 backdrop-blur-2xl border border-white/[0.08] shadow-xl">
            {TELEMETRY_DASHBOARDS.map((dash) => {
              const Icon = ICON_MAP[dash.iconName] || BarChart3;
              const isActive = selectedDashboardId === dash.id;

              return (
                <button
                  key={dash.id}
                  onClick={() => handleSelectDashboard(dash.id)}
                  className={`relative p-3 rounded-xl text-left transition-all border group flex flex-col justify-between gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.25)] ring-1 ring-cyan-500/30'
                      : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-cyan-400/30 text-cyan-200 font-bold' : 'bg-white/5 text-slate-500'
                    }`}>
                      {dash.items.length}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold font-mono tracking-tight line-clamp-1 ${isActive ? 'text-cyan-200 font-black' : 'text-slate-300'}`}>
                      {dash.title.split('&')[0].trim()}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono line-clamp-1 mt-0.5">
                      {dash.unitLabel}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Control Bar (Search, Sort, View Modes) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${filteredItems.length} records in ${currentDashboard.title}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Controls: Sort Order & Layout View Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                audioEngine.playClickSound();
                setSortAscending(!sortAscending);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
              title="Toggle Sort Order"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">{sortAscending ? 'Ascending' : 'Descending'}</span>
            </button>

            <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10 gap-0.5">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setViewStyle('bars');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all flex items-center gap-1 cursor-pointer ${
                  viewStyle === 'bars' ? 'bg-cyan-500/30 text-cyan-300 shadow ring-1 ring-cyan-400/40' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title="Linear Telemetry Bar Chart"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="hidden xl:inline text-[10px] font-mono font-bold">Linear</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setViewStyle('log');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all flex items-center gap-1 cursor-pointer ${
                  viewStyle === 'log' ? 'bg-purple-500/30 text-purple-300 shadow ring-1 ring-purple-400/40' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title="Orders of Magnitude Logarithmic Spectrum (Log₁₀)"
              >
                <Binary className="w-4 h-4" />
                <span className="hidden xl:inline text-[10px] font-mono font-bold">Log₁₀</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setViewStyle('scatter');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all flex items-center gap-1 cursor-pointer ${
                  viewStyle === 'scatter' ? 'bg-cyan-500/30 text-cyan-300 shadow ring-1 ring-cyan-400/40' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title="2D Bubble Coordinate Plane"
              >
                <CircleDot className="w-4 h-4" />
                <span className="hidden xl:inline text-[10px] font-mono font-bold">Scatter</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setViewStyle('radar');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all flex items-center gap-1 cursor-pointer ${
                  viewStyle === 'radar' ? 'bg-purple-500/30 text-purple-300 shadow ring-1 ring-purple-400/40' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title="5-Axis Polar Radar Spider Profile"
              >
                <Hexagon className="w-4 h-4" />
                <span className="hidden xl:inline text-[10px] font-mono font-bold">Radar</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setViewStyle('grid');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all flex items-center gap-1 cursor-pointer ${
                  viewStyle === 'grid' ? 'bg-cyan-500/30 text-cyan-300 shadow ring-1 ring-cyan-400/40' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title="Bento Dossier Cards"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden xl:inline text-[10px] font-mono font-bold">Grid</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setViewStyle('table');
                }}
                className={`p-1.5 rounded-lg text-xs transition-all flex items-center gap-1 cursor-pointer ${
                  viewStyle === 'table' ? 'bg-cyan-500/30 text-cyan-300 shadow ring-1 ring-cyan-400/40' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                title="Comparative Data Matrix"
              >
                <List className="w-4 h-4" />
                <span className="hidden xl:inline text-[10px] font-mono font-bold">Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Interactive Deep Dossier / Top Performer Hero Card */}
          {activeTopPerformer && (
            <motion.div 
              key={activeTopPerformer.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-1 lg:col-span-4 flex flex-col"
            >
              <div className="p-6 md:p-8 rounded-3xl bg-slate-950/80 backdrop-blur-3xl border border-white/[0.08] shadow-2xl relative overflow-hidden flex flex-col justify-between h-full group">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-56 h-56 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-widest">
                      {activeTopPerformer.badge}
                    </span>
                    <button
                      onClick={() => handleToggleSpeech(activeTopPerformer)}
                      className={`p-2 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
                        isSpeaking 
                          ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200' 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                      title="Audio Speech Narration"
                    >
                      {isSpeaking ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
                      <span className="text-[10px]">{isSpeaking ? 'Speaking...' : 'Listen'}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.15)] border-2 border-white/20 flex items-center justify-center font-mono font-bold text-xs shrink-0"
                      style={{ backgroundColor: activeTopPerformer.color }}
                    >
                      <IconComponent className="w-6 h-6 text-white drop-shadow-md" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-black text-white font-mono tracking-tight">
                        {activeTopPerformer.name}
                      </h2>
                      <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                        {activeTopPerformer.type}
                      </p>
                    </div>
                  </div>

                  {/* Telemetry Reading Stat Box */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-1 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Telemetry Reading
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400">
                        {currentDashboard.unitLabel}
                      </span>
                    </div>
                    <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300 font-mono tracking-tight">
                      {activeTopPerformer.displayValue}
                    </p>
                    {activeTopPerformer.secondaryStat && (
                      <p className="text-xs text-slate-400 font-mono pt-1">
                        {activeTopPerformer.secondaryStat}
                      </p>
                    )}
                  </div>

                  {/* Description & Human Analogy */}
                  <div className="space-y-4 text-xs font-sans">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                        Astrophysical Overview
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {activeTopPerformer.description}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/20 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span>Human Intuition Analogy</span>
                      </span>
                      <p className="text-slate-300 italic text-[11px] leading-relaxed">
                        &quot;{activeTopPerformer.humanAnalogy}&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer: Discovery Archive */}
                <div className="mt-6 pt-4 border-t border-white/[0.08]">
                  <div className="flex items-start gap-2 text-[11px] text-slate-400 font-mono">
                    <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{activeTopPerformer.scientificDiscovery}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Right Column: Interactive Data Visualizer (Bars / Grid / Table) */}
          <div className="col-span-1 lg:col-span-8">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-950/80 backdrop-blur-3xl border border-white/[0.08] shadow-2xl h-full flex flex-col justify-between">
              
              {/* Header Info */}
              <div className="pb-4 mb-4 border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold font-mono text-white flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-cyan-400" />
                    <span>{currentDashboard.title}</span>
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    {currentDashboard.valueDescription}
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  {filteredItems.length} Entries
                </span>
              </div>

              {/* No items matching search state */}
              {filteredItems.length === 0 && (
                <div className="py-16 text-center text-slate-400 font-mono text-xs">
                  No telemetry entries found for &quot;{searchQuery}&quot; in this dashboard.
                </div>
              )}

              {/* VIEW 1: BAR CHART TELEMETRY VIEW */}
              {viewStyle === 'bars' && filteredItems.length > 0 && (
                <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                  {filteredItems.map((item, idx) => {
                    const isSelected = activeTopPerformer?.id === item.id;
                    let widthPct = 0;
                    
                    if (currentDashboard.id === 'coldest') {
                      // Scale relative to absolute zero
                      const diff = Math.abs(-273.15 - item.value);
                      widthPct = (diff / maxAbsValue) * 100;
                    } else {
                      widthPct = (Math.abs(item.value) / maxAbsValue) * 100;
                    }

                    if (widthPct < 3) widthPct = 3;
                    if (widthPct > 100) widthPct = 100;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          audioEngine.playClickSound();
                          setSelectedEntity(item);
                        }}
                        className={`w-full text-left p-3 rounded-2xl transition-all border group cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-950/40 border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30'
                            : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-end justify-between mb-1.5">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono font-bold text-slate-500 w-6">
                              {idx < 9 ? `0${idx + 1}` : idx + 1}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/[0.08] text-slate-400 hidden sm:inline-block">
                                {item.category}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-cyan-300">
                              {item.displayValue}
                            </span>
                            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-cyan-400' : 'text-slate-600 group-hover:text-slate-400'}`} />
                          </div>
                        </div>

                        {/* Animated Glowing Progress Bar */}
                        <div className="w-full h-3 rounded-full bg-black/50 border border-white/5 relative overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${widthPct}%` }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.04 }}
                            className={`absolute top-0 bottom-0 left-0 rounded-full ${
                              idx === 0
                                ? 'bg-gradient-to-r from-fuchsia-600 via-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                                : 'bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 opacity-85 shadow-[0_0_10px_rgba(99,102,241,0.3)]'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* VIEW 2: ORDERS OF MAGNITUDE LOGARITHMIC SPECTRUM */}
              {viewStyle === 'log' && filteredItems.length > 0 && (
                <TelemetryLogView
                  items={filteredItems}
                  selectedEntity={activeTopPerformer}
                  onSelect={(item) => setSelectedEntity(item)}
                  unitLabel={currentDashboard.unitLabel}
                  dashboardId={currentDashboard.id}
                />
              )}

              {/* VIEW 3: 2D BUBBLE & COORDINATE PLANE SCATTER VIEW */}
              {viewStyle === 'scatter' && filteredItems.length > 0 && (
                <TelemetryScatterView
                  items={filteredItems}
                  selectedEntity={activeTopPerformer}
                  onSelect={(item) => setSelectedEntity(item)}
                  unitLabel={currentDashboard.unitLabel}
                />
              )}

              {/* VIEW 4: 5-AXIS POLAR SPIDER RADAR PROFILE */}
              {viewStyle === 'radar' && filteredItems.length > 0 && (
                <TelemetryRadarView
                  items={filteredItems}
                  selectedEntity={activeTopPerformer}
                  onSelect={(item) => setSelectedEntity(item)}
                  dashboardTitle={currentDashboard.title}
                />
              )}

              {/* VIEW 5: BENTO GRID VIEW */}
              {viewStyle === 'grid' && filteredItems.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1 overflow-y-auto pr-1">
                  {filteredItems.map((item, idx) => {
                    const isSelected = activeTopPerformer?.id === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          audioEngine.playClickSound();
                          setSelectedEntity(item);
                        }}
                        className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between gap-3 group cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-950/40 border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30'
                            : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/15'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                              Rank #{idx + 1}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed font-sans">
                            {item.description}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-300">
                            {item.displayValue}
                          </span>
                          <span className="text-[10px] font-mono text-purple-300">
                            {item.badge}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* VIEW 3: COMPARATIVE TABLE VIEW */}
              {viewStyle === 'table' && filteredItems.length > 0 && (
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-400 uppercase text-[10px]">
                        <th className="py-2.5 px-3">#</th>
                        <th className="py-2.5 px-3">Entity Name</th>
                        <th className="py-2.5 px-3">Classification</th>
                        <th className="py-2.5 px-3 text-right">Telemetry Value</th>
                        <th className="py-2.5 px-3">Notable Badge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredItems.map((item, idx) => {
                        const isSelected = activeTopPerformer?.id === item.id;
                        return (
                          <tr
                            key={item.id}
                            onClick={() => {
                              audioEngine.playClickSound();
                              setSelectedEntity(item);
                            }}
                            className={`cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-cyan-500/20 text-white font-bold'
                                : 'hover:bg-white/5 text-slate-300'
                            }`}
                          >
                            <td className="py-2.5 px-3 text-slate-500">{idx + 1}</td>
                            <td className="py-2.5 px-3 text-white font-semibold">{item.name}</td>
                            <td className="py-2.5 px-3 text-slate-400">{item.category}</td>
                            <td className="py-2.5 px-3 text-right text-cyan-300 font-bold">{item.displayValue}</td>
                            <td className="py-2.5 px-3">
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                                {item.badge}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Bottom Quick Metric Tip */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
                <span>Tip: Click any celestial entity to open its comprehensive dossier and hear voice narration.</span>
                <span className="text-cyan-400">Scale: {currentDashboard.unitLabel}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
