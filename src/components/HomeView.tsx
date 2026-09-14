import React, { useRef, useState } from 'react';
import { ViewMode } from '../types';
import { 
  Orbit, 
  Sparkles, 
  ShieldAlert, 
  BookOpen, 
  Layers, 
  Scale, 
  Play, 
  ArrowUpRight, 
  Flame, 
  Zap, 
  Crosshair, 
  Globe2, 
  ChevronDown,
  Activity,
  Atom,
  ChevronRight,
  Satellite,
  Clock,
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { motion } from 'motion/react';

// Dedicated per-section animated 3D backgrounds
import { SilkWaveBackground } from './home_backgrounds/SilkWaveBackground';
import { SolarSystemBackground } from './home_backgrounds/SolarSystemBackground';
import { BlackHoleBackground } from './home_backgrounds/BlackHoleBackground';
import { RadarAsteroidBackground } from './home_backgrounds/RadarAsteroidBackground';
import { SpiralGalaxyBackground } from './home_backgrounds/SpiralGalaxyBackground';
import { ScaleArenaBackground } from './home_backgrounds/ScaleArenaBackground';
import { CyberMatrixBackground } from './home_backgrounds/CyberMatrixBackground';
import { SatelliteTelemetryBackground } from './home_backgrounds/SatelliteTelemetryBackground';
import { RelativityWarpBackground } from './home_backgrounds/RelativityWarpBackground';
import { CosmicWebBackground } from './home_backgrounds/CosmicWebBackground';

const CosmicAuroraFallback: React.FC<{ accentColor?: string }> = ({ accentColor = 'rgba(6,182,212,0.14)' }) => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]" style={{ backgroundColor: '#020617' }}>
    <div className="absolute inset-0 bg-[#020617]" style={{ backgroundColor: '#020617' }} />
    <div 
      className="absolute top-[20%] left-[10%] w-[65vw] h-[65vw] rounded-full blur-[140px] animate-pulse" 
      style={{ backgroundColor: accentColor, animationDuration: '8s' }} 
    />
    <div 
      className="absolute bottom-[15%] right-[10%] w-[65vw] h-[65vw] rounded-full bg-indigo-600/10 blur-[150px] animate-pulse" 
      style={{ animationDuration: '10s' }} 
    />
  </div>
);

