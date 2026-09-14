const fs = require('fs');

let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

// Upgrade big bang
file = file.replace(
`            mat.color.setHex(0xffffff);
            if (mat.emissive) {
              mat.emissive.setHex(0xffffff);`,
`            mat.color.setHex(0xffffff);
            if (mat.emissive) {
              mat.emissive.setHex(0xe0f2fe);`
);

// Upgrade super nova neutron star 
file = file.replace(
`            (primaryMeshRef.current.material as any).emissive.setHex(0x00ffff);
            (primaryMeshRef.current.material as any).emissiveIntensity = 2;`,
`            (primaryMeshRef.current.material as any).emissive.setHex(0x06b6d4);
            (primaryMeshRef.current.material as any).emissiveIntensity = 8;`
);

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);

