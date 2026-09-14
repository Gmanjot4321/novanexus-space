import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const RelativityWarpBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0518, 0.0009);

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 3500);
    camera.position.set(0, 180, 520);
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

    // 1. Warping Spacetime Curvature Grid (Gravitational Time Well)
    const gridSegments = 48;
    const gridGeo = new THREE.PlaneGeometry(1600, 1600, gridSegments, gridSegments);
    gridGeo.rotateX(-Math.PI / 2);
    
    const posAttr = gridGeo.attributes.position;
    const initialPositions = posAttr.array.slice();

    const gridMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const spacetimeMesh = new THREE.Mesh(gridGeo, gridMat);
    spacetimeMesh.position.y = -80;
    scene.add(spacetimeMesh);

    // 2. Relativistic Light Cones (Past & Future Light Cones)
    const coneGeo = new THREE.ConeGeometry(240, 320, 32, 8, true);
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });
    const futureCone = new THREE.Mesh(coneGeo, coneMat);
    futureCone.position.set(0, 100, -50);
    scene.add(futureCone);

    const pastCone = new THREE.Mesh(coneGeo, coneMat);
    pastCone.position.set(0, -100, -50);
    pastCone.rotation.x = Math.PI;
    scene.add(pastCone);

    // 3. Photon Geodesic Beams & Relativistic Worldlines
    const photonCount = 450;
    const photonGeo = new THREE.BufferGeometry();
    const photonPositions = new Float32Array(photonCount * 3);
    const photonColors = new Float32Array(photonCount * 3);
    const photonVelocities: number[] = [];

    const colPurple = new THREE.Color(0xa855f7);
    const colPink = new THREE.Color(0xec4899);
    const colCyan = new THREE.Color(0x06b6d4);

    for (let i = 0; i < photonCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 60 + Math.random() * 650;
      photonPositions[i * 3] = Math.cos(angle) * radius;
      photonPositions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      photonPositions[i * 3 + 2] = Math.sin(angle) * radius;

      const pickColor = Math.random() < 0.4 ? colPurple : Math.random() < 0.7 ? colPink : colCyan;
      photonColors[i * 3] = pickColor.r;
      photonColors[i * 3 + 1] = pickColor.g;
      photonColors[i * 3 + 2] = pickColor.b;

      photonVelocities.push(1.5 + Math.random() * 3.5);
    }

    photonGeo.setAttribute('position', new THREE.BufferAttribute(photonPositions, 3));
    photonGeo.setAttribute('color', new THREE.BufferAttribute(photonColors, 3));

    // Particle Texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(217,70,239,0.8)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTex = new THREE.CanvasTexture(canvas);

    const photonMat = new THREE.PointsMaterial({
      size: 14,
      map: particleTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const photonSystem = new THREE.Points(photonGeo, photonMat);
    scene.add(photonSystem);

    // Animation Loop
    let animationFrameId: number;
    let clock = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock += 0.02;

      // Warp spacetime mesh according to Einsteinian gravitational dip
      const positions = posAttr.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = initialPositions[i];
        const z = initialPositions[i + 2];
        const dist = Math.sqrt(x * x + z * z);
        
        // Gravitational funnel depth + subtle wave ripples
        const funnel = -140 / (1 + dist * 0.006);
        const ripple = Math.sin(dist * 0.02 - clock * 2) * 8;
        positions[i + 1] = initialPositions[i + 1] + funnel + ripple;
      }
      posAttr.needsUpdate = true;

      // Rotate light cones
      futureCone.rotation.y += 0.005;
      pastCone.rotation.y -= 0.005;

      // Move photons along relativistic worldlines
      const pArr = photonGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < photonCount; i++) {
        pArr[i * 3 + 1] += photonVelocities[i];
        if (pArr[i * 3 + 1] > 250) {
          pArr[i * 3 + 1] = -250;
        }
      }
      photonGeo.attributes.position.needsUpdate = true;

      // Subtle orbital camera drift
      camera.position.x = Math.sin(clock * 0.25) * 80;
      camera.position.y = 170 + Math.cos(clock * 0.3) * 30;
      camera.lookAt(0, -20, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth || window.innerWidth;
      const nh = container.clientHeight || window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh, false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      coneGeo.dispose();
      coneMat.dispose();
      photonGeo.dispose();
      photonMat.dispose();
      particleTex.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]" style={{ backgroundColor: '#020617' }} />;
};