interface HomeViewProps {
  onNavigate: (mode: ViewMode) => void;
  onPlayIntro?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onPlayIntro }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'solar' | 'relativity' | 'nasa'>('all');

  // ---------------------------------------------------------------------------
  // FULL-SCREEN SCROLL SPY & SECTION TRACKING (10 Master Astrophysics Sections)
  // ---------------------------------------------------------------------------
  const sections = [
    { id: 'sec-overview', label: 'Overview', tag: '01' },
    { id: 'sec-solarsystem', label: 'Solar System 3D', tag: '02' },
    { id: 'sec-relativity', label: 'Relativity Lab', tag: '03' },
    { id: 'sec-phenomena', label: 'Cosmic Phenomena', tag: '04' },
    { id: 'sec-spacehub', label: 'NASA Space Hub', tag: '05' },
    { id: 'sec-defense', label: 'NEO Defense Radar', tag: '06' },
    { id: 'sec-codex', label: 'Galactic Codex', tag: '07' },
    { id: 'sec-comparison', label: 'Comparison Lab', tag: '08' },
    { id: 'sec-dashboards', label: 'Cosmic Records', tag: '09' },
    { id: 'sec-telemetry', label: 'Mission Control', tag: '10' }
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollTop = scrollContainerRef.current.scrollTop;
    const clientHeight = scrollContainerRef.current.clientHeight;
    const currentIdx = Math.round(scrollTop / clientHeight);
    if (currentIdx !== activeSection && currentIdx >= 0 && currentIdx < sections.length) {
      setActiveSection(currentIdx);
      audioEngine.playSectionTransitionSound(currentIdx);
    }
  };

  const scrollToSection = (idx: number) => {
    if (!scrollContainerRef.current) return;
    const clientHeight = scrollContainerRef.current.clientHeight;
    scrollContainerRef.current.scrollTo({
      top: idx * clientHeight,
      behavior: 'smooth'
    });
    setActiveSection(idx);
    audioEngine.playSectionTransitionSound(idx);
  };

  const handleNavigateWithSound = (mode: ViewMode) => {
    audioEngine.stopSpeech();
    audioEngine.playClickSound(587.33);
    onNavigate(mode);
  };

  const bentoGridItems = [
    {
      id: 'solar_system',
      category: 'solar',
      label: 'Solar System 3D',
      icon: Orbit,
      tag: 'Orbital Mechanics',
      color: 'from-cyan-500 to-blue-600',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
      glowColor: 'group-hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]',
      desc: 'Precision Keplerian trajectories, 20+ planets & moons with presentation and realistic scale toggles.',
      stats: '20+ Bodies • 0.1x-100x Warp'
    },
    {
      id: 'relativity_lab',
      category: 'relativity',
      label: 'Relativity & Time Travel',
      icon: Clock,
      tag: 'Special & General',
      color: 'from-purple-500 via-pink-500 to-rose-600',
      badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/40',
      glowColor: 'group-hover:border-purple-400/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]',
      desc: 'Lorentz light clock dilation, Twin Paradox interstellar time machine, Miller’s Planet well, and GPS proof.',
      stats: 'γ Lorentz • Gravitational Wells'
    },
    {
      id: 'phenomena',
      category: 'relativity',
      label: 'Cosmic Phenomena',
      icon: Sparkles,
      tag: 'Extreme Astrophysics',
      color: 'from-fuchsia-500 to-pink-600',
      badgeColor: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/40',
      glowColor: 'group-hover:border-fuchsia-400/50 group-hover:shadow-[0_0_25px_rgba(217,70,239,0.2)]',
      desc: 'Supernovae shocks, relativistic black hole accretion disks, and deep-space nebular synthesis.',
      stats: '8 Extreme Simulators'
    },
    {
      id: 'space_hub',
      category: 'nasa',
      label: 'NASA Telemetry Hub',
      icon: Satellite,
      tag: 'Live NASA & ISS',
      color: 'from-cyan-500 to-indigo-600',
      badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40',
      glowColor: 'group-hover:border-indigo-400/50 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]',
      desc: 'Live NASA APOD discovery, real-time ISS orbital coordinates & ground track, Mars rovers, and Hohmann Δv.',
      stats: 'Real-time REST API • Mars Feeds'
    },
    {
      id: 'neo_radar',
      category: 'nasa',
      label: 'NEO Defense Radar',
      icon: ShieldAlert,
      tag: 'NASA JPL Live',
      color: 'from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
      glowColor: 'group-hover:border-emerald-400/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]',
      desc: 'Real-time near-Earth asteroid tracking, orbital proximity vectors, and Sentry impact risk calculations.',
      stats: 'JPL CNEOS • Torino Threat Scale'
    },
    {
      id: 'knowledge_base',
      category: 'nasa',
      label: 'Galactic Codex',
      icon: BookOpen,
      tag: 'Peer-Reviewed Archive',
      color: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
      glowColor: 'group-hover:border-amber-400/50 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]',
      desc: 'Curated peer-reviewed cosmic guides with AI TTS narration, 3D interactive models, and trivia quizzes.',
      stats: '20+ Guides • AI Audio Narrator'
    },
    {
      id: 'comparison_lab',
      category: 'solar',
      label: 'Comparison Lab',
      icon: Scale,
      tag: '1-vs-1 Scale Bench',
      color: 'from-rose-500 to-pink-600',
      badgeColor: 'bg-pink-500/15 text-pink-300 border-pink-500/40',
      glowColor: 'group-hover:border-pink-400/50 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.2)]',
      desc: 'Side-by-side volume, mass, gravity, and scale comparisons across celestial monsters and planets.',
      stats: 'Volumetric Multipliers'
    },
    {
      id: 'dashboards',
      category: 'solar',
      label: 'Cosmic Records & Rankings',
      icon: Layers,
      tag: 'Rankings & Analytics',
      color: 'from-indigo-500 to-purple-600',
      badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40',
      glowColor: 'group-hover:border-indigo-400/50 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]',
      desc: 'Top 10 hypergiant stars, supermassive black holes, extreme temperatures, and habitability indices.',
      stats: 'Leaderboard Metrics • ESI Index'
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#020617] font-sans text-white select-none" style={{ backgroundColor: '#020617' }}>
      {/* FLOATING RIGHT-SIDE FULL-SCREEN SECTION QUICK NAVIGATOR */}
      <nav 
        aria-label="Section Navigation"
        className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-1.5 p-2 rounded-2xl bg-slate-950/85 backdrop-blur-2xl border border-white/10 shadow-2xl scale-90 sm:scale-95 origin-right"
      >
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(idx)}
            onMouseEnter={() => audioEngine.playHoverSound()}
            className="group flex items-center gap-2 py-0.5 transition-all text-right cursor-pointer"
          >
            <span className={`text-[9px] font-mono tracking-wider transition-all duration-300 ${activeSection === idx ? 'text-cyan-300 font-bold opacity-100 translate-x-0' : 'text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-1'}`}>
              {sec.label}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === idx ? 'bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(6,182,212,1)] ring-2 ring-cyan-400/40' : 'bg-slate-700 group-hover:bg-slate-400'}`} />
          </button>
        ))}
      </nav>

      {/* FULL-SCREEN SNAP-SCROLL CONTAINER (Each section occupies exactly 100vh) */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative z-10 w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar bg-[#020617]"
        style={{ backgroundColor: '#020617' }}
      >

        {/* ===================================================================== */}
        {/* SECTION 1: HERO VIEWPORT & BALANCED BENTO MATRIX (Silk Cosmic Wave Aurora) */}
        {/* ===================================================================== */}
        <section 
          id="sec-overview" 
          className="min-h-screen lg:h-screen snap-start w-full relative flex flex-col justify-between items-center px-4 sm:px-6 lg:px-10 pt-16 sm:pt-18 pb-3 sm:pb-4 overflow-y-auto lg:overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 1 Background: Multi-Vector 3D Silk Wave Particle Fabric */}
          {Math.abs(activeSection - 0) <= 1 ? <SilkWaveBackground /> : <CosmicAuroraFallback accentColor="rgba(6,182,212,0.15)" />}

          {/* Header Title Block */}
          <div className="relative z-10 text-center space-y-2 max-w-4xl mx-auto my-auto shrink-0 pt-2">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-2xl border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.2)] text-[10px] font-mono text-cyan-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="tracking-wider uppercase font-semibold text-slate-200">
                NOVANEXUS LIVE • 8-MODULE ASTROPHYSICS ENGINE
              </span>
              {onPlayIntro && (
                <button
                  onClick={() => {
                    audioEngine.playClickSound(587.33);
                    onPlayIntro();
                  }}
                  className="ml-1 pl-2 border-l border-white/20 text-[9px] text-cyan-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  title="Replay Opening Space Wave Intro Animation"
                >
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>Replay Intro</span>
                </button>
              )}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-indigo-100 to-fuchsia-300 tracking-tight font-sans uppercase drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]"
            >
              NOVANEXUS
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[11px] sm:text-xs text-slate-300 font-mono max-w-2xl mx-auto leading-relaxed hidden sm:block"
            >
              Interactive observable universe laboratory. Explore Keplerian planetary physics, relativistic time travel, black hole event horizons, NASA telemetry, scale benchmarks, and peer-reviewed cosmic guides.
            </motion.p>

            {/* Quick Filter Pill Switcher */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {[
                { id: 'all', label: 'All 8 Simulation Labs' },
                { id: 'solar', label: '🪐 Solar & Orbits' },
                { id: 'relativity', label: '⏳ Relativity & High-Energy' },
                { id: 'nasa', label: '🛰️ NASA & Defense' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    audioEngine.playClickSound(659.25);
                    setSelectedFilter(f.id as any);
                  }}
                  className={`px-2.5 py-0.5 rounded-full text-[9.5px] font-mono transition-all cursor-pointer ${
                    selectedFilter === f.id
                      ? 'bg-cyan-500/25 border border-cyan-400/60 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)] font-bold'
                      : 'bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Balanced Symmetrical 4x2 Bento Grid Matrix */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 text-left w-full max-w-6xl my-auto"
          >
            {bentoGridItems.map((item) => {
              const Icon = item.icon;
              const isDimmed = selectedFilter !== 'all' && item.category !== selectedFilter;
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => audioEngine.playHoverSound()}
                  onClick={() => handleNavigateWithSound(item.id as ViewMode)}
                  className={`group relative p-3 sm:p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-2xl border border-white/[0.12] transition-all duration-300 text-left overflow-hidden shadow-xl flex flex-col justify-between hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer ${
                    item.glowColor
                  } ${isDimmed ? 'opacity-40 grayscale-[40%]' : 'opacity-100'}`}
                >
                  {/* Atmospheric gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none`} />
                  
                  {/* Header with Icon Badge and Category Tag */}
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-[13px] font-bold text-white font-mono uppercase tracking-wider group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Micro Footer Indicator */}
                  <div className="pt-2 mt-2 border-t border-white/[0.08] flex items-center justify-between text-[9px] font-mono text-slate-500 group-hover:text-cyan-300/80 transition-colors">
                    <span>{item.stats}</span>
                    <span className="flex items-center gap-0.5 text-cyan-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Launch</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Bottom Cosmic Telemetry Constants HUD & Scroll Prompt */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 border-t border-white/10 shrink-0">
            <div className="hidden md:flex items-center gap-4 text-[9.5px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold">c</span> = 299,792 km/s
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-purple-400 font-bold">Age</span> = 13.787 Gyr
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-pink-400 font-bold">Diameter</span> = 93.016 Gly
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">H₀</span> = 70.0 km/s/Mpc
              </span>
            </div>

            {/* Prompt to Scroll to Next Full-Screen Section */}
            <button 
              onClick={() => scrollToSection(1)}
              onMouseEnter={() => audioEngine.playHoverSound()}
              className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 hover:text-cyan-300 transition-all animate-bounce cursor-pointer py-1"
            >
              <span>Explore Section 02 • Solar System 3D</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 2: 3D SOLAR SYSTEM & KEPLERIAN PHYSICS (Helios Sun & Orbiting Planets) */}
        {/* ===================================================================== */}
        <section 
          id="sec-solarsystem" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-24 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 2 Background: 3D Sun with Solar Corona & Orbiting Planets */}
          {Math.abs(activeSection - 1) <= 1 ? <SolarSystemBackground /> : <CosmicAuroraFallback accentColor="rgba(245,158,11,0.15)" />}

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl p-8 sm:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.25)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                <Orbit className="w-3.5 h-3.5 text-cyan-400" />
                <span>SECTION 02 • ORBITAL KINEMATICS & TIME WARP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans uppercase tracking-tight">
                3D Solar System & Keplerian Physics
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                Traverse our star system simulated with true orbital eccentricities, semi-major axes, orbital inclination, and Keplerian velocity propagation. Seamlessly switch between Presentation Scale for visual clarity and True Realistic Scale to experience the awe-inspiring vacuum of interplanetary space.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">Celestial Entities</span>
                  <span className="text-lg font-bold text-cyan-300">20+ Simulated</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">Time Warp Scale</span>
                  <span className="text-lg font-bold text-blue-300">0.1x to 100x</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-500/30 font-mono col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-400 block uppercase">AI Voice Narration</span>
                  <span className="text-lg font-bold text-amber-300">Web Speech API</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNavigateWithSound('solar_system')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <span>Launch Solar System 3D</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(2)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Section 03 • Relativity Lab</span>
                  <ChevronDown className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Simulated 3D Orbital Model Visualizer */}
            <div className="w-full lg:w-[400px] h-72 rounded-2xl bg-gradient-to-br from-cyan-950/60 via-slate-900/80 to-slate-950 border border-cyan-400/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Orbital Telemetry</span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>

              <div className="my-auto flex items-center justify-center relative">
                <div className="w-36 h-36 rounded-full border border-dashed border-cyan-400/50 animate-spin-slow flex items-center justify-center relative">
                  <div className="w-14 h-14 rounded-full bg-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.9)] animate-pulse" />
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,1)]" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,1)]" />
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 text-center">
                Real-time orbital propagation with dynamic camera focal locking
              </div>
            </div>
          </motion.div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 3: RELATIVITY & TIME TRAVEL LAB (Gravitational Wells & Light Cones) */}
        {/* ===================================================================== */}
        <section 
          id="sec-relativity" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-24 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 3 Background: 3D Gravitational Well & Minkowski Spacetime Light Cones */}
          {Math.abs(activeSection - 2) <= 1 ? <RelativityWarpBackground /> : <CosmicAuroraFallback accentColor="rgba(168,85,247,0.15)" />}

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl p-8 sm:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.25)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden"
          >
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-300 text-xs font-mono">
                <Clock className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>SECTION 03 • SPECIAL & GENERAL RELATIVITY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans uppercase tracking-tight">
                Relativity & Time Travel Lab
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                Step into Einstein's spacetime matrix. Calculate exact Lorentz time dilation (<span className="text-purple-300 font-bold">γ = 1/√(1-v²/c²)</span>), simulate the interstellar Twin Paradox rocket expedition, explore extreme gravitational dilation on Miller’s Planet (<span className="text-pink-300 font-bold">1 hr = 7 Earth years</span>), and verify the real-world +38.7 μs/day GPS satellite relativistic drift.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/30 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">Lorentz γ at 0.999c</span>
                  <span className="text-lg font-bold text-purple-300">22.366x Slower</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-pink-500/30 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">Gargantua Orbit</span>
                  <span className="text-lg font-bold text-pink-300">61,320x Dilation</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 font-mono col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-400 block uppercase">GPS Satellites</span>
                  <span className="text-lg font-bold text-emerald-300">+38.7 μs / Day</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNavigateWithSound('relativity_lab')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-600 to-rose-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/30 hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Launch Relativity Lab</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(3)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Section 04 • Cosmic Phenomena</span>
                  <ChevronDown className="w-4 h-4 text-purple-400" />
                </button>
              </div>
            </div>

            {/* Relativity Live Preview Telemetry Card */}
            <div className="w-full lg:w-[400px] h-72 rounded-2xl bg-gradient-to-br from-purple-950/70 via-slate-900/90 to-slate-950 border border-purple-400/40 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">Spacetime Metric</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                  <span>WARP READY</span>
                </span>
              </div>

              <div className="space-y-2.5 my-auto">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Lorentz Gamma (0.90c)</span>
                  <span className="text-purple-300 font-bold">γ = 2.294</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Twin Paradox Trip</span>
                  <span className="text-pink-300 font-bold">10 Yrs Earth / 4.36 Ship</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Gravitational Shift</span>
                  <span className="text-white font-bold">Δt_grav = √(1 - 2GM/rc²)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Photon Trajectory</span>
                  <span className="text-cyan-300 font-bold">Light Cones 45°</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-purple-300/80 text-center border-t border-white/10 pt-3">
                Full 4-Submodule Interactive Relativity Engine
              </div>
            </div>
          </motion.div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 4: COSMIC PHENOMENA (Relativistic Black Hole & Supernova) */}
        {/* ===================================================================== */}
        <section 
          id="sec-phenomena" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-24 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 4 Background: Relativistic Black Hole & Supernova Shockwaves */}
          {Math.abs(activeSection - 3) <= 1 ? <BlackHoleBackground /> : <CosmicAuroraFallback accentColor="rgba(217,70,239,0.15)" />}

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl p-8 sm:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.25)] flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 overflow-hidden"
          >
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-300 text-xs font-mono">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>SECTION 04 • RELATIVISTIC SHOCKWAVES & ACCRETION DISKS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans uppercase tracking-tight">
                Cosmic Phenomena & Supernovae
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                Witness extreme cosmological events. Step through stage timelines, particle ejecta counts, gravitational wave strain, and relativistic lensing shaders across 8 high-energy astrophysics simulators.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Supernova SN 1987A',
                  'Gargantua Black Hole',
                  'Milkomeda Collision',
                  'Big Bang Inflation',
                  'Pillars of Creation',
                  'Neutron Star Kilonova'
                ].map((p, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-purple-900/40 border border-purple-500/40 text-purple-200 text-xs font-mono">
                    {p}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNavigateWithSound('phenomena')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/30 hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <span>Explore Cosmic Phenomena</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(4)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Section 05 • NASA Space Hub</span>
                  <ChevronDown className="w-4 h-4 text-purple-400" />
                </button>
              </div>
            </div>

            {/* Black Hole Accretion Vortex Visualizer */}
            <div className="w-full lg:w-[400px] h-72 rounded-2xl bg-gradient-to-br from-purple-950/60 via-slate-900/80 to-slate-950 border border-purple-400/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-300 font-bold uppercase">Relativistic Accretion</span>
                <Flame className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>

              <div className="my-auto flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-black border-2 border-purple-400 shadow-[0_0_60px_rgba(217,70,239,0.9)] flex items-center justify-center animate-pulse">
                  <div className="w-16 h-16 rounded-full bg-slate-950 shadow-inner flex items-center justify-center">
                    <span className="text-[9px] font-mono text-purple-400 font-bold">R_s</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 text-center">
                Event Horizon & Relativistic Doppler Beaming Shaders
              </div>
            </div>
          </motion.div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 5: NASA LIVE TELEMETRY HUB (APOD, ISS, Mars, Orbital Lab) */}
        {/* ===================================================================== */}
        <section 
          id="sec-spacehub" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-24 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 5 Background: Unique 3D Satellite Telemetry & Deep Space Network Canvas */}
          {Math.abs(activeSection - 4) <= 1 ? <SatelliteTelemetryBackground /> : <CosmicAuroraFallback accentColor="rgba(6,182,212,0.15)" />}

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl p-8 sm:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.25)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                <Satellite className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>SECTION 05 • LIVE NASA APIS & OBSERVATIONAL LAB</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans uppercase tracking-tight">
                NASA Deep-Space Telemetry Hub
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                Connect directly to real-time space agency infrastructure. Monitor the International Space Station flying overhead at 27,600 km/h, query NASA's Astronomy Picture of the Day archives, inspect raw Martian surface imagery from Perseverance and Curiosity, and calculate interplanetary Δv transfer orbits.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">ISS Orbital Speed</span>
                  <span className="text-lg font-bold text-cyan-300">~27,580 km/h</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">Mars Surface Feeds</span>
                  <span className="text-lg font-bold text-purple-300">Curiosity & Percy</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 font-mono col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-400 block uppercase">Orbital Transfer</span>
                  <span className="text-lg font-bold text-emerald-300">Hohmann Δv Lab</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNavigateWithSound('space_hub')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <span>Launch NASA Live Hub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(5)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Section 06 • NEO Defense Radar</span>
                  <ChevronDown className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Simulated Live Telemetry Preview Card */}
            <div className="w-full lg:w-[400px] h-72 rounded-2xl bg-gradient-to-br from-cyan-950/70 via-slate-900/90 to-slate-950 border border-cyan-400/40 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">ISS Real-Time Orbit</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE</span>
                </span>
              </div>

              <div className="space-y-2.5 my-auto">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Altitude</span>
                  <span className="text-white font-bold">~418.6 km (LEO)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Ground Track</span>
                  <span className="text-cyan-300 font-bold">51.64° Sine Wave</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Crew Onboard</span>
                  <span className="text-purple-300 font-bold">Expedition 72 Manifest</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">APOD Status</span>
                  <span className="text-emerald-400 font-bold">Webb & Hubble Feeds</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-cyan-300/80 text-center border-t border-white/10 pt-3">
                Live REST API Caching • 24h Resilience Architecture
              </div>
            </div>
          </motion.div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 6: PLANETARY DEFENSE & ASTEROID RADAR (Tactical Emerald Radar) */}
        {/* ===================================================================== */}
        <section 
          id="sec-defense" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-24 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 6 Background: Tactical 3D Radar Grid & Tumbling Asteroids */}
          {Math.abs(activeSection - 5) <= 1 ? <RadarAsteroidBackground /> : <CosmicAuroraFallback accentColor="rgba(16,185,129,0.15)" />}

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl p-8 sm:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.25)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
                <span>SECTION 06 • NASA JPL NEAR-EARTH OBJECT TELEMETRY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans uppercase tracking-tight">
                Planetary Defense & Asteroid Radar
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                Monitor real-time Near-Earth Asteroids (NEOs) approaching within Lunar Distances. Calculate impact energy in Megatons of TNT, crater diameters, and inspect orbital intercept vectors in a 3D tactical radar display.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 font-mono">
                  <span className="text-xs text-emerald-300 font-bold block uppercase">Sentry Threat Matrix</span>
                  <span className="text-[11px] text-slate-400">Torino & Palermo Scale impact risk calculation</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 font-mono">
                  <span className="text-xs text-emerald-300 font-bold block uppercase">Live NASA JPL Feed</span>
                  <span className="text-[11px] text-slate-400">Direct integration with JPL CNEOS feed</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNavigateWithSound('neo_radar')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <span>Launch Defense Radar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(6)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Explore Section 07 • Galactic Codex</span>
                  <ChevronDown className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </div>

            {/* Tactical Radar Display */}
            <div className="w-full lg:w-[400px] h-72 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-slate-900/80 to-slate-950 border border-emerald-400/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-300 font-bold uppercase">Active Radar Sweep</span>
                <Crosshair className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              </div>

              <div className="my-auto flex items-center justify-center relative">
                <div className="w-36 h-36 rounded-full border border-emerald-500/40 flex items-center justify-center relative">
                  <div className="w-24 h-24 rounded-full border border-emerald-500/30" />
                  <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,1)]" />
                  <div className="absolute top-4 right-8 w-2.5 h-2.5 rounded-full bg-red-400 animate-ping" />
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 text-center">
                Tracking 99942 Apophis, Bennu, Ryugu, and live NEO vectors
              </div>
            </div>
          </motion.div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 7: GALACTIC CODEX (Golden Spiral Galaxy & Constellations) */}
        {/* ===================================================================== */}
        <section 
          id="sec-codex" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-24 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 7 Background: Golden Logarithmic 4-Arm Spiral Galaxy */}
          {Math.abs(activeSection - 6) <= 1 ? <SpiralGalaxyBackground /> : <CosmicAuroraFallback accentColor="rgba(245,158,11,0.15)" />}

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl p-8 sm:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-amber-500/40 shadow-[0_0_60px_rgba(245,158,11,0.25)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden"
          >
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>SECTION 07 • ASTROPHYSICAL PEER-REVIEWED ARCHIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans uppercase tracking-tight">
                Galactic Codex & AI Narrator
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                Delve into 20+ comprehensive astrophysical guides covering stellar lifecycles, dark energy, neutron stars, quantum fluctuations, and extraterrestrial habitability. Listen with Web Speech AI narration or test your mastery with interactive quizzes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">Curated Guides</span>
                  <span className="text-lg font-bold text-amber-300">20+ Articles</span>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">AI Narration</span>
                  <span className="text-lg font-bold text-amber-300">Natural Voice</span>
                </div>
                <button
                  onClick={() => handleNavigateWithSound('knowledge_base')}
                  className="p-3.5 rounded-xl bg-amber-950/40 hover:bg-amber-950/70 border border-amber-500/30 hover:border-amber-400 font-mono col-span-2 sm:col-span-1 text-left transition-all cursor-pointer group"
                >
                  <span className="text-[11px] text-slate-400 block uppercase group-hover:text-amber-300">Codex Quizzes</span>
                  <span className="text-lg font-bold text-amber-300 flex items-center justify-between">
                    <span>Interactive</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNavigateWithSound('knowledge_base')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <span>Open Galactic Codex</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(7)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Explore Section 08 • Comparison Lab</span>
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[400px] h-72 rounded-2xl bg-gradient-to-br from-amber-950/60 via-slate-900/80 to-slate-950 border border-amber-400/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-300 font-bold uppercase">Codex Hologram</span>
                <Atom className="w-4 h-4 text-amber-400 animate-spin-slow" />
              </div>

              <div className="my-auto flex flex-col items-center justify-center space-y-2">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                  <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-amber-300" />
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-300 font-bold">20 Modules Synchronized</span>
              </div>

              <div className="text-[11px] font-mono text-slate-400 text-center">
                Peer-reviewed astrophysical data with 3D interactive models
              </div>
            </div>
          </motion.div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 8: COMPARISON LAB (Spacetime Grid & Laser Scale Bench) */}
        {/* ===================================================================== */}
        <section 
          id="sec-comparison" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-24 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 8 Background: Spacetime Gravitational Curvature & Laser Bench */}
          {Math.abs(activeSection - 7) <= 1 ? <ScaleArenaBackground /> : <CosmicAuroraFallback accentColor="rgba(236,72,153,0.15)" />}

          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl p-8 sm:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-pink-500/40 shadow-[0_0_60px_rgba(236,72,153,0.25)] flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/15 border border-pink-500/40 text-pink-300 text-xs font-mono">
                <Scale className="w-3.5 h-3.5 text-pink-400" />
                <span>SECTION 08 • 1-VS-1 SCALE BENCHMARK LAB</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans uppercase tracking-tight">
                Comparison Lab & True Scale
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                Benchmark cosmic objects side-by-side. Calculate exact volume ratios, surface gravity differentials, and mass multipliers from the Earth and Moon to hypergiants like UY Scuti and supermassive black holes like TON 618.
              </p>

              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-pink-950/40 border border-pink-500/30 font-mono">
                  <span className="text-xs text-pink-300 font-bold block uppercase">Volumetric Multiplier</span>
                  <span className="text-[11px] text-slate-400">Exact mathematical radius ratio & volume exponent</span>
                </div>
                <div className="p-3.5 rounded-xl bg-pink-950/40 border border-pink-500/30 font-mono">
                  <span className="text-xs text-pink-300 font-bold block uppercase">Cross-Comparison</span>
                  <span className="text-[11px] text-slate-400">Compare any two entities across the entire catalog</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNavigateWithSound('comparison_lab')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/30 hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <span>Launch Comparison Lab</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(8)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Explore Section 09 • Cosmic Records</span>
                  <ChevronDown className="w-4 h-4 text-pink-400" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[400px] h-72 rounded-2xl bg-gradient-to-br from-pink-950/60 via-slate-900/80 to-slate-950 border border-pink-400/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-pink-300 font-bold uppercase">Dual Scale Bench</span>
                <Scale className="w-4 h-4 text-pink-400 animate-pulse" />
              </div>

              <div className="my-auto flex items-center justify-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
                  <span className="text-[10px] font-mono text-cyan-300 mt-2">Earth (1.0x)</span>
                </div>
                <span className="text-xs font-mono text-pink-400 font-bold">VS</span>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.9)]" />
                  <span className="text-[10px] font-mono text-amber-300 mt-2">Sun (109x)</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 text-center">
                Interactive real-time 3D side-by-side rendering
              </div>
            </div>
          </motion.div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 9: STELLAR DASHBOARDS (Cybernetic Data Streams & Matrix) */}
        {/* ===================================================================== */}
        <section 
          id="sec-dashboards" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-center items-center px-4 sm:px-12 lg:px-20 py-24 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 9 Background: Cybernetic Telemetry Data Stream & 3D Holograms */}
          {Math.abs(activeSection - 8) <= 1 ? <CyberMatrixBackground /> : <CosmicAuroraFallback accentColor="rgba(99,102,241,0.15)" />}

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl p-8 sm:p-12 rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-indigo-500/40 shadow-[0_0_60px_rgba(99,102,241,0.25)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden"
          >
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 text-xs font-mono">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>SECTION 09 • COSMIC RECORDS & ALL-TIME RANKINGS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans uppercase tracking-tight">
                Cosmic Records & Rankings
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                Inspect structured records of the cosmos. Analyze Top 10 largest hypergiant stars, most massive black holes, most extreme surface temperatures, and Earth Similarity Index (ESI) exoplanets.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">Hypergiant Stars</span>
                  <span className="text-lg font-bold text-indigo-300">Top 10 Ranked</span>
                </div>
                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 font-mono">
                  <span className="text-[11px] text-slate-400 block uppercase">Black Holes</span>
                  <span className="text-lg font-bold text-indigo-300">TON 618, M87*</span>
                </div>
                <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 font-mono col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-400 block uppercase">Habitability Index</span>
                  <span className="text-lg font-bold text-indigo-300">ESI Metrics</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNavigateWithSound('dashboards')}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/30 hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <span>Explore Cosmic Records</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(9)}
                  className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Section 10 • Mission Control & Telemetry</span>
                  <ChevronDown className="w-4 h-4 text-indigo-400" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[400px] h-72 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900/80 to-slate-950 border border-indigo-400/30 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-300 font-bold uppercase">Leaderboard Analytics</span>
                <Activity className="w-4 h-4 text-indigo-400 animate-pulse" />
              </div>

              <div className="space-y-2.5 my-auto">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">1. Stephenson 2-18</span>
                  <span className="text-indigo-400 font-bold">2,150 R_sun</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-indigo-400 h-full rounded-full w-[100%]" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">2. UY Scuti</span>
                  <span className="text-indigo-400 font-bold">1,708 R_sun</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-indigo-400 h-full rounded-full w-[80%]" />
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 text-center">
                Interactive real-time filtering & sorting across 4 categories
              </div>
            </div>
          </motion.div>
        </section>


        {/* ===================================================================== */}
        {/* SECTION 10: MISSION CONTROL & OBSERVABLE UNIVERSE (3D Cosmic Web) */}
        {/* ===================================================================== */}
        <section 
          id="sec-telemetry" 
          className="min-h-screen h-screen snap-start w-full relative flex flex-col justify-between items-center px-4 sm:px-12 lg:px-20 pt-28 pb-10 overflow-hidden bg-[#020617] text-white"
          style={{ backgroundColor: '#020617' }}
        >
          {/* Section 10 Background: Intergalactic Filament Cosmic Web & Superclusters */}
          {Math.abs(activeSection - 9) <= 1 ? <CosmicWebBackground /> : <CosmicAuroraFallback accentColor="rgba(139,92,246,0.15)" />}

          <div className="relative z-10 w-full max-w-6xl my-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>SECTION 10 • OBSERVABLE UNIVERSE TELEMETRY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-sans uppercase tracking-tight">
              Universal Constants & Telemetry
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-4 text-left">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Observable Diameter</span>
                <span className="text-xl font-bold text-cyan-300 font-mono">93.016 Gly</span>
                <span className="text-[10px] font-mono text-slate-500 block mt-1">8.80 × 10²⁶ meters</span>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Cosmic Age</span>
                <span className="text-xl font-bold text-fuchsia-300 font-mono">13.787 Gyr</span>
                <span className="text-[10px] font-mono text-slate-500 block mt-1">± 0.020 billion years</span>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Hubble Parameter</span>
                <span className="text-xl font-bold text-indigo-300 font-mono">70.0 km/s/Mpc</span>
                <span className="text-[10px] font-mono text-slate-500 block mt-1">Cosmic Expansion Rate</span>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Rendering Engine</span>
                <span className="text-xl font-bold text-emerald-300 font-mono">Three.js 60FPS</span>
                <span className="text-[10px] font-mono text-slate-500 block mt-1">GPU Accelerated WebGL</span>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection(0)}
                className="px-6 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Back to Top Overview</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 rotate-[-90deg]" />
              </button>
            </div>
          </div>

          <footer className="relative z-10 w-full max-w-6xl pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>NOVANEXUS ASTROPHYSICS LAB • 2026 EDITION</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Keplerian Kinematics • NASA JPL CNEOS • Lorentz Spacetime</span>
              <span>•</span>
              <span className="text-cyan-300">All Systems Operational</span>
            </div>
          </footer>
        </section>

      </div>
    </div>
  );
};
