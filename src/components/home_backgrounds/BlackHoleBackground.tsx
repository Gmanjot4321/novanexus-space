import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BlackHoleBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050014, 0.0007);

    const camera = new THREE.PerspectiveCamera(65, w / h, 1, 3500);
    camera.position.set(0, 140, 460);
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

    // 1. Black Hole Core (Event Horizon)
    const bhGeo = new THREE.SphereGeometry(40, 32, 32);
    const bhMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const bhMesh = new THREE.Mesh(bhGeo, bhMat);
    scene.add(bhMesh);

    // Photon Sphere Glowing Rim
    const rimGeo = new THREE.RingGeometry(40.5, 43.5, 64);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    scene.add(rimMesh);

    // 2. Swirling Relativistic Accretion Disk (3,500 particles in spiral vortex)
    const diskCount = 3800;
    const diskPos = new Float32Array(diskCount * 3);
    const diskCols = new Float32Array(diskCount * 3);
    const diskInitialAngles = new Float32Array(diskCount);
    const diskRadii = new Float32Array(diskCount);
    const diskSpeeds = new Float32Array(diskCount);

    const cMagenta = new THREE.Color(0xd946ef);
    const cViolet = new THREE.Color(0x8b5cf6);
    const cRose = new THREE.Color(0xf43f5e);
    const cAmber = new THREE.Color(0xfbbf24);

    for (let i = 0; i < diskCount; i++) {
      const r = 50 + Math.pow(Math.random(), 1.6) * 190;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * (18 * (r / 200));

      diskRadii[i] = r;
      diskInitialAngles[i] = angle;
      diskSpeeds[i] = (220 / Math.sqrt(r)) * 0.008; // Keplerian shear

      diskPos[i * 3] = Math.cos(angle) * r;
      diskPos[i * 3 + 1] = y;
      diskPos[i * 3 + 2] = Math.sin(angle) * r;

      const normDist = (r - 50) / 190;
      let c: THREE.Color;
      if (normDist < 0.25) {
        c = cAmber.clone().lerp(cRose, normDist / 0.25);
      } else if (normDist < 0.65) {
        c = cRose.clone().lerp(cMagenta, (normDist - 0.25) / 0.4);
      } else {
        c = cMagenta.clone().lerp(cViolet, (normDist - 0.65) / 0.35);
      }

      diskCols[i * 3] = c.r;
      diskCols[i * 3 + 1] = c.g;
      diskCols[i * 3 + 2] = c.b;
    }

    const diskGeo = new THREE.BufferGeometry();
    diskGeo.setAttribute('position', new THREE.BufferAttribute(diskPos, 3));
    diskGeo.setAttribute('color', new THREE.BufferAttribute(diskCols, 3));

    const diskMat = new THREE.PointsMaterial({
      size: 4.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const diskPoints = new THREE.Points(diskGeo, diskMat);
    diskPoints.rotation.x = Math.PI / 3.2; // tilted accretion plane
    scene.add(diskPoints);

    // 3. Polar Relativistic Jets (Shooting along Y axis)
    const jetCount = 800;
    const jetPos = new Float32Array(jetCount * 3);
    const jetCols = new Float32Array(jetCount * 3);
    const jetInitialY = new Float32Array(jetCount);

    for (let i = 0; i < jetCount; i++) {
      const isTop = i % 2 === 0;
      const yDist = 45 + Math.random() * 260;
      const sign = isTop ? 1 : -1;
      const spread = (yDist / 260) * 22;
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * spread;

      jetInitialY[i] = yDist * sign;
      jetPos[i * 3] = Math.cos(angle) * r;
      jetPos[i * 3 + 1] = yDist * sign;
      jetPos[i * 3 + 2] = Math.sin(angle) * r;

      const c = isTop ? cMagenta : cViolet;
      jetCols[i * 3] = c.r;
      jetCols[i * 3 + 1] = c.g;
      jetCols[i * 3 + 2] = c.b;
    }

    const jetGeo = new THREE.BufferGeometry();
    jetGeo.setAttribute('position', new THREE.BufferAttribute(jetPos, 3));
    jetGeo.setAttribute('color', new THREE.BufferAttribute(jetCols, 3));
    const jetMat = new THREE.PointsMaterial({
      size: 4.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const jetPoints = new THREE.Points(jetGeo, jetMat);
    scene.add(jetPoints);

    // 4. Expanding Supernova Shockwave Rings
    const shockwaveGeo1 = new THREE.RingGeometry(180, 184, 80);
    const shockwaveMat1 = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const shockwave1 = new THREE.Mesh(shockwaveGeo1, shockwaveMat1);
    scene.add(shockwave1);

    const shockwaveGeo2 = new THREE.RingGeometry(260, 264, 80);
    const shockwaveMat2 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    const shockwave2 = new THREE.Mesh(shockwaveGeo2, shockwaveMat2);
    shockwave2.rotation.x = Math.PI / 4;
    scene.add(shockwave2);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Accretion disk particles spinning at relativistic Keplerian velocities
      const pos = diskGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < diskCount; i++) {
        const curAngle = diskInitialAngles[i] + elapsed * diskSpeeds[i] * 2.2;
        const r = diskRadii[i];
        pos[i * 3] = Math.cos(curAngle) * r;
        pos[i * 3 + 1] = Math.sin(curAngle * 3) * 6; // subtle vertical plasma warp
        pos[i * 3 + 2] = Math.sin(curAngle) * r;
      }
      diskGeo.attributes.position.needsUpdate = true;

      // Polar jet relativistic particle movement
      const jPos = jetGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < jetCount; i++) {
        const speed = 160;
        const sign = jetInitialY[i] > 0 ? 1 : -1;
        let newY = jetInitialY[i] + (sign * elapsed * speed) % (340 * sign);
        if (Math.abs(newY) < 40) newY = 40 * sign;
        jPos[i * 3 + 1] = newY;
      }
      jetGeo.attributes.position.needsUpdate = true;

      // Shockwave pulsing and active rotation
      shockwave1.rotation.z += 0.018;
      shockwave2.rotation.z -= 0.024;
      const swScale1 = 1 + Math.sin(elapsed * 2.8) * 0.22;
      const swScale2 = 1 + Math.cos(elapsed * 2.2) * 0.18;
      shockwave1.scale.set(swScale1, swScale1, swScale1);
      shockwave2.scale.set(swScale2, swScale2, swScale2);

      // Event horizon pulsating gravitational distortion
      const hScale = 1.0 + Math.sin(elapsed * 3.0) * 0.08;
      rimMesh.scale.set(hScale, hScale, hScale);
      rimMesh.rotation.z += 0.015;

      // Dynamic cosmic camera drift
      camera.position.x = Math.sin(elapsed * 0.4) * 110;
      camera.position.y = 140 + Math.cos(elapsed * 0.35) * 55;
      camera.position.z = 440 + Math.sin(elapsed * 0.25) * 45;
      camera.lookAt(0, 0, 0);

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

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(frameId);
      renderer.dispose();
      bhGeo.dispose();
      bhMat.dispose();
      rimGeo.dispose();
      rimMat.dispose();
      diskGeo.dispose();
      diskMat.dispose();
      jetGeo.dispose();
      jetMat.dispose();
      shockwaveGeo1.dispose();
      shockwaveMat1.dispose();
      shockwaveGeo2.dispose();
      shockwaveMat2.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full block" />
      {/* Relativistic Violet & Magenta Aurora */}
      <div className="absolute top-[10%] -left-[10%] w-[85vw] h-[85vw] rounded-full bg-purple-600/18 blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[35%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-fuchsia-600/18 blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[10%] left-[20%] w-[75vw] h-[75vw] rounded-full bg-rose-600/15 blur-[150px] animate-pulse" style={{ animationDuration: '12s' }} />
    </div>
  );
};
