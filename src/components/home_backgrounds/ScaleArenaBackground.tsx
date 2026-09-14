import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ScaleArenaBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x13020e, 0.0007);

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 3500);
    camera.position.set(0, 180, 500);
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

    // 1. Spacetime Curvature Grid (Curved wireframe plane bending under two masses)
    const gSize = 1000;
    const gDiv = 60;
    const gridPlaneGeo = new THREE.PlaneGeometry(gSize, gSize, gDiv, gDiv);
    gridPlaneGeo.rotateX(-Math.PI / 2);

    const pos = gridPlaneGeo.attributes.position;
    const origY = new Float32Array(pos.count);

    // Initial Spacetime Curvature wells at (-180, 0) and (180, 0)
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      const d1 = Math.sqrt((x + 180) ** 2 + z ** 2);
      const d2 = Math.sqrt((x - 180) ** 2 + z ** 2);

      const dip1 = -90 / (1 + (d1 / 70) ** 2);
      const dip2 = -60 / (1 + (d2 / 50) ** 2);

      const y = dip1 + dip2;
      pos.setY(i, y);
      origY[i] = y;
    }
    gridPlaneGeo.computeVertexNormals();

    const gridMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const gridMesh = new THREE.Mesh(gridPlaneGeo, gridMat);
    scene.add(gridMesh);

    // 2. Dual Scale Comparative Spheres (Supergiant vs Dwarf)
    const sphere1Geo = new THREE.SphereGeometry(36, 24, 24);
    const sphere1Mat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const sphere1 = new THREE.Mesh(sphere1Geo, sphere1Mat);
    sphere1.position.set(-180, -40, 0);
    scene.add(sphere1);

    const sphere2Geo = new THREE.SphereGeometry(18, 20, 20);
    const sphere2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const sphere2 = new THREE.Mesh(sphere2Geo, sphere2Mat);
    sphere2.position.set(180, -30, 0);
    scene.add(sphere2);

    // Laser Measurement Caliper Beam between the spheres
    const laserPts = [
      new THREE.Vector3(-180, 30, 0),
      new THREE.Vector3(180, 30, 0)
    ];
    const laserGeo = new THREE.BufferGeometry().setFromPoints(laserPts);
    const laserMat = new THREE.LineBasicMaterial({
      color: 0xff007f,
      transparent: true,
      opacity: 0.75
    });
    const laserLine = new THREE.Line(laserGeo, laserMat);
    scene.add(laserLine);

    // Laser Caliper Ticks
    const tickPts: THREE.Vector3[] = [];
    for (let t = -180; t <= 180; t += 20) {
      tickPts.push(new THREE.Vector3(t, 24, 0));
      tickPts.push(new THREE.Vector3(t, 36, 0));
    }
    const tickGeo = new THREE.BufferGeometry().setFromPoints(tickPts);
    const tickLine = new THREE.LineSegments(tickGeo, laserMat);
    scene.add(tickLine);

    // 3. Gravitational Ripple Rings
    const ripGeo = new THREE.RingGeometry(18, 120, 48);
    const ripMat = new THREE.MeshBasicMaterial({
      color: 0xf43f5e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const ripMesh1 = new THREE.Mesh(ripGeo, ripMat);
    ripMesh1.rotation.x = Math.PI / 2;
    ripMesh1.position.set(-180, -45, 0);
    scene.add(ripMesh1);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Rotate and levitate comparative entities
      sphere1.rotation.y += 0.025;
      sphere1.position.y = 40 + Math.sin(elapsed * 2.2) * 14;
      
      sphere2.rotation.y -= 0.035;
      sphere2.position.y = 80 + Math.cos(elapsed * 1.8) * 18;

      // Laser scanner oscillating sweep
      laserLine.position.y = 40 + Math.sin(elapsed * 3.0) * 50;

      // Pulse spacetime ripples
      const ripScale = 1 + Math.sin(elapsed * 3.5) * 0.28;
      ripMesh1.scale.set(ripScale, ripScale, ripScale);
      ripMesh1.rotation.z += 0.02;

      // Dynamic cinematic camera sweep
      camera.position.x = Math.sin(elapsed * 0.35) * 100;
      camera.position.y = 200 + Math.cos(elapsed * 0.3) * 45;
      camera.position.z = 500 + Math.sin(elapsed * 0.25) * 50;
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
      gridPlaneGeo.dispose();
      gridMat.dispose();
      sphere1Geo.dispose();
      sphere1Mat.dispose();
      sphere2Geo.dispose();
      sphere2Mat.dispose();
      laserGeo.dispose();
      laserMat.dispose();
      tickGeo.dispose();
      ripGeo.dispose();
      ripMat.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full block" />
      {/* Neon Rose & Cyber Cyan Aurora */}
      <div className="absolute top-[15%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-rose-600/18 blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] -right-[10%] w-[75vw] h-[75vw] rounded-full bg-cyan-600/15 blur-[160px] animate-pulse" style={{ animationDuration: '10s' }} />
    </div>
  );
};
