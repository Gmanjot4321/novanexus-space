import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Zap, 
  Orbit, 
  Clock, 
  Compass, 
  Rocket, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Share2, 
  Award, 
  FileText, 
  ArrowRight, 
  Globe, 
  Layers, 
  Eye, 
  CheckCircle2, 
  Sliders, 
  Activity, 
  Radio, 
  Info,
  Maximize2
} from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

// Destination presets for Twin Paradox interstellar journey
interface DestinationPreset {
  id: string;
  name: string;
  distanceLy: number;
  description: string;
  targetObject: string;
}

const DESTINATIONS: DestinationPreset[] = [
  { id: 'alpha_centauri', name: 'Alpha Centauri', distanceLy: 4.37, description: 'Closest star system to the Sun. Triple star system.', targetObject: 'Triple Star System' },
  { id: 'sirius', name: 'Sirius A & B', distanceLy: 8.6, description: 'Brightest star in the night sky and white dwarf companion.', targetObject: 'Binary Star System' },
  { id: 'vega', name: 'Vega', distanceLy: 25.04, description: 'Brilliant blue-white star with proto-planetary debris disk.', targetObject: 'A-type Main Sequence' },
  { id: 'pleiades', name: 'Pleiades Cluster', distanceLy: 444, description: 'Open star cluster of luminous young hot blue stars.', targetObject: 'Open Star Cluster' },
  { id: 'crab_nebula', name: 'Crab Pulsar', distanceLy: 6500, description: 'Supernova remnant hosting a rapidly spinning neutron star.', targetObject: 'Pulsar / Supernova Remnant' },
  { id: 'galactic_center', name: 'Sagittarius A*', distanceLy: 26670, description: 'Supermassive black hole at the heart of our Milky Way galaxy.', targetObject: 'Supermassive Black Hole' },
  { id: 'andromeda', name: 'Andromeda Galaxy (M31)', distanceLy: 2537000, description: 'Our closest spiral galactic neighbor, home to 1 trillion stars.', targetObject: 'Major Spiral Galaxy' }
];

// Gravitational Bodies Presets with complete astrophysical metrics
interface GravBodyPreset {
  id: string;
  name: string;
  classification: string;
  massSolar: number;
  massKg: string;
  schwarzschildRadiusKm: number;
  schwarzschildRadiusLabel: string;
  surfaceGravityG: number;
  surfaceGravityLabel: string;
  escapeVelocityKms: number;
  defaultOrbitRadiusRatio: number;
  dilationAtSurfaceOrOrbit: string;
  description: string;
  famousExample: string;
  deepDiveAnalysis: string;
  gravRedshiftLabel: string;
}

const GRAV_BODIES: GravBodyPreset[] = [
  { 
    id: 'earth', 
    name: 'Earth Surface & LEO', 
    classification: 'Terrestrial Rocky Planet',
    massSolar: 3.003e-6, 
    massKg: '5.972 × 10²⁴ kg',
    schwarzschildRadiusKm: 0.00887, 
    schwarzschildRadiusLabel: '8.87 millimeters',
    surfaceGravityG: 1.0, 
    surfaceGravityLabel: '9.81 m/s² (1.0 g)',
    escapeVelocityKms: 11.2,
    defaultOrbitRadiusRatio: 3.5,
    dilationAtSurfaceOrOrbit: '+0.0219 s / year slower than deep space',
    gravRedshiftLabel: 'Δλ/λ = 6.96 × 10⁻¹⁰',
    description: 'Our terrestrial reference well. Earth’s mass creates a subtle but empirically measured time dilation lag.', 
    famousExample: 'GPS Constellation & Hafele–Keating Atomic Clock Flights (1971)',
    deepDiveAnalysis: 'On Earth’s surface, gravity slows time by ~0.696 parts per billion compared to deep space. Over an 80-year human lifetime, your body ages ~1.75 seconds slower than an observer living in intergalactic void. Because GPS satellites orbit at 20,200 km where Earth gravity is weaker, their onboard atomic clocks tick +45.9 μs/day faster than Earth clocks.'
  },
  { 
    id: 'sun', 
    name: 'Sun (Photosphere)', 
    classification: 'G-Type Yellow Dwarf Main Sequence Star',
    massSolar: 1.0, 
    massKg: '1.989 × 10³⁰ kg (1.0 M☉)',
    schwarzschildRadiusKm: 2.953, 
    schwarzschildRadiusLabel: '2.953 kilometers',
    surfaceGravityG: 27.9, 
    surfaceGravityLabel: '274 m/s² (27.9 g)',
    escapeVelocityKms: 617.5,
    defaultOrbitRadiusRatio: 2.5,
    dilationAtSurfaceOrOrbit: '+66.4 seconds / year slower than deep space',
    gravRedshiftLabel: 'Δλ/λ = 2.12 × 10⁻⁶ (2.12 ppm)',
    description: 'The Sun creates a massive spacetime dip that deflects passing starlight and delays interplanetary radar signals.', 
    famousExample: '1919 Eddington Solar Eclipse Deflection & Shapiro Radar Delay',
    deepDiveAnalysis: 'At the solar surface (radius 696,340 km), the Sun’s gravitational potential slows time by 2.12 parts per million. A clock at the photosphere loses 66.4 seconds per Earth year relative to deep space. The Sun’s spacetime dip also delays passing radio signals by ~200 microseconds (Shapiro Time Delay).'
  },
  { 
    id: 'neutron_star', 
    name: 'Neutron Star (Crab / Pulsar Core)', 
    classification: 'Degenerate Relativistic Stellar Remnant',
    massSolar: 1.4, 
    massKg: '2.785 × 10³⁰ kg (1.4 M☉)',
    schwarzschildRadiusKm: 4.134, 
    schwarzschildRadiusLabel: '4.134 kilometers',
    surfaceGravityG: 2.0e11, 
    surfaceGravityLabel: '2.0 × 10¹¹ g (200 billion g)',
    escapeVelocityKms: 190000,
    defaultOrbitRadiusRatio: 2.66,
    dilationAtSurfaceOrOrbit: '1.26x slower (1 hr on crust = 1.26 hrs in deep space)',
    gravRedshiftLabel: 'Δλ/λ = 0.26 (26% spectral redshift)',
    description: 'Compressing 1.4 solar masses into an 11 km sphere curves spacetime into an extreme relativistic funnel.', 
    famousExample: 'Hulse–Taylor Binary Pulsar PSR B1913+16 (Gravitational Wave Damping)',
    deepDiveAnalysis: 'A neutron star’s gravity is so intense that escaping photons lose 26% of their energy to gravitational redshift. On the solid crust, clocks run 26% slower: 1 hour on the neutron star equals 1 hour and 15 minutes in deep space. Furthermore, extreme gravitational lensing allows you to see more than 60% of the entire star’s surface at once!'
  },
  { 
    id: 'millers_planet', 
    name: 'Miller’s Planet (Gargantua Ergosphere)', 
    classification: 'Supermassive Black Hole Horizon Custody',
    massSolar: 100000000, 
    massKg: '1.989 × 10³⁸ kg (100 Million M☉)',
    schwarzschildRadiusKm: 295000000, 
    schwarzschildRadiusLabel: '295 million km (~1.97 AU)',
    surfaceGravityG: 1.3, 
    surfaceGravityLabel: '12.7 m/s² (1.3 g - stabilized orbit)',
    escapeVelocityKms: 299700,
    defaultOrbitRadiusRatio: 1.015,
    dilationAtSurfaceOrOrbit: '61,320x slower (1 hour = 7 Earth years)',
    gravRedshiftLabel: 'Extreme Horizon Lag (1 hr = 61,320 hrs)',
    description: 'Skimming the cusp of an extreme 100-million solar mass rotating Kerr black hole event horizon.', 
    famousExample: 'Interstellar Movie Kip Thorne General Relativity Metric',
    deepDiveAnalysis: 'On Miller’s Planet orbiting inside the gravitational throat of Gargantua, 1 hour on the surface equals 7 Earth years in deep space (a 61,320x slowdown). A short 3.5-hour excursion down to the watery surface caused 24.5 years to pass for astronaut Romilly waiting aboard the Endurance in distant orbit!'
  },
  { 
    id: 'sag_a', 
    name: 'Sagittarius A* (Milky Way Singularity)', 
    classification: 'Central Galactic Supermassive Singularity',
    massSolar: 4150000, 
    massKg: '8.254 × 10³⁶ kg (4.15 Million M☉)',
    schwarzschildRadiusKm: 12250000, 
    schwarzschildRadiusLabel: '12.25 million km (~0.082 AU)',
    surfaceGravityG: 1.0e12, 
    surfaceGravityLabel: 'Singularity Threshold (Infinite at Horizon)',
    escapeVelocityKms: 299792.458,
    defaultOrbitRadiusRatio: 1.5,
    dilationAtSurfaceOrOrbit: 'Infinite at Horizon (Time freezes to external cosmos)',
    gravRedshiftLabel: 'Z → ∞ (Complete spectral extinguishment)',
    description: 'The supermassive gravitational anchor of the Milky Way, warping light into a glowing shadow ring.', 
    famousExample: 'Event Horizon Telescope (EHT 2022) & S2 Star Orbital Precession',
    deepDiveAnalysis: 'At the photon sphere (r = 1.5 rs = 18.38M km), light orbits in unstable circular loops and time is dilated by 1.732x. To a distant observer, an object falling into Sagittarius A* never appears to cross the horizon: its emitted light redshifts to infinite wavelength and its clock freezes to a complete halt at r = rs.'
  }
];

