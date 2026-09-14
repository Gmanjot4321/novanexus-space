const fs = require('fs');

let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

// BIG BANG FIX
file = file.replace(
/if \(t > 0\.18\) {\s*const blastT \= \(t \- 0\.18\) \/ 0\.82;\s*const blastRadius \= Math\.pow\(blastT, 0\.6\) \* 120;\s*particleSystemRef\.current\.scale\.set\(blastRadius, blastRadius, blastRadius\);\s*mat\.opacity \= Math\.max\(0, 1 \- Math\.pow\(blastT, 1\.2\)\);\s*particleSystemRef\.current\.rotation\.y \+\= 0\.05;\s*particleSystemRef\.current\.rotation\.x \+\= 0\.02;\s*} else {\s*mat\.opacity \= 0;\s*}/,
`if (t > 0.1) {
            const blastT = (t - 0.1) / 0.9;
            particleSystemRef.current.scale.set(1, 1, 1);
            mat.opacity = Math.max(0, 1 - Math.pow(blastT, 2.0));
            particleSystemRef.current.rotation.y += 0.005;
            particleSystemRef.current.rotation.x += 0.002;
          } else {
            mat.opacity = 0;
          }`
);

// MILKOMEDA FIX
file = file.replace(
`          const centerX = isMilkyWay ? -25 * (1 - t * 1.5) : 25 * (1 - t * 1.5);
          const pos = new THREE.Vector3(
            centerX + Math.cos(angle) * r,
            (Math.random() - 0.5) * r * 0.1,
            Math.sin(angle) * r
          );`,
`          // They start at distance +/- 40 and merge to 0 at t=0.7, then swirl
          const dist = Math.max(0, 40 * (1 - t * 1.4));
          const centerX = isMilkyWay ? -dist : dist;
          // As they merge they rotate around each other
          const orbitAngle = t * Math.PI * 2;
          const px = centerX * Math.cos(orbitAngle);
          const pz = centerX * Math.sin(orbitAngle);
          
          const pos = new THREE.Vector3(
            px + Math.cos(angle) * r,
            (Math.random() - 0.5) * r * 0.1 + (isMilkyWay ? 0 : 2),
            pz + Math.sin(angle) * r
          );`
);

// BLACK HOLE FIX
file = file.replace(
`      // Event Horizon & Doppler-Beamed Relativistic Accretion Disk
      const bhGeo = new THREE.SphereGeometry(3.5, 48, 48);
      const bhMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const bhMesh = new THREE.Mesh(bhGeo, bhMat);
      primaryMeshRef.current = bhMesh;
      simGroup.add(bhMesh);

      // Glowing Photon Sphere Ring (1.5 Rs)
      const psGeo = new THREE.RingGeometry(3.55, 3.8, 64);
      const psMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const psMesh = new THREE.Mesh(psGeo, psMat);
      bhMesh.add(psMesh);

      // Accretion Disk
      const diskGeo = new THREE.RingGeometry(5, 14, 128);`,
`      // Event Horizon & Doppler-Beamed Relativistic Accretion Disk
      const bhGeo = new THREE.SphereGeometry(3.5, 48, 48);
      const bhMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const bhMesh = new THREE.Mesh(bhGeo, bhMat);
      primaryMeshRef.current = bhMesh;
      simGroup.add(bhMesh);

      // Glowing Photon Sphere Ring
      const psGeo = new THREE.RingGeometry(3.55, 4.2, 64);
      const psMat = new THREE.MeshBasicMaterial({
        color: 0xffaa55,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
      });
      const psMesh = new THREE.Mesh(psGeo, psMat);
      bhMesh.add(psMesh);

      // Jets
      const jetGeo = new THREE.CylinderGeometry(0.1, 4, 40, 32);
      const jetMat = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });
      const jetMesh = new THREE.Mesh(jetGeo, jetMat);
      bhMesh.add(jetMesh);

      // Accretion Disk (Made fuller and more visible)
      const diskGeo = new THREE.RingGeometry(4.5, 16, 128);`
);

// In black_hole animation loop
file = file.replace(
`      } else if (type === 'black_hole_lensing') {
        if (secondaryMeshRef.current) {
          secondaryMeshRef.current.rotation.z += 0.05;
          secondaryMeshRef.current.rotation.x = Math.sin(t * Math.PI * 2) * 0.2;
        }
      }`,
`      } else if (type === 'black_hole_lensing') {
        if (secondaryMeshRef.current) {
          secondaryMeshRef.current.rotation.z += 0.02;
        }
        if (primaryMeshRef.current) {
          primaryMeshRef.current.rotation.x = 0.2; // slight tilt
        }
      }`
);

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);
