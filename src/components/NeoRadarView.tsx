import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { NeoObject } from '../types';
import { NEO_DATABASE } from '../data/neoData';
import { audioEngine } from '../utils/audioEngine';
import { createRealisticPlanetTexture, createEarthCloudsTexture, createGlowParticleTexture } from '../utils/planetTextures';
import { fetchNasaLiveNeos } from '../utils/supabaseClient';
import { 
  AlertTriangle, ShieldAlert, Zap, Compass, Info, 
  Crosshair, Sparkles, RefreshCw, 
  ChevronRight, ChevronLeft, Target, Flame, Play, Pause, Activity,
  Maximize2, Eye, Gauge, Shield, HelpCircle, GitBranch, Sliders, Layers
} from 'lucide-react';

// ============================================================================
// HUMAN TRANSLATION & LAYMAN EDUCATION HELPERS
// ============================================================================

export interface HumanSizeComparison {
  title: string;
  icon: string;
  metaphor: string;
  atmosphericEffect: string;
  scaleCategory: string;
  relativePercent: number;
}

export const getHumanSizeComparison = (diameterMeters: number): HumanSizeComparison => {
  if (diameterMeters < 35) {
    return {
      title: 'House / City Bus Class',
      icon: '🚌',
      metaphor: `~${Math.round(diameterMeters)}m: Comparable to 2 city buses or a 2-story family house.`,
      atmosphericEffect: 'Would disintegrate into a dazzling fireball and harmless meteorites high in the atmosphere (like the 2013 Chelyabinsk meteor).',
      scaleCategory: 'Micro Asteroid',
      relativePercent: Math.min(100, Math.max(6, (diameterMeters / 1000) * 100))
    };
  }
  if (diameterMeters < 90) {
    return {
      title: 'Commercial Airliner Class',
      icon: '✈️',
      metaphor: `~${Math.round(diameterMeters)}m: Similar to the wingspan of a Boeing 777 or Airbus A380.`,
      atmosphericEffect: 'Would detonate as a high-altitude hypersonic airburst shockwave (similar to the 1908 Tunguska explosion).',
      scaleCategory: 'Small Asteroid',
      relativePercent: Math.min(100, Math.max(12, (diameterMeters / 1000) * 100))
    };
  }
  if (diameterMeters < 250) {
    return {
      title: 'Football Stadium / Statue of Liberty',
      icon: '🏟️',
      metaphor: `~${Math.round(diameterMeters)}m: Comparable to a 60,000-seat sports arena or the Statue of Liberty.`,
      atmosphericEffect: 'Would reach the surface, excavating a 1.5 - 3 km crater and shattering buildings across a metropolitan area.',
      scaleCategory: 'City-Killer Class',
      relativePercent: Math.min(100, Math.max(25, (diameterMeters / 1000) * 100))
    };
  }
  if (diameterMeters < 600) {
    return {
      title: 'Empire State / Eiffel Tower',
      icon: '🏢',
      metaphor: `~${Math.round(diameterMeters)}m: Equal to the height of the Empire State Building or Eiffel Tower.`,
      atmosphericEffect: 'Severe multi-megaton blast producing hurricane-force winds, widespread fires, and massive tsunamis if impacting oceans.',
      scaleCategory: 'Regional Destroyer',
      relativePercent: Math.min(100, Math.max(45, (diameterMeters / 1000) * 100))
    };
  }
  if (diameterMeters < 1500) {
    return {
      title: 'Burj Khalifa / Golden Gate Bridge',
      icon: '🌉',
      metaphor: `~${(diameterMeters / 1000).toFixed(1)} km: Taller than the tallest skyscraper or spanning the Golden Gate Bridge.`,
      atmosphericEffect: 'Continental devastation: injects stratospheric sulfur/dust, causing regional climate cooling and failure of agricultural crops.',
      scaleCategory: 'Kilometer Titan',
      relativePercent: Math.min(100, Math.max(70, (diameterMeters / 1000) * 100))
    };
  }
  return {
    title: 'Extinction Level Mountain',
    icon: '☄️',
    metaphor: `~${(diameterMeters / 1000).toFixed(1)} km: Sized like Mount Everest or a whole mountain range.`,
    atmosphericEffect: 'Global mass extinction catastrophe (comparable to the 10 km Chicxulub impact that ended the age of the dinosaurs).',
    scaleCategory: 'Planetary Extinction Class',
    relativePercent: 100
  };
};

export const getHumanDistanceExplanation = (lunarDistances: number, km: number) => {
  if (lunarDistances < 0.1) {
    return {
      badge: 'INSIDE SATELLITE BELT',
      badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
      description: `Only ${km.toLocaleString()} km from Earth — closer than geostationary TV and weather satellites (35,786 km). Rare ultra-close approach.`
    };
  }
  if (lunarDistances <= 1.0) {
    return {
      badge: 'CLOSER THAN THE MOON',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      description: `${lunarDistances.toFixed(2)} Lunar Distances (${km.toLocaleString()} km) — Closer to us than the Moon itself (384,400 km). Highly monitored flyby.`
    };
  }
  if (lunarDistances <= 5.0) {
    return {
      badge: 'SENTRY PRIORITY TRACK',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      description: `${lunarDistances.toFixed(1)}x the distance to the Moon (${(km / 1000000).toFixed(2)}M km). Safe clearance, actively tracked by planetary defense radar.`
    };
  }
  return {
    badge: 'SAFE INTERPLANETARY FLYBY',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    description: `${lunarDistances.toFixed(1)} Lunar Distances (${(km / 1000000).toFixed(2)} million km). Well clear of Earth-Moon gravitational system.`
  };
};

export const getHumanSpeedExplanation = (kmS: number) => {
  const kmh = kmS * 3600;
  const mach = Math.round(kmh / 1234.8);
  const nycToLondonMins = ((5585 / kmh) * 60).toFixed(1);
  return {
    kmh: kmh.toLocaleString(undefined, { maximumFractionDigits: 0 }),
    mach: `Mach ${mach}`,
    metaphor: `Fast enough to fly from New York to London in ~${nycToLondonMins} minutes (${mach}x speed of sound).`
  };
};

// Kinetic Impact Physics calculation model
interface ImpactDamageResult {
  massKg: number;
  megatonsTNT: number;
  craterDiameterKm: number;
  blastRadiusKm: number;
  thermalRadiusKm: number;
  isAirburst: boolean;
  comparison: string;
}