export const RelativityLabView: React.FC = () => {
  // Active Experiment Tab
  const [activeTab, setActiveTab] = useState<'special_relativity' | 'twin_paradox' | 'gravitational_well' | 'gps_proof' | 'energy_barrier'>('special_relativity');

  // Audio Sonification Toggle
  const [isSonificationActive, setIsSonificationActive] = useState<boolean>(false);
  const [isNarratorActive, setIsNarratorActive] = useState<boolean>(false);

  // ---------------------------------------------------------------------------
  // EXPERIMENT 1: SPECIAL RELATIVITY & LIGHT CLOCK SIMULATOR
  // ---------------------------------------------------------------------------
  const [speedFraction, setSpeedFraction] = useState<number>(0.80); // v / c
  const [isSimPlaying, setIsSimPlaying] = useState<boolean>(true);
  const [photonY, setPhotonY] = useState<number>(0);
  const [stationaryTicks, setStationaryTicks] = useState<number>(0);
  const [movingTicks, setMovingTicks] = useState<number>(0);
  const lightClockCanvasRef = useRef<HTMLCanvasElement>(null);

  // Lorentz Factor Gamma: γ = 1 / sqrt(1 - v^2/c^2)
  const gamma = useMemo(() => {
    const v = Math.min(0.9999999, Math.max(0, speedFraction));
    return 1 / Math.sqrt(1 - v * v);
  }, [speedFraction]);

  // Length Contraction: L = L0 / γ
  const lengthContractionPercent = useMemo(() => {
    return (1 / gamma) * 100;
  }, [gamma]);

  // Doppler Optical Wavelength Shift (Approaching = blueshift, Receding = redshift)
  const dopplerFactorApproaching = useMemo(() => {
    const v = speedFraction;
    return Math.sqrt((1 - v) / (1 + v)); // wavelength multiplier (smaller = blue)
  }, [speedFraction]);

  const dopplerFactorReceding = useMemo(() => {
    const v = speedFraction;
    return Math.sqrt((1 + v) / (1 - v)); // wavelength multiplier (larger = red)
  }, [speedFraction]);

  // ---------------------------------------------------------------------------
  // EXPERIMENT 2: TWIN PARADOX INTERSTELLAR JOURNEY
  // ---------------------------------------------------------------------------
  const [selectedDestination, setSelectedDestination] = useState<DestinationPreset>(DESTINATIONS[0]);
  const [twinSpeed, setTwinSpeed] = useState<number>(0.95); // 0.95c
  const [journeyProgress, setJourneyProgress] = useState<number>(0); // 0 to 100%
  const [isJourneyRunning, setIsJourneyRunning] = useState<boolean>(false);
  const [startAstronautAge, setStartAstronautAge] = useState<number>(28);
  const [earthTwinStartAge, setEarthTwinStartAge] = useState<number>(28);

  const twinGamma = useMemo(() => {
    const v = Math.min(0.999999, Math.max(0, twinSpeed));
    return 1 / Math.sqrt(1 - v * v);
  }, [twinSpeed]);

  // Round trip distance and times
  const roundTripDistanceLy = useMemo(() => selectedDestination.distanceLy * 2, [selectedDestination]);
  const earthObserverYears = useMemo(() => roundTripDistanceLy / twinSpeed, [roundTripDistanceLy, twinSpeed]);
  const travelerProperYears = useMemo(() => earthObserverYears / twinGamma, [earthObserverYears, twinGamma]);
  const earthTimePassedCurrent = useMemo(() => (earthObserverYears * (journeyProgress / 100)), [earthObserverYears, journeyProgress]);
  const travelerTimePassedCurrent = useMemo(() => (travelerProperYears * (journeyProgress / 100)), [travelerProperYears, journeyProgress]);

  // Dynamic era narration that accurately matches the selected destination's elapsed time
  const earthEraSummary = useMemo(() => {
    const yrs = earthObserverYears;
    if (yrs < 0.1) {
      return `About ${(yrs * 365.25).toFixed(0)} days pass on Earth. Daily life and planetary cycles continue with virtually no noticeable difference.`;
    } else if (yrs < 1) {
      return `About ${(yrs * 12).toFixed(1)} months pass on Earth. Seasons have cycled, but everyday life on Earth remains essentially unchanged.`;
    } else if (yrs < 5) {
      return `About ${yrs.toFixed(1)} years pass on Earth. Friends and family on Earth have aged a few years, but you return to essentially the same world and society.`;
    } else if (yrs < 15) {
      return `About ${yrs.toFixed(1)} years pass on Earth (~1 decade). Children have grown into teenagers, technology has progressed incrementally, and peers have aged in stride.`;
    } else if (yrs < 35) {
      return `About ${yrs.toFixed(1)} years pass on Earth (${(yrs / 10).toFixed(1)} decades). A generation has matured; friends and siblings on Earth have visibly aged into middle adulthood.`;
    } else if (yrs < 65) {
      return `About ${yrs.toFixed(0)} years pass on Earth (around half a century). Children on Earth have grown into grandparents, cities have modernized, and society has experienced profound shifts.`;
    } else if (yrs < 150) {
      return `About ${yrs.toFixed(0)} years pass on Earth (roughly a century). An entire human generation has lived out their full natural lives; the world you knew is now history.`;
    } else if (yrs < 1000) {
      return `Over ${yrs.toFixed(0)} years pass on Earth (${(yrs / 100).toFixed(1)} centuries). Historical eras, architectural styles, languages, and geopolitical boundaries have completely transformed.`;
    } else if (yrs < 100000) {
      return `Over ${(yrs / 1000).toFixed(1)} thousand years (${(yrs / 100).toFixed(0)} centuries) pass on Earth. Human civilizations have risen and fallen multiple times across recorded history.`;
    } else {
      return `Over ${(yrs >= 1000000 ? (yrs / 1000000).toFixed(2) + ' million' : (yrs / 1000).toFixed(0) + ' thousand')} years pass on Earth. Continents have drifted and new evolutionary epochs have unfolded!`;
    }
  }, [earthObserverYears]);

  const travelerEraSummary = useMemo(() => {
    return `Because the ship cruises at ${(twinSpeed * 100).toFixed(1)}% light speed, the astronaut experiences Lorentz time dilation (γ = ${twinGamma.toFixed(2)}x). While ${earthObserverYears.toFixed(1)} years pass on Earth, only ${travelerProperYears.toFixed(1)} biological years elapse on their wristwatch!`;
  }, [travelerProperYears, twinGamma, twinSpeed, earthObserverYears]);

  // Dynamic live progress status description
  const getLiveEarthProgressEra = (yrs: number) => {
    if (yrs < 0.1) return `Daily life and calendar schedules on Earth continue normally.`;
    if (yrs < 1) return `Seasons have cycled and approximately ${(yrs * 12).toFixed(1)} months have elapsed on Earth.`;
    if (yrs < 5) return `Friends and family on Earth have aged a few years, but society remains familiar.`;
    if (yrs < 15) return `Children have grown into teenagers and ~1 decade has passed on Earth.`;
    if (yrs < 35) return `A full human generation has matured; contemporaries on Earth have entered middle age.`;
    if (yrs < 65) return `Around half a century has passed; new architectural styles, cultures, and technologies have arisen.`;
    if (yrs < 150) return `A full century has passed; an entire human generation has lived out their natural lives.`;
    if (yrs < 1000) return `Centuries have unfolded on Earth; historical eras, languages, and cities have transformed.`;
    return `Deep cosmic timescales: civilizations and epochs have evolved on Earth across ${(yrs / 1000).toFixed(1)} millennia.`;
  };

  // Interactive Intuition Accordion State
  const [openIntuitionIdx, setOpenIntuitionIdx] = useState<number | null>(0);

  // ---------------------------------------------------------------------------
  // EXPERIMENT 3: GENERAL RELATIVITY & GRAVITATIONAL WELL (SCHWARZSCHILD)
  // ---------------------------------------------------------------------------
  const [selectedGravBody, setSelectedGravBody] = useState<GravBodyPreset>(GRAV_BODIES[3]); // Miller's planet
  const [orbitRadiusRatio, setOrbitRadiusRatio] = useState<number>(1.015); // r / r_s (close to event horizon)
  const gravCanvasRef = useRef<HTMLCanvasElement>(null);

  // Gravitational Time Dilation Factor: t_f = t_0 * sqrt(1 - r_s / r)
  const gravTimeDilationFactor = useMemo(() => {
    const ratio = Math.max(1.00001, orbitRadiusRatio);
    return Math.sqrt(1 - 1 / ratio);
  }, [orbitRadiusRatio]);

  // Time dilation ratio (Deep Space Time / Well Time)
  const gravSlowdownMultiplier = useMemo(() => {
    if (gravTimeDilationFactor <= 0.000001) return 9999999;
    return 1 / gravTimeDilationFactor;
  }, [gravTimeDilationFactor]);

  // ---------------------------------------------------------------------------
  // EXPERIMENT 4: GPS CONSTELLATION RELATIVITY PROVER
  // ---------------------------------------------------------------------------
  const [isRelativityCompensated, setIsRelativityCompensated] = useState<boolean>(true);
  const [gpsSimulatedHours, setGpsSimulatedHours] = useState<number>(24);

  // Special Relativity: -7.2 microseconds per day (due to 3.87 km/s orbital velocity)
  const srDriftMicrosecondsPerDay = -7.2;
  // General Relativity: +45.9 microseconds per day (due to weaker gravity at 20,200 km altitude)
  const grDriftMicrosecondsPerDay = 45.9;
  // Net combined relativistic drift
  const netDailyDriftMicroseconds = grDriftMicrosecondsPerDay + srDriftMicrosecondsPerDay; // +38.7 us/day
  
  // Uncompensated positioning error: Distance = c * dt (c = 300,000 km/s = 30 cm per nanosecond)
  const uncompensatedPositionErrorKm = useMemo(() => {
    const hours = gpsSimulatedHours;
    const driftUs = (netDailyDriftMicroseconds * (hours / 24));
    // 1 microsecond = 0.3 km = 300 meters
    return Math.abs(driftUs * 0.299792458);
  }, [gpsSimulatedHours, netDailyDriftMicroseconds]);

  // ---------------------------------------------------------------------------
  // EXPERIMENT 5: ENERGY BARRIER ($E = \gamma mc^2$)
  // ---------------------------------------------------------------------------
  const [spacecraftMassKg, setSpacecraftMassKg] = useState<number>(100000); // 100 metric tons

  const kineticEnergyJoules = useMemo(() => {
    const c = 299792458; // m/s
    return (gamma - 1) * spacecraftMassKg * c * c;
  }, [gamma, spacecraftMassKg]);

  const kineticEnergyMegatonsTNT = useMemo(() => {
    return kineticEnergyJoules / (4.184e15); // 1 megaton TNT = 4.184e15 Joules
  }, [kineticEnergyJoules]);

  const worldAnnualElectricityRatio = useMemo(() => {
    const worldElectricityJoulesPerYear = 9.0e19; // ~25,000 TWh
    return (kineticEnergyJoules / worldElectricityJoulesPerYear) * 100;
  }, [kineticEnergyJoules]);

  // ---------------------------------------------------------------------------
  // ANIMATION LOOPS & AUDIO SONIFICATION
  // ---------------------------------------------------------------------------
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    let clockTickAccumulator = 0;

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (isSimPlaying) {
        // Photon oscillation in the light clock
        setPhotonY(prev => {
          const next = prev + delta * 3.5;
          return next;
        });

        // Trigger sonification ticks
        clockTickAccumulator += delta;
        if (clockTickAccumulator >= 1.0) {
          clockTickAccumulator = 0;
          setStationaryTicks(t => t + 1);
          setMovingTicks(m => m + (1 / gamma));

          if (isSonificationActive) {
            audioEngine.playRelativisticTick(880, false); // Earth tick (880Hz)
            setTimeout(() => {
              audioEngine.playRelativisticTick(440 * (1 / gamma), true); // Dilated ship tick (deeper, slowed)
            }, 500);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isSimPlaying, gamma, isSonificationActive]);

  // Twin paradox journey animation timer
  useEffect(() => {
    if (!isJourneyRunning) return;

    const interval = setInterval(() => {
      setJourneyProgress(prev => {
        if (prev >= 100) {
          setIsJourneyRunning(false);
          audioEngine.playHoverSound();
          return 100;
        }
        return prev + 1.0;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isJourneyRunning]);

  // Draw Light Clock Canvas
  useEffect(() => {
    const canvas = lightClockCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Background Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const clockHeight = 160;
    const topMirrorY = 50;
    const bottomMirrorY = topMirrorY + clockHeight;

    // 1. Stationary Frame (Left)
    const leftCenterX = width * 0.25;
    ctx.fillStyle = '#06b6d4';
    ctx.font = '11px monospace';
    ctx.fillText('STATIONARY OBSERVER (v = 0.00c)', leftCenterX - 90, 25);

    // Mirrors
    ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
    ctx.fillRect(leftCenterX - 35, topMirrorY, 70, 6);
    ctx.fillRect(leftCenterX - 35, bottomMirrorY, 70, 6);

    // Vertical light path
    const normalizedY = (Math.sin(photonY * Math.PI) + 1) / 2;
    const currentY = topMirrorY + 6 + normalizedY * (clockHeight - 12);

    ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(leftCenterX, topMirrorY + 6);
    ctx.lineTo(leftCenterX, bottomMirrorY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Photon pulse
    const grad1 = ctx.createRadialGradient(leftCenterX, currentY, 0, leftCenterX, currentY, 14);
    grad1.addColorStop(0, '#ffffff');
    grad1.addColorStop(0.4, '#06b6d4');
    grad1.addColorStop(1, 'rgba(6, 182, 212, 0)');
    ctx.fillStyle = grad1;
    ctx.beginPath();
    ctx.arc(leftCenterX, currentY, 14, 0, Math.PI * 2);
    ctx.fill();

    // 2. Relativistic Moving Frame (Right)
    const rightBaseX = width * 0.55;
    const horizontalShift = (speedFraction * 120);
    const rightCenterX = rightBaseX + (normalizedY * horizontalShift);

    ctx.fillStyle = '#a855f7';
    ctx.fillText(`RELATIVISTIC FRAME (v = ${speedFraction.toFixed(2)}c, γ = ${gamma.toFixed(2)})`, rightBaseX - 30, 25);

    // Moving Mirrors
    ctx.fillStyle = 'rgba(168, 85, 247, 0.4)';
    ctx.fillRect(rightBaseX - 25, topMirrorY, 50 * (1 / gamma), 6);
    ctx.fillRect(rightBaseX + horizontalShift - 25, bottomMirrorY, 50 * (1 / gamma), 6);

    // Diagonal Hypotenuse Light Path (The geometric origin of time dilation!)
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(rightBaseX, topMirrorY + 6);
    ctx.lineTo(rightBaseX + horizontalShift, bottomMirrorY);
    ctx.stroke();

    // Triangle derivation labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '10px monospace';
    ctx.fillText(`c·Δt (Hypotenuse)`, rightBaseX + horizontalShift * 0.5 + 8, topMirrorY + clockHeight * 0.5);
    ctx.fillText(`v·Δt (Distance)`, rightBaseX + horizontalShift * 0.3, bottomMirrorY + 22);

    // Horizontal distance line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.moveTo(rightBaseX, bottomMirrorY);
    ctx.lineTo(rightBaseX + horizontalShift, bottomMirrorY);
    ctx.stroke();

    // Moving Photon pulse
    const grad2 = ctx.createRadialGradient(rightCenterX, currentY, 0, rightCenterX, currentY, 16);
    grad2.addColorStop(0, '#ffffff');
    grad2.addColorStop(0.4, '#c084fc');
    grad2.addColorStop(1, 'rgba(192, 132, 252, 0)');
    ctx.fillStyle = grad2;
    ctx.beginPath();
    ctx.arc(rightCenterX, currentY, 16, 0, Math.PI * 2);
    ctx.fill();

  }, [photonY, speedFraction, gamma]);

  // Draw Gravitational Spacetime Mesh Canvas
  useEffect(() => {
    const canvas = gravCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    // Curved Einstein Spacetime Grid
    const numRings = 14;
    const maxRadius = Math.min(width, height) * 0.44;

    for (let r = 1; r <= numRings; r++) {
      const radius = (r / numRings) * maxRadius;
      const distortion = Math.pow(1 - (r / numRings), 2.2) * 40;
      
      ctx.strokeStyle = `rgba(168, 85, 247, ${0.12 + (1 - r / numRings) * 0.35})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + distortion, radius, radius * 0.5, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Radial spacetime lines converging into singularity
    const rays = 24;
    for (let i = 0; i < rays; i++) {
      const angle = (i / rays) * Math.PI * 2;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      const outerX = centerX + Math.cos(angle) * maxRadius;
      const outerY = centerY + Math.sin(angle) * (maxRadius * 0.5);
      ctx.lineTo(outerX, outerY);
      ctx.stroke();
    }

    // Central Singularity / Event Horizon
    const eventHorizonRadius = 24;
    const accretionGrad = ctx.createRadialGradient(centerX, centerY, eventHorizonRadius * 0.8, centerX, centerY, eventHorizonRadius * 3.5);
    accretionGrad.addColorStop(0, '#000000');
    accretionGrad.addColorStop(0.2, '#f97316');
    accretionGrad.addColorStop(0.6, '#3b82f6');
    accretionGrad.addColorStop(1, 'rgba(59, 130, 246, 0)');

    ctx.fillStyle = accretionGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, eventHorizonRadius * 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Pure black event horizon
    ctx.fillStyle = '#020617';
    ctx.beginPath();
    ctx.arc(centerX, centerY, eventHorizonRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Orbiting Spacecraft at selected radius
    const orbitVisualRadius = eventHorizonRadius + (orbitRadiusRatio - 1.0) * 90;
    ctx.strokeStyle = 'rgba(234, 179, 8, 0.5)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, orbitVisualRadius, orbitVisualRadius * 0.6, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Probe Marker
    const probeX = centerX + orbitVisualRadius;
    const probeY = centerY;
    ctx.fillStyle = '#eab308';
    ctx.beginPath();
    ctx.arc(probeX, probeY, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fef08a';
    ctx.font = '10px monospace';
    ctx.fillText(`PROBE (r = ${orbitRadiusRatio.toFixed(3)} r_s)`, probeX + 10, probeY + 4);

  }, [orbitRadiusRatio]);

  // Narrator Speech Helper
  const handleToggleNarration = (text: string) => {
    if (isNarratorActive) {
      audioEngine.stopSpeech();
      setIsNarratorActive(false);
    } else {
      setIsNarratorActive(true);
      audioEngine.speak(text, () => setIsNarratorActive(false), 0.98);
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen bg-[#020617] text-slate-100 font-sans overflow-y-auto custom-scrollbar pt-20 pb-24 px-3 sm:px-6 md:px-10">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-8">
        
        {/* Lab Hero & Career Standout Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0b132b]/90 via-[#1c1438]/90 to-[#0b132b]/90 border border-purple-500/30 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-mono font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
                <span>Theoretical Astrophysics & Relativistic Engineering</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Spacetime Dilation & Time Travel Laboratory
              </h1>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Explore the empirical mechanics of Einstein's <strong className="text-cyan-300 font-semibold">Special & General Relativity</strong>. 
                Experience how extreme velocities and gravitational wells bend the flow of time, simulate one-way voyages into Earth's future, and verify why our modern GPS satellite constellation requires relativistic compensation.
              </p>
            </div>

            {/* Quick Interactive Toggles (Audio Sonification & Speech) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setIsSonificationActive(prev => !prev);
                }}
                className={`px-4 py-2.5 rounded-2xl border text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer ${
                  isSonificationActive
                    ? 'bg-cyan-500/25 border-cyan-400 text-cyan-200 shadow-[0_0_18px_rgba(6,182,212,0.4)] ring-1 ring-cyan-400/40'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="Hear time ticking at different rates in real-time"
              >
                <Radio className={`w-4 h-4 ${isSonificationActive ? 'text-cyan-300 animate-pulse' : 'text-slate-400'}`} />
                <span>{isSonificationActive ? 'SONIFICATION: ON' : 'ENABLE TIME AUDIO'}</span>
              </button>

              <button
                onClick={() => handleToggleNarration(
                  "Welcome to the Relativity and Time Travel Laboratory. According to Albert Einstein, time is not an absolute constant across the cosmos. It ticks at different rates depending on your relative speed through space and the strength of the surrounding gravitational field. When you travel near the speed of light, or orbit near a supermassive black hole, you genuinely time travel into the future of the universe."
                )}
                className={`px-4 py-2.5 rounded-2xl border text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer ${
                  isNarratorActive
                    ? 'bg-purple-500/25 border-purple-400 text-purple-200 shadow-[0_0_18px_rgba(168,85,247,0.4)]'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {isNarratorActive ? <VolumeX className="w-4 h-4 text-purple-300" /> : <Volume2 className="w-4 h-4 text-purple-300" />}
                <span>{isNarratorActive ? 'STOP NARRATION' : 'NARRATE OVERVIEW'}</span>
              </button>
            </div>
          </div>

          {/* Core Navigation Tabs between 5 experiments */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {[
              { id: 'special_relativity', label: '1. Lorentz Light Clock', icon: Clock, subtitle: 'Speed Dilation' },
              { id: 'twin_paradox', label: '2. Twin Paradox Voyager', icon: Rocket, subtitle: 'Forward Time Travel' },
              { id: 'gravitational_well', label: '3. Black Hole Time Well', icon: Orbit, subtitle: 'Gravitational Dilation' },
              { id: 'gps_proof', label: '4. GPS Relativistic Proof', icon: Globe, subtitle: '38.7 μs Calibration' },
              { id: 'energy_barrier', label: '5. Energy Barrier (E=mc²)', icon: Zap, subtitle: 'Infinite Speed Limit' }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    audioEngine.playClickSound();
                    setActiveTab(tab.id as any);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono transition-all flex items-center gap-2.5 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/30 to-purple-600/30 text-white border border-cyan-400/60 shadow-[0_0_16px_rgba(6,182,212,0.3)] font-bold'
                      : 'bg-black/40 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-cyan-300 animate-pulse' : 'text-slate-400'}`} />
                  <div className="text-left">
                    <div className="leading-tight">{tab.label}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{tab.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXPERIMENT 1: SPECIAL RELATIVITY & LORENTZ LIGHT CLOCK */}
        {/* ========================================================================= */}
        {activeTab === 'special_relativity' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
            {/* Left Column: Interactive Canvas & Sliders */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span>The Thought Experiment: Bouncing Photon Light Clock</span>
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Why time must dilate: Light moves at constant speed <em>c</em> in all reference frames.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSimPlaying(p => !p)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                    title={isSimPlaying ? "Pause Simulation" : "Play Simulation"}
                  >
                    {isSimPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-cyan-400" />}
                  </button>
                </div>

                {/* Canvas */}
                <div className="relative rounded-2xl overflow-hidden bg-[#020617] border border-white/10">
                  <canvas 
                    ref={lightClockCanvasRef} 
                    width={700} 
                    height={260} 
                    className="w-full h-[260px] block"
                  />
                </div>

                {/* Speed Velocity Slider ($v/c$) */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-cyan-400" />
                      <span>RELATIVISTIC VELOCITY (v / c):</span>
                    </span>
                    <span className="text-cyan-300 font-bold text-sm">
                      {(speedFraction * 100).toFixed(2)}% c ({(speedFraction * 299792.458).toLocaleString()} km/s)
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0.00"
                    max="0.999"
                    step="0.001"
                    value={speedFraction}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setSpeedFraction(val);
                      if (val > 0.9) audioEngine.playWarpSurge();
                    }}
                    className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-700 rounded-lg appearance-none"
                  />

                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>0.00c (Rest)</span>
                    <span>0.50c (Half-Speed)</span>
                    <span>0.90c (High Warp)</span>
                    <span>0.999c (Ultra-Relativistic)</span>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-400">Velocity Presets:</span>
                  {[
                    { label: 'Apollo 11 (0.000037c)', val: 0.000037 },
                    { label: 'Parker Solar Probe (0.00058c)', val: 0.00058 },
                    { label: '50% Light Speed (0.50c)', val: 0.50 },
                    { label: '86.6% c (γ = 2.0x)', val: 0.866 },
                    { label: '99.0% c (γ = 7.09x)', val: 0.99 },
                    { label: '99.9% c (γ = 22.37x)', val: 0.999 }
                  ].map(p => (
                    <button
                      key={p.label}
                      onClick={() => {
                        audioEngine.playClickSound();
                        setSpeedFraction(p.val);
                        if (p.val > 0.9) audioEngine.playWarpSurge();
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                        Math.abs(speedFraction - p.val) < 0.002
                          ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/40'
                          : 'bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
                {/* Simple Intuition Card for Experiment 1 */}
                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs font-mono space-y-2">
                  <div className="font-bold text-cyan-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>How it works in simple words: The Bouncing Ball Analogy</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Imagine bouncing a tennis ball straight up and down on a speeding train. To you inside the train, the ball just goes straight up and down. But to someone standing on the train platform watching through the window, the ball traces a long zigzag diagonal!
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Because the speed of light <em>c</em> can never speed up to compensate for that extra diagonal distance, <strong>each tick of the moving light clock takes longer</strong>. Moving through space steals from your movement through time!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Mathematical Readouts & Doppler Optical Effects */}
            <div className="lg:col-span-4 space-y-6">
              {/* Telemetry Matrix */}
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-4">
                <h3 className="text-sm font-bold font-mono uppercase text-cyan-300 tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Time Dilation Telemetry</span>
                </h3>

                <div className="space-y-3 font-mono text-xs">
                  {/* Lorentz Factor */}
                  <div className="p-3 rounded-xl bg-black/40 border border-cyan-500/30 flex items-center justify-between">
                    <span className="text-slate-400">Time Slowdown Factor:</span>
                    <span className="text-base font-bold text-cyan-300">{gamma.toFixed(3)}x slower</span>
                  </div>

                  {/* Time Dilation Ratio */}
                  <div className="p-3 rounded-xl bg-black/40 border border-purple-500/30 flex items-center justify-between">
                    <span className="text-slate-400">1 Year on Ship Equals:</span>
                    <span className="text-base font-bold text-purple-300">{gamma.toFixed(2)} Earth Years</span>
                  </div>

                  {/* Length Contraction */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                    <span className="text-slate-400">Ship Squishing (Length):</span>
                    <span className="text-sm font-bold text-amber-300">{lengthContractionPercent.toFixed(1)}% of normal</span>
                  </div>

                  {/* Relativistic Mass Multiplier */}
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                    <span className="text-slate-400">Rocket Resistance (Mass):</span>
                    <span className="text-sm font-bold text-emerald-300">{gamma.toFixed(2)}x heavier</span>
                  </div>
                </div>

                {/* Relativistic Optical Doppler Shift */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-mono text-slate-300 font-semibold uppercase">
                    What your eyes see looking outside:
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                    <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/40 text-blue-200">
                      <div className="font-bold">LOOKING FORWARD</div>
                      <div className="text-sm font-bold text-cyan-300 mt-1">{(1 / dopplerFactorApproaching).toFixed(2)}x blueshift</div>
                      <div className="text-[9px] text-slate-300 mt-0.5">Stars turn intense brilliant blue & violet</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200">
                      <div className="font-bold">LOOKING BEHIND</div>
                      <div className="text-sm font-bold text-red-300 mt-1">{(1 / dopplerFactorReceding).toFixed(2)}x redshift</div>
                      <div className="text-[9px] text-slate-300 mt-0.5">Stars fade into dim deep red and infrared</div>
                    </div>
                  </div>
                </div>

                {/* Theoretical Derivation Callout */}
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200 text-xs font-mono leading-relaxed">
                  <div className="font-bold text-purple-300 mb-1 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Einstein's Time Dilation Formula:</span>
                  </div>
                  <code>Time Passed on Earth = Ship Time × {gamma.toFixed(2)}</code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* EXPERIMENT 2: TWIN PARADOX INTERSTELLAR TIME TRAVEL */}
        {/* ========================================================================= */}
        {activeTab === 'twin_paradox' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
            {/* Left Controls & Destination Selector */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-purple-400" />
                    <span>Twin Paradox Voyage Configuration</span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    Select a stellar target, configure cruising velocity, and observe asymmetric biological aging.
                  </p>
                </div>

                {/* Target Destinations Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase">Select Target Star System:</label>
                  <div className="grid grid-cols-1 gap-1.5 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                    {DESTINATIONS.map(dest => {
                      const isSel = selectedDestination.id === dest.id;
                      return (
                        <button
                          key={dest.id}
                          onClick={() => {
                            audioEngine.playClickSound();
                            setSelectedDestination(dest);
                            setJourneyProgress(0);
                            setIsJourneyRunning(false);
                          }}
                          className={`p-3 rounded-xl text-left font-mono transition-all flex items-center justify-between cursor-pointer ${
                            isSel
                              ? 'bg-purple-600/30 border border-purple-400/80 text-white shadow-lg shadow-purple-500/20'
                              : 'bg-black/30 border border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                          }`}
                        >
                          <div>
                            <div className="text-xs font-bold text-white">{dest.name}</div>
                            <div className="text-[10px] text-slate-400">{dest.description}</div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-bold text-cyan-300">{dest.distanceLy.toLocaleString()} ly</span>
                            <div className="text-[9px] text-slate-400">one-way</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Cruise Speed Slider */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">CRUISE SPEED:</span>
                    <span className="text-purple-300 font-bold text-sm">{(twinSpeed * 100).toFixed(1)}% c</span>
                  </div>
                  <input
                    type="range"
                    min="0.50"
                    max="0.9999"
                    step="0.001"
                    value={twinSpeed}
                    onChange={(e) => {
                      setTwinSpeed(parseFloat(e.target.value));
                      setJourneyProgress(0);
                    }}
                    className="w-full accent-purple-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>0.50c</span>
                    <span>0.90c</span>
                    <span>0.99c</span>
                    <span>0.9999c</span>
                  </div>
                </div>

                {/* Mission Launch Button */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      audioEngine.playWarpSurge();
                      setIsJourneyRunning(prev => !prev);
                    }}
                    className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 transition-all cursor-pointer"
                  >
                    {isJourneyRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isJourneyRunning ? 'PAUSE MISSION' : 'EXECUTE RELATIVISTIC MISSION'}</span>
                  </button>

                  <button
                    onClick={() => {
                      audioEngine.playClickSound();
                      setJourneyProgress(0);
                      setIsJourneyRunning(false);
                    }}
                    className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 transition-all cursor-pointer"
                    title="Reset Mission"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Display: Dual Live Clocks & Biological Aging Ticker */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Mission Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300 uppercase flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-cyan-400" />
                      <span>Round-Trip Mission to {selectedDestination.name}</span>
                    </span>
                    <span className="text-cyan-300 font-bold">{journeyProgress.toFixed(0)}% Complete</span>
                  </div>
                  <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden border border-white/10 p-0.5">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100"
                      style={{ width: `${journeyProgress}%` }}
                    />
                  </div>
                </div>

                {/* Dual Clocks Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Earth Twin Clock */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-950/40 to-[#020617] border border-blue-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-blue-300 uppercase flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span>Earth Observer Twin</span>
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded border border-blue-500/40">
                        Stationary Frame
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-3xl font-mono font-extrabold text-white">
                        {(earthTwinStartAge + earthTimePassedCurrent).toFixed(1)} <span className="text-sm font-normal text-slate-400">years old</span>
                      </div>
                      <div className="text-xs font-mono text-cyan-300">
                        +{earthTimePassedCurrent.toFixed(1)} years passed on Earth
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-300 leading-relaxed pt-2 border-t border-white/10 bg-blue-950/20 p-2.5 rounded-xl">
                      <span className="text-blue-300 font-semibold block mb-0.5">
                        {journeyProgress === 0 && !isJourneyRunning 
                          ? 'Pre-Flight Earth Projection:' 
                          : journeyProgress >= 100 
                            ? 'Mission Completed • Earth Debrief:' 
                            : `Earth Status (Live +${earthTimePassedCurrent.toFixed(1)} yrs):`}
                      </span>
                      {journeyProgress === 0 && !isJourneyRunning ? (
                        <span>
                          Staged for departure to <strong className="text-white">{selectedDestination.name}</strong> ({selectedDestination.distanceLy.toLocaleString()} ly). When you launch this voyage at <strong className="text-cyan-300">{(twinSpeed * 100).toFixed(1)}% c</strong>, approximately <strong className="text-white">{earthObserverYears.toFixed(1)} years</strong> will pass on Earth before the ship returns. Click <strong className="text-purple-300">"EXECUTE RELATIVISTIC MISSION"</strong> to begin.
                        </span>
                      ) : journeyProgress >= 100 ? (
                        <span>
                          The spaceship has returned to Earth! A total of <strong className="text-white">{earthObserverYears.toFixed(1)} years</strong> have passed on Earth. {earthEraSummary}
                        </span>
                      ) : (
                        <span>
                          During this flight, <strong className="text-white">+{earthTimePassedCurrent.toFixed(1)} years</strong> have already elapsed on Earth ({journeyProgress.toFixed(0)}% of round trip). {getLiveEarthProgressEra(earthTimePassedCurrent)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Traveling Astronaut Twin Clock */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-950/40 to-[#020617] border border-purple-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-purple-300 uppercase flex items-center gap-1.5">
                        <Rocket className="w-4 h-4 text-purple-400" />
                        <span>Astronaut Twin (Ship)</span>
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/40">
                        Relativistic v = {(twinSpeed * 100).toFixed(1)}% c
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-3xl font-mono font-extrabold text-purple-300">
                        {(startAstronautAge + travelerTimePassedCurrent).toFixed(1)} <span className="text-sm font-normal text-slate-400">years old</span>
                      </div>
                      <div className="text-xs font-mono text-purple-400">
                        Only +{travelerTimePassedCurrent.toFixed(1)} years aged inside ship
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-300 leading-relaxed pt-2 border-t border-white/10 bg-purple-950/20 p-2.5 rounded-xl">
                      <span className="text-purple-300 font-semibold block mb-0.5">
                        {journeyProgress === 0 && !isJourneyRunning 
                          ? 'Pre-Flight Astronaut Projection:' 
                          : journeyProgress >= 100 
                            ? 'Mission Completed • Biological Aging Result:' 
                            : `Spaceship Wristwatch (Live +${travelerTimePassedCurrent.toFixed(1)} yrs):`}
                      </span>
                      {journeyProgress === 0 && !isJourneyRunning ? (
                        <span>
                          At <strong className="text-purple-300">{(twinSpeed * 100).toFixed(1)}% c</strong>, Lorentz time dilation operates at <strong className="text-purple-300">γ = {twinGamma.toFixed(2)}x</strong>. While Earth advances {earthObserverYears.toFixed(1)} years during the mission, the astronaut will only age <strong className="text-pink-300">{travelerProperYears.toFixed(1)} biological years</strong> aboard the vessel.
                        </span>
                      ) : journeyProgress >= 100 ? (
                        <span>
                          The astronaut disembarks the ship! Due to relativistic time dilation (γ = {twinGamma.toFixed(2)}x), the astronaut aged only <strong className="text-pink-300">{travelerProperYears.toFixed(1)} biological years</strong>, while their Earth twin aged <strong className="text-white">{earthObserverYears.toFixed(1)} years</strong>!
                        </span>
                      ) : (
                        <span>
                          Cruising at {(twinSpeed * 100).toFixed(1)}% light speed. The astronaut's ship clock has only advanced <strong className="text-pink-300">+{travelerTimePassedCurrent.toFixed(1)} biological years</strong>, staying {twinGamma.toFixed(2)}x younger than observers on Earth!
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Paradox Resolution Callout */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-xs font-mono text-slate-300">
                  <div className="text-amber-300 font-bold flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-400" />
                    <span>Why is the astronaut younger instead of Earth? (Simple Explanation):</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    You might wonder: from the astronaut's point of view, wasn't Earth moving away? Why doesn't Earth stay younger? 
                    <br/><br/>
                    <strong>The answer:</strong> The astronaut had to hit the brakes, turn their rocket ship around at {selectedDestination.name}, and accelerate all the way back to Earth. <strong>Hitting the brakes and firing reverse engines breaks the symmetry.</strong> That intense physical turnaround proves the astronaut was the one taking a detour through spacetime!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* EXPERIMENT 3: GENERAL RELATIVITY & GRAVITATIONAL TIME WELL */}
        {/* ========================================================================= */}
        {activeTab === 'gravitational_well' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
            {/* Left Canvas: Curved Spacetime Grid */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Orbit className="w-5 h-5 text-amber-400" />
                    <span>Schwarzschild Metric & Gravitational Time Dilation</span>
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    General Relativity: Clocks tick slower in deeper gravitational potential wells.
                  </p>
                </div>

                {/* Canvas */}
                <div className="relative rounded-2xl overflow-hidden bg-[#020617] border border-white/10">
                  <canvas 
                    ref={gravCanvasRef} 
                    width={600} 
                    height={280} 
                    className="w-full h-[280px] block"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 border border-white/10 px-2.5 py-1 rounded-lg text-[10px] font-mono text-amber-300">
                    Active Well: <span className="text-white font-bold">{selectedGravBody.name}</span>
                  </div>
                </div>

                {/* Proximity Slider to Event Horizon */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-amber-400" />
                      <span>PROXIMITY TO EVENT HORIZON (r / r_s):</span>
                    </span>
                    <span className="text-amber-300 font-bold text-sm">
                      {orbitRadiusRatio.toFixed(3)} r_s
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1.001"
                    max="5.0"
                    step="0.001"
                    value={orbitRadiusRatio}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setOrbitRadiusRatio(val);
                      if (val < 1.05) audioEngine.playGravitationalHum(1.0 - (val - 1.0) / 0.05);
                    }}
                    className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />

                  {/* Quick Preset Buttons for Orbital Distances */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      { label: 'Horizon Edge (1.015 rs)', val: 1.015 },
                      { label: 'Photon Sphere (1.50 rs)', val: 1.5 },
                      { label: 'ISCO Orbit (3.00 rs)', val: 3.0 },
                      { label: 'Safe Orbit (5.00 rs)', val: 5.0 }
                    ].map(p => (
                      <button
                        key={p.label}
                        onClick={() => {
                          audioEngine.playClickSound();
                          setOrbitRadiusRatio(p.val);
                          if (p.val < 1.05) audioEngine.playGravitationalHum(0.85);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                          Math.abs(orbitRadiusRatio - p.val) < 0.01
                            ? 'bg-amber-500/30 text-amber-200 border border-amber-400/60 font-bold'
                            : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
                    <span className="text-red-400 font-bold">1.001 r_s (Event Horizon Edge)</span>
                    <span>2.0 r_s</span>
                    <span>3.0 r_s (ISCO Stable Orbit)</span>
                    <span>5.0 r_s (Safe Orbit)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Telemetry & Dynamic Body Profile */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold font-mono uppercase text-amber-300 tracking-wider flex items-center gap-2">
                    <Activity className="w-4 h-4 text-amber-400" />
                    <span>Gravitational Telemetry & Body Matrix</span>
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {selectedGravBody.classification}
                  </span>
                </div>

                {/* Preset Objects Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400">SELECT GRAVITATIONAL BODY / STAR:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {GRAV_BODIES.map(b => {
                      const isSel = selectedGravBody.id === b.id;
                      return (
                        <button
                          key={b.id}
                          onClick={() => {
                            audioEngine.playClickSound();
                            setSelectedGravBody(b);
                            setOrbitRadiusRatio(b.defaultOrbitRadiusRatio);
                            if (b.id === 'millers_planet') {
                              audioEngine.playGravitationalHum(0.85);
                            }
                          }}
                          className={`p-2.5 rounded-xl text-left font-mono transition-all flex flex-col justify-between text-xs cursor-pointer ${
                            isSel
                              ? 'bg-amber-500/25 border border-amber-400/90 text-white font-bold shadow-lg shadow-amber-500/10'
                              : 'bg-black/30 border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className="text-xs font-bold text-white">{b.name}</span>
                          <span className="text-[10px] text-amber-300/80 font-normal truncate mt-0.5">{b.famousExample}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Body Core Physical Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 space-y-0.5">
                    <div className="text-[10px] text-slate-400">Solar Mass (M☉):</div>
                    <div className="text-sm font-bold text-amber-300 truncate">
                      {selectedGravBody.massSolar >= 1e6 
                        ? `${(selectedGravBody.massSolar / 1e6).toFixed(2)}M M☉` 
                        : selectedGravBody.massSolar >= 1 
                          ? `${selectedGravBody.massSolar.toFixed(1)} M☉` 
                          : `${selectedGravBody.massSolar.toExponential(2)} M☉`}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 space-y-0.5">
                    <div className="text-[10px] text-slate-400">Schwarzschild (r_s):</div>
                    <div className="text-sm font-bold text-cyan-300 truncate" title={selectedGravBody.schwarzschildRadiusLabel}>
                      {selectedGravBody.schwarzschildRadiusLabel}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 space-y-0.5">
                    <div className="text-[10px] text-slate-400">Surface Gravity:</div>
                    <div className="text-sm font-bold text-emerald-300 truncate" title={selectedGravBody.surfaceGravityLabel}>
                      {selectedGravBody.surfaceGravityLabel}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 space-y-0.5">
                    <div className="text-[10px] text-slate-400">Escape Velocity:</div>
                    <div className="text-sm font-bold text-purple-300 truncate">
                      {selectedGravBody.escapeVelocityKms.toLocaleString()} km/s
                    </div>
                  </div>
                </div>

                {/* Calculation Matrix */}
                <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/30 space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-slate-400">Schwarzschild Dilation Factor:</span>
                    <span className="text-amber-300 font-bold text-sm">{(gravTimeDilationFactor * 100).toFixed(3)}%</span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-slate-400">1 Hour at {orbitRadiusRatio.toFixed(3)} r_s Equals:</span>
                    <span className="text-purple-300 font-bold text-sm">
                      {gravSlowdownMultiplier > 8760 
                        ? `${(gravSlowdownMultiplier / 8760).toFixed(2)} Earth Years` 
                        : gravSlowdownMultiplier > 24 
                          ? `${(gravSlowdownMultiplier / 24).toFixed(1)} Earth Days (${gravSlowdownMultiplier.toFixed(0)} hrs)`
                          : `${gravSlowdownMultiplier.toFixed(2)} Earth Hours`}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Natural Characteristic Dilation:</span>
                    <span className="text-emerald-300 font-semibold text-[11px] text-right">
                      {selectedGravBody.dilationAtSurfaceOrOrbit}
                    </span>
                  </div>
                </div>

                {/* Dynamic Astrophysical Analysis Card for Selected Body */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 via-black to-[#0b132b] border border-amber-500/30 text-slate-200 text-xs leading-relaxed space-y-1.5 font-mono">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Astrophysical Analysis • {selectedGravBody.name}</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {selectedGravBody.deepDiveAnalysis}
                  </p>
                  <div className="text-[10px] text-amber-400/90 pt-1 border-t border-white/10">
                    <strong>Empirical Benchmark:</strong> {selectedGravBody.famousExample}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* EXPERIMENT 4: GPS SATELLITE RELATIVITY PROOF */}
        {/* ========================================================================= */}
        {activeTab === 'gps_proof' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    <span>Real-World Proof: GPS Satellite Relativity Calibration</span>
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    Why your smartphone GPS would fail without Einstein's equations.
                  </p>
                </div>

                {/* Relativity Compensation Switch */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-black to-blue-950/40 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      <span>RELATIVISTIC COMPENSATION STATUS:</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        isRelativityCompensated ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-red-500/20 text-red-300 border border-red-500/40 animate-pulse'
                      }`}>
                        {isRelativityCompensated ? 'ACTIVE (HARDCODED)' : 'SIMULATION: DISABLED'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      Atomic clocks on GPS satellites are pre-adjusted before launch from 10.23 MHz to 10.22999999543 MHz.
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      audioEngine.playClickSound();
                      setIsRelativityCompensated(prev => !prev);
                    }}
                    className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                      isRelativityCompensated
                        ? 'bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40'
                        : 'bg-emerald-500/30 hover:bg-emerald-500/40 text-emerald-200 border border-emerald-400/60'
                    }`}
                  >
                    {isRelativityCompensated ? 'DISABLE TO TEST DRIFT' : 'RESTORE RELATIVITY'}
                  </button>
                </div>

                {/* Time Elapsed Slider for Drift Error */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">TIME ELAPSED WITHOUT CORRECTION:</span>
                    <span className="text-cyan-300 font-bold text-sm">{gpsSimulatedHours} Hours</span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="72"
                    step="1"
                    value={gpsSimulatedHours}
                    onChange={(e) => setGpsSimulatedHours(parseInt(e.target.value, 10))}
                    className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />

                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>1 Hour</span>
                    <span>24 Hours (1 Day)</span>
                    <span>48 Hours (2 Days)</span>
                    <span>72 Hours (3 Days)</span>
                  </div>
                </div>

                {/* Mathematical Balance Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Special Relativity Effect */}
                  <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-2">
                    <div className="text-xs font-bold text-blue-300 font-mono">1. Special Relativity (Speed)</div>
                    <div className="text-xl font-bold text-blue-400 font-mono">-7.2 μs / day</div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Orbital velocity of 3.87 km/s makes satellite clocks tick <em>slower</em> relative to Earth ground stations.
                    </p>
                  </div>

                  {/* General Relativity Effect */}
                  <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                    <div className="text-xs font-bold text-purple-300 font-mono">2. General Relativity (Gravity)</div>
                    <div className="text-xl font-bold text-purple-400 font-mono">+45.9 μs / day</div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      High altitude of 20,200 km (weaker gravity) makes satellite clocks tick <em>faster</em> relative to Earth ground.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Net Daily Drift & Positioning Impact */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <h3 className="text-sm font-bold font-mono uppercase text-emerald-300 tracking-wider flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>GPS Constellation Drift Error</span>
                </h3>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Net Daily Relativistic Clock Advance:</span>
                    <span className="text-emerald-300 font-bold text-sm">+38.7 microseconds / day</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Total Clock Drift ({gpsSimulatedHours}h):</span>
                    <span className="text-amber-300 font-bold text-sm">
                      {(netDailyDriftMicroseconds * (gpsSimulatedHours / 24)).toFixed(2)} μs
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div className="text-slate-400 mb-1">Accumulated GPS Positioning Error:</div>
                    <div className={`text-2xl font-bold font-mono ${
                      isRelativityCompensated ? 'text-emerald-400' : 'text-red-400 animate-pulse'
                    }`}>
                      {isRelativityCompensated ? '< 1.2 meters (Normal Precision)' : `${uncompensatedPositionErrorKm.toFixed(2)} Kilometers`}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs leading-relaxed space-y-2">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Empirical Confirmation of Einstein's Theory:</span>
                  </div>
                  <p>
                    Without Einstein's exact calculations incorporated into navigation satellite microcode, global GPS navigation, airplane autopilots, and ride-sharing apps would drift by approximately <strong>11.4 kilometers every single day</strong>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* EXPERIMENT 5: ENERGY BARRIER & COSMIC SPEED LIMIT (E=mc²) */}
        {/* ========================================================================= */}
        {activeTab === 'energy_barrier' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-pink-400" />
                    <span>The Cosmic Speed Limit: Relativistic Kinetic Energy</span>
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    Why no object with mass can ever reach or exceed lightspeed <em>c</em>.
                  </p>
                </div>

                {/* Spacecraft Mass Selector */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">SPACECRAFT DRY MASS:</span>
                    <span className="text-pink-300 font-bold text-sm">{(spacecraftMassKg / 1000).toLocaleString()} Metric Tons</span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="500000"
                    step="1000"
                    value={spacecraftMassKg}
                    onChange={(e) => setSpacecraftMassKg(parseFloat(e.target.value))}
                    className="w-full accent-pink-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                  />

                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>1 kg (Proton Probe)</span>
                    <span>100 Tons (Starship)</span>
                    <span>500 Tons (Interstellar Ark)</span>
                  </div>
                </div>

                {/* Energy Equation Display */}
                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-200 text-xs font-mono leading-relaxed space-y-2">
                  <div className="font-bold text-purple-300 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Relativistic Kinetic Energy Equation:</span>
                  </div>
                  <code>E_k = (γ - 1)·m·c² = [ 1/√(1 - v²/c²) - 1 ]·m·c²</code>
                  <p className="text-slate-300 mt-2">
                    As velocity <code>v → c</code>, the Lorentz factor <code>γ → ∞</code>. Accelerating even a single atom to exactly the speed of light would require <strong>infinite energy</strong>—more than all the mass-energy in the observable universe!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Energy Calculations & Planetary Equivalencies */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-[#0b132b]/80 border border-white/10 shadow-2xl backdrop-blur-xl space-y-5">
                <h3 className="text-sm font-bold font-mono uppercase text-pink-300 tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-pink-400" />
                  <span>Energy Equivalency Matrix</span>
                </h3>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex justify-between items-center">
                    <span className="text-slate-400">Target Velocity:</span>
                    <span className="text-cyan-300 font-bold">{(speedFraction * 100).toFixed(2)}% c</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-pink-500/30 flex justify-between items-center">
                    <span className="text-slate-400">Kinetic Energy Required:</span>
                    <span className="text-pink-300 font-bold">{kineticEnergyJoules.toExponential(3)} Joules</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-amber-500/30 flex justify-between items-center">
                    <span className="text-slate-400">TNT Explosive Equivalent:</span>
                    <span className="text-amber-300 font-bold">{kineticEnergyMegatonsTNT.toFixed(1)} Megatons</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-purple-500/30 flex justify-between items-center">
                    <span className="text-slate-400">vs. Total Earth Annual Electricity:</span>
                    <span className="text-purple-300 font-bold">{worldAnnualElectricityRatio.toFixed(1)}% of Global Grid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* INTERACTIVE THOUGHT EXPERIMENTS & AUDIENCE INTUITION BUILDER */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0b132b]/90 border border-purple-500/30 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Audience Intuition &amp; Thought Experiments</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                How Relativity Bends Everyday Common Sense
              </h3>
              <p className="text-xs text-slate-300 font-mono">
                Click any question below to reveal how Einstein revolutionized our understanding of space and time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                q: "Do you feel time moving slower inside a fast spaceship?",
                a: "No! To you on board, your heartbeat, your wristwatch, your coffee brewing, and your thoughts feel 100% normal (1 second per second). You only notice the slowdown when you compare clocks with someone who stayed on Earth.",
                tag: "Principle of Relativity",
                color: "cyan"
              },
              {
                q: "Is this real 'time travel' into the future?",
                a: "Yes! Forward time travel is an established, proven law of physics. Traveling at 99.9% light speed or orbiting close to a supermassive black hole lets you jump forward decades into Earth's future in just days of your own time.",
                tag: "Forward Time Travel",
                color: "purple"
              },
              {
                q: "Why can't we travel backward in time?",
                a: "Special Relativity shows you can slow down time or fast-forward to the future, but backward time travel creates causality paradoxes (like changing history before you left). The universe strictly protects cause-and-effect!",
                tag: "Arrow of Time",
                color: "amber"
              },
              {
                q: "What happens if you turn on headlights at 99% light speed?",
                a: "The headlight beam still races away from your ship at exactly 100% light speed (c)! Light's speed is the absolute constant of nature—space and time bend around it so every observer measures the exact same speed.",
                tag: "Speed of Light Constant",
                color: "emerald"
              }
            ].map((item, idx) => {
              const isOpen = openIntuitionIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    audioEngine.playClickSound();
                    setOpenIntuitionIdx(isOpen ? null : idx);
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer select-none space-y-3 ${
                    isOpen
                      ? 'bg-purple-950/40 border-purple-400/60 shadow-lg shadow-purple-500/20'
                      : 'bg-black/40 hover:bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-cyan-300">
                        {item.tag}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {item.q}
                      </h4>
                    </div>
                    <div className="p-1 rounded-lg bg-white/10 text-slate-300 shrink-0 mt-1">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-300' : ''}`} />
                    </div>
                  </div>

                  {isOpen && (
                    <p className="text-xs text-slate-300 font-mono leading-relaxed pt-2 border-t border-white/10 animate-in fade-in duration-200">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
