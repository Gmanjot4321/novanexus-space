import React, { useState, useEffect } from 'react';
import { CelestialBody, ViewMode, UniverseComponent } from '../types';
import { audioEngine } from '../utils/audioEngine';
import { UNIVERSE_COMPONENTS } from '../data/universeData';
import { 
  fetchAllUniverseComponents, getStoredPlanetTextures, 
  savePlanetTexture, isSupabaseConnected,
  syncUniverseComponentsToSupabase
} from '../utils/supabaseClient';
import { 
  Orbit, Sparkles, ShieldAlert, BookOpen, Scale, Search, 
  Volume2, VolumeX, Radio, X, ChevronRight, Info, Layers, 
  ExternalLink, Compass, Eye, Image as ImageIcon, Database, Check, RefreshCw, Copy, Upload,
  Maximize2, Minimize2, Satellite, Clock, Home, Menu
} from 'lucide-react';

interface DashboardUIProps {
  currentMode: ViewMode;
  onSelectMode: (mode: ViewMode) => void;
  selectedBody: CelestialBody | null;
  onSelectBody: (body: CelestialBody | null) => void;
  bodies: CelestialBody[];
  currentFact: string;
  onCycleFact: () => void;
  onStartComparison?: (entityAId: string, entityBId?: string) => void;
}

