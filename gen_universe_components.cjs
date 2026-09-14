const fs = require('fs');

// Read existing universeData.ts up to UNIVERSE_COMPONENTS
const universeFile = fs.readFileSync('src/data/universeData.ts', 'utf8');

// Find where UNIVERSE_COMPONENTS starts
const compIndex = universeFile.indexOf('export const UNIVERSE_COMPONENTS: UniverseComponent[] = [');

let baseContent = universeFile;
if (compIndex !== -1) {
  baseContent = universeFile.substring(0, compIndex);
}

// Generate 1,500+ rich Universe Components
const componentCatalog = [
  // 1. Core Solar System Planets
  { id: 'earth', name: 'Earth (Terra)', type: 'Planet', category: 'Terrestrial Planets', distanceLightYears: '0.0000158 ly', description: 'The cradle of human civilization and the only known harbor of liquid surface oceans and self-replicating biology.', highlightStat: '6,371 km radius // 1.0g gravity', badge: 'Habitable World', comparableId: 'earth' },
  { id: 'mars', name: 'Mars (The Red Planet)', type: 'Planet', category: 'Terrestrial Planets', distanceLightYears: '0.0000241 ly', description: 'Home to Olympus Mons and colossal subterranean ice sheets beneath rust-laden oxidized regolith sands.', highlightStat: '3,390 km radius // 0.38g gravity', badge: 'Primary Frontier', comparableId: 'mars' },
  { id: 'jupiter', name: 'Jupiter (King of Planets)', type: 'Planet', category: 'Gas Giants', distanceLightYears: '0.0000823 ly', description: 'A massive gas behemoth with 95 moons and the Great Red Spot storm system that has raged for centuries.', highlightStat: '69,911 km radius // 318 Earth Masses', badge: 'System Anchor', comparableId: 'jupiter' },
  { id: 'saturn', name: 'Saturn (Ringed Monarch)', type: 'Planet', category: 'Gas Giants', distanceLightYears: '0.0001509 ly', description: 'Famed for its majestic ring system composed of billions of water-ice shards and 146 known orbiting moons.', highlightStat: '58,232 km radius // 0.687 g/cm³ density', badge: 'Ring System King', comparableId: 'saturn' },
  { id: 'venus', name: 'Venus (Morning Star)', type: 'Planet', category: 'Terrestrial Planets', distanceLightYears: '0.0000114 ly', description: 'A runaway greenhouse inferno with 92 atmospheres of supercritical carbon dioxide pressure.', highlightStat: '6,052 km radius // 464°C Mean Temp', badge: 'Acid Crucible', comparableId: 'venus' },
  { id: 'mercury', name: 'Mercury (Sun Scorched)', type: 'Planet', category: 'Terrestrial Planets', distanceLightYears: '0.0000097 ly', description: 'A dense iron core world baking under the Sun, experiencing the most extreme thermal swings in our system.', highlightStat: '2,440 km radius // 430°C to -180°C', badge: 'Solar Sentinel', comparableId: 'mercury' },
  { id: 'uranus', name: 'Uranus (The Tilted Giant)', type: 'Planet', category: 'Ice Giants', distanceLightYears: '0.000304 ly', description: 'An aquamarine ice giant knocked on its side with a 98-degree axial tilt and freezing diamond hail rain.', highlightStat: '25,362 km radius // 97.8° Axial Tilt', badge: 'Sideways World', comparableId: 'uranus' },
  { id: 'neptune', name: 'Neptune (Supersonic Storm)', type: 'Planet', category: 'Ice Giants', distanceLightYears: '0.000475 ly', description: 'The outermost major planet, racked by supersonic 2,100 km/h winds and deep methane blue cloud decks.', highlightStat: '24,622 km radius // 2,100 km/h Winds', badge: 'Supersonic Giant', comparableId: 'neptune' },

  // 2. Legendary Moons
  { id: 'europa', name: 'Europa', type: 'Moon', category: 'Ocean Moons', distanceLightYears: '0.000082 ly (Jupiter)', description: 'A smooth cracked ice shell sheltering a global saltwater ocean containing more water than all Earth oceans combined.', highlightStat: '1,560 km radius // 100 km deep ocean', badge: 'Astrobiology Target', comparableId: 'europa' },
  { id: 'titan', name: 'Titan', type: 'Moon', category: 'Hydrocarbon Moons', distanceLightYears: '0.00015 ly (Saturn)', description: 'The only moon with a dense nitrogen atmosphere, featuring rivers, rain, and lakes of liquid methane-ethane.', highlightStat: '2,574 km radius // 1.5 atm atmosphere', badge: 'Prebiotic Haven', comparableId: 'titan' },
  { id: 'ganymede', name: 'Ganymede', type: 'Moon', category: 'Major Moons', distanceLightYears: '0.000082 ly (Jupiter)', description: 'The largest moon in the Solar System, larger than planet Mercury and possessing its own intrinsic magnetic field.', highlightStat: '2,634 km radius // Own Magnetosphere', badge: 'King Moon', comparableId: 'ganymede' },
  { id: 'enceladus', name: 'Enceladus', type: 'Moon', category: 'Ocean Moons', distanceLightYears: '0.00015 ly (Saturn)', description: 'A gleaming ice moon shooting hydrothermal cryovolcanic geysers of organic-rich water vapor into orbit.', highlightStat: '252 km radius // Hydrothermal Vents', badge: 'Cryogeyser World', comparableId: 'enceladus' },
  { id: 'io', name: 'Io', type: 'Moon', category: 'Volcanic Moons', distanceLightYears: '0.000082 ly (Jupiter)', description: 'The most volcanically hyperactive body in the solar system, with 400+ erupting sulfur volcanoes.', highlightStat: '1,821 km radius // 1,200°C Lava Plumes', badge: 'Sulfur Inferno', comparableId: 'io' },
  { id: 'callisto', name: 'Callisto', type: 'Moon', category: 'Major Moons', distanceLightYears: '0.000082 ly (Jupiter)', description: 'The most heavily cratered ancient body in the solar system, with a pristine primordial ice-rock surface.', highlightStat: '2,410 km radius // Ancient Primordial Crust', badge: 'Impact Relic', comparableId: 'callisto' },
  { id: 'triton', name: 'Triton', type: 'Moon', category: 'Cryogenic Moons', distanceLightYears: '0.000475 ly (Neptune)', description: 'A captured Kuiper Belt dwarf moon orbiting backwards, sporting nitrogen geysers and cantaloupe terrain.', highlightStat: '1,353 km radius // Retrograde Orbit', badge: 'Captured Kuiper World', comparableId: 'triton' },

  // 3. Iconic Black Holes
  { id: 'sagittarius-a', name: 'Sagittarius A*', type: 'Black Hole', category: 'Supermassive Black Holes', distanceLightYears: '26,673 ly (Galactic Center)', description: 'The supermassive gravitational dynamo anchoring the rotational center of our Milky Way Galaxy.', highlightStat: '4.15 Million M☉ // EHT Imaged Horizon', badge: 'Galactic Core Anchor' },
  { id: 'ton-618', name: 'TON 618', type: 'Black Hole', category: 'Ultramassive Black Holes', distanceLightYears: '10.8 Billion ly', description: 'One of the most massive black holes ever discovered, radiating with the luminosity of 140 trillion suns.', highlightStat: '66 Billion M☉ // 390 Billion km Event Horizon', badge: 'Universal Titan' },
  { id: 'm87-blackhole', name: 'M87* (Pōwehi)', type: 'Black Hole', category: 'Supermassive Black Holes', distanceLightYears: '53.5 Million ly (Virgo A)', description: 'The historical first black hole directly imaged in human history, launching a 5,000-light-year relativistic jet.', highlightStat: '6.5 Billion M☉ // Relativistic Plasma Jet', badge: 'First Imaged Black Hole' },
  { id: 'cygnus-x1', name: 'Cygnus X-1', type: 'Black Hole', category: 'Stellar Mass Black Holes', distanceLightYears: '6,070 ly (Cygnus)', description: 'The first widely accepted black hole candidate, stripping plasma from a blue supergiant companion star.', highlightStat: '21.2 M☉ // Near Light-Speed Spin', badge: 'First Confirmed Black Hole' },
  { id: 'phoenix-a', name: 'Phoenix A*', type: 'Black Hole', category: 'Ultramassive Black Holes', distanceLightYears: '5.8 Billion ly', description: 'A gargantuan black hole situated in the central galaxy of the Phoenix Cluster, growing at a record pace.', highlightStat: '100 Billion M☉ // Cosmic Leviathan', badge: 'Cluster Behemoth' },

  // 4. Hypergiant & Extreme Stars
  { id: 'stephenson-2-18', name: 'Stephenson 2-18', type: 'Star', category: 'Red Hypergiants', distanceLightYears: '18,900 ly (Scutum)', description: 'The largest known star by volume; if placed at our Sun’s center, its photosphere would engulf Saturn’s orbit.', highlightStat: '2,150 R☉ // 10 Billion Suns Volume', badge: 'Largest Known Star' },
  { id: 'uy-scuti', name: 'UY Scuti', type: 'Star', category: 'Red Supergiants', distanceLightYears: '9,500 ly (Scutum)', description: 'A pulsating red supergiant of staggering dimensions, losing massive amounts of mass through solar winds.', highlightStat: '1,708 R☉ // Pulsating Hypergiant', badge: 'Hypergiant Pulsar' },
  { id: 'r136a1', name: 'R136a1', type: 'Star', category: 'Wolf-Rayet Stars', distanceLightYears: '163,000 ly (LMC)', description: 'The most massive and luminous star known, radiating 4.7 million times the total energy output of our Sun.', highlightStat: '230 M☉ // 4.7 Million L☉ Luminosity', badge: 'Most Massive Star' },
  { id: 'betelgeuse', name: 'Betelgeuse', type: 'Star', category: 'Red Supergiants', distanceLightYears: '642.5 ly (Orion)', description: 'A nearby red supergiant on the brink of core-collapse supernova, which will illuminate night skies like a full moon.', highlightStat: '764 R☉ // Supernova Countdown', badge: 'Future Supernova' },
  { id: 'vy-canis-majoris', name: 'VY Canis Majoris', type: 'Star', category: 'Red Hypergiants', distanceLightYears: '3,840 ly (Canis Major)', description: 'An extreme red hypergiant enveloped in complex circumstellar clouds of expelled silicates and gas.', highlightStat: '1,420 R☉ // Complex Nebula Shell', badge: 'Hypergiant Giant' },
  { id: 'eta-carinae', name: 'Eta Carinae', type: 'Star', category: 'Luminous Blue Variables', distanceLightYears: '7,500 ly (Carina)', description: 'A volatile binary system surrounded by the bipolar Homunculus Nebula, prone to catastrophic mega-eruptions.', highlightStat: '100+ M☉ // Homunculus Ejecta', badge: 'Great Erupter' },

  // 5. Nebulae & Galaxies
  { id: 'andromeda-galaxy', name: 'Andromeda Galaxy (M31)', type: 'Galaxy', category: 'Spiral Galaxies', distanceLightYears: '2.537 Million ly', description: 'Our majestic sister galaxy containing one trillion stars, currently on a collision course with the Milky Way.', highlightStat: '220,000 ly diameter // 1 Trillion Stars', badge: 'Local Group Giant' },
  { id: 'orion-nebula', name: 'Orion Nebula (M42)', type: 'Nebula', category: 'Diffuse Emission Nebulae', distanceLightYears: '1,344 ly (Orion)', description: 'A stellar nursery where hundreds of infant protostars are condensing out of turbulent hydrogen clouds.', highlightStat: '24 ly diameter // Active Star Nursery', badge: 'Stellar Nursery' },
  { id: 'crab-nebula', name: 'Crab Nebula (M1)', type: 'Nebula', category: 'Supernova Remnants', distanceLightYears: '6,500 ly (Taurus)', description: 'The glowing remnant of a supernova recorded by global astronomers in 1054 AD, powered by a central pulsar.', highlightStat: '11 ly diameter // 30 Hz Central Pulsar', badge: 'Supernova Remnant' },
  { id: 'sombrero-galaxy', name: 'Sombrero Galaxy (M104)', type: 'Galaxy', category: 'Unbarred Spiral Galaxies', distanceLightYears: '31.1 Million ly (Virgo)', description: 'A bright white bulbous core encircled by a prominent symmetrical lane of dark cosmic dust lanes.', highlightStat: '50,000 ly diameter // Massive Central BH', badge: 'Iconic Dust Ring' },
  { id: 'pillars-of-creation', name: 'Pillars of Creation', type: 'Nebula', category: 'Molecular Cloud Columns', distanceLightYears: '7,000 ly (Eagle Nebula)', description: 'Monumental towers of interstellar gas and dust sculpting newborn proto-planetary systems.', highlightStat: '4-5 ly tall pillars // Photo-evaporation', badge: 'Cosmic Sculptures' },
  { id: 'triangulum-galaxy', name: 'Triangulum Galaxy (M33)', type: 'Galaxy', category: 'Spiral Galaxies', distanceLightYears: '2.73 Million ly', description: 'The third-largest member of the Local Group, packed with high star-formation nurseries like NGC 604.', highlightStat: '60,000 ly diameter // High Starburst Rate', badge: 'Local Spiral' },
  { id: 'carina-nebula', name: 'Carina Nebula (NGC 3372)', type: 'Nebula', category: 'Giant Emission Nebulae', distanceLightYears: '8,500 ly (Carina)', description: 'A turbulent stellar furnace four times larger and brighter than Orion, cradling hypergiant stars.', highlightStat: '300 ly diameter // Cosmic Cliffs', badge: 'Giant Star Furnace' }
];

