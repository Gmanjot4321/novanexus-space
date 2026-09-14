const fs = require('fs');
let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

file = file.replace(
`        if (primaryMeshRef.current) {
          if (t < 0.1) {
            primaryMeshRef.current.scale.set(0.1, 0.1, 0.1);
            const mat = (primaryMeshRef.current.material) as any;
            if (mat.color) mat.color.setHex(0xffffff);
            if (mat.emissive) {
              if(mat.emissive) mat.emissive.setHex(0xffffff);
              mat.emissiveIntensity = 5.0;
            }
          }
        }
        if (particleSystemRef.current) {
          const mat = particleSystemRef.current.material;
          if (t > 0.18) {
            const blastT = (t - 0.18) / 0.82;
            const blastRadius = Math.pow(blastT, 0.6) * 120;
            particleSystemRef.current.scale.set(blastRadius, blastRadius, blastRadius);
            mat.opacity = Math.max(0, 1 - Math.pow(blastT, 1.2));
            particleSystemRef.current.rotation.y += 0.05;
            particleSystemRef.current.rotation.x += 0.02;
          } else {
            mat.opacity = 0;
          }
        }`,
`        if (primaryMeshRef.current) {
          const s = Math.max(0.001, 0.1 - t * 0.5);
          primaryMeshRef.current.scale.set(s, s, s);
          primaryMeshRef.current.visible = t < 0.2;
          const mat = (primaryMeshRef.current.material) as any;
          if (mat.color) mat.color.setHex(0xffffff);
          if (mat.emissive) {
            mat.emissive.setHex(0xe0f2fe);
            mat.emissiveIntensity = 8.0 - t * 20.0;
          }
        }
        if (particleSystemRef.current) {
          const mat = particleSystemRef.current.material as any;
          particleSystemRef.current.scale.set(1, 1, 1);
          mat.opacity = Math.max(0, 1 - Math.pow(t, 2.0));
          particleSystemRef.current.rotation.y += 0.005;
          particleSystemRef.current.rotation.x += 0.002;
        }`
);

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);
