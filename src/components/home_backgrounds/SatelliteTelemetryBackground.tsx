import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SatelliteTelemetryBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.0006);

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 3500);
    camera.position.set(0, 140, 520);
    camera.lookAt(0, 0, 0);

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

    // 1. Central Earth Holographic Wireframe Sphere
    const earthRadius = 90;
    const earthGeo = new THREE.SphereGeometry(earthRadius, 36, 36);
    const earthWireMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthWireMat);
    earthMesh.position.set(-140, 0, -50);
    scene.add(earthMesh);

    // Earth Atmosphere Inner Core Glow
    const coreGeo = new THREE.SphereGeometry(earthRadius * 0.96, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0369a1,
      transparent: true,
      opacity: 0.12,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    earthMesh.add(coreMesh);

    // 2. Orbital Satellite Trajectory Rings (ISS, Geostationary, Polar, Mars Transfer)
    interface OrbitRingData {
      mesh: THREE.Line;
      radiusX: number;
      radiusY: number;
      rotX: number;
      rotY: number;
      rotZ: number;
      speed: number;
      satellites: THREE.Mesh[];
    }

    const orbitConfigs = [
      { rX: 130, rY: 125, rotX: Math.PI / 3.4, rotY: 0.2, rotZ: 0.4, color: 0x38bdf8, speed: 1.2, name: 'ISS Leo' },
      { rX: 180, rY: 170, rotX: Math.PI / 2.2, rotY: -0.3, rotZ: 0.8, color: 0x10b981, speed: 0.75, name: 'Polar Earth Obs' },
      { rX: 250, rY: 240, rotX: 0.2, rotY: 0.1, rotZ: -0.2, color: 0xa855f7, speed: 0.4, name: 'Geostationary Relay' },
      { rX: 380, rY: 220, rotX: Math.PI / 4, rotY: 0.6, rotZ: -0.4, color: 0xf43f5e, speed: 0.22, name: 'Mars Transfer Ellipse' }
    ];

    const orbitRings: OrbitRingData[] = [];

    orbitConfigs.forEach((cfg) => {
      const curve = new THREE.EllipseCurve(0, 0, cfg.rX, cfg.rY, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(120);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(p.x, 0, p.y)));
      const lineMat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const ringLine = new THREE.Line(lineGeo, lineMat);
      ringLine.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
      earthMesh.add(ringLine);

      // Create Satellite Nodes along this orbit
      const sats: THREE.Mesh[] = [];
      const satGeo = new THREE.BoxGeometry(4, 4, 6);
      const satMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: false,
      });

      // Add 2 solar panel wings per satellite
      const satMesh = new THREE.Mesh(satGeo, satMat);
      const wingGeo = new THREE.PlaneGeometry(12, 4);
      const wingMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const wingMesh = new THREE.Mesh(wingGeo, wingMat);
      wingMesh.rotation.x = Math.PI / 2;
      satMesh.add(wingMesh);

      // Satellite beacon aura
      const beaconGeo = new THREE.SphereGeometry(3, 8, 8);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });
      satMesh.add(new THREE.Mesh(beaconGeo, beaconMat));

      earthMesh.add(satMesh);
      sats.push(satMesh);

      orbitRings.push({
        mesh: ringLine,
        radiusX: cfg.rX,
        radiusY: cfg.rY,
        rotX: cfg.rotX,
        rotY: cfg.rotY,
        rotZ: cfg.rotZ,
        speed: cfg.speed,
        satellites: sats
      });
    });

    // 3. Deep Space Network (DSN) Ground Antennas & Radio Wave Beacons
    const radioPulseRings: THREE.Mesh[] = [];
    const pulseCount = 6;
    for (let i = 0; i < pulseCount; i++) {
      const pGeo = new THREE.RingGeometry(20 + i * 45, 22 + i * 45, 64);
      const pMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x06b6d4 : 0x10b981,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
      });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.rotation.x = Math.PI / 2.5;
      pMesh.position.set(-140, -10, -50);
      scene.add(pMesh);
      radioPulseRings.push(pMesh);
    }

    // 4. Interplanetary Deep Space Telemetry Particle Field (Stream Lines)
    const particleCount = 700;
    const partGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    const palette = [
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0xa855f7), // Purple
      new THREE.Color(0xf59e0b)  // Amber
    ];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 1600;
      positions[idx + 1] = (Math.random() - 0.5) * 900;
      positions[idx + 2] = (Math.random() - 0.5) * 1200;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[idx] = col.r;
      colors[idx + 1] = col.g;
      colors[idx + 2] = col.b;

      speeds[i] = 0.4 + Math.random() * 1.2;
    }

    partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    partGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const partMat = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(partGeo, partMat);
    scene.add(particleSystem);

    // 5. Distant Deep Space Relays / Mars Outpost Node
    const marsNodeGeo = new THREE.SphereGeometry(22, 24, 24);
    const marsNodeMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const marsNode = new THREE.Mesh(marsNodeGeo, marsNodeMat);
    marsNode.position.set(380, 80, -220);
    scene.add(marsNode);

    // Mars orbit ring around its node
    const marsRingGeo = new THREE.RingGeometry(35, 36.5, 48);
    const marsRingMat = new THREE.MeshBasicMaterial({
      color: 0xfb7185,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const marsRing = new THREE.Mesh(marsRingGeo, marsRingMat);
    marsRing.rotation.x = Math.PI / 3;
    marsNode.add(marsRing);

    // Telemetry Beam connecting Earth to Mars
    const beamGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-140, 0, -50),
      new THREE.Vector3(380, 80, -220)
    ]);
    const beamMat = new THREE.LineDashedMaterial({
      color: 0x06b6d4,
      dashSize: 12,
      gapSize: 8,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const telemetryBeam = new THREE.Line(beamGeo, beamMat);
    telemetryBeam.computeLineDistances();
    scene.add(telemetryBeam);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 60;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const nw = mountRef.current.clientWidth || window.innerWidth;
      const nh = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock += 0.015;

      // Rotate Earth wireframe
      earthMesh.rotation.y += 0.003;
      earthMesh.rotation.x = 0.2 + Math.sin(clock * 0.2) * 0.05;

      // Animate Satellites along their respective orbits
      orbitRings.forEach((ring, rIdx) => {
        const theta = clock * ring.speed + rIdx * 1.5;
        const sat = ring.satellites[0];
        if (sat) {
          // Parametric ellipse formula in local ring space
          const lx = Math.cos(theta) * ring.radiusX;
          const lz = Math.sin(theta) * ring.radiusY;
          
          // Transform local point by ring rotation
          const localVec = new THREE.Vector3(lx, 0, lz);
          localVec.applyEuler(new THREE.Euler(ring.rotX, ring.rotY, ring.rotZ));
          
          sat.position.copy(localVec);
          sat.rotation.y += 0.04;
        }
      });

      // Animate DSN Radio Pulses (Expanding waves)
      radioPulseRings.forEach((pulse, pIdx) => {
        const pScale = 1 + ((clock * 0.4 + pIdx * 0.3) % 2.5);
        pulse.scale.set(pScale, pScale, pScale);
        (pulse.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.4 - (pScale - 1) * 0.16);
      });

      // Animate Telemetry Particles
      const posAttr = partGeo.attributes.position as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        posArr[idx] += speeds[i] * 0.6;
        posArr[idx + 1] += Math.sin(clock + i) * 0.15;
        
        if (posArr[idx] > 800) {
          posArr[idx] = -800;
          posArr[idx + 1] = (Math.random() - 0.5) * 900;
        }
      }
      posAttr.needsUpdate = true;

      // Rotate Mars node
      marsNode.rotation.y += 0.006;
      marsRing.rotation.z += 0.01;

      // Camera Smooth Follow
      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (140 - mouseY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      earthGeo.dispose();
      earthWireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      partGeo.dispose();
      partMat.dispose();
      marsNodeGeo.dispose();
      marsNodeMat.dispose();
      marsRingGeo.dispose();
      marsRingMat.dispose();
      beamGeo.dispose();
      beamMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]"
      style={{ backgroundColor: '#020617' }}
    />
  );
};
