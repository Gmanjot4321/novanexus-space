const fs = require('fs');
let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

file = file.replace(
`            const mat = (primaryMeshRef.current.material);
            mat.color.setHex(0xffffff);
            mat.emissive.setHex(0xffffff);
            mat.emissiveIntensity = 5.0;`,
`            const mat = (primaryMeshRef.current.material) as any;
            if (mat.color) mat.color.setHex(0xffffff);
            if (mat.emissive) {
              mat.emissive.setHex(0xffffff);
              mat.emissiveIntensity = 5.0;
            }`);
            
fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);
