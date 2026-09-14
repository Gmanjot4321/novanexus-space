import { ComparableEntity } from '../types';

export const COMPARABLE_ENTITIES: ComparableEntity[] = [
  // =========================================================================
  // TERRESTRIAL PLANETS & DWARF PLANETS
  // =========================================================================
  {
    id: 'earth',
    name: 'Earth (Terra)',
    category: 'Terrestrial Planet',
    radiusKm: 6371.0,
    massKg: '5.972 × 10^24',
    distanceFromSunMillionKm: 149.6,
    orbitalPeriodDays: 365.25,
    surfaceGravityMs2: 9.81,
    surfaceGravityG: 1.0,
    surfaceTempC: { min: -89.2, max: 56.7, mean: 15 },
    atmosphere: ['78% Nitrogen', '21% Oxygen', '0.9% Argon', '0.04% CO2'],
    color: '#38bdf8',
    peculiarity: 'The only known body in the universe confirmed to harbor conscious life and liquid surface oceans.',
    humanAnalogy: 'The universal baseline of biology, gravity, and climate across all astrophysical benchmarks.',
    facts: [
      'Protected by a dynamic molten iron geodynamo magnetic shield that deflects lethal solar wind.',
      'Active plate tectonics recycles carbon and prevents runaway greenhouse incineration.'
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    category: 'Terrestrial Planet',
    radiusKm: 3389.5,
    massKg: '6.417 × 10^23',
    distanceFromSunMillionKm: 227.9,
    orbitalPeriodDays: 686.98,
    surfaceGravityMs2: 3.72,
    surfaceGravityG: 0.38,
    surfaceTempC: { min: -140, max: 20, mean: -63 },
    atmosphere: ['95.3% Carbon Dioxide', '2.6% Nitrogen', '1.9% Argon'],
    color: '#f87171',
    peculiarity: 'Hosts Olympus Mons (21.9 km tall, 3x Everest) and Valles Marineris (4,000 km grand canyon across a continent).',
    humanAnalogy: 'You can jump 2.6 times higher than on Earth and lift heavy equipment with ease.',
    facts: [
      'Possesses massive subsurface glaciers of water ice covered by iron oxide regolith rust.',
      'Sunsets on Mars are radiant blue due to fine dust scattering red wavelengths.'
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    category: 'Terrestrial Planet',
    radiusKm: 6051.8,
    massKg: '4.867 × 10^24',
    distanceFromSunMillionKm: 108.2,
    orbitalPeriodDays: 224.7,
    surfaceGravityMs2: 8.87,
    surfaceGravityG: 0.90,
    surfaceTempC: { min: 462, max: 480, mean: 464 },
    atmosphere: ['96.5% Carbon Dioxide', '3.5% Nitrogen', 'Sulfuric Acid Clouds'],
    color: '#fbbf24',
    peculiarity: 'Runaway greenhouse effect makes it hotter than Mercury (464°C), with 92 atmospheres of crushing pressure.',
    humanAnalogy: 'Like standing 900 meters underwater in a preheated pizza oven filled with battery acid.',
    facts: [
      'Rotates backwards (retrograde) so slowly that its day (243 Earth days) is longer than its year (225 Earth days).',
      'High-altitude clouds 50 km up have Earth-like pressure and temperature, proposing floating airship colonies.'
    ]
  },
  {
    id: 'mercury',
    name: 'Mercury',
    category: 'Terrestrial Planet',
    radiusKm: 2439.7,
    massKg: '3.301 × 10^23',
    distanceFromSunMillionKm: 57.9,
    orbitalPeriodDays: 87.97,
    surfaceGravityMs2: 3.70,
    surfaceGravityG: 0.38,
    surfaceTempC: { min: -180, max: 430, mean: 167 },
    atmosphere: ['Traces of Oxygen', 'Sodium', 'Hydrogen', 'Helium'],
    color: '#94a3b8',
    peculiarity: 'Extreme temperature swing of 610°C between daytime baking and nighttime freezing; iron core is 85% of volume.',
    humanAnalogy: 'A dense cannonball made almost entirely of iron with a thin burnt crust.',
    facts: [
      'Water ice sits frozen permanently inside deep craters at the north and south poles where sunlight never penetrates.',
      'Has a 3:2 spin-orbit resonance: rotates 3 times for every 2 orbits around the Sun.'
    ]
  },
  {
    id: 'ceres',
    name: 'Ceres',
    category: 'Dwarf Planet',
    radiusKm: 473.0,
    massKg: '9.38 × 10^20',
    distanceFromSunMillionKm: 413.7,
    orbitalPeriodDays: 1682,
    surfaceGravityMs2: 0.28,
    surfaceGravityG: 0.029,
    surfaceTempC: { min: -143, max: -38, mean: -105 },
    atmosphere: ['Transient water vapor exosphere'],
    color: '#a1a1aa',
    peculiarity: 'Largest object in the Asteroid Belt; harbors bright sodium carbonate deposits inside Occator Crater and a subsurface brine reservoir.',
    humanAnalogy: 'A miniature frozen world holding one-third of the entire mass of the asteroid belt.',
    facts: [
      'NASA Dawn spacecraft discovered Ahuna Mons, an isolated 4-kilometer-tall cryovolcanic dome.',
      'Contains more fresh water ice in its mantle than all fresh water on planet Earth.'
    ]
  },
  {
    id: 'pluto',
    name: 'Pluto',
    category: 'Dwarf Planet',
    radiusKm: 1188.3,
    massKg: '1.303 × 10^22',
    distanceFromSunMillionKm: 5906.4,
    orbitalPeriodDays: 90560,
    surfaceGravityMs2: 0.62,
    surfaceGravityG: 0.063,
    surfaceTempC: { min: -240, max: -218, mean: -229 },
    atmosphere: ['Nitrogen', 'Methane', 'Carbon Monoxide'],
    color: '#e2e8f0',
    peculiarity: 'Features Sputnik Planitia—a massive 1,000 km beating heart of actively convecting nitrogen glacier ice.',
    humanAnalogy: 'The king of the Kuiper Belt, co-orbiting with its moon Charon as a mutually locked binary system.',
    facts: [
      'New Horizons revealed ice mountains reaching 3,500 meters made of rock-hard water ice floating on nitrogen sheets.',
      'Atmosphere expands when closer to the Sun and freezes entirely onto the surface as snow during distant aphelion.'
    ]
  },
  {
    id: 'eris',
    name: 'Eris',
    category: 'Dwarf Planet',
    radiusKm: 1163.0,
    massKg: '1.66 × 10^22',
    distanceFromSunMillionKm: 10125,
    orbitalPeriodDays: 203830,
    surfaceGravityMs2: 0.82,
    surfaceGravityG: 0.084,
    surfaceTempC: { min: -243, max: -217, mean: -231 },
    atmosphere: ['Tenuous frozen methane glaze'],
    color: '#e0e7ff',
    peculiarity: '27% more massive than Pluto; its discovery in 2005 directly triggered the IAU reclassification of planetary criteria.',
    humanAnalogy: 'The distant ice rebel that reshaped humanity’s definition of a planet.',
    facts: [
      'Takes 558 Earth years to complete a single orbit around the Sun.',
      'Has one known moon named Dysnomia, after the Greek goddess of lawlessness.'
    ]
  },
  {
    id: 'haumea',
    name: 'Haumea',
    category: 'Dwarf Planet',
    radiusKm: 816.0,
    massKg: '4.01 × 10^21',
    distanceFromSunMillionKm: 6452,
    orbitalPeriodDays: 103774,
    surfaceGravityMs2: 0.44,
    surfaceGravityG: 0.045,
    surfaceTempC: { min: -241, max: -223, mean: -230 },
    atmosphere: ['None detected'],
    color: '#f1f5f9',
    peculiarity: 'Spins faster than any large equilibrium body in the solar system (day length 3.9 hours), stretched into a triaxial rugby ball shape.',
    humanAnalogy: 'A cosmic spinning top made of crystalline ice complete with its own dark ring system.',
    facts: [
      'First trans-Neptunian dwarf planet discovered to possess a ring system (70 km wide ring).',
      'Accompanied by two small icy moons, Hiʻiaka and Namaka.'
    ]
  },
  {
    id: 'makemake',
    name: 'Makemake',
    category: 'Dwarf Planet',
    radiusKm: 715.0,
    massKg: '3.1 × 10^21',
    distanceFromSunMillionKm: 6780,
    orbitalPeriodDays: 112897,
    surfaceGravityMs2: 0.50,
    surfaceGravityG: 0.051,
    surfaceTempC: { min: -243, max: -238, mean: -239 },
    atmosphere: ['Trace methane gas at perihelion'],
    color: '#fdba74',
    peculiarity: 'Coated in reddish-orange tholins formed by ultraviolet solar radiation breaking down frozen methane and ethane.',
    humanAnalogy: 'A brilliant reddish billiard ball orbiting in the far frozen reaches of the Kuiper Belt.',
    facts: [
      'Second brightest Kuiper Belt object after Pluto when viewed from Earth.',
      'Possesses a dark provisional moon dubbed MK2 (S/2015 136472 1).'
    ]
  },
  {
    id: 'sedna',
    name: 'Sedna',
    category: 'Dwarf Planet',
    radiusKm: 498.0,
    massKg: '1.0 × 10^21',
    distanceFromSunMillionKm: 12900,
    orbitalPeriodDays: 4160000,
    surfaceGravityMs2: 0.33,
    surfaceGravityG: 0.034,
    surfaceTempC: { min: -261, max: -250, mean: -258 },
    atmosphere: ['None detected'],
    color: '#b91c1c',
    peculiarity: 'One of the most extreme orbits known: takes 11,400 Earth years to orbit the Sun, swinging out to 937 AU into the inner Oort Cloud.',
    humanAnalogy: 'A silent cosmic wanderer that takes over 114 human centuries to circle the Sun once.',
    facts: [
      'One of the reddest objects in the solar system, nearly as red as Mars.',
      'Its detached orbit is key evidence cited for the gravitational presence of a hypothetical Planet Nine.'
    ]
  },

  // =========================================================================
  // GAS & ICE GIANTS
  // =========================================================================
  {
    id: 'jupiter',
    name: 'Jupiter',
    category: 'Gas Giant',
    radiusKm: 69911.0,
    massKg: '1.898 × 10^27',
    distanceFromSunMillionKm: 778.6,
    orbitalPeriodDays: 4332.59,
    surfaceGravityMs2: 24.79,
    surfaceGravityG: 2.53,
    surfaceTempC: { min: -145, max: -110, mean: -110 },
    atmosphere: ['89.8% Hydrogen', '10.2% Helium', 'Methane', 'Ammonia'],
    color: '#fb923c',
    peculiarity: 'More massive than all other solar system planets combined (318 Earths); Great Red Spot storm is bigger than Earth.',
    humanAnalogy: 'A cosmic vacuum cleaner whose immense gravity shields inner planets from catastrophic comet collisions.',
    facts: [
      'Spins so fast that a Jovian day is only 9 hours and 55 minutes, causing significant equatorial bulging.',
      'Deep inside, intense pressure turns hydrogen into liquid metallic hydrogen that conducts electricity like copper.'
    ]
  },
  {
    id: 'saturn',
    name: 'Saturn',
    category: 'Gas Giant',
    radiusKm: 58232.0,
    massKg: '5.683 × 10^26',
    distanceFromSunMillionKm: 1433.5,
    orbitalPeriodDays: 10759.22,
    surfaceGravityMs2: 10.44,
    surfaceGravityG: 1.06,
    surfaceTempC: { min: -178, max: -130, mean: -140 },
    atmosphere: ['96.3% Hydrogen', '3.25% Helium', 'Methane'],
    color: '#fef08a',
    peculiarity: 'Spectacular ring system spanning 282,000 km but only 10 to 30 meters thick; less dense than liquid water.',
    humanAnalogy: 'If you had a bathtub large enough to hold Saturn, the entire planet would float like a beach ball.',
    facts: [
      'Its rings are 99% pure water ice chunks ranging from pebble size to house-sized boulders.',
      'Has a persistent geometric hexagon storm spanning 29,000 km at its north pole.'
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    category: 'Ice Giant',
    radiusKm: 25362.0,
    massKg: '8.681 × 10^25',
    distanceFromSunMillionKm: 2872.5,
    orbitalPeriodDays: 30685.4,
    surfaceGravityMs2: 8.69,
    surfaceGravityG: 0.89,
    surfaceTempC: { min: -224, max: -197, mean: -216 },
    atmosphere: ['82.5% Hydrogen', '15.2% Helium', '2.3% Methane'],
    color: '#67e8f9',
    peculiarity: 'Tilted 97.77 degrees on its side; essentially rolls around the Sun like a bowling ball; coldest planetary atmosphere.',
    humanAnalogy: 'A planet knocked on its side by an Earth-sized impactor billions of years ago, giving it 42-year long seasons.',
    facts: [
      'Atmospheric methane absorbs red light, giving Uranus its serene cyan aquamarine hue.',
      'Diamond rain is theorized to fall through the mantle down to its rocky core.'
    ]
  },
  {
    id: 'neptune',
    name: 'Neptune',
    category: 'Ice Giant',
    radiusKm: 24622.0,
    massKg: '1.024 × 10^26',
    distanceFromSunMillionKm: 4495.1,
    orbitalPeriodDays: 60189.0,
    surfaceGravityMs2: 11.15,
    surfaceGravityG: 1.14,
    surfaceTempC: { min: -218, max: -200, mean: -214 },
    atmosphere: ['80% Hydrogen', '19% Helium', '1.5% Methane'],
    color: '#3b82f6',
    peculiarity: 'Fastest winds in the solar system, clocking supersonic speeds of over 2,100 km/h (Mach 1.7).',
    humanAnalogy: 'A deep azure stormy giant discovered purely through mathematical calculations before ever seen by telescope.',
    facts: [
      'Emits 2.6 times more internal heat than it receives from the distant Sun.',
      'Its Great Dark Spot storm system periodically appears and dissolves within years.'
    ]
  },

  // =========================================================================
  // MAJOR MOONS & OCEAN WORLDS
  // =========================================================================
  {
    id: 'luna',
    name: 'The Moon (Luna)',
    category: 'Major Moon',
    parentBody: 'Earth',
    radiusKm: 1737.4,
    massKg: '7.342 × 10^22',
    orbitalPeriodDays: 27.32,
    surfaceGravityMs2: 1.62,
    surfaceGravityG: 0.166,
    surfaceTempC: { min: -246, max: 120, mean: -20 },
    atmosphere: ['Virtually none (ultra-tenuous exosphere)'],
    color: '#cbd5e1',
    peculiarity: 'Tidally locked to Earth; formed ~4.5 billion years ago when a Mars-sized protoplanet (Theia) slammed into proto-Earth.',
    humanAnalogy: 'Earth’s gravitational stabilizer, keeping our axial tilt steady and driving ocean tides.',
    facts: [
      'Permanently shadowed craters at the lunar south pole (e.g. Shackleton) preserve billions of tons of water ice.',
      'The Moon is slowly drifting away from Earth at a rate of 3.8 centimeters per year.'
    ]
  },
  {
    id: 'titan',
    name: 'Titan',
    category: 'Major Moon',
    parentBody: 'Saturn',
    radiusKm: 2574.7,
    massKg: '1.345 × 10^23',
    orbitalPeriodDays: 15.94,
    surfaceGravityMs2: 1.35,
    surfaceGravityG: 0.14,
    surfaceTempC: { min: -182, max: -179, mean: -179.5 },
    atmosphere: ['95% Nitrogen', '4.9% Methane', 'Hydrocarbons'],
    color: '#eab308',
    peculiarity: 'The only moon with a dense atmosphere (1.5x Earth pressure) and liquid lakes/seas of methane and ethane.',
    humanAnalogy: 'With low gravity and thick air, humans wearing warm thermal suits could flap artificial wings and fly like birds.',
    facts: [
      'Larger than the planet Mercury and 50% wider than Earth’s Moon.',
      'Has a complete hydrological methane cycle with methane rain, cloud systems, and river deltas into Kraken Mare.'
    ]
  },
  {
    id: 'europa',
    name: 'Europa',
    category: 'Major Moon',
    parentBody: 'Jupiter',
    radiusKm: 1560.8,
    massKg: '4.8 × 10^22',
    orbitalPeriodDays: 3.55,
    surfaceGravityMs2: 1.315,
    surfaceGravityG: 0.134,
    surfaceTempC: { min: -220, max: -160, mean: -171 },
    atmosphere: ['Trace Oxygen (from photolysis of water ice)'],
    color: '#e0e7ff',
    peculiarity: 'Conceals a global saltwater ocean under a 15–25 km ice shell, containing 2x to 3x all of Earth’s ocean water combined.',
    humanAnalogy: 'The prime candidate in the solar system for extraterrestrial hydrothermal vent life.',
    facts: [
      'Surface is the smoothest solid object in the solar system, crisscrossed by reddish linear fracture bands called lineae.',
      'Jupiter’s intense tidal flexing continuously warms its rocky interior and ocean floor.'
    ]
  },
  {
    id: 'ganymede',
    name: 'Ganymede',
    category: 'Major Moon',
    parentBody: 'Jupiter',
    radiusKm: 2634.1,
    massKg: '1.482 × 10^23',
    orbitalPeriodDays: 7.15,
    surfaceGravityMs2: 1.428,
    surfaceGravityG: 0.146,
    surfaceTempC: { min: -203, max: -113, mean: -163 },
    atmosphere: ['Trace Oxygen exosphere'],
    color: '#a3a3a3',
    peculiarity: 'The largest moon in the Solar System (larger than Mercury and Pluto) and the only moon with its own intrinsic magnetic field.',
    humanAnalogy: 'A true planetary-class moon wrapped in its own magnetosphere and nested saltwater ocean layers.',
    facts: [
      'If it orbited the Sun instead of Jupiter, Ganymede would be classified as a full terrestrial planet.',
      'Possesses an auroral belt driven by its internal dynamo interacting with Jupiter’s magnetosphere.'
    ]
  },
  {
    id: 'io',
    name: 'Io',
    category: 'Major Moon',
    parentBody: 'Jupiter',
    radiusKm: 1821.6,
    massKg: '8.932 × 10^22',
    orbitalPeriodDays: 1.77,
    surfaceGravityMs2: 1.796,
    surfaceGravityG: 0.183,
    surfaceTempC: { min: -160, max: 1200, mean: -130 },
    atmosphere: ['Sulfur Dioxide volcanic plumes'],
    color: '#facc15',
    peculiarity: 'The most volcanically active body in the Solar System with 400+ active volcanoes shooting sulfur plumes 500 km high.',
    humanAnalogy: 'Tidal flexing from Jupiter and Europa squeezes Io like a stress ball, turning its interior into molten magma.',
    facts: [
      'Surface looks like a psychedelic pizza covered in yellow sulfur and red silicate lava flows.',
      'Lava lakes on Io reach temperatures exceeding 1,200°C—hotter than most lava on Earth.'
    ]
  },
  {
    id: 'enceladus',
    name: 'Enceladus',
    category: 'Major Moon',
    parentBody: 'Saturn',
    radiusKm: 252.1,
    massKg: '1.08 × 10^20',
    orbitalPeriodDays: 1.37,
    surfaceGravityMs2: 0.113,
    surfaceGravityG: 0.011,
    surfaceTempC: { min: -201, max: -128, mean: -198 },
    atmosphere: ['Water vapor geyser plumes', 'Molecular Hydrogen', 'Methane'],
    color: '#f8fafc',
    peculiarity: 'Geysers blast saltwater and organic molecules directly into space through southern "tiger stripe" fractures, feeding Saturn’s E-ring.',
    humanAnalogy: 'The highest reflectivity (albedo 0.99) in the solar system—shines like a pure snowball in space.',
    facts: [
      'Cassini spacecraft flew through its plumes and detected silica nanoparticles indicating 90°C hydrothermal vents on the seafloor.',
      'Direct proof of chemical energy sources that could sustain methanogenic microbial life.'
    ]
  },
  {
    id: 'callisto',
    name: 'Callisto',
    category: 'Major Moon',
    parentBody: 'Jupiter',
    radiusKm: 2410.3,
    massKg: '1.076 × 10^23',
    orbitalPeriodDays: 16.69,
    surfaceGravityMs2: 1.235,
    surfaceGravityG: 0.126,
    surfaceTempC: { min: -193, max: -108, mean: -139 },
    atmosphere: ['Trace Carbon Dioxide exosphere'],
    color: '#6b7280',
    peculiarity: 'The most heavily cratered object in the Solar System; surface is an untouched 4-billion-year-old impact record.',
    humanAnalogy: 'A pristine solar system museum whose crust has never been resurfaced by volcanoes or tectonics.',
    facts: [
      'Valhalla crater basin is a massive multi-ring impact scar stretching 3,800 kilometers across.',
      'Radiation levels on Callisto are so low that it is the safest Jovian moon for future human crewed bases.'
    ]
  },
  {
    id: 'triton',
    name: 'Triton',
    category: 'Major Moon',
    parentBody: 'Neptune',
    radiusKm: 1353.4,
    massKg: '2.14 × 10^22',
    orbitalPeriodDays: -5.88,
    surfaceGravityMs2: 0.779,
    surfaceGravityG: 0.079,
    surfaceTempC: { min: -238, max: -234, mean: -235 },
    atmosphere: ['Thin Nitrogen', 'Traces of Methane and CO'],
    color: '#93c5fd',
    peculiarity: 'Orbits backwards (retrograde); a captured Kuiper Belt dwarf planet that will eventually be shredded into rings by tidal forces in ~3.6 billion years.',
    humanAnalogy: 'Pluto’s icy twin sibling that was gravitationally kidnapped by Neptune.',
    facts: [
      'One of the coldest surfaces measured in the universe at -235°C (38 Kelvin).',
      'Cryovolcanoes erupt dark geysers of liquid nitrogen and dust 8 kilometers into its tenuous sky.'
    ]
  },
  {
    id: 'mimas',
    name: 'Mimas',
    category: 'Major Moon',
    parentBody: 'Saturn',
    radiusKm: 198.2,
    massKg: '3.75 × 10^19',
    orbitalPeriodDays: 0.942,
    surfaceGravityMs2: 0.064,
    surfaceGravityG: 0.0065,
    surfaceTempC: { min: -209, max: -181, mean: -196 },
    atmosphere: ['None'],
    color: '#e2e8f0',
    peculiarity: 'Dominated by the 130 km Herschel Crater, giving it an uncanny resemblance to the Star Wars Death Star.',
    humanAnalogy: 'An icy celestial bowling ball that barely survived an impact that nearly shattered it to pieces.',
    facts: [
      'Recent orbital libration data published in 2024 suggests Mimas may harbor a hidden young liquid ocean 20-30 km beneath its crust.',
      'A 100 kg human on Mimas would weigh only 650 grams.'
    ]
  },
  {
    id: 'iapetus',
    name: 'Iapetus',
    category: 'Major Moon',
    parentBody: 'Saturn',
    radiusKm: 734.5,
    massKg: '1.81 × 10^21',
    orbitalPeriodDays: 79.32,
    surfaceGravityMs2: 0.223,
    surfaceGravityG: 0.023,
    surfaceTempC: { min: -173, max: -143, mean: -160 },
    atmosphere: ['None'],
    color: '#71717a',
    peculiarity: 'Famous two-toned "yin-yang" world: leading hemisphere is coal-black (Cassini Regio) while trailing hemisphere is snow-white.',
    humanAnalogy: 'A celestial walnut with an equatorial mountain ridge 20 kilometers high running around its waist.',
    facts: [
      'The equatorial ridge reaches more than twice the height of Mount Everest.',
      'Dark dust is thermal-volatilized and redeposited, maintaining extreme albedo contrast.'
    ]
  },
  {
    id: 'charon',
    name: 'Charon',
    category: 'Major Moon',
    parentBody: 'Pluto',
    radiusKm: 606.0,
    massKg: '1.586 × 10^21',
    orbitalPeriodDays: 6.387,
    surfaceGravityMs2: 0.288,
    surfaceGravityG: 0.029,
    surfaceTempC: { min: -240, max: -215, mean: -220 },
    atmosphere: ['Ultra-tenuous exosphere'],
    color: '#94a3b8',
    peculiarity: 'Over half the diameter of Pluto; the barycenter of their orbit lies outside Pluto, making them a true double dwarf planet.',
    humanAnalogy: 'Pluto’s locked dancing partner, sharing mutual tidal lock so the same faces always gaze at each other.',
    facts: [
      'Hosts Mordor Macula, a dark reddish-brown polar cap of tholins trapped from Pluto’s escaping atmosphere.',
      'Crisscrossed by gigantic extensional chasmata four times deeper than the Grand Canyon.'
    ]
  },

  // =========================================================================
  // EXOTIC EXOPLANETS
  // =========================================================================
  {
    id: 'wasp-76b',
    name: 'WASP-76b',
    category: 'Exoplanet',
    radiusKm: 128000.0,
    massKg: '1.74 × 10^27',
    distanceFromSunMillionKm: 6040000,
    orbitalPeriodDays: 1.81,
    surfaceGravityMs2: 9.8,
    surfaceGravityG: 1.0,
    surfaceTempC: { min: 1500, max: 2400, mean: 2100 },
    atmosphere: ['Vaporized Iron', 'Sodium', 'Calcium', 'Water Vapor'],
    color: '#ef4444',
    peculiarity: 'Ultra-hot Jupiter where daytime temperatures reach 2,400°C, vaporizing metals; winds carry iron gas to nightside where it rains liquid iron droplets.',
    humanAnalogy: 'A literal molten iron furnace planet orbiting just 5 million km from its host star.',
    facts: [
      'Tidally locked: one face perpetually incinerated by stellar fury while the other faces eternal night.',
      'Strong 18,000 km/h wind currents transport vaporized iron across the evening terminator line.'
    ]
  },
  {
    id: 'trappist-1e',
    name: 'TRAPPIST-1e',
    category: 'Exoplanet',
    radiusKm: 5800.0,
    massKg: '4.13 × 10^24',
    orbitalPeriodDays: 6.1,
    surfaceGravityMs2: 9.12,
    surfaceGravityG: 0.93,
    surfaceTempC: { min: -50, max: 25, mean: -10 },
    atmosphere: ['Dense nitrogen or volatile envelope under JWST study'],
    color: '#10b981',
    peculiarity: 'Rocky planet in the habitable zone of an ultra-cool red dwarf 39 light-years away; similar radius and mass to Earth.',
    humanAnalogy: 'Earth’s closest climatic cousin where liquid surface oceans could realistically exist under an orange dwarf sun.',
    facts: [
      'Six sister planets orbit so closely that they appear as large as the full Moon in TRAPPIST-1e’s sky.',
      'JWST transmission spectroscopy is actively targeting its atmosphere for biogenic chemical fingerprints.'
    ]
  },
  {
    id: 'proxima-b',
    name: 'Proxima Centauri b',
    category: 'Exoplanet',
    radiusKm: 6560.0,
    massKg: '6.98 × 10^24',
    orbitalPeriodDays: 11.186,
    surfaceGravityMs2: 10.7,
    surfaceGravityG: 1.09,
    surfaceTempC: { min: -90, max: 30, mean: -39 },
    atmosphere: ['Unknown; subjected to frequent stellar coronal mass ejections'],
    color: '#38bdf8',
    peculiarity: 'The closest known exoplanet to our Solar System at just 4.24 light-years distance, located in the habitable zone of Proxima Centauri.',
    humanAnalogy: 'The primary interstellar destination for humanity’s first flyby probes like Breakthrough Starshot.',
    facts: [
      'Orbits only 7.5 million kilometers from its red dwarf star—20 times closer than Earth to the Sun.',
      'Receives 400 times more X-ray and EUV radiation than Earth from superflares.'
    ]
  },
  {
    id: '55-cancri-e',
    name: '55 Cancri e (Janssen)',
    category: 'Exoplanet',
    radiusKm: 12423.0,
    massKg: '4.78 × 10^25',
    orbitalPeriodDays: 0.7365,
    surfaceGravityMs2: 21.0,
    surfaceGravityG: 2.14,
    surfaceTempC: { min: 1400, max: 2570, mean: 2000 },
    atmosphere: ['Carbon Monoxide', 'Carbon Dioxide secondary atmosphere detected by JWST'],
    color: '#f59e0b',
    peculiarity: 'A carbon-rich super-Earth whose interior under immense pressure is theorized to be composed substantially of diamond.',
    humanAnalogy: 'A molten diamond super-Earth whose surface is covered in glowing supercritical magma oceans.',
    facts: [
      'Orbits its star in just 17 hours and 41 minutes.',
      'In 2024, JWST detected atmospheric carbon monoxide and carbon dioxide, the first rocky exoplanet atmosphere confirmed.'
    ]
  },
  {
    id: 'hd-189733b',
    name: 'HD 189733 b',
    category: 'Exoplanet',
    radiusKm: 80500.0,
    massKg: '2.14 × 10^27',
    orbitalPeriodDays: 2.2185,
    surfaceGravityMs2: 22.0,
    surfaceGravityG: 2.24,
    surfaceTempC: { min: 700, max: 1200, mean: 930 },
    atmosphere: ['Silicate glass particles', 'Hydrogen', 'Methane', 'Water Vapor'],
    color: '#2563eb',
    peculiarity: 'Deep cobalt-blue appearance, not from oceans, but from silicate particles scattering blue light in 8,700 km/h screaming winds that blow glass sideways.',
    humanAnalogy: 'A stormy blue gas giant where you would be cut to ribbons by supersonic sideways-flying liquid molten glass rain.',
    facts: [
      'Located 64.5 light-years away in the constellation Vulpecula.',
      'Winds blow at Mach 7 across the evening terminator.'
    ]
  },
  {
    id: 'k2-18b',
    name: 'K2-18b',
    category: 'Exoplanet',
    radiusKm: 16628.0,
    massKg: '5.16 × 10^25',
    orbitalPeriodDays: 32.94,
    surfaceGravityMs2: 12.4,
    surfaceGravityG: 1.26,
    surfaceTempC: { min: -20, max: 40, mean: 5 },
    atmosphere: ['Hydrogen-rich envelope', 'Methane', 'Carbon Dioxide', 'Candidate Dimethyl Sulfide (DMS)'],
    color: '#06b6d4',
    peculiarity: 'Candidate "Hycean" world—a hydrogen-rich atmosphere overlying a global liquid water ocean in the habitable zone.',
    humanAnalogy: 'A warm ocean world 2.6 times the radius of Earth that might produce biosignature gases.',
    facts: [
      'JWST detected methane and carbon dioxide with an apparent absence of ammonia, consistent with an ocean beneath.',
      'Tantalizing detection of dimethyl sulfide (DMS), on Earth produced almost exclusively by marine phytoplankton.'
    ]
  },
  {
    id: 'kepler-452b',
    name: 'Kepler-452b',
    category: 'Exoplanet',
    radiusKm: 10400.0,
    massKg: '2.98 × 10^25',
    orbitalPeriodDays: 384.8,
    surfaceGravityMs2: 18.0,
    surfaceGravityG: 1.83,
    surfaceTempC: { min: -40, max: 50, mean: -8 },
    atmosphere: ['Likely thick nitrogen-CO2 envelope'],
    color: '#14b8a6',
    peculiarity: 'Often called "Earth’s Older Cousin": orbits a G2V Sun-like star with a year length (385 days) almost identical to Earth.',
    humanAnalogy: 'A glimpse into Earth’s future 1.5 billion years from now as its aging host star slowly brightens.',
    facts: [
      'Located 1,402 light-years away in the constellation Cygnus.',
      'Its star is 6 billion years old—1.5 billion years older than our Sun.'
    ]
  },
  {
    id: 'wasp-12b',
    name: 'WASP-12b',
    category: 'Exoplanet',
    radiusKm: 132000.0,
    massKg: '2.68 × 10^27',
    orbitalPeriodDays: 1.09,
    surfaceGravityMs2: 10.3,
    surfaceGravityG: 1.05,
    surfaceTempC: { min: 2200, max: 2600, mean: 2500 },
    atmosphere: ['Carbon-rich gas envelope stripped by Roche lobe overflow'],
    color: '#18181b',
    peculiarity: 'Tidally deformed into the shape of an egg; being actively devoured by its host star and will be completely consumed in ~10 million years.',
    humanAnalogy: 'An egg-shaped sacrificial giant whose atmosphere is being siphoned off into a stellar feeding stream.',
    facts: [
      'Reflects almost zero light (albedo < 0.064), making it blacker than fresh asphalt.',
      'Surface temperature is comparable to that of a cool red dwarf star.'
    ]
  },
  {
    id: 'lhs-1140b',
    name: 'LHS 1140 b',
    category: 'Exoplanet',
    radiusKm: 10980.0,
    massKg: '3.34 × 10^25',
    orbitalPeriodDays: 24.737,
    surfaceGravityMs2: 18.5,
    surfaceGravityG: 1.88,
    surfaceTempC: { min: -50, max: 20, mean: -15 },
    atmosphere: ['Nitrogen-dominated volatile envelope indicated by 2024 JWST data'],
    color: '#0284c7',
    peculiarity: 'One of the most promising habitable candidates known; 2024 JWST transmission data strongly points to an "eyeball" ocean world with a liquid ocean surrounded by ice.',
    humanAnalogy: 'A calm, dense water-rich super-Earth bathed in peaceful red dwarf light without volatile flares.',
    facts: [
      'Located 48 light-years away in the constellation Cetus.',
      'Could hold an ocean containing up to 20% of the planet’s total mass.'
    ]
  },

  // =========================================================================
  // STARS & STELLAR GIANTS
  // =========================================================================
  {
    id: 'sun',
    name: 'The Sun (Sol)',
    category: 'Star',
    radiusKm: 696340.0,
    massKg: '1.989 × 10^30',
    surfaceGravityMs2: 274.0,
    surfaceGravityG: 27.9,
    surfaceTempC: { min: 5500, max: 15000000, mean: 5505 },
    atmosphere: ['73.46% Hydrogen', '24.85% Helium', 'Oxygen', 'Carbon', 'Iron'],
    color: '#facc15',
    peculiarity: 'The golden powerhouse anchor of our entire planetary system, fusing 600 million tons of hydrogen into helium every second in its core.',
    humanAnalogy: 'Contains 99.86% of all the mass in the entire Solar System.',
    facts: [
      'Light produced in the core takes 100,000 years to bounce through the radiative zone to reach the surface.',
      'The outer corona is over 1,000,000°C—hundreds of times hotter than the visible surface.'
    ]
  },
  {
    id: 'proxima-centauri',
    name: 'Proxima Centauri',
    category: 'Star',
    radiusKm: 107280.0,
    massKg: '2.446 × 10^29',
    surfaceGravityMs2: 1410.0,
    surfaceGravityG: 143.7,
    surfaceTempC: { min: 2700, max: 3050, mean: 2770 },
    atmosphere: ['Hydrogen', 'Helium', 'Molecular bands of Titanium Oxide'],
    color: '#dc2626',
    peculiarity: 'The closest star to Earth besides our Sun (4.246 light-years); an ultra-cool red dwarf that will burn steadily for 4 trillion years.',
    humanAnalogy: 'A small, hyper-efficient stellar engine that will outlive our Sun by hundreds of times.',
    facts: [
      'Only 1.5 times the radius of Jupiter, yet 129 times more massive.',
      'Prone to vicious superflares that increase its brightness by thousands of percent in minutes.'
    ]
  },
  {
    id: 'sirius-a',
    name: 'Sirius A',
    category: 'Star',
    radiusKm: 1190000.0,
    massKg: '4.1 × 10^30',
    surfaceGravityMs2: 191.0,
    surfaceGravityG: 19.5,
    surfaceTempC: { min: 9800, max: 10200, mean: 9940 },
    atmosphere: ['Hydrogen', 'Helium', 'Enhanced metallic lines'],
    color: '#f8fafc',
    peculiarity: 'The brightest star in Earth’s night sky (apparent magnitude -1.46); 25 times more luminous than our Sun.',
    humanAnalogy: 'A blazing diamond lantern in the constellation Canis Major.',
    facts: [
      'Only 8.6 light-years from Earth, approaching us at 5.5 km/s.',
      'Orbits with a companion white dwarf, Sirius B (The Pup), discovered in 1862.'
    ]
  },
  {
    id: 'betelgeuse',
    name: 'Betelgeuse',
    category: 'Stellar Monster',
    radiusKm: 617000000.0,
    massKg: '3.3 × 10^31',
    surfaceGravityMs2: 0.005,
    surfaceGravityG: 0.0005,
    surfaceTempC: { min: 3200, max: 3700, mean: 3500 },
    atmosphere: ['Convective Hydrogen-Helium red supergiant outer shell', 'Carbon monoxide', 'Silicate dust'],
    color: '#ea580c',
    peculiarity: 'A pulsating red supergiant in Orion that has entered its late carbon-burning phase; will detonate in a supernova within the next 100,000 years.',
    humanAnalogy: 'If placed at the center of our solar system, its pulsing surface would engulf Mars and extend toward Jupiter.',
    facts: [
      'When it detonates as a Type II supernova, it will shine as bright as the full Moon in daylight for months.',
      'Experienced the "Great Dimming" in 2019-2020 when a massive surface ejection cooled into obscuring dust.'
    ]
  },
  {
    id: 'rigel',
    name: 'Rigel',
    category: 'Stellar Monster',
    radiusKm: 54900000.0,
    massKg: '4.2 × 10^31',
    surfaceGravityMs2: 1.1,
    surfaceGravityG: 0.11,
    surfaceTempC: { min: 11500, max: 12500, mean: 12100 },
    atmosphere: ['Hydrogen', 'Helium', 'Ionized Metals'],
    color: '#93c5fd',
    peculiarity: 'A blazing blue supergiant in Orion radiating 120,000 times more light energy than our Sun.',
    humanAnalogy: 'A blinding thermonuclear powerhouse whose single-second light output equals what our Sun produces in 33 hours.',
    facts: [
      'Located 860 light-years away; if moved to the distance of Sirius, it would illuminate the landscape brighter than the full Moon.',
      'Burns its fuel at a furious pace and will end in a supernova within a few million years.'
    ]
  },
  {
    id: 'stephenson-2-18',
    name: 'Stephenson 2-18',
    category: 'Stellar Monster',
    radiusKm: 1500000000,
    massKg: '6 × 10^31',
    surfaceGravityMs2: 0.0003,
    surfaceGravityG: 0.00003,
    surfaceTempC: { min: 2900, max: 3200, mean: 3000 },
    atmosphere: ['Convective Hydrogen and Helium red hypergiant envelope'],
    color: '#dc2626',
    peculiarity: 'The largest known star in the universe: 2,150 times the radius of the Sun. If placed at the center of our solar system, its surface would engulf Saturn’s orbit!',
    humanAnalogy: 'Light takes nearly 9 hours just to travel around the circumference of this single monster star once.',
    facts: [
      'Volume is approximately 10 billion times greater than our Sun.',
      'Approaching core collapse; will end its life in a cataclysmic hypernova leaving behind a supermassive stellar black hole.'
    ]
  },
  {
    id: 'r136a1',
    name: 'R136a1',
    category: 'Stellar Monster',
    radiusKm: 29000000.0,
    massKg: '4.3 × 10^32',
    surfaceGravityMs2: 34.0,
    surfaceGravityG: 3.47,
    surfaceTempC: { min: 46000, max: 53000, mean: 50000 },
    atmosphere: ['Violent Wolf-Rayet stellar wind stripping 10^-4 solar masses per year'],
    color: '#818cf8',
    peculiarity: 'The most massive and luminous star known: ~215 to 250 Solar Masses, radiating 4.7 million times more light than the Sun.',
    humanAnalogy: 'The absolute heavyweight champion of stellar astrophysics, pushing the theoretical upper limit of stellar formation.',
    facts: [
      'Located in the Tarantula Nebula within the Large Magellanic Cloud (163,000 light-years away).',
      'Surface temperature exceeds 50,000°C—nearly 10 times hotter than the Sun.'
    ]
  },

  // =========================================================================
  // REMNANTS & BLACK HOLES
  // =========================================================================
  {
    id: 'sirius-b',
    name: 'Sirius B (The Pup)',
    category: 'Remnant & Black Hole',
    radiusKm: 5800.0,
    massKg: '2.03 × 10^30',
    surfaceGravityMs2: 4000000.0,
    surfaceGravityG: 407747.0,
    surfaceTempC: { min: 24500, max: 25500, mean: 25200 },
    atmosphere: ['Pure Hydrogen degenerate outer layer'],
    color: '#e0e7ff',
    peculiarity: 'An Earth-sized white dwarf containing the entire mass of the Sun. One teaspoon of Sirius B matter would weigh over 5 tons on Earth.',
    humanAnalogy: 'The corpse of an ancient star crushed down by gravity until electron degeneracy stops further collapse.',
    facts: [
      'First white dwarf ever confirmed through gravitational redshift spectroscopy.',
      'Surface gravity is 400,000 times stronger than Earth.'
    ]
  },
  {
    id: 'crab-pulsar',
    name: 'Crab Pulsar (PSR B0531+21)',
    category: 'Remnant & Black Hole',
    radiusKm: 12.0,
    massKg: '2.8 × 10^30',
    surfaceGravityMs2: 130000000000.0,
    surfaceGravityG: 13251783894.0,
    surfaceTempC: { min: 1000000, max: 2000000, mean: 1500000 },
    atmosphere: ['Plasma magnetosphere shooting relativistic particle jets'],
    color: '#06b6d4',
    peculiarity: 'A 24 km wide city-sized neutron star spinning 30.2 times every second, formed in the historic supernova of 1054 AD.',
    humanAnalogy: 'A mountain-sized nuclear atomic nucleus spinning as fast as a kitchen blender, flashing cosmic radio beams across space.',
    facts: [
      'Magnetic field is 3.8 trillion Gauss (10^12 G).',
      'A single cubic centimeter weighs approximately 400 million metric tons.'
    ]
  },
  {
    id: 'sgr-1806-20',
    name: 'Magnetar SGR 1806-20',
    category: 'Remnant & Black Hole',
    radiusKm: 11.0,
    massKg: '3.0 × 10^30',
    surfaceGravityMs2: 160000000000.0,
    surfaceGravityG: 16309887869.0,
    surfaceTempC: { min: 2000000, max: 5000000, mean: 3500000 },
    atmosphere: ['Vacuum polarized by quantum electrodynamics (QED) magnetic field'],
    color: '#d946ef',
    peculiarity: 'Possesses the strongest magnetic field ever recorded in the universe (10^15 Gauss, 100 billion Tesla). Would dissolve the electron clouds of your atoms from 1,000 km away.',
    humanAnalogy: 'A magnetic monster whose starquake burst in 2004 saturated spacecraft detectors and physically altered Earth’s upper ionosphere from 50,000 light-years away.',
    facts: [
      'Magnetic field is 1,000 times stronger than typical neutron stars and 2 quadrillion times stronger than Earth’s.',
      'In a fraction of a second during a 2004 starquake, it released more energy than our Sun emits in 250,000 years.'
    ]
  },
  {
    id: 'sagittarius-a-star',
    name: 'Sagittarius A*',
    category: 'Remnant & Black Hole',
    radiusKm: 12700000.0, // Event horizon Schwarzschild radius
    massKg: '8.54 × 10^36',
    surfaceGravityMs2: 35000000.0, // Near horizon tidal
    surfaceGravityG: 3567788.0,
    surfaceTempC: { min: -273.15, max: 1000000000, mean: 100000000 }, // Hawking radiation vs Accretion flow
    atmosphere: ['Relativistic plasma accretion flow and magnetic synchrotron belt'],
    color: '#a855f7',
    peculiarity: 'The supermassive black hole at the gravitational heart of our Milky Way galaxy: 4.297 million solar masses anchoring 200 billion stars.',
    humanAnalogy: 'The galactic gravitational anchor around which our entire solar system revolves once every 230 million years.',
    facts: [
      'Imaged directly by the Event Horizon Telescope (EHT) collaboration in May 2022.',
      'Its event horizon has a diameter of ~25.4 million kilometers—about 17 times the diameter of our Sun.'
    ]
  },
  {
    id: 'ton-618',
    name: 'TON 618',
    category: 'Remnant & Black Hole',
    radiusKm: 195000000000.0, // Schwarzschild radius ~1,300 AU
    massKg: '1.31 × 10^41',
    surfaceGravityMs2: 2300.0, // At event horizon
    surfaceGravityG: 234.0,
    surfaceTempC: { min: -273.15, max: 10000000000, mean: 1000000000 },
    atmosphere: ['Hyperluminous quasar accretion disc shining with 140 trillion solar luminosities'],
    color: '#ec4899',
    peculiarity: 'The most massive known black hole in the observable universe: 66 billion solar masses. Its event horizon spans 390 billion kilometers (over 40 times Neptune’s orbit)!',
    humanAnalogy: 'A single black hole weighing more than all the stars in the Milky Way combined, whose accretion disk outshines its host galaxy by 140 times.',
    facts: [
      'Takes light over 15 days just to cross its Schwarzschild event horizon.',
      'Located 10.8 billion light-years away in the constellation Canes Venatici.'
    ]
  },

  // =========================================================================
  // ASTEROIDS & MINOR BODIES
  // =========================================================================
  {
    id: '16-psyche',
    name: '16 Psyche',
    category: 'Asteroid & Minor Body',
    radiusKm: 111.0,
    massKg: '2.29 × 10^19',
    distanceFromSunMillionKm: 437.5,
    orbitalPeriodDays: 1828,
    surfaceGravityMs2: 0.144,
    surfaceGravityG: 0.015,
    surfaceTempC: { min: -193, max: -83, mean: -138 },
    atmosphere: ['None'],
    color: '#e2e8f0',
    peculiarity: 'An exposed metallic protoplanetary core made of pure nickel, iron, and precious platinum-group metals; target of NASA’s Psyche mission (arriving 2029).',
    humanAnalogy: 'A metallic cosmic treasure chest estimated to hold raw metal value exceeding $10,000 quadrillion.',
    facts: [
      'Represents the shattered heart of a planet that was violently smashed apart during early solar system formation.',
      'Density is roughly 4.0 g/cm³, far higher than typical rocky asteroids.'
    ]
  },
  {
    id: '4-vesta',
    name: '4 Vesta',
    category: 'Asteroid & Minor Body',
    radiusKm: 262.7,
    massKg: '2.59 × 10^20',
    distanceFromSunMillionKm: 353.4,
    orbitalPeriodDays: 1325,
    surfaceGravityMs2: 0.25,
    surfaceGravityG: 0.025,
    surfaceTempC: { min: -188, max: -18, mean: -103 },
    atmosphere: ['None'],
    color: '#a8a29e',
    peculiarity: 'The second largest asteroid in the main belt and the only asteroid visible to the naked eye under dark skies; possesses an intact metallic core, mantle, and basaltic crust.',
    humanAnalogy: 'A frozen baby planet that survived the violent early solar system intact.',
    facts: [
      'South pole is dominated by the Rheasilvia impact crater whose central peak rises 22 kilometers high—nearly triple Mt. Everest.',
      'About 5% of all meteorites found on Earth originated directly from Vesta (HED meteorites).'
    ]
  },
  {
    id: '101955-bennu',
    name: '101955 Bennu',
    category: 'Asteroid & Minor Body',
    radiusKm: 0.245,
    massKg: '7.33 × 10^10',
    distanceFromSunMillionKm: 168.5,
    orbitalPeriodDays: 436.6,
    surfaceGravityMs2: 0.000008,
    surfaceGravityG: 0.0000008,
    surfaceTempC: { min: -73, max: 7, mean: -33 },
    atmosphere: ['None'],
    color: '#475569',
    peculiarity: 'A spinning-top carbonaceous rubble pile asteroid sampled by NASA’s OSIRIS-REx in 2020 and returned to Earth in 2023, delivering pristine primordial organic matter and water-bearing clay.',
    humanAnalogy: 'A loose gravel heap held together so weakly by gravity that an astronaut pushing off the surface would escape into orbit.',
    facts: [
      'OSIRIS-REx collected 121.6 grams of sample, containing carbon, water, nitrogen, phosphorus, and magnesium-sodium phosphate.',
      'Has a 1-in-1,750 chance of impacting Earth between 2178 and 2290.'
    ]
  },
  {
    id: '99942-apophis',
    name: '99942 Apophis',
    category: 'Asteroid & Minor Body',
    radiusKm: 0.170,
    massKg: '6.1 × 10^10',
    distanceFromSunMillionKm: 137.9,
    orbitalPeriodDays: 323.6,
    surfaceGravityMs2: 0.000005,
    surfaceGravityG: 0.0000005,
    surfaceTempC: { min: -100, max: 20, mean: -40 },
    atmosphere: ['None'],
    color: '#78716c',
    peculiarity: 'A 340-meter elongated stony asteroid that will pass within 31,600 km of Earth on April 13, 2029—closer than geostationary satellites and visible to the naked eye.',
    humanAnalogy: 'A city-block-sized skyscraper flying closer to Earth than television satellites.',
    facts: [
      'Will be visibly seen moving across the night sky with the naked eye by over 2 billion people in Europe, Africa, and Asia.',
      'Earth’s gravitational tidal forces in 2029 will trigger surface asteroid-quakes and alter its spin state.'
    ]
  },
  {
    id: 'oumuamua',
    name: "1I/'Oumuamua",
    category: 'Asteroid & Minor Body',
    radiusKm: 0.115,
    massKg: '4.0 × 10^7',
    surfaceGravityMs2: 0.000001,
    surfaceGravityG: 0.0000001,
    surfaceTempC: { min: -220, max: 50, mean: -100 },
    atmosphere: ['None'],
    color: '#991b1b',
    peculiarity: 'The first interstellar object detected passing through our solar system (discovered October 2017), tumbling end-over-end on an open hyperbolic trajectory from deep space.',
    humanAnalogy: 'A cigar-shaped cosmic messenger from another star system that visited our Sun once and will never return.',
    facts: [
      'Exhibited non-gravitational acceleration as it left the Sun, consistent with outgassing of trapped molecular hydrogen.',
      'Estimated aspect ratio of 10:1—either shaped like a long cigar or a flat cosmic pancake.'
    ]
  }
];
