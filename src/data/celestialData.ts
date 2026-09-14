import { CelestialBody } from '../types';

export const CELESTIAL_BODIES: CelestialBody[] = [
  {
    id: 'sun',
    name: 'Sun (Sol)',
    type: 'Star',
    radiusKm: 696340,
    massKg: '1.989 × 10^30',
    distanceFromSunMillionKm: 0, // Central Star
    orbitalPeriodDays: 0,
    rotationalPeriodHours: 648, // ~27 Earth days differential rotation
    dayLengthHours: 648,
    orbitalVelocityKmS: 220, // Galactic orbit speed around Sagittarius A*
    axialTiltDeg: 7.25,
    surfaceGravityMs2: 274.0,
    surfaceGravityG: 27.9,
    surfaceTempC: { min: 5500, max: 15000000, mean: 5505 }, // Core is 15M C, surface 5500 C
    meanTempC: 5505,
    summary: 'The G2V Yellow Dwarf star at the gravitational heart of our solar system, containing 99.86% of all system mass and fusing 600 million metric tons of hydrogen into helium every second.',
    atmosphere: ['73% Hydrogen', '25% Helium', '1% Oxygen', '0.4% Carbon', '0.2% Iron/Neon'],
    textureUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2048&auto=format&fit=crop',
    color: '#fbbf24',
    orbitColor: '#f59e0b',
    totalMoonsCount: 0,
    majorMoons: [],
    funnyFacts: [
      "Holds 99.86% of the solar system's entire mass. The rest of us—including massive Jupiter—are literally just microscopic rounding errors.",
      "A photon born in the Sun's core takes up to 170,000 years bumping around like a drunk pinball to reach the surface, but only 8 minutes to photobomb your morning coffee on Earth.",
      "The Sun's corona (outer halo) reaches millions of degrees, while the surface is 'only' 5,500°C. That is like walking 50 paces away from a campfire and spontaneously turning into plasma."
    ],
    educationalFacts: [
      "Fuses 600 million metric tons of hydrogen into helium every second via the proton-proton chain, converting 4 million tons of matter into pure energy (E = mc²).",
      "In approximately 5 billion years, when core hydrogen exhausts, the Sun will expand into a Red Giant star, engulfing Mercury and Venus, and boiling away Earth's oceans before shedding its outer layers into a planetary nebula with a glowing White Dwarf core.",
      "The Sun is currently classified as a G2V main-sequence Yellow Dwarf star, roughly halfway through its 10-billion-year lifespan."
    ],
    historicalDiscovery: "Known since prehistoric antiquity; Heliocentric model mathematically proven by Nicolaus Copernicus (1543) and Galileo Galilei (1610).",
    humanAnalogy: "If the Sun were scaled down to the size of a standard basketball, Earth would be a sesame seed sitting 26 meters away."
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'Planet',
    radiusKm: 2439.7,
    massKg: '3.301 × 10^23',
    distanceFromSunMillionKm: 57.9, // 0.387 AU
    orbitalPeriodDays: 87.97,
    rotationalPeriodHours: 1407.6, // 58.6 Earth days
    dayLengthHours: 1407.6,
    orbitalVelocityKmS: 47.36,
    axialTiltDeg: 0.034,
    surfaceGravityMs2: 3.7,
    surfaceGravityG: 0.38,
    surfaceTempC: { min: -180, max: 430, mean: 167 },
    meanTempC: 167,
    summary: 'The smallest and innermost planet, locked in a 3:2 spin-orbit resonance with extreme thermal swings from -180°C nights to 430°C daytime peaks, housing a giant iron core occupying 85% of its radius.',
    atmosphere: ['Trace Exosphere: 42% Oxygen', '29% Sodium', '22% Hydrogen', '6% Helium'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg',
    color: '#94a3b8',
    orbitColor: '#a8a8a8',
    totalMoonsCount: 0,
    majorMoons: [],
    funnyFacts: [
      "The ultimate toxic ex of the solar system: bakes at 430°C on the sunny side, drops to -180°C in the dark. Absolutely zero atmospheric buffer to soften the mood.",
      "Mercury is literally shrinking like a cold raisin. As its colossal iron core cools, the planet has contracted by over 7 km, buckling its surface into towering 3-kilometer-high cliffs.",
      "Sunrises on Mercury are a psychological thriller: because of its eccentric orbit, the Sun rises, stops, backs up like it forgot its car keys, and then moves forward again."
    ],
    educationalFacts: [
      "Mercury possesses a 3:2 spin-orbit resonance; it rotates on its axis exactly three times for every two revolutions around the Sun.",
      "Despite temperatures hot enough to melt zinc, NASA's MESSENGER spacecraft discovered billions of tons of water ice permanently frozen inside perpetually shadowed craters at Mercury's poles.",
      "Its iron core occupies roughly 85% of the planet's radius—making it more like a giant molten cannonball with a thin rocky veneer."
    ],
    historicalDiscovery: "Recorded by Sumerian astronomers in the 2nd millennium BC; radar mapped by NASA Mariner 10 (1974) and MESSENGER (2011-2015).",
    humanAnalogy: "You would celebrate two full birthdays on Mercury before a single calendar day (sunrise to sunset) ever completed."
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'Planet',
    radiusKm: 6051.8,
    massKg: '4.867 × 10^24',
    distanceFromSunMillionKm: 108.2, // 0.723 AU
    orbitalPeriodDays: 224.7,
    rotationalPeriodHours: -5832.5, // 243 Earth days retrograde
    dayLengthHours: 5832.5,
    orbitalVelocityKmS: 35.02,
    axialTiltDeg: 177.36,
    surfaceGravityMs2: 8.87,
    surfaceGravityG: 0.90,
    surfaceTempC: { min: 462, max: 480, mean: 464 },
    meanTempC: 464,
    summary: "Earth's sister world wrapped in thick carbon dioxide clouds and sulfuric acid, generating a runaway greenhouse effect that makes it the hottest planet in the Solar System at 464°C.",
    atmosphere: ['96.5% Carbon Dioxide', '3.5% Nitrogen', 'Clouds of concentrated Sulfuric Acid'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
    color: '#fbbf24',
    orbitColor: '#ffd984',
    totalMoonsCount: 0,
    majorMoons: [],
    funnyFacts: [
      "Spins completely backwards compared to the rest of the planets. The Sun rises in the west and sets in the east, if you could see through the sulfuric acid smog.",
      "Its day (243 Earth days) is longer than its entire year (225 Earth days). You would literally work a shift, take a nap, and wake up before the sun even reached noon.",
      "Surface pressure is 92 times that of Earth—the equivalent of being 900 meters underwater. Soviet Venera probes survived on the surface for barely an hour before being crushed into flat pancakes."
    ],
    educationalFacts: [
      "Venus is the hottest planet in the Solar System—hotter even than Mercury—due to a catastrophic runaway greenhouse effect that traps 99% of infrared radiation.",
      "The planet 'snows' heavy metallic minerals like bismuth and galena onto high volcanic peaks, while sulfuric acid rain evaporates in mid-air before ever touching the boiling crust (virga).",
      "Scientists theorize that Venus may have had temperate liquid oceans for 2 to 3 billion years before catastrophic volcanic outgassing vaporized the hydrosphere."
    ],
    historicalDiscovery: "Known as both the 'Morning Star' and 'Evening Star' before Pythagoras determined they were the same body in the 6th century BC.",
    humanAnalogy: "A pizza placed on a rock on Venus would be thoroughly cooked in less than 7 seconds."
  },
  {
    id: 'earth',
    name: 'Earth (Terra)',
    type: 'Planet',
    radiusKm: 6371.0,
    massKg: '5.972 × 10^24',
    distanceFromSunMillionKm: 149.6, // 1.000 AU (1 Astronomical Unit)
    orbitalPeriodDays: 365.256,
    rotationalPeriodHours: 23.934,
    dayLengthHours: 23.934,
    orbitalVelocityKmS: 29.78,
    axialTiltDeg: 23.44,
    surfaceGravityMs2: 9.807,
    surfaceGravityG: 1.00,
    surfaceTempC: { min: -89.2, max: 56.7, mean: 15 },
    meanTempC: 15,
    summary: 'The only known cradle of life in the cosmos, rich with liquid water oceans, dynamic plate tectonics, a breathable nitrogen-oxygen atmosphere, and a protective geomagnetic shield.',
    atmosphere: ['78.08% Nitrogen', '20.95% Oxygen', '0.93% Argon', '0.04% Carbon Dioxide'],
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    color: '#38bdf8',
    orbitColor: '#38bdf8',
    totalMoonsCount: 1,
    majorMoons: [
      {
        name: 'The Moon (Luna)',
        radiusKm: 1737.4,
        orbitalPeriodDays: 27.32,
        peculiarity: 'Tidally locked to Earth; slowly spiraling away at 3.8 cm per year due to gravitational tidal drag.'
      }
    ],
    funnyFacts: [
      "The only verified planet in the known universe with tacos, corgis, and existential dread. Statistically speaking, we are the Florida of the Milky Way.",
      "Deep inside Earth's mantle sits a hidden reservoir of water locked within the crystalline lattice of ringwoodite rock, holding three times the volume of all surface oceans combined.",
      "Protected by a roaring magnetic shield generated by a swirling dynamo of liquid molten iron in the outer core, yet humanity still worries about Wi-Fi signals."
    ],
    educationalFacts: [
      "Earth is the densest planet in the Solar System (5.51 g/cm³), primarily due to its massive nickel-iron metallic core.",
      "Plate tectonics on Earth act as a global thermostat: carbonate-silicate weathering traps atmospheric CO₂ in rocks, preventing the runaway greenhouse fate of Venus.",
      "Our Moon is unusually large relative to its parent planet (27% Earth's diameter), which stabilizes Earth's axial tilt between 22.1° and 24.5°, preventing chaotic weather cataclysms over geological epochs."
    ],
    historicalDiscovery: "Home world of human civilization.",
    humanAnalogy: "If Earth were an apple, the entirety of our breathable atmosphere and the deepest oceanic trenches would be thinner than the apple's skin."
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'Planet',
    radiusKm: 3389.5,
    massKg: '6.417 × 10^23',
    distanceFromSunMillionKm: 227.9, // 1.524 AU
    orbitalPeriodDays: 686.98,
    rotationalPeriodHours: 24.623, // 1 Sol = 24h 37m
    dayLengthHours: 24.623,
    orbitalVelocityKmS: 24.07,
    axialTiltDeg: 25.19,
    surfaceGravityMs2: 3.72,
    surfaceGravityG: 0.38,
    surfaceTempC: { min: -140, max: 20, mean: -63 },
    meanTempC: -63,
    summary: "The Red Planet: a cold, desert world home to the solar system's tallest shield volcano (Olympus Mons), deepest canyon (Valles Marineris), and seasonal dry ice polar caps.",
    atmosphere: ['95.3% Carbon Dioxide', '2.6% Nitrogen', '1.9% Argon', '0.16% Oxygen'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/2048px-OSIRIS_Mars_true_color.jpg',
    color: '#ef4444',
    orbitColor: '#f87171',
    totalMoonsCount: 2,
    majorMoons: [
      {
        name: 'Phobos',
        radiusKm: 11.26,
        orbitalPeriodDays: 0.32, // 7.6 hours
        peculiarity: 'Orbits faster than Mars rotates, rising in the west and setting in the east twice a day; will crash into Mars in ~50 million years.'
      },
      {
        name: 'Deimos',
        radiusKm: 6.2,
        orbitalPeriodDays: 1.26,
        peculiarity: 'Tiny captured asteroid barely larger than a city; escape velocity is so low (11 m/s) a human could jump into orbit on a bicycle.'
      }
    ],
    funnyFacts: [
      "The only known planet inhabited entirely by operational robots. It is humanity's most expensive remote-controlled parking lot.",
      "Home to Olympus Mons—a volcanic monster three times taller than Mt. Everest and wide as the state of Arizona. Its summit literally pokes into the vacuum of space.",
      "Sunsets on Mars glow a stunning, eerie blue. The fine rusty iron dust suspended in the thin air scatters blue light forward into your eye while absorbing red."
    ],
    educationalFacts: [
      "Mars has no global magnetic field today; it cooled rapidly ~4 billion years ago, allowing the solar wind to strip 99% of its atmospheric blanket into interplanetary space.",
      "Valles Marineris is the grandest canyon in the solar system, stretching over 4,000 km long and 7 km deep—spanning the distance from New York to Los Angeles.",
      "Subsurface radar soundings by Mars Express revealed deep underground lakes of hypersaline liquid water beneath the south polar ice cap."
    ],
    historicalDiscovery: "Documented by ancient Egyptian astronomers in 1534 BC as 'Horus the Red'; first orbited by Mariner 9 in 1971.",
    humanAnalogy: "If you jumped on Mars, you could easily leap 2.6 times higher than on Earth and take twice as long to land."
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'Planet',
    radiusKm: 69911.0,
    massKg: '1.898 × 10^27',
    distanceFromSunMillionKm: 778.5, // 5.204 AU
    orbitalPeriodDays: 4332.59, // 11.86 Earth years
    rotationalPeriodHours: 9.925, // Fastest spin in Solar System
    dayLengthHours: 9.925,
    orbitalVelocityKmS: 13.07,
    axialTiltDeg: 3.13,
    surfaceGravityMs2: 24.79,
    surfaceGravityG: 2.53,
    surfaceTempC: { min: -145, max: 24000, mean: -110 }, // Core temp is 24,000 C
    meanTempC: -110,
    summary: 'A colossal Gas Giant with 2.5 times the mass of all other planets combined, rotating once every 9.9 hours and featuring the centuries-old Great Red Spot anticyclone alongside 95 moons.',
    atmosphere: ['89.8% Hydrogen', '10.2% Helium', 'Trace Methane', 'Ammonia Ice Crystals'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg',
    color: '#fb923c',
    orbitColor: '#f97316',
    totalMoonsCount: 95, // 95 recognized moons by IAU
    majorMoons: [
      {
        name: 'Io',
        radiusKm: 1821.6,
        orbitalPeriodDays: 1.77,
        peculiarity: 'The most volcanically active body in the Solar System, with 400+ active volcanoes spewing liquid sulfur plumes 500 km high due to tidal flexing.'
      },
      {
        name: 'Europa',
        radiusKm: 1560.8,
        orbitalPeriodDays: 3.55,
        peculiarity: 'An ultra-smooth ice shell hiding a global saltwater ocean with 2x more water than all Earth oceans combined; top candidate for extraterrestrial life.'
      },
      {
        name: 'Ganymede',
        radiusKm: 2634.1,
        orbitalPeriodDays: 7.15,
        peculiarity: 'The largest moon in the Solar System—larger than Mercury and Pluto—and the only moon with its own internally generated magnetic field.'
      },
      {
        name: 'Callisto',
        radiusKm: 2410.3,
        orbitalPeriodDays: 16.69,
        peculiarity: 'The most heavily cratered object in the Solar System, essentially a giant ancient ball of frozen ice and rock untouched for 4 billion years.'
      },
      {
        name: 'Amalthea',
        radiusKm: 83.5,
        orbitalPeriodDays: 0.50,
        peculiarity: 'An irregular, blood-red moon orbiting inside Io, emitting more heat than it receives from the Sun.'
      }
    ],
    minorMoonsSummary: '90 additional irregular outer moons categorized into the Himalia, Carme, Ananke, and Pasiphae groups.',
    funnyFacts: [
      "The solar system's ultimate bouncer. Its colossal gravity routinely deflects or eats doomsday comets before they can annihilate the inner planets.",
      "So unfathomably massive that it doesn't even orbit the center of the Sun. Their combined center of mass (the barycenter) sits in empty space 48,000 km above the Sun's surface!",
      "The Great Red Spot is an anticyclonic hurricane wider than Earth that has been screaming across the cloud decks for at least 350 years without a single coffee break."
    ],
    educationalFacts: [
      "Contains 2.5 times the mass of all other planets in the Solar System combined. If it were ~75 times more massive, it would have ignited nuclear fusion as a Red Dwarf star.",
      "At depths of 10,000 km, hydrogen gas is compressed under millions of atmospheres into liquid metallic hydrogen—an electrically conductive fluid that powers a magnetic field 20,000 times stronger than Earth's.",
      "Jupiter completes a full axial rotation in just 9 hours and 55 minutes, causing its equator to bulge out noticeably into an oblate spheroid."
    ],
    historicalDiscovery: "Observed since antiquity; the 4 Galilean moons discovered by Galileo Galilei in 1610 overturned geocentrism.",
    humanAnalogy: "You could dump over 1,300 Earths inside Jupiter's volume with plenty of room left for a galactic buffet."
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'Planet',
    radiusKm: 58232.0,
    massKg: '5.683 × 10^26',
    distanceFromSunMillionKm: 1433.5, // 9.582 AU
    orbitalPeriodDays: 10759.22, // 29.45 Earth years
    rotationalPeriodHours: 10.57,
    dayLengthHours: 10.57,
    orbitalVelocityKmS: 9.69,
    axialTiltDeg: 26.73,
    surfaceGravityMs2: 10.44,
    surfaceGravityG: 1.06,
    surfaceTempC: { min: -178, max: 11700, mean: -139 },
    meanTempC: -139,
    summary: 'Celebrated for its majestic system of ice-and-rock rings spanning 282,000 km, Saturn is a low-density gas giant featuring a persistent hexagonal polar jet stream and 146 natural satellites.',
    atmosphere: ['96.3% Hydrogen', '3.25% Helium', 'Trace Methane and Ammonia'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Saturn_during_Equinox.jpg/2048px-Saturn_during_Equinox.jpg',
    color: '#fef08a',
    orbitColor: '#fde047',
    rings: {
      innerRadius: 1.25,
      outerRadius: 2.35,
      colors: ['#d4c4a8', '#e8dbb8', '#a89878', '#504838', '#c4b498']
    },
    totalMoonsCount: 146, // Official IAU record holder as of 2024
    majorMoons: [
      {
        name: 'Titan',
        radiusKm: 2574.7,
        orbitalPeriodDays: 15.95,
        peculiarity: 'Larger than Mercury; has a dense nitrogen atmosphere (1.5x Earth pressure) and liquid hydrocarbon lakes of methane and ethane.'
      },
      {
        name: 'Enceladus',
        radiusKm: 252.1,
        orbitalPeriodDays: 1.37,
        peculiarity: 'Shoots cryovolcanic geysers of water vapor, organic molecules, and silica nano-grains into space, feeding Saturn’s majestic E ring.'
      },
      {
        name: 'Mimas',
        radiusKm: 198.2,
        orbitalPeriodDays: 0.94,
        peculiarity: 'Features the colossal 130 km Herschel Crater, giving it an unmistakable, uncanny resemblance to the Star Wars Death Star.'
      },
      {
        name: 'Iapetus',
        radiusKm: 734.5,
        orbitalPeriodDays: 79.32,
        peculiarity: 'A two-toned walnut moon: one hemisphere is pitch black (coal-like carbon), the other is brilliant white ice, with a 20-km-tall equatorial ridge.'
      },
      {
        name: 'Rhea',
        radiusKm: 763.8,
        orbitalPeriodDays: 4.52,
        peculiarity: 'Saturn’s second-largest moon; a dirty snowball of pure water ice with an extremely faint oxygen-carbon dioxide exosphere.'
      }
    ],
    minorMoonsSummary: '141 additional moons spanning the Inuit, Norse, and Gallic orbital clusters.',
    funnyFacts: [
      "The ultimate cosmic overachiever with the rings, but here is the punchline: its density is lower than water (0.687 g/cm³). If you found a bathtub big enough, Saturn would literally bob around like a rubber ducky.",
      "Those breathtaking, majestic rings spanning 282,000 km across are only about 10 to 30 meters thick! Proportionally, they are thousands of times thinner than a razor blade.",
      "Deep inside Saturn's sky, lightning storms 10,000 times more energetic than Earth's bake atmospheric methane into carbon soot, which gravity compresses into a steady downpour of solid diamonds."
    ],
    educationalFacts: [
      "Saturn's rings are 99% pure water ice, with traces of tholins and silicates, and are dynamically kept in place by 'shepherd moons' like Prometheus and Pandora.",
      "The rings are young in cosmic terms (10 to 100 million years old, likely from a shredded icy moon) and are rapidly draining into Saturn's atmosphere as 'ring rain'—they may completely vanish within 300 million years.",
      "Saturn's north pole features a bizarre, persistent hexagonal jet stream spanning 30,000 km wide with wind speeds exceeding 320 km/h."
    ],
    historicalDiscovery: "Observed since prehistoric times; Galileo first spotted its 'ears' in 1610, and Christiaan Huygens correctly identified the ring system in 1655.",
    humanAnalogy: "If you laid Saturn's rings out on a football field, their relative thickness would be 1,000 times thinner than a sheet of paper."
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'Planet',
    radiusKm: 25362.0,
    massKg: '8.681 × 10^25',
    distanceFromSunMillionKm: 2872.5, // 19.20 AU
    orbitalPeriodDays: 30685.4, // 84.01 Earth years
    rotationalPeriodHours: -17.24, // Retrograde spin
    dayLengthHours: 17.24,
    orbitalVelocityKmS: 6.80,
    axialTiltDeg: 97.77, // Rotates on its side
    surfaceGravityMs2: 8.69,
    surfaceGravityG: 0.89,
    surfaceTempC: { min: -224, max: 4700, mean: -195 }, // Coldest planetary atmosphere
    meanTempC: -195,
    summary: 'A tilted Ice Giant rotating on its side at a 97.8° axial tilt, yielding 42-year extreme seasons, the coldest recorded planetary atmosphere (-224°C), and 13 faint rings.',
    atmosphere: ['83% Hydrogen', '15% Helium', '2.3% Methane (gives cyan hue)'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
    color: '#38bdf8',
    orbitColor: '#7dd3fc',
    totalMoonsCount: 28, // 28 moons (new moon S/2023 U 1 confirmed in 2024)
    majorMoons: [
      {
        name: 'Titania',
        radiusKm: 788.4,
        orbitalPeriodDays: 8.71,
        peculiarity: 'Largest moon of Uranus; sliced by enormous rift valleys (graben) up to 1,600 km long, signaling an ancient expanding subsurface ocean.'
      },
      {
        name: 'Oberon',
        radiusKm: 761.4,
        orbitalPeriodDays: 13.46,
        peculiarity: 'Second-largest and outermost major moon; heavily cratered with mysterious dark carbon-rich material filling the floor of its craters.'
      },
      {
        name: 'Miranda',
        radiusKm: 235.8,
        orbitalPeriodDays: 1.41,
        peculiarity: 'The Frankenstein moon: features Verona Rupes, the tallest sheer cliff in the solar system (20 km high). A dropped rock takes 12 minutes to hit the bottom!'
      },
      {
        name: 'Ariel',
        radiusKm: 578.9,
        orbitalPeriodDays: 2.52,
        peculiarity: 'The brightest and geologically youngest of Uranus’s moons, crisscrossed by expansive valleys and recent volcanic resurfacing.'
      }
    ],
    minorMoonsSummary: '24 additional inner and irregular moons, almost all named after characters from William Shakespeare and Alexander Pope.',
    funnyFacts: [
      "Decided to roll through the cosmos like a bowling ball. Its 98-degree tilt means its north and south poles take turns staring directly at the Sun for 42 consecutive years of daylight, followed by 42 years of pitch-black winter.",
      "Holds the record for the coldest recorded atmosphere in the Solar System (-224°C), making Hoth look like a tropical resort destination.",
      "Yes, the methane in its upper atmosphere absorbs red light and gives it a pristine cyan-blue hue, but deeper down, the atmosphere smells distinctly like rotten eggs (hydrogen sulfide)."
    ],
    educationalFacts: [
      "Planetary scientists believe Uranus was struck by an Earth-sized protoplanet early in solar system history, permanently knocking its spin axis onto its side.",
      "Uranus emits virtually no excess internal heat unlike Jupiter, Saturn, and Neptune—its core seems to have frozen over or is trapped beneath a thermal boundary layer.",
      "It possesses 13 faint, dark, narrow rings composed of boulders up to several meters wide, discovered in 1977 during a stellar occultation."
    ],
    historicalDiscovery: "Discovered on March 13, 1781 by Sir William Herschel using a homemade reflecting telescope—the first planet discovered with a telescope.",
    humanAnalogy: "If you jumped off Verona Rupes on Uranus's moon Miranda, you would have enough time to listen to three pop songs before landing softly at 200 km/h due to microgravity."
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'Planet',
    radiusKm: 24622.0,
    massKg: '1.024 × 10^26',
    distanceFromSunMillionKm: 4495.1, // 30.07 AU
    orbitalPeriodDays: 60189.0, // 164.8 Earth years
    rotationalPeriodHours: 16.11,
    dayLengthHours: 16.11,
    orbitalVelocityKmS: 5.43,
    axialTiltDeg: 28.32,
    surfaceGravityMs2: 11.15,
    surfaceGravityG: 1.14,
    surfaceTempC: { min: -218, max: 7000, mean: -201 },
    meanTempC: -201,
    summary: 'The outermost major planet, an azure-blue Ice Giant whipped by supersonic winds reaching 2,100 km/h, famously predicted with mathematics before direct telescope confirmation.',
    atmosphere: ['80% Hydrogen', '19% Helium', '1.5% Methane (intense azure blue)'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg',
    color: '#2563eb',
    orbitColor: '#3b82f6',
    totalMoonsCount: 16, // 16 moons (new moon S/2021 N 1 discovered in 2024)
    majorMoons: [
      {
        name: 'Triton',
        radiusKm: 1353.4,
        orbitalPeriodDays: -5.88, // Retrograde orbit
        peculiarity: 'Orbits backwards (retrograde); a captured Kuiper Belt dwarf planet with cryogeysers of nitrogen ice. Will be torn apart into a ring in 3.6 billion years.'
      },
      {
        name: 'Proteus',
        radiusKm: 210.0,
        orbitalPeriodDays: 1.12,
        peculiarity: 'A heavily battered, soot-dark irregular moon as large as a body can get without gravity pulling it into a sphere.'
      },
      {
        name: 'Nereid',
        radiusKm: 170.0,
        orbitalPeriodDays: 360.14,
        peculiarity: 'Has the most eccentric orbit of any moon in the solar system (distance varies from 1.4M km to 9.6M km).'
      }
    ],
    minorMoonsSummary: '13 additional small inner and distant irregular satellites.',
    funnyFacts: [
      "Features supersonic atmospheric winds tearing around at 2,100 km/h (1,300 mph). That is faster than the speed of sound on Earth. If you opened an umbrella here, you would achieve orbit.",
      "The only planet discovered using pure mathematics before anyone ever laid eyes on it through a telescope. Urbain Le Verrier literally did calculus on a piece of paper, told an observatory where to look, and nailed it on the first night.",
      "Since its discovery in 1846, Neptune has only completed ONE full orbit around the Sun (finishing its first birthday in 2011)."
    ],
    educationalFacts: [
      "Neptune is an Ice Giant with a thick mantle of superheated, supercritical water, ammonia, and methane slush—sometimes called a 'water-ammonia ocean'.",
      "NASA's Voyager 2 flew by in 1989 and photographed the 'Great Dark Spot'—an Earth-sized storm that had completely vanished when Hubble checked back five years later, replaced by a new storm elsewhere.",
      "Its captured moon Triton has a surface temperature of -235°C, making it one of the coldest known spots in the entire solar system."
    ],
    historicalDiscovery: "Predicted mathematically by John Couch Adams and Urbain Le Verrier; visually confirmed September 23, 1846 by Johann Gottfried Galle.",
    humanAnalogy: "Neptune is so distant that high-noon sunlight on its clouds is 900 times dimmer than on Earth, resembling a dim twilight."
  },
  // ==========================================
  // DWARF PLANETS (5 Officially Recognized by IAU)
  // ==========================================
  {
    id: 'ceres',
    name: 'Ceres',
    type: 'Dwarf Planet',
    radiusKm: 473.0,
    massKg: '9.39 × 10^20',
    distanceFromSunMillionKm: 414.0, // 2.77 AU (Main Asteroid Belt)
    orbitalPeriodDays: 1682.0, // 4.61 Earth years
    rotationalPeriodHours: 9.07,
    dayLengthHours: 9.07,
    orbitalVelocityKmS: 17.88,
    axialTiltDeg: 4.0,
    surfaceGravityMs2: 0.28,
    surfaceGravityG: 0.029,
    surfaceTempC: { min: -143, max: -38, mean: -106 },
    meanTempC: -106,
    summary: 'The largest celestial body in the main Asteroid Belt and the only dwarf planet in the inner Solar System, harboring subsurface water ice and gleaming sodium carbonate salt spots in Occator Crater.',
    atmosphere: ['Extremely tenuous water vapor exosphere produced by sublimating ice'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29.jpg',
    color: '#9ca3af',
    orbitColor: '#cbd5e1',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Ceres has no known natural satellites.',
    funnyFacts: [
      "Ceres accounts for an astonishing 33% of the entire mass of the asteroid belt all by itself. The rest of the millions of asteroids are basically crumbs compared to it.",
      "Features mysterious bright glowing spots inside Occator Crater that baffled astronomers until NASA's Dawn probe proved they are sodium carbonate salt deposits left behind by briny slush volcanoes.",
      "When Giuseppe Piazzi discovered Ceres on New Year's Day 1801, he originally named it 'Ceres Ferdinandea' after King Ferdinand, but astronomers quietly dropped the royal plug."
    ],
    educationalFacts: [
      "Ceres has a differentiated structure with a rocky core and a water-ice-rich mantle containing more freshwater than all of Earth's lakes and rivers combined.",
      "NASA's Dawn orbiter confirmed high hydrogen concentrations in the regolith and discovered Ahuna Mons, a 4-kilometer-high cryovolcano that erupted salty icy mud instead of lava.",
      "In 2006, the International Astronomical Union classified Ceres as a dwarf planet alongside Pluto and Eris."
    ],
    historicalDiscovery: "Discovered on January 1, 1801 by Italian astronomer Giuseppe Piazzi at the Palermo Astronomical Observatory.",
    humanAnalogy: "Standing on Ceres, gravity is so gentle that a 70 kg person weighs barely 2 kg—a light hop would send you soaring over a two-story house."
  },
  {
    id: 'pluto',
    name: 'Pluto',
    type: 'Dwarf Planet',
    radiusKm: 1188.3,
    massKg: '1.303 × 10^22',
    distanceFromSunMillionKm: 5906.4, // 39.48 AU (Kuiper Belt)
    orbitalPeriodDays: 90560.0, // 247.9 Earth years
    rotationalPeriodHours: -153.29, // Retrograde rotation
    dayLengthHours: 153.29,
    orbitalVelocityKmS: 4.74,
    axialTiltDeg: 122.53,
    surfaceGravityMs2: 0.62,
    surfaceGravityG: 0.063,
    surfaceTempC: { min: -240, max: -218, mean: -229 },
    meanTempC: -229,
    summary: 'Beloved monarch of the Kuiper Belt, a complex ice world adorned with a colossal nitrogen-ice glacier heart (Tombaugh Regio), 3-kilometer water-ice mountain peaks, and layered blue atmospheric hazes.',
    atmosphere: ['99% Nitrogen', '0.5% Methane', 'Trace Carbon Monoxide & photochemical tholin smog hazes'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg',
    color: '#d97706',
    orbitColor: '#f59e0b',
    totalMoonsCount: 5,
    majorMoons: [
      {
        name: 'Charon',
        radiusKm: 606.0,
        orbitalPeriodDays: 6.387,
        peculiarity: 'Half the diameter of Pluto; mutually tidally locked in a binary orbital dance around a barycenter in open space.'
      },
      {
        name: 'Nix',
        radiusKm: 25.0,
        orbitalPeriodDays: 24.85,
        peculiarity: 'Tumbles chaotically along its orbit due to gravitational perturbations from the Pluto-Charon binary pair.'
      },
      {
        name: 'Hydra',
        radiusKm: 27.0,
        orbitalPeriodDays: 38.2,
        peculiarity: 'Ultra-reflective water ice surface discovered by the Hubble Space Telescope in 2005.'
      }
    ],
    minorMoonsSummary: '2 additional chaotic outer moons: Kerberos and Styx.',
    funnyFacts: [
      "Pluto and Charon are a true binary planet system—their common center of mass lies in empty space between them. They orbit an invisible point in the void!",
      "Pluto has a giant glacier in the shape of a Valentine's heart called Sputnik Planitia. It is actively circulating and convective, like a giant cosmic lava lamp made of nitrogen ice.",
      "From Pluto's surface, the midday Sun appears as an intense pinprick of light only slightly larger than Venus appears from Earth, yet still bright enough to read a book by."
    ],
    educationalFacts: [
      "NASA's New Horizons probe revealed young mountains of solid water ice floating on convective nitrogen glaciers, with virtually zero impact craters in Sputnik Planitia.",
      "Pluto's orbit has an eccentricity of 0.25 and an inclination of 17.16°; between 1979 and 1999, it was closer to the Sun than Neptune.",
      "Its atmosphere periodically freezes and collapses onto the surface as frost during aphelion, then sublimates back into gas as it draws nearer to the Sun."
    ],
    historicalDiscovery: "Discovered on February 18, 1930 by Clyde Tombaugh at the Lowell Observatory in Flagstaff, Arizona.",
    humanAnalogy: "A single day on Pluto lasts 6.4 Earth days—giving you almost an entire standard work week between sunrise and sunset."
  },
  {
    id: 'haumea',
    name: 'Haumea',
    type: 'Dwarf Planet',
    radiusKm: 816.0, // Triaxial ellipsoid ~2,100 × 1,680 × 1,074 km
    massKg: '4.006 × 10^21',
    distanceFromSunMillionKm: 6452.0, // 43.13 AU (Kuiper Belt)
    orbitalPeriodDays: 103774.0, // 284.1 Earth years
    rotationalPeriodHours: 3.915, // Fastest rotation of any large body in Solar System
    dayLengthHours: 3.915,
    orbitalVelocityKmS: 4.53,
    axialTiltDeg: 126.0,
    surfaceGravityMs2: 0.44,
    surfaceGravityG: 0.045,
    surfaceTempC: { min: -241, max: -223, mean: -232 },
    meanTempC: -232,
    summary: 'A bizarre, ultra-rapidly spinning trans-Neptunian dwarf planet distorted by centrifugal force into the elongated shape of an American football, complete with its own ring system and crystalline water ice surface.',
    atmosphere: ['Negligible, frozen volatile exosphere'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Haumea_Rotation.gif',
    color: '#cbd5e1',
    orbitColor: '#94a3b8',
    totalMoonsCount: 2,
    majorMoons: [
      {
        name: 'Hiʻiaka',
        radiusKm: 160.0,
        orbitalPeriodDays: 49.46,
        peculiarity: 'Composed almost purely of crystalline water ice, orbiting in Haumea’s equatorial plane.'
      },
      {
        name: 'Namaka',
        radiusKm: 85.0,
        orbitalPeriodDays: 18.28,
        peculiarity: 'Highly inclined inner moon that perturbs Hiʻiaka through gravitational resonance.'
      }
    ],
    minorMoonsSummary: 'Surrounded by a dense collisional family of icy debris and a 70 km wide ring.',
    funnyFacts: [
      "Haumea spins so dizzyingly fast (completing a full rotation in just 3.9 hours) that centrifugal force has pulled it into a rugby-ball shape.",
      "In 2017, astronomers observed Haumea block a background star and detected a 70 km wide ring encircling it—the first ring discovered around a trans-Neptunian body.",
      "Named after Haumea, the Hawaiian goddess of fertility and creation, whose children were born from different parts of her body."
    ],
    educationalFacts: [
      "Haumea is the parent body of the only recognized collisional family in the Kuiper Belt, created billions of years ago when an ancient impact tore away much of its ice mantle.",
      "Its surface is coated in pure crystalline water ice that should turn amorphous in decades from cosmic rays, hinting at ongoing internal cryo-resurfacing."
    ],
    historicalDiscovery: "Discovered in 2004-2005 by teams led by Mike Brown at Caltech and J.L. Ortiz at Sierra Nevada Observatory.",
    humanAnalogy: "If you jumped on Haumea's equator, its rapid rotation creates centrifugal lift that cancels out half its gravity, making you feel twice as light as at the poles."
  },
  {
    id: 'makemake',
    name: 'Makemake',
    type: 'Dwarf Planet',
    radiusKm: 715.0,
    massKg: '3.1 × 10^21',
    distanceFromSunMillionKm: 6850.0, // 45.79 AU (Classical Kuiper Belt)
    orbitalPeriodDays: 111800.0, // 306.1 Earth years
    rotationalPeriodHours: 22.83,
    dayLengthHours: 22.83,
    orbitalVelocityKmS: 4.41,
    axialTiltDeg: 29.0,
    surfaceGravityMs2: 0.50,
    surfaceGravityG: 0.051,
    surfaceTempC: { min: -243, max: -238, mean: -240 },
    meanTempC: -240,
    summary: 'A radiant reddish classical Kuiper Belt dwarf planet covered in frozen methane, ethane, and nitrogen pellets, named after the creator god of humanity in the mythology of Easter Island (Rapa Nui).',
    atmosphere: ['Transient methane exosphere active when closest to the Sun'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Makemake_and_its_moon.jpg',
    color: '#ea580c',
    orbitColor: '#f97316',
    totalMoonsCount: 1,
    majorMoons: [
      {
        name: 'MK2 (S/2015 (136472) 1)',
        radiusKm: 87.0,
        orbitalPeriodDays: 12.4,
        peculiarity: 'Coal-black moon discovered by Hubble in 2015, with an albedo 50 times darker than Makemake itself.'
      }
    ],
    minorMoonsSummary: '1 known moon orbiting at ~21,000 km distance.',
    funnyFacts: [
      "Before its official naming by the IAU, the discovery team nicknamed it 'Easterbunny' because it was first spotted on March 31, 2005, just days after Easter Sunday.",
      "Its surface is frosted with methane ice grains as large as marbles, which have turned reddish-brown from millions of years of cosmic ultraviolet radiation.",
      "It is the second brightest known Kuiper Belt object after Pluto, easily detectable with advanced amateur telescopes."
    ],
    educationalFacts: [
      "In 2011, Makemake passed in front of an 18th-magnitude star; the light vanished abruptly without dimming, demonstrating that it lacks a persistent global atmosphere.",
      "Spectroscopic analysis indicates that Makemake's surface methane is depleted in nitrogen compared to Pluto, indicating a distinct thermal evolution."
    ],
    historicalDiscovery: "Discovered March 31, 2005 by Mike Brown, Chad Trujillo, and David Rabinowitz at Palomar Observatory.",
    humanAnalogy: "At 46 times Earth's distance from the Sun, midday illumination feels like an eerie midnight twilight on Earth."
  },
  {
    id: 'eris',
    name: 'Eris',
    type: 'Dwarf Planet',
    radiusKm: 1163.0,
    massKg: '1.66 × 10^22', // 27% more massive than Pluto!
    distanceFromSunMillionKm: 10120.0, // 67.78 AU (Scattered Disc, aphelion 97.6 AU)
    orbitalPeriodDays: 203830.0, // 558.0 Earth years
    rotationalPeriodHours: 25.9,
    dayLengthHours: 25.9,
    orbitalVelocityKmS: 3.43,
    axialTiltDeg: 78.0,
    surfaceGravityMs2: 0.82,
    surfaceGravityG: 0.084,
    surfaceTempC: { min: -246, max: -217, mean: -231 },
    meanTempC: -231,
    summary: 'The most massive dwarf planet in the Solar System—27% heavier than Pluto—whose discovery on a wild 44-degree inclined scattered disc orbit sparked the historic 2006 IAU planet definition controversy.',
    atmosphere: ['Frozen nitrogen/methane glaze that temporarily thaws into a micro-atmosphere at perihelion'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Eris_and_dysnomia2.jpg',
    color: '#f1f5f9',
    orbitColor: '#e2e8f0',
    totalMoonsCount: 1,
    majorMoons: [
      {
        name: 'Dysnomia',
        radiusKm: 350.0,
        orbitalPeriodDays: 15.77,
        peculiarity: 'Named after the daughter of Eris (the demon spirit of lawlessness); allowed precise determination of Eris’s immense mass.'
      }
    ],
    minorMoonsSummary: '1 massive moon orbiting at ~37,350 km distance.',
    funnyFacts: [
      "Eris is the world that 'demoted' Pluto. When astronomers discovered an ice world heavier than Pluto, the IAU had to either declare Eris the 10th planet or create the dwarf planet category.",
      "Appropriately named after Eris, the Greek goddess of discord who started the Trojan War by rolling the golden apple into a banquet of the gods.",
      "Has a surface so brilliantly white (reflecting 96% of sunlight) that it reflects almost as much light as fresh alpine snow on Earth."
    ],
    educationalFacts: [
      "Eris's orbit is highly eccentric (0.44) and inclined at 44.04° to the ecliptic, carrying it out to 97.6 AU at aphelion—nearly three times farther than Pluto.",
      "Its density is 2.52 g/cm³, substantially higher than Pluto, indicating that Eris is composed of up to 70% rock covered by a thin mantle of frozen methane-nitrogen ice."
    ],
    historicalDiscovery: "Discovered on January 5, 2005 from Palomar Observatory survey images by Mike Brown, Chad Trujillo, and David Rabinowitz.",
    humanAnalogy: "A single year on Eris spans 558 Earth years. If you celebrated your 1st birthday on Eris today, your next birthday would occur in the year 2584."
  },
  // ==========================================
  // MAJOR MOONS OF THE SOLAR SYSTEM (9 Iconic Worlds)
  // ==========================================
  {
    id: 'moon',
    name: 'Moon (Luna)',
    parentBody: 'earth',
    type: 'Moon',
    radiusKm: 1737.4,
    massKg: '7.342 × 10^22',
    distanceFromSunMillionKm: 149.6, // Orbits Earth at 384,400 km
    orbitalPeriodDays: 27.32,
    rotationalPeriodHours: 655.7, // 27.32 days (Tidally locked)
    dayLengthHours: 708.7, // 29.5 Earth days (Synodic lunar month)
    orbitalVelocityKmS: 1.022,
    axialTiltDeg: 1.54,
    surfaceGravityMs2: 1.62,
    surfaceGravityG: 0.165,
    surfaceTempC: { min: -173, max: 127, mean: -23 },
    meanTempC: -23,
    summary: 'Earth’s only natural satellite, the fifth-largest moon in the solar system, tidally locked with dark basaltic lava seas (maria) and permanently shadowed polar craters housing water ice.',
    atmosphere: ['Virtually zero atmosphere; ultra-tenuous exosphere of helium, neon, and hydrogen'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg',
    color: '#cbd5e1',
    orbitColor: '#94a3b8',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'No natural satellites.',
    funnyFacts: [
      "Because the Moon has no atmosphere or wind, footprints left behind by Neil Armstrong, Buzz Aldrin, and 10 other Apollo astronauts will remain intact for millions of years.",
      "The Moon is steadily spiraling away from Earth at a rate of 3.8 centimeters (1.5 inches) per year—about the same speed that human fingernails grow!",
      "The dark patches on the Moon look like a 'Man in the Moon' or a 'Rabbit in the Moon' depending on the cultural folklore of the observer."
    ],
    educationalFacts: [
      "The Giant Impact Hypothesis posits the Moon formed 4.5 billion years ago when a Mars-sized protoplanet named Theia collided with the early proto-Earth.",
      "Permanently shadowed craters at the lunar south pole harbor billions of metric tons of ancient water ice, critical for NASA's Artemis base camp.",
      "The Moon is in synchronous rotation, meaning it completes one rotation on its axis in the exact same time it takes to orbit Earth (27.3 days)."
    ],
    historicalDiscovery: "Known since antiquity; first orbited by Soviet Luna 3 in 1959; first walked on by Apollo 11 astronauts on July 20, 1969.",
    humanAnalogy: "Lunar gravity is 1/6th of Earth's: an 80 kg astronaut weighs just 13 kg on the Moon, turning walking into rhythmic bounding leaps."
  },
  {
    id: 'io',
    name: 'Io',
    parentBody: 'jupiter',
    type: 'Moon',
    radiusKm: 1821.6,
    massKg: '8.932 × 10^22',
    distanceFromSunMillionKm: 778.5, // Orbits Jupiter at 421,700 km
    orbitalPeriodDays: 1.769,
    rotationalPeriodHours: 42.46, // Tidally locked
    dayLengthHours: 42.46,
    orbitalVelocityKmS: 17.33,
    axialTiltDeg: 0.0,
    surfaceGravityMs2: 1.796,
    surfaceGravityG: 0.183,
    surfaceTempC: { min: -143, max: 1650, mean: -130 },
    meanTempC: -130,
    summary: 'The most volcanically active world in the Solar System, flexed by Jupiter’s tidal squeeze into an inferno of over 400 active volcanoes erupting sulfur plumes 500 km into space.',
    atmosphere: ['90% Sulfur dioxide exosphere generated by volcanic eruptions'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Io_highest_resolution_true_color.jpg',
    color: '#eab308',
    orbitColor: '#facc15',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Innermost of the four Galilean moons of Jupiter.',
    funnyFacts: [
      "Io looks unmistakably like a giant mouldy four-cheese pizza in space, decorated with vivid yellow sulfur plains, red silicate lava lakes, and black caldera scars.",
      "Jupiter's tidal pull flexes Io's solid rocky crust up and down by up to 100 meters (330 feet) every 42 hours—like squeezing an orange over and over until it gets boiling hot.",
      "Some of Io's volcanic caldera lakes are hotter than 1,600°C (2,900°F)—hotter than any active lava on Earth today."
    ],
    educationalFacts: [
      "Io is caught in a 4:2:1 orbital Laplace resonance with Europa and Ganymede, maintaining an eccentric orbit that drives intense internal tidal heating.",
      "Gases escaping Io feed a massive doughnut-shaped plasma torus encircling Jupiter, generating a 1-terawatt electrical current through Jupiter's upper atmosphere."
    ],
    historicalDiscovery: "Discovered January 8, 1610 by Galileo Galilei with his early refractor telescope.",
    humanAnalogy: "Io is literally being kneaded by Jupiter like pizza dough, producing enough friction to melt rock into hundreds of erupting volcanic geysers."
  },
  {
    id: 'europa',
    name: 'Europa',
    parentBody: 'jupiter',
    type: 'Moon',
    radiusKm: 1560.8,
    massKg: '4.800 × 10^22',
    distanceFromSunMillionKm: 778.5, // Orbits Jupiter at 670,900 km
    orbitalPeriodDays: 3.551,
    rotationalPeriodHours: 85.23, // Tidally locked
    dayLengthHours: 85.23,
    orbitalVelocityKmS: 13.74,
    axialTiltDeg: 0.1,
    surfaceGravityMs2: 1.315,
    surfaceGravityG: 0.134,
    surfaceTempC: { min: -223, max: -148, mean: -171 },
    meanTempC: -171,
    summary: 'A smooth porcelain ice world concealing a global liquid saltwater ocean containing more water than all of Earth’s oceans combined, humanity’s prime candidate for finding extraterrestrial life.',
    atmosphere: ['Tenuous oxygen exosphere created by radiolysis of surface water ice'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon-remastered.jpg',
    color: '#e2e8f0',
    orbitColor: '#38bdf8',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Second of the four Galilean moons of Jupiter.',
    funnyFacts: [
      "Europa is the smoothest known solid body in the solar system—it has almost no mountains or craters because the ice crust continually cracks and self-heals like a living jigsaw puzzle.",
      "Its subterranean ocean is estimated to be 100 kilometers (60 miles) deep. If you drained it, it would hold more than double the water of all oceans on Earth combined!",
      "NASA's Europa Clipper spacecraft launched in October 2024 to fly past Europa dozens of times to search for chemical signs of habitability."
    ],
    educationalFacts: [
      "Induced magnetic field measurements by Galileo proved the presence of a conductive liquid saltwater layer beneath an ice crust 15 to 25 km thick.",
      "Hydrothermal vents at Europa's ocean floor could provide chemical energy to support chemosynthetic ecosystems, similar to deep-sea hydrothermal vents on Earth."
    ],
    historicalDiscovery: "Discovered January 8, 1610 by Galileo Galilei.",
    humanAnalogy: "Europa is a cosmic kinder egg: a brittle shell of white ice protecting a deep, warm ocean humming with potential alien life."
  },
  {
    id: 'ganymede',
    name: 'Ganymede',
    parentBody: 'jupiter',
    type: 'Moon',
    radiusKm: 2634.1, // Largest moon in the Solar System!
    massKg: '1.482 × 10^23',
    distanceFromSunMillionKm: 778.5, // Orbits Jupiter at 1,070,400 km
    orbitalPeriodDays: 7.155,
    rotationalPeriodHours: 171.7, // Tidally locked
    dayLengthHours: 171.7,
    orbitalVelocityKmS: 10.88,
    axialTiltDeg: 0.2,
    surfaceGravityMs2: 1.428,
    surfaceGravityG: 0.146,
    surfaceTempC: { min: -203, max: -121, mean: -163 },
    meanTempC: -163,
    summary: 'The colossal king of moons—larger than Mercury and Pluto—and the only natural satellite in the entire Solar System known to generate its own internal magnetosphere with glowing auroras.',
    atmosphere: ['Extremely thin trace oxygen exosphere'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Ganymede_g1_true-edit1.jpg',
    color: '#94a3b8',
    orbitColor: '#64748b',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Largest moon in the Solar System, third Galilean satellite.',
    funnyFacts: [
      "Ganymede is bigger than the planet Mercury and more than double the size of Pluto. If it orbited the Sun on its own, it would be instantly classified as a major planet.",
      "It is the only moon in the solar system with its own magnetic dynamo, producing twin auroral ribbons of glowing plasma around its polar regions.",
      "Astronomers describe its interior as an 'ocean club sandwich'—multiple layers of liquid saltwater separated by different crystalline phases of high-pressure ice."
    ],
    educationalFacts: [
      "Ganymede has a fully differentiated structure with an iron-rich metallic liquid core, silicate mantle, and outer shell of water ice and ocean.",
      "ESA's JUICE (Jupiter Icy Moons Explorer) probe will enter orbit around Ganymede in 2034, making it the first spacecraft to orbit an alien moon."
    ],
    historicalDiscovery: "Discovered January 7, 1610 by Galileo Galilei.",
    humanAnalogy: "Ganymede is a planet masquerading as a moon—it possesses its own magnetic shield, its own auroras, and its own deep subterranean oceans."
  },
  {
    id: 'callisto',
    name: 'Callisto',
    parentBody: 'jupiter',
    type: 'Moon',
    radiusKm: 2410.3, // Third largest moon
    massKg: '1.076 × 10^23',
    distanceFromSunMillionKm: 778.5, // Orbits Jupiter at 1,882,700 km
    orbitalPeriodDays: 16.689,
    rotationalPeriodHours: 400.5, // Tidally locked
    dayLengthHours: 400.5,
    orbitalVelocityKmS: 8.204,
    axialTiltDeg: 0.0,
    surfaceGravityMs2: 1.235,
    surfaceGravityG: 0.126,
    surfaceTempC: { min: -193, max: -108, mean: -139 },
    meanTempC: -139,
    summary: 'The most heavily cratered object in the Solar System, an ancient primordial ice/rock relic whose undisturbed surface serves as an intact 4-billion-year cosmic impact chronicle.',
    atmosphere: ['Tenuous carbon dioxide exosphere with trace oxygen'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg',
    color: '#64748b',
    orbitColor: '#475569',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Outermost of the four Galilean moons of Jupiter.',
    funnyFacts: [
      "Callisto has the most battered, heavily cratered face in the solar system. It is so crowded with impact craters that any new asteroid hit will almost certainly destroy an older crater.",
      "Because Callisto orbits safely outside Jupiter's lethal inner radiation belts, it is considered the safest and most viable hub for a future human astronaut base in the Jovian system.",
      "Home to Valhalla, a gigantic multi-ring impact basin spanning 3,800 km across—like a pebble dropped into freezing slush that froze mid-ripple."
    ],
    educationalFacts: [
      "Unlike Io, Europa, and Ganymede, Callisto did not participate in the orbital Laplace resonance, escaping strong tidal heating and remaining only partially differentiated.",
      "Magnetic data from the Galileo orbiter revealed Callisto likely has a salty subsurface ocean 100 to 150 km beneath its craggy ice-rock crust."
    ],
    historicalDiscovery: "Discovered January 7, 1610 by Galileo Galilei.",
    humanAnalogy: "Callisto is the solar system's ancient library: an unedited 4-billion-year history book preserving the violent era of early planetary collisions."
  },
  {
    id: 'titan',
    name: 'Titan',
    parentBody: 'saturn',
    type: 'Moon',
    radiusKm: 2574.7, // Second largest moon
    massKg: '1.345 × 10^23',
    distanceFromSunMillionKm: 1433.5, // Orbits Saturn at 1,221,870 km
    orbitalPeriodDays: 15.945,
    rotationalPeriodHours: 382.7, // Tidally locked
    dayLengthHours: 382.7,
    orbitalVelocityKmS: 5.57,
    axialTiltDeg: 0.0,
    surfaceGravityMs2: 1.352,
    surfaceGravityG: 0.138,
    surfaceTempC: { min: -180, max: -178, mean: -179.5 },
    meanTempC: -179.5,
    summary: 'The only moon in the Solar System with a dense atmosphere and the only body other than Earth with liquid rain, rivers, and colossal seas on its surface—composed of liquid methane and ethane.',
    atmosphere: ['95% Nitrogen', '4.9% Methane', 'Trace Hydrogen and organic tholin photochemical smog'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Titan_in_true_color.jpg',
    color: '#f59e0b',
    orbitColor: '#fbbf24',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Largest moon of Saturn, comprising 96% of the mass orbiting Saturn.',
    funnyFacts: [
      "Titan has an atmosphere 50% denser than Earth's, but its gravity is only 14%. If you strapped a pair of artificial wings to your arms, you could literally flap your wings and fly!",
      "It rains liquid methane instead of water. Raindrops fall as slowly as snowflakes due to thick air and low gravity, feeding hydrocarbon seas like Kraken Mare.",
      "NASA's upcoming Dragonfly mission will fly an 8-rotor nuclear-powered drone across Titan's dune fields and impact craters in 2034."
    ],
    educationalFacts: [
      "ESA's Huygens probe landed on Titan on January 14, 2005—the most distant touchdown of any spacecraft from Earth—revealing rounded ice pebbles polished by hydrocarbon river torrents.",
      "Titan possesses a complete hydrological cycle analogous to Earth, operating at -180°C where water ice acts as solid bedrock and liquid methane acts as rain and sea."
    ],
    historicalDiscovery: "Discovered on March 25, 1655 by Dutch astronomer Christiaan Huygens.",
    humanAnalogy: "Titan is Earth frozen in a cosmic deep-freeze: an organic-rich laboratory showing what our home planet looked like before life transformed the skies."
  },
  {
    id: 'enceladus',
    name: 'Enceladus',
    parentBody: 'saturn',
    type: 'Moon',
    radiusKm: 252.1,
    massKg: '1.08 × 10^20',
    distanceFromSunMillionKm: 1433.5, // Orbits Saturn at 238,000 km
    orbitalPeriodDays: 1.370,
    rotationalPeriodHours: 32.88, // Tidally locked
    dayLengthHours: 32.88,
    orbitalVelocityKmS: 12.63,
    axialTiltDeg: 0.0,
    surfaceGravityMs2: 0.113,
    surfaceGravityG: 0.0115,
    surfaceTempC: { min: -240, max: -128, mean: -198 },
    meanTempC: -198,
    summary: 'A gleaming ice jewel whose south pole erupts towering cryovolcanic geysers of water vapor, silica, and complex organic molecules directly into space from an active, warm subsurface ocean.',
    atmosphere: ['Local water vapor, nitrogen, carbon dioxide, and methane plume exosphere'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/PIA17202_-_Approaching_Enceladus.jpg/1200px-PIA17202_-_Approaching_Enceladus.jpg',
    color: '#f8fafc',
    orbitColor: '#38bdf8',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Sixth-largest moon of Saturn, generator of Saturn’s E-ring.',
    funnyFacts: [
      "Enceladus has the highest albedo (reflectivity) of any body in the solar system—it reflects almost 99% of sunlight, making it brighter and whiter than a freshly polished snowball.",
      "Its south pole geysers erupt so forcefully into space that they spray water ice into orbit around Saturn, single-handedly generating Saturn's entire diffuse E-ring!",
      "The Cassini spacecraft flew directly through these plumes in 2008 and 'tasted' water, salts, methane, and molecular hydrogen—the chemical calling card of active seafloor hydrothermal vents."
    ],
    educationalFacts: [
      "Tidal friction from orbital resonance with Dione flexes Enceladus's silicate core, providing hydrothermal heat that keeps its global ocean liquid despite its small size.",
      "The discovery of phosphorus and complex macromolecules makes Enceladus one of the most habitable extraterrestrial environments known."
    ],
    historicalDiscovery: "Discovered on August 28, 1789 by William Herschel using his giant 40-foot telescope.",
    humanAnalogy: "Enceladus is a cosmic soda can: liquid under pressure below ice, venting energetic geysers through fissures called the 'Tiger Stripes'."
  },
  {
    id: 'triton',
    name: 'Triton',
    parentBody: 'neptune',
    type: 'Moon',
    radiusKm: 1353.4,
    massKg: '2.14 × 10^22',
    distanceFromSunMillionKm: 4495.1, // Orbits Neptune at 354,760 km
    orbitalPeriodDays: -5.877, // Retrograde orbit!
    rotationalPeriodHours: -141.0, // Tidally locked in retrograde
    dayLengthHours: 141.0,
    orbitalVelocityKmS: 4.39,
    axialTiltDeg: 157.3, // High inclination & retrograde
    surfaceGravityMs2: 0.779,
    surfaceGravityG: 0.079,
    surfaceTempC: { min: -237, max: -234, mean: -235.2 },
    meanTempC: -235.2,
    summary: 'Neptune’s captured Kuiper Belt giant, orbiting backwards in a retrograde path, featuring active cryovolcanic geysers erupting liquid nitrogen and unique cantaloupe melon terrain.',
    atmosphere: ['Thin nitrogen atmosphere with trace methane (pressure 1.4 Pa)'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Triton_moon_mosaic_Voyager_2_%28large%29.jpg',
    color: '#a7f3d0',
    orbitColor: '#34d399',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Largest moon of Neptune, comprising 99.5% of all mass orbiting Neptune.',
    funnyFacts: [
      "Triton is the only large moon in the solar system that orbits in the opposite direction of its planet's rotation (a retrograde orbit), proving Neptune kidnapped it from the Kuiper Belt.",
      "Voyager 2 photographed active cryogeysers blasting nitrogen gas and dark dust 8 kilometers (5 miles) high into the sky, blown sideways into 150-kilometer wind plumes.",
      "Because of tidal deceleration from its backwards orbit, Triton is doomed: in about 3.6 billion years, it will cross Neptune's Roche limit and get shredded into a ring system more magnificent than Saturn's."
    ],
    educationalFacts: [
      "At -235°C (38 Kelvin), Triton's surface is so cold that nitrogen, methane, and carbon monoxide freeze into rock-hard crystalline frost.",
      "Its surface exhibits 'cantaloupe terrain'—a dimpled texture formed by diapirism where deep warm ice bubbles upward through cold surface crust."
    ],
    historicalDiscovery: "Discovered October 10, 1846 by William Lassell, just 17 days after Neptune itself was discovered.",
    humanAnalogy: "Triton is Pluto's kidnapped sibling, captured billions of years ago and locked into an icy orbit around the blue giant Neptune."
  },
  {
    id: 'charon',
    name: 'Charon',
    parentBody: 'pluto',
    type: 'Moon',
    radiusKm: 606.0,
    massKg: '1.586 × 10^21',
    distanceFromSunMillionKm: 5906.4, // Orbits Pluto at 19,596 km
    orbitalPeriodDays: 6.387,
    rotationalPeriodHours: 153.29, // Mutually tidally locked with Pluto
    dayLengthHours: 153.29,
    orbitalVelocityKmS: 0.21,
    axialTiltDeg: 0.0,
    surfaceGravityMs2: 0.288,
    surfaceGravityG: 0.029,
    surfaceTempC: { min: -238, max: -218, mean: -228 },
    meanTempC: -228,
    summary: 'Pluto’s colossal binary companion, half the diameter of Pluto itself, mutually tidally locked so both bodies perpetually face each other with a distinct rust-red north polar cap dubbed Mordor Macula.',
    atmosphere: ['Virtually non-existent, trace exosphere'],
    textureUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Charon_by_New_Horizons_on_July_13_2015.jpg',
    color: '#94a3b8',
    orbitColor: '#cbd5e1',
    totalMoonsCount: 0,
    majorMoons: [],
    minorMoonsSummary: 'Largest of Pluto’s 5 moons, mutually tidally locked binary companion.',
    funnyFacts: [
      "Charon is so massive relative to Pluto that the center of gravity between them is outside Pluto's surface. Pluto doesn't hold Charon in orbit—they dance around an empty point in space!",
      "Its north pole is capped by a dark reddish-brown stain unofficially named 'Mordor Macula' by scientists, composed of escaped tholin molecules captured from Pluto's atmosphere and baked by solar UV.",
      "Features giant canyons like Argo Chasma that are up to 9 kilometers (5.6 miles) deep—five times deeper than the Grand Canyon on Earth."
    ],
    educationalFacts: [
      "Unlike Pluto's volatile nitrogen and methane ice surface, Charon's crust is dominated by crystalline water ice and ammonia hydrates, indicating past cryovolcanism.",
      "Charon and Pluto are double tidally locked: one face of Pluto always sees Charon hanging stationary in the sky, while the other hemisphere never sees Charon at all."
    ],
    historicalDiscovery: "Discovered June 22, 1978 by astronomer James Christy at the U.S. Naval Observatory.",
    humanAnalogy: "Charon and Pluto are like two ballroom ice dancers holding hands, spinning together while locking eyes without ever letting go."
  }
];