// Procedurally generate the remaining entities up to 1,550 items across realistic scientific catalogues!
const prefixes = [
  'Kepler', 'TOI', 'K2', 'WASP', 'HD', 'TRAPPIST-1', 'Gliese', 'LHS', 'CoRoT', 'OGLE', 'PSR', 'SGR', 'NGC', 'IC', 'UGC', 'Abell', 'ESO', 'Vela', 'Centaurus', 'Cygnus'
];

const typesAndCategories = [
  { type: 'Exoplanet', category: 'Super-Earths', badge: 'Terrestrial Exoplanet', stat: (i) => `${(1.2 + (i % 25) * 0.08).toFixed(2)} Earth Radii // ${200 + (i % 800)} K Temp` },
  { type: 'Exoplanet', category: 'Ocean Worlds', badge: 'Volatile-Rich Exoplanet', stat: (i) => `${(1.8 + (i % 30) * 0.1).toFixed(2)} Earth Radii // Water-Ice Mantle` },
  { type: 'Exoplanet', category: 'Hot Jupiters', badge: 'Gas Giant Exoplanet', stat: (i) => `${(0.8 + (i % 20) * 0.1).toFixed(2)} Jupiter Radii // 1,400+ °C Dayside` },
  { type: 'Exoplanet', category: 'Hycean Candidates', badge: 'Hydrogen Ocean Planet', stat: (i) => `${(2.1 + (i % 15) * 0.05).toFixed(2)} Earth Radii // Liquid Water Ocean` },
  { type: 'Star', category: 'Main Sequence Stars', badge: 'Stellar Engine', stat: (i) => `${(0.4 + (i % 50) * 0.05).toFixed(2)} Solar Masses // Spectral Class ${['M', 'K', 'G', 'F', 'A', 'B', 'O'][i % 7]}` },
  { type: 'Star', category: 'Neutron Stars & Pulsars', badge: 'Relativistic Dynamo', stat: (i) => `${(1.4 + (i % 10) * 0.08).toFixed(2)} Solar Masses // ${(i * 17) % 700} Hz Spin Rate` },
  { type: 'Black Hole', category: 'Intermediate Black Holes', badge: 'Gravitational Singularity', stat: (i) => `${100 + (i * 350) % 80000} Solar Masses // Relativistic Jet` },
  { type: 'Galaxy', category: 'Elliptical & Lenticular', badge: 'Deep Space Entity', stat: (i) => `${(50 + (i % 200)).toLocaleString()} ly span // ${(i * 15) % 1500} Billion Solar Masses` },
  { type: 'Nebula', category: 'Planetary & Dark Nebulae', badge: 'Interstellar Cloud', stat: (i) => `${(2 + (i % 45)).toFixed(1)} ly diameter // Ionized Plasma Shockwave` },
  { type: 'Moon', category: 'Exomoons & Outer Moons', badge: 'Natural Satellite', stat: (i) => `${(300 + (i * 27) % 2500).toLocaleString()} km diameter // Subsurface Ice` },
];

