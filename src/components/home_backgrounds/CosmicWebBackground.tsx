import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const CosmicWebBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020817, 0.0006);

    const camera = new THREE.PerspectiveCamera(65, w / h, 1, 3500);
    camera.position.set(0, 140, 480);
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

    // 1. Cosmic Web Nodes (Superclusters)
    const nodeCount = 85;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 900;
      const y = (Math.random() - 0.5) * 550;
      const z = (Math.random() - 0.5) * 700;
      nodes.push(new THREE.Vector3(x, y, z));
    }

    // 2. Synaptic Dark Matter Filament Lines connecting nearest neighbor nodes
    const filamentPts: THREE.Vector3[] = [];
    const maxDist = 240;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < maxDist) {
          filamentPts.push(nodes[i]);
          filamentPts.push(nodes[j]);
        }
      }
    }

    const filamentGeo = new THREE.BufferGeometry().setFromPoints(filamentPts);
    const filamentMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const filamentMesh = new THREE.LineSegments(filamentGeo, filamentMat);
    scene.add(filamentMesh);

    // 3. Glowing Galaxy Cluster Points at Nodes
    const nodeGeo = new THREE.BufferGeometry().setFromPoints(nodes);
    const nodeMat = new THREE.PointsMaterial({
      size: 7.0,
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodePoints);

    // 4. Intergalactic Stardust Matrix (2,000 deep cosmic particles)
    const dustCount = 2000;
    const dustPos = new Float32Array(dustCount * 3);
    const dustCols = new Float32Array(dustCount * 3);
    const cCyan = new THREE.Color(0x00f2fe);
    const cPurple = new THREE.Color(0xa855f7);

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 1400;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 900;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 1000;

      const c = Math.random() > 0.5 ? cCyan : cPurple;
      dustCols[i * 3] = c.r;
      dustCols[i * 3 + 1] = c.g;
      dustCols[i * 3 + 2] = c.b;
    }

    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustCols, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Active cosmic rotation and gravitational undulation
      filamentMesh.rotation.y = elapsed * 0.06;
      filamentMesh.rotation.x = Math.sin(elapsed * 0.5) * 0.1;
      nodePoints.rotation.y = elapsed * 0.06;
      nodePoints.rotation.x = Math.sin(elapsed * 0.5) * 0.1;
      dustPoints.rotation.y = -elapsed * 0.035;
      dustPoints.rotation.z = elapsed * 0.025;

      // Dynamic cosmic camera sweep through neural filament nodes
      camera.position.x = Math.sin(elapsed * 0.35) * 110;
      camera.position.y = 120 + Math.cos(elapsed * 0.3) * 50;
      camera.position.z = 480 + Math.sin(elapsed * 0.25) * 50;
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
      filamentGeo.dispose();
      filamentMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full block" />
      {/* Cosmic Web Deep Cyan & Ultraviolet Nebula */}
      <div className="absolute top-[10%] -left-[10%] w-[85vw] h-[85vw] rounded-full bg-cyan-600/18 blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-purple-600/18 blur-[160px] animate-pulse" style={{ animationDuration: '10s' }} />
    </div>
  );
};
