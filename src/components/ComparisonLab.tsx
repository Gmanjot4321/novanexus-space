import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ComparableEntity } from '../types';
import { COMPARABLE_ENTITIES } from '../data/universeData';
import { audioEngine } from '../utils/audioEngine';
import { 
  Scale, ArrowRight, Sparkles, Thermometer, Orbit, Clock, 
  Weight, Activity, ShieldCheck, Zap, Info, Volume2, VolumeX,
  Shuffle, ArrowLeftRight, Check, Copy, Flame, Snowflake, 
  Compass, Eye, Sliders, ChevronDown, Award
} from 'lucide-react';

interface ComparisonLabProps {
  initialEntityAId?: string;
  initialEntityBId?: string;
}

// Curated Quick Matchups
const QUICK_MATCHUPS = [
  { label: 'Earth vs Mars', desc: 'Habitability Benchmark', idA: 'earth', idB: 'mars', icon: '🚀' },
  { label: 'Earth vs Jupiter', desc: 'Planetary Giant Scale', idA: 'earth', idB: 'jupiter', icon: '👑' },
  { label: 'Titan vs Europa', desc: 'Ocean Worlds', idA: 'titan', idB: 'europa', icon: '🌊' },
  { label: 'Venus vs WASP-76b', desc: 'Inferno Atmospheres', idA: 'venus', idB: 'wasp-76b', icon: '🔥' },
  { label: 'Earth vs Stephenson', desc: 'Cosmic Monster Star', idA: 'earth', idB: 'stephenson-2-18', icon: '🌟' },
  { label: 'Earth vs Luna', desc: 'Planet & Moon System', idA: 'earth', idB: 'luna', icon: '🌕' },
  { label: 'Saturn vs Neptune', desc: 'Gas & Ice Giants', idA: 'saturn', idB: 'neptune', icon: '🪐' },
  { label: 'Pluto vs Triton', desc: 'Kuiper Belt Twins', idA: 'pluto', idB: 'triton', icon: '❄️' },
  { label: 'Earth vs 55 Cancri e', desc: 'Diamond Super-Earth', idA: 'earth', idB: '55-cancri-e', icon: '💎' },
  { label: 'Sun vs Betelgeuse', desc: 'Stellar Fusion Titans', idA: 'sun', idB: 'betelgeuse', icon: '☀️' },
  { label: 'Sirius A vs Sirius B', desc: 'Star & White Dwarf', idA: 'sirius-a', idB: 'sirius-b', icon: '⚪' },
  { label: 'Earth vs Proxima b', desc: 'Nearest Exoplanet', idA: 'earth', idB: 'proxima-b', icon: '🔭' },
  { label: 'Sag A* vs TON 618', desc: 'Supermassive Black Holes', idA: 'sagittarius-a-star', idB: 'ton-618', icon: '🕳️' },
  { label: 'Ceres vs 16 Psyche', desc: 'Dwarf Planet & Metal Core', idA: 'ceres', idB: '16-psyche', icon: '☄️' },
];

