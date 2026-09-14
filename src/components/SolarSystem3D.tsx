import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CelestialBody } from '../types';
import { audioEngine } from '../utils/audioEngine';
import { 
  createGlowParticleTexture, 
  createRealisticPlanetTexture, 
  createEarthCloudsTexture, 
  createSaturnRingsTexture 
} from '../utils/planetTextures';
import { getStoredPlanetTextures } from '../utils/supabaseClient';
import { 
  Play, Pause, FastForward, Eye, Orbit, Layers, RotateCcw, X,
  Compass, ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  HelpCircle, EyeOff, Sparkles, Moon, Sun, Disc, Clock, Info,
  Sliders
} from 'lucide-react';

// True astronomical orbital inclinations to the ecliptic plane (in degrees)
const PLANET_ORBITAL_INCLINATIONS_DEG: Record<string, number> = {
  mercury: 7.00,
  venus: 3.39,
  earth: 0.00, // Ecliptic reference plane
  mars: 1.85,
  jupiter: 1.30,
  saturn: 2.49,
  uranus: 0.77,
  neptune: 1.77,
  ceres: 10.59,
  pluto: 17.16,
  haumea: 28.19,
  makemake: 28.96,
  eris: 44.04,
};

// Distributed initial orbital angles around the Sun (in radians)
const PLANET_INITIAL_ANGLES: Record<string, number> = {
  mercury: 0.52,
  venus: 1.94,
  earth: 3.25,
  mars: 4.62,
  jupiter: 0.88,
  saturn: 2.40,
  uranus: 3.91,
  neptune: 5.33,
  ceres: 2.10,
  pluto: 0.40,
  haumea: 3.10,
  makemake: 4.80,
  eris: 1.70,
};

interface MoonOrbitConfig {
  orbitRadiusPresentation: number;
  orbitRadiusRealistic: number;
  inclinationDeg: number;
  initialAngle: number;
  retrograde?: boolean;
}

// True astronomical inclination to parent equatorial plane & scaled orbital radius
const MOON_CONFIGS: Record<string, MoonOrbitConfig> = {
  moon: { orbitRadiusPresentation: 4.8, orbitRadiusRealistic: 2.4, inclinationDeg: 5.14, initialAngle: 1.2 },
  io: { orbitRadiusPresentation: 6.2, orbitRadiusRealistic: 3.2, inclinationDeg: 0.05, initialAngle: 0.8 },
  europa: { orbitRadiusPresentation: 8.4, orbitRadiusRealistic: 4.2, inclinationDeg: 0.47, initialAngle: 2.1 },
  ganymede: { orbitRadiusPresentation: 11.2, orbitRadiusRealistic: 5.5, inclinationDeg: 0.20, initialAngle: 3.9 },
  callisto: { orbitRadiusPresentation: 14.8, orbitRadiusRealistic: 7.0, inclinationDeg: 0.28, initialAngle: 5.4 },
  enceladus: { orbitRadiusPresentation: 5.4, orbitRadiusRealistic: 2.8, inclinationDeg: 0.01, initialAngle: 1.5 },
  titan: { orbitRadiusPresentation: 10.8, orbitRadiusRealistic: 5.6, inclinationDeg: 0.35, initialAngle: 4.2 },
  triton: { orbitRadiusPresentation: 5.4, orbitRadiusRealistic: 3.0, inclinationDeg: 157.0, initialAngle: 2.8, retrograde: true },
  charon: { orbitRadiusPresentation: 3.0, orbitRadiusRealistic: 1.6, inclinationDeg: 119.6, initialAngle: 0.5 },
};

interface SolarSystem3DProps {
  bodies: CelestialBody[];
  selectedBody: CelestialBody | null;
  onSelectBody: (body: CelestialBody | null) => void;
  showLabels: boolean;
  onToggleLabels: () => void;
  showOrbits: boolean;
  onToggleOrbits: () => void;
  scaleMode: 'presentation' | 'realistic';
  onToggleScaleMode: () => void;
  timeScale: number;
  onSetTimeScale: (scale: number) => void;
}

