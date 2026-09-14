import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CosmicPhenomenon } from '../types';
import { COSMIC_PHENOMENA } from '../data/phenomenaData';
import { audioEngine } from '../utils/audioEngine';
import { createGlowParticleTexture, createRealisticPlanetTexture } from '../utils/planetTextures';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, 
  Flame, Sparkles, Zap, Compass, Info,
  Maximize2, Minimize2, Subtitles, X,
  Radio, Disc, ArrowLeft, Camera
} from 'lucide-react';

interface PhenomenaSimulatorsProps {
  onBackToSolarSystem?: () => void;
}

export const PhenomenaSimulators: React.FC<PhenomenaSimulatorsProps> = ({ onBackToSolarSystem }) => {
  const [selectedPhenomenon, setSelectedPhenomenon] = useState<CosmicPhenomenon>(COSMIC_PHENOMENA[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [timelineProgress, setTimelineProgress] = useState<number>(0); // 0 to 1
  const [isNarrating, setIsNarrating] = useState<boolean>(true);
  const [speechRate, setSpeechRate] = useState<number>(0.94);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.5); // Cinematic pacing
  const [isDirectorCam, setIsDirectorCam] = useState<boolean>(true);
  const [cameraPerspective, setCameraPerspective] = useState<'director' | 'orbit' | 'closeup' | 'polar'>('director');
  const [isCinemaMode, setIsCinemaMode] = useState<boolean>(false);
  const [showDossierDrawer, setShowDossierDrawer] = useState<boolean>(false);
  const [showSubtitles, setShowSubtitles] = useState<boolean>(true);
  const [currentSpokenText, setCurrentSpokenText] = useState<string>('');
  const [spokenCharIndex, setSpokenCharIndex] = useState<number>(0);

  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animFrameIdRef = useRef<number>(0);
  const userInteractingRef = useRef<boolean>(false);
  const userInteractingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastUiUpdateRef = useRef<number>(0);

  // Synchronization refs between audio and animation loop
  const selectedPhenomenonRef = useRef<CosmicPhenomenon>(selectedPhenomenon);
  selectedPhenomenonRef.current = selectedPhenomenon;
  const isPlayingRef = useRef<boolean>(isPlaying);
  isPlayingRef.current = isPlaying;
  const isNarratingRef = useRef<boolean>(isNarrating);
  isNarratingRef.current = isNarrating;
  const speechRateRef = useRef<number>(speechRate);
  speechRateRef.current = speechRate;
  const playbackSpeedRef = useRef<number>(playbackSpeed);
  playbackSpeedRef.current = playbackSpeed;
  const isDirectorCamRef = useRef<boolean>(isDirectorCam);
  isDirectorCamRef.current = isDirectorCam;
  const cameraPerspectiveRef = useRef<'director' | 'orbit' | 'closeup' | 'polar'>(cameraPerspective);
  cameraPerspectiveRef.current = cameraPerspective;
  const timelineProgressRef = useRef<number>(timelineProgress);
  timelineProgressRef.current = timelineProgress;

  // Stage timing tracking
  const isMountedRef = useRef<boolean>(true);
  const currentStageIdxRef = useRef<number>(0);
  const stageStartTimeRef = useRef<number>(0);
  const stageEstimatedDurationRef = useRef<number>(10);
  const stageCharProgressRef = useRef<number>(0);
  const stageHoldingPauseRef = useRef<boolean>(false);
  const stageHoldTimerRef = useRef<NodeJS.Timeout | null>(null);
  const stageLoopTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearAllNarrationTimers = () => {
    if (stageHoldTimerRef.current) {
      clearTimeout(stageHoldTimerRef.current);
      stageHoldTimerRef.current = null;
    }
    if (stageLoopTimerRef.current) {
      clearTimeout(stageLoopTimerRef.current);
      stageLoopTimerRef.current = null;
    }
    stageHoldingPauseRef.current = false;
  };

  // Dynamic simulation mesh refs
  const simGroupRef = useRef<THREE.Group | null>(null);
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const primaryMeshRef = useRef<THREE.Mesh | null>(null);
  const secondaryMeshRef = useRef<THREE.Mesh | null>(null);
  const auxiliaryMeshesRef = useRef<THREE.Object3D[]>([]);

  // Keyboard shortcuts: 'C' toggles cinema mode, Space toggles play/pause, 'M' toggles voice
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'c' || e.key === 'C') {
        setIsCinemaMode((prev) => !prev);
      } else if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isNarrating]);

  // Derived currentStageIdx directly from timeline progress
  const numStages = selectedPhenomenon?.stages?.length || 1;
  const currentStageIdx = Math.min(Math.max(0, Math.floor(timelineProgress * numStages)), numStages - 1);
  currentStageIdxRef.current = currentStageIdx;

  const activeStage = selectedPhenomenon.stages[currentStageIdx] || selectedPhenomenon.stages[0];

  // Helper to start narrating a specific stage with audio-timeline lockstep
  const startStageNarration = (stageIndex: number, targetPhenomenon?: CosmicPhenomenon) => {
    if (!isMountedRef.current || !isNarratingRef.current) return;
    const phenom = targetPhenomenon || selectedPhenomenonRef.current;
    if (!phenom || !phenom.stages) return;
    const stage = phenom.stages[stageIndex];
    if (!stage) return;

    clearAllNarrationTimers();
    audioEngine.stopSpeech();

    const script = stage.narrativeScript || `${stage.title}. ${stage.description}`;
    setCurrentSpokenText(script);
    setSpokenCharIndex(0);
    stageCharProgressRef.current = 0;

    const estDuration = audioEngine.estimateDuration(script, speechRateRef.current);
    stageEstimatedDurationRef.current = estDuration;
    stageStartTimeRef.current = performance.now();

    // Set timeline to start of this stage
    const stageStartProgress = stageIndex / numStages;
    timelineProgressRef.current = stageStartProgress;
    setTimelineProgress(stageStartProgress);

    audioEngine.speak(
      script,
      () => {
        // Stage narration completed naturally
        if (!isMountedRef.current || !isNarratingRef.current || selectedPhenomenonRef.current.id !== phenom.id) return;
        stageCharProgressRef.current = 1.0;
        stageHoldingPauseRef.current = true;

        // Snap to exact end of stage
        const stageEndProgress = (stageIndex + 1) / numStages;
        timelineProgressRef.current = stageEndProgress;
        setTimelineProgress(stageEndProgress);

        // Pause for 1.4s cinematic appreciation before advancing to next stage
        stageHoldTimerRef.current = setTimeout(() => {
          if (!isMountedRef.current || !isNarratingRef.current || selectedPhenomenonRef.current.id !== phenom.id) return;
          stageHoldingPauseRef.current = false;
          if (stageIndex + 1 < numStages) {
            startStageNarration(stageIndex + 1, phenom);
          } else {
            // Final stage finished! Hold progress
            timelineProgressRef.current = 1.0;
            setTimelineProgress(1.0);
            stageLoopTimerRef.current = setTimeout(() => {
              if (isMountedRef.current && isNarratingRef.current && selectedPhenomenonRef.current.id === phenom.id) {
                // Loop back to stage 0 for continuous experience
                startStageNarration(0, phenom);
              }
            }, 2500);
          }
        }, 1400);
      },
      speechRateRef.current,
      (charIndex, charLength) => {
        if (!isMountedRef.current || !isNarratingRef.current || selectedPhenomenonRef.current.id !== phenom.id) return;
        setSpokenCharIndex(charIndex);
        const charProg = Math.min(1.0, (charIndex + charLength) / Math.max(1, script.length));
        stageCharProgressRef.current = charProg;
      }
    );
  };

  // Toggle narration master switch
  const handleToggleNarration = () => {
    if (isNarrating) {
      clearAllNarrationTimers();
      audioEngine.stopSpeech();
      setIsNarrating(false);
      isNarratingRef.current = false;
    } else {
      setIsNarrating(true);
      isNarratingRef.current = true;
      setIsPlaying(true);
      isPlayingRef.current = true;
      startStageNarration(currentStageIdx, selectedPhenomenonRef.current);
    }
  };

  // Play / Pause toggle with speech synchronization
  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      isPlayingRef.current = false;
      if (isNarratingRef.current) {
        audioEngine.pauseSpeech();
      }
    } else {
      setIsPlaying(true);
      isPlayingRef.current = true;
      if (isNarratingRef.current) {
        audioEngine.resumeSpeech();
      }
    }
  };

  // Jump to specific stage
  const handleSelectStage = (idx: number) => {
    audioEngine.playClickSound();
    const targetProgress = (idx + 0.001) / numStages;
    timelineProgressRef.current = targetProgress;
    setTimelineProgress(targetProgress);
    currentStageIdxRef.current = idx;
    if (isNarratingRef.current) {
      startStageNarration(idx, selectedPhenomenonRef.current);
    } else {
      setCurrentSpokenText(selectedPhenomenon.stages[idx]?.narrativeScript || '');
    }
  };

  // Timeline scrubber change
  const handleScrubberChange = (val: number) => {
    timelineProgressRef.current = val;
    setTimelineProgress(val);
    const newStageIdx = Math.min(Math.max(0, Math.floor(val * numStages)), numStages - 1);
    if (newStageIdx !== currentStageIdxRef.current) {
      currentStageIdxRef.current = newStageIdx;
      if (isNarratingRef.current) {
        startStageNarration(newStageIdx, selectedPhenomenonRef.current);
      } else {
        setCurrentSpokenText(selectedPhenomenon.stages[newStageIdx]?.narrativeScript || '');
      }
    }
  };

  // Switch phenomenon cleanly with instant narration reset
  const handleSelectPhenomenon = (item: CosmicPhenomenon) => {
    audioEngine.playClickSound();
    clearAllNarrationTimers();
    audioEngine.stopSpeech();
    selectedPhenomenonRef.current = item;
    setSelectedPhenomenon(item);
    timelineProgressRef.current = 0;
    setTimelineProgress(0);
    currentStageIdxRef.current = 0;
    setSpokenCharIndex(0);
    setCurrentSpokenText(item.stages[0]?.narrativeScript || '');
    
    if (isNarratingRef.current) {
      startStageNarration(0, item);
    }
  };

  // Auto-start synchronized documentary narration on mount (voice on by default) and cleanup speech on unmount
  useEffect(() => {
    isMountedRef.current = true;
    const initialNarrationTimer = setTimeout(() => {
      if (isMountedRef.current && isNarratingRef.current) {
        startStageNarration(0, selectedPhenomenonRef.current);
      }
    }, 450);

    return () => {
      isMountedRef.current = false;
      isNarratingRef.current = false;
      clearTimeout(initialNarrationTimer);
      clearAllNarrationTimers();
      audioEngine.stopSpeech();
    };
  }, []);

  // Three.js Scene & Master Render Loop Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x02040a);

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 2000);
    camera.position.set(0, 25, 75);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 600;
    controls.minDistance = 3;
    controlsRef.current = controls;

    controls.addEventListener('start', () => {
      userInteractingRef.current = true;
      if (userInteractingTimerRef.current) clearTimeout(userInteractingTimerRef.current);
    });
    controls.addEventListener('end', () => {
      userInteractingTimerRef.current = setTimeout(() => {
        userInteractingRef.current = false;
      }, 3500);
    });

    // Deep Space Starfield
    const starCount = 3500;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 350 + Math.random() * 600;

      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);

      const colorType = Math.random();
      if (colorType < 0.65) {
        starColors[i * 3] = 0.9 + Math.random() * 0.1;
        starColors[i * 3 + 1] = 0.95;
        starColors[i * 3 + 2] = 1.0;
      } else if (colorType < 0.85) {
        starColors[i * 3] = 1.0;
        starColors[i * 3 + 1] = 0.75 + Math.random() * 0.2;
        starColors[i * 3 + 2] = 0.4;
      } else {
        starColors[i * 3] = 0.6 + Math.random() * 0.2;
        starColors[i * 3 + 1] = 0.8;
        starColors[i * 3 + 2] = 1.0;
      }
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Ambient and Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(50, 40, 50);
    scene.add(dirLight1);
    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.6);
    dirLight2.position.set(-50, -20, -50);
    scene.add(dirLight2);

    // Root Group for dynamic simulation meshes
    const simGroup = new THREE.Group();
    scene.add(simGroup);
    simGroupRef.current = simGroup;

    // Resize Observer
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

    let lastTime = performance.now();

    // ==========================================
    // 60 FPS RENDER & ANIMATION LOOP
    // ==========================================
    const renderLoop = () => {
      animFrameIdRef.current = requestAnimationFrame(renderLoop);
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Master Timeline Clock & Narration Synchronizer
      if (isPlayingRef.current) {
        if (isNarratingRef.current) {
          // Guided Documentary Narration Mode: timeline moves in precise lockstep with voice
          if (!stageHoldingPauseRef.current) {
            const elapsedSec = (now - stageStartTimeRef.current) / 1000;
            const timeProg = Math.min(0.98, elapsedSec / Math.max(1, stageEstimatedDurationRef.current));
            const stageProg = Math.max(stageCharProgressRef.current, timeProg);

            const sIdx = currentStageIdxRef.current;
            const stageBase = sIdx / numStages;
            const stageSpan = 1 / numStages;
            const nextProgress = Math.min(stageBase + stageProg * stageSpan, (sIdx + 0.995) / numStages);

            timelineProgressRef.current = nextProgress;
            if (now - lastUiUpdateRef.current > 33) {
              lastUiUpdateRef.current = now;
              setTimelineProgress(nextProgress);
            }
          }
        } else {
          // Free Play Mode: advances at chosen playback speed
          const step = delta * (0.05 * playbackSpeedRef.current);
          const next = timelineProgressRef.current + step;
          const clamped = next >= 1 ? 0 : next;
          timelineProgressRef.current = clamped;

          if (now - lastUiUpdateRef.current > 33) {
            lastUiUpdateRef.current = now;
            setTimelineProgress(clamped);
          }
        }
      }

      // Normalized master progress t (0 to 1)
      const t = timelineProgressRef.current;
      const currentPhenom = selectedPhenomenonRef.current;
      const type = currentPhenom?.visualType || 'big_bang';

      // Normalized stage index (0, 1, 2) and intra-stage progress st (0 to 1)
      const s = Math.min(numStages - 1, Math.floor(t * numStages));
      const st = Math.min(1.0, Math.max(0, (t * numStages) - s));

      // ----------------------------------------------------
      // PHENOMENON 1: THE BIG BANG (Primordial Physics & Cosmic Web)
      // ----------------------------------------------------
      if (type === 'big_bang') {
        if (primaryMeshRef.current) {
          if (s === 0) {
            // Quantum singularity: pulsating point of infinite density
            const jitter = Math.sin(now * 0.05) * 0.08 + Math.cos(now * 0.08) * 0.04;
            const sz = Math.max(0.18, 0.45 + jitter);
            primaryMeshRef.current.scale.set(sz, sz, sz);
            primaryMeshRef.current.position.set(0, 0, 0);
            primaryMeshRef.current.visible = true;
            (primaryMeshRef.current.material as THREE.MeshBasicMaterial).color.setRGB(1.0, 1.0, 1.0);
          } else if (s === 1) {
            // Blinding inflationary flash at early stage, then dispersing
            if (st < 0.4) {
              const fT = st / 0.4;
              const sz = 0.4 + Math.pow(fT, 0.35) * 28.0;
              primaryMeshRef.current.scale.set(sz, sz, sz);
              primaryMeshRef.current.visible = true;
              const fade = Math.max(0, 1.0 - fT * 1.1);
              (primaryMeshRef.current.material as THREE.MeshBasicMaterial).color.setRGB(fade, fade * 0.9, fade * 0.7);
            } else {
              primaryMeshRef.current.visible = false;
            }
          } else {
            primaryMeshRef.current.visible = false;
          }
        }

        // Inflation shockwave shell
        if (secondaryMeshRef.current) {
          if (s === 1) {
            secondaryMeshRef.current.visible = true;
            const shockScale = 1.0 + Math.pow(st, 0.5) * 55.0;
            secondaryMeshRef.current.scale.set(shockScale, shockScale, shockScale);
            const shockAlpha = (1.0 - st) * 0.85;
            (secondaryMeshRef.current.material as THREE.MeshBasicMaterial).opacity = shockAlpha;
          } else {
            secondaryMeshRef.current.visible = false;
          }
        }

        // Particle system (Singularity -> Inflation -> Cosmic Web)
        if (particleSystemRef.current) {
          const pSystem = particleSystemRef.current;
          const posAttr = pSystem.geometry.attributes.position as THREE.BufferAttribute;
          const colAttr = pSystem.geometry.attributes.color as THREE.BufferAttribute;
          const velAttr = pSystem.geometry.attributes.velocity as THREE.BufferAttribute;

          if (posAttr && velAttr && colAttr) {
            const count = posAttr.count;
            const mat = pSystem.material as THREE.PointsMaterial;

            if (s === 0) {
              // Stage 0: Quantum fluctuations inside singularity core
              mat.opacity = 0.95;
              mat.size = 2.4;
              const qSpread = 0.5 + Math.sin(now * 0.02) * 0.2;
              for (let i = 0; i < count; i++) {
                const vx = velAttr.getX(i);
                const vy = velAttr.getY(i);
                const vz = velAttr.getZ(i);
                posAttr.setXYZ(i, vx * 0.015 * qSpread, vy * 0.015 * qSpread, vz * 0.015 * qSpread);
                colAttr.setXYZ(i, 1.0, 1.0, 1.0);
              }
              posAttr.needsUpdate = true;
              colAttr.needsUpdate = true;
            } else if (s === 1) {
              // Stage 1: Explosive Cosmic Inflation & Quark-Gluon Plasma
              mat.opacity = 1.0;
              mat.size = 3.6;
              const expansion = Math.pow(st, 0.65) * 1.8;
              for (let i = 0; i < count; i++) {
                const vx = velAttr.getX(i);
                const vy = velAttr.getY(i);
                const vz = velAttr.getZ(i);
                posAttr.setXYZ(i, vx * expansion, vy * expansion, vz * expansion);

                // Cooling plasma: white-blue -> orange/amber
                const cool = Math.max(0, 1 - st);
                colAttr.setXYZ(i, 1.0, 0.6 + cool * 0.4, 0.2 + cool * 0.8);
              }
              posAttr.needsUpdate = true;
              colAttr.needsUpdate = true;
            } else {
              // Stage 2: Cosmic Web & First Galaxies
              mat.opacity = 0.88;
              mat.size = 2.2;
              const webT = Math.min(1.0, st * 1.2);
              for (let i = 0; i < count; i++) {
                const vx = velAttr.getX(i);
                const vy = velAttr.getY(i);
                const vz = velAttr.getZ(i);
                const baseX = vx * 1.8;
                const baseY = vy * 1.8;
                const baseZ = vz * 1.8;

                // Filament node convergence along dark matter bridges
                const nodeX = baseX * 0.65 + Math.sin(baseY * 0.1) * 6.0;
                const nodeY = baseY * 0.65 + Math.cos(baseZ * 0.1) * 6.0;
                const nodeZ = baseZ * 0.65 + Math.sin(baseX * 0.1) * 6.0;

                posAttr.setXYZ(
                  i,
                  baseX + (nodeX - baseX) * webT,
                  baseY + (nodeY - baseY) * webT,
                  baseZ + (nodeZ - baseZ) * webT
                );

                // Cosmic web colors: brilliant cyan nodes and golden galaxies
                if (i % 6 === 0) {
                  colAttr.setXYZ(i, 0.38, 0.85, 1.0); // Starburst cluster
                } else if (i % 6 === 1) {
                  colAttr.setXYZ(i, 1.0, 0.85, 0.35); // Early galaxy core
                } else {
                  colAttr.setXYZ(i, 0.5, 0.6, 0.95); // Dark matter filament haze
                }
              }
              posAttr.needsUpdate = true;
              colAttr.needsUpdate = true;
            }
          }
        }

      // ----------------------------------------------------
      // PHENOMENON 2: DEATH OF THE SUN (Red Giant & Planetary Nebula)
      // ----------------------------------------------------
      } else if (type === 'sun_death') {
        const sun = primaryMeshRef.current;
        const nebula = secondaryMeshRef.current;
        const planets = auxiliaryMeshesRef.current;

        if (sun) {
          if (s === 0) {
            // Stage 0: Sun swelling from solar yellow to early red giant
            const swell = 3.0 + st * 9.5; // Radius 3 to 12.5
            sun.scale.set(swell / 3, swell / 3, swell / 3);
            sun.visible = true;

            const mat = sun.material as THREE.MeshStandardMaterial;
            mat.roughness = 0.35;
            mat.emissive = new THREE.Color(0xfbbf24).lerp(new THREE.Color(0xf97316), st);
            mat.emissiveIntensity = 2.0 - st * 0.5;
            sun.rotation.y += delta * 0.15;
          } else if (s === 1) {
            // Stage 1: Peak Red Giant (Radius reaches 22), engulfing inner planets
            const swell = 12.5 + st * 10.5; // Up to radius 23 (reaches Earth orbit)
            sun.scale.set(swell / 3, swell / 3, swell / 3);
            sun.visible = true;

            const mat = sun.material as THREE.MeshStandardMaterial;
            mat.emissive = new THREE.Color(0xf97316).lerp(new THREE.Color(0xdc2626), st * 0.8);
            mat.emissiveIntensity = 1.6 + Math.sin(now * 0.003) * 0.2; // Convective pulse
            sun.rotation.y += delta * 0.08;
          } else {
            // Stage 2: Sun envelope ejected; core contracts into a dense White Dwarf
            sun.visible = true;
            const wdScale = Math.max(0.12, 1.8 * (1.0 - Math.min(1.0, st * 1.5)));
            sun.scale.set(wdScale, wdScale, wdScale);

            const mat = sun.material as THREE.MeshStandardMaterial;
            mat.color.setHex(0xffffff);
            mat.emissive.setHex(0xe0f2fe);
            mat.emissiveIntensity = 4.0; // Blinding white dwarf radiance
          }
        }

        // Planetary Nebula Shell (Expands dramatically in Stage 2)
        if (nebula) {
          if (s === 2) {
            nebula.visible = true;
            const nebScale = 1.0 + Math.pow(st, 0.6) * 14.0;
            nebula.scale.set(nebScale, nebScale * 0.85, nebScale);
            nebula.rotation.y += delta * 0.04;
            nebula.rotation.z += delta * 0.02;

            const nebMat = nebula.material as THREE.MeshBasicMaterial;
            nebMat.opacity = Math.sin(st * Math.PI) * 0.8;
          } else {
            nebula.visible = false;
          }
        }

        // Orbiting inner planets (Mercury, Venus, Earth)
        if (planets && planets.length >= 3) {
          const mercury = planets[0];
          const venus = planets[1];
          const earth = planets[2];

          const mercuryR = 7.5;
          const venusR = 14.0;
          const earthR = 21.0;

          const mAngle = now * 0.0015;
          const vAngle = now * 0.0009;
          const eAngle = now * 0.0005;

          mercury.position.set(Math.cos(mAngle) * mercuryR, 0, Math.sin(mAngle) * mercuryR);
          venus.position.set(Math.cos(vAngle) * venusR, 0, Math.sin(vAngle) * venusR);
          earth.position.set(Math.cos(eAngle) * earthR, 0, Math.sin(eAngle) * earthR);

          mercury.rotation.y += delta;
          venus.rotation.y += delta * 0.8;
          earth.rotation.y += delta * 1.2;

          // Thermal destruction as the Sun expands
          if (s === 0) {
            mercury.visible = true;
            venus.visible = true;
            earth.visible = true;
            // Mercury begins boiling near end of stage 0
            if (st > 0.6) {
              const boil = 1 - (st - 0.6) / 0.4;
              mercury.scale.set(boil, boil, boil);
            }
          } else if (s === 1) {
            mercury.visible = false; // Mercury engulfed
            const vBoil = Math.max(0, 1 - st * 1.5);
            venus.scale.set(vBoil, vBoil, vBoil);
            venus.visible = vBoil > 0.05;

            const eBoil = Math.max(0, 1 - st * 0.8);
            earth.scale.set(eBoil, eBoil, eBoil);
            earth.visible = eBoil > 0.1;
          } else {
            mercury.visible = false;
            venus.visible = false;
            earth.visible = false;
          }
        }

      // ----------------------------------------------------
      // PHENOMENON 3: CORE-COLLAPSE SUPERNOVA
      // ----------------------------------------------------
      } else if (type === 'supernova') {
        const star = primaryMeshRef.current;
        const pSystem = particleSystemRef.current;
        const pulsarGroup = auxiliaryMeshesRef.current[0];

        if (star) {
          if (s === 0) {
            // Stage 0: Massive blue supergiant instability and core collapse
            pulsarGroup && (pulsarGroup.visible = false);
            star.visible = true;
            const pulse = 1.0 + Math.sin(now * 0.01) * 0.08;
            star.scale.set(pulse, pulse, pulse);

            // Violent collapse in final 20% of stage 0
            if (st > 0.8) {
              const collapseT = (st - 0.8) / 0.2;
              const sz = Math.max(0.05, 1.0 - collapseT * 0.95);
              star.scale.set(sz, sz, sz);
              (star.material as THREE.MeshStandardMaterial).emissive.setHex(0xffffff);
              (star.material as THREE.MeshStandardMaterial).emissiveIntensity = 8.0;
            } else {
              (star.material as THREE.MeshStandardMaterial).emissive.setHex(0x38bdf8);
              (star.material as THREE.MeshStandardMaterial).emissiveIntensity = 2.0;
            }
          } else if (s === 1) {
            // Stage 1: Shockwave Detonation & Supernova Flash
            star.visible = false;
            pulsarGroup && (pulsarGroup.visible = false);
          } else {
            // Stage 2: Central Pulsar / Neutron Star emerges
            star.visible = true;
            star.scale.set(0.08, 0.08, 0.08); // Tiny ultra-dense core
            (star.material as THREE.MeshStandardMaterial).emissive.setHex(0x38bdf8);
            (star.material as THREE.MeshStandardMaterial).emissiveIntensity = 6.0;

            if (pulsarGroup) {
              pulsarGroup.visible = true;
              pulsarGroup.rotation.y += delta * 12.0; // Ultra-fast millisecond rotation
              pulsarGroup.rotation.z = 0.35; // Oblique magnetic axis
            }
          }
        }

        // Supernova Blast Wave & Stardust Ejecta
        if (pSystem) {
          const posAttr = pSystem.geometry.attributes.position as THREE.BufferAttribute;
          const mat = pSystem.material as THREE.PointsMaterial;

          if (s === 0) {
            mat.opacity = 0;
            pSystem.visible = false;
          } else if (s === 1) {
            // Detonation flash expanding at 10% speed of light
            pSystem.visible = true;
            mat.opacity = Math.min(1.0, st * 2.0);
            mat.size = 4.2;
            const blastRadius = 1.0 + Math.pow(st, 0.55) * 4.5;
            pSystem.scale.set(blastRadius, blastRadius, blastRadius);
            pSystem.rotation.y += delta * 0.2;
          } else {
            // Stage 2: Filamentary Crab Nebula expansion with heavy element forge
            pSystem.visible = true;
            mat.opacity = 0.85;
            mat.size = 3.5;
            const exp = 5.5 + st * 4.5;
            pSystem.scale.set(exp, exp, exp);
            pSystem.rotation.y += delta * 0.1;
            pSystem.rotation.z += delta * 0.05;
          }
        }

      // ----------------------------------------------------
      // PHENOMENON 4: MILKOMEDA GALACTIC COLLISION
      // ----------------------------------------------------
      } else if (type === 'milkyway_andromeda') {
        if (particleSystemRef.current) {
          const pSystem = particleSystemRef.current;
          const posAttr = pSystem.geometry.attributes.position as THREE.BufferAttribute;
          const origPosAttr = pSystem.geometry.attributes.origPosition as THREE.BufferAttribute;

          if (posAttr && origPosAttr) {
            const count = posAttr.count;
            const half = count / 2;

            // Smooth galactic rotation and tidal trajectories
            if (s === 0) {
              // Stage 0: The Approach
              const approachDist = 32.0 * (1.0 - st * 0.55); // 32 down to 14
              for (let i = 0; i < count; i++) {
                const ox = origPosAttr.getX(i);
                const oy = origPosAttr.getY(i);
                const oz = origPosAttr.getZ(i);

                if (i < half) {
                  // Milky Way
                  const offset = approachDist - 32.0;
                  posAttr.setXYZ(i, ox + offset, oy, oz);
                } else {
                  // Andromeda
                  const offset = -(approachDist - 32.0);
                  posAttr.setXYZ(i, ox + offset, oy, oz);
                }
              }
              posAttr.needsUpdate = true;
              pSystem.rotation.y = now * 0.0003;
            } else if (s === 1) {
              // Stage 1: Tidal Disruption & Starburst Bridges
              const passT = st;
              for (let i = 0; i < count; i++) {
                const ox = origPosAttr.getX(i);
                const oy = origPosAttr.getY(i);
                const oz = origPosAttr.getZ(i);

                const tidalFactor = Math.sin(passT * Math.PI) * 16.0;
                const spreadY = (Math.sin(ox * 0.1) + Math.cos(oz * 0.1)) * tidalFactor * 0.4;

                if (i < half) {
                  const tidalX = ox + passT * 26.0 + Math.sin(oz * 0.08) * tidalFactor;
                  posAttr.setXYZ(i, tidalX, oy + spreadY, oz);
                } else {
                  const tidalX = ox - passT * 26.0 - Math.sin(oz * 0.08) * tidalFactor;
                  posAttr.setXYZ(i, tidalX, oy - spreadY, oz);
                }
              }
              posAttr.needsUpdate = true;
              pSystem.rotation.y = now * 0.0006;
            } else {
              // Stage 2: Merged Giant Elliptical (Milkomeda)
              const mergeT = Math.min(1.0, st * 1.3);
              for (let i = 0; i < count; i++) {
                const ox = origPosAttr.getX(i);
                const oy = origPosAttr.getY(i);
                const oz = origPosAttr.getZ(i);

                // Relax into a smooth, luminous triaxial ellipsoid
                const r = Math.sqrt(ox * ox + oz * oz);
                const theta = Math.atan2(oz, ox) + mergeT * 2.0;
                const newR = r * (1.0 - mergeT * 0.35);

                const finalX = Math.cos(theta) * newR * 0.85;
                const finalY = (oy + (Math.sin(i) * 3.5)) * (1.0 + mergeT * 1.5);
                const finalZ = Math.sin(theta) * newR * 0.7;

                posAttr.setXYZ(i, finalX, finalY, finalZ);
              }
              posAttr.needsUpdate = true;
              pSystem.rotation.y = now * 0.0002;
            }
          }
        }

      // ----------------------------------------------------
      // PHENOMENON 5: BLACK HOLE & GRAVITATIONAL LENSING
      // ----------------------------------------------------
      } else if (type === 'black_hole_lensing') {
        const bhMesh = primaryMeshRef.current;
        const diskMesh = secondaryMeshRef.current;
        const aux = auxiliaryMeshesRef.current;

        // Black Hole Horizon
        if (bhMesh) {
          bhMesh.visible = true;
          // Accretion gravitational shadow
          bhMesh.rotation.y += delta * 0.5;
        }

        // Accretion disk & Lensed Arches
        if (diskMesh) {
          diskMesh.rotation.z -= delta * 1.8; // Relativistic spin
        }

        // Polar Jets & Spaghettification Actor
        if (aux && aux.length >= 2) {
          const jetGroup = aux[0];
          const streamMesh = aux[1];

          if (jetGroup) {
            // Relativistic synchrotron jets pulsating along spin axis
            const jetPulse = 1.0 + Math.sin(now * 0.008) * 0.15;
            jetGroup.scale.set(jetPulse, 1.0 + Math.sin(now * 0.012) * 0.25, jetPulse);
          }

          if (streamMesh) {
            if (s === 2) {
              // Stage 2: Star spaghettified into a thin, curved tidal ribbon
              streamMesh.visible = true;
              const spT = st;
              const spiralRadius = 18.0 * (1.0 - spT * 0.78);
              const spiralAngle = spT * Math.PI * 6.0;
              streamMesh.position.set(
                Math.cos(spiralAngle) * spiralRadius,
                Math.sin(spT * Math.PI) * 2.5,
                Math.sin(spiralAngle) * spiralRadius
              );
              // Stretched into an elongated needle
              const stretch = 1.0 + spT * 6.0;
              streamMesh.scale.set(0.25 / stretch, stretch, 0.25 / stretch);
              streamMesh.rotation.y = spiralAngle;
            } else {
              streamMesh.visible = false;
            }
          }
        }
      }

      // ----------------------------------------------------
      // AUTOMATED DIRECTOR CAMERA ORBIT
      // ----------------------------------------------------
      if (isDirectorCamRef.current && !userInteractingRef.current) {
        const cam = cameraRef.current;
        const ctrl = controlsRef.current;
        if (cam && ctrl) {
          let targetAngle = now * 0.0003;
          let targetDist = 72;
          let targetElev = 24;
          let lookTarget = new THREE.Vector3(0, 0, 0);

          if (cameraPerspectiveRef.current === 'closeup') {
            targetDist = 28;
            targetElev = 8;
          } else if (cameraPerspectiveRef.current === 'polar') {
            targetDist = 55;
            targetElev = 55;
          } else if (cameraPerspectiveRef.current === 'orbit') {
            targetDist = 85;
            targetElev = 30;
            targetAngle = now * 0.0006;
          }

          const camX = lookTarget.x + Math.sin(targetAngle) * targetDist;
          const camZ = lookTarget.z + Math.cos(targetAngle) * targetDist;
          const camY = lookTarget.y + targetElev;

          cam.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.035);
          ctrl.target.lerp(lookTarget, 0.05);
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      resizeObserver.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // ==========================================
  // RE-BUILD 3D SIMULATION ACTORS ON PHENOMENON CHANGE
  // ==========================================
  useEffect(() => {
    const simGroup = simGroupRef.current;
    if (!simGroup) return;

    // Clean up old children
    while (simGroup.children.length > 0) {
      const obj = simGroup.children[0];
      simGroup.remove(obj);
      if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    }
    auxiliaryMeshesRef.current = [];

    const type = selectedPhenomenon.visualType;

    if (type === 'big_bang') {
      // 16,000 Particle Primordial Expansion System
      const count = 16000;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);

        const isHighEnergy = Math.random() < 0.28;
        const speed = isHighEnergy ? 42 + Math.random() * 32 : 16 + Math.random() * 26;

        velocities[i * 3] = speed * Math.sin(phi) * Math.cos(theta);
        velocities[i * 3 + 1] = speed * Math.sin(phi) * Math.sin(theta);
        velocities[i * 3 + 2] = speed * Math.cos(phi);

        pos[i * 3] = 0;
        pos[i * 3 + 1] = 0;
        pos[i * 3 + 2] = 0;

        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 1.0;
        colors[i * 3 + 2] = 1.0;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

      const mat = new THREE.PointsMaterial({
        size: 3.2,
        map: createGlowParticleTexture(),
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const pSystem = new THREE.Points(geo, mat);
      particleSystemRef.current = pSystem;
      simGroup.add(pSystem);

      // Primordial Singularity Core
      const coreGeo = new THREE.SphereGeometry(0.45, 32, 32);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      primaryMeshRef.current = coreMesh;
      simGroup.add(coreMesh);

      // Inflation Shockwave Shell
      const shockGeo = new THREE.SphereGeometry(1, 48, 48);
      const shockMat = new THREE.MeshBasicMaterial({
        color: 0x93c5fd,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      });
      const shockMesh = new THREE.Mesh(shockGeo, shockMat);
      secondaryMeshRef.current = shockMesh;
      simGroup.add(shockMesh);

    } else if (type === 'sun_death') {
      // Swelling Red Giant
      const sunGeo = new THREE.SphereGeometry(3, 64, 64);
      const sunTex = createRealisticPlanetTexture('sun');
      const sunMat = new THREE.MeshStandardMaterial({
        map: sunTex,
        roughness: 0.35,
        metalness: 0.1,
        emissive: new THREE.Color(0xfbbf24),
        emissiveIntensity: 2.0,
      });
      const sunMesh = new THREE.Mesh(sunGeo, sunMat);
      primaryMeshRef.current = sunMesh;
      simGroup.add(sunMesh);

      // Expanding Planetary Nebula Shell (Helix/Ring Nebula style)
      const nebGeo = new THREE.SphereGeometry(3.5, 64, 64);
      const nebMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      });
      const nebMesh = new THREE.Mesh(nebGeo, nebMat);
      secondaryMeshRef.current = nebMesh;
      simGroup.add(nebMesh);

      // Inner planets: Mercury, Venus, Earth with realistic textures
      const planets: THREE.Mesh[] = [];
      const planetConfigs = [
        { id: 'mercury', radius: 0.55 },
        { id: 'venus', radius: 0.8 },
        { id: 'earth', radius: 0.95 },
      ];
      planetConfigs.forEach(({ id, radius }) => {
        const pGeo = new THREE.SphereGeometry(radius, 32, 32);
        const pMat = new THREE.MeshStandardMaterial({ 
          map: createRealisticPlanetTexture(id),
          roughness: 0.65,
        });
        const pMesh = new THREE.Mesh(pGeo, pMat);
        simGroup.add(pMesh);
        planets.push(pMesh);
      });
      auxiliaryMeshesRef.current = planets;

    } else if (type === 'supernova') {
      // Massive Blue Supergiant
      const starGeo = new THREE.SphereGeometry(4.8, 64, 64);
      const starMat = new THREE.MeshStandardMaterial({
        color: 0x60a5fa,
        emissive: 0x38bdf8,
        emissiveIntensity: 2.2,
      });
      const starMesh = new THREE.Mesh(starGeo, starMat);
      primaryMeshRef.current = starMesh;
      simGroup.add(starMesh);

      // Detonation shock & heavy element stardust particles
      const count = 12000;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 4.2 + Math.random() * 2.8;

        pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i * 3 + 2] = r * Math.cos(phi);

        // Heavy element emission lines: Gold (amber), Iron (crimson), Oxygen (cyan)
        const elem = Math.random();
        if (elem < 0.35) {
          colors[i * 3] = 1.0;
          colors[i * 3 + 1] = 0.85; // Gold / Platinum r-process
          colors[i * 3 + 2] = 0.2;
        } else if (elem < 0.68) {
          colors[i * 3] = 0.95;
          colors[i * 3 + 1] = 0.25; // Iron-56 decay
          colors[i * 3 + 2] = 0.3;
        } else {
          colors[i * 3] = 0.2;
          colors[i * 3 + 1] = 0.85; // Oxygen / Silicon
          colors[i * 3 + 2] = 1.0;
        }
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: 3.8,
        map: createGlowParticleTexture(),
        vertexColors: true,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const pSystem = new THREE.Points(geo, mat);
      particleSystemRef.current = pSystem;
      simGroup.add(pSystem);

      // Pulsar relativistic synchrotron lighthouse beams
      const beamGeo = new THREE.ConeGeometry(3.5, 50, 32, 1, true);
      beamGeo.translate(0, 25, 0);
      const beamMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const topBeam = new THREE.Mesh(beamGeo, beamMat);
      const bottomBeam = new THREE.Mesh(beamGeo, beamMat);
      bottomBeam.rotation.x = Math.PI;

      const pulsarGroup = new THREE.Group();
      pulsarGroup.add(topBeam);
      pulsarGroup.add(bottomBeam);
      pulsarGroup.visible = false;
      simGroup.add(pulsarGroup);
      auxiliaryMeshesRef.current = [pulsarGroup];

    } else if (type === 'milkyway_andromeda') {
      // 9,000 N-Body Spiral Stars partitioned into Milky Way & Andromeda
      const countPerGal = 4500;
      const totalCount = countPerGal * 2;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(totalCount * 3);
      const origPos = new Float32Array(totalCount * 3);
      const colors = new Float32Array(totalCount * 3);

      // Galaxy 1: Milky Way (Golden bulge, blue spiral arms)
      for (let i = 0; i < countPerGal; i++) {
        const armAngle = (i % 2) * Math.PI;
        const dist = Math.pow(Math.random(), 2) * 26 + 2;
        const theta = armAngle + dist * 0.35 + (Math.random() - 0.5) * 0.5;
        const y = (Math.random() - 0.5) * 2.2 * (1 - dist / 30);

        const x = -32 + dist * Math.cos(theta);
        const z = dist * Math.sin(theta);

        pos[i * 3] = x;
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = z;

        origPos[i * 3] = x;
        origPos[i * 3 + 1] = y;
        origPos[i * 3 + 2] = z;

        colors[i * 3] = dist < 6 ? 1.0 : 0.45;
        colors[i * 3 + 1] = dist < 6 ? 0.9 : 0.8;
        colors[i * 3 + 2] = dist < 6 ? 0.5 : 1.0;
      }

      // Galaxy 2: Andromeda (Brighter sapphire core, inclined arms)
      for (let i = countPerGal; i < totalCount; i++) {
        const armAngle = (i % 2) * Math.PI;
        const dist = Math.pow(Math.random(), 2) * 32 + 2;
        const theta = armAngle + dist * 0.3 + (Math.random() - 0.5) * 0.5;
        const y = (Math.random() - 0.5) * 3 * (1 - dist / 34);

        const x = 32 + dist * Math.cos(theta) * 0.85;
        const yPos = 6 + y + dist * 0.25;
        const z = dist * Math.sin(theta) * 0.9;

        pos[i * 3] = x;
        pos[i * 3 + 1] = yPos;
        pos[i * 3 + 2] = z;

        origPos[i * 3] = x;
        origPos[i * 3 + 1] = yPos;
        origPos[i * 3 + 2] = z;

        colors[i * 3] = dist < 7 ? 0.9 : 0.7;
        colors[i * 3 + 1] = dist < 7 ? 0.6 : 0.4;
        colors[i * 3 + 2] = 1.0;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('origPosition', new THREE.BufferAttribute(origPos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: 3.0,
        map: createGlowParticleTexture(),
        vertexColors: true,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const pSystem = new THREE.Points(geo, mat);
      particleSystemRef.current = pSystem;
      simGroup.add(pSystem);

    } else if (type === 'black_hole_lensing') {
      // Event Horizon (Absolute Shadow)
      const bhGeo = new THREE.SphereGeometry(3.5, 48, 48);
      const bhMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const bhMesh = new THREE.Mesh(bhGeo, bhMat);
      primaryMeshRef.current = bhMesh;
      simGroup.add(bhMesh);

      // Glowing Photon Sphere Ring (1.5 Rs = 5.25)
      const psGeo = new THREE.RingGeometry(3.55, 3.85, 64);
      const psMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95,
      });
      const psMesh = new THREE.Mesh(psGeo, psMat);
      psMesh.rotation.x = Math.PI / 2.3;
      simGroup.add(psMesh);

      // Relativistic Doppler-Beamed Accretion Disk
      const diskGeo = new THREE.RingGeometry(4.2, 16.0, 128);
      const dCanvas = document.createElement('canvas');
      dCanvas.width = 512;
      dCanvas.height = 32;
      const dCtx = dCanvas.getContext('2d')!;
      const dGrad = dCtx.createLinearGradient(0, 0, 512, 0);
      dGrad.addColorStop(0, 'rgba(255, 255, 255, 0.98)'); // Approaching super-bright
      dGrad.addColorStop(0.28, 'rgba(56, 189, 248, 0.9)'); // Blueshifted
      dGrad.addColorStop(0.7, 'rgba(245, 158, 11, 0.75)'); // Relativistic warm
      dGrad.addColorStop(1, 'rgba(185, 28, 28, 0.25)'); // Receding redshifted
      dCtx.fillStyle = dGrad;
      dCtx.fillRect(0, 0, 512, 32);

      const dTex = new THREE.CanvasTexture(dCanvas);
      const diskMat = new THREE.MeshBasicMaterial({
        map: dTex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.94,
        blending: THREE.AdditiveBlending,
      });
      const diskMesh = new THREE.Mesh(diskGeo, diskMat);
      diskMesh.rotation.x = Math.PI / 2.5;
      secondaryMeshRef.current = diskMesh;
      simGroup.add(diskMesh);

      // Gravitational Lensing Arches (Light bending over top and bottom)
      const archGeo = new THREE.RingGeometry(4.2, 11.5, 64, 1, 0, Math.PI);
      const archMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      const topArch = new THREE.Mesh(archGeo, archMat);
      topArch.rotation.x = 0;
      topArch.position.y = 0.8;
      simGroup.add(topArch);

      const bottomArch = new THREE.Mesh(archGeo, archMat);
      bottomArch.rotation.x = Math.PI;
      bottomArch.position.y = -0.8;
      simGroup.add(bottomArch);

      // Relativistic Magnetic Plasma Jets
      const jetGeo = new THREE.CylinderGeometry(0.1, 4.5, 65, 32);
      jetGeo.translate(0, 32.5, 0);
      const jetMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const jetTop = new THREE.Mesh(jetGeo, jetMat);
      const jetBottom = new THREE.Mesh(jetGeo, jetMat);
      jetBottom.rotation.x = Math.PI;

      const jetGroup = new THREE.Group();
      jetGroup.add(jetTop);
      jetGroup.add(jetBottom);
      jetGroup.rotation.x = Math.PI / 2.5 - Math.PI / 2;
      simGroup.add(jetGroup);

      // Infalling Spaghettified Streamer Mesh
      const streamGeo = new THREE.CylinderGeometry(0.3, 0.8, 8.0, 16);
      const streamMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const streamMesh = new THREE.Mesh(streamGeo, streamMat);
      streamMesh.visible = false;
      simGroup.add(streamMesh);

      auxiliaryMeshesRef.current = [jetGroup, streamMesh];
    }
  }, [selectedPhenomenon]);

  // Live Karaoke text calculation
  const formattedSubtitle = useMemo(() => {
    const fullText = currentSpokenText || activeStage.narrativeScript || activeStage.description;
    if (!isNarrating || spokenCharIndex <= 0) {
      return { spoken: '', upcoming: fullText };
    }
    const safeIdx = Math.min(spokenCharIndex, fullText.length);
    return {
      spoken: fullText.slice(0, safeIdx),
      upcoming: fullText.slice(safeIdx),
    };
  }, [currentSpokenText, spokenCharIndex, isNarrating, activeStage]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-slate-950">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* SLEEK TOP FLOATING PHENOMENA BAR (Compact & Unobtrusive) */}
      {!isCinemaMode && (
        <div className="fixed top-18 sm:top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center justify-center max-w-[calc(100vw-24px)]">
          <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-950/85 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 ring-1 ring-white/5 overflow-x-auto no-scrollbar max-w-full">
            {/* Return to Solar System button if available */}
            {onBackToSolarSystem && (
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  audioEngine.stopSpeech();
                  onBackToSolarSystem();
                }}
                className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1 shrink-0 border border-white/5"
                title="Return to 3D Solar System"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Solar System</span>
              </button>
            )}

            {/* Phenomenon Category Switcher Tabs */}
            {COSMIC_PHENOMENA.map((item) => {
              const isSelected = selectedPhenomenon.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectPhenomenon(item)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-600/40 via-indigo-600/40 to-cyan-500/40 border border-cyan-400/60 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.visualType === 'big_bang' && <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                  {item.visualType === 'sun_death' && <Flame className="w-3.5 h-3.5 text-orange-400 shrink-0" />}
                  {item.visualType === 'supernova' && <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                  {item.visualType === 'milkyway_andromeda' && <Compass className="w-3.5 h-3.5 text-purple-400 shrink-0" />}
                  {item.visualType === 'black_hole_lensing' && <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />}
                  <span>{item.title}</span>
                </button>
              );
            })}

            {/* Cinema Fullscreen Animation Toggle */}
            <button
              onClick={() => {
                audioEngine.playClickSound();
                setIsCinemaMode(true);
              }}
              className="p-1.5 px-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-300 text-xs font-mono transition-all flex items-center gap-1 shrink-0"
              title="Enter Cinema Mode: Minimalist UI for unobstructed cosmic viewing (Shortcut: C)"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Cinema (C)</span>
            </button>
          </div>
        </div>
      )}

      {/* FLOATING LOWER-THIRD CINEMATIC SUBTITLE (Centered, Non-Obstructive) */}
      {showSubtitles && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none max-w-2xl w-[calc(100vw-32px)] text-center animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="pointer-events-auto inline-block px-5 py-2.5 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/90 max-w-full">
            <div className="flex items-center justify-between gap-3 text-[10px] font-mono border-b border-white/10 pb-1 mb-1">
              <span className="text-cyan-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Radio className={`w-3 h-3 ${isNarrating ? 'text-cyan-400 animate-pulse' : 'text-slate-500'}`} />
                {isNarrating ? 'Narrated Documentary' : 'Documentary Subtitle'}
              </span>
              <span className="text-slate-400 font-medium truncate">
                {activeStage.phase} // {activeStage.timeline}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans text-left sm:text-center">
              {isNarrating && formattedSubtitle.spoken ? (
                <>
                  <span className="text-cyan-300 font-medium bg-cyan-950/60 px-1 py-0.5 rounded">
                    {formattedSubtitle.spoken}
                  </span>
                  <span className="text-slate-400">
                    {formattedSubtitle.upcoming}
                  </span>
                </>
              ) : (
                <span>{currentSpokenText || activeStage.narrativeScript || activeStage.description}</span>
              )}
            </p>
          </div>
        </div>
      )}

      {/* CINEMA MODE: Minimalist Floating Bar */}
      {isCinemaMode ? (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full max-w-xl px-4 flex justify-center">
          <div className="pointer-events-auto w-full rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/20 px-4 py-2.5 shadow-2xl shadow-black/90 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <button
              onClick={() => {
                audioEngine.playClickSound();
                togglePlayPause();
              }}
              className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 transition-colors shrink-0"
              title={isPlaying ? 'Pause (Space)' : 'Resume (Space)'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                audioEngine.playClickSound();
                handleScrubberChange(0);
                setIsPlaying(true);
              }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
              title="Restart from Phase 1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Compact Scrubber */}
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-white font-bold truncate max-w-[200px]">
                  {activeStage.title}
                </span>
                <span className="text-cyan-300 font-semibold shrink-0">
                  Phase {currentStageIdx + 1}/{numStages}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.001"
                value={timelineProgress}
                onChange={(e) => handleScrubberChange(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
            </div>

            {/* Subtitle Toggle in Cinema */}
            <button
              onClick={() => setShowSubtitles(!showSubtitles)}
              className={`p-2 rounded-xl border transition-colors shrink-0 ${
                showSubtitles ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
              title="Toggle Subtitles"
            >
              <Subtitles className="w-4 h-4" />
            </button>

            {/* Voice Toggle */}
            <button
              onClick={handleToggleNarration}
              className={`p-2 rounded-xl border transition-all shrink-0 ${
                isNarrating
                  ? 'bg-cyan-500/30 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-pulse'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
              title={isNarrating ? 'Mute Narrator' : 'Start Synchronized Narration'}
            >
              {isNarrating ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Exit Cinema Mode */}
            <button
              onClick={() => {
                audioEngine.playClickSound();
                setIsCinemaMode(false);
              }}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono transition-colors flex items-center gap-1.5 shrink-0"
              title="Exit Cinema Mode (C)"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Exit (C)</span>
            </button>
          </div>
        </div>
      ) : (
        /* STANDARD MODE: Slim, Elegant Floating Media Bar (Height ~48px, Zero Obstruction) */
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full max-w-3xl px-4 flex justify-center">
          <div className="pointer-events-auto w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-slate-950/85 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 flex items-center gap-2 sm:gap-3 ring-1 ring-white/5">
            {/* Play/Pause Button */}
            <button
              onClick={() => {
                audioEngine.playClickSound();
                togglePlayPause();
              }}
              className={`p-2 rounded-xl border font-bold transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono ${
                isPlaying
                  ? 'bg-amber-500/20 border-amber-400/40 text-amber-300'
                  : 'bg-cyan-500/30 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
              }`}
              title={isPlaying ? 'Pause Simulation (Space)' : 'Play Simulation (Space)'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>

            {/* Reset t=0 */}
            <button
              onClick={() => {
                audioEngine.playClickSound();
                handleScrubberChange(0);
                setIsPlaying(true);
              }}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all shrink-0"
              title="Restart from Phase 1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Phase Pills & Scrubber Slider */}
            <div className="flex-1 flex flex-col gap-1 min-w-0">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-cyan-400 font-bold">Phase {currentStageIdx + 1}/{numStages}:</span>
                  <span className="text-white font-medium truncate">{activeStage.title}</span>
                </div>
                <span className="text-slate-400 font-mono text-[10px] shrink-0 ml-1 hidden sm:inline">
                  {(timelineProgress * 100).toFixed(0)}%
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={timelineProgress}
                  onChange={(e) => handleScrubberChange(parseFloat(e.target.value))}
                  className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                />

                {/* Quick Phase Jump Buttons */}
                <div className="flex items-center gap-1 shrink-0">
                  {selectedPhenomenon.stages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectStage(idx)}
                      className={`w-5 h-5 rounded-lg text-[10px] font-mono flex items-center justify-center transition-all border ${
                        currentStageIdx === idx
                          ? 'bg-cyan-500/30 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                      title={`Jump to Phase ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtitle Toggle */}
            <button
              onClick={() => setShowSubtitles(!showSubtitles)}
              className={`p-2 rounded-xl border text-[11px] font-mono flex items-center gap-1 transition-colors shrink-0 ${
                showSubtitles ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
              title="Toggle Captions / Subtitles"
            >
              <Subtitles className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">CC</span>
            </button>

            {/* Master Documentary Narration Voice Switch */}
            <button
              onClick={handleToggleNarration}
              className={`p-2 sm:px-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-mono font-bold shrink-0 ${
                isNarrating
                  ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-pulse'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              title={isNarrating ? 'Mute Narrator' : 'Start Audio-Synced Documentary Narration'}
            >
              {isNarrating ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isNarrating ? 'Voice ON' : 'Voice OFF'}</span>
            </button>

            {/* Camera View Mode Toggle */}
            <button
              onClick={() => {
                audioEngine.playClickSound();
                setIsDirectorCam(!isDirectorCam);
              }}
              className={`p-2 rounded-xl border transition-all text-xs font-mono shrink-0 flex items-center gap-1 ${
                isDirectorCam
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                  : 'bg-purple-500/20 border-purple-400/50 text-purple-300'
              }`}
              title={isDirectorCam ? 'Director Track Camera (Click to enable Free Orbit)' : 'Free Orbit Camera (Click to enable Director Track)'}
            >
              <Camera className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{isDirectorCam ? 'Track' : 'Free'}</span>
            </button>

            {/* Science Dossier Side Drawer Toggle */}
            <button
              onClick={() => {
                audioEngine.playClickSound();
                setShowDossierDrawer(!showDossierDrawer);
              }}
              className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1 transition-all shrink-0 ${
                showDossierDrawer
                  ? 'bg-purple-500/30 border-purple-400 text-purple-200'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
              title="Toggle Scientific Breakdown Dossier Drawer"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Dossier</span>
            </button>
          </div>
        </div>
      )}

      {/* SLIDE-OVER ASTROPHYSICAL DOSSIER SIDE DRAWER (Leaves Center Stage Open) */}
      {showDossierDrawer && !isCinemaMode && (
        <div className="fixed top-24 right-4 z-30 w-80 max-w-[calc(100vw-32px)] max-h-[calc(100vh-140px)] overflow-y-auto rounded-3xl bg-slate-950/90 backdrop-blur-2xl border border-white/15 p-4 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-right-4 duration-200 ring-1 ring-white/10">
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <Disc className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                Astrophysical Dossier
              </h3>
            </div>
            <button
              onClick={() => setShowDossierDrawer(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {/* Title & Era */}
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                {selectedPhenomenon.era}
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">{selectedPhenomenon.title}</h4>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">{selectedPhenomenon.tagline}</p>
            </div>

            {/* Active Stage Breakdown */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-300">
                <span className="font-bold uppercase">Phase {currentStageIdx + 1}</span>
                <span>{activeStage.timeline}</span>
              </div>
              <h5 className="text-xs font-bold text-white">{activeStage.title}</h5>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{activeStage.description}</p>
            </div>

            {/* Astrophysical Process */}
            <div className="p-3 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-1">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                Astrophysical Mechanism
              </span>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                {activeStage.astrophysicalProcess}
              </p>
            </div>

            {/* Energy Yield & Temperature */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400 block">TEMPERATURE</span>
                <span className="text-amber-400 font-bold block mt-0.5 truncate">{activeStage.temperature}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400 block">ENERGY YIELD</span>
                <span className="text-cyan-300 font-bold block mt-0.5 truncate">{selectedPhenomenon.energyOutput.split(' ')[0]}</span>
              </div>
            </div>

            {/* Bizarre Facts */}
            {selectedPhenomenon.bizarreFacts && selectedPhenomenon.bizarreFacts.length > 0 && (
              <div className="p-3 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-1">
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider block">
                  Cosmic Fact
                </span>
                <p className="text-[11px] text-slate-300 font-sans leading-relaxed italic">
                  "{selectedPhenomenon.bizarreFacts[0]}"
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
