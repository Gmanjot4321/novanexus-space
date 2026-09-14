const fs = require('fs');

let file = fs.readFileSync('src/data/universeData.ts', 'utf-8');

const PROCEDURAL = [];
const catOptions = ['Planet', 'Star', 'Exoplanet', 'Moon', 'Gas Giant'];
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
for(let i=0; i<1500; i++) {
  const cat = catOptions[Math.floor(Math.random() * catOptions.length)];
  const name = 'Kepler-' + Math.floor(Math.random()*2000) + letters[Math.floor(Math.random()*26)];
  let radius = 0;
  let mass = 0;
  
  if(cat === 'Planet' || cat === 'Exoplanet') {
    radius = 3000 + Math.random() * 80000;
    mass = 0.05 + Math.random() * 300;
  } else if(cat === 'Star') {
    radius = 696000 + Math.random() * 10000000;
    mass = 333000 * (0.1 + Math.random() * 50);
  } else if(cat === 'Gas Giant') {
    radius = 50000 + Math.random() * 80000;
    mass = 50 + Math.random() * 3000;
  } else {
    radius = 1000 + Math.random() * 3000;
    mass = 0.01 + Math.random() * 0.5;
  }
  
  PROCEDURAL.push({
    id: 'proc-' + i,
    name: name,
    category: cat,
    radiusKm: radius,
    massEarths: mass,
    surfaceTempC: { min: -200 + Math.random()*100, mean: -50 + Math.random()*5000, max: 0 + Math.random()*10000 },
    gravityG: 0.1 + Math.random() * 10,
    distanceFromSunAU: 0.5 + Math.random() * 1000,
    description: 'A procedurally catalogued ' + cat.toLowerCase() + ' located in the deep field survey. Features extreme conditions and unique orbital mechanics.',
    color: '#a855f7'
  });
}

const appendStr = `\n// Procedurally Generated Catalog Expansion\nexport const PROCEDURAL_ENTITIES: UniverseEntity[] = ${JSON.stringify(PROCEDURAL, null, 2)};\n\nCOMPARABLE_ENTITIES.push(...PROCEDURAL_ENTITIES);\n`;

fs.appendFileSync('src/data/universeData.ts', appendStr);
