import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SolarSystemBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.0006);

    const camera = new THREE.PerspectiveCamera(55, w / h, 1, 4000);
    camera.position.set(0, 240, 560);
    camera.lookAt(0, -10, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x020617, 1);
    
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
    // 1. RADIANT CENTRAL SUN (Multi-Layered Coronal Plasma & Solar Prominences)
    // =========================================================================
    const sunGroup = new THREE.Group();

    // Core Solid Plasma Sphere
    const sunCoreGeo = new THREE.SphereGeometry(38, 36, 36);
    const sunCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.95,
    });
    const sunCore = new THREE.Mesh(sunCoreGeo, sunCoreMat);
    sunGroup.add(sunCore);

    // Inner Chromosphere Aura
    const chromoGeo = new THREE.SphereGeometry(44, 32, 32);
    const chromoMat = new THREE.MeshBasicMaterial({
      color: 0xff9f1c,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const chromosphere = new THREE.Mesh(chromoGeo, chromoMat);
    sunGroup.add(chromosphere);

    // Outer Photosphere Coronal Flare Rays
    const flareCount = 6;
    const flareRings: THREE.Mesh[] = [];
    for (let f = 0; f < flareCount; f++) {
      const fGeo = new THREE.TorusGeometry(48 + f * 5, 1.4, 12, 64);
      const fMat = new THREE.MeshBasicMaterial({
        color: f % 2 === 0 ? 0xff4800 : 0xffa000,
        transparent: true,
        opacity: 0.55 - f * 0.08,
        blending: THREE.AdditiveBlending
      });
      const fMesh = new THREE.Mesh(fGeo, fMat);
      fMesh.rotation.x = Math.PI / 2 + (f * Math.PI) / 6;
      fMesh.rotation.y = (f * Math.PI) / 4;
      sunGroup.add(fMesh);
      flareRings.push(fMesh);
    }

    // Solar Prominence Magnetic Arcs (curving loops erupting from Sun)
    const prominenceCurves: THREE.Line[] = [];
    for (let p = 0; p < 8; p++) {
      const pAngle = (p * Math.PI * 2) / 8;
      const r1 = 36;
      const r2 = 62;
      const curvePts = [
        new THREE.Vector3(Math.cos(pAngle) * r1, Math.sin(pAngle) * r1, 0),
        new THREE.Vector3(Math.cos(pAngle + 0.2) * r2, Math.sin(pAngle + 0.2) * r2, (Math.random() - 0.5) * 20),
        new THREE.Vector3(Math.cos(pAngle + 0.4) * r1, Math.sin(pAngle + 0.4) * r1, 0)
      ];
      const curve = new THREE.CatmullRomCurve3(curvePts);
      const pGeo = new THREE.TubeGeometry(curve, 24, 1.2, 8, false);
      const pMat = new THREE.MeshBasicMaterial({
        color: 0xff3b00,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });
      const pLine = new THREE.Mesh(pGeo, pMat);
      sunGroup.add(pLine);
    }

    scene.add(sunGroup);

    // =========================================================================
    // 2. SOLAR WIND RADIATING PARTICLES (Heliospheric Outflow)
    // =========================================================================
    const windCount = 600;
    const windGeo = new THREE.BufferGeometry();
    const windPos = new Float32Array(windCount * 3);
    const windCols = new Float32Array(windCount * 3);
    const windDirs: { dx: number; dy: number; dz: number; speed: number; dist: number }[] = [];

    const cGold = new THREE.Color(0xffb703);
    const cAmber = new THREE.Color(0xfb8500);
    const cCyan = new THREE.Color(0x38bdf8);

    for (let i = 0; i < windCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const dx = Math.cos(phi) * Math.cos(theta);
      const dy = Math.sin(phi) * 0.4;
      const dz = Math.cos(phi) * Math.sin(theta);
      const dist = 40 + Math.random() * 550;

      windPos[i * 3] = dx * dist;
      windPos[i * 3 + 1] = dy * dist;
      windPos[i * 3 + 2] = dz * dist;

      const col = Math.random() > 0.6 ? cCyan : (Math.random() > 0.5 ? cGold : cAmber);
      windCols[i * 3] = col.r;
      windCols[i * 3 + 1] = col.g;
      windCols[i * 3 + 2] = col.b;

      windDirs.push({ dx, dy, dz, speed: 1.2 + Math.random() * 2.5, dist });
    }

    windGeo.setAttribute('position', new THREE.BufferAttribute(windPos, 3));
    windGeo.setAttribute('color', new THREE.BufferAttribute(windCols, 3));
    const windMat = new THREE.PointsMaterial({
      size: 3.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const windPoints = new THREE.Points(windGeo, windMat);
    scene.add(windPoints);

    // =========================================================================
    // 3. COMPLETE 8 PLANETS WITH PHYSICAL ATTRIBUTES & MOONS
    // =========================================================================
    interface PlanetConfig {
      name: string;
      dist: number;
      size: number;
      color: number;
      speed: number;
      eccentricity?: number;
      hasRings?: boolean;
      ringInner?: number;
      ringOuter?: number;
      ringColor?: number;
      moons?: { dist: number; size: number; color: number; speed: number }[];
    }

    const planetsConfig: PlanetConfig[] = [
      { name: 'Mercury', dist: 75, size: 3.2, color: 0x94a3b8, speed: 1.6 },
      { name: 'Venus', dist: 110, size: 5.4, color: 0xf59e0b, speed: 1.2 },
      { 
        name: 'Earth', 
        dist: 160, 
        size: 6.2, 
        color: 0x06b6d4, 
        speed: 0.95,
        moons: [{ dist: 14, size: 1.6, color: 0xe2e8f0, speed: 3.5 }] // Luna
      },
      { name: 'Mars', dist: 215, size: 4.6, color: 0xf43f5e, speed: 0.75 },
      { 
        name: 'Jupiter', 
        dist: 295, 
        size: 15.5, 
        color: 0xd97706, 
        speed: 0.45,
        moons: [
          { dist: 22, size: 1.4, color: 0xfde047, speed: 4.2 }, // Io
          { dist: 27, size: 1.2, color: 0xbae6fd, speed: 3.0 }, // Europa
          { dist: 33, size: 1.8, color: 0xcbd5e1, speed: 2.1 }, // Ganymede
          { dist: 39, size: 1.5, color: 0x94a3b8, speed: 1.4 }  // Callisto
        ]
      },
      { 
        name: 'Saturn', 
        dist: 385, 
        size: 12.5, 
        color: 0xfbbf24, 
        speed: 0.32,
        hasRings: true,
        ringInner: 16,
        ringOuter: 28,
        ringColor: 0xfde68a,
        moons: [{ dist: 34, size: 1.8, color: 0xf59e0b, speed: 2.2 }] // Titan
      },
      { 
        name: 'Uranus', 
        dist: 465, 
        size: 8.5, 
        color: 0x38bdf8, 
        speed: 0.22,
        hasRings: true,
        ringInner: 10.5,
        ringOuter: 14.5,
        ringColor: 0x7dd3fc
      },
      { name: 'Neptune', dist: 535, size: 8.0, color: 0x3b82f6, speed: 0.16 }
    ];

    interface ActivePlanetMesh {
      group: THREE.Group;
      body: THREE.Mesh;
      cfg: PlanetConfig;
      angle: number;
      orbitLine: THREE.Line;
      moonMeshes: { mesh: THREE.Mesh; dist: number; speed: number; angle: number }[];
    }

    const activePlanets: ActivePlanetMesh[] = [];

    planetsConfig.forEach((pCfg, idx) => {
      // Orbital Track Elliptical Curve
      const curve = new THREE.EllipseCurve(0, 0, pCfg.dist, pCfg.dist * 0.96, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(120);
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(p.x, 0, p.y)));
      const orbitMat = new THREE.LineBasicMaterial({
        color: pCfg.color,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending
      });
      const orbitLine = new THREE.Line(orbitGeo, orbitMat);
      orbitLine.rotation.x = Math.PI / 2;
      scene.add(orbitLine);

      // Planet Parent Group
      const pGroup = new THREE.Group();

      // Planet Solid Mesh
      const pGeo = new THREE.SphereGeometry(pCfg.size, 24, 24);
      const pMat = new THREE.MeshBasicMaterial({
        color: pCfg.color,
        wireframe: false,
      });
      const pBody = new THREE.Mesh(pGeo, pMat);
      pGroup.add(pBody);

      // Atmospheric/Glow Halo
      const haloGeo = new THREE.SphereGeometry(pCfg.size * 1.18, 16, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: pCfg.color,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      pGroup.add(new THREE.Mesh(haloGeo, haloMat));

      // Planetary Rings (Saturn / Uranus)
      if (pCfg.hasRings && pCfg.ringInner && pCfg.ringOuter) {
        const ringGeo = new THREE.RingGeometry(pCfg.ringInner, pCfg.ringOuter, 48);
        const ringMat = new THREE.MeshBasicMaterial({
          color: pCfg.ringColor || pCfg.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.65,
          blending: THREE.AdditiveBlending
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = pCfg.name === 'Uranus' ? Math.PI / 1.8 : Math.PI / 3;
        pGroup.add(ringMesh);
      }

      // Orbiting Moons
      const moonMeshes: { mesh: THREE.Mesh; dist: number; speed: number; angle: number }[] = [];
      if (pCfg.moons) {
        pCfg.moons.forEach((mCfg, mIdx) => {
          const mGeo = new THREE.SphereGeometry(mCfg.size, 12, 12);
          const mMat = new THREE.MeshBasicMaterial({ color: mCfg.color });
          const mMesh = new THREE.Mesh(mGeo, mMat);
          pGroup.add(mMesh);
          moonMeshes.push({
            mesh: mMesh,
            dist: mCfg.dist,
            speed: mCfg.speed,
            angle: mIdx * 1.5
          });
        });
      }

      scene.add(pGroup);

      activePlanets.push({
        group: pGroup,
        body: pBody,
        cfg: pCfg,
        angle: (idx * Math.PI) / 4 + Math.random(),
        orbitLine,
        moonMeshes
      });
    });

    // =========================================================================
    // 4. MAIN ASTEROID BELT (Mars-Jupiter Gap) & JUPITER TROJANS
    // =========================================================================
    const asteroidCount = 1400;
    const astGeo = new THREE.BufferGeometry();
    const astPos = new Float32Array(asteroidCount * 3);
    const astCols = new Float32Array(asteroidCount * 3);

    for (let i = 0; i < asteroidCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Main belt radii: 240 - 275
      const rad = 245 + (Math.random() - 0.5) * 35;
      const height = (Math.random() - 0.5) * 22;

      astPos[i * 3] = Math.cos(angle) * rad;
      astPos[i * 3 + 1] = height;
      astPos[i * 3 + 2] = Math.sin(angle) * rad;

      // Asteroid Rocky Greys / Warm Silicate Tones
      const isSilicate = Math.random() > 0.4;
      astCols[i * 3] = isSilicate ? 0.85 : 0.45;
      astCols[i * 3 + 1] = isSilicate ? 0.65 : 0.55;
      astCols[i * 3 + 2] = isSilicate ? 0.45 : 0.7;
    }

    astGeo.setAttribute('position', new THREE.BufferAttribute(astPos, 3));
    astGeo.setAttribute('color', new THREE.BufferAttribute(astCols, 3));
    const astMat = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const asteroidBelt = new THREE.Points(astGeo, astMat);
    scene.add(asteroidBelt);

    // =========================================================================
    // 5. DISTANT DEEP SPACE MILKY WAY STARFIELD
    // =========================================================================
    const starCount = 2000;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 3200;
      starPos[i * 3 + 1] = (Math.random() - 0.3) * 2000;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 3200;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      size: 2.2,
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 80;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 50;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
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
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock += 0.012;

      // 1. Animate Sun Plasma Vitality & Corona Rotation
      sunCore.rotation.y += 0.008;
      chromosphere.rotation.y -= 0.012;
      flareRings.forEach((r, idx) => {
        r.rotation.z += (idx % 2 === 0 ? 1 : -1) * 0.015;
        const scalePulse = 1.0 + Math.sin(clock * 2.5 + idx) * 0.06;
        r.scale.set(scalePulse, scalePulse, scalePulse);
      });

      // 2. Animate Solar Wind Stream Outflow
      const wPosArr = (windGeo.attributes.position as THREE.BufferAttribute).array as Float32Array;
      for (let i = 0; i < windCount; i++) {
        const idx = i * 3;
        const d = windDirs[i];
        d.dist += d.speed;
        if (d.dist > 650) {
          d.dist = 40;
        }
        wPosArr[idx] = d.dx * d.dist;
        wPosArr[idx + 1] = d.dy * d.dist;
        wPosArr[idx + 2] = d.dz * d.dist;
      }
      (windGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // 3. Animate Planets & Orbiting Moons
      activePlanets.forEach((p) => {
        p.angle += p.cfg.speed * 0.008;
        const px = Math.cos(p.angle) * p.cfg.dist;
        const pz = Math.sin(p.angle) * (p.cfg.dist * 0.96);
        const py = Math.sin(p.angle * 1.5) * 8; // orbital inclination oscillation

        p.group.position.set(px, py, pz);
        p.body.rotation.y += 0.03;

        // Animate each moon in local coordinate space
        p.moonMeshes.forEach((m) => {
          m.angle += m.speed * 0.02;
          m.mesh.position.set(
            Math.cos(m.angle) * m.dist,
            Math.sin(m.angle * 2) * 2,
            Math.sin(m.angle) * m.dist
          );
        });
      });

      // 4. Rotate Asteroid Belt & Starfield
      asteroidBelt.rotation.y += 0.003;
      starField.rotation.y += 0.0006;

      // 5. Cinematic Fluid Camera Follow & Parallax
      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (240 - mouseY - camera.position.y) * 0.04;
      camera.lookAt(0, -10, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sunCoreGeo.dispose();
      sunCoreMat.dispose();
      chromoGeo.dispose();
      chromoMat.dispose();
      windGeo.dispose();
      windMat.dispose();
      astGeo.dispose();
      astMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]"
      style={{ backgroundColor: '#020617' }}
    >
      {/* Radiant Solar Corona Amber & Solar Wind Ambient Aurora Glow */}
      <div className="absolute top-[20%] left-[25%] w-[60vw] h-[60vw] rounded-full bg-amber-500/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
    </div>
  );
};
