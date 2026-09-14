import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const RadarAsteroidBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x021612, 0.0008);

    const camera = new THREE.PerspectiveCamera(65, w / h, 1, 3500);
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

    // 1. Tactical Circular Radar Grids (Concentric Emerald Rings & Polar Axes)
    const radarRings: THREE.Mesh[] = [];
    [100, 200, 300, 400, 500].forEach((radius, idx) => {
      const rGeo = new THREE.RingGeometry(radius - 1, radius + 1, 96);
      const rMat = new THREE.MeshBasicMaterial({
        color: idx === 2 ? 0x10b981 : 0x059669,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const rMesh = new THREE.Mesh(rGeo, rMat);
      rMesh.rotation.x = Math.PI / 2;
      scene.add(rMesh);
      radarRings.push(rMesh);
    });

    // Radar Polar Axes Lines (Crosshairs)
    const crosshairPts: THREE.Vector3[] = [
      new THREE.Vector3(-550, 0, 0), new THREE.Vector3(550, 0, 0),
      new THREE.Vector3(0, 0, -550), new THREE.Vector3(0, 0, 550),
      new THREE.Vector3(-380, 0, -380), new THREE.Vector3(380, 0, 380),
      new THREE.Vector3(-380, 0, 380), new THREE.Vector3(380, 0, -380),
    ];
    const crossGeo = new THREE.BufferGeometry().setFromPoints(crosshairPts);
    const crossMat = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.25
    });
    const crossLine = new THREE.LineSegments(crossGeo, crossMat);
    scene.add(crossLine);

    // Rotating Radar Sweep Fan Beam
    const sweepGeo = new THREE.CircleGeometry(520, 32, 0, Math.PI / 3);
    const sweepMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });
    const sweepMesh = new THREE.Mesh(sweepGeo, sweepMat);
    sweepMesh.rotation.x = Math.PI / 2;
    scene.add(sweepMesh);

    // 2. 3D Tumbling Asteroids (Low-poly dodecahedrons & icosahedrons)
    const asteroidMeshes: {
      mesh: THREE.Mesh;
      rotSpeed: THREE.Vector3;
      speed: number;
      initDist: number;
      angle: number;
    }[] = [];

    const asteroidCount = 35;
    for (let i = 0; i < asteroidCount; i++) {
      const size = 5 + Math.random() * 16;
      const aGeo = Math.random() > 0.5 
        ? new THREE.DodecahedronGeometry(size, 1) 
        : new THREE.IcosahedronGeometry(size, 0);
      
      const aMat = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.3 ? 0x059669 : 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.75
      });
      const aMesh = new THREE.Mesh(aGeo, aMat);

      const angle = Math.random() * Math.PI * 2;
      const dist = 120 + Math.random() * 380;
      const y = (Math.random() - 0.5) * 80;

      aMesh.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
      scene.add(aMesh);

      asteroidMeshes.push({
        mesh: aMesh,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04
        ),
        speed: (Math.random() * 0.4 + 0.2),
        initDist: dist,
        angle: angle
      });
    }

    // 3. Tactical Radar Threat Dots
    const dotCount = 600;
    const dotPos = new Float32Array(dotCount * 3);
    const dotCols = new Float32Array(dotCount * 3);
    const cEmerald = new THREE.Color(0x10b981);
    const cRed = new THREE.Color(0xef4444);

    for (let i = 0; i < dotCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 520;
      dotPos[i * 3] = Math.cos(angle) * r;
      dotPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      dotPos[i * 3 + 2] = Math.sin(angle) * r;

      const c = Math.random() > 0.85 ? cRed : cEmerald;
      dotCols[i * 3] = c.r;
      dotCols[i * 3 + 1] = c.g;
      dotCols[i * 3 + 2] = c.b;
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
    dotGeo.setAttribute('color', new THREE.BufferAttribute(dotCols, 3));
    const dotMat = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const dotPoints = new THREE.Points(dotGeo, dotMat);
    scene.add(dotPoints);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Active tactical radar sweep rotation
      sweepMesh.rotation.z -= 0.065;

      // Tumbling and orbital propagation for NEO asteroids
      asteroidMeshes.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeed.x * 2.2;
        item.mesh.rotation.y += item.rotSpeed.y * 2.2;
        item.mesh.rotation.z += item.rotSpeed.z * 2.2;

        const curAngle = item.angle + elapsed * item.speed * 0.65;
        item.mesh.position.x = Math.cos(curAngle) * item.initDist;
        item.mesh.position.z = Math.sin(curAngle) * item.initDist;
        item.mesh.position.y = Math.sin(curAngle * 3) * 20; // 3D vertical drift
      });

      // Rotating detection blips
      dotPoints.rotation.y = elapsed * 0.04;

      // Dynamic tactical camera tracking
      camera.position.x = Math.sin(elapsed * 0.35) * 100;
      camera.position.y = 220 + Math.cos(elapsed * 0.3) * 45;
      camera.position.z = 500 + Math.sin(elapsed * 0.25) * 50;
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
      radarRings.forEach(r => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      crossGeo.dispose();
      crossMat.dispose();
      sweepGeo.dispose();
      sweepMat.dispose();
      asteroidMeshes.forEach(a => {
        a.mesh.geometry.dispose();
        (a.mesh.material as THREE.Material).dispose();
      });
      dotGeo.dispose();
      dotMat.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#020617]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full block" />
      {/* Tactical Emerald & Teal Ambient Aura */}
      <div className="absolute top-[12%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-emerald-500/18 blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[10%] -left-[10%] w-[75vw] h-[75vw] rounded-full bg-teal-500/18 blur-[160px] animate-pulse" style={{ animationDuration: '10s' }} />
    </div>
  );
};
