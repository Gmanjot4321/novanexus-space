import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Satellite, 
  Calendar, 
  Camera, 
  Rocket, 
  Sparkles, 
  RefreshCw, 
  Volume2, 
  VolumeX, 
  Info, 
  ExternalLink, 
  Cpu, 
  Maximize2, 
  User, 
  Gauge, 
  Clock,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
  Sliders,
  Play,
  Pause,
  AlertTriangle,
  Compass,
  HelpCircle,
  Film,
  Smile,
  Flame,
  ArrowRight,
  CheckCircle2,
  Globe,
  Radio,
  Activity
} from 'lucide-react';
import { ApodData, IssTelemetry, MarsRoverPhoto, HohmannMission } from '../types';
import { 
  fetchApod, 
  fetchIssTelemetry, 
  fetchIssLocationDescription,
  fetchMarsPhotos, 
  ACTIVE_ASTRONAUTS, 
  HOHMANN_PRESETS,
  calculateHohmannTransfer,
  CURATED_APOD_LIBRARY 
} from '../services/nasaApiService';
import { audioEngine } from '../utils/audioEngine';
import { Tooltip } from './Tooltip';

export const SpaceHubView: React.FC = () => {
  // Navigation tabs within Space Hub
  const [activeTab, setActiveTab] = useState<'apod' | 'iss' | 'mars' | 'orbital_lab'>('apod');

  // ============================================================================
  // TAB 1: NASA APOD (Astronomy Picture of the Day)
  // ============================================================================
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [isApodLoading, setIsApodLoading] = useState<boolean>(true);
  const [isApodLive, setIsApodLive] = useState<boolean>(true);
  const [isApodSpeaking, setIsApodSpeaking] = useState<boolean>(false);
  const [showHdModal, setShowHdModal] = useState<boolean>(false);
  const [videoPlayInline, setVideoPlayInline] = useState<boolean>(false);
  const [iframeError, setIframeError] = useState<boolean>(false);

  const loadApod = useCallback(async (dateToFetch?: string) => {
    setIsApodLoading(true);
    setIframeError(false);
    setVideoPlayInline(false);
    try {
      const result = await fetchApod(dateToFetch);
      setApodData(result.data);
      setIsApodLive(result.isLive);
    } catch {
      setApodData(CURATED_APOD_LIBRARY[0]);
      setIsApodLive(false);
    } finally {
      setIsApodLoading(false);
    }
  }, []);

  useEffect(() => {
    loadApod(selectedDate);
  }, [selectedDate, loadApod]);

  // Clean speech when tab unmounts or changes
  useEffect(() => {
    return () => {
      audioEngine.stopSpeech();
    };
  }, []);

  const handleToggleApodSpeech = () => {
    if (isApodSpeaking) {
      audioEngine.stopSpeech();
      setIsApodSpeaking(false);
    } else if (apodData) {
      const textToRead = `${apodData.title}. Recorded on ${apodData.date}. ${apodData.explanation}`;
      audioEngine.speak(textToRead, () => setIsApodSpeaking(false), 0.96);
      setIsApodSpeaking(true);
    }
  };

  const handleRandomApod = () => {
    audioEngine.playClickSound();
    const randomYear = 2016 + Math.floor(Math.random() * 9);
    const randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const randomDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    const newDate = `${randomYear}-${randomMonth}-${randomDay}`;
    setSelectedDate(newDate);
  };

  // ============================================================================
  // TAB 2: REAL-TIME ISS TELEMETRY & WORLD MERCATOR TRACKER
  // ============================================================================
  const [issData, setIssData] = useState<IssTelemetry | null>(null);
  const [issTerritory, setIssTerritory] = useState<string>('Tracking orbital trajectory...');
  const [isIssLive, setIsIssLive] = useState<boolean>(true);
  const [issHistory, setIssHistory] = useState<{ lat: number; lon: number }[]>([]);
  const issCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Poll ISS coordinates every 3 seconds
  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const pollIss = async () => {
      if (document.hidden || activeTab !== 'iss') {
        timeoutId = setTimeout(pollIss, 3500);
        return;
      }
      try {
        const { telemetry, isLive } = await fetchIssTelemetry();
        if (isMounted) {
          setIssData(telemetry);
          setIsIssLive(isLive);
          setIssHistory(prev => {
            const next = [...prev, { lat: telemetry.latitude, lon: telemetry.longitude }];
            return next.slice(-40);
          });
          
          fetchIssLocationDescription(telemetry.latitude, telemetry.longitude).then(desc => {
            if (isMounted) setIssTerritory(desc);
          });
        }
      } catch {}
      if (isMounted) {
        timeoutId = setTimeout(pollIss, 3000);
      }
    };

    pollIss();
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [activeTab]);

  // Render Mercator ISS ground track canvas
  useEffect(() => {
    if (activeTab !== 'iss' || !issCanvasRef.current || !issData) return;
    const canvas = issCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background (Deep space navy)
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, width, height);

    // Draw latitude & longitude grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += width / 12) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += height / 6) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Equator and Prime Meridian accent
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Projected sine wave orbital ground track path
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.45)';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    for (let px = 0; px < width; px += 2) {
      const lon = ((px / width) * 360) - 180;
      const phase = ((lon - issData.longitude) * Math.PI) / 180;
      const lat = Math.sin(phase) * 51.64; // ISS orbital inclination = 51.64 deg
      const py = height / 2 - (lat / 90) * (height / 2);
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw previous trajectory trail points
    if (issHistory.length > 1) {
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      issHistory.forEach((pt, idx) => {
        const px = ((pt.lon + 180) / 360) * width;
        const py = height / 2 - (pt.lat / 90) * (height / 2);
        if (idx === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
    }

    // Convert current ISS Lat/Lon to canvas coordinates
    const issX = ((issData.longitude + 180) / 360) * width;
    const issY = height / 2 - (issData.latitude / 90) * (height / 2);

    // Line of sight radio coverage footprint circle
    const footprintRadiusPx = (issData.footprint / 40075) * width;
    const gradient = ctx.createRadialGradient(issX, issY, 4, issX, issY, footprintRadiusPx);
    gradient.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
    gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(issX, issY, footprintRadiusPx, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(6, 182, 212, 0.7)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // ISS Satellite Radar Ping Symbol
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(issX, issY, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(issX, issY, 10, 0, Math.PI * 2);
    ctx.stroke();

    // Solar panels crossbar
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(issX - 12, issY);
    ctx.lineTo(issX + 12, issY);
    ctx.stroke();

    // Label coordinates
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '10px ui-monospace, monospace';
    ctx.fillText(
      `ISS: ${issData.latitude.toFixed(1)}°, ${issData.longitude.toFixed(1)}°`, 
      Math.min(width - 140, Math.max(10, issX - 50)), 
      Math.max(20, issY - 16)
    );
  }, [activeTab, issData, issHistory]);

  // ============================================================================
  // TAB 3: MARS ROVER DISPATCH (Perseverance & Curiosity)
  // ============================================================================
  const [selectedRover, setSelectedRover] = useState<'curiosity' | 'perseverance'>('perseverance');
  const [selectedSol, setSelectedSol] = useState<number>(-1); // -1 = Latest Downlink
  const [selectedCamera, setSelectedCamera] = useState<string>('ALL');
  const [marsPhotos, setMarsPhotos] = useState<MarsRoverPhoto[]>([]);
  const [isMarsLoading, setIsMarsLoading] = useState<boolean>(true);
  const [inspectPhoto, setInspectPhoto] = useState<MarsRoverPhoto | null>(null);
  const [activeSolReported, setActiveSolReported] = useState<number | undefined>(undefined);

  const loadMars = useCallback(async (randomize: boolean = false) => {
    setIsMarsLoading(true);
    try {
      const res = await fetchMarsPhotos(selectedRover, selectedSol, selectedCamera, randomize);
      setMarsPhotos(res.photos);
      setActiveSolReported(res.activeSol);
    } catch {
      setMarsPhotos([]);
    } finally {
      setIsMarsLoading(false);
    }
  }, [selectedRover, selectedSol, selectedCamera]);

  useEffect(() => {
    if (activeTab === 'mars') {
      loadMars(false);
    }
  }, [activeTab, selectedRover, selectedSol, selectedCamera, loadMars]);

  const handleRefreshMarsPhotos = () => {
    audioEngine.playClickSound(659.25);
    loadMars(true);
  };

  const handleRandomMarsSol = () => {
    audioEngine.playClickSound(523.25);
    const roverSols = selectedRover === 'perseverance' 
      ? [10, 100, 350, 500, 750, 890, 1000, 1100, 1200]
      : [100, 500, 750, 1000, 2000, 2500, 3000, 3840, 4000];
    const randSol = roverSols[Math.floor(Math.random() * roverSols.length)];
    setSelectedSol(randSol);
  };

  // ============================================================================
  // TAB 4: KEPLERIAN ORBITAL MECHANICS & HOHMANN TRANSFER LAB
  // ============================================================================
  const [selectedPresetId, setSelectedPresetId] = useState<string>('earth_mars');
  const [customR1, setCustomR1] = useState<number>(1.0);
  const [customR2, setCustomR2] = useState<number>(1.524);
  const [rocketIsp, setRocketIsp] = useState<number>(380); // LOX/CH4 Raptor engine ~380s vacuum
  const [isSimPlaying, setIsSimPlaying] = useState<boolean>(true);
  const orbitalCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const orbitProgressRef = useRef<number>(0);

  const activePreset = useMemo(() => {
    return HOHMANN_PRESETS.find(p => p.id === selectedPresetId) || HOHMANN_PRESETS[0];
  }, [selectedPresetId]);

  const transferCalc = useMemo(() => {
    return calculateHohmannTransfer(customR1, customR2, rocketIsp);
  }, [customR1, customR2, rocketIsp]);

  const handleSelectPreset = (preset: HohmannMission) => {
    audioEngine.playClickSound();
    setSelectedPresetId(preset.id);
    setCustomR1(preset.fromRadiusAU);
    setCustomR2(preset.toRadiusAU);
  };

  // 2D Orbital Mechanics Keplerian Canvas Renderer
  useEffect(() => {
    if (activeTab !== 'orbital_lab' || !orbitalCanvasRef.current) return;
    const canvas = orbitalCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let startTime = performance.now();

    const renderOrbit = (now: number) => {
      const dt = (now - startTime) / 1000;
      startTime = now;

      if (isSimPlaying) {
        orbitProgressRef.current = (orbitProgressRef.current + dt * 0.15) % 1.0;
      }

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, w, h);

      // Coordinate scale based on max orbit radius
      const maxR = Math.max(customR1, customR2, 0.1);
      const scale = (Math.min(w, h) * 0.38) / maxR;

      // Distance grid rings (Astronomical Units)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      [0.5, 1.0, 1.5, 2.0, 3.0, 5.0].forEach(au => {
        const rPx = au * scale;
        if (rPx < Math.min(w, h) / 2) {
          ctx.beginPath();
          ctx.arc(cx, cy, rPx, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
          ctx.font = '9px ui-monospace, monospace';
          ctx.fillText(`${au} AU`, cx + rPx + 4, cy - 4);
        }
      });

      // Departure Body Circular Orbit (e.g. Earth)
      const r1Px = customR1 * scale;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r1Px, 0, Math.PI * 2);
      ctx.stroke();

      // Arrival Body Circular Orbit (e.g. Mars)
      const r2Px = customR2 * scale;
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r2Px, 0, Math.PI * 2);
      ctx.stroke();

      // Hohmann Elliptical Transfer Trajectory Orbit
      const aPx = ((customR1 + customR2) / 2) * scale;
      const cPx = ((customR2 - customR1) / 2) * scale;
      const bPx = Math.sqrt(Math.max(1, aPx * aPx - cPx * cPx));
      const ellipseCenterX = cx + cPx;

      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.ellipse(ellipseCenterX, cy, aPx, bPx, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Highlight the active transfer half-arc (departure to arrival)
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(ellipseCenterX, cy, aPx, bPx, 0, Math.PI, 2 * Math.PI, false);
      ctx.stroke();

      // Central Host Star (The Sun)
      const sunGrad = ctx.createRadialGradient(cx, cy, 3, cx, cy, 22);
      sunGrad.addColorStop(0, '#ffffff');
      sunGrad.addColorStop(0.3, '#fef08a');
      sunGrad.addColorStop(0.8, '#f59e0b');
      sunGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 22, 0, Math.PI * 2);
      ctx.fill();

      // Spacecraft position on the transfer ellipse
      const theta = Math.PI + orbitProgressRef.current * Math.PI; // sweeps from 180 to 360 deg
      const craftX = ellipseCenterX + aPx * Math.cos(theta);
      const craftY = cy + bPx * Math.sin(theta);

      // Draw spacecraft beacon
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(craftX, craftY, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(craftX, craftY, 9, 0, Math.PI * 2);
      ctx.stroke();

      // Velocity vector tangent indicator
      const vx = -aPx * Math.sin(theta);
      const vy = bPx * Math.cos(theta);
      const vLen = Math.sqrt(vx * vx + vy * vy) || 1;
      const vUnitX = (vx / vLen) * 22;
      const vUnitY = (vy / vLen) * 22;

      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(craftX, craftY);
      ctx.lineTo(craftX + vUnitX, craftY + vUnitY);
      ctx.stroke();

      // Departure body position
      const depX = cx - r1Px;
      const depY = cy;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(depX, depY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#bae6fd';
      ctx.font = '10px ui-monospace, monospace';
      ctx.fillText('Departure (Burn 1)', depX - 45, depY - 12);

      // Arrival body position (180 deg opposite)
      const arrX = cx + r2Px;
      const arrY = cy;
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(arrX, arrY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fecdd3';
      ctx.fillText('Arrival (Burn 2)', arrX - 25, arrY - 12);

      animFrameRef.current = requestAnimationFrame(renderOrbit);
    };

    animFrameRef.current = requestAnimationFrame(renderOrbit);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeTab, customR1, customR2, isSimPlaying]);

  return (
    <div className="w-full h-full relative bg-[#020617] overflow-y-auto pt-32 sm:pt-36 md:pt-40 pb-44 px-3 sm:px-6 lg:px-8 text-white select-none">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* TOP STATUS BAR & SUB-VIEW NAVIGATOR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/20">
              <Satellite className="w-4 h-4 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold text-white tracking-wide font-mono uppercase">
                  NASA Deep-Space Telemetry Hub
                </h1>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  <span>LIVE APIS CONNECTED</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Observational astronomy, live orbital tracking, Martian raw downlinks, and Keplerian kinematics
              </p>
            </div>
          </div>

          {/* Sub-view Navigation Pill Bar */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/10 overflow-x-auto no-scrollbar">
            {[
              { id: 'apod' as const, label: 'NASA APOD', icon: Sparkles, desc: 'Daily high-resolution celestial photography & astrophysical analysis' },
              { id: 'iss' as const, label: 'ISS Live Orbit', icon: Satellite, desc: 'Real-time telemetry, geographic coordinates, and active crew roster' },
              { id: 'mars' as const, label: 'Mars Rovers', icon: Camera, desc: 'Raw multispectral downlinks from Perseverance & Curiosity' },
              { id: 'orbital_lab' as const, label: 'Hohmann Δv Lab', icon: Rocket, desc: 'Interactive Keplerian orbital mechanics & interplanetary trajectory calculator' },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <Tooltip key={tab.id} title={tab.label} content={tab.desc} side="bottom">
                  <button
                    onClick={() => {
                      audioEngine.playClickSound();
                      setActiveTab(tab.id);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/30 via-indigo-600/30 to-purple-600/30 text-white border border-cyan-400/50 shadow-md shadow-cyan-500/20 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                </Tooltip>
              );
            })}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* MODULE 1: NASA APOD (Astronomy Picture of the Day) */}
        {/* ==================================================================== */}
        {activeTab === 'apod' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual Media Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl group min-h-[340px] flex items-center justify-center">
                {isApodLoading ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-400">
                    <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
                    <span className="text-xs font-mono">Querying NASA Deep Space Imagery Archives...</span>
                  </div>
                ) : apodData?.media_type === 'video' ? (
                  <div className="w-full aspect-video relative bg-slate-950 flex flex-col items-center justify-center p-2 sm:p-4">
                    {(() => {
                      const isDirectVideo = Boolean(
                        apodData.url && (
                          apodData.url.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i) ||
                          apodData.url.includes('.mp4') ||
                          apodData.url.includes('.webm')
                        )
                      );
                      
                      if (videoPlayInline) {
                        if (isDirectVideo) {
                          return (
                            <div className="w-full h-full relative rounded-xl overflow-hidden bg-black flex items-center justify-center">
                              <video 
                                key={apodData.url}
                                controls 
                                autoPlay 
                                playsInline 
                                preload="auto"
                                className="w-full h-full object-contain rounded-xl bg-black"
                                poster={apodData.thumbnail_url}
                              >
                                <source src={apodData.url} type={apodData.url.includes('.webm') ? 'video/webm' : 'video/mp4'} />
                                Your browser does not support HTML5 video streaming.
                              </video>
                            </div>
                          );
                        }
                        
                        if (!iframeError) {
                          // Format embeddable URL for YouTube or Vimeo so inline playback works for today and any date
                          let embedUrl = apodData.url;
                          const ytMatch = apodData.url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
                          if (ytMatch && ytMatch[1]) {
                            embedUrl = `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
                          } else {
                            const vimeoMatch = apodData.url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/i);
                            if (vimeoMatch && vimeoMatch[1]) {
                              embedUrl = `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
                            }
                          }

                          return (
                            <iframe 
                              src={embedUrl} 
                              title={apodData.title}
                              className="w-full h-full border-0 rounded-xl"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              onError={() => setIframeError(true)}
                            />
                          );
                        }

                        return (
                          <div className="text-center space-y-3 p-6 rounded-2xl bg-slate-900/90 border border-rose-500/30 max-w-md">
                            <AlertTriangle className="w-8 h-8 text-rose-400 mx-auto" />
                            <p className="text-xs font-mono text-slate-300">
                              External video provider prevented inline embed. You can watch directly via the dedicated player:
                            </p>
                            <a
                              href={apodData.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-200 text-xs font-mono transition-all"
                            >
                              <span>Open in Dedicated Player</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        );
                      }

                      return (
                        <div className="text-center space-y-4 max-w-md p-6 rounded-2xl bg-slate-900/80 border border-white/15">
                          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center mx-auto text-purple-300 shadow-lg shadow-purple-500/20">
                            <Film className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold font-mono text-white mb-1">
                              {isDirectVideo ? 'NASA Astronomical Direct Video Stream' : 'Astronomical Video & Time-Lapse'}
                            </h3>
                            <p className="text-xs font-mono text-slate-400">
                              {isDirectVideo 
                                ? 'Astronomical time-lapse ready for smooth inline HTML5 video playback.' 
                                : 'This record contains an external astronomical video presentation.'}
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <Tooltip
                              title="Play Inline"
                              badge="HTML5 / Embed"
                              content="Streams the astronomical video or time-lapse directly within this frame."
                            >
                              <button
                                onClick={() => {
                                  audioEngine.playClickSound();
                                  setVideoPlayInline(true);
                                }}
                                className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-200 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/10 hover:scale-105"
                              >
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>Play Inline {isDirectVideo ? '(Direct Stream)' : ''}</span>
                              </button>
                            </Tooltip>

                            <Tooltip
                              title="Dedicated Window"
                              content="Opens the astronomical video in its original full-screen player or host platform in a new tab."
                            >
                              <a
                                href={apodData.url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
                              >
                                <span>Open in Dedicated Player</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </Tooltip>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img 
                      src={apodData?.url || CURATED_APOD_LIBRARY[0].url} 
                      alt={apodData?.title || 'NASA Astronomy Picture of the Day'}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // Resilient fallback if remote NASA mirror blocks hotlinking or is unreachable
                        (e.currentTarget as HTMLImageElement).src = CURATED_APOD_LIBRARY[0].url;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono pointer-events-auto">
                      <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-slate-300">
                        {apodData?.date}
                      </span>
                      <Tooltip
                        title="Inspect HD Master"
                        badge="High-Res"
                        side="left"
                        content="Examines the full uncompressed high-resolution deep space capture in an interactive viewport."
                      >
                        <button
                          onClick={() => setShowHdModal(true)}
                          className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
                          <span>Inspect HD</span>
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                )}
              </div>

              {/* Discovery Timeline Controls */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-300">Archive Date:</span>
                  <input 
                    type="date"
                    value={selectedDate}
                    max={todayStr}
                    min="1995-06-16"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-2.5 py-1 bg-slate-950 border border-white/15 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400 transition-all cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Tooltip
                    title="Jump to Today"
                    content="Resets calendar to today's latest astronomical picture or video published by NASA."
                  >
                    <button
                      onClick={() => setSelectedDate(todayStr)}
                      className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
                    >
                      Today
                    </button>
                  </Tooltip>

                  <Tooltip
                    title="Surprise Day"
                    badge="Cosmic RNG"
                    side="top"
                    content="Jumps to a random date between 1995 and 2024 to discover unexpected nebulas, supernovas, black holes, or planetary flybys."
                  >
                    <button
                      onClick={handleRandomApod}
                      className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 border border-purple-500/30 text-xs font-mono text-purple-200 transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-purple-300" />
                      <span>Surprise Day</span>
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>

            {/* Scientific Explanation Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                      ASTRONOMICAL RECORD
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-white font-mono leading-snug">
                      {apodData?.title || 'Loading Celestial Capture...'}
                    </h2>
                  </div>

                  {/* Audio Reader Switch */}
                  <Tooltip
                    title="Voice Briefing"
                    badge="Web Speech AI"
                    side="left"
                    content={isApodSpeaking ? "Stops active voice narration of the astronomical explanation." : "Synthesizes an audio voice reading of the astrophysical explanation."}
                  >
                    <button
                      onClick={handleToggleApodSpeech}
                      className={`p-2 rounded-xl border transition-all cursor-pointer shrink-0 ${
                        isApodSpeaking 
                          ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {isApodSpeaking ? <VolumeX className="w-4 h-4 text-cyan-300" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </Tooltip>
                </div>

                <div className="text-xs text-slate-300 font-sans leading-relaxed space-y-3 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                  <p>{apodData?.explanation}</p>
                </div>

                {/* Metadata card footer */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                  <span>Credit: {apodData?.copyright || 'NASA / STScI Public Archive'}</span>
                  {apodData?.hdurl && (
                    <a 
                      href={apodData.hdurl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Direct Raw Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Fun Cosmic Stargazer Tip */}
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                  <Smile className="w-3.5 h-3.5 text-amber-300" />
                  <span>Stargazer Pro-Tip</span>
                </span>
                <p className="text-[11px] text-slate-300 font-mono leading-relaxed">
                  Every image here is literally a cosmic time machine: looking at a galaxy 100 million light-years away means you are seeing light that left back when dinosaurs were chilling on Earth. Space doesn&apos;t just measure distance—it rewinds time.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* MODULE 2: REAL-TIME ISS TELEMETRY & MERCATOR TRACKER */}
        {/* ==================================================================== */}
        {activeTab === 'iss' && (
          <div className="space-y-6">
            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Orbital Speed
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                    {issData?.velocity.toLocaleString() || '27,580'}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">km/h</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 block mt-1">
                  ~Mach 22.5 (1 orbital lap every 92.9 min)
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Orbital Altitude
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-purple-400">
                    {issData?.altitude.toFixed(1) || '418.6'}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">km</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 block mt-1">
                  Low Earth Orbit (Thermosphere layer)
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Coordinates
                </span>
                <div className="text-xs sm:text-sm font-bold font-mono text-emerald-400 truncate">
                  {issData ? `${issData.latitude.toFixed(2)}°, ${issData.longitude.toFixed(2)}°` : '0.00°, 0.00°'}
                </div>
                <span className="text-[10px] font-mono text-slate-400 block mt-1 truncate">
                  {issTerritory}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Solar Array State
                </span>
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${issData?.visibility === 'daylight' ? 'bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-indigo-500'}`} />
                  <span className="text-sm sm:text-base font-bold font-mono text-white uppercase">
                    {issData?.visibility || 'DAYLIGHT'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 block mt-1">
                  {issData?.visibility === 'daylight' ? 'Solar cells generating 120kW' : 'Running on Li-ion battery banks'}
                </span>
              </div>
            </div>

            {/* Canvas World Ground Track Projection Map */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-white/10 shadow-2xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 font-bold text-white uppercase">
                  <Satellite className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>Live Sinusoidal Ground Track & Line-of-Sight Footprint</span>
                </span>
                <span className="text-[11px] text-cyan-400 font-mono">
                  NORAD ID #25544 (ZARYA)
                </span>
              </div>

              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-white/10 bg-[#030712]">
                <canvas 
                  ref={issCanvasRef} 
                  width={960} 
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span>Current Spacecraft Position</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 bg-purple-500" />
                  <span>51.64° Orbital Inclination Wave</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full border border-cyan-400/60 bg-cyan-400/20" />
                  <span>~4,400km Radio Horizon Footprint</span>
                </span>
              </div>
            </div>

            {/* Astronauts Currently in Space Roster */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold font-mono text-white flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" />
                  <span>HUMANS IN SPACE RIGHT NOW ({ACTIVE_ASTRONAUTS.length} COSMONAUTS & ASTRONAUTS)</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-400">
                  Expedition 72 Manifest
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {ACTIVE_ASTRONAUTS.map((person, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-white/5 space-y-1">
                    <span className="text-xs font-mono font-bold text-white block truncate">
                      {person.name}
                    </span>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{person.agency}</span>
                      <span className="px-1.5 py-0.2 bg-white/5 rounded text-cyan-300">{person.craft}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* MODULE 3: MARS ROVER DISPATCH (Perseverance & Curiosity) */}
        {/* ==================================================================== */}
        {activeTab === 'mars' && (
          <div className="space-y-6">
            {/* Telemetry Reality Banner */}
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs font-mono leading-relaxed space-y-1">
              <div className="flex items-center gap-2 text-rose-300 font-bold">
                <Smile className="w-4 h-4 shrink-0 text-amber-300" />
                <span>WHY MARS ROVERS CAN&apos;T LIVESTREAM LIKE TWITCH STREAMERS:</span>
              </div>
              <p>
                Mars is between 54,000,000 and 400,000,000 km away! Radio signals travel at the speed of light, but still take between 4 and 24 minutes one way. If NASA tried steering with a joystick in real-time, the rover would fall off a cliff 20 minutes before anyone on Earth even saw the edge. Instead, these billion-dollar robot geologists drive themselves with AI hazard avoidance, snap high-res science photos, beam them up to satellites passing overhead, and downlink them to Earth Sol by Sol.
              </p>
            </div>

            {/* Rover Controls */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-300">Active Rover:</span>
                <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-white/10">
                  <Tooltip
                    title="Perseverance Rover"
                    badge="Jezero Crater"
                    side="top"
                    content="NASA's flagship Mars 2020 astrobiology rover exploring Jezero Crater's ancient lakebed and delta deposit."
                  >
                    <button
                      onClick={() => {
                        audioEngine.playClickSound();
                        setSelectedRover('perseverance');
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        selectedRover === 'perseverance' 
                          ? 'bg-rose-500/30 text-rose-200 border border-rose-400/50 font-bold shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Perseverance (Jezero Crater)
                    </button>
                  </Tooltip>

                  <Tooltip
                    title="Curiosity Rover"
                    badge="Gale Crater"
                    side="top"
                    content="NASA's nuclear-powered Mars Science Laboratory investigating Gale Crater and Mount Sharp since August 2012."
                  >
                    <button
                      onClick={() => {
                        audioEngine.playClickSound();
                        setSelectedRover('curiosity');
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        selectedRover === 'curiosity' 
                          ? 'bg-amber-500/30 text-amber-200 border border-amber-400/50 font-bold shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Curiosity (Gale Crater)
                    </button>
                  </Tooltip>
                </div>
              </div>

              {/* Sol Presets */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-300">Sol Selection:</span>
                <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-white/10 flex-wrap">
                  <Tooltip
                    title="Latest Downlinks"
                    content="Pulls the most recent panoramic and instrument downlinks transmitted across the Deep Space Network."
                  >
                    <button
                      onClick={() => {
                        audioEngine.playClickSound();
                        setSelectedSol(-1);
                      }}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                        selectedSol === -1 ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      ⚡ All Downlinks
                    </button>
                  </Tooltip>

                  {[1000, 890, 750, 500, 3000].map(s => (
                    <Tooltip
                      key={s}
                      title={`Martian Sol ${s}`}
                      content={`Inspect downlinks captured on Martian solar day (Sol) ${s}.`}
                    >
                      <button
                        onClick={() => {
                          audioEngine.playClickSound();
                          setSelectedSol(s);
                        }}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-all cursor-pointer ${
                          selectedSol === s ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Sol {s}
                      </button>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* Camera Filter */}
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs font-mono text-slate-300">Camera:</span>
                <Tooltip
                  title="Filter by Camera Instrument"
                  content="Select a specific camera payload: Mastcam color stereo, Navcam navigation, Hazcam hazard avoidance, or SuperCam laser."
                >
                  <select
                    value={selectedCamera}
                    onChange={(e) => setSelectedCamera(e.target.value)}
                    className="px-2.5 py-1 bg-slate-950 border border-white/15 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
                  >
                    <option value="ALL">All Cameras</option>
                    <option value="MAST">MAST (Mast Camera Color)</option>
                    <option value="NAVCAM">NAVCAM (Navigation Stereo)</option>
                    <option value="FHAZ">FHAZ (Front Hazard Avoidance)</option>
                    <option value="RHAZ">RHAZ (Rear Hazard Avoidance)</option>
                    <option value="MAHLI">MAHLI (Hand Lens Microscopic)</option>
                    <option value="SUPERCAM">SUPERCAM (Laser Micro-Imager)</option>
                  </select>
                </Tooltip>
              </div>

              <div className="flex items-center gap-2">
                <Tooltip
                  title="Random Martian Sol"
                  badge="Cosmic RNG"
                  side="top"
                  content="Jumps to a random Martian solar day to reveal different geological features, dunes, and rock outcroppings."
                >
                  <button
                    onClick={handleRandomMarsSol}
                    className="px-3 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-xs font-mono text-purple-200 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                    <span>Random Sol</span>
                  </button>
                </Tooltip>

                <Tooltip
                  title="Refresh & Randomize Photos"
                  badge="10 Photos"
                  side="top"
                  content="Randomizes and pulls 10 diverse photos downlinked from the rover across thousands of mission captures."
                >
                  <button
                    onClick={handleRefreshMarsPhotos}
                    disabled={isMarsLoading}
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-xs font-mono text-cyan-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-500/10 active:scale-95"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isMarsLoading ? 'animate-spin' : ''}`} />
                    <span>Refresh Photos</span>
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* Photos Gallery Grid */}
            {isMarsLoading ? (
              <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-400">
                <RefreshCw className="w-8 h-8 animate-spin text-rose-400" />
                <span className="text-xs font-mono">Receiving Deep Space Telemetry Packets from Mars...</span>
              </div>
            ) : marsPhotos.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-white/10 text-slate-400 space-y-2">
                <Camera className="w-8 h-8 text-slate-500 mx-auto" />
                <p className="text-xs font-mono">No photos captured by this specific instrument on the selected Sol. Try switching cameras or rovers.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 px-1 gap-2">
                  <span>Showing {marsPhotos.length} randomized downlinks (10 at a time) • Active Sol: {activeSolReported ?? (selectedSol === -1 ? 'Latest' : selectedSol)}</span>
                  <span>{selectedRover === 'perseverance' ? 'Perseverance Archive (>184,000 photos)' : 'Curiosity Archive (>680,000 photos)'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {marsPhotos.map(photo => (
                    <div 
                      key={photo.id}
                      onClick={() => setInspectPhoto(photo)}
                      className="rounded-2xl overflow-hidden bg-slate-950 border border-white/10 hover:border-rose-400/60 shadow-xl transition-all group cursor-pointer"
                    >
                      <div className="relative aspect-square overflow-hidden bg-slate-900">
                        <img 
                          src={photo.img_src} 
                          alt={`Mars rover photo Sol ${photo.sol}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = CURATED_APOD_LIBRARY[1].url;
                          }}
                        />
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                          {photo.camera.name}
                        </div>
                      </div>
                      <div className="p-3 space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-white">
                          <span>{photo.rover.name}</span>
                          <span className="text-rose-400">Sol {photo.sol}</span>
                        </div>
                        <p className="text-[10px] font-mono text-slate-400 truncate">
                          {photo.camera.full_name}
                        </p>
                        <span className="text-[9px] font-mono text-slate-400 block">
                          Earth date: {photo.earth_date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* MODULE 4: KEPLERIAN ORBITAL MECHANICS & HOHMANN TRANSFER LAB */}
        {/* ==================================================================== */}
        {activeTab === 'orbital_lab' && (
          <div className="space-y-6">
            {/* Comprehensive Educational Header & Real-World Intuition */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-purple-950/40 border border-purple-500/30 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-300">
                    <Rocket className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold font-mono text-white flex items-center gap-2">
                      <span>Hohmann Transfer Orbits & Delta-v (Δv) Explained</span>
                    </h2>
                    <p className="text-xs font-mono text-purple-300/90">
                      Why rockets cannot fly in straight lines in space & how orbital physics gets us to Mars
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-[11px] font-mono text-purple-300 font-bold">
                  Walter Hohmann • 1925 Physics Theorem
                </span>
              </div>

              {/* Core Plain-English Explanation */}
              <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
                In space, you <strong className="text-white">never fire a rocket in a straight line or keep the gas pedal pressed</strong>. Everything in our solar system is in continuous free-fall around the Sun's immense gravity (Earth travels at 107,000 km/h; Mars travels at 86,800 km/h). If a spacecraft tried to fly directly toward Mars with engines running constantly, it would exhaust its entire fuel supply in hours while drifting wildly off-course. Instead, German engineer Walter Hohmann calculated in 1925 that you only need <strong className="text-purple-300">two short rocket burns</strong> and let solar gravity do all the heavy lifting in between.
              </p>

              {/* 3-Stage Process Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold font-mono text-xs uppercase">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-[10px]">1</span>
                    <span>Departure Burn (Δv₁)</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-300 leading-relaxed">
                    At Earth, the rocket fires forward (<em className="text-cyan-200">prograde</em>) along Earth's orbit, boosting velocity by <strong className="text-white">+2.94 km/s</strong>. This stretches circular orbit into an ellipse whose far point (<em className="text-cyan-200">aphelion</em>) reaches Mars.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold font-mono text-xs uppercase">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-[10px]">2</span>
                    <span>Free Coasting (0 Fuel)</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-300 leading-relaxed">
                    For <strong className="text-white">~259 days (8.6 months)</strong>, the main engines are completely shut off! The spacecraft coasts on inertia along an elliptical highway, pulled solely by the Sun's gravity without using a drop of propellant.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-rose-300 font-bold font-mono text-xs uppercase">
                    <span className="w-5 h-5 rounded-full bg-rose-500/20 border border-rose-400/50 flex items-center justify-center text-[10px]">3</span>
                    <span>Arrival Capture (Δv₂)</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-300 leading-relaxed">
                    Upon reaching Mars, the craft arrives moving slower than Mars' orbital speed. The engine fires a second time (<strong className="text-white">+2.65 km/s</strong>) to circularize its orbit and match speeds, preventing it from falling back toward the Sun.
                  </p>
                </div>
              </div>

              {/* The Quarterback Pass & Planetary Launch Window Example */}
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs font-mono text-slate-300">
                  <span className="font-bold text-purple-200 block uppercase text-[11px]">
                    🏈 The "Quarterback Pass" Rule & Why Timing Is Everything:
                  </span>
                  <p className="leading-relaxed">
                    A quarterback never throws the football to where the wide receiver is standing right now—they throw it to where the receiver will be seconds later. For Earth to Mars, you must launch when Mars is <strong className="text-white">~44° ahead of Earth</strong> so both meet 8.6 months later at the exact same point. This planetary alignment only happens once every <strong className="text-amber-300">26 months (780 days synodic period)</strong>. If NASA missed the July 2020 launch window for Perseverance, the mission would have been delayed until late 2022!
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Simulation & Trajectory Solver Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Visual 2D Orbit Kepler Canvas (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <button
                      onClick={() => setIsSimPlaying(p => !p)}
                      className="p-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-white hover:bg-white/10 transition-all cursor-pointer"
                      title={isSimPlaying ? 'Pause Simulation' : 'Resume Simulation'}
                    >
                      {isSimPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-green-400" />}
                    </button>
                    <span className="px-2 py-0.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                      Two-Body Heliocentric Physics Engine
                    </span>
                  </div>

                  <canvas 
                    ref={orbitalCanvasRef} 
                    width={720} 
                    height={520}
                    className="w-full aspect-[4/3] object-contain"
                  />
                </div>

                {/* Preset Mission Selectors */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                      Historical & Active Interplanetary Flight Plans
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Click a flight plan to load parameters</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {HOHMANN_PRESETS.map(preset => (
                      <button
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedPresetId === preset.id
                            ? 'bg-purple-500/20 border-purple-400/60 shadow-md shadow-purple-500/20'
                            : 'bg-slate-950/60 border-white/5 hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs font-mono font-bold text-white block truncate">
                          {preset.fromBody} → {preset.toBody}
                        </span>
                        <span className="text-[10px] font-mono text-purple-300 block mt-0.5">
                          Δv: {preset.totalDeltaVKmS} km/s
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real-World Mission Examples Comparison Reference Table */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase">
                    <Compass className="w-4 h-4 text-cyan-400" />
                    <span>Real-World Solar System Trajectory Benchmarks</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between font-bold text-cyan-300">
                        <span>Apollo 11 (Earth → Moon)</span>
                        <span>3.2 Days</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Orbits from 1.000 to 1.0026 AU equivalent. Total injection Δv ~3.9 km/s. Crew reached lunar orbit in under 76 hours.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between font-bold text-rose-300">
                        <span>Perseverance (Earth → Mars)</span>
                        <span>259 Days (8.6 mo)</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Traveled ~480 million km along the elliptical arc. Required 5.59 km/s total velocity change before atmospheric entry.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between font-bold text-amber-300">
                        <span>Magellan (Earth → Venus)</span>
                        <span>146 Days (4.8 mo)</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Inward solar transfer (1.000 AU → 0.723 AU). Craft burned retrograde to drop closer into the Sun's gravity well.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between font-bold text-purple-300">
                        <span>Europa Clipper (Earth → Jupiter)</span>
                        <span>2.7 Years</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Outer solar system transfer (1.000 AU → 5.204 AU). Direct Hohmann requires massive 14.44 km/s Δv (uses Mars-Earth gravity assists).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculations & Physics Dashboard (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block mb-1">
                      KEPLERIAN TRAJECTORY SOLVER
                    </span>
                    <h3 className="text-base font-bold font-mono text-white">
                      {activePreset.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      {activePreset.scientificObjective}
                    </p>
                  </div>

                  {/* Physics Metrics Table */}
                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
                      <Tooltip
                        title="Semi-Major Axis (a)"
                        content="Half the longest diameter of the elliptical transfer orbit. Equals (r1 + r2) / 2."
                      >
                        <span className="text-xs font-mono text-slate-400 cursor-help underline decoration-dotted">Semi-Major Axis (a):</span>
                      </Tooltip>
                      <span className="text-xs font-mono font-bold text-white">
                        {transferCalc.semiMajorAxisAU.toFixed(3)} AU ({(transferCalc.semiMajorAxisKm / 1e6).toFixed(1)}M km)
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
                      <Tooltip
                        title="Departure Injection (Δv₁)"
                        content="Velocity increment fired at departure body orbit to enter the elliptical transfer orbit."
                      >
                        <span className="text-xs font-mono text-slate-400 cursor-help underline decoration-dotted">Departure Injection (Δv₁):</span>
                      </Tooltip>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        +{transferCalc.deltaV1KmS} km/s
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
                      <Tooltip
                        title="Arrival Capture (Δv₂)"
                        content="Velocity increment fired upon reaching the destination orbit to circularize and prevent flyby."
                      >
                        <span className="text-xs font-mono text-slate-400 cursor-help underline decoration-dotted">Arrival Capture (Δv₂):</span>
                      </Tooltip>
                      <span className="text-xs font-mono font-bold text-rose-400">
                        +{transferCalc.deltaV2KmS} km/s
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30">
                      <Tooltip
                        title="Total Mission Delta-v (Δv)"
                        content="Total velocity change required for the entire mission (Δv₁ + Δv₂). Determines required fuel mass."
                      >
                        <span className="text-xs font-mono text-purple-300 font-bold cursor-help underline decoration-dotted">Total Mission Δv:</span>
                      </Tooltip>
                      <span className="text-sm font-mono font-bold text-purple-200">
                        {transferCalc.totalDeltaVKmS} km/s
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
                      <Tooltip
                        title="One-Way Transit Time"
                        content="Time spent coasting along the elliptical arc from departure to destination under Kepler's Third Law."
                      >
                        <span className="text-xs font-mono text-slate-400 cursor-help underline decoration-dotted">One-Way Transit Time:</span>
                      </Tooltip>
                      <span className="text-xs font-mono font-bold text-amber-300">
                        {transferCalc.transitTimeDays} days ({(transferCalc.transitTimeDays / 30.4).toFixed(1)} mo)
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-white/5">
                      <Tooltip
                        title="Synodic Period (Launch Window)"
                        content="Time interval between recurring identical orbital alignments of the two planets."
                      >
                        <span className="text-xs font-mono text-slate-400 cursor-help underline decoration-dotted">Synodic Launch Window:</span>
                      </Tooltip>
                      <span className="text-xs font-mono font-bold text-slate-300">
                        Every {transferCalc.synodicPeriodDays} days (~{(transferCalc.synodicPeriodDays / 30.4).toFixed(0)} mo)
                      </span>
                    </div>
                  </div>

                  {/* Engine Technology & Tsiolkovsky Equation Propellant Section */}
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 font-bold flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-rose-400" />
                        <span>Tsiolkovsky Propellant Fraction:</span>
                      </span>
                      <span className="text-rose-400 font-bold text-sm">{(transferCalc.fuelFraction * 100).toFixed(1)}%</span>
                    </div>

                    {/* Visual Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-500"
                        style={{ width: `${Math.min(100, transferCalc.fuelFraction * 100)}%` }}
                      />
                    </div>

                    {/* Interactive Engine Tech Selector */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        Select Propulsion Technology (Specific Impulse I_sp):
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          { name: 'Methane Raptor', isp: 380, tag: 'SpaceX Starship' },
                          { name: 'Hydrolox RL10', isp: 450, tag: 'NASA SLS / Centaur' },
                          { name: 'Nuclear Thermal', isp: 900, tag: 'DRACO NTP' },
                          { name: 'Ion Hall Thruster', isp: 3000, tag: 'Deep Space 1' }
                        ].map(eng => (
                          <button
                            key={eng.name}
                            onClick={() => {
                              audioEngine.playClickSound();
                              setRocketIsp(eng.isp);
                            }}
                            className={`p-1.5 rounded-lg border text-left text-[10px] font-mono transition-all cursor-pointer ${
                              rocketIsp === eng.isp 
                                ? 'bg-rose-500/20 border-rose-400/60 text-rose-200 font-bold' 
                                : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white'
                            }`}
                          >
                            <span className="block truncate">{eng.name} ({eng.isp}s)</span>
                            <span className="text-[8.5px] opacity-70 block truncate">{eng.tag}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-[10px] font-mono text-slate-400 leading-relaxed border-t border-white/5 pt-2">
                      Calculated via Tsiolkovsky's Rocket Equation (<code className="text-cyan-300">Δv = I_sp · g₀ · ln(m₀ / m_f)</code>). To deliver {transferCalc.totalDeltaVKmS} km/s of velocity, <strong className="text-white">{(transferCalc.fuelFraction * 100).toFixed(1)}%</strong> of the rocket's entire liftoff weight must be fuel propellant!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* FULL-RESOLUTION HD MODAL FOR APOD */}
      {showHdModal && apodData && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setShowHdModal(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center gap-3">
            <img 
              src={apodData.hdurl || apodData.url} 
              alt={apodData.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-white/20 shadow-2xl"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = CURATED_APOD_LIBRARY[0].url;
              }}
            />
            <div className="text-center font-mono text-xs text-slate-300">
              <span className="font-bold text-white">{apodData.title}</span> • Click anywhere to dismiss
            </div>
          </div>
        </div>
      )}

      {/* MARS PHOTO INSPECTION MODAL */}
      {inspectPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setInspectPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center gap-3">
            <img 
              src={inspectPhoto.img_src} 
              alt={`Mars raw Sol ${inspectPhoto.sol}`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-white/20 shadow-2xl"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = CURATED_APOD_LIBRARY[1].url;
              }}
            />
            <div className="text-center font-mono text-xs text-slate-300">
              <span className="font-bold text-rose-300">{inspectPhoto.rover.name} Sol {inspectPhoto.sol}</span> • {inspectPhoto.camera.full_name} • Earth Date: {inspectPhoto.earth_date}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