export const ComparisonLab: React.FC<ComparisonLabProps> = ({ 
  initialEntityAId = 'earth', 
  initialEntityBId = 'luna' 
}) => {
  const [entityA, setEntityA] = useState<ComparableEntity>(
    () => COMPARABLE_ENTITIES.find(e => e.id === initialEntityAId) || COMPARABLE_ENTITIES[0]
  );
  const [entityB, setEntityB] = useState<ComparableEntity>(
    () => COMPARABLE_ENTITIES.find(e => e.id === initialEntityBId) || COMPARABLE_ENTITIES[1]
  );

  const [activeCategory, setActiveCategory] = useState<'all' | 'planet' | 'moon' | 'exoplanet' | 'star'>('all');
  const [activeTab, setActiveTab] = useState<'physics' | 'atmosphere' | 'specs' | 'lore'>('physics');
  const [scaleMode, setScaleMode] = useState<'relative' | 'normalized'>('relative');
  
  // Interactive Physics State
  const [earthJumpHeightM, setEarthJumpHeightM] = useState<number>(0.5);
  const [userWeightKg, setUserWeightKg] = useState<number>(70);
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [isJumping, setIsJumping] = useState<boolean>(false);

  // Audio Speech state
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [copiedDossier, setCopiedDossier] = useState<boolean>(false);

  useEffect(() => {
    if (initialEntityAId) {
      const foundA = COMPARABLE_ENTITIES.find(e => e.id === initialEntityAId);
      if (foundA) setEntityA(foundA);
    }
    if (initialEntityBId) {
      const foundB = COMPARABLE_ENTITIES.find(e => e.id === initialEntityBId);
      if (foundB) setEntityB(foundB);
    }
  }, [initialEntityAId, initialEntityBId]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      audioEngine.stopSpeech();
    };
  }, []);

  // Volumetric scale calculations
  const maxRadius = Math.max(entityA.radiusKm, entityB.radiusKm, 1);
  const ratioA = Math.max(14, (entityA.radiusKm / maxRadius) * 100);
  const ratioB = Math.max(14, (entityB.radiusKm / maxRadius) * 100);

  // Approximate volume calculation (V = 4/3 * pi * r^3)
  const volumeRatio = useMemo(() => {
    const volA = Math.pow(entityA.radiusKm, 3);
    const volB = Math.pow(entityB.radiusKm, 3);
    if (volA >= volB) {
      const times = (volA / volB).toFixed(1);
      return { larger: entityA.name, smaller: entityB.name, times: parseFloat(times) > 1000 ? (volA / volB).toExponential(2) : times };
    } else {
      const times = (volB / volA).toFixed(1);
      return { larger: entityB.name, smaller: entityA.name, times: parseFloat(times) > 1000 ? (volB / volA).toExponential(2) : times };
    }
  }, [entityA, entityB]);

  // Jump height calculation (h = v^2 / 2g; relative jump height = h_earth * (g_earth / g_body))
  const jumpA = entityA.surfaceGravityMs2 > 0.01 
    ? (earthJumpHeightM * (9.807 / entityA.surfaceGravityMs2)).toFixed(1) 
    : '> 1,000 (Escape)';
  const jumpB = entityB.surfaceGravityMs2 > 0.01 
    ? (earthJumpHeightM * (9.807 / entityB.surfaceGravityMs2)).toFixed(1) 
    : '> 1,000 (Escape)';

  // Weight Calculation on Bodies
  const weightOnA = (userWeightKg * entityA.surfaceGravityG).toFixed(1);
  const weightOnB = (userWeightKg * entityB.surfaceGravityG).toFixed(1);

  const displayWeightA = weightUnit === 'kg' ? `${weightOnA} kg` : `${(parseFloat(weightOnA) * 2.20462).toFixed(1)} lbs`;
  const displayWeightB = weightUnit === 'kg' ? `${weightOnB} kg` : `${(parseFloat(weightOnB) * 2.20462).toFixed(1)} lbs`;

  // Quick swap
  const handleSwap = useCallback(() => {
    audioEngine.playClickSound(600);
    audioEngine.stopSpeech();
    setIsSpeaking(false);
    const temp = entityA;
    setEntityA(entityB);
    setEntityB(temp);
  }, [entityA, entityB]);

  // Jump animation trigger
  const triggerJumpSimulation = useCallback(() => {
    audioEngine.playClickSound(750);
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 2400);
  }, []);

  // Quick preset loader
  const loadPreset = useCallback((idA: string, idB: string) => {
    audioEngine.playCosmicChime();
    audioEngine.stopSpeech();
    setIsSpeaking(false);
    const foundA = COMPARABLE_ENTITIES.find(e => e.id === idA);
    const foundB = COMPARABLE_ENTITIES.find(e => e.id === idB);
    if (foundA && foundB) {
      setEntityA(foundA);
      setEntityB(foundB);
    }
  }, []);

  // Random matchup generator
  const handleRandomMatchup = useCallback(() => {
    audioEngine.playCosmicChime();
    audioEngine.stopSpeech();
    setIsSpeaking(false);
    const shuffled = [...COMPARABLE_ENTITIES].sort(() => 0.5 - Math.random());
    setEntityA(shuffled[0]);
    setEntityB(shuffled[1] || shuffled[0]);
  }, []);

  // Narration toggle
  const handleToggleSpeech = useCallback(() => {
    if (isSpeaking) {
      audioEngine.stopSpeech();
      setIsSpeaking(false);
    } else {
      audioEngine.playClickSound(580);
      const narrationText = `Astrophysical Benchmark: Comparing ${entityA.name} with ${entityB.name}. ${entityA.name} is a ${entityA.category} with a radius of ${entityA.radiusKm.toLocaleString()} kilometers and surface gravity of ${entityA.surfaceGravityG}g. ${entityB.name} is a ${entityB.category} with a radius of ${entityB.radiusKm.toLocaleString()} kilometers and surface gravity of ${entityB.surfaceGravityG}g. On ${entityA.name}, ${entityA.humanAnalogy} Meanwhile, on ${entityB.name}, ${entityB.humanAnalogy}`;
      audioEngine.speak(narrationText, () => setIsSpeaking(false), 1.05);
      setIsSpeaking(true);
    }
  }, [isSpeaking, entityA, entityB]);

  // Copy Comparative Dossier
  const handleCopyDossier = useCallback(() => {
    audioEngine.playClickSound(700);
    const text = `CELESTIAL BENCHMARK: ${entityA.name} vs ${entityB.name}\n\n` +
      `[${entityA.name.toUpperCase()}]\n` +
      `• Category: ${entityA.category}\n` +
      `• Radius: ${entityA.radiusKm.toLocaleString()} km\n` +
      `• Mass: ${entityA.massKg} kg\n` +
      `• Gravity: ${entityA.surfaceGravityG}g (${entityA.surfaceGravityMs2} m/s²)\n` +
      `• Temp: Mean ${entityA.surfaceTempC.mean}°C\n` +
      `• Atmosphere: ${entityA.atmosphere.join(', ')}\n` +
      `• Analogy: ${entityA.humanAnalogy}\n\n` +
      `[${entityB.name.toUpperCase()}]\n` +
      `• Category: ${entityB.category}\n` +
      `• Radius: ${entityB.radiusKm.toLocaleString()} km\n` +
      `• Mass: ${entityB.massKg} kg\n` +
      `• Gravity: ${entityB.surfaceGravityG}g (${entityB.surfaceGravityMs2} m/s²)\n` +
      `• Temp: Mean ${entityB.surfaceTempC.mean}°C\n` +
      `• Atmosphere: ${entityB.atmosphere.join(', ')}\n` +
      `• Analogy: ${entityB.humanAnalogy}\n\n` +
      `— Generated via Celestial Comparative Lab`;
    navigator.clipboard.writeText(text);
    setCopiedDossier(true);
    setTimeout(() => setCopiedDossier(false), 2000);
  }, [entityA, entityB]);

  // Helper category classification
  const isMoon = (cat: string) => cat === 'Major Moon';
  const isTerrestrialOrDwarf = (cat: string) => cat === 'Terrestrial Planet' || cat === 'Dwarf Planet';
  const isGiant = (cat: string) => cat === 'Gas Giant' || cat === 'Ice Giant';
  const isPlanet = (cat: string) => isTerrestrialOrDwarf(cat) || isGiant(cat);
  const isExoplanet = (cat: string) => cat === 'Exoplanet';
  const isStar = (cat: string) => cat === 'Star' || cat === 'Stellar Monster';
  const isRemnantOrBlackHole = (cat: string) => cat === 'Remnant & Black Hole';
  const isAsteroid = (cat: string) => cat === 'Asteroid & Minor Body';

  // Category filtering
  const filteredEntities = useMemo(() => {
    if (activeCategory === 'all') return COMPARABLE_ENTITIES;
    if (activeCategory === 'moon') return COMPARABLE_ENTITIES.filter(e => isMoon(e.category));
    if (activeCategory === 'planet') return COMPARABLE_ENTITIES.filter(e => isPlanet(e.category));
    if (activeCategory === 'exoplanet') return COMPARABLE_ENTITIES.filter(e => isExoplanet(e.category));
    if (activeCategory === 'star') return COMPARABLE_ENTITIES.filter(e => isStar(e.category));
    return COMPARABLE_ENTITIES;
  }, [activeCategory]);

  return (
    <div className="w-full h-full bg-[#020617] text-white pt-32 sm:pt-32 md:pt-28 pb-36 sm:pb-32 px-4 sm:px-6 md:px-10 overflow-y-auto select-none custom-scrollbar relative z-30" style={{ backgroundColor: '#020617' }}>
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* ========================================================================= */}
        {/* HEADER & CONTROLS TOOLBAR                                                */}
        {/* ========================================================================= */}
        <div className="p-5 sm:p-6 rounded-3xl bg-[#020617]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl relative overflow-hidden">
          {/* Subtle Aurora Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-600/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-1 font-semibold">
                <Scale className="w-4 h-4 text-cyan-400" />
                <span>Astrophysical Benchmark Deck</span>
                <span className="text-slate-600">•</span>
                <span className="text-purple-400">1-on-1 Celestial Lab</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Planetary &amp; Stellar Comparison Engine
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1 max-w-2xl">
                Benchmark gravitational pull, volumetric scale, thermodynamic extremities, and survival conditions side-by-side.
              </p>
            </div>

            {/* Actions: Narration, Random, Copy */}
            <div className="flex items-center flex-wrap gap-2">
              <button
                onClick={handleToggleSpeech}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all shadow-md cursor-pointer ${
                  isSpeaking
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white'
                }`}
                title="Listen to comparative audio breakdown"
              >
                {isSpeaking ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{isSpeaking ? 'Pause Audio' : 'Audio Brief'}</span>
              </button>

              <button
                onClick={handleRandomMatchup}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer"
                title="Randomize matchup"
              >
                <Shuffle className="w-3.5 h-3.5 text-purple-400" />
                <span>Randomize</span>
              </button>

              <button
                onClick={handleCopyDossier}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  copiedDossier
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
                title="Copy comparison dossier to clipboard"
              >
                {copiedDossier ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Quick Matchup Preset Chips */}
          <div className="mt-5 pt-4 border-t border-white/[0.08] space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Curated Astronomical Matchups:</span>
              </span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">Click any pair to load immediately</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar text-xs font-mono">
              {QUICK_MATCHUPS.map((preset) => {
                const isActive = (entityA.id === preset.idA && entityB.id === preset.idB) || (entityA.id === preset.idB && entityB.id === preset.idA);
                return (
                  <button
                    key={preset.label}
                    onClick={() => loadPreset(preset.idA, preset.idB)}
                    className={`px-3 py-1.5 rounded-xl shrink-0 transition-all border flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border-cyan-400/50 shadow-md ring-1 ring-cyan-500/30 font-bold'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-slate-200 border-white/5'
                    }`}
                  >
                    <span>{preset.icon}</span>
                    <span>{preset.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CANDIDATE SELECTORS & QUICK SWAP                                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-4 items-center">
          {/* Entity A Selector */}
          <div className="p-4 sm:p-5 rounded-3xl bg-[#020617]/90 border border-cyan-500/40 backdrop-blur-2xl space-y-2 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Primary Body (Candidate A)</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                {entityA.category}
              </span>
            </div>

            <select
              value={entityA.id}
              onChange={(e) => {
                const found = COMPARABLE_ENTITIES.find(item => item.id === e.target.value);
                if (found) {
                  audioEngine.playClickSound();
                  setEntityA(found);
                }
              }}
              className="w-full px-4 py-3 rounded-2xl bg-slate-950/90 border border-white/15 text-sm sm:text-base font-mono font-bold text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 cursor-pointer shadow-inner [&>optgroup]:bg-slate-950 [&>optgroup]:text-cyan-300 [&>option]:bg-slate-950 [&>option]:text-slate-100"
            >
              <optgroup label="Terrestrial & Dwarf Planets" className="bg-slate-950 text-cyan-300">
                {COMPARABLE_ENTITIES.filter(e => isTerrestrialOrDwarf(e.category)).map(p => (
                  <option key={p.id} value={p.id} className="bg-slate-950 text-white">{p.name} ({p.category})</option>
                ))}
              </optgroup>
              <optgroup label="Gas & Ice Giants" className="bg-slate-950 text-cyan-300">
                {COMPARABLE_ENTITIES.filter(e => isGiant(e.category)).map(g => (
                  <option key={g.id} value={g.id} className="bg-slate-950 text-white">{g.name} ({g.category})</option>
                ))}
              </optgroup>
              <optgroup label="Major Moons & Ocean Worlds" className="bg-slate-950 text-cyan-300">
                {COMPARABLE_ENTITIES.filter(e => isMoon(e.category)).map(m => (
                  <option key={m.id} value={m.id} className="bg-slate-950 text-white">{m.name} ({m.parentBody ? `${m.parentBody} Moon` : 'Moon'})</option>
                ))}
              </optgroup>
              <optgroup label="Exotic Exoplanets" className="bg-slate-950 text-cyan-300">
                {COMPARABLE_ENTITIES.filter(e => isExoplanet(e.category)).map(ex => (
                  <option key={ex.id} value={ex.id} className="bg-slate-950 text-white">{ex.name}</option>
                ))}
              </optgroup>
              <optgroup label="Stars & Stellar Giants" className="bg-slate-950 text-cyan-300">
                {COMPARABLE_ENTITIES.filter(e => isStar(e.category)).map(s => (
                  <option key={s.id} value={s.id} className="bg-slate-950 text-white">{s.name} ({s.category})</option>
                ))}
              </optgroup>
              <optgroup label="Remnants & Black Holes" className="bg-slate-950 text-cyan-300">
                {COMPARABLE_ENTITIES.filter(e => isRemnantOrBlackHole(e.category)).map(r => (
                  <option key={r.id} value={r.id} className="bg-slate-950 text-white">{r.name}</option>
                ))}
              </optgroup>
              <optgroup label="Asteroids & Minor Bodies" className="bg-slate-950 text-cyan-300">
                {COMPARABLE_ENTITIES.filter(e => isAsteroid(e.category)).map(a => (
                  <option key={a.id} value={a.id} className="bg-slate-950 text-white">{a.name}</option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Quick Swap Pivot Button */}
          <div className="flex justify-center -my-1 md:my-0">
            <button
              onClick={handleSwap}
              className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-white/20 text-white hover:text-cyan-300 transition-all shadow-xl active:scale-90 cursor-pointer group"
              title="Swap primary and benchmark candidates"
            >
              <ArrowLeftRight className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500 text-cyan-300" />
            </button>
          </div>

          {/* Entity B Selector */}
          <div className="p-4 sm:p-5 rounded-3xl bg-[#020617]/90 border border-purple-500/40 backdrop-blur-2xl space-y-2 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500" />
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span>Benchmark Body (Candidate B)</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                {entityB.category}
              </span>
            </div>

            <select
              value={entityB.id}
              onChange={(e) => {
                const found = COMPARABLE_ENTITIES.find(item => item.id === e.target.value);
                if (found) {
                  audioEngine.playClickSound();
                  setEntityB(found);
                }
              }}
              className="w-full px-4 py-3 rounded-2xl bg-slate-950/90 border border-white/15 text-sm sm:text-base font-mono font-bold text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 cursor-pointer shadow-inner [&>optgroup]:bg-slate-950 [&>optgroup]:text-purple-300 [&>option]:bg-slate-950 [&>option]:text-slate-100"
            >
              <optgroup label="Terrestrial & Dwarf Planets" className="bg-slate-950 text-purple-300">
                {COMPARABLE_ENTITIES.filter(e => isTerrestrialOrDwarf(e.category)).map(p => (
                  <option key={p.id} value={p.id} className="bg-slate-950 text-white">{p.name} ({p.category})</option>
                ))}
              </optgroup>
              <optgroup label="Gas & Ice Giants" className="bg-slate-950 text-purple-300">
                {COMPARABLE_ENTITIES.filter(e => isGiant(e.category)).map(g => (
                  <option key={g.id} value={g.id} className="bg-slate-950 text-white">{g.name} ({g.category})</option>
                ))}
              </optgroup>
              <optgroup label="Major Moons & Ocean Worlds" className="bg-slate-950 text-purple-300">
                {COMPARABLE_ENTITIES.filter(e => isMoon(e.category)).map(m => (
                  <option key={m.id} value={m.id} className="bg-slate-950 text-white">{m.name} ({m.parentBody ? `${m.parentBody} Moon` : 'Moon'})</option>
                ))}
              </optgroup>
              <optgroup label="Exotic Exoplanets" className="bg-slate-950 text-purple-300">
                {COMPARABLE_ENTITIES.filter(e => isExoplanet(e.category)).map(ex => (
                  <option key={ex.id} value={ex.id} className="bg-slate-950 text-white">{ex.name}</option>
                ))}
              </optgroup>
              <optgroup label="Stars & Stellar Giants" className="bg-slate-950 text-purple-300">
                {COMPARABLE_ENTITIES.filter(e => isStar(e.category)).map(s => (
                  <option key={s.id} value={s.id} className="bg-slate-950 text-white">{s.name} ({s.category})</option>
                ))}
              </optgroup>
              <optgroup label="Remnants & Black Holes" className="bg-slate-950 text-purple-300">
                {COMPARABLE_ENTITIES.filter(e => isRemnantOrBlackHole(e.category)).map(r => (
                  <option key={r.id} value={r.id} className="bg-slate-950 text-white">{r.name}</option>
                ))}
              </optgroup>
              <optgroup label="Asteroids & Minor Bodies" className="bg-slate-950 text-purple-300">
                {COMPARABLE_ENTITIES.filter(e => isAsteroid(e.category)).map(a => (
                  <option key={a.id} value={a.id} className="bg-slate-950 text-white">{a.name}</option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CELESTIAL HOLO-PODS & RELATIVE SCALE VIEWPORTS                            */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#020617]/85 border border-white/[0.08] backdrop-blur-2xl shadow-2xl relative space-y-6">
          
          {/* Volumetric Ratio Comparison Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <Orbit className="w-4 h-4 text-cyan-300" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                  Volumetric Proportions
                </span>
                <p className="text-xs sm:text-sm font-mono text-white font-semibold">
                  <span className="text-cyan-300 font-bold">{volumeRatio.larger}</span> is approx{' '}
                  <span className="text-amber-300 font-bold px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">{volumeRatio.times}×</span>{' '}
                  the volume of <span className="text-purple-300 font-bold">{volumeRatio.smaller}</span>
                </p>
              </div>
            </div>

            {/* View Scale Mode Switcher */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-0.5 text-xs font-mono">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setScaleMode('relative');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  scaleMode === 'relative' ? 'bg-cyan-600 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title="Display true physical size difference"
              >
                True Scale
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setScaleMode('normalized');
                }}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  scaleMode === 'normalized' ? 'bg-cyan-600 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title="Display normalized equal focus"
              >
                Normalized
              </button>
            </div>
          </div>

          {/* Dual Holographic Comparison Stage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Candidate A Hologram Stage */}
            <div className="flex flex-col items-center justify-center text-center space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/20 relative group">
              <div className="h-60 sm:h-64 flex items-center justify-center w-full relative">
                {/* Orbital Crosshair Rings */}
                <div className="absolute w-56 h-56 rounded-full border border-cyan-500/10 border-dashed animate-spin-slow pointer-events-none" />
                <div className="absolute w-44 h-44 rounded-full border border-cyan-500/5 pointer-events-none" />

                {/* Celestial Sphere */}
                <div
                  style={{
                    width: scaleMode === 'relative' ? `${Math.max(40, Math.min(220, ratioA * 2.1))}px` : '180px',
                    height: scaleMode === 'relative' ? `${Math.max(40, Math.min(220, ratioA * 2.1))}px` : '180px',
                    background: `radial-gradient(circle at 35% 30%, ${entityA.color}, #020617 80%)`,
                    boxShadow: `0 0 45px ${entityA.color}40, inset -10px -10px 25px rgba(0,0,0,0.8), inset 8px 8px 15px rgba(255,255,255,0.4)`,
                  }}
                  className="rounded-full transition-all duration-700 relative flex items-center justify-center border border-white/30 shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60 pointer-events-none" />
                  <span className="text-[10px] font-mono text-slate-950 font-bold px-2 py-0.5 bg-white/90 rounded-full shadow-lg border border-white/50">
                    {entityA.radiusKm.toLocaleString()} km
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold block">
                  {entityA.category} {entityA.parentBody ? `// Orbiting ${entityA.parentBody}` : ''}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{entityA.name}</h2>
                <p className="text-xs text-slate-300 font-mono mt-1 max-w-sm leading-relaxed">
                  {entityA.peculiarity}
                </p>
              </div>
            </div>

            {/* Candidate B Hologram Stage */}
            <div className="flex flex-col items-center justify-center text-center space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-purple-500/20 relative group md:border-l md:border-white/[0.08]">
              <div className="h-60 sm:h-64 flex items-center justify-center w-full relative">
                {/* Orbital Crosshair Rings */}
                <div className="absolute w-56 h-56 rounded-full border border-purple-500/10 border-dashed animate-spin-slow pointer-events-none" />
                <div className="absolute w-44 h-44 rounded-full border border-purple-500/5 pointer-events-none" />

                {/* Celestial Sphere */}
                <div
                  style={{
                    width: scaleMode === 'relative' ? `${Math.max(40, Math.min(220, ratioB * 2.1))}px` : '180px',
                    height: scaleMode === 'relative' ? `${Math.max(40, Math.min(220, ratioB * 2.1))}px` : '180px',
                    background: `radial-gradient(circle at 35% 30%, ${entityB.color}, #020617 80%)`,
                    boxShadow: `0 0 45px ${entityB.color}40, inset -10px -10px 25px rgba(0,0,0,0.8), inset 8px 8px 15px rgba(255,255,255,0.4)`,
                  }}
                  className="rounded-full transition-all duration-700 relative flex items-center justify-center border border-white/30 shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60 pointer-events-none" />
                  <span className="text-[10px] font-mono text-slate-950 font-bold px-2 py-0.5 bg-white/90 rounded-full shadow-lg border border-white/50">
                    {entityB.radiusKm.toLocaleString()} km
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest font-semibold block">
                  {entityB.category} {entityB.parentBody ? `// Orbiting ${entityB.parentBody}` : ''}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{entityB.name}</h2>
                <p className="text-xs text-slate-300 font-mono mt-1 max-w-sm leading-relaxed">
                  {entityB.peculiarity}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE COMPARATIVE LAB TABS                                         */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          
          {/* Tab Selection Header */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-[#020617]/80 backdrop-blur-xl border border-white/[0.08]">
            <button
              onClick={() => {
                audioEngine.playClickSound();
                setActiveTab('physics');
              }}
              className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'physics'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Weight className="w-3.5 h-3.5" />
              <span>Gravity &amp; Jump Lab</span>
            </button>

            <button
              onClick={() => {
                audioEngine.playClickSound();
                setActiveTab('atmosphere');
              }}
              className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'atmosphere'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Thermometer className="w-3.5 h-3.5" />
              <span>Atmosphere &amp; Temp</span>
            </button>

            <button
              onClick={() => {
                audioEngine.playClickSound();
                setActiveTab('specs');
              }}
              className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Specifications Matrix</span>
            </button>

            <button
              onClick={() => {
                audioEngine.playClickSound();
                setActiveTab('lore');
              }}
              className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'lore'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md border border-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Human Reality &amp; Lore</span>
            </button>
          </div>

          {/* ========================================================================= */}
          {/* TAB 1: GRAVITY, JUMP SIMULATOR & BODY WEIGHT CALCULATOR                  */}
          {/* ========================================================================= */}
          {activeTab === 'physics' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#020617]/85 border border-white/[0.08] backdrop-blur-2xl shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <Weight className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                      Surface Gravitational Mechanics &amp; Jump Physics
                    </h3>
                    <p className="text-xs text-slate-400">
                      Simulates relative vertical reach and real body weight on each world
                    </p>
                  </div>
                </div>

                {/* Jump Simulator Button */}
                <button
                  onClick={triggerJumpSimulation}
                  disabled={isJumping}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-md ${
                    isJumping
                      ? 'bg-amber-500 text-slate-950 animate-pulse'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{isJumping ? 'Simulating Jump...' : 'Test Jump Animation'}</span>
                </button>
              </div>

              {/* Jump Height Simulation Panels */}
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-slate-400">
                  <span>Select Baseline Earth Jump Height:</span>
                  <div className="flex items-center gap-1.5">
                    {[0.3, 0.5, 0.8, 1.2].map((h) => (
                      <button
                        key={h}
                        onClick={() => {
                          audioEngine.playClickSound();
                          setEarthJumpHeightM(h);
                        }}
                        className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                          earthJumpHeightM === h
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {h}m ({h === 0.5 ? 'Average' : h > 0.5 ? 'Athlete' : 'Gentle'})
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Entity A Jump */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-cyan-950/30 to-slate-950/60 border border-cyan-500/30 space-y-2 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                        On {entityA.name} ({entityA.surfaceGravityG}g)
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {entityA.surfaceGravityMs2} m/s²
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold font-mono text-white tracking-tight">{jumpA}m</span>
                      <span className="text-xs font-mono text-cyan-300">
                        ({(parseFloat(jumpA) / earthJumpHeightM).toFixed(1)}× Earth height)
                      </span>
                    </div>

                    {/* Animated Jumping Astronaut Silhouette Bar */}
                    <div className="h-10 w-full bg-slate-900/80 rounded-xl border border-white/5 relative flex items-center px-3 overflow-hidden">
                      <div 
                        className={`h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8] transition-all duration-1000 ${
                          isJumping ? 'translate-y-[-8px] scale-125' : ''
                        }`}
                      />
                      <span className="text-[10px] font-mono text-slate-400 ml-3">
                        {parseFloat(jumpA) > 10 ? '🚀 High orbit jump reach!' : parseFloat(jumpA) < 0.3 ? '🏋️ Heavy crushing gravity!' : '🏃 Standard leap'}
                      </span>
                    </div>
                  </div>

                  {/* Entity B Jump */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-950/30 to-slate-950/60 border border-purple-500/30 space-y-2 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">
                        On {entityB.name} ({entityB.surfaceGravityG}g)
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {entityB.surfaceGravityMs2} m/s²
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold font-mono text-white tracking-tight">{jumpB}m</span>
                      <span className="text-xs font-mono text-purple-300">
                        ({(parseFloat(jumpB) / earthJumpHeightM).toFixed(1)}× Earth height)
                      </span>
                    </div>

                    {/* Animated Jumping Astronaut Silhouette Bar */}
                    <div className="h-10 w-full bg-slate-900/80 rounded-xl border border-white/5 relative flex items-center px-3 overflow-hidden">
                      <div 
                        className={`h-4 w-4 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc] transition-all duration-1000 ${
                          isJumping ? 'translate-y-[-8px] scale-125' : ''
                        }`}
                      />
                      <span className="text-[10px] font-mono text-slate-400 ml-3">
                        {parseFloat(jumpB) > 10 ? '🚀 High orbit jump reach!' : parseFloat(jumpB) < 0.3 ? '🏋️ Heavy crushing gravity!' : '🏃 Standard leap'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body Weight on This World Calculator */}
              <div className="pt-4 border-t border-white/[0.08] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-amber-400" />
                      <span>Your Body Weight on Each World</span>
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Calculated from mass × local gravitational constant
                    </p>
                  </div>

                  {/* Weight Input & Unit Toggle */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">Earth Weight:</span>
                    <input
                      type="number"
                      min="10"
                      max="300"
                      value={userWeightKg}
                      onChange={(e) => setUserWeightKg(Math.max(1, parseInt(e.target.value) || 70))}
                      className="w-20 px-3 py-1.5 rounded-xl bg-slate-950 border border-white/15 text-xs font-mono font-bold text-white text-center focus:outline-none focus:border-cyan-400"
                    />
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-0.5 text-xs font-mono">
                      <button
                        onClick={() => setWeightUnit('kg')}
                        className={`px-2 py-1 rounded-lg ${weightUnit === 'kg' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400'}`}
                      >
                        kg
                      </button>
                      <button
                        onClick={() => setWeightUnit('lbs')}
                        className={`px-2 py-1 rounded-lg ${weightUnit === 'lbs' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400'}`}
                      >
                        lbs
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-cyan-500/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                        On {entityA.name}
                      </span>
                      <span className="text-2xl font-bold font-mono text-white mt-1 block">
                        {displayWeightA}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {entityA.surfaceGravityG < 0.5 ? 'Feather Light 🪶' : entityA.surfaceGravityG > 1.5 ? 'Crushing Weight 🏋️' : 'Standard Weight ⚖️'}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-purple-500/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-bold">
                        On {entityB.name}
                      </span>
                      <span className="text-2xl font-bold font-mono text-white mt-1 block">
                        {displayWeightB}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {entityB.surfaceGravityG < 0.5 ? 'Feather Light 🪶' : entityB.surfaceGravityG > 1.5 ? 'Crushing Weight 🏋️' : 'Standard Weight ⚖️'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: ATMOSPHERE & THERMODYNAMIC EXTREMITIES                             */}
          {/* ========================================================================= */}
          {activeTab === 'atmosphere' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#020617]/85 border border-white/[0.08] backdrop-blur-2xl shadow-2xl space-y-6">
              <div className="pb-4 border-b border-white/[0.08]">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-cyan-400" />
                  <span>Thermodynamic Profiles &amp; Chemical Envelopes</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Surface thermal swings from daytime peak to nightside freezing
                </p>
              </div>

              {/* Surface Temperature Scale Comparison */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                  Surface Temperature Comparison Range (°C)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Entity A Temp Card */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-cyan-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                        {entityA.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        Mean: {entityA.surfaceTempC.mean}°C
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                      <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <span className="text-[9px] text-blue-300 block uppercase">Min Night</span>
                        <span className="font-bold text-blue-200 mt-0.5 block">{entityA.surfaceTempC.min}°C</span>
                      </div>
                      <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                        <span className="text-[9px] text-cyan-300 block uppercase">Mean</span>
                        <span className="font-bold text-cyan-200 mt-0.5 block">{entityA.surfaceTempC.mean}°C</span>
                      </div>
                      <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <span className="text-[9px] text-rose-300 block uppercase">Max Day</span>
                        <span className="font-bold text-rose-200 mt-0.5 block">{entityA.surfaceTempC.max}°C</span>
                      </div>
                    </div>
                  </div>

                  {/* Entity B Temp Card */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-purple-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                        {entityB.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        Mean: {entityB.surfaceTempC.mean}°C
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                      <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <span className="text-[9px] text-blue-300 block uppercase">Min Night</span>
                        <span className="font-bold text-blue-200 mt-0.5 block">{entityB.surfaceTempC.min}°C</span>
                      </div>
                      <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <span className="text-[9px] text-purple-300 block uppercase">Mean</span>
                        <span className="font-bold text-purple-200 mt-0.5 block">{entityB.surfaceTempC.mean}°C</span>
                      </div>
                      <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20">
                        <span className="text-[9px] text-rose-300 block uppercase">Max Day</span>
                        <span className="font-bold text-rose-200 mt-0.5 block">{entityB.surfaceTempC.max}°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Atmospheric Breakdown */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                  Atmospheric Composition &amp; Gas Envelope
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-cyan-500/20 space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold block">
                      {entityA.name} Atmosphere
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {entityA.atmosphere.map((gas, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-xl bg-cyan-500/10 text-cyan-200 border border-cyan-500/30 text-xs font-mono">
                          {gas}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-purple-500/20 space-y-2">
                    <span className="text-xs font-mono text-purple-400 font-bold block">
                      {entityB.name} Atmosphere
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {entityB.atmosphere.map((gas, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-xl bg-purple-500/10 text-purple-200 border border-purple-500/30 text-xs font-mono">
                          {gas}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: DETAILED ASTROPHYSICAL METRICS MATRIX                              */}
          {/* ========================================================================= */}
          {activeTab === 'specs' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#020617]/85 border border-white/[0.08] backdrop-blur-2xl shadow-2xl space-y-6">
              <div className="pb-4 border-b border-white/[0.08]">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Comprehensive Metric Distribution Bars</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Direct proportional distribution between Candidate A and Candidate B
                </p>
              </div>

              <div className="space-y-5">
                {/* Metric 1: Mean Radius */}
                <div className="space-y-1.5 pb-4 border-b border-white/5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold">{entityA.name}: {entityA.radiusKm.toLocaleString()} km</span>
                    <span className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">Mean Radius</span>
                    <span className="text-purple-400 font-bold">{entityB.name}: {entityB.radiusKm.toLocaleString()} km</span>
                  </div>
                  <div className="flex h-3 w-full rounded-full bg-slate-900 overflow-hidden gap-1 p-0.5 border border-white/10">
                    <div 
                      style={{ width: `${(entityA.radiusKm / (entityA.radiusKm + entityB.radiusKm)) * 100}%` }}
                      className="bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full transition-all duration-500"
                    />
                    <div 
                      style={{ width: `${(entityB.radiusKm / (entityA.radiusKm + entityB.radiusKm)) * 100}%` }}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Metric 2: Surface Gravity (g) */}
                <div className="space-y-1.5 pb-4 border-b border-white/5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold">{entityA.name}: {entityA.surfaceGravityG}g ({entityA.surfaceGravityMs2} m/s²)</span>
                    <span className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">Surface Gravity</span>
                    <span className="text-purple-400 font-bold">{entityB.name}: {entityB.surfaceGravityG}g ({entityB.surfaceGravityMs2} m/s²)</span>
                  </div>
                  <div className="flex h-3 w-full rounded-full bg-slate-900 overflow-hidden gap-1 p-0.5 border border-white/10">
                    <div 
                      style={{ width: `${(entityA.surfaceGravityG / (Math.max(0.01, entityA.surfaceGravityG + entityB.surfaceGravityG))) * 100}%` }}
                      className="bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full transition-all duration-500"
                    />
                    <div 
                      style={{ width: `${(entityB.surfaceGravityG / (Math.max(0.01, entityA.surfaceGravityG + entityB.surfaceGravityG))) * 100}%` }}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Metric 3: Mass Matrix */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-cyan-400 block uppercase font-bold">{entityA.name} Mass</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{entityA.massKg} kg</span>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-white/5 text-slate-300 font-bold uppercase tracking-wider">
                    Total Mass
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] text-purple-400 block uppercase font-bold">{entityB.name} Mass</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{entityB.massKg} kg</span>
                  </div>
                </div>

                {/* Metric 4: Orbital Period */}
                {(entityA.orbitalPeriodDays || entityB.orbitalPeriodDays) && (
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-cyan-400 block uppercase font-bold">{entityA.name} Orbit</span>
                      <span className="text-sm font-bold text-white mt-0.5 block">
                        {entityA.orbitalPeriodDays ? `${entityA.orbitalPeriodDays.toLocaleString()} Earth Days` : 'N/A'}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-white/5 text-slate-300 font-bold uppercase tracking-wider">
                      Orbital Period
                    </span>
                    <div className="text-right">
                      <span className="text-[10px] text-purple-400 block uppercase font-bold">{entityB.name} Orbit</span>
                      <span className="text-sm font-bold text-white mt-0.5 block">
                        {entityB.orbitalPeriodDays ? `${entityB.orbitalPeriodDays.toLocaleString()} Earth Days` : 'N/A'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: HUMAN ANALOGY & SCIENTIFIC LORE                                   */}
          {/* ========================================================================= */}
          {activeTab === 'lore' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#020617]/85 border border-white/[0.08] backdrop-blur-2xl shadow-2xl space-y-6">
              <div className="pb-4 border-b border-white/[0.08]">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Human Reality Analogies &amp; Peculiarities</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Translating complex astrophysics into experiential human perception
                </p>
              </div>

              {/* Human Reality Analogies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-950/70 border border-cyan-500/30 space-y-2">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-bold block flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{entityA.name} // Human Reality Analogy</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                    &quot;{entityA.humanAnalogy}&quot;
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-950/40 to-slate-950/70 border border-purple-500/30 space-y-2">
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider font-bold block flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{entityB.name} // Human Reality Analogy</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                    &quot;{entityB.humanAnalogy}&quot;
                  </p>
                </div>
              </div>

              {/* Scientific Peculiarity Bullet Points */}
              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                    {entityA.name} Dossier Facts
                  </span>
                  {entityA.facts?.map((fact, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-cyan-500/20 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-bold">
                    {entityB.name} Dossier Facts
                  </span>
                  {entityB.facts?.map((fact, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-purple-500/20 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
