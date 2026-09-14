const fs = require('fs');
let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

file = file.replace(/const mat = primaryMeshRef\.current\.material;/g, 'const mat = primaryMeshRef.current.material as any;');
file = file.replace(/primaryMeshRef\.current\.material\.emissive/g, '(primaryMeshRef.current.material as any).emissive');

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);
