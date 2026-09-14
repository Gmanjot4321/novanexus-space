const fs = require('fs');

let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

file = file.replace(
`      } else if (type === 'milkyway_andromeda' && particleSystemRef.current) {
        const pos = particleSystemRef.current.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const y = pos.getY(i);
          const z = pos.getZ(i);
          const isMilkyWay = i < (pos.count / 2);
          const startX = isMilkyWay ? -30 : 30;
          
          const centerX = startX * (1 - Math.min(1, t * 1.5));
          
          const dx = x - startX;
          const dy = y;
          const dz = z;
          
          const swirlSpeed = 0.02 + (1 - Math.min(1, Math.sqrt(dx*dx + dz*dz) / 20)) * 0.05;
          const cosS = Math.cos(swirlSpeed);
          const sinS = Math.sin(swirlSpeed);
          let nx = dx * cosS - dz * sinS;
          let nz = dx * sinS + dz * cosS;
          
          if (t > 0.3) {
            const pull = Math.min(1, (t - 0.3) * 1.5);
            // Random scatter to simulate tidal tails
            if (i % 3 === 0) {
                nx += nx * pull * 0.02;
                nz += nz * pull * 0.02;
            } else {
                nx -= nx * pull * 0.05;
                nz -= nz * pull * 0.05;
            }
          }
          pos.setXYZ(i, centerX + nx, y, nz);
        }
        pos.needsUpdate = true;
        particleSystemRef.current.rotation.y = t * Math.PI * 1.5;
        particleSystemRef.current.rotation.x = Math.sin(t * Math.PI) * 0.4;
      }`,
`      } else if (type === 'milkyway_andromeda' && particleSystemRef.current) {
        const pos = particleSystemRef.current.geometry.attributes.position;
        // In the first frame, store initial positions if we haven't
        if (!particleSystemRef.current.userData.initialPos) {
           const initialPos = new Float32Array(pos.count * 3);
           for (let i=0; i<pos.count; i++) {
              initialPos[i*3] = pos.getX(i);
              initialPos[i*3+1] = pos.getY(i);
              initialPos[i*3+2] = pos.getZ(i);
           }
           particleSystemRef.current.userData.initialPos = initialPos;
        }
        
        const initialPos = particleSystemRef.current.userData.initialPos;
        
        for (let i = 0; i < pos.count; i++) {
          const isMilkyWay = i < (pos.count / 2);
          const startX = isMilkyWay ? -30 : 30;
          
          // Original local coords
          let lx = initialPos[i*3] - startX;
          let ly = initialPos[i*3+1];
          let lz = initialPos[i*3+2];
          
          // Distance from center of galaxy
          const r = Math.sqrt(lx*lx + lz*lz);
          
          // Rotate locally based on time (t * some speed factor)
          const angleOffset = t * 15 * (1 - Math.min(1, r / 25));
          const cosA = Math.cos(angleOffset);
          const sinA = Math.sin(angleOffset);
          
          let nx = lx * cosA - lz * sinA;
          let nz = lx * sinA + lz * cosA;
          
          // Merge towards center
          // startX goes to 0 by t=0.6
          const centerX = startX * Math.max(0, 1 - t * 1.6);
          
          // Add tidal disruption after they meet
          if (t > 0.4) {
            const pull = Math.min(1, (t - 0.4) * 2.0);
            if (i % 3 === 0) {
               nx += nx * pull * 0.6;
               nz += nz * pull * 0.6;
            } else if (i % 5 === 0) {
               nx -= nx * pull * 0.4;
               nz -= nz * pull * 0.4;
            }
          }
          
          pos.setXYZ(i, centerX + nx, ly, nz);
        }
        pos.needsUpdate = true;
        particleSystemRef.current.rotation.y = t * Math.PI * 1.2;
        particleSystemRef.current.rotation.x = Math.sin(t * Math.PI) * 0.5;
      }`
);

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);