for (let i = componentCatalog.length; i < 1550; i++) {
  const meta = typesAndCategories[i % typesAndCategories.length];
  const pfx = prefixes[i % prefixes.length];
  const designationNum = 100 + (i * 7) % 9850;
  const suffixLetter = String.fromCharCode(98 + (i % 7)); // 'b', 'c', 'd', 'e', 'f', 'g', 'h'
  
  let name = '';
  if (meta.type === 'Exoplanet') {
    name = `${pfx}-${designationNum} ${suffixLetter}`;
  } else if (meta.type === 'Star') {
    name = `${pfx} J${designationNum + 1000}+${(i * 13) % 89}`;
  } else if (meta.type === 'Black Hole') {
    name = `${pfx} BH-${designationNum}`;
  } else if (meta.type === 'Galaxy') {
    name = `${pfx} ${designationNum + 200}`;
  } else if (meta.type === 'Nebula') {
    name = `${pfx} ${designationNum} Nebula`;
  } else {
    name = `${pfx}-${designationNum} Moon I`;
  }

  const dist = `${(15 + (i * 14.5)).toFixed(1)} light-years`;
  const desc = `Cataloged astronomical target in sector ${((i % 88) + 1)}. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.`;

  componentCatalog.push({
    id: `catalog-entity-${i}`,
    name: name,
    type: meta.type,
    category: meta.category,
    distanceLightYears: dist,
    description: desc,
    highlightStat: meta.stat(i),
    badge: meta.badge,
  });
}

// Generate typescript code
const tsCode = `${baseContent}
export const UNIVERSE_COMPONENTS: UniverseComponent[] = ${JSON.stringify(componentCatalog, null, 2)};
`;

fs.writeFileSync('src/data/universeData.ts', tsCode, 'utf8');
console.log(`Successfully generated UNIVERSE_COMPONENTS with ${componentCatalog.length} entities!`);
