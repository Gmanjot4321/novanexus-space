const fs = require('fs');
let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

file = file.replace(/mat\.color\.setHex/g, 'if(mat.color) mat.color.setHex');
file = file.replace(/mat\.emissive\.setHex/g, 'if(mat.emissive) mat.emissive.setHex');
file = file.replace(/\(primaryMeshRef\.current\.material as any\)\.emissive\.setHex/g, 'if((primaryMeshRef.current.material as any).emissive) (primaryMeshRef.current.material as any).emissive.setHex');

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);