const calculateImpactPhysics = (neo: NeoObject): ImpactDamageResult => {
  const diameterM = neo.estimatedDiameterMeters.max || 100;
  const radiusM = diameterM / 2;
  const volumeM3 = (4 / 3) * Math.PI * Math.pow(radiusM, 3);
  const densityKgM3 = 2600; // Stony chondrite density
  const massKg = volumeM3 * densityKgM3;
  const velocityMS = (neo.velocityKmS || 20) * 1000;
  const kineticEnergyJoules = 0.5 * massKg * Math.pow(velocityMS, 2);
  const megatonsTNT = kineticEnergyJoules / (4.184 * 1e15);

  const craterDiameterMeters = Math.pow(kineticEnergyJoules, 0.29) * 0.16;
  const craterDiameterKm = craterDiameterMeters / 1000;
  const blastRadiusKm = Math.pow(Math.max(megatonsTNT, 0.001), 0.33) * 3.1;
  const thermalRadiusKm = Math.pow(Math.max(megatonsTNT, 0.001), 0.41) * 7.5;
  const isAirburst = diameterM < 60;

  let comparison = 'Local hypersonic airburst shockwave (Chelyabinsk class)';
  if (megatonsTNT > 50000000) {
    comparison = 'Chicxulub Dinosaur Extinction class impact event';
  } else if (megatonsTNT > 10000) {
    comparison = 'Continental devastation & nuclear winter catastrophe';
  } else if (megatonsTNT > 100) {
    comparison = 'Multiple Tsar Bomba thermonuclear detonation yields';
  } else if (megatonsTNT > 1) {
    comparison = 'Metropolitan city-killer impact event (Tunguska class)';
  }

  return {
    massKg,
    megatonsTNT,
    craterDiameterKm,
    blastRadiusKm,
    thermalRadiusKm,
    isAirburst,
    comparison
  };
};

