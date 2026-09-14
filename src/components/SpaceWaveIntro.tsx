import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { NovaNexusLogo } from './NovaNexusLogo';
import { audioEngine } from '../utils/audioEngine';

interface SpaceWaveIntroProps {
  onComplete: () => void;
}

export const SpaceWaveIntro: React.FC<SpaceWaveIntroProps> = ({ onComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Play ethereal celestial chime on mount
    try {
      audioEngine.playCosmicChime();
    } catch {}

    // Auto-transition to home screen after 2.6 seconds
    const autoTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    if (!mountRef.current) return () => clearTimeout(autoTimer);
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.001);

    const camera = new THREE.PerspectiveCamera(65, w / h, 1, 3500);
    camera.position.set(0, 220, 600);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setClearColor(0x020617, 1);
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.backgroundColor = '#020617';
    
    container.appendChild(renderer.domElement);
    // Immediately paint background on initial frame so no white flash can occur on reload
    renderer.render(scene, camera);

    // --- 1. Dynamic Space Wave Particle Grid (Noticeable, Fluid, High-Amplitude Motion) ---
    const gridX = 130;
    const gridZ = 130;
    const numParticles = gridX * gridZ;
    const wavePositions = new Float32Array(numParticles * 3);
    const waveColors = new Float32Array(numParticles * 3);

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorIndigo = new THREE.Color(0x6366f1);
    const colorPurple = new THREE.Color(0xa855f7);
    const colorPink = new THREE.Color(0xec4899);

    let idx = 0;
    for (let ix = 0; ix < gridX; ix++) {
      for (let iz = 0; iz < gridZ; iz++) {
        const u = (ix / gridX) - 0.5;
        const v = (iz / gridZ) - 0.5;
        const x = u * 2200;
        const z = v * 2200;
        const y = 0;

        wavePositions[idx * 3] = x;
        wavePositions[idx * 3 + 1] = y;
        wavePositions[idx * 3 + 2] = z;

        const dist = Math.sqrt(u * u + v * v);
        let c: THREE.Color;
        if (dist < 0.2) {
          c = colorCyan.clone().lerp(colorIndigo, dist / 0.2);
        } else if (dist < 0.4) {
          c = colorIndigo.clone().lerp(colorPurple, (dist - 0.2) / 0.2);
        } else {
          c = colorPurple.clone().lerp(colorPink, Math.min(1, (dist - 0.4) / 0.3));
        }

        waveColors[idx * 3] = c.r;
        waveColors[idx * 3 + 1] = c.g;
        waveColors[idx * 3 + 2] = c.b;
        idx++;
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    // Custom circular soft glow particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.25, 'rgba(125, 211, 252, 0.9)');
      grad.addColorStop(0.65, 'rgba(168, 85, 247, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTex = new THREE.CanvasTexture(canvas);

    const waveMat = new THREE.PointsMaterial({
      size: 5.0,
      vertexColors: true,
      map: particleTex,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const wavePoints = new THREE.Points(waveGeo, waveMat);
    scene.add(wavePoints);

    // --- 2. Flying Warp Stardust Field ---
    const starCount = 3000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 2400;
      starPositions[i * 3 + 1] = (Math.random() - 0.2) * 1400;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 2400;

      const c = Math.random() > 0.5 ? colorCyan : colorPink;
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }
    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starsMat = new THREE.PointsMaterial({
      size: 2.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const starsMesh = new THREE.Points(starsGeo, starsMat);
    scene.add(starsMesh);

    // --- 3. Ethereal Central Energy Rings ---
    const ringGeo = new THREE.TorusGeometry(130, 2.8, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    scene.add(ringMesh);

    const ringGeo2 = new THREE.TorusGeometry(100, 2.0, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 3;
    scene.add(ringMesh2);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Fluid, high-amplitude space wave particle simulation
      const pos = waveGeo.attributes.position.array as Float32Array;
      let pIdx = 0;
      for (let ix = 0; ix < gridX; ix++) {
        for (let iz = 0; iz < gridZ; iz++) {
          const u = ix / gridX;
          const v = iz / gridZ;
          const dist = Math.sqrt((u - 0.5) ** 2 + (v - 0.5) ** 2) * 14;

          // Multi-frequency wave calculation
          const y1 = Math.sin(u * 14 + elapsed * 3.8) * 45;
          const y2 = Math.cos(v * 12 + elapsed * 3.2) * 38;
          const y3 = Math.sin(dist - elapsed * 5.0) * 55;

          pos[pIdx * 3 + 1] = y1 + y2 + y3;
          pIdx++;
        }
      }
      waveGeo.attributes.position.needsUpdate = true;

      // Rotation & Flying Star motion
      starsMesh.rotation.y = elapsed * 0.12;
      starsMesh.rotation.x = elapsed * 0.06;

      ringMesh.rotation.z += 0.02;
      ringMesh.rotation.y += 0.01;
      ringMesh2.rotation.z -= 0.025;
      ringMesh2.rotation.x += 0.012;

      // Camera swoops forward towards the wave
      camera.position.z = 600 - Math.sin(Math.min(elapsed, 2.5) * 0.6) * 180;
      camera.position.y = 220 - Math.sin(Math.min(elapsed, 2.5) * 0.6) * 80;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const nw = mountRef.current.clientWidth || window.innerWidth;
      const nh = mountRef.current.clientHeight || window.innerHeight;
      if (nw > 0 && nh > 0) {
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh, false);
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(autoTimer);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      starsGeo.dispose();
      starsMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleTex.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onComplete]);

  const handleSkip = () => {
    try {
      audioEngine.playClickSound(587.33);
    } catch {}
    onComplete();
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#020617' }}
      className="fixed inset-0 z-50 bg-[#020617] text-white flex flex-col items-center justify-center p-6 overflow-hidden select-none cursor-pointer"
      onClick={handleSkip}
    >
      {/* 3D Dynamic Space Wave Canvas Container */}
      <div 
        ref={mountRef} 
        style={{ backgroundColor: '#020617' }}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full bg-[#020617]" 
      />

      {/* Layered Pinterest-style Cosmic Wave Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[70vw] h-[70vw] rounded-full bg-cyan-500/15 blur-[150px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[65vw] h-[65vw] rounded-full bg-purple-600/15 blur-[160px] animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-full bg-fuchsia-600/12 blur-[170px]" />
      </div>

      {/* Skip button at top right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-6 right-6 z-30 px-4 py-2 rounded-xl bg-slate-950/70 hover:bg-cyan-950/60 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-cyan-300 transition-all backdrop-blur-md shadow-lg flex items-center gap-2 group cursor-pointer"
      >
        <span>ENTER UNIVERSE</span>
        <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
      </button>

      {/* Central Hero Branding Reveal */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl animate-in zoom-in-95 duration-1000 pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-4"
        >
          {/* App Logo Badge */}
          <div className="relative mx-auto mb-6 flex items-center justify-center">
            <div className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-2xl animate-pulse" style={{ animationDuration: '2.5s' }} />
            <NovaNexusLogo size={108} animated={true} />
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-fuchsia-400 font-sans uppercase drop-shadow-[0_0_45px_rgba(6,182,212,0.5)]">
            NOVANEXUS
          </h1>
          <p className="mt-3 text-xs sm:text-sm font-mono tracking-[0.3em] text-cyan-400 font-semibold uppercase">
            ASTROPHYSICAL ENGINE INITIALIZING
          </p>
        </motion.div>

        {/* Dynamic Loading Wave Pulse */}
        <div className="flex items-center gap-1.5 mt-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono text-slate-300 tracking-wider">Harmonizing Space Waves (Click anywhere to skip)...</span>
        </div>
      </div>
    </motion.div>
  );
};