export const SolarSystem3D: React.FC<SolarSystem3DProps> = ({
  bodies,
  selectedBody,
  onSelectBody,
  showLabels,
  onToggleLabels,
  showOrbits,
  onToggleOrbits,
  scaleMode,
  onToggleScaleMode,
  timeScale,
  onSetTimeScale,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const asteroidBeltRef = useRef<THREE.InstancedMesh | null>(null);
  const kuiperBeltRef = useRef<THREE.InstancedMesh | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  // Mesh registries
  const planetMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const orbitLinesGroupRef = useRef<THREE.Group | null>(null);
  const targetingRingRef = useRef<THREE.Group | null>(null);
  const cloudsMeshRef = useRef<THREE.Mesh | null>(null);
  const sunMeshRef = useRef<THREE.Mesh | null>(null);
  const sunCoronaRef = useRef<THREE.Mesh | null>(null);

  // Camera animation interpolation state
  const cameraTransitionRef = useRef<{
    active: boolean;
    targetPosition: THREE.Vector3;
    cameraTargetPosition: THREE.Vector3;
    progress: number;
  }>({
    active: false,
    targetPosition: new THREE.Vector3(0, 0, 0),
    cameraTargetPosition: new THREE.Vector3(0, 40, 120),
    progress: 1,
  });

  // Continuous accumulated simulation time (prevents planet jump upon speed change)
  const simulationTimeRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(performance.now());
  const selectedBodyRef = useRef<CelestialBody | null>(selectedBody);
  selectedBodyRef.current = selectedBody;
  const isTrackingBodyRef = useRef<boolean>(false);

  // Stable refs for props used inside Three.js animation and event callbacks
  const showLabelsRef = useRef<boolean>(showLabels);
  showLabelsRef.current = showLabels;
  const timeScaleRef = useRef<number>(timeScale);
  timeScaleRef.current = timeScale;
  const scaleModeRef = useRef<'presentation' | 'realistic'>(scaleMode);
  scaleModeRef.current = scaleMode;
  const onSelectBodyRef = useRef(onSelectBody);
  onSelectBodyRef.current = onSelectBody;
  const labelElementsRef = useRef<Map<string, HTMLButtonElement>>(new Map());

  // New UI & View State
  const [showBelts, setShowBelts] = useState<boolean>(true);
  const showBeltsRef = useRef<boolean>(true);
  showBeltsRef.current = showBelts;
  const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
  const [catalogFilter, setCatalogFilter] = useState<'all' | 'planets' | 'dwarf_planets' | 'moons' | 'star'>('all');
  const [isZenMode, setIsZenMode] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [showCameraMenu, setShowCameraMenu] = useState<boolean>(false);
  const [simDays, setSimDays] = useState<number>(0);
  const lastClockUpdateRef = useRef<number>(0);

  // Sync belt visibility when toggled
  useEffect(() => {
    if (asteroidBeltRef.current) asteroidBeltRef.current.visible = showBelts;
    if (kuiperBeltRef.current) kuiperBeltRef.current.visible = showBelts;
  }, [showBelts]);

  // Camera preset viewpoints
  const handleCameraPreset = useCallback((preset: 'top' | 'angle' | 'inner' | 'outer' | 'reset') => {
    audioEngine.playClickSound();
    if (selectedBodyRef.current) {
      onSelectBody(null);
    }
    isTrackingBodyRef.current = false;
    const isReal = scaleModeRef.current === 'realistic';
    let targetCamPos: THREE.Vector3;
    let lookTarget = new THREE.Vector3(0, 0, 0);

    if (preset === 'top') {
      targetCamPos = new THREE.Vector3(0, isReal ? 950 : 340, 0.01);
    } else if (preset === 'angle') {
      targetCamPos = new THREE.Vector3(0, isReal ? 260 : 75, isReal ? 680 : 185);
    } else if (preset === 'inner') {
      targetCamPos = new THREE.Vector3(0, isReal ? 65 : 28, isReal ? 135 : 62);
    } else if (preset === 'outer') {
      targetCamPos = new THREE.Vector3(0, isReal ? 450 : 140, isReal ? 1100 : 360);
    } else {
      targetCamPos = new THREE.Vector3(0, isReal ? 260 : 75, isReal ? 680 : 185);
    }

    cameraTransitionRef.current = {
      active: true,
      targetPosition: lookTarget,
      cameraTargetPosition: targetCamPos,
      progress: 0,
    };
    setShowCameraMenu(false);
  }, [onSelectBody]);

  // Cycle previous / next celestial body
  const handleCycleBody = useCallback((dir: 1 | -1) => {
    audioEngine.playClickSound();
    const currIdx = selectedBodyRef.current
      ? bodies.findIndex(b => b.id === selectedBodyRef.current?.id)
      : -1;
    let nextIdx = currIdx + dir;
    if (nextIdx < 0) nextIdx = bodies.length - 1;
    if (nextIdx >= bodies.length) nextIdx = 0;
    onSelectBody(bodies[nextIdx]);
  }, [bodies, onSelectBody]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        onSetTimeScale(timeScaleRef.current === 0 ? 1 : 0);
        audioEngine.playClickSound();
      } else if (e.code === 'Escape') {
        if (selectedBodyRef.current) {
          e.preventDefault();
          onSelectBody(null);
          audioEngine.playClickSound(500);
        }
      } else if (e.key === '[' || e.key === '{') {
        e.preventDefault();
        handleCycleBody(-1);
      } else if (e.key === ']' || e.key === '}') {
        e.preventDefault();
        handleCycleBody(1);
      } else if (e.key.toLowerCase() === 'l') {
        e.preventDefault();
        onToggleLabels();
      } else if (e.key.toLowerCase() === 'o') {
        e.preventDefault();
        onToggleOrbits();
      } else if (e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setShowBelts(prev => !prev);
      } else if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        handleCameraPreset('reset');
      } else if (e.key.toLowerCase() === 'h') {
        e.preventDefault();
        setIsZenMode(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSetTimeScale, onSelectBody, handleCycleBody, onToggleLabels, onToggleOrbits, handleCameraPreset]);

  // Calculate coordinates based on scale mode
  const getOrbitRadius = useCallback((distMillionKm: number) => {
    if (distMillionKm === 0) return 0;
    if (scaleModeRef.current === 'presentation') {
      // Presentation scaling: comfortable visual separation between all inner and outer planets
      return Math.pow(distMillionKm / 57.9, 0.52) * 20 + 26;
    } else {
      // True Astronomical Proportional Distance (AU scale):
      // 1 AU (149.598M km) = 40.0 units
      // Mercury (0.3871 AU): 15.48 units (Sun radius: 4.0, corona outer edge: 4.72 -> clear >10 units of vacuum space)
      // Venus (0.7233 AU): 28.93 units
      // Earth (1.0000 AU): 40.00 units
      // Mars (1.5237 AU): 60.95 units
      // Asteroid Belt: 86 - 132 units (2.15 to 3.3 AU)
      // Jupiter (5.2044 AU): 208.18 units
      // Saturn (9.5826 AU): 383.30 units
      // Uranus (19.201 AU): 768.05 units
      // Neptune (30.070 AU): 1202.8 units
      // Kuiper Belt: 1200 - 1920 units (30 to 48 AU)
      return (distMillionKm / 149.59787) * 40.0;
    }
  }, []);

  const getBodyVisualScale = useCallback((body: CelestialBody) => {
    if (body.type === 'Star') return scaleModeRef.current === 'presentation' ? 7.0 : 4.0;
    if (body.type === 'Moon') {
      if (scaleModeRef.current === 'presentation') {
        if (body.id === 'ganymede' || body.id === 'titan' || body.id === 'callisto') return 0.72;
        if (body.id === 'moon' || body.id === 'io' || body.id === 'europa' || body.id === 'triton') return 0.55;
        return 0.42; // Enceladus, Charon
      } else {
        if (body.id === 'ganymede' || body.id === 'titan' || body.id === 'callisto') return 0.28;
        if (body.id === 'moon' || body.id === 'io' || body.id === 'europa' || body.id === 'triton') return 0.20;
        return 0.14; // Enceladus, Charon
      }
    }
    if (body.type === 'Dwarf Planet') {
      if (scaleModeRef.current === 'presentation') {
        if (body.id === 'pluto' || body.id === 'eris') return 0.95;
        if (body.id === 'haumea' || body.id === 'makemake') return 0.85;
        return 0.75; // Ceres
      } else {
        if (body.id === 'pluto' || body.id === 'eris') return 0.32;
        if (body.id === 'haumea' || body.id === 'makemake') return 0.28;
        return 0.22; // Ceres
      }
    }
    if (scaleModeRef.current === 'presentation') {
      if (body.id === 'jupiter') return 4.2;
      if (body.id === 'saturn') return 3.6;
      if (body.id === 'uranus') return 2.6;
      if (body.id === 'neptune') return 2.5;
      if (body.id === 'earth') return 1.75;
      if (body.id === 'venus') return 1.65;
      if (body.id === 'mars') return 1.3;
      if (body.id === 'mercury') return 1.05;
      return Math.max(0.85, Math.pow(body.radiusKm, 0.38) * 0.42);
    } else {
      // Realistic astronomical size hierarchy:
      // Sun (4.0) > Jupiter (2.4) > Saturn (2.0) > Uranus (1.1) ~ Neptune (1.05) > Earth (0.62) ~ Venus (0.59) > Mars (0.44) > Mercury (0.35)
      if (body.id === 'jupiter') return 2.4;
      if (body.id === 'saturn') return 2.0;
      if (body.id === 'uranus') return 1.1;
      if (body.id === 'neptune') return 1.05;
      if (body.id === 'earth') return 0.62;
      if (body.id === 'venus') return 0.59;
      if (body.id === 'mars') return 0.44;
      if (body.id === 'mercury') return 0.35;
      return Math.max(0.3, (body.radiusKm / 6371) * 0.62);
    }
  }, []);

  // Handle camera gliding to selected planet on sunlit side
  useEffect(() => {
    if (selectedBody && controlsRef.current && cameraRef.current) {
      audioEngine.playWarpSound();
      isTrackingBodyRef.current = false;
      const bodyGroup = planetMeshesRef.current.get(selectedBody.id);
      if (bodyGroup) {
        const targetWorldPos = new THREE.Vector3();
        bodyGroup.getWorldPosition(targetWorldPos);

        const visualScale = getBodyVisualScale(selectedBody);
        const offsetDist = selectedBody.type === 'Star' 
          ? (scaleMode === 'presentation' ? 24 : 14) 
          : selectedBody.type === 'Moon'
          ? Math.max(scaleMode === 'presentation' ? 2.6 : 1.4, visualScale * 3.6)
          : selectedBody.type === 'Dwarf Planet'
          ? Math.max(scaleMode === 'presentation' ? 3.8 : 2.0, visualScale * 3.6)
          : Math.max(scaleMode === 'presentation' ? 6.5 : 2.8, visualScale * 3.4);

        // Position camera on the SUNLIT side of the planet for realistic, clear lighting
        let sunlitDir = targetWorldPos.clone();
        if (sunlitDir.lengthSq() < 0.1) {
          // If Sun itself, view from diagonal front-top
          sunlitDir.set(0.8, 0.4, 1.0).normalize();
        } else {
          // Rotate slightly for a 3/4 sunlit angle
          sunlitDir.normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.55);
        }

        const idealCamPos = targetWorldPos.clone().add(
          sunlitDir.multiplyScalar(offsetDist)
        );
        idealCamPos.y += offsetDist * 0.35; // slight elevation for 3D depth

        cameraTransitionRef.current = {
          active: true,
          targetPosition: targetWorldPos,
          cameraTargetPosition: idealCamPos,
          progress: 0,
        };
      }
    } else if (!selectedBody && controlsRef.current && cameraRef.current) {
      isTrackingBodyRef.current = false;
    }
  }, [selectedBody, getBodyVisualScale, scaleMode]);

  // When scaleMode changes, smoothly adapt camera overview if not focused on a planet
  const prevScaleModeRef = useRef(scaleMode);
  useEffect(() => {
    if (prevScaleModeRef.current !== scaleMode) {
      prevScaleModeRef.current = scaleMode;
      if (!selectedBodyRef.current && controlsRef.current && cameraRef.current) {
        cameraTransitionRef.current = {
          active: true,
          targetPosition: new THREE.Vector3(0, 0, 0),
          cameraTargetPosition: scaleMode === 'realistic' 
            ? new THREE.Vector3(0, 260, 680) 
            : new THREE.Vector3(0, 85, 220),
          progress: 0,
        };
      }
    }
  }, [scaleMode]);

  // Primary Three.js setup & teardown
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x030611); // Deep cosmic abyss

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      20000
    );
    camera.position.set(0, scaleModeRef.current === 'realistic' ? 260 : 75, scaleModeRef.current === 'realistic' ? 680 : 185);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 8000;
    controls.panSpeed = 1.2;
    controls.zoomSpeed = 1.5;
    controlsRef.current = controls;

    // Stars particle field (10,000 deep space stars)
    const starCount = 10000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = 600 + Math.random() * 800;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = radius * Math.cos(phi);

      const colorTint = Math.random();
      if (colorTint > 0.8) {
        starColors[i * 3] = 0.6; starColors[i * 3 + 1] = 0.8; starColors[i * 3 + 2] = 1.0; // Cool Blue
      } else if (colorTint > 0.6) {
        starColors[i * 3] = 1.0; starColors[i * 3 + 1] = 0.9; starColors[i * 3 + 2] = 0.7; // Warm Golden
      } else {
        starColors[i * 3] = 0.9; starColors[i * 3 + 1] = 0.95; starColors[i * 3 + 2] = 1.0; // Pure White
      }
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 2.2,
      map: createGlowParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Cosmic Lighting
    const ambientLight = new THREE.AmbientLight(0x475569, 0.65); // Gentle omnidirectional ambient fill
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 0.45);
    scene.add(hemisphereLight);

    const sunPointLight = new THREE.PointLight(0xfffaed, 5.0, 5000, 0.2);
    sunPointLight.position.set(0, 0, 0);
    scene.add(sunPointLight);

    // Camera-attached headlight / fill light: ensures viewing side is always clear and detailed
    const cameraFillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    cameraFillLight.position.set(0, 0, 1);
    camera.add(cameraFillLight);
    scene.add(camera);

    // Orbit Lines container
    const orbitGroup = new THREE.Group();
    orbitLinesGroupRef.current = orbitGroup;
    scene.add(orbitGroup);

    // Procedural High-Definition Sun Construction with Realistic Satellite Texture
    const sunTexture = createRealisticPlanetTexture('sun');
    sunTexture.wrapS = THREE.RepeatWrapping;
    sunTexture.wrapT = THREE.RepeatWrapping;

    const sunGeo = new THREE.SphereGeometry(1, 64, 64);
    const sunMat = new THREE.MeshStandardMaterial({
      map: sunTexture,
      emissive: 0xffa726,
      emissiveMap: sunTexture,
      emissiveIntensity: 1.5,
      roughness: 1.0,
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.name = 'Sun (Sol)';
    sunMeshRef.current = sunMesh;

    // Load ultra-high-definition realistic SDO satellite solar photosphere texture
    const storedTextures = getStoredPlanetTextures();
    const sunBody = bodies.find((b) => b.id === 'sun');
    const sunTexUrl = storedTextures['sun'] || sunBody?.textureUrl || 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2048&auto=format&fit=crop';
    
    if (sunTexUrl) {
      const sunLoader = new THREE.TextureLoader();
      sunLoader.setCrossOrigin('anonymous');
      sunLoader.load(
        sunTexUrl,
        (loadedTex) => {
          loadedTex.colorSpace = THREE.SRGBColorSpace;
          loadedTex.wrapS = THREE.RepeatWrapping;
          loadedTex.wrapT = THREE.RepeatWrapping;
          sunMat.map = loadedTex;
          sunMat.needsUpdate = true;
        },
        undefined,
        (err) => {
          console.warn('Procedural solar texture retained as fallback:', err);
        }
      );
    }

    // Glowing Corona Shield
    // Layered Corona for a deep realistic solar atmosphere
    const coronaGroup = new THREE.Group();
    const glowColors = [0xffffff, 0xffe082, 0xffa726, 0xff5722];
    const glowScales = [1.02, 1.05, 1.10, 1.18];
    const glowOpacities = [0.75, 0.35, 0.18, 0.06];
    
    for (let i = 0; i < 4; i++) {
        const cGeo = new THREE.SphereGeometry(glowScales[i], 32, 32);
        const cMat = new THREE.MeshBasicMaterial({
            color: glowColors[i],
            transparent: true,
            opacity: glowOpacities[i],
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            depthWrite: false
        });
        coronaGroup.add(new THREE.Mesh(cGeo, cMat));
    }
    sunCoronaRef.current = coronaGroup as any;

    const sunGroup = new THREE.Group();
    sunGroup.add(sunMesh);
    sunGroup.add(coronaGroup);
    
    // Add Lens Flare / Sprite Glow - calibrated so corona doesn't engulf inner planets
    const flareCanvas = document.createElement('canvas');
    flareCanvas.width = 256;
    flareCanvas.height = 256;
    const flareCtx = flareCanvas.getContext('2d')!;
    const grad = flareCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(255, 230, 150, 0.8)');
    grad.addColorStop(0.5, 'rgba(255, 150, 0, 0.35)');
    grad.addColorStop(1, 'rgba(255, 100, 0, 0)');
    flareCtx.fillStyle = grad;
    flareCtx.fillRect(0, 0, 256, 256);
    const flareTex = new THREE.CanvasTexture(flareCanvas);
    const flareMat = new THREE.SpriteMaterial({ map: flareTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    const flareSprite = new THREE.Sprite(flareMat);
    flareSprite.scale.set(2.4, 2.4, 1);
    sunGroup.add(flareSprite);
    sunGroup.position.set(0, 0, 0);
    const initSunScale = scaleModeRef.current === 'presentation' ? 7.0 : 4.0;
    sunGroup.scale.set(initSunScale, initSunScale, initSunScale);
    scene.add(sunGroup);
    planetMeshesRef.current.set('sun', sunGroup);

    // Sleek 3D Holographic Targeting reticle for selected body (no visual blockage)
    const targetRingGroup = new THREE.Group();
    const ringGeom = new THREE.RingGeometry(1.22, 1.25, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
      depthTest: false,
    });
    const innerRing = new THREE.Mesh(ringGeom, ringMaterial);
    innerRing.rotation.x = Math.PI / 2;
    targetRingGroup.add(innerRing);

    const outerDashedGeom = new THREE.RingGeometry(1.4, 1.43, 48);
    const outerMaterial = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
      depthTest: false,
    });
    const outerRing = new THREE.Mesh(outerDashedGeom, outerMaterial);
    outerRing.rotation.x = Math.PI / 2;
    targetRingGroup.add(outerRing);
    targetRingGroup.visible = false;
    targetingRingRef.current = targetRingGroup;
    scene.add(targetRingGroup);

    const dummy = new THREE.Object3D();

    // Resize handler with observer
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

    // Raycaster for 3D clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };

    const handlePointerDown = (event: MouseEvent) => {
      pointerDownPos = { x: event.clientX, y: event.clientY };
    };

    const handlePointerUp = (event: MouseEvent) => {
      // Ignore if user was dragging the camera around
      const dragDist = Math.hypot(event.clientX - pointerDownPos.x, event.clientY - pointerDownPos.y);
      if (dragDist > 6) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Collect clickable meshes (including planets, moons, and the Sun)
      const clickables: THREE.Object3D[] = [];
      if (sunMeshRef.current && sunMeshRef.current.visible) {
        clickables.push(sunMeshRef.current);
      }
      planetMeshesRef.current.forEach((group) => {
        group.traverse((child) => {
          if (child instanceof THREE.Mesh && child.visible) {
            clickables.push(child);
          }
        });
      });

      const intersects = raycaster.intersectObjects(clickables, false);
      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        let matchedBody: CelestialBody | null = null;
        
        // Check if hit Sun
        if (hitMesh === sunMeshRef.current || hitMesh.name === 'Sun (Sol)') {
          matchedBody = bodies.find((b) => b.id === 'sun') || null;
        } else {
          // Find owner body by name or custom id
          for (const b of bodies) {
            if (hitMesh.name === b.name || hitMesh.parent?.name === b.name || hitMesh.name.includes(b.id)) {
              matchedBody = b;
              break;
            }
          }
        }

        if (matchedBody) {
          audioEngine.playClickSound(950);
          onSelectBodyRef.current(matchedBody);
          return;
        }
      } else {
        // User clicked empty space: deselect currently selected planet and smoothly return to overview
        if (selectedBodyRef.current) {
          audioEngine.playClickSound(500);
          onSelectBodyRef.current(null);
          if (controlsRef.current && cameraRef.current) {
            cameraTransitionRef.current = {
              active: true,
              targetPosition: new THREE.Vector3(0, 0, 0),
              cameraTargetPosition: scaleModeRef.current === 'realistic' 
                ? new THREE.Vector3(0, 260, 680) 
                : new THREE.Vector3(0, 85, 220),
              progress: 0,
            };
          }
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);

    // Global Escape key listener to deselect planet
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedBodyRef.current) {
        audioEngine.playClickSound(500);
        onSelectBodyRef.current(null);
        if (controlsRef.current && cameraRef.current) {
          cameraTransitionRef.current = {
            active: true,
            targetPosition: new THREE.Vector3(0, 0, 0),
            cameraTargetPosition: scaleModeRef.current === 'realistic' 
              ? new THREE.Vector3(0, 260, 680) 
              : new THREE.Vector3(0, 85, 220),
            progress: 0,
          };
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Main animation frame loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      const now = performance.now();
      const deltaSec = Math.min((now - lastFrameTimeRef.current) / 1000, 0.1);
      lastFrameTimeRef.current = now;

      // Advance simulation time smoothly
      simulationTimeRef.current += deltaSec * timeScaleRef.current;
      const simTime = simulationTimeRef.current;

      // Update simulation epoch day indicator smoothly (5 Hz)
      if (now - lastClockUpdateRef.current > 200) {
        lastClockUpdateRef.current = now;
        setSimDays(Math.floor(simulationTimeRef.current * 1.28));
      }

      // Animate Sun plasma rotation (calibrated, serene)
      if (sunMeshRef.current) {
        sunMeshRef.current.rotation.y += deltaSec * 0.02 * Math.min(timeScaleRef.current, 5);
      }
      if (sunCoronaRef.current) {
        sunCoronaRef.current.rotation.y -= deltaSec * 0.015 * Math.min(timeScaleRef.current, 5);
        const breathe = 1.08 + Math.sin(now * 0.003) * 0.03;
        sunCoronaRef.current.scale.set(breathe, breathe, breathe);
      }

      // Rotate Earth clouds independently
      if (cloudsMeshRef.current) {
        cloudsMeshRef.current.rotation.y += deltaSec * 0.03 * Math.min(timeScaleRef.current, 10);
      }

      // Revolve & rotate each celestial body
      bodies.forEach((body) => {
        if (body.type === 'Star') return;
        const group = planetMeshesRef.current.get(body.id);
        if (!group) return;

        if (body.parentBody) {
          // Lunar orbit around parent planet: strictly Keplerian harmonic around host planet
          const parentGroup = planetMeshesRef.current.get(body.parentBody);
          if (!parentGroup) return;

          const cfg = MOON_CONFIGS[body.id] || {
            orbitRadiusPresentation: 5.0,
            orbitRadiusRealistic: 2.5,
            inclinationDeg: 5,
            initialAngle: 0,
          };
          const moonRadius = scaleModeRef.current === 'realistic' ? cfg.orbitRadiusRealistic : cfg.orbitRadiusPresentation;

          // Lunar orbital angular velocity:
          // Calibrated relative to Earth's Moon (27.32 days orbital period)
          const moonBaseSpeed = 0.14; // calibrated from 1.4 for graceful, observable lunar movement
          const moonSpeedFactor = (27.32 / Math.max(0.5, body.orbitalPeriodDays)) * moonBaseSpeed * (cfg.retrograde ? -1 : 1);
          const moonAngle = cfg.initialAngle + simTime * moonSpeedFactor;

          const incRad = (cfg.inclinationDeg * Math.PI) / 180;
          const localX = moonRadius * Math.cos(moonAngle);
          const localY = moonRadius * Math.sin(moonAngle) * Math.sin(incRad);
          const localZ = moonRadius * Math.sin(moonAngle) * Math.cos(incRad);

          group.position.set(
            parentGroup.position.x + localX,
            parentGroup.position.y + localY,
            parentGroup.position.z + localZ
          );
        } else {
          // Revolution around Sun: strictly proportional to true astronomical orbital period (Keplerian harmonic)
          // Angular velocity w = 2*PI / T, so w_planet / w_earth = 365.256 / body.orbitalPeriodDays
          // Calibrated baseline 1x speed: earthOrbitalSpeed = 0.022 (approx 7.3x slower than previous 0.16)
          // At 1x speed: Earth completes an orbit in ~285 seconds (~4.75 min), Mercury in ~68s, Mars in ~9 min
          // Fast multipliers (2x, 5x, 25x, 100x) allow rapid time-lapse observation
          const radius = getOrbitRadius(body.distanceFromSunMillionKm);
          const earthOrbitalSpeed = 0.022;
          const speedFactor = (365.256 / Math.max(1, body.orbitalPeriodDays)) * earthOrbitalSpeed;

          const baseAngle = PLANET_INITIAL_ANGLES[body.id] ?? (body.id.charCodeAt(0) * 1.3);
          const angle = baseAngle + simTime * speedFactor;

          // True orbital inclination to ecliptic plane
          const incDeg = PLANET_ORBITAL_INCLINATIONS_DEG[body.id] ?? 0;
          const incRad = (incDeg * Math.PI) / 180;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle) * Math.sin(incRad);
          const z = radius * Math.sin(angle) * Math.cos(incRad);

          group.position.set(x, y, z);
        }

        // Self rotation on tilted axis
        const planetMesh = group.getObjectByName(`${body.name}_mesh`);
        if (planetMesh) {
          const spinDir = (body.rotationalPeriodHours ?? 24) < 0 ? -1 : 1;
          const spinSpeed = (24 / Math.abs(body.rotationalPeriodHours || 24)) * 0.04 * spinDir; // calibrated from 0.4
          planetMesh.rotation.y += deltaSec * spinSpeed * Math.min(timeScaleRef.current, 10);
        }
      });

      // Slowly revolve asteroid belt
      if (asteroidBeltRef.current) asteroidBeltRef.current.rotation.y += deltaSec * 0.002 * Math.min(timeScaleRef.current, 10);
      if (kuiperBeltRef.current) kuiperBeltRef.current.rotation.y += deltaSec * 0.0008 * Math.min(timeScaleRef.current, 10);

      // Dynamic Camera Tracking & Smooth Interpolation
      const transition = cameraTransitionRef.current;
      const currentSelected = selectedBodyRef.current;

      if (currentSelected) {
        const selectedGroup = planetMeshesRef.current.get(currentSelected.id);
        if (selectedGroup) {
          const livePlanetPos = new THREE.Vector3();
          selectedGroup.getWorldPosition(livePlanetPos);

          if (transition.active) {
            transition.progress += deltaSec * 2.0;
            const t = Math.min(transition.progress, 1);
            const easeT = 1 - Math.pow(1 - t, 3); // Cubic ease out

            // Dynamically update target camera position based on current live planet position
            const visualScale = getBodyVisualScale(currentSelected);
            const offsetDist = currentSelected.type === 'Star' 
              ? (scaleModeRef.current === 'presentation' ? 24 : 14) 
              : currentSelected.type === 'Moon'
              ? Math.max(scaleModeRef.current === 'presentation' ? 2.6 : 1.4, visualScale * 3.6)
              : currentSelected.type === 'Dwarf Planet'
              ? Math.max(scaleModeRef.current === 'presentation' ? 3.8 : 2.0, visualScale * 3.6)
              : Math.max(scaleModeRef.current === 'presentation' ? 6.5 : 2.8, visualScale * 3.4);

            let sunlitDir = livePlanetPos.clone();
            if (sunlitDir.lengthSq() < 0.1) {
              sunlitDir.set(0.8, 0.4, 1.0).normalize();
            } else {
              sunlitDir.normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.55);
            }
            const liveIdealCam = livePlanetPos.clone().add(sunlitDir.multiplyScalar(offsetDist));
            liveIdealCam.y += offsetDist * 0.35;

            camera.position.lerp(liveIdealCam, easeT * 0.18 + 0.02);
            controls.target.lerp(livePlanetPos, easeT * 0.22 + 0.03);

            if (t >= 1) {
              transition.active = false;
              isTrackingBodyRef.current = true;
            }
          } else if (isTrackingBodyRef.current) {
            // Body is in continuous orbit: seamlessly follow it while keeping user's relative orbit angle & distance
            const deltaMove = livePlanetPos.clone().sub(controls.target);
            controls.target.copy(livePlanetPos);
            camera.position.add(deltaMove);
          }
        }
      } else {
        // Free roaming / returning to system overview
        if (transition.active) {
          transition.progress += deltaSec * 1.8;
          const t = Math.min(transition.progress, 1);
          const easeT = 1 - Math.pow(1 - t, 3);
          camera.position.lerp(transition.cameraTargetPosition, easeT * 0.15 + 0.02);
          controls.target.lerp(transition.targetPosition, easeT * 0.18 + 0.03);

          if (t >= 1) {
            transition.active = false;
          }
        }
      }

      // Update targeting reticle position on selected body
      if (selectedBody && targetingRingRef.current) {
        const selectedGroup = planetMeshesRef.current.get(selectedBody.id);
        if (selectedGroup) {
          targetingRingRef.current.visible = true;
          const worldPos = new THREE.Vector3();
          selectedGroup.getWorldPosition(worldPos);
          targetingRingRef.current.position.copy(worldPos);
          const vScale = getBodyVisualScale(selectedBody) * 1.35;
          targetingRingRef.current.scale.set(vScale, vScale, vScale);
          targetingRingRef.current.rotation.z += deltaSec * 0.6;
        }
      } else if (targetingRingRef.current) {
        targetingRingRef.current.visible = false;
      }

      controls.update();
      renderer.render(scene, camera);

      // Project 2D label positions directly on DOM button elements
      if (showLabelsRef.current) {
        const camPos = camera.position;
        bodies.forEach((b) => {
          const btn = labelElementsRef.current.get(b.id);
          if (!btn) return;
          const group = planetMeshesRef.current.get(b.id);
          if (group) {
            const tempVec = new THREE.Vector3();
            group.getWorldPosition(tempVec);

            // Level-of-Detail label decluttering for Moons:
            // Reveal moon labels when camera is nearby or when moon/parent is actively selected
            if (b.type === 'Moon') {
              const isSelected = selectedBodyRef.current?.id === b.id || selectedBodyRef.current?.id === b.parentBody;
              const distToCam = camPos.distanceTo(tempVec);
              const maxDist = scaleModeRef.current === 'presentation' ? 110 : 60;
              if (!isSelected && distToCam > maxDist) {
                btn.style.display = 'none';
                return;
              }
            }

            tempVec.y += getBodyVisualScale(b) + 1.2;
            tempVec.project(camera);

            const isFront = tempVec.z < 1;
            const screenX = (tempVec.x * 0.5 + 0.5) * container.clientWidth;
            const screenY = (-tempVec.y * 0.5 + 0.5) * container.clientHeight;
            const isVisible = isFront && screenX > 20 && screenX < container.clientWidth - 20 && screenY > 20 && screenY < container.clientHeight - 20;

            if (isVisible) {
              btn.style.display = 'block';
              btn.style.transform = `translate(-50%, -100%) translate3d(${screenX}px, ${screenY}px, 0)`;
            } else {
              btn.style.display = 'none';
            }
          }
        });
      } else {
        labelElementsRef.current.forEach((btn) => {
          btn.style.display = 'none';
        });
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [bodies]);

  // Re-build planet meshes & orbits when bodies or scaleMode changes
  useEffect(() => {
    const scene = sceneRef.current;
    const orbitGroup = orbitLinesGroupRef.current;
    if (!scene || !orbitGroup) return;

    // Clear previous orbit lines
    while (orbitGroup.children.length > 0) {
      const obj = orbitGroup.children[0];
      orbitGroup.remove(obj);
      if (obj instanceof THREE.Line) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    }


    // Clear existing belts
    if (asteroidBeltRef.current) {
      scene.remove(asteroidBeltRef.current);
      asteroidBeltRef.current.geometry.dispose();
      (asteroidBeltRef.current.material as THREE.Material).dispose();
      asteroidBeltRef.current = null;
    }
    if (kuiperBeltRef.current) {
      scene.remove(kuiperBeltRef.current);
      kuiperBeltRef.current.geometry.dispose();
      (kuiperBeltRef.current.material as THREE.Material).dispose();
      kuiperBeltRef.current = null;
    }

    // Build Belts dynamically based on current scale mode
    const marsDist = getOrbitRadius(227.9);
    const jupDist = getOrbitRadius(778.5);
    const nepDist = getOrbitRadius(4495.1);

    const astStart = scaleMode === 'presentation' ? marsDist + (jupDist - marsDist) * 0.22 : 86;
    const astEnd = scaleMode === 'presentation' ? jupDist - (jupDist - marsDist) * 0.22 : 132;
    const astWidth = astEnd - astStart;

    const asteroidBeltCount = 3000;
    const asteroidGeo = new THREE.SphereGeometry(scaleMode === 'presentation' ? 0.32 : 0.22, 8, 8);
    const asteroidMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.9, metalness: 0.1 });
    const asteroidBelt = new THREE.InstancedMesh(asteroidGeo, asteroidMat, asteroidBeltCount);
    
    const kuiperCount = 2000;
    const kuiperGeo = new THREE.SphereGeometry(scaleMode === 'presentation' ? 0.38 : 0.28, 8, 8);
    const kuiperMat = new THREE.MeshStandardMaterial({ color: 0x93c5fd, roughness: 0.7, metalness: 0.2 });
    const kuiperBelt = new THREE.InstancedMesh(kuiperGeo, kuiperMat, kuiperCount);

    const dummyObj = new THREE.Object3D();

    for (let i = 0; i < asteroidBeltCount; i++) {
      const dist = astStart + Math.random() * astWidth;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * (scaleMode === 'presentation' ? 4.5 : 2.5);
      const scale = 0.3 + Math.random() * 0.9;
      dummyObj.position.set(dist * Math.cos(angle), y, dist * Math.sin(angle));
      dummyObj.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummyObj.scale.set(scale * (0.8 + Math.random() * 0.4), scale, scale * (0.8 + Math.random() * 0.4));
      dummyObj.updateMatrix();
      asteroidBelt.setMatrixAt(i, dummyObj.matrix);
    }
    asteroidBelt.instanceMatrix.needsUpdate = true;
    asteroidBelt.visible = showBeltsRef.current;
    scene.add(asteroidBelt);
    asteroidBeltRef.current = asteroidBelt;

    const kuiperStart = nepDist * 1.04;
    const kuiperWidth = scaleMode === 'presentation' ? nepDist * 0.25 : nepDist * 0.55;

    for (let i = 0; i < kuiperCount; i++) {
      const dist = kuiperStart + Math.random() * kuiperWidth;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * (scaleMode === 'presentation' ? 14 : 10);
      const scale = 0.4 + Math.random() * 1.2;
      dummyObj.position.set(dist * Math.cos(angle), y, dist * Math.sin(angle));
      dummyObj.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummyObj.scale.setScalar(scale);
      dummyObj.updateMatrix();
      kuiperBelt.setMatrixAt(i, dummyObj.matrix);
    }
    kuiperBelt.instanceMatrix.needsUpdate = true;
    kuiperBelt.visible = showBeltsRef.current;
    scene.add(kuiperBelt);
    kuiperBeltRef.current = kuiperBelt;

    // Clear existing planet groups (except Sun)
    planetMeshesRef.current.forEach((group, id) => {
      if (id !== 'sun') {
        scene.remove(group);
      }
    });

    bodies.forEach((body) => {
      if (body.type === 'Star') {
        const sunGroup = planetMeshesRef.current.get('sun');
        if (sunGroup) {
          const s = getBodyVisualScale(body);
          sunGroup.scale.set(s, s, s);
        }
        return;
      }

      const radius = getOrbitRadius(body.distanceFromSunMillionKm);
      const vScale = getBodyVisualScale(body);

      // Create glowing orbit line: Sun-centered for planets & dwarf planets, or around parent planet for moons
      if (!body.parentBody && radius > 0) {
        const segments = 180;
        const orbitPoints: THREE.Vector3[] = [];
        const incDeg = PLANET_ORBITAL_INCLINATIONS_DEG[body.id] ?? 0;
        const incRad = (incDeg * Math.PI) / 180;

        for (let i = 0; i <= segments; i++) {
          const theta = (i / segments) * Math.PI * 2;
          orbitPoints.push(
            new THREE.Vector3(
              radius * Math.cos(theta),
              radius * Math.sin(theta) * Math.sin(incRad),
              radius * Math.sin(theta) * Math.cos(incRad)
            )
          );
        }
        const orbitGeom = new THREE.BufferGeometry().setFromPoints(orbitPoints);
        const orbitMat = new THREE.LineBasicMaterial({
          color: new THREE.Color(body.orbitColor || 0x5588cc),
          transparent: true,
          opacity: body.type === 'Dwarf Planet' ? 0.28 : 0.4,
          linewidth: 1,
        });
        const orbitLine = new THREE.Line(orbitGeom, orbitMat);
        orbitGroup.add(orbitLine);
      } else if (body.parentBody) {
        // Moon's orbit ring around its parent body
        const parentGroup = planetMeshesRef.current.get(body.parentBody);
        if (parentGroup) {
          const cfg = MOON_CONFIGS[body.id] || {
            orbitRadiusPresentation: 5.0,
            orbitRadiusRealistic: 2.5,
            inclinationDeg: 5,
            initialAngle: 0,
          };
          const moonRadius = scaleMode === 'realistic' ? cfg.orbitRadiusRealistic : cfg.orbitRadiusPresentation;
          const segments = 90;
          const pts: THREE.Vector3[] = [];
          const incRad = (cfg.inclinationDeg * Math.PI) / 180;
          for (let i = 0; i <= segments; i++) {
            const th = (i / segments) * Math.PI * 2;
            pts.push(
              new THREE.Vector3(
                moonRadius * Math.cos(th),
                moonRadius * Math.sin(th) * Math.sin(incRad),
                moonRadius * Math.sin(th) * Math.cos(incRad)
              )
            );
          }
          const moonOrbitGeom = new THREE.BufferGeometry().setFromPoints(pts);
          const moonOrbitMat = new THREE.LineBasicMaterial({
            color: new THREE.Color(body.orbitColor || 0x64748b),
            transparent: true,
            opacity: 0.35,
          });
          const moonOrbitLine = new THREE.Line(moonOrbitGeom, moonOrbitMat);
          moonOrbitLine.name = `${body.id}_orbit`;
          moonOrbitLine.visible = showOrbits;
          parentGroup.add(moonOrbitLine);
        }
      }

      // Create Planet Group
      const planetGroup = new THREE.Group();
      planetGroup.name = body.name;

      // Base Planet Sphere - high polygon smoothness
      const sphereGeom = new THREE.SphereGeometry(1, 64, 64);
      const planetTex = createRealisticPlanetTexture(body.id);
      let sphereMat: THREE.Material;

      if (body.id === 'earth') {
        sphereMat = new THREE.MeshStandardMaterial({
          map: planetTex,
          roughness: 0.55,
          metalness: 0.1,
        });

        // Dynamic cloud shell
        const cloudTexture = createEarthCloudsTexture();
        const cloudGeo = new THREE.SphereGeometry(1.025, 48, 48);
        const cloudMat = new THREE.MeshStandardMaterial({
          map: cloudTexture,
          transparent: true,
          opacity: 0.85,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const cloudsMesh = new THREE.Mesh(cloudGeo, cloudMat);
        cloudsMeshRef.current = cloudsMesh;
        planetGroup.add(cloudsMesh);

        // Rayleigh scattering blue atmosphere rim halo
        const atmoGeo = new THREE.SphereGeometry(1.05, 32, 32);
        const atmoMat = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.2,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        });
        planetGroup.add(new THREE.Mesh(atmoGeo, atmoMat));
      } else if (body.id === 'venus') {
        sphereMat = new THREE.MeshStandardMaterial({
          map: planetTex,
          roughness: 0.4,
          metalness: 0.05,
        });

        // Sulfuric acid haze halo
        const atmoGeo = new THREE.SphereGeometry(1.03, 32, 32);
        const atmoMat = new THREE.MeshBasicMaterial({
          color: 0xfef08a,
          transparent: true,
          opacity: 0.22,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        });
        planetGroup.add(new THREE.Mesh(atmoGeo, atmoMat));
      } else if (body.type === 'Star') {
        sphereMat = new THREE.MeshBasicMaterial({
          map: planetTex,
          color: 0xffffff,
        });

        // Add a glowing corona to the Sun
        const coronaGeo = new THREE.SphereGeometry(1.2, 32, 32);
        const coronaMat = new THREE.MeshBasicMaterial({
          color: 0xffaa00,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        });
        planetGroup.add(new THREE.Mesh(coronaGeo, coronaMat));
        
        const pointLight = new THREE.PointLight(0xffffff, 2.5, 2000);
        planetGroup.add(pointLight);
      } else {
        const isGasGiant = body.type === 'Gas Giant' || body.type === 'Ice Giant';
        sphereMat = new THREE.MeshStandardMaterial({
          map: planetTex,
          roughness: isGasGiant ? 0.4 : 0.85,
          metalness: isGasGiant ? 0.05 : 0.12,
        });
      }

      const planetMesh = new THREE.Mesh(sphereGeom, sphereMat);
      planetMesh.name = `${body.name}_mesh`;
      if (body.id === 'haumea') {
        // Haumea's signature triaxial ellipsoid shape resulting from its rapid 3.9h rotation
        planetMesh.scale.set(vScale * 1.85, vScale * 0.95, vScale * 1.25);
      } else {
        planetMesh.scale.set(vScale, vScale, vScale);
      }
      planetGroup.add(planetMesh);

      // Check for custom user/Supabase texture or realistic satellite map URL
      const customTextures = getStoredPlanetTextures();
      const textureToLoad = customTextures[body.id] || body.textureUrl;
      if (textureToLoad) {
        const texLoader = new THREE.TextureLoader();
        texLoader.setCrossOrigin('anonymous');
        texLoader.load(
          textureToLoad,
          (loadedTex) => {
            loadedTex.colorSpace = THREE.SRGBColorSpace;
            (sphereMat as THREE.MeshStandardMaterial).map = loadedTex;
            sphereMat.needsUpdate = true;
          },
          undefined,
          () => {
            // Keep procedural canvas texture as seamless fallback
          }
        );
      }

      // Saturn Rings System with realistic Cassini division and high-res alpha gradient
      if (body.rings) {
        const ringGeom = new THREE.RingGeometry(vScale * 1.25, vScale * 2.5, 96);
        const rTex = createSaturnRingsTexture();

        const ringMat = new THREE.MeshStandardMaterial({
          map: rTex,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.95,
          roughness: 0.7,
        });
        const ringMesh = new THREE.Mesh(ringGeom, ringMat);
        ringMesh.rotation.x = Math.PI / 2 + (body.axialTiltDeg * Math.PI) / 180;
        planetGroup.add(ringMesh);
      }

      // Uranus faint outer dust ring
      if (body.id === 'uranus') {
        const uRingGeom = new THREE.RingGeometry(vScale * 1.3, vScale * 1.6, 64);
        const uRingMat = new THREE.MeshBasicMaterial({
          color: 0xbae6fd,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.35,
        });
        const uRingMesh = new THREE.Mesh(uRingGeom, uRingMat);
        uRingMesh.rotation.x = Math.PI / 2 + (body.axialTiltDeg * Math.PI) / 180;
        planetGroup.add(uRingMesh);
      }

      // Haumea crystalline ring system
      if (body.id === 'haumea') {
        const hRingGeom = new THREE.RingGeometry(vScale * 2.1, vScale * 2.35, 64);
        const hRingMat = new THREE.MeshBasicMaterial({
          color: 0xcfd8dc,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.4,
        });
        const hRingMesh = new THREE.Mesh(hRingGeom, hRingMat);
        hRingMesh.rotation.x = Math.PI / 2;
        planetGroup.add(hRingMesh);
      }

      // Initial position along true inclined orbit plane
      if (body.parentBody) {
        const parentGroup = planetMeshesRef.current.get(body.parentBody);
        const parentPos = parentGroup ? parentGroup.position : new THREE.Vector3();
        const cfg = MOON_CONFIGS[body.id] || {
          orbitRadiusPresentation: 5.0,
          orbitRadiusRealistic: 2.5,
          inclinationDeg: 5,
          initialAngle: 0,
        };
        const moonRadius = scaleMode === 'realistic' ? cfg.orbitRadiusRealistic : cfg.orbitRadiusPresentation;
        const incRad = (cfg.inclinationDeg * Math.PI) / 180;
        planetGroup.position.set(
          parentPos.x + moonRadius * Math.cos(cfg.initialAngle),
          parentPos.y + moonRadius * Math.sin(cfg.initialAngle) * Math.sin(incRad),
          parentPos.z + moonRadius * Math.sin(cfg.initialAngle) * Math.cos(incRad)
        );
      } else {
        const baseAngle = PLANET_INITIAL_ANGLES[body.id] ?? (body.id.charCodeAt(0) * 1.3);
        const incDeg = PLANET_ORBITAL_INCLINATIONS_DEG[body.id] ?? 0;
        const incRad = (incDeg * Math.PI) / 180;
        planetGroup.position.set(
          radius * Math.cos(baseAngle),
          radius * Math.sin(baseAngle) * Math.sin(incRad),
          radius * Math.sin(baseAngle) * Math.cos(incRad)
        );
      }
      scene.add(planetGroup);
      planetMeshesRef.current.set(body.id, planetGroup);
    });

    // Listen for live custom texture updates (from Textures modal or Supabase sync)
    const handleLiveTextureUpdate = (e: any) => {
      const { planetId, textureUrl } = e.detail || {};
      if (!planetId || !textureUrl) return;

      // Handle Sun live update
      if (planetId === 'sun' && sunMeshRef.current) {
        const texLoader = new THREE.TextureLoader();
        texLoader.setCrossOrigin('anonymous');
        texLoader.load(textureUrl, (loadedTex) => {
          loadedTex.colorSpace = THREE.SRGBColorSpace;
          loadedTex.wrapS = THREE.RepeatWrapping;
          loadedTex.wrapT = THREE.RepeatWrapping;
          (sunMeshRef.current!.material as THREE.MeshBasicMaterial).map = loadedTex;
          (sunMeshRef.current!.material as THREE.MeshBasicMaterial).needsUpdate = true;
        });
        return;
      }

      const group = planetMeshesRef.current.get(planetId);
      if (group) {
        group.traverse((child) => {
          if (child instanceof THREE.Mesh && child.name.includes('_mesh')) {
            const texLoader = new THREE.TextureLoader();
            texLoader.setCrossOrigin('anonymous');
            texLoader.load(textureUrl, (loadedTex) => {
              loadedTex.colorSpace = THREE.SRGBColorSpace;
              (child.material as THREE.MeshStandardMaterial).map = loadedTex;
              child.material.needsUpdate = true;
            });
          }
        });
      }
    };

    window.addEventListener('planet-texture-updated', handleLiveTextureUpdate);

    return () => {
      window.removeEventListener('planet-texture-updated', handleLiveTextureUpdate);
    };
  }, [bodies, scaleMode, getBodyVisualScale, getOrbitRadius]);

  // Update orbit line visibility
  useEffect(() => {
    if (orbitLinesGroupRef.current) {
      orbitLinesGroupRef.current.visible = showOrbits;
    }
    planetMeshesRef.current.forEach((group) => {
      group.traverse((child) => {
        if (child.name && child.name.endsWith('_orbit')) {
          child.visible = showOrbits;
        }
      });
    });
  }, [showOrbits]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-slate-950">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D HTML Labels (direct DOM transform for smooth 60fps without React re-renders) */}
      {showLabels && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {bodies.map((b) => (
            <button
              key={b.id}
              ref={(el) => {
                if (el) labelElementsRef.current.set(b.id, el);
                else labelElementsRef.current.delete(b.id);
              }}
              onClick={() => {
                audioEngine.playClickSound(800);
                onSelectBody(b);
              }}
              style={{ display: 'none' }}
              className={`absolute top-0 left-0 pointer-events-auto px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider transition-colors duration-200 backdrop-blur-md border ${
                selectedBody?.id === b.id
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)] scale-110'
                  : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-cyan-400/60 hover:text-white hover:scale-105'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      )}

      {/* Zen Mode Exit Button */}
      {isZenMode && (
        <button
          onClick={() => {
            audioEngine.playClickSound();
            setIsZenMode(false);
          }}
          className="pointer-events-auto fixed bottom-6 left-6 z-40 px-3.5 py-2 rounded-2xl bg-[#020617]/80 backdrop-blur-xl border border-white/20 text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-2 shadow-2xl transition-all ring-1 ring-white/10 hover:bg-cyan-500/20"
          title="Exit Zen Mode (H or Esc)"
        >
          <Eye className="w-4 h-4 text-cyan-400" />
          <span>Exit Zen Mode (H)</span>
        </button>
      )}

      {/* Main Solar System HUD (Hidden in Zen Mode) */}
      {!isZenMode && (
        <>
          {/* Scale & Simulation Epoch Indicator (Top-Left, below top nav) */}
          <div className="absolute top-20 left-4 sm:left-6 z-20 pointer-events-none flex flex-col gap-2">
            {/* Scale Mode Indicator */}
            <div className={`pointer-events-auto px-3 py-1.5 rounded-2xl backdrop-blur-xl border text-xs font-mono flex items-center gap-2 shadow-xl transition-all ${
              scaleMode === 'realistic'
                ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
                : 'bg-[#020617]/70 border-white/10 text-slate-300'
            }`}>
              <span className={`w-2 h-2 rounded-full ${scaleMode === 'realistic' ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`} />
              <span className="font-semibold tracking-wide">
                {scaleMode === 'realistic' ? 'Astronomical AU Scale' : 'Visual Spaced Scale'}
              </span>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  onToggleScaleMode();
                }}
                className="ml-1 text-[10px] underline text-slate-400 hover:text-white transition-colors"
                title="Switch between Visual Spaced and Astronomical AU Scale"
              >
                Switch
              </button>
            </div>

            {/* Simulation Time Clock Badge */}
            <div className="pointer-events-auto px-3 py-1 rounded-xl bg-[#020617]/60 backdrop-blur-md border border-white/[0.08] text-[11px] font-mono text-slate-300 flex items-center gap-2 shadow-lg">
              <Clock className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>Epoch: <strong className="text-white font-semibold">Day {simDays}</strong></span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Yr {(simDays / 365.25).toFixed(2)}</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-cyan-300 font-semibold">
                {timeScale === 0 ? 'PAUSED' : `${timeScale}x speed`}
              </span>
            </div>
          </div>

          {/* Quick-Cycle Body Controls (Left-Center) */}
          <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 flex-col gap-1.5 pointer-events-auto">
            <button
              onClick={() => handleCycleBody(-1)}
              className="p-2 rounded-xl bg-[#020617]/70 hover:bg-cyan-500/20 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-300 transition-all shadow-lg"
              title="Previous Celestial Body ([)"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <div className="text-[9px] font-mono text-center text-slate-500 tracking-wider">NAV</div>
            <button
              onClick={() => handleCycleBody(1)}
              className="p-2 rounded-xl bg-[#020617]/70 hover:bg-cyan-500/20 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-300 transition-all shadow-lg"
              title="Next Celestial Body (])"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Celestial Body Quick-Selector Tray (Drawer) */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-[96vw] max-w-5xl pointer-events-auto flex flex-col items-center">
            {/* Toggle Drawer Button */}
            <button
              onClick={() => {
                audioEngine.playClickSound();
                setIsCatalogOpen(prev => !prev);
              }}
              className="mb-2 px-3.5 py-1.5 rounded-full bg-[#020617]/85 hover:bg-[#09152e] backdrop-blur-xl border border-white/[0.16] shadow-xl text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2 group ring-1 ring-white/10"
            >
              <Orbit className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform" />
              <span className="font-semibold tracking-wide">
                Celestial Directory ({bodies.length} Bodies)
              </span>
              <span className="text-[10px] text-cyan-400 px-1.5 py-0.2 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                {isCatalogOpen ? 'Hide ▲' : 'Browse ▼'}
              </span>
            </button>

            {/* Expandable Tray Content */}
            {isCatalogOpen && (
              <div className="w-full rounded-3xl bg-[#020617]/90 backdrop-blur-2xl border border-white/[0.16] shadow-2xl p-3 flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-200 ring-1 ring-white/10">
                {/* Filter Pills */}
                <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    {(
                      [
                        { id: 'all', label: `All (${bodies.length})` },
                        { id: 'planets', label: 'Planets (8)' },
                        { id: 'dwarf_planets', label: 'Dwarf Planets (5)' },
                        { id: 'moons', label: 'Major Moons (9)' },
                        { id: 'star', label: 'Host Sun (1)' },
                      ] as const
                    ).map(f => (
                      <button
                        key={f.id}
                        onClick={() => {
                          audioEngine.playClickSound();
                          setCatalogFilter(f.id);
                        }}
                        className={`px-2.5 py-1 rounded-xl text-xs font-medium tracking-wide transition-all ${
                          catalogFilter === f.id
                            ? 'bg-cyan-500/25 border border-cyan-400/60 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                            : 'bg-white/5 border border-transparent text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  {selectedBody && (
                    <button
                      onClick={() => {
                        audioEngine.playClickSound(500);
                        onSelectBody(null);
                      }}
                      className="px-2 py-0.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 text-[10px] font-mono transition-all shrink-0 flex items-center gap-1"
                    >
                      <X className="w-3 h-3" />
                      <span>Deselect ({selectedBody.name})</span>
                    </button>
                  )}
                </div>

                {/* Horizontal Scroll of Celestial Body Cards */}
                <div className="flex items-center gap-2 overflow-x-auto py-1 px-0.5 no-scrollbar scroll-smooth">
                  {bodies
                    .filter(b => {
                      if (catalogFilter === 'planets') return b.type === 'Planet';
                      if (catalogFilter === 'dwarf_planets') return b.type === 'Dwarf Planet';
                      if (catalogFilter === 'moons') return b.type === 'Moon';
                      if (catalogFilter === 'star') return b.type === 'Star';
                      return true;
                    })
                    .map(b => {
                      const isSelected = selectedBody?.id === b.id;
                      return (
                        <button
                          key={b.id}
                          onClick={() => {
                            audioEngine.playClickSound();
                            onSelectBody(b);
                          }}
                          className={`shrink-0 px-3 py-2 rounded-2xl border text-left font-mono transition-all flex items-center gap-2.5 min-w-[140px] max-w-[180px] ${
                            isSelected
                              ? 'bg-cyan-500/25 border-cyan-400/90 text-white shadow-[0_0_16px_rgba(6,182,212,0.5)] ring-1 ring-cyan-400'
                              : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white'
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                            style={{
                              backgroundColor: b.color,
                              boxShadow: `0 0 8px ${b.color}`,
                            }}
                          />
                          <div className="truncate">
                            <div className="text-xs font-bold truncate tracking-wide">{b.name}</div>
                            <div className="text-[9px] text-slate-400 truncate">
                              {b.type === 'Moon'
                                ? `Moon of ${b.parentBody ? b.parentBody.charAt(0).toUpperCase() + b.parentBody.slice(1) : ''}`
                                : b.type === 'Dwarf Planet'
                                ? 'Dwarf Planet'
                                : b.type === 'Star'
                                ? 'Host Star'
                                : ['mercury', 'venus', 'earth', 'mars'].includes(b.id)
                                ? 'Terrestrial'
                                : ['jupiter', 'saturn'].includes(b.id)
                                ? 'Gas Giant'
                                : 'Ice Giant'}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Floating Control Dock */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-2 rounded-3xl bg-[#020617]/85 backdrop-blur-2xl border border-white/[0.14] shadow-2xl shadow-black/90 pointer-events-auto max-w-[96vw] overflow-x-auto no-scrollbar ring-1 ring-white/10">
            {/* Time Control Group */}
            <div className="flex items-center gap-1 bg-white/[0.05] p-1 rounded-2xl border border-white/[0.08]">
              {/* Play / Pause */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  onSetTimeScale(timeScale === 0 ? 1 : 0);
                }}
                className={`p-2 rounded-xl transition-colors ${
                  timeScale === 0
                    ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
                title={timeScale === 0 ? 'Resume Orbit (Space)' : 'Pause Orbit (Space)'}
              >
                {timeScale === 0 ? <Play className="w-4 h-4 fill-amber-300" /> : <Pause className="w-4 h-4" />}
              </button>

              {/* Multipliers */}
              {[0.1, 0.5, 1, 2, 5, 25, 100].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    audioEngine.playClickSound(700 + s * 3);
                    onSetTimeScale(s);
                  }}
                  className={`px-2 py-1 rounded-xl text-xs font-mono font-semibold transition-all ${
                    timeScale === s
                      ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/60 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  title={`${s}x orbital speed`}
                >
                  {s}x
                </button>
              ))}
            </div>

            <div className="w-[1px] h-6 bg-white/10 mx-0.5" />

            {/* Camera View Angle Menu */}
            <div className="relative">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setShowCameraMenu(prev => !prev);
                }}
                className={`p-2 rounded-2xl border transition-all flex items-center gap-1.5 ${
                  showCameraMenu
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="Camera Perspective Presets"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline text-xs font-mono">View</span>
              </button>

              {/* Camera Menu Popover */}
              {showCameraMenu && (
                <div className="absolute bottom-12 left-0 z-30 w-48 rounded-2xl bg-[#020617]/95 backdrop-blur-2xl border border-white/16 shadow-2xl p-2 flex flex-col gap-1 text-xs font-mono ring-1 ring-white/10 animate-in fade-in slide-in-from-bottom-2 duration-150">
                  <div className="px-2 py-1 text-[10px] text-slate-400 font-semibold tracking-wider uppercase border-b border-white/10">
                    Camera Perspectives
                  </div>
                  <button
                    onClick={() => handleCameraPreset('angle')}
                    className="w-full px-2.5 py-1.5 rounded-xl hover:bg-white/10 text-left text-slate-300 hover:text-white flex items-center justify-between"
                  >
                    <span>📐 45° Orbital Angle</span>
                  </button>
                  <button
                    onClick={() => handleCameraPreset('top')}
                    className="w-full px-2.5 py-1.5 rounded-xl hover:bg-white/10 text-left text-slate-300 hover:text-white flex items-center justify-between"
                  >
                    <span>🧭 Top-Down Ecliptic</span>
                  </button>
                  <button
                    onClick={() => handleCameraPreset('inner')}
                    className="w-full px-2.5 py-1.5 rounded-xl hover:bg-white/10 text-left text-slate-300 hover:text-white flex items-center justify-between"
                  >
                    <span>☀️ Inner Planets</span>
                  </button>
                  <button
                    onClick={() => handleCameraPreset('outer')}
                    className="w-full px-2.5 py-1.5 rounded-xl hover:bg-white/10 text-left text-slate-300 hover:text-white flex items-center justify-between"
                  >
                    <span>🪐 Outer Gas Giants</span>
                  </button>
                  <div className="border-t border-white/10 my-0.5" />
                  <button
                    onClick={() => handleCameraPreset('reset')}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-left text-cyan-300 flex items-center justify-between"
                  >
                    <span>🔄 Reset Camera (R)</span>
                  </button>
                </div>
              )}
            </div>

            {/* Display Layer Toggles */}
            <div className="flex items-center gap-1">
              {/* Labels Toggle */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  onToggleLabels();
                }}
                className={`p-2 rounded-2xl border transition-all ${
                  showLabels
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
                title="Toggle Planet Labels (L)"
              >
                <Eye className="w-4 h-4" />
              </button>

              {/* Orbits Toggle */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  onToggleOrbits();
                }}
                className={`p-2 rounded-2xl border transition-all ${
                  showOrbits
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
                title="Toggle Orbital Paths (O)"
              >
                <Orbit className="w-4 h-4" />
              </button>

              {/* Asteroid Belts Toggle */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setShowBelts(prev => !prev);
                }}
                className={`p-2 rounded-2xl border transition-all ${
                  showBelts
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
                title="Toggle Asteroid & Kuiper Belts (B)"
              >
                <Disc className="w-4 h-4" />
              </button>

              {/* Scale Mode Toggle */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  onToggleScaleMode();
                }}
                className={`hidden sm:flex px-2.5 py-1.5 rounded-2xl border text-xs font-mono transition-all items-center gap-1.5 ${
                  scaleMode === 'presentation'
                    ? 'bg-purple-500/20 border-purple-400/50 text-purple-300'
                    : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                }`}
                title="Toggle Astronomical Scale Mode"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{scaleMode === 'presentation' ? 'Spaced' : 'Realistic'}</span>
              </button>
            </div>

            <div className="w-[1px] h-6 bg-white/10 mx-0.5" />

            {/* Utility & Zen Tools */}
            <div className="flex items-center gap-1">
              {/* Zen Mode Button */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setIsZenMode(true);
                }}
                className="p-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                title="Enter Zen Mode: Full Screen 3D (H)"
              >
                <EyeOff className="w-4 h-4" />
              </button>

              {/* Reset View Button */}
              <button
                onClick={() => handleCameraPreset('reset')}
                className="p-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                title="Reset Camera Position (R)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Keyboard Shortcuts Help */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setShowHelpModal(true);
                }}
                className="p-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-cyan-300 transition-all"
                title="Keyboard Shortcuts & Navigation Tips (?)"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Keyboard Shortcuts Help Modal */}
          {showHelpModal && (
            <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
              <div className="w-full max-w-md rounded-3xl bg-[#020617]/95 border border-white/16 shadow-2xl p-6 flex flex-col gap-4 font-mono text-xs ring-1 ring-white/10">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Compass className="w-4 h-4" />
                    <span className="font-bold text-sm text-white">Solar System 3D Controls</span>
                  </div>
                  <button
                    onClick={() => setShowHelpModal(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2.5 text-slate-300">
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Play / Pause simulation</span>
                    <kbd className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">Space</kbd>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Deselect planet / close dossier</span>
                    <kbd className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">Esc</kbd>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Cycle previous / next body</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">[</kbd>
                      <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">]</kbd>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Toggle planet labels</span>
                    <kbd className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">L</kbd>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Toggle orbital traces</span>
                    <kbd className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">O</kbd>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Toggle asteroid & Kuiper belts</span>
                    <kbd className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">B</kbd>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Reset camera perspective</span>
                    <kbd className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">R</kbd>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Toggle Zen mode (hide HUD)</span>
                    <kbd className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 border border-white/20">H</kbd>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Orbit camera / Zoom</span>
                    <span className="text-slate-400">Left Drag / Mouse Wheel</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setShowHelpModal(false)}
                    className="px-4 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 font-semibold transition-all"
                  >
                    Got It
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
