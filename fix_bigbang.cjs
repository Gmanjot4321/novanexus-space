const fs = require('fs');

let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

file = file.replace(
`          if (t > 0.1) {
            const blastT = (t - 0.1) / 0.9;
            particleSystemRef.current.scale.set(1, 1, 1);
            mat.opacity = Math.max(0, 1 - Math.pow(blastT, 2.0));
            particleSystemRef.current.rotation.y += 0.005;
            particleSystemRef.current.rotation.x += 0.002;
          } else {
            mat.opacity = 0;
          }`,
`          particleSystemRef.current.scale.set(1, 1, 1);
          mat.opacity = Math.max(0, 1 - Math.pow(t, 2.0));
          particleSystemRef.current.rotation.y += 0.005;
          particleSystemRef.current.rotation.x += 0.002;`
);

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);

