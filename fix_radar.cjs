const fs = require('fs');
let file = fs.readFileSync('src/components/NeoRadarView.tsx', 'utf-8');

file = file.replace(
`      (reticleMeshRef.current.material as THREE.MeshBasicMaterial).color.setHex(
        selectedAsteroid.isHazardous ? 0xf43f5e : 0x38bdf8
      );`,
`      const mat = reticleMeshRef.current.material as any;
      if (mat && mat.color) {
        mat.color.setHex(selectedAsteroid.isHazardous ? 0xf43f5e : 0x38bdf8);
      }`);

fs.writeFileSync('src/components/NeoRadarView.tsx', file);