export const DashboardUI: React.FC<DashboardUIProps> = ({
  currentMode,
  onSelectMode,
  selectedBody,
  onSelectBody,
  bodies,
  currentFact,
  onCycleFact,
  onStartComparison,
}) => {
  const [infoTab, setInfoTab] = useState<'overview' | 'geology' | 'moons' | 'atmosphere'>('overview');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isTextureModalOpen, setIsTextureModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<'all' | 'planet' | 'moon' | 'black_hole' | 'exoplanet' | 'star' | 'galaxy_nebula'>('all');
  const [selectedUniversalEntity, setSelectedUniversalEntity] = useState<UniverseComponent | null>(null);
  const [isDossierMinimized, setIsDossierMinimized] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Reset minimized state when a new body is selected
  useEffect(() => {
    if (selectedBody) {
      setIsDossierMinimized(false);
    }
  }, [selectedBody?.id]);

  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isAmbientOn, setIsAmbientOn] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Universe Catalog (Integrated with Supabase expansion)
  const [universeCatalog, setUniverseCatalog] = useState<UniverseComponent[]>(UNIVERSE_COMPONENTS);

  // Custom Texture State
  const [targetPlanetForTexture, setTargetPlanetForTexture] = useState<string>('earth');
  const [customTextureUrl, setCustomTextureUrl] = useState<string>('');
  const [savedTextures, setSavedTextures] = useState<Record<string, string>>({});
  const [textureSaveSuccess, setTextureSaveSuccess] = useState<boolean>(false);

  // Supabase Universe Sync State
  const [isSyncingSupabase, setIsSyncingSupabase] = useState<boolean>(false);
  const [supabaseSyncResult, setSupabaseSyncResult] = useState<{ success?: boolean; message?: string } | null>(null);
  const [showSqlGuide, setShowSqlGuide] = useState<boolean>(false);
  const [copiedSql, setCopiedSql] = useState<boolean>(false);

  useEffect(() => {
    fetchAllUniverseComponents().then(components => {
      setUniverseCatalog(components);
    });
    setSavedTextures(getStoredPlanetTextures());
  }, []);

  // Global Escape key listener to deselect planet or close active modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedUniversalEntity) {
          setSelectedUniversalEntity(null);
        } else if (isTextureModalOpen) {
          setIsTextureModalOpen(false);
        } else if (isSearchOpen) {
          setIsSearchOpen(false);
        } else if (selectedBody) {
          onSelectBody(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedUniversalEntity, isTextureModalOpen, isSearchOpen, selectedBody, onSelectBody]);

  // Sync Universe catalog to Supabase
  const handleSyncSupabaseUniverse = async () => {
    audioEngine.playClickSound();
    setIsSyncingSupabase(true);
    setSupabaseSyncResult(null);
    try {
      const res = await syncUniverseComponentsToSupabase();
      if (res.success) {
        setSupabaseSyncResult({
          success: true,
          message: `Successfully synchronized ${res.count} universe components to Supabase database table!`
        });
        const refreshed = await fetchAllUniverseComponents();
        setUniverseCatalog(refreshed);
      } else {
        setSupabaseSyncResult({
          success: false,
          message: res.error || 'Failed to sync with Supabase. Check credentials or table schema.'
        });
      }
    } catch (err: any) {
      setSupabaseSyncResult({
        success: false,
        message: err?.message || 'Synchronization exception occurred.'
      });
    } finally {
      setIsSyncingSupabase(false);
    }
  };

  // Toggle Mute
  const handleToggleMute = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
    if (muted) {
      setIsSpeaking(false);
      setIsAmbientOn(false);
    }
  };

  // Toggle Space Ambient Drone
  const handleToggleAmbient = () => {
    audioEngine.playClickSound();
    const playing = audioEngine.toggleAmbient();
    setIsAmbientOn(playing);
    if (playing && isMuted) {
      setIsMuted(false);
    }
  };

  // Voice narration for fact
  const handleNarrateFact = () => {
    if (isSpeaking) {
      audioEngine.stopSpeech();
      setIsSpeaking(false);
    } else if (selectedBody && currentFact) {
      const text = `${selectedBody.name}. ${currentFact}`;
      audioEngine.speak(text, () => setIsSpeaking(false));
      setIsSpeaking(true);
    }
  };

  // Save custom texture
  const handleSaveCustomTexture = async () => {
    if (!customTextureUrl.trim()) return;
    audioEngine.playClickSound();
    await savePlanetTexture(targetPlanetForTexture, customTextureUrl.trim());
    setSavedTextures(getStoredPlanetTextures());
    setTextureSaveSuccess(true);
    setTimeout(() => setTextureSaveSuccess(false), 3000);
  };

  // Filter universe components across search query and category
  const filteredUniverseItems = (universeCatalog || []).filter((item) => {
    if (!item) return false;
    
    // Convert the detailed 'type' to our high-level UI filter tabs
    let itemTypeFilterStr = (item.type || '').toLowerCase().replace(/[\s-]/g, '_');
    if (itemTypeFilterStr === 'nebula' || itemTypeFilterStr === 'galaxy') itemTypeFilterStr = 'galaxy_nebula';
    
    if (searchCategory !== 'all' && itemTypeFilterStr !== searchCategory) return false;
    
    if (!searchQuery || !searchQuery.trim()) return true;
    const q = (searchQuery || '').toLowerCase().trim();
    const name = (item.name || '').toLowerCase();
    const cat = (item.category || '').toLowerCase();
    const desc = (item.description || '').toLowerCase();
    const badge = (item.badge || '').toLowerCase();
    const type = (item.type || '').toLowerCase();
    const stat = (item.highlightStat || '').toLowerCase();
    return (
      name.includes(q) ||
      cat.includes(q) ||
      desc.includes(q) ||
      badge.includes(q) ||
      type.includes(q) ||
      stat.includes(q)
    );
  });

  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex flex-col justify-between p-2 sm:p-3 md:p-4 select-none overflow-hidden">
      {/* Top Floating Glass Navigation Header */}
      <header className="pointer-events-auto flex items-center justify-between gap-1.5 sm:gap-2 w-full max-w-full">
        {/* Logo and Brand Button (Click takes back to Home Overview) */}
        <button
          onClick={() => {
            audioEngine.playClickSound();
            audioEngine.stopSpeech();
            setIsSpeaking(false);
            setIsMobileMenuOpen(false);
            onSelectMode('home');
          }}
          className={`shrink-0 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-xl sm:rounded-2xl bg-[#020617]/90 backdrop-blur-2xl border transition-all shadow-xl ring-1 ring-white/5 cursor-pointer group ${
            currentMode === 'home'
              ? 'border-cyan-400/60 shadow-cyan-500/20 bg-cyan-950/20'
              : 'border-white/[0.16] hover:border-cyan-400/40 hover:bg-white/5'
          }`}
          title="NovaNexus Universe — Click to return to Home Overview"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-cyan-500/30 shrink-0 group-hover:scale-105 transition-transform">
            <Orbit className="w-3.5 h-3.5 text-white animate-spin-slow" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="text-[11px] sm:text-xs font-bold text-white tracking-wider uppercase font-mono block">
                NOVANEXUS
              </span>
              <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hidden md:inline-block">
                HOME
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] text-cyan-400/90 font-mono tracking-wider flex items-center gap-1">
              <span>COSMOS SIM</span>
              {isSupabaseConnected() && (
                <span className="text-[7px] px-1 py-0.1 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30 hidden xl:inline-block">
                  SYNC
                </span>
              )}
            </span>
          </div>
        </button>

        {/* Core Presentation View Tabs */}
        <nav className="flex-1 flex items-center justify-center min-w-0 mx-1 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-0.5 p-0.5 sm:p-1 rounded-xl sm:rounded-2xl bg-[#020617]/90 backdrop-blur-2xl border border-white/[0.16] shadow-xl shadow-black/80 ring-1 ring-white/5 shrink-0">
            {[
              { id: 'home' as ViewMode, label: 'Home Overview', shortLabel: 'Home', icon: Home },
              { id: 'solar_system' as ViewMode, label: 'Solar System 3D', shortLabel: 'Solar 3D', icon: Orbit },
              { id: 'relativity_lab' as ViewMode, label: 'Relativity & Time', shortLabel: 'Relativity', icon: Clock },
              { id: 'phenomena' as ViewMode, label: 'Cosmic Phenomena', shortLabel: 'Phenomena', icon: Sparkles },
              { id: 'space_hub' as ViewMode, label: 'NASA Space Hub', shortLabel: 'NASA Hub', icon: Satellite },
              { id: 'neo_radar' as ViewMode, label: 'NEO Defense Radar', shortLabel: 'NEO Radar', icon: ShieldAlert },
              { id: 'knowledge_base' as ViewMode, label: 'Galactic Codex', shortLabel: 'Codex', icon: BookOpen },
              { id: 'comparison_lab' as ViewMode, label: 'Comparison Lab', shortLabel: 'Compare', icon: Scale },
              { id: 'dashboards' as ViewMode, label: 'Cosmic Records', shortLabel: 'Records', icon: Layers },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = currentMode === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    audioEngine.playClickSound();
                    audioEngine.stopSpeech();
                    setIsSpeaking(false);
                    onSelectMode(tab.id);
                  }}
                  className={`relative px-1.5 sm:px-2 md:px-2.5 py-1 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-mono transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/30 via-indigo-600/30 to-purple-600/30 text-white border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.35)] font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                  title={`Switch to ${tab.label}`}
                >
                  <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${isActive ? 'text-cyan-300 animate-pulse' : 'text-slate-400'}`} />
                  <span className="hidden 2xl:inline">{tab.label}</span>
                  <span className="2xl:hidden">{tab.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Global Utilities (Ambient Drone, SFX Audio, Search & Mobile Menu) */}
        <div className="shrink-0 flex items-center gap-1 sm:gap-1.5">
          {/* Ambient Drone Toggle */}
          <button
            id="ambient-audio-drone-toggle"
            onClick={handleToggleAmbient}
            className={`p-1.5 sm:px-2 sm:py-1.5 rounded-lg sm:rounded-xl border transition-all flex items-center gap-1 text-[11px] font-mono backdrop-blur-2xl cursor-pointer ${
              isAmbientOn
                ? 'bg-purple-500/25 border-purple-400/60 text-purple-200 shadow-[0_0_14px_rgba(168,85,247,0.4)] ring-1 ring-purple-400/40'
                : 'bg-[#020617]/90 border-white/[0.16] text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            title={isAmbientOn ? 'Cosmic Space Drone Active. Click to stop.' : 'Turn on Space Audio Drone'}
          >
            <Radio className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${isAmbientOn ? 'animate-pulse text-purple-300' : ''}`} />
            {isAmbientOn && (
              <span className="flex items-end gap-0.5 h-2.5 px-0.5">
                <span className="w-0.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                <span className="w-0.5 h-2.5 bg-purple-300 rounded-full animate-bounce" />
                <span className="w-0.5 h-1 bg-purple-400 rounded-full animate-pulse" />
              </span>
            )}
            <span className="hidden xl:inline-block text-[10px] font-semibold">
              {isAmbientOn ? 'DRONE' : 'DRONE'}
            </span>
          </button>

          {/* Mute SFX Toggle */}
          <button
            onClick={handleToggleMute}
            className={`p-1.5 sm:p-1.5 rounded-lg sm:rounded-xl border transition-all backdrop-blur-2xl cursor-pointer ${
              isMuted
                ? 'bg-red-500/20 border-red-500/40 text-red-300'
                : 'bg-[#020617]/90 border-white/[0.16] text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            title="Toggle Audio Effects"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Universal Search Trigger */}
          <button
            onClick={() => {
              audioEngine.playClickSound();
              setIsSearchOpen(true);
            }}
            className="flex items-center gap-1 p-1.5 sm:px-2 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#020617]/90 border border-white/[0.16] hover:border-cyan-400/50 text-slate-300 hover:text-white text-[11px] font-mono transition-all backdrop-blur-2xl shadow-xl cursor-pointer"
            title="Search the Universe (Planets, Stars, Quasars, Phenomena)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="hidden xl:inline-block text-[10px]">SEARCH</span>
          </button>

          {/* Mobile Menu Dropdown Toggle (<lg) */}
          <button
            onClick={() => {
              audioEngine.playClickSound();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="lg:hidden p-1.5 rounded-lg bg-[#020617]/90 border border-white/[0.16] text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer"
            title="Toggle All Views Navigation Menu"
          >
            <Menu className="w-4 h-4 text-cyan-300" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed top-14 sm:top-16 left-3 right-3 z-50 p-3 rounded-2xl bg-[#020617]/95 backdrop-blur-2xl border border-cyan-500/40 shadow-2xl space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest px-2 py-1 border-b border-white/10 flex items-center justify-between">
            <span>Cosmic Viewport Selector</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white p-1">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {[
              { id: 'home' as ViewMode, label: 'Home Overview', icon: Home },
              { id: 'solar_system' as ViewMode, label: 'Solar System 3D', icon: Orbit },
              { id: 'relativity_lab' as ViewMode, label: 'Relativity Lab', icon: Clock },
              { id: 'phenomena' as ViewMode, label: 'Cosmic Phenomena', icon: Sparkles },
              { id: 'space_hub' as ViewMode, label: 'NASA Space Hub', icon: Satellite },
              { id: 'neo_radar' as ViewMode, label: 'NEO Defense Radar', icon: ShieldAlert },
              { id: 'knowledge_base' as ViewMode, label: 'Galactic Codex', icon: BookOpen },
              { id: 'comparison_lab' as ViewMode, label: 'Comparison Lab', icon: Scale },
              { id: 'dashboards' as ViewMode, label: 'Cosmic Records', icon: Layers },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = currentMode === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    audioEngine.playClickSound();
                    audioEngine.stopSpeech();
                    setIsSpeaking(false);
                    onSelectMode(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-2.5 py-2 rounded-xl text-xs font-mono flex items-center gap-2 text-left transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-300 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Center/Lower Section: Dynamic Floating Dossier Card (Only in Solar System mode when body selected) */}
      {currentMode === 'solar_system' && selectedBody && isDossierMinimized && (
        <div className="pointer-events-auto fixed top-20 right-3 sm:right-6 z-30 px-3.5 py-2 rounded-2xl bg-[#020617]/90 backdrop-blur-2xl border border-white/[0.16] shadow-2xl flex items-center gap-2.5 text-xs font-mono animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-white/10">
          <span
            className="w-2.5 h-2.5 rounded-full shadow"
            style={{ backgroundColor: selectedBody.color, boxShadow: `0 0 8px ${selectedBody.color}` }}
          />
          <span className="font-bold text-white tracking-wide">{selectedBody.name}</span>
          <span className="text-[10px] text-cyan-400 uppercase tracking-wider">{selectedBody.type}</span>
          <div className="w-[1px] h-3.5 bg-white/20" />
          <button
            onClick={() => {
              audioEngine.playClickSound();
              setIsDossierMinimized(false);
            }}
            className="p-1 rounded-lg text-cyan-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Expand Full Celestial Dossier"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => {
              audioEngine.playClickSound(500);
              onSelectBody(null);
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/20 transition-colors"
            title="Deselect (Esc)"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {currentMode === 'solar_system' && selectedBody && !isDossierMinimized && (
        <div 
          className="pointer-events-auto fixed top-20 right-3 sm:right-6 z-30 w-full sm:w-[390px] max-w-[calc(100vw-1.5rem)] rounded-3xl bg-[#020617]/85 backdrop-blur-2xl border border-white/[0.16] shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300 ring-1 ring-white/10"
          style={{ maxHeight: 'calc(100vh - 6.5rem)' }}
        >
          {/* Card Header */}
          <div className="p-3.5 sm:p-4 border-b border-white/[0.08] flex items-start justify-between bg-white/[0.02]">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shadow-lg"
                  style={{ backgroundColor: selectedBody.color, boxShadow: `0 0 10px ${selectedBody.color}` }}
                />
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                  {selectedBody.type}
                </span>
                {selectedBody.parentBody && (
                  <span className="text-[9px] font-mono text-slate-400">
                    // Orbiting {selectedBody.parentBody.toUpperCase()}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-white tracking-wide mt-0.5">
                {selectedBody.name}
              </h2>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Voice Narration Button */}
              <button
                onClick={handleNarrateFact}
                className={`p-1.5 rounded-xl border transition-all ${
                  isSpeaking
                    ? 'bg-cyan-500/30 border-cyan-400 text-cyan-300 animate-pulse'
                    : 'bg-white/5 border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title={isSpeaking ? 'Stop Audio Tour' : 'Play Voice Narration'}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>

              {/* Direct Compare Button */}
              {onStartComparison && (
                <button
                  onClick={() => {
                    audioEngine.playClickSound();
                    onStartComparison(selectedBody.id, 'earth');
                  }}
                  className="px-2.5 py-1 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-300 text-[10px] font-mono transition-all flex items-center gap-1"
                  title="Compare this body in Comparison Lab"
                >
                  <Scale className="w-3 h-3" />
                  <span>Compare</span>
                </button>
              )}

              {/* Minimize to compact pill */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setIsDossierMinimized(true);
                }}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/[0.08] text-slate-400 hover:text-white transition-all"
                title="Minimize Dossier"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>

              {/* Explicit Deselect Planet Button */}
              <button
                onClick={() => {
                  audioEngine.playClickSound(500);
                  onSelectBody(null);
                }}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-red-500/20 border border-white/[0.08] hover:border-red-500/40 text-slate-400 hover:text-red-300 transition-all"
                title="Deselect planet and close dossier (Shortcut: Esc or click empty space)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Satellites / Host Navigation Bar */}
          {(() => {
            const childMoons = bodies.filter(b => b.parentBody === selectedBody.id);
            if (childMoons.length > 0) {
              return (
                <div className="px-3 py-1.5 bg-cyan-950/20 border-b border-white/[0.08] flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono no-scrollbar">
                  <span className="text-slate-400 shrink-0 text-[9px] uppercase tracking-wider">Moons:</span>
                  {childMoons.map(moon => (
                    <button
                      key={moon.id}
                      onClick={() => {
                        audioEngine.playClickSound();
                        onSelectBody(moon);
                      }}
                      className="px-2 py-0.5 rounded-lg bg-white/5 hover:bg-cyan-500/30 border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-200 transition-all flex items-center gap-1 shrink-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: moon.color }} />
                      <span>{moon.name}</span>
                    </button>
                  ))}
                </div>
              );
            }
            if (selectedBody.parentBody) {
              const host = bodies.find(b => b.id === selectedBody.parentBody);
              if (host) {
                return (
                  <div className="px-3 py-1.5 bg-purple-950/20 border-b border-white/[0.08] flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-400 text-[9px] uppercase tracking-wider">Host Planet:</span>
                    <button
                      onClick={() => {
                        audioEngine.playClickSound();
                        onSelectBody(host);
                      }}
                      className="px-2 py-0.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-200 flex items-center gap-1 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: host.color }} />
                      <span>Return to {host.name} ↗</span>
                    </button>
                  </div>
                );
              }
            }
            return null;
          })()}

          {/* Sub-Tabs */}
          <div className="flex border-b border-white/[0.08] bg-white/[0.02] p-1">
            {(['overview', 'geology', 'moons', 'atmosphere'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  audioEngine.playClickSound();
                  setInfoTab(tab);
                }}
                className={`flex-1 py-1.5 rounded-lg text-[11px] font-mono uppercase tracking-wider transition-all ${
                  infoTab === tab
                    ? 'bg-white/10 text-white font-bold border border-white/[0.12] shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Body */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs">
            {/* OVERVIEW TAB */}
            {infoTab === 'overview' && (
              <div className="space-y-3">
                <p className="text-slate-300 leading-relaxed font-sans">
                  {selectedBody.summary || selectedBody.educationalFacts?.[0] || selectedBody.humanAnalogy}
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Radius</span>
                    <span className="text-white font-bold block">{selectedBody.radiusKm.toLocaleString()} km</span>
                    <span className="text-[9px] text-slate-400 block truncate font-sans">
                      {selectedBody.id === 'earth' ? '1.00 Earth radii' : `${(selectedBody.radiusKm / 6371).toFixed(2)}x Earth`}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Mean Temp</span>
                    {(() => {
                      const mean = selectedBody.surfaceTempC?.mean ?? selectedBody.meanTempC;
                      if (mean === undefined || mean === null) {
                        return <span className="text-white font-bold block">N/A</span>;
                      }
                      const prefix = mean > 0 && mean < 1000 ? '+' : '';
                      const rangeStr = selectedBody.surfaceTempC && selectedBody.surfaceTempC.min !== selectedBody.surfaceTempC.max
                        ? `${selectedBody.surfaceTempC.min}° to ${selectedBody.surfaceTempC.max > 1000 ? selectedBody.surfaceTempC.max.toLocaleString() : selectedBody.surfaceTempC.max}°C`
                        : `${Math.round(mean * 9/5 + 32)}°F`;

                      return (
                        <>
                          <span className="text-white font-bold block" title={selectedBody.surfaceTempC ? `Thermal range: ${selectedBody.surfaceTempC.min}°C to ${selectedBody.surfaceTempC.max}°C` : undefined}>
                            {prefix}{mean.toLocaleString()}°C
                          </span>
                          <span className="text-[9px] text-slate-400 block truncate font-sans">
                            {rangeStr}
                          </span>
                        </>
                      );
                    })()}
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Day Length</span>
                    {(() => {
                      const hours = selectedBody.rotationalPeriodHours ?? selectedBody.dayLengthHours;
                      if (hours === undefined || hours === null || isNaN(hours)) {
                        return <span className="text-white font-bold block">N/A</span>;
                      }
                      const abs = Math.abs(hours);
                      const isRetro = hours < 0;

                      let main = `${abs.toFixed(1)}h`;
                      let sub = isRetro ? 'Retrograde spin' : `${(abs / 24).toFixed(2)} Earth d`;

                      if (selectedBody.id === 'earth') {
                        main = '23.9h';
                        sub = '23h 56m 04s';
                      } else if (selectedBody.id === 'mars') {
                        main = '24.6h';
                        sub = '1 Sol (24h 37m)';
                      } else if (selectedBody.id === 'jupiter') {
                        main = '9.9h';
                        sub = 'Fastest spin in system';
                      } else if (abs >= 72) {
                        const days = (abs / 24).toFixed(1);
                        main = `${days} Earth d`;
                        sub = `${Math.round(abs).toLocaleString()}h${isRetro ? ' • retro' : ''}`;
                      }

                      return (
                        <>
                          <span className="text-white font-bold block" title={`${selectedBody.rotationalPeriodHours ?? hours} Earth hours${isRetro ? ' (Retrograde rotation)' : ''}`}>
                            {main}
                          </span>
                          <span className="text-[9px] text-slate-400 block truncate font-sans">
                            {sub}
                          </span>
                        </>
                      );
                    })()}
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Solar Orbit</span>
                    {(() => {
                      const days = selectedBody.orbitalPeriodDays;
                      if (days === 0) {
                        return (
                          <>
                            <span className="text-white font-bold block">Galactic</span>
                            <span className="text-[9px] text-slate-400 block truncate font-sans">~230M yr orbit</span>
                          </>
                        );
                      }
                      const main = days >= 365 ? `${(days / 365.25).toFixed(1)} yr` : `${days} d`;
                      const sub = days >= 365 ? `${days.toLocaleString()} Earth d` : `${(days / 365.25).toFixed(2)} Earth yr`;
                      return (
                        <>
                          <span className="text-white font-bold block" title={`${days} Earth days`}>
                            {main}
                          </span>
                          <span className="text-[9px] text-slate-400 block truncate font-sans">
                            {sub}
                          </span>
                        </>
                      );
                    })()}
                  </div>
                </div>

                {/* Engaging Witty Fact Box */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      <span>Cosmic Curiosity</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleNarrateFact}
                        className={`p-1 rounded-lg border text-[10px] transition-all ${
                          isSpeaking
                            ? 'bg-cyan-500/30 border-cyan-400 text-cyan-300'
                            : 'bg-white/5 border-white/[0.08] text-slate-400 hover:text-white'
                        }`}
                        title="Speak fact"
                      >
                        {isSpeaking ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
                      </button>
                      <button
                        onClick={() => {
                          audioEngine.playClickSound();
                          onCycleFact();
                        }}
                        className="px-2 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-mono text-slate-300 hover:text-white"
                      >
                        Next Fact
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-200 font-sans italic leading-relaxed">
                    "{currentFact}"
                  </p>
                </div>
              </div>
            )}

            {/* GEOLOGY TAB */}
            {infoTab === 'geology' && (
              <div className="space-y-3 font-sans">
                <div className="p-3 rounded-xl bg-white/5 border border-white/[0.08] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 block tracking-wider">
                    Core &amp; Internal Structure
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {(selectedBody as any).geology?.core || `The dense inner core of ${selectedBody.name} determines its magnetic field and gravitational footprint.`}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/[0.08] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-purple-400 block tracking-wider">
                    Mantle &amp; Volatiles
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {(selectedBody as any).geology?.mantle || `A thick layer of planetary material lies beneath the crust of ${selectedBody.name}.`}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/[0.08] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-400 block tracking-wider">
                    Surface Crust
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {(selectedBody as any).geology?.crust || `The outermost surface of ${selectedBody.name}, exposed to the void of space.`}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400">
                  <span className="text-slate-300 block font-semibold mb-0.5">Mass Estimate:</span>
                  <span>{selectedBody.massKg} kg</span>
                </div>
              </div>
            )}

            {/* MOONS TAB */}
            {infoTab === 'moons' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-bold text-white">
                    {selectedBody.totalMoonsCount} Total Recognized Moons
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">
                    IAU Official Registry
                  </span>
                </div>

                {/* Major Moons List */}
                {selectedBody.majorMoons.length > 0 ? (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Primary Satellites (Click to compare):
                    </span>
                    {selectedBody.majorMoons.map((m) => (
                      <div
                        key={m.name}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/[0.08] hover:border-cyan-400/50 transition-colors space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-300">{m.name}</span>
                          <span className="text-[10px] font-mono text-slate-400">{m.radiusKm} km</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">{m.peculiarity}</p>
                        
                        {/* Direct Compare Moon Action Button */}
                        {onStartComparison && (
                          <button
                            onClick={() => {
                              audioEngine.playClickSound();
                              const moonComparableId = (m?.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                              onStartComparison(moonComparableId, 'earth');
                            }}
                            className="mt-1 w-full py-1 px-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 text-[10px] font-mono text-cyan-300 flex items-center justify-center gap-1.5 transition-all"
                          >
                            <Scale className="w-3 h-3" />
                            <span>Compare {m.name} in Lab (1v1)</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 font-mono italic p-3 text-center">
                    No major natural satellites orbiting this body.
                  </p>
                )}

                {/* Minor Moons Note */}
                {selectedBody.minorMoonsSummary && (
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-slate-400">
                    {selectedBody.minorMoonsSummary}
                  </div>
                )}
              </div>
            )}

            {/* ATMOSPHERE TAB */}
            {infoTab === 'atmosphere' && (
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                  Chemical Composition:
                </span>
                <div className="space-y-1.5">
                  {selectedBody.atmosphere.map((chem) => (
                    <div
                      key={chem}
                      className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/[0.08] text-xs font-mono"
                    >
                      <span className="text-white">{chem.split(':')[0]}</span>
                      <span className="text-cyan-400">{chem.split(':')[1] || 'Predominant'}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] text-slate-300 font-mono">
                  <span className="text-white font-bold block mb-1">Discovery Archive:</span>
                  {selectedBody.historicalDiscovery}
                </div>
              </div>
            )}
          </div>

          {/* Card Footer: Next Fact & Return to Full Solar System */}
          <div className="p-2.5 bg-white/[0.04] border-t border-white/[0.08] flex items-center justify-between gap-2">
            <button
              onClick={() => {
                audioEngine.playClickSound();
                onCycleFact();
              }}
              className="flex-1 py-2 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/[0.08] text-slate-300 text-[11px] font-mono transition-all flex items-center justify-center gap-1.5"
              title="Read next educational or curiosity fact about this celestial body"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Next Fact</span>
            </button>
            <button
              onClick={() => {
                audioEngine.playClickSound(500);
                onSelectBody(null);
              }}
              className="py-2 px-3 rounded-xl bg-white/5 hover:bg-red-500/20 border border-white/[0.08] hover:border-red-500/30 text-slate-400 hover:text-red-300 text-[11px] font-mono transition-all flex items-center justify-center gap-1.5"
              title="Return to full solar system orbit view (Shortcut: Esc or click space)"
            >
              <X className="w-3.5 h-3.5" />
              <span>Deselect (Esc)</span>
            </button>
          </div>
        </div>
      )}

      {/* Global Expanded "Search Universe" Modal */}
      {isSearchOpen && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="w-full max-w-2xl max-h-[85vh] rounded-3xl bg-[#020617]/70 border border-white/[0.12] p-6 shadow-2xl flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-cyan-400" />
                <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-white">
                  Universal Components Catalog
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {universeCatalog.length} Tracked Celestial Entities
                </span>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <input
              type="text"
              autoFocus
              placeholder="Search across whole universe: planets, moons, supermassive black holes, exoplanets, galaxies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/[0.08] text-sm font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
              {[
                { id: 'all', label: 'All Catalog' },
                { id: 'moon', label: 'Moons' },
                { id: 'planet', label: 'Planets' },
                { id: 'black_hole', label: 'Black Holes' },
                { id: 'exoplanet', label: 'Exoplanets' },
                { id: 'star', label: 'Stars' },
                { id: 'galaxy_nebula', label: 'Galaxies & Nebulae' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    audioEngine.playClickSound();
                    setSearchCategory(cat.id as any);
                  }}
                  className={`px-3 py-1 rounded-xl whitespace-nowrap transition-all border ${
                    searchCategory === cat.id
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 font-bold'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Scrollable Universe Components List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 max-h-[50vh]">
              {filteredUniverseItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-white font-mono">{item.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-white/10 text-cyan-300 border border-white/[0.08]">
                        {(item.category || '').replace(/_/g, ' ').toUpperCase()}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {item.distanceLightYears ? `${item.distanceLightYears} LY` : 'Solar System'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 font-sans">
                      {item.description}
                    </p>
                    <span className="text-[10px] font-mono text-amber-400/90 block mt-1">
                      {item.highlightStat}
                    </span>
                  </div>

                  {/* Actions for this entity */}
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Compare in Lab Button */}
                    {item.comparableId && onStartComparison && (
                      <button
                        onClick={() => {
                          audioEngine.playClickSound();
                          onStartComparison(item.comparableId!, 'earth');
                          setIsSearchOpen(false);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-300 text-xs font-mono transition-all flex items-center gap-1.5 shadow"
                        title="Directly compare in Comparison Lab"
                      >
                        <Scale className="w-3.5 h-3.5" />
                        <span>Compare 1v1</span>
                      </button>
                    )}

                    {/* View in 3D Solar System Button if applicable */}
                    {item.solarSystemBodyId && (
                      <button
                        onClick={() => {
                          audioEngine.playClickSound();
                          const found = bodies.find(b => b.id === item.solarSystemBodyId);
                          if (found) onSelectBody(found);
                          onSelectMode('solar_system');
                          setIsSearchOpen(false);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono transition-all flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View in 3D</span>
                      </button>
                    )}

                    {/* Deep Dossier Modal trigger */}
                    <button
                      onClick={() => {
                        audioEngine.playClickSound();
                        setSelectedUniversalEntity(item);
                      }}
                      className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/[0.08] text-slate-300 hover:text-white"
                      title="Inspect Universal Dossier"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {filteredUniverseItems.length === 0 && (
                <div className="p-8 text-center font-mono text-slate-500 text-xs">
                  No universe components matched "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Selected Universal Entity Deep Dossier Popover */}
      {selectedUniversalEntity && (
        <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-3xl bg-[#020617]/70 border border-white/[0.12] p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                  {(selectedUniversalEntity.category || '').toUpperCase()} // {selectedUniversalEntity.badge || ''}
                </span>
                <h2 className="text-xl font-bold text-white tracking-wide mt-0.5">
                  {selectedUniversalEntity.name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedUniversalEntity(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/[0.08]">
                  <span className="text-[10px] text-slate-400 block">DISTANCE FROM EARTH</span>
                  <span className="text-white font-bold mt-0.5 block">
                    {selectedUniversalEntity.distanceLightYears ? `${selectedUniversalEntity.distanceLightYears} Light-Years` : 'Solar System Interior'}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/[0.08]">
                  <span className="text-[10px] text-slate-400 block">KEY METRIC</span>
                  <span className="text-amber-400 font-bold mt-0.5 block">{selectedUniversalEntity.highlightStat}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-2">
                <span className="text-[10px] text-cyan-400 uppercase tracking-widest block">
                  Astrophysical Dossier
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {selectedUniversalEntity.description}
                </p>
              </div>

              {/* Action */}
              {selectedUniversalEntity.comparableId && onStartComparison && (
                <button
                  onClick={() => {
                    audioEngine.playClickSound();
                    onStartComparison(selectedUniversalEntity.comparableId!, 'earth');
                    setSelectedUniversalEntity(null);
                    setIsSearchOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Scale className="w-4 h-4" />
                  <span>Benchmark {selectedUniversalEntity.name} in Compare Lab</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
