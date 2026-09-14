const fs = require('fs');

let file = fs.readFileSync('src/data/celestialBodies.ts', 'utf-8');

// I will create a script to append 1500 procedural bodies to CELESTIAL_BODIES.
// Let's just create a new file generation script.