export const NeoRadarView: React.FC = () => {
  const [neos, setNeos] = useState<NeoObject[]>(NEO_DATABASE);
  const [selectedAsteroid, setSelectedAsteroid] = useState<NeoObject>(NEO_DATABASE[0]);
  const [filterHazardousOnly, setFilterHazardousOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'distance' | 'size' | 'velocity'>('distance');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dataSource, setDataSource] = useState<'live_nasa' | 'supabase' | 'curated_fallback'>('curated_fallback');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');

  // Interactive UI and Camera Controls State
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'plain_english' | 'telemetry' | 'impact_physics'>('plain_english');
  const [isSimPaused, setIsSimPaused] = useState<boolean>(false);
  const [hudLabelMode, setHudLabelMode] = useState<'all' | 'threats' | 'target_only' | 'off'>('all');
  const [hoveredAsteroid, setHoveredAsteroid] = useState<NeoObject | null>(null);
  const [trajectoryMode, setTrajectoryMode] = useState<'selected' | 'hazardous' | 'all' | 'none'>('selected');
  const [cameraPerspective, setCameraPerspective] = useState<'overview' | 'top_down' | 'target_lock' | 'earth_view'>('overview');

  // Direct DOM Refs for 60 FPS Billboard HUD tags without React re-renders
  const hudElementsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const earthHudRef = useRef<HTMLDivElement | null>(null);

  const trajectoryModeRef = useRef<'selected' | 'hazardous' | 'all' | 'none'>('selected');
  useEffect(() => {
    trajectoryModeRef.current = trajectoryMode;
  }, [trajectoryMode]);

  const isSimPausedRef = useRef<boolean>(false);
  useEffect(() => {
    isSimPausedRef.current = isSimPaused;
  }, [isSimPaused]);

  const hudLabelModeRef = useRef<'all' | 'threats' | 'target_only' | 'off'>('all');
  useEffect(() => {
    hudLabelModeRef.current = hudLabelMode;
    if (hudLabelMode === 'off') {
      hudElementsRef.current.forEach((el) => {
        if (el) el.style.display = 'none';
      });
    }
  }, [hudLabelMode]);

  const hoveredAsteroidRef = useRef<NeoObject | null>(null);
  useEffect(() => {
    hoveredAsteroidRef.current = hoveredAsteroid;
  }, [hoveredAsteroid]);

  const selectedAsteroidRef = useRef<NeoObject>(selectedAsteroid);
  useEffect(() => {
    selectedAsteroidRef.current = selectedAsteroid;
  }, [selectedAsteroid]);

  const neosRef = useRef<NeoObject[]>(neos);
  useEffect(() => {
    neosRef.current = neos;
  }, [neos]);

  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const asteroidGroupRef = useRef<THREE.Group | null>(null);
  const asteroidMeshesRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const trajectoryBeamsRef = useRef<Map<string, THREE.Line>>(new Map());
  const distanceLaserRef = useRef<THREE.Line | null>(null);
  const reticleMeshRef = useRef<THREE.Mesh | null>(null);
  const cloudsMeshRef = useRef<THREE.Mesh | null>(null);
  const satellitesGroupRef = useRef<THREE.Group | null>(null);

  // Smooth Camera Framing Helpers
  const focusCameraOnAsteroid = useCallback((neo: NeoObject) => {
    audioEngine.playLaserTone();
    setSelectedAsteroid(neo);
    setCameraPerspective('target_lock');
    const mesh = asteroidMeshesRef.current.get(neo.id);
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!mesh || !camera || !controls) return;

    const targetPos = mesh.position.clone();
    controls.target.copy(targetPos);
    camera.position.set(targetPos.x + 4.2, targetPos.y + 2.8, targetPos.z + 5.2);
    controls.update();
  }, []);

  const setCameraMode = useCallback((mode: 'overview' | 'top_down' | 'target_lock' | 'earth_view') => {
    audioEngine.playClickSound();
    setCameraPerspective(mode);
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    if (mode === 'overview') {
      controls.target.set(0, 0, 0);
      camera.position.set(0, 36, 56);
    } else if (mode === 'top_down') {
      controls.target.set(0, 0, 0);
      camera.position.set(0, 85, 0.1);
    } else if (mode === 'earth_view') {
      controls.target.set(selectedAsteroidRef.current ? (asteroidMeshesRef.current.get(selectedAsteroidRef.current.id)?.position.x || 15) : 15, 0, 0);
      camera.position.set(0, 4.2, 0);
    } else if (mode === 'target_lock' && selectedAsteroidRef.current) {
      focusCameraOnAsteroid(selectedAsteroidRef.current);
      return;
    }
    controls.update();
  }, [focusCameraOnAsteroid]);

  // Memoized kinetic impact & human translation calculations
  const impactDamage = useMemo(() => selectedAsteroid ? calculateImpactPhysics(selectedAsteroid) : null, [selectedAsteroid]);
  const humanSize = useMemo(() => selectedAsteroid ? getHumanSizeComparison(selectedAsteroid.estimatedDiameterMeters.max) : null, [selectedAsteroid]);
  const humanDist = useMemo(() => selectedAsteroid ? getHumanDistanceExplanation(selectedAsteroid.missDistanceLunarDistances, selectedAsteroid.missDistanceKm) : null, [selectedAsteroid]);
  const humanSpeed = useMemo(() => selectedAsteroid ? getHumanSpeedExplanation(selectedAsteroid.velocityKmS) : null, [selectedAsteroid]);

  // Fetch live NASA NeoWs data on mount
  const loadNeoData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetchNasaLiveNeos();
      setNeos(res.neos);
      setDataSource(res.source);
      setSelectedAsteroid((prev) => {
        if (prev && res.neos.some(n => n.id === prev.id)) {
          return prev;
        }
        return res.neos[0] || prev;
      });
      const now = new Date();
      setLastSyncTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    } catch (e) {
      console.warn('Failed to load NEO data:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNeoData();
  }, [loadNeoData]);

  // Memoized filtered & sorted asteroid list
  const filteredAsteroids = useMemo(() => {
    return (neos || []).filter(neo => {
      if (!neo) return false;
      if (filterHazardousOnly && !neo.isHazardous) return false;
      if (searchQuery && searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const name = (neo.name || '').toLowerCase();
        const desig = (neo.designation || '').toLowerCase();
        if (!name.includes(q) && !desig.includes(q)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'distance') return a.missDistanceLunarDistances - b.missDistanceLunarDistances;
      if (sortBy === 'size') return b.estimatedDiameterMeters.max - a.estimatedDiameterMeters.max;
      if (sortBy === 'velocity') return b.velocityKmS - a.velocityKmS;
      return 0;
    });
  }, [neos, filterHazardousOnly, searchQuery, sortBy]);

  // Comprehensive 3D Orbit Radar Fleet (Populates up to 72 active contacts across defense zones)
  const radarNeos = useMemo(() => {
    if (!neos || neos.length === 0) return [];

    const selectedId = selectedAsteroid?.id;

    // If user filtered or searched, prioritize matched asteroids
    if ((searchQuery && searchQuery.trim()) || filterHazardousOnly) {
      const matched = filteredAsteroids.slice(0, 72);
      if (selectedAsteroid && !matched.some(m => m.id === selectedId)) {
        return [selectedAsteroid, ...matched].slice(0, 72);
      }
      return matched;
    }

    // Active Planetary Defense Radar Fleet (72 active near-Earth objects):
    // 1. Currently focused target
    const selectedList = selectedAsteroid ? [selectedAsteroid] : [];

    // 2. High priority hazardous PHAs (Apophis, Bennu, etc.)
    const hazardous = neos
      .filter(n => n.isHazardous && n.id !== selectedId)
      .slice(0, 24);

    // 3. Closest flybys by Lunar Distance
    const closest = neos
      .filter(n => !n.isHazardous && n.id !== selectedId)
      .sort((a, b) => a.missDistanceLunarDistances - b.missDistanceLunarDistances)
      .slice(0, 48);

    // Merge unique objects
    const pool = [...selectedList, ...hazardous, ...closest];
    const uniqueMap = new Map<string, NeoObject>();
    pool.forEach(item => {
      if (item && !uniqueMap.has(item.id)) {
        uniqueMap.set(item.id, item);
      }
    });

    return Array.from(uniqueMap.values());
  }, [neos, selectedAsteroid, filteredAsteroids, searchQuery, filterHazardousOnly]);

  const radarNeosRef = useRef<NeoObject[]>(radarNeos);
  useEffect(() => {
    radarNeosRef.current = radarNeos;
  }, [radarNeos]);

  // Three.js Scene Setup (Initialized ONCE for extreme 60fps performance)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 42, 64);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setClearColor(0x020617, 1);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 8;
    controls.maxDistance = 200;
    controlsRef.current = controls;

    // Rich Multi-Light Setup
    const ambLight = new THREE.AmbientLight(0xa5b4fc, 1.1);
    scene.add(ambLight);

    const hemiLight = new THREE.HemisphereLight(0xe0f2fe, 0x0f172a, 0.95);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff7ed, 2.5);
    sunLight.position.set(60, 45, 60);
    scene.add(sunLight);

    const camLight = new THREE.DirectionalLight(0xffffff, 0.9);
    camera.add(camLight);
    scene.add(camera);

    // Starfield
    const starCount = 3000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 900;
      starPos[i + 1] = (Math.random() - 0.5) * 900;
      starPos[i + 2] = (Math.random() - 0.5) * 900;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      size: 1.8,
      map: createGlowParticleTexture(),
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    scene.add(new THREE.Points(starGeo, starMat));

    // Earth at Center Anchor
    const earthGeo = new THREE.SphereGeometry(3.6, 48, 48);
    const earthMat = new THREE.MeshStandardMaterial({
      map: createRealisticPlanetTexture('earth'),
      roughness: 0.45,
      metalness: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earthMesh);

    // Dynamic Earth Clouds Shell
    const cloudGeo = new THREE.SphereGeometry(3.68, 48, 48);
    const cloudMat = new THREE.MeshStandardMaterial({
      map: createEarthCloudsTexture(),
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    scene.add(cloudMesh);
    cloudsMeshRef.current = cloudMesh;

    // Atmospheric Glow Rim
    const atmoGeo = new THREE.SphereGeometry(3.9, 36, 36);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(atmoGeo, atmoMat));

    // Geostationary Satellites Ring
    const geoRingRadius = 6.6;
    const geoRingGeo = new THREE.RingGeometry(geoRingRadius - 0.08, geoRingRadius + 0.08, 64);
    const geoRingMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    const geoRing = new THREE.Mesh(geoRingGeo, geoRingMat);
    geoRing.rotation.x = Math.PI / 2;
    scene.add(geoRing);

    // Orbiting Satellites
    const satellitesGroup = new THREE.Group();
    for (let s = 0; s < 6; s++) {
      const satAngle = (s / 6) * Math.PI * 2;
      const satMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.14, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      satMesh.position.set(geoRingRadius * Math.cos(satAngle), 0, geoRingRadius * Math.sin(satAngle));
      satellitesGroup.add(satMesh);
    }
    scene.add(satellitesGroup);
    satellitesGroupRef.current = satellitesGroup;

    // Moon Orbit and Mesh
    const moonOrbitRadius = 15;
    const moonGeo = new THREE.SphereGeometry(0.98, 24, 24);
    const moonMat = new THREE.MeshStandardMaterial({
      map: createRealisticPlanetTexture('moon'),
      roughness: 0.9,
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    scene.add(moonMesh);

    // Lunar Orbit Track Ring (1 LD)
    const moonOrbitGeo = new THREE.RingGeometry(moonOrbitRadius - 0.09, moonOrbitRadius + 0.09, 96);
    const moonOrbitMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8, side: THREE.DoubleSide, transparent: true, opacity: 0.65 });
    const moonOrbitLine = new THREE.Mesh(moonOrbitGeo, moonOrbitMat);
    moonOrbitLine.rotation.x = Math.PI / 2;
    scene.add(moonOrbitLine);

    // 5 LD and 10 LD Defense Range Circles
    const rings = [
      { radius: 26, color: 0xf59e0b, opacity: 0.45 },
      { radius: 42, color: 0x6366f1, opacity: 0.35 }
    ];
    rings.forEach(({ radius, color, opacity }) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.06, radius + 0.06, 96);
      const ringMat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      scene.add(ringMesh);
    });

    // Holographic Reticle for Selected Asteroid
    const reticleGeo = new THREE.RingGeometry(0.7, 0.85, 32);
    const reticleMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    const reticleMesh = new THREE.Mesh(reticleGeo, reticleMat);
    reticleMesh.visible = false;
    scene.add(reticleMesh);
    reticleMeshRef.current = reticleMesh;

    // Laser Distance Line (Earth to selected asteroid)
    const laserMat = new THREE.LineDashedMaterial({
      color: 0x38bdf8,
      dashSize: 0.8,
      gapSize: 0.4,
      transparent: true,
      opacity: 0.8,
      linewidth: 2,
    });
    const laserGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]);
    const distanceLaser = new THREE.Line(laserGeo, laserMat);
    distanceLaser.computeLineDistances();
    scene.add(distanceLaser);
    distanceLaserRef.current = distanceLaser;

    // Master Asteroid Group
    const asteroidGroup = new THREE.Group();
    scene.add(asteroidGroup);
    asteroidGroupRef.current = asteroidGroup;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      }
    });
    resizeObserver.observe(container);

    // 3D Direct Hover and Click Raycasting
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const meshes: THREE.Object3D[] = Array.from(asteroidMeshesRef.current.values());
      const intersects = raycaster.intersectObjects(meshes, true);

      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.name && hitObj.parent) {
          hitObj = hitObj.parent;
        }
        const hitId = hitObj?.name;
        const hitNeo = radarNeosRef.current.find(n => n.id === hitId);
        if (hitNeo) {
          container.style.cursor = 'pointer';
          setHoveredAsteroid(hitNeo);
          return;
        }
      }
      container.style.cursor = 'grab';
      setHoveredAsteroid(null);
    };

    const handlePointerDown = (e: MouseEvent) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist > 6) return;

      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const meshes: THREE.Object3D[] = Array.from(asteroidMeshesRef.current.values());
      const intersects = raycaster.intersectObjects(meshes, true);

      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.name && hitObj.parent) {
          hitObj = hitObj.parent;
        }
        const hitId = hitObj?.name;
        const hitNeo = radarNeosRef.current.find(n => n.id === hitId);
        if (hitNeo) {
          audioEngine.playLaserTone();
          setSelectedAsteroid(hitNeo);
        }
      }
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointerup', handlePointerUp);

    let animId: number;
    let t = 0;

    // Ultra-smooth 60 FPS Render Loop (Zero React overhead)
    const vProject = new THREE.Vector3();
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isSimPausedRef.current) {
        t += 0.015;

        // Rotate Earth & Atmosphere
        earthMesh.rotation.y += 0.003;
        if (cloudsMeshRef.current) {
          cloudsMeshRef.current.rotation.y += 0.0042;
        }

        // Orbit Moon
        moonMesh.position.set(
          moonOrbitRadius * Math.cos(t * 0.25),
          0,
          moonOrbitRadius * Math.sin(t * 0.25)
        );

        // Rotate Satellites in Geostationary belt
        if (satellitesGroupRef.current) {
          satellitesGroupRef.current.rotation.y = t * 0.6;
        }

        // Rotate asteroids
        asteroidMeshesRef.current.forEach((mesh) => {
          mesh.rotation.x += 0.012;
          mesh.rotation.y += 0.009;
        });
      }

      // Update reticle orientation
      if (reticleMeshRef.current && reticleMeshRef.current.visible) {
        reticleMeshRef.current.lookAt(camera.position);
      }

      // Update Earth HUD Indicator Pin at (0, 4.0, 0)
      if (earthHudRef.current && container) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        const halfW = width * 0.5;
        const halfH = height * 0.5;

        vProject.set(0, 4.0, 0);
        vProject.project(camera);
        if (vProject.z <= 1) {
          const x = vProject.x * halfW + halfW;
          const y = -vProject.y * halfH + halfH;
          earthHudRef.current.style.display = 'block';
          earthHudRef.current.style.transform = `translate3d(${x}px, ${y}px, 0px) translate(-50%, -100%)`;
        } else {
          earthHudRef.current.style.display = 'none';
        }
      }

      // Direct DOM Update of Floating HUD Tags at 60 FPS (Bypasses React completely)
      if (container) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        const halfW = width * 0.5;
        const halfH = height * 0.5;
        const mode = hudLabelModeRef.current;

        asteroidMeshesRef.current.forEach((mesh, id) => {
          const el = hudElementsRef.current.get(id);
          if (!el) return;

          if (mode === 'off') {
            el.style.display = 'none';
            return;
          }

          const isSel = selectedAsteroidRef.current?.id === id;
          const isHov = hoveredAsteroidRef.current?.id === id;

          let shouldShow = false;
          if (isSel || isHov) {
            shouldShow = true;
          } else if (mode === 'threats') {
            const neo = radarNeosRef.current.find(n => n.id === id);
            shouldShow = neo?.isHazardous ?? false;
          } else if (mode === 'all') {
            shouldShow = true;
          }

          if (!shouldShow) {
            el.style.display = 'none';
            return;
          }

          mesh.getWorldPosition(vProject);
          vProject.project(camera);

          const isBehind = vProject.z > 1;
          if (isBehind) {
            el.style.display = 'none';
            return;
          }

          const x = vProject.x * halfW + halfW;
          const y = -vProject.y * halfH + halfH;

          if (x < 10 || x > width - 20 || y < 60 || y > height - 60) {
            el.style.display = 'none';
            return;
          }

          el.style.display = 'block';
          el.style.transform = `translate3d(${x}px, ${y}px, 0px) translate(-50%, -100%)`;
        });
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointerup', handlePointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []); // Run ONLY once

  // Rebuild 3D Asteroid Meshes when `radarNeos` updates
  useEffect(() => {
    const group = asteroidGroupRef.current;
    if (!group) return;

    while (group.children.length > 0) {
      const child = group.children[0];
      group.remove(child);
    }
    asteroidMeshesRef.current.clear();
    trajectoryBeamsRef.current.clear();

    const sharedHazardMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0x991b1b,
      emissiveIntensity: 0.45,
      roughness: 0.65,
      metalness: 0.3,
      flatShading: true,
    });

    const sharedSafeMat = new THREE.MeshStandardMaterial({
      color: 0xcbd5e1,
      emissive: 0x0f172a,
      emissiveIntensity: 0.15,
      roughness: 0.65,
      metalness: 0.3,
      flatShading: true,
    });

    const baseGeo = new THREE.DodecahedronGeometry(1, 1);

    radarNeos.forEach((neo, idx) => {
      const missLD = neo.missDistanceLunarDistances || 1;

      // Realistic radial distance mapping corresponding to radar defense rings:
      // - Moon orbit ring = 14 units (1 LD)
      // - Geostationary satellite ring = 6.6 units (~0.1 LD)
      // - 5 LD Amber Defense Ring = 26 units
      // - 10 LD Purple Outer Boundary = 40 units
      let distUnits: number;
      if (missLD <= 1.0) {
        distUnits = 7.2 + Math.max(0, missLD) * 6.2;
      } else if (missLD <= 5.0) {
        distUnits = 14.0 + ((missLD - 1.0) / 4.0) * 11.5;
      } else if (missLD <= 15.0) {
        distUnits = 26.0 + ((missLD - 5.0) / 10.0) * 13.5;
      } else {
        distUnits = 40.0 + Math.min(7.5, Math.log10(Math.max(1, missLD - 14.0)) * 4.5);
      }

      // Golden angle distribution (2.39996 rad) ensures natural, non-overlapping 360-degree dispersal around Earth
      const angle = (idx * 2.39996322972865332) + 0.45;
      const x = distUnits * Math.cos(angle);
      const y = Math.sin(idx * 2.7) * (1.1 + Math.min(2.2, distUnits * 0.04));
      const z = distUnits * Math.sin(angle);

      // Realistic Keplerian Hyperbolic Flyby Trajectory
      const normX = x / distUnits;
      const normZ = z / distUnits;
      const perpX = -normZ;
      const perpZ = normX;

      const arcPoints: THREE.Vector3[] = [];
      const span = 24;
      for (let s = -span; s <= span; s++) {
        const factor = s / span; // -1 to +1
        const alongTangent = factor * (distUnits * 1.5 + 24);
        const gravityBend = (factor * factor) * (distUnits * 0.35 + 5.0);
        arcPoints.push(
          new THREE.Vector3(
            x + perpX * alongTangent + normX * gravityBend,
            y + factor * (y * 0.35) - (factor * factor) * 1.0,
            z + perpZ * alongTangent + normZ * gravityBend
          )
        );
      }

      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
      const arcMat = new THREE.LineBasicMaterial({
        color: neo.isHazardous ? 0xf43f5e : 0x06b6d4,
        transparent: true,
        opacity: neo.isHazardous ? 0.75 : 0.45,
      });
      const trajectoryLine = new THREE.Line(arcGeo, arcMat);
      trajectoryLine.name = `traj_${neo.id}`;
      group.add(trajectoryLine);
      trajectoryBeamsRef.current.set(neo.id, trajectoryLine);

      // Scaled asteroid rock: proportional and subordinate to Earth (Earth radius = 3.6)
      // Radius between 0.18 and 0.44 units (Earth is 8x to 20x larger than any asteroid!)
      const diam = neo.estimatedDiameterMeters?.max || 100;
      const r = Math.max(0.18, Math.min(0.44, 0.18 + (Math.log10(Math.max(15, diam)) - 1.3) * 0.12));
      const aMesh = new THREE.Mesh(baseGeo, neo.isHazardous ? sharedHazardMat : sharedSafeMat);
      aMesh.scale.setScalar(r);
      aMesh.position.set(x, y, z);
      aMesh.name = neo.id;

      // Click & hover hit-proxy (makes clicking small asteroids easy and reliable)
      const hitProxyGeo = new THREE.SphereGeometry(1.0, 8, 8);
      const hitProxyMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitProxy = new THREE.Mesh(hitProxyGeo, hitProxyMat);
      hitProxy.name = neo.id;
      aMesh.add(hitProxy);

      // Subtle luminous radar marker halo
      const beaconGeo = new THREE.RingGeometry(r * 1.3, r * 1.55, 16);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: neo.isHazardous ? 0xf43f5e : 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: neo.isHazardous ? 0.6 : 0.35,
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.rotation.x = Math.PI / 2;
      aMesh.add(beacon);

      group.add(aMesh);
      asteroidMeshesRef.current.set(neo.id, aMesh);
    });
  }, [radarNeos]);

  // Synchronize Trajectory Visibility and Highlighting based on trajectoryMode and selectedAsteroid
  useEffect(() => {
    trajectoryBeamsRef.current.forEach((line, neoId) => {
      const isSelected = selectedAsteroid?.id === neoId;
      const neo = radarNeos.find(n => n.id === neoId);
      const isHazardous = neo?.isHazardous ?? false;

      let visible = false;
      let opacity = 0.3;

      if (trajectoryMode === 'none') {
        visible = false;
      } else if (trajectoryMode === 'selected') {
        visible = isSelected;
        opacity = 0.9;
      } else if (trajectoryMode === 'hazardous') {
        visible = isHazardous || isSelected;
        opacity = isSelected ? 0.95 : 0.65;
      } else if (trajectoryMode === 'all') {
        visible = true;
        opacity = isSelected ? 0.95 : (isHazardous ? 0.55 : 0.25);
      }

      line.visible = visible;
      const mat = line.material as THREE.LineBasicMaterial;
      if (mat) {
        mat.opacity = opacity;
        if (isSelected) {
          mat.color.setHex(isHazardous ? 0xff2a55 : 0x38bdf8);
        } else {
          mat.color.setHex(isHazardous ? 0xf43f5e : 0x06b6d4);
        }
      }
    });
  }, [trajectoryMode, selectedAsteroid, radarNeos]);

  // Update target reticle and distance tether when selected asteroid changes
  useEffect(() => {
    if (!selectedAsteroid) return;
    const mesh = asteroidMeshesRef.current.get(selectedAsteroid.id);
    if (mesh && reticleMeshRef.current) {
      reticleMeshRef.current.position.copy(mesh.position);
      reticleMeshRef.current.visible = true;
      const aMeshScale = mesh.scale.x || 0.28;
      reticleMeshRef.current.scale.setScalar(aMeshScale * 2.8);
      const mat = reticleMeshRef.current.material as any;
      if (mat && mat.color) {
        mat.color.setHex(selectedAsteroid.isHazardous ? 0xf43f5e : 0x38bdf8);
      }
    }

    if (mesh && distanceLaserRef.current) {
      const pos = mesh.position;
      const positions = new Float32Array([0, 0, 0, pos.x, pos.y, pos.z]);
      distanceLaserRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      distanceLaserRef.current.computeLineDistances();
      const laserMat = distanceLaserRef.current.material as any;
      if (laserMat && laserMat.color) {
        laserMat.color.setHex(selectedAsteroid.isHazardous ? 0xf43f5e : 0x38bdf8);
      }
    }
  }, [selectedAsteroid, radarNeos]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#020617] flex flex-col md:flex-row">
      {/* 3D Radar Viewport */}
      <div className="relative flex-1 h-full">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* High-Performance 3D Billboard Screen Tags (Target Focus by Default - Ultra Clean) */}
        {hudLabelMode !== 'off' && (
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            {radarNeos.map((neo) => {
              const isSel = selectedAsteroid?.id === neo.id;
              const isHaz = neo.isHazardous;
              const sizeInfo = getHumanSizeComparison(neo.estimatedDiameterMeters.max);

              return (
                <div
                  key={neo.id}
                  ref={(el) => {
                    if (el) {
                      hudElementsRef.current.set(neo.id, el);
                    } else {
                      hudElementsRef.current.delete(neo.id);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'none',
                    willChange: 'transform',
                  }}
                  className={`pointer-events-auto cursor-pointer transition-transform duration-75 ${
                    isSel ? 'scale-105 z-30' : 'hover:scale-105 z-20 opacity-90 hover:opacity-100'
                  }`}
                  onClick={() => {
                    audioEngine.playLaserTone();
                    setSelectedAsteroid(neo);
                    focusCameraOnAsteroid(neo);
                  }}
                >
                  {isSel ? (
                    /* Focused Target Lock Card */
                    <div className={`p-2 rounded-xl backdrop-blur-xl border shadow-xl flex items-center gap-2 whitespace-nowrap ${
                      isHaz
                        ? 'bg-red-950/90 border-red-400 text-white ring-2 ring-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                        : 'bg-cyan-950/90 border-cyan-400 text-white ring-2 ring-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                    }`}>
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                        isHaz ? 'bg-red-500/30 text-red-300' : 'bg-cyan-500/30 text-cyan-300'
                      }`}>
                        {sizeInfo.icon}
                      </div>

                      <div className="text-left font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-bold tracking-tight text-white">{neo.name}</span>
                          {isHaz && (
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-300">
                          <span>{neo.estimatedDiameterMeters.max}m</span>
                          <span>•</span>
                          <span className="text-cyan-300 font-semibold">{neo.missDistanceLunarDistances.toFixed(1)} LD</span>
                        </div>
                      </div>

                      <Target className="w-3.5 h-3.5 text-cyan-400 animate-pulse ml-0.5" />
                    </div>
                  ) : (
                    /* Compact Micro-Tag for Secondary Contacts */
                    <div className={`px-2 py-0.5 rounded-full backdrop-blur-md border text-[10px] font-mono flex items-center gap-1.5 shadow-lg whitespace-nowrap ${
                      isHaz 
                        ? 'bg-red-950/85 border-red-500/50 text-red-200 shadow-red-950/50' 
                        : 'bg-slate-950/85 border-white/20 text-slate-200 hover:border-cyan-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isHaz ? 'bg-red-400 animate-ping' : 'bg-cyan-400'}`} />
                      <span className="font-semibold">{neo.name}</span>
                      <span className="text-[9px] text-slate-400">{neo.missDistanceLunarDistances.toFixed(1)} LD</span>
                    </div>
                  )}
                  
                  {/* Stem Pin pointing directly to 3D object */}
                  <div className="w-0.5 h-2.5 bg-gradient-to-b from-cyan-400/80 to-transparent mx-auto opacity-75" />
                </div>
              );
            })}

            {/* Earth Center Planet Marker */}
            <div
              ref={earthHudRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'none',
                willChange: 'transform',
              }}
              className="pointer-events-none z-10"
            >
              <div className="px-2.5 py-0.5 rounded-full bg-blue-950/80 backdrop-blur-md border border-cyan-400/50 text-cyan-200 text-[10px] font-mono flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-bold tracking-wider">EARTH</span>
                <span className="text-cyan-400/60 font-semibold">• 6,371 km</span>
              </div>
              <div className="w-0.5 h-2.5 bg-gradient-to-b from-cyan-400 to-transparent mx-auto opacity-80" />
            </div>
          </div>
        )}

        {/* Top Radar Legend & Quick Controls Overlay */}
        <div className="absolute top-20 sm:top-20 md:top-20 left-3 sm:left-6 z-20 flex flex-col gap-2 pointer-events-none max-w-[94vw]">
          {/* Main Defense Badge */}
          <div className="pointer-events-auto flex flex-wrap items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#020617]/90 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 ring-1 ring-white/5">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border shrink-0 ${
              dataSource === 'live_nasa' 
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                : 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
            }`}>
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                  Planetary Defense Radar
                </h2>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border flex items-center gap-1 ${
                  dataSource === 'live_nasa'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {dataSource === 'live_nasa' ? 'NASA JPL LIVE' : 'NASA CNEOS ARCHIVE'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono mt-0.5 flex-wrap">
                <span className="flex items-center gap-1 text-cyan-300 font-semibold">
                  <span>Radar Fleet: {radarNeos.length}</span>
                </span>
                <span className="flex items-center gap-1 text-red-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Hazardous ({neos.filter(n => n.isHazardous).length})
                </span>
                <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Safe Track ({neos.filter(n => !n.isHazardous).length})
                </span>
                <span className="text-slate-400 text-[9px] hidden sm:inline">
                  Synced: {lastSyncTime}
                </span>
              </div>
            </div>

            {/* Viewport Action Buttons */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-white/10 flex-wrap">
              {/* Camera Perspective Presets */}
              <button
                onClick={() => setCameraMode('overview')}
                className={`px-2.5 py-1.5 rounded-xl border text-[10px] font-mono transition-all flex items-center gap-1 cursor-pointer ${
                  cameraPerspective === 'overview'
                    ? 'bg-cyan-500/25 border-cyan-400/60 text-white font-bold'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="Tactical 3D Defense Angle"
              >
                <Compass className="w-3 h-3" />
                <span className="hidden lg:inline">Tactical 3D</span>
              </button>

              <button
                onClick={() => setCameraMode('top_down')}
                className={`px-2.5 py-1.5 rounded-xl border text-[10px] font-mono transition-all flex items-center gap-1 cursor-pointer ${
                  cameraPerspective === 'top_down'
                    ? 'bg-cyan-500/25 border-cyan-400/60 text-white font-bold'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="Top-Down Orbital Radar Disc"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden lg:inline">Top-Down</span>
              </button>

              <button
                onClick={() => focusCameraOnAsteroid(selectedAsteroid)}
                className={`px-2.5 py-1.5 rounded-xl border text-[10px] font-mono transition-all flex items-center gap-1 cursor-pointer ${
                  cameraPerspective === 'target_lock'
                    ? 'bg-purple-500/25 border-purple-400/60 text-white font-bold'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title={`Lock camera onto ${selectedAsteroid.name}`}
              >
                <Target className="w-3 h-3 text-purple-300" />
                <span className="hidden lg:inline">Lock Target</span>
              </button>

              {/* Trajectory Display Filter Mode Selector */}
              <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-xl border border-white/10">
                <span className="text-[9px] font-mono text-slate-400 pl-1.5 pr-0.5 flex items-center gap-1 font-semibold">
                  <GitBranch className="w-3 h-3 text-cyan-400" />
                  <span className="hidden xl:inline">Vectors:</span>
                </span>
                {(
                  [
                    { id: 'selected', label: 'Selected', title: 'Show trajectory of focused target only' },
                    { id: 'hazardous', label: 'Hazardous', title: 'Show trajectories of hazardous asteroids' },
                    { id: 'all', label: 'All', title: 'Show all asteroid trajectories' },
                    { id: 'none', label: 'Off', title: 'Hide all trajectory lines' },
                  ] as const
                ).map((m) => {
                  const isActive = trajectoryMode === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => {
                        audioEngine.playClickSound(800);
                        setTrajectoryMode(m.id);
                      }}
                      className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 font-bold shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                      title={m.title}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>

              {/* Label Density Selector: Target / Threats / All / Off */}
              <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-xl border border-white/10">
                <span className="text-[9px] font-mono text-slate-400 pl-1.5 pr-0.5 flex items-center gap-1 font-semibold">
                  <Layers className="w-3 h-3 text-cyan-400" />
                  <span className="hidden xl:inline">Labels:</span>
                </span>
                {(
                  [
                    { id: 'target_only', label: 'Target', title: 'Show label for focused target only (Clean)' },
                    { id: 'threats', label: 'Threats', title: 'Show labels for hazardous asteroids' },
                    { id: 'all', label: 'All', title: 'Show labels for all radar contacts' },
                    { id: 'off', label: 'Off', title: 'Hide all label cards' },
                  ] as const
                ).map((mode) => {
                  const isActive = hudLabelMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => {
                        audioEngine.playClickSound(900);
                        setHudLabelMode(mode.id);
                      }}
                      className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 font-bold shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                      title={mode.title}
                    >
                      {mode.label}
                    </button>
                  );
                })}
              </div>

              {/* Pause/Play simulation */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setIsSimPaused(!isSimPaused);
                }}
                className={`p-1.5 rounded-xl border text-[11px] font-mono transition-all cursor-pointer ${
                  isSimPaused 
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
                title={isSimPaused ? 'Resume simulation' : 'Pause simulation'}
              >
                {isSimPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              {/* Refresh Live NASA Button */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  loadNeoData();
                }}
                disabled={isLoading}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all disabled:opacity-50 cursor-pointer"
                title="Sync live data from NASA JPL NeoWs API"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Orbit References Legend Tag */}
        <div className="absolute bottom-6 left-3 sm:left-6 z-20 flex flex-col gap-1.5 px-3.5 py-2.5 rounded-2xl bg-[#020617]/90 backdrop-blur-xl border border-white/15 text-[10px] font-mono shadow-2xl ring-1 ring-white/5">
          <div className="flex items-center justify-between border-b border-white/10 pb-1">
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
              Radar Range Key
            </span>
            <span className="text-[9px] text-cyan-400 font-semibold uppercase">
              {radarNeos.length} Contacts Active
            </span>
          </div>
          <div className="flex items-center gap-2 text-blue-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Earth & Atmosphere (Center • 6,371 km)</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Cyan Ring = Satellites (35,786 km)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span>Gray Ring = Moon Orbit (1 LD • 384,400 km)</span>
          </div>
          <div className="flex items-center gap-2 text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Amber Ring = 5 Lunar Distances Zone</span>
          </div>
          <div className="flex items-center gap-2 text-rose-400 pt-0.5 border-t border-white/5">
            <span className="w-2 h-0.5 bg-rose-500 rounded" />
            <span>Red Arc = Hyperbolic Hazard Trajectory</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="w-2 h-0.5 bg-cyan-400 rounded" />
            <span>Cyan Arc = Safe Flyby Vector</span>
          </div>
        </div>

        {/* Re-Open Sidebar Trigger Button when collapsed */}
        {isSidebarCollapsed && (
          <button
            onClick={() => {
              audioEngine.playClickSound();
              setIsSidebarCollapsed(false);
            }}
            className="pointer-events-auto absolute top-20 sm:top-20 md:top-20 right-4 sm:right-6 z-20 px-3.5 py-2 rounded-2xl bg-[#020617]/90 backdrop-blur-2xl border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-500/20 text-xs font-mono shadow-2xl transition-all flex items-center gap-2 animate-in fade-in cursor-pointer"
            title="Open Sentry Asteroid Threat Matrix"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Open Sentry Matrix</span>
          </button>
        )}
      </div>

      {/* Right Telemetry & Asteroid Dossier Panel */}
      {!isSidebarCollapsed && (
        <div className="w-full md:w-[440px] lg:w-[480px] h-full z-20 bg-[#020617]/95 md:bg-[#020617]/90 backdrop-blur-2xl border-l border-white/10 pt-20 sm:pt-20 md:pt-20 pb-10 px-5 sm:px-6 flex flex-col overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-200 custom-scrollbar">
          
          {/* Header with Search & Collapse Button */}
          <div className="pb-4 border-b border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-cyan-400" />
                <h1 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase font-mono">
                  Sentry Threat Matrix
                </h1>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                  {filteredAsteroids.length} Targets
                </span>
                <button
                  onClick={() => {
                    audioEngine.playClickSound();
                    setIsSidebarCollapsed(true);
                  }}
                  className="p-1 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Collapse panel for full-screen 3D radar"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search bar */}
            <input
              type="text"
              placeholder="Search asteroid designation or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />

            {/* Filter and Sort Deck */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setFilterHazardousOnly(!filterHazardousOnly);
                }}
                className={`py-1.5 px-2 rounded-xl text-[11px] font-mono transition-all flex items-center justify-center gap-1.5 border cursor-pointer ${
                  filterHazardousOnly
                    ? 'bg-red-500/20 border-red-500/50 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] font-bold'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <AlertTriangle className="w-3 h-3" />
                <span>{filterHazardousOnly ? 'Hazardous Only' : 'All Objects'}</span>
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-1.5 px-2 rounded-xl text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
              >
                <option value="distance" className="bg-slate-900 text-white">Sort: Closest Flyby</option>
                <option value="size" className="bg-slate-900 text-white">Sort: Largest Size</option>
                <option value="velocity" className="bg-slate-900 text-white">Sort: Fastest Velocity</option>
              </select>
            </div>
          </div>

          {/* Selected Asteroid Deep Dossier Header */}
          <div className="py-4 border-b border-white/10 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                  Target Lock // {selectedAsteroid.orbitalGroup} Orbit
                </span>
                <h2 className="text-lg sm:text-xl font-black text-white tracking-wide mt-0.5">
                  {selectedAsteroid.name}
                </h2>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => focusCameraOnAsteroid(selectedAsteroid)}
                  className="px-2.5 py-1 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-[10px] font-mono flex items-center gap-1 transition-all cursor-pointer font-bold"
                  title="Focus 3D camera"
                >
                  <Target className="w-3 h-3" />
                  <span>Lock Cam</span>
                </button>
                <span
                  className={`px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold border ${
                    selectedAsteroid.isHazardous
                      ? 'bg-red-500/20 text-red-300 border-red-500/40 animate-pulse'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  }`}
                >
                  {selectedAsteroid.isHazardous ? '⚠️ HAZARDOUS' : '✅ SAFE PASSAGE'}
                </span>
              </div>
            </div>

            {/* Sub-Tabs: Plain English vs Telemetry vs Kinetic Impact Physics */}
            <div className="flex border-b border-white/10 bg-slate-900/60 p-1 rounded-xl gap-1">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setActiveTab('plain_english');
                }}
                className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === 'plain_english'
                    ? 'bg-gradient-to-r from-cyan-500/30 to-purple-600/30 text-white font-bold border border-cyan-400/50 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <HelpCircle className="w-3 h-3 text-cyan-300" />
                <span>Plain English</span>
              </button>

              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setActiveTab('telemetry');
                }}
                className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === 'telemetry'
                    ? 'bg-white/10 text-white font-bold border border-white/15 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3 h-3 text-indigo-300" />
                <span>Telemetry</span>
              </button>

              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setActiveTab('impact_physics');
                }}
                className={`flex-1 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  activeTab === 'impact_physics'
                    ? 'bg-red-500/20 text-red-300 font-bold border border-red-500/40 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-3 h-3 text-red-400" />
                <span>Impact Yield</span>
              </button>
            </div>

            {/* TAB 1: PLAIN ENGLISH HUMAN TRANSLATION */}
            {activeTab === 'plain_english' && humanSize && humanDist && humanSpeed && (
              <div className="space-y-3 animate-in fade-in duration-150">
                {/* 1. Distance & Threat Status Card */}
                <div className={`p-3.5 rounded-2xl border ${humanDist.badgeColor} space-y-1.5`}>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold">
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Distance from Earth</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full border bg-black/40 text-[9px]">{humanDist.badge}</span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {humanDist.description}
                  </p>
                </div>

                {/* 2. Real-World Size Comparison Card */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300">
                    <span className="flex items-center gap-1.5 font-bold uppercase">
                      <span className="text-base">{humanSize.icon}</span>
                      <span>How Big Is It?</span>
                    </span>
                    <span className="text-slate-400">{selectedAsteroid.estimatedDiameterMeters.max} meters wide</span>
                  </div>
                  <p className="text-xs text-white font-medium">
                    {humanSize.metaphor}
                  </p>
                  <p className="text-[11px] text-slate-300 leading-relaxed pt-1 border-t border-white/5">
                    <span className="text-slate-400 font-mono">Atmospheric Impact: </span>
                    {humanSize.atmosphericEffect}
                  </p>
                  
                  {/* Size Scale Bar */}
                  <div className="pt-1 space-y-1">
                    <div className="flex justify-between text-[9px] font-mono text-slate-400">
                      <span>Human (1.8m)</span>
                      <span>Airliner (70m)</span>
                      <span>Eiffel (300m)</span>
                      <span>Monster (1km+)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 transition-all duration-500 rounded-full"
                        style={{ width: `${humanSize.relativePercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Speed In Everyday Terms */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-indigo-300 font-bold uppercase">
                      <Gauge className="w-3.5 h-3.5" />
                      <span>Speed in Everyday Terms</span>
                    </span>
                    <span className="text-cyan-300 font-bold">{selectedAsteroid.velocityKmS.toFixed(1)} km/s</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    {humanSpeed.metaphor} ({humanSpeed.kmh} km/h • {humanSpeed.mach}).
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: TELEMETRY SCIENTIFIC VIEW */}
            {activeTab === 'telemetry' && (
              <div className="space-y-3 animate-in fade-in duration-150">
                {/* Quick Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono text-slate-400 block">EST. DIAMETER</span>
                    <span className="text-sm font-mono font-bold text-white mt-0.5 block">
                      {selectedAsteroid.estimatedDiameterMeters.max.toLocaleString()} m
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">
                      Min: {selectedAsteroid.estimatedDiameterMeters.min}m
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono text-slate-400 block">VELOCITY</span>
                    <span className="text-sm font-mono font-bold text-cyan-400 mt-0.5 block">
                      {selectedAsteroid.velocityKmS.toFixed(2)} km/s
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">
                      {selectedAsteroid.velocityMph.toLocaleString()} mph
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono text-slate-400 block">CLOSEST APPROACH</span>
                    <span className="text-sm font-mono font-bold text-white mt-0.5 block">
                      {selectedAsteroid.missDistanceKm.toLocaleString()} km
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300">
                      ({selectedAsteroid.missDistanceLunarDistances.toFixed(2)} Lunar Dist.)
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-mono text-slate-400 block">ORBITAL GROUP</span>
                    <span className="text-sm font-mono font-bold text-amber-400 mt-0.5 block">
                      {selectedAsteroid.orbitalGroup}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Torino: {selectedAsteroid.torinoScale}
                    </span>
                  </div>
                </div>

                {/* Risk Analysis Card */}
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-1.5">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <Info className="w-3.5 h-3.5" />
                    <span>NASA Threat Assessment</span>
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedAsteroid.riskAnalysis}
                  </p>
                </div>

                {/* Planetary Defense Mitigation */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 to-slate-900/60 border border-purple-500/20 space-y-1">
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Mitigation Protocol (DART Class)</span>
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {selectedAsteroid.mitigationStrategy}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: KINETIC IMPACT PHYSICS CALCULATOR */}
            {activeTab === 'impact_physics' && impactDamage && (
              <div className="space-y-3 animate-in fade-in duration-150">
                <div className="p-3.5 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-red-300 uppercase tracking-wider font-bold flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-red-400" />
                      <span>Theoretical Earth Impact Yield</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] bg-red-500/20 text-red-300 border border-red-500/30 font-bold">
                      {impactDamage.isAirburst ? 'HYPERSONIC AIRBURST' : 'SURFACE CRATER'}
                    </span>
                  </div>

                  <p className="text-white font-bold text-sm">
                    {impactDamage.comparison}
                  </p>
                </div>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 font-mono">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-slate-400 block">KINETIC ENERGY</span>
                    <span className="text-sm font-bold text-amber-400 mt-0.5 block">
                      {impactDamage.megatonsTNT < 0.01 
                        ? `${(impactDamage.megatonsTNT * 1000).toFixed(1)} kt TNT` 
                        : `${impactDamage.megatonsTNT.toLocaleString(undefined, { maximumFractionDigits: 1 })} Mt TNT`}
                    </span>
                    <span className="text-[9px] text-slate-500">
                      ~{(impactDamage.megatonsTNT / 0.015).toLocaleString(undefined, { maximumFractionDigits: 0 })}x Hiroshima
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-slate-400 block">CRATER DIAMETER</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">
                      {impactDamage.isAirburst ? 'Airburst' : `${impactDamage.craterDiameterKm.toFixed(2)} km`}
                    </span>
                    <span className="text-[9px] text-slate-500">
                      Depth: ~{(impactDamage.craterDiameterKm * 0.22).toFixed(2)} km
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-slate-400 block">OVERPRESSURE BLAST</span>
                    <span className="text-sm font-bold text-red-400 mt-0.5 block">
                      {impactDamage.blastRadiusKm.toFixed(1)} km radius
                    </span>
                    <span className="text-[9px] text-slate-500">
                      20 PSI total destruction
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-slate-400 block">THERMAL RADIATION</span>
                    <span className="text-sm font-bold text-orange-400 mt-0.5 block">
                      {impactDamage.thermalRadiusKm.toFixed(1)} km radius
                    </span>
                    <span className="text-[9px] text-slate-500">
                      3rd-degree flash burns
                    </span>
                  </div>
                </div>

                {/* Asteroid Mass Estimate */}
                <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/10 text-xs font-mono space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>ESTIMATED MASS</span>
                    <span>{(impactDamage.massKg / 1e9).toFixed(2)} Million Metric Tons</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 via-amber-400 to-red-500" 
                      style={{ width: `${Math.min(100, Math.max(5, selectedAsteroid.extinctionScalePercent * 4))}%` }} 
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Scrollable Targets Queue */}
          <div className="flex-1 pt-4 space-y-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2 font-bold">
              Tracked Asteroid Queue ({filteredAsteroids.length})
            </span>
            <div className="space-y-1.5">
              {filteredAsteroids.map((neo) => {
                const isSelected = selectedAsteroid.id === neo.id;
                const sizeMetaphor = getHumanSizeComparison(neo.estimatedDiameterMeters.max);

                return (
                  <button
                    key={neo.id}
                    onClick={() => {
                      audioEngine.playClickSound(850);
                      setSelectedAsteroid(neo);
                    }}
                    className={`w-full p-3 rounded-2xl text-left transition-all border flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/30'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{sizeMetaphor.icon}</span>
                      <div>
                        <h3 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                          {neo.isHazardous && <AlertTriangle className="w-3 h-3 text-red-400 animate-pulse" />}
                          <span>{neo.name}</span>
                        </h3>
                        <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                          {neo.missDistanceLunarDistances.toFixed(1)} LD • {neo.velocityKmS.toFixed(1)} km/s
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                          neo.isHazardous
                            ? 'bg-red-500/20 text-red-300 border-red-500/30'
                            : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                        }`}
                      >
                        {neo.estimatedDiameterMeters.max}m
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
