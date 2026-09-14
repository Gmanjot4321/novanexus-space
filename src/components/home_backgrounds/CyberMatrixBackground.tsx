import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const CyberMatrixBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08061d, 0.0008);

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 3500);
    camera.position.set(0, 160, 500);
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

    // 1. Ascending Cyber Telemetry Data Stream Lines (Vertical Laser Streams)
    const streamCount = 180;
    const streamPts: THREE.Vector3[] = [];
    const streamSpeed: number[] = [];

    for (let i = 0; i < streamCount; i++) {
      const x = (Math.random() - 0.5) * 1100;
      const z = (Math.random() - 0.5) * 800;
      const y = (Math.random() - 0.5) * 600;
      const len = 30 + Math.random() * 80;

      streamPts.push(new THREE.Vector3(x, y, z));
      streamPts.push(new THREE.Vector3(x, y + len, z));
      streamSpeed.push(2 + Math.random() * 4);
    }

    const streamGeo = new THREE.BufferGeometry().setFromPoints(streamPts);
    const streamMat = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const streamLines = new THREE.LineSegments(streamGeo, streamMat);
    scene.add(streamLines);

    // 2. Floating 3D Holographic Polyhedrons & Data Cubes
    const cubes: { mesh: THREE.Mesh; rot: THREE.Vector3; initY: number; floatSpeed: number }[] = [];
    for (let c = 0; c < 22; c++) {
      const size = 12 + Math.random() * 24;
      const cGeo = Math.random() > 0.4 
        ? new THREE.BoxGeometry(size, size, size) 
        : new THREE.OctahedronGeometry(size, 0);

      const cMat = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0x818cf8 : 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.65
      });
      const cMesh = new THREE.Mesh(cGeo, cMat);

      const x = (Math.random() - 0.5) * 800;
      const y = (Math.random() - 0.5) * 350;
      const z = (Math.random() - 0.5) * 500;
      cMesh.position.set(x, y, z);
      scene.add(cMesh);

      cubes.push({
        mesh: cMesh,
        rot: new THREE.Vector3((Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, 0),
        initY: y,
        floatSpeed: 0.8 + Math.random() * 1.2
      });
    }

    // 3. Cybernetic Floor Matrix Grid
    const floorGeo = new THREE.GridHelper(1200, 40, 0x6366f1, 0x312e81);
    floorGeo.position.y = -180;
    scene.add(floorGeo);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Flow vertical data streams upward with high-velocity telemetry cascade
      const pos = streamGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < streamCount; i++) {
        let y1 = pos[i * 6 + 1];
        let y2 = pos[i * 6 + 4];
        const len = y2 - y1;
        const sp = streamSpeed[i] * 2.4;

        y1 += sp;
        y2 = y1 + len;
        if (y1 > 350) {
          y1 = -350;
          y2 = y1 + len;
        }

        pos[i * 6 + 1] = y1;
        pos[i * 6 + 4] = y2;
      }
      streamGeo.attributes.position.needsUpdate = true;

      // Rotate and float holographic matrix telemetry cubes
      cubes.forEach((cube) => {
        cube.mesh.rotation.x += cube.rot.x * 2.5;
        cube.mesh.rotation.y += cube.rot.y * 2.5;
        cube.mesh.rotation.z += 0.015;
        cube.mesh.position.y = cube.initY + Math.sin(elapsed * cube.floatSpeed * 1.8) * 35;
      });

      // Dynamic holographic camera pan
      camera.position.x = Math.sin(elapsed * 0.35) * 100;
      camera.position.y = Math.cos(elapsed * 0.3) * 45;
      camera.position.z = 500 + Math.sin(elapsed * 0.25) * 45;
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
      streamGeo.dispose();
      streamMat.dispose();
      cubes.forEach(c => {
        c.mesh.geometry.dispose();
        (c.mesh.material as THREE.Material).dispose();
      });
      floorGeo.geometry.dispose();
      (floorGeo.material as THREE.Material).dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full block" />
      {/* Cyber Indigo & Ultraviolet Aurora */}
      <div className="absolute top-[10%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-indigo-600/18 blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-blue-600/18 blur-[160px] animate-pulse" style={{ animationDuration: '10s' }} />
    </div>
  );
};
