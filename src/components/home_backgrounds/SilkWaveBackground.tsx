import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SilkWaveBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.0006);

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 4500);
    camera.position.set(0, 180, 560);
    camera.lookAt(0, -20, 0);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true, 
      powerPreference: 'high-performance' 
    });
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x020617, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    
    // Ensure canvas strictly fills 100% of container without letterboxing or clipping
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.backgroundColor = '#020617';
    
    container.appendChild(renderer.domElement);

    const onContextLost = (e: Event) => {
      e.preventDefault();
    };
    renderer.domElement.addEventListener('webglcontextlost', onContextLost, false);

    // =========================================================================
    // 1. DYNAMIC DUAL-SURFACE 3D FLUID SILK WAVE MESH (Continuous flowing cloth)
    // =========================================================================
    const meshW = 4000;
    const meshD = 3000;
    const segX = 90;
    const segZ = 90;
    const waveGeo = new THREE.PlaneGeometry(meshW, meshD, segX, segZ);
    waveGeo.rotateX(-Math.PI / 2); // Lay flat on XZ plane

    const vertexCount = waveGeo.attributes.position.count;
    const origPositions = waveGeo.attributes.position.clone();
    const colors = new Float32Array(vertexCount * 3);

    const cCyan = new THREE.Color(0x06b6d4);
    const cSapphire = new THREE.Color(0x3b82f6);
    const cViolet = new THREE.Color(0x8b5cf6);
    const cPink = new THREE.Color(0xd946ef);

    for (let i = 0; i < vertexCount; i++) {
      const x = origPositions.getX(i);
      const z = origPositions.getZ(i);
      const nx = x / (meshW * 0.5);
      const nz = z / (meshD * 0.5);
      const d = Math.sqrt(nx * nx + nz * nz);

      let c: THREE.Color;
      if (d < 0.35) {
        c = cCyan.clone().lerp(cSapphire, d / 0.35);
      } else if (d < 0.7) {
        c = cSapphire.clone().lerp(cViolet, (d - 0.35) / 0.35);
      } else {
        c = cViolet.clone().lerp(cPink, Math.min(1, (d - 0.7) / 0.4));
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    waveGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Sleek dark-mode wireframe lattice
    const waveMat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.position.y = -50;
    scene.add(waveMesh);

    // Subtle second depth layer
    const waveMat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending
    });
    const waveMesh2 = new THREE.Mesh(waveGeo, waveMat2);
    waveMesh2.position.set(0, -80, -30);
    scene.add(waveMesh2);

    // =========================================================================
    // 2. LUMINOUS SILK CREST PARTICLES
    // =========================================================================
    const particleCount = vertexCount;
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', waveGeo.attributes.position.clone());
    particleGeo.setAttribute('color', waveGeo.attributes.color.clone());

    // Soft radial glow particle texture (saturated cyan/violet)
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0.9)');
      grad.addColorStop(0.4, 'rgba(139, 92, 246, 0.5)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTex = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 4.5,
      vertexColors: true,
      map: particleTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const wavePoints = new THREE.Points(particleGeo, particleMat);
    wavePoints.position.y = -50;
    scene.add(wavePoints);

    // =========================================================================
    // 3. CURVING 3D NEON SILK CONTOUR RIBBONS
    // =========================================================================
    const ribbonCount = 14;
    const ribbonLines: THREE.Line[] = [];
    const ribbonPointsPerLine = 90;

    for (let r = 0; r < ribbonCount; r++) {
      const pts: THREE.Vector3[] = [];
      const zOffset = ((r / ribbonCount) - 0.5) * 2200;

      for (let i = 0; i < ribbonPointsPerLine; i++) {
        const xPos = ((i / ribbonPointsPerLine) - 0.5) * 2800;
        pts.push(new THREE.Vector3(xPos, 0, zOffset));
      }

      const rGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const rMat = new THREE.LineBasicMaterial({
        color: r % 3 === 0 ? 0x06b6d4 : (r % 3 === 1 ? 0xa855f7 : 0xec4899),
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });

      const line = new THREE.Line(rGeo, rMat);
      line.position.y = -50;
      scene.add(line);
      ribbonLines.push(line);
    }

    // =========================================================================
    // 4. FLOATING CELESTIAL STARDUST & LIGHT BEAMS
    // =========================================================================
    const dustCount = 1000;
    const dustPos = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 3200;
      dustPos[i * 3 + 1] = (Math.random() - 0.1) * 1400;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 2800;

      const c = Math.random() > 0.5 ? cCyan : cViolet;
      dustColors[i * 3] = c.r;
      dustColors[i * 3 + 1] = c.g;
      dustColors[i * 3 + 2] = c.b;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });
    const dustMesh = new THREE.Points(dustGeo, dustMat);
    scene.add(dustMesh);

    // Ambient Luminous Torus Ring
    const ringGeo = new THREE.TorusGeometry(260, 1.5, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.set(0, 70, -200);
    ringMesh.rotation.x = Math.PI / 4;
    scene.add(ringMesh);

    // =========================================================================
    // ANIMATION & INTERACTION LOOP (Calm, Smooth, Graceful Wave Undulations)
    // =========================================================================
    let frameId: number;
    const clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 180;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetCameraX = mouseX * 45;
      targetCameraY = 180 + mouseY * 25;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Fluid Smooth Wave calculation - reduced speed & amplitude for elegant cosmic motion
      const posArray = waveGeo.attributes.position.array as Float32Array;
      const partArray = particleGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < vertexCount; i++) {
        const origX = origPositions.getX(i);
        const origZ = origPositions.getZ(i);

        const u = origX / meshW;
        const v = origZ / meshD;
        const dist = Math.sqrt(u * u + v * v) * 8;

        // Smooth and steady wave undulation (calm fluid physics)
        const wave1 = Math.sin(u * 8 + elapsed * 1.1) * 45;
        const wave2 = Math.cos(v * 6 + elapsed * 0.9) * 32;
        const wave3 = Math.sin(dist - elapsed * 1.3) * 35;
        const wave4 = Math.sin((u + v) * 5 + elapsed * 0.8) * 20;

        // Subtle lateral silk sway
        const lateralDrift = Math.sin(v * 5 + elapsed * 0.7) * 35 + Math.cos(u * 4 + elapsed * 0.5) * 15;
        const depthDrift = Math.cos(u * 5 + elapsed * 0.8) * 25 + Math.sin(v * 4 + elapsed * 0.6) * 12;

        const currentY = wave1 + wave2 + wave3 + wave4;

        posArray[i * 3] = origX + lateralDrift;
        posArray[i * 3 + 1] = currentY;
        posArray[i * 3 + 2] = origZ + depthDrift;

        partArray[i * 3] = origX + lateralDrift;
        partArray[i * 3 + 1] = currentY;
        partArray[i * 3 + 2] = origZ + depthDrift;
      }

      waveGeo.attributes.position.needsUpdate = true;
      particleGeo.attributes.position.needsUpdate = true;

      // Update Ribbon Lines with matching gentle wave motion
      ribbonLines.forEach((line, rIdx) => {
        const linePos = line.geometry.attributes.position.array as Float32Array;
        const v = (rIdx / ribbonCount) - 0.5;

        for (let i = 0; i < ribbonPointsPerLine; i++) {
          const u = (i / ribbonPointsPerLine) - 0.5;
          const origX = u * 2800;
          const origZ = v * 2200;
          const dist = Math.sqrt(u * u + v * v) * 8;

          const wave1 = Math.sin(u * 8 + elapsed * 1.1) * 45;
          const wave2 = Math.cos(v * 6 + elapsed * 0.9) * 32;
          const wave3 = Math.sin(dist - elapsed * 1.3) * 35;
          const lateral = Math.sin(v * 5 + elapsed * 0.7) * 35;

          linePos[i * 3] = origX + lateral;
          linePos[i * 3 + 1] = wave1 + wave2 + wave3;
          linePos[i * 3 + 2] = origZ;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });

      // Subtle rotation for ambient stars
      dustMesh.rotation.y = elapsed * 0.03;
      dustMesh.rotation.x = elapsed * 0.015;
      ringMesh.rotation.z = elapsed * 0.06;
      ringMesh.rotation.y = elapsed * 0.04;

      // Gentle camera tracking
      camera.position.x += (targetCameraX - camera.position.x) * 0.02;
      camera.position.y += (targetCameraY - camera.position.y) * 0.02;
      camera.position.z = 560 + Math.sin(elapsed * 0.4) * 15;
      camera.lookAt(0, -20, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
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

    // Initial resize trigger
    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(frameId);
      renderer.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      waveMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTex.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ribbonLines.forEach(l => {
        l.geometry.dispose();
        (l.material as THREE.Material).dispose();
      });
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full block" />
      {/* Subtle Cosmic Aurora Orbs on deep black canvas */}
      <div className="absolute -top-[10%] -left-[10%] w-[85vw] h-[85vw] rounded-full bg-cyan-500/8 blur-[160px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[25%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-fuchsia-600/8 blur-[170px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute -bottom-[10%] left-[10%] w-[80vw] h-[80vw] rounded-full bg-indigo-600/8 blur-[150px] animate-pulse" style={{ animationDuration: '11s' }} />
    </div>
  );
};
