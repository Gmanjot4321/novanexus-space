import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SpiralGalaxyBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x140d02, 0.0006);

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 3500);
    camera.position.set(0, 240, 480);
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

    // 1. Golden Logarithmic 4-Arm Spiral Galaxy (5,500 particles)
    const count = 5500;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const cCore = new THREE.Color(0xfffbeb); // Warm White
    const cAmber = new THREE.Color(0xf59e0b); // Gold
    const cOrange = new THREE.Color(0xd97706); // Amber
    const cCopper = new THREE.Color(0xb45309); // Deep Bronze

    const arms = 4;
    const radius = 380;
    const spin = 1.6;

    for (let i = 0; i < count; i++) {
      const r = Math.pow(Math.random(), 1.8) * radius;
      const armIndex = i % arms;
      const armAngle = ((armIndex * 2 * Math.PI) / arms);
      const spinAngle = r * spin * 0.015;

      const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * r;
      const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.25 * r;
      const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.3 * r;

      const totalAngle = armAngle + spinAngle;
      pos[i * 3] = Math.cos(totalAngle) * r + randomX;
      pos[i * 3 + 1] = randomY;
      pos[i * 3 + 2] = Math.sin(totalAngle) * r + randomZ;

      const normR = r / radius;
      let c: THREE.Color;
      if (normR < 0.2) {
        c = cCore.clone().lerp(cAmber, normR / 0.2);
      } else if (normR < 0.6) {
        c = cAmber.clone().lerp(cOrange, (normR - 0.2) / 0.4);
      } else {
        c = cOrange.clone().lerp(cCopper, (normR - 0.6) / 0.4);
      }

      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    const mat = new THREE.PointsMaterial({
      size: 4.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const galaxyMesh = new THREE.Points(geo, mat);
    galaxyMesh.rotation.x = Math.PI / 4;
    scene.add(galaxyMesh);

    // 2. Glowing Golden Core Sphere
    const coreGeo = new THREE.SphereGeometry(22, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xfef08a,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    galaxyMesh.add(coreMesh);

    // 3. Constellation Line Nodes
    const constPts: THREE.Vector3[] = [];
    for (let c = 0; c < 30; c++) {
      const angle = (c / 30) * Math.PI * 2;
      const r = 140 + Math.sin(c * 3) * 60;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = Math.sin(c * 2) * 30;
      constPts.push(new THREE.Vector3(x, y, z));
    }
    const constGeo = new THREE.BufferGeometry().setFromPoints(constPts);
    const constMat = new THREE.LineBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.35
    });
    const constLine = new THREE.LineLoop(constGeo, constMat);
    galaxyMesh.add(constLine);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Active galaxy spin & dynamic galactic inclination
      galaxyMesh.rotation.z -= 0.012;
      galaxyMesh.rotation.x = Math.PI / 3 + Math.sin(elapsed * 0.6) * 0.08;
      coreMesh.rotation.y += 0.025;

      // Pulsating galactic core luminescence
      const cScale = 1.0 + Math.sin(elapsed * 3.0) * 0.15;
      coreMesh.scale.set(cScale, cScale, cScale);

      // Dynamic cosmic camera sweep
      camera.position.x = Math.sin(elapsed * 0.35) * 110;
      camera.position.y = 220 + Math.cos(elapsed * 0.3) * 50;
      camera.position.z = 480 + Math.sin(elapsed * 0.25) * 50;
      camera.lookAt(0, -10, 0);

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
      geo.dispose();
      mat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      constGeo.dispose();
      constMat.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full block" />
      {/* Radiant Golden Amber Aurora */}
      <div className="absolute top-[10%] -left-[10%] w-[85vw] h-[85vw] rounded-full bg-amber-500/18 blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-[40%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-orange-600/18 blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[10%] left-[30%] w-[70vw] h-[70vw] rounded-full bg-yellow-500/12 blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
    </div>
  );
};
