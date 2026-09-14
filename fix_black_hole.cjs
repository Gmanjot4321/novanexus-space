const fs = require('fs');

let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

// Jets for black hole
const jetsStr = `
      // Astrophysical Jets
      const jetGeo = new THREE.CylinderGeometry(0.1, 4, 60, 32);
      jetGeo.translate(0, 30, 0); // shift up
      const jetMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4, // Cyan
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const jetMeshTop = new THREE.Mesh(jetGeo, jetMat);
      const jetMeshBottom = new THREE.Mesh(jetGeo, jetMat);
      jetMeshBottom.rotation.x = Math.PI;
      
      const jetGroup = new THREE.Group();
      jetGroup.add(jetMeshTop);
      jetGroup.add(jetMeshBottom);
      // Tilt to match the disk slightly (or keep perpendicular)
      jetGroup.rotation.x = Math.PI / 2.5 - Math.PI/2; 
      simGroup.add(jetGroup);
`;

const setupRegex = /\/\/ Einstein Ring Lensing Distortion Silhouette/;
file = file.replace(setupRegex, jetsStr + '\n\n      // Einstein Ring Lensing Distortion Silhouette');

// Increase spin in the renderLoop
const loopRegex = /} else if \(type === 'black_hole_lensing'\) \{\n\s*if \(secondaryMeshRef.current\) \{\n\s*secondaryMeshRef.current.rotation.z \+= 0.02;\n\s*\}/;

file = file.replace(loopRegex, `} else if (type === 'black_hole_lensing') {
        if (secondaryMeshRef.current) {
          secondaryMeshRef.current.rotation.z -= 0.15; // Fast spin!
        }`);

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);
