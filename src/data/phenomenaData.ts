import { CosmicPhenomenon } from '../types';

export const COSMIC_PHENOMENA: CosmicPhenomenon[] = [
  {
    id: "big_bang",
    title: "The Big Bang",
    subtitle: "From Primordial Singularity to the Cosmic Web",
    tagline: "The birth of spacetime, energy, and every atom in the cosmos",
    era: "13.787 Billion Years Ago",
    timescale: "0 to 380,000 Years (Recombination) → 13.8B Years (Present)",
    category: "origins",
    visualType: "big_bang",
    summary: "The universe did not explode into space; space itself exploded into existence, unleashing spacetime and the fundamental forces.",
    energyOutput: "All matter and radiation in the observable universe (~10^69 Joules)",
    scientificConsensus: "Lambda-CDM standard cosmological model, verified by Cosmic Microwave Background observations.",
    bizarreFacts: [
      "During inflation, the fabric of spacetime expanded trillions of times faster than light.",
      "The Cosmic Microwave Background still bathes every cubic centimeter of space in primordial photons."
    ],
    stages: [
      {
        phase: "1. Planck Epoch & Singularity",
        timeline: "t = 0 to 10^-43 seconds",
        temperature: "> 10^32 Kelvin",
        title: "The Primordial Singularity",
        description: "At the Planck epoch, the observable universe was compressed into a point of unfathomable density and heat, where the four fundamental forces were unified.",
        astrophysicalProcess: "Quantum gravitational singularity before the symmetry-breaking separation of gravity, strong, and electroweak forces.",
        narrativeScript: "At the dawn of existence, the entirety of our observable universe was concentrated into a primordial singularity. Spacetime, matter, and the fundamental laws of nature were unified into a point of unfathomable density and infinite potential."
      },
      {
        phase: "2. Cosmic Inflation & Plasma",
        timeline: "t = 10^-36 to 10^-32 seconds",
        temperature: "~10^27 Kelvin",
        title: "Cosmic Inflation",
        description: "An exponential expansion of space smoothed quantum fluctuations, cooling the fireball into a turbulent quark-gluon plasma.",
        astrophysicalProcess: "Inflaton field potential driven expansion, supercooling spacetime and laying down the primordial density perturbations.",
        narrativeScript: "In a fleeting fraction of a microsecond, cosmic inflation drove an exponential expansion of space faster than the speed of light. As inflation halted, the cosmos burst into a searing primordial plasma of quarks, gluons, and radiant photons."
      },
      {
        phase: "3. Cosmic Web & First Light",
        timeline: "t = 380,000 Years to Present",
        temperature: "3,000 Kelvin → 2.7 Kelvin",
        title: "The Cosmic Web",
        description: "Gravity pulls matter along vast dark matter filaments, igniting the first stars and weaving the grand cosmic web.",
        astrophysicalProcess: "Gravitational collapse along dark matter filaments forming galactic superclusters, filaments, and cosmic voids.",
        narrativeScript: "As the universe cooled over hundreds of millions of years, gravity pulled matter along invisible scaffolds of dark matter, weaving the vast cosmic web that gave birth to the first stars, galaxies, and celestial worlds."
      }
    ]
  },
  {
    id: "sun_death",
    title: "Death of the Sun",
    subtitle: "The Fiery Evolution of Our Home Star",
    tagline: "When our star exhausts its hydrogen fuel and engulfs the inner solar system",
    era: "5 Billion Years in the Future",
    timescale: "1 Billion Years of Expansion → 10,000 Year Planetary Nebula",
    category: "stellar_evolution",
    visualType: "sun_death",
    summary: "Our Sun will exhaust its core hydrogen, swelling into a luminous Red Giant that engulfs Mercury, Venus, and Earth, before shedding its atmosphere into a planetary nebula.",
    energyOutput: "Over 2,000 times current solar luminosity at peak Red Giant branch",
    scientificConsensus: "Standard stellar nucleosynthesis and hydrostatic equilibrium models.",
    bizarreFacts: [
      "Even if Earth's charred rock core escapes total engulfment, oceans and atmospheres will boil away billions of years prior.",
      "The remaining White Dwarf will retain over half the Sun's mass in a sphere the size of Earth."
    ],
    stages: [
      {
        phase: "1. Red Giant Swell",
        timeline: "t = +5.0 Billion Years",
        temperature: "3,100 Kelvin surface",
        title: "The Swelling Red Giant",
        description: "Hydrogen exhaustion in the solar core causes the core to contract while outer layers expand dramatically into a convective red giant.",
        astrophysicalProcess: "Hydrogen shell burning around an inert, degenerate helium core drives vast envelope expansion.",
        narrativeScript: "Five billion years into the future, our Sun exhausts the hydrogen fuel in its core. As the stellar core contracts under gravity, outer layers swell outward into a colossal Red Giant, casting a deep crimson glow across the inner solar system."
      },
      {
        phase: "2. Planetary Engulfment",
        timeline: "t = +5.4 Billion Years",
        temperature: "Surface reaches Earth orbit (1 AU)",
        title: "Inner Planet Engulfment",
        description: "The swollen solar atmosphere expands beyond the orbit of Mercury and Venus, dragging them into vaporization.",
        astrophysicalProcess: "Atmospheric drag in the tenuous outer stellar envelope causes orbital decay and thermal sublimation of terrestrial worlds.",
        narrativeScript: "Expanding outward toward Earth's orbit, the Sun's blistering atmosphere engulfs Mercury and Venus, vaporizing their rocky surfaces into glowing trails of incandescent plasma within the raging stellar envelope."
      },
      {
        phase: "3. Planetary Nebula & White Dwarf",
        timeline: "t = +6.0 Billion Years",
        temperature: "120,000 Kelvin core",
        title: "The Ghost of a Star",
        description: "Pulsations expel the outer envelope, creating an iridescent planetary nebula surrounding a dense, cooling White Dwarf core.",
        astrophysicalProcess: "Asymptotic Giant Branch thermal pulses expel the envelope; ultraviolet radiation from the degenerate core photoionizes the nebula.",
        narrativeScript: "Finally, the dying star sheds its outer atmosphere in glowing, iridescent ripples of ionized gas, creating a breathtaking planetary nebula. At its center rests a lone, cooling White Dwarf—the dense, crystalline remnant of our solar system."
      }
    ]
  },
  {
    id: "supernova",
    title: "Core-Collapse Supernova",
    subtitle: "The Cataclysmic Death of Massive Stars",
    tagline: "A dying supergiant detonates, forging the heavy elements that make up rocky planets and life",
    era: "Occurs across the universe continuously",
    timescale: "Core Collapse: 10 Milliseconds → Blast: Months → Remnant: Millennia",
    category: "stellar_evolution",
    visualType: "supernova",
    summary: "When a star exceeding eight solar masses exhausts nuclear fuel, its iron core collapses under immense gravity, triggering a shockwave that obliterates the star.",
    energyOutput: "10^44 Joules of kinetic energy, 10^46 Joules in neutrinos",
    scientificConsensus: "Observed and modeled extensively through Type II/Ib/Ic supernova remnants like SN 1987A and Cas A.",
    bizarreFacts: [
      "For several days, a single supernova can shine brighter than all the hundreds of billions of stars in its host galaxy combined.",
      "The core collapses from 10,000 kilometers across to just 20 kilometers in a fraction of a second."
    ],
    stages: [
      {
        phase: "1. Iron Core Collapse",
        timeline: "t = 0.0 seconds",
        temperature: "100 Billion Kelvin",
        title: "Iron Core Collapse",
        description: "Fusion halts at iron because iron fusion consumes rather than produces energy. Gravity crushes the stellar core in milliseconds.",
        astrophysicalProcess: "Electron capture and photodisintegration trigger catastrophic collapse until nuclear saturation density is reached.",
        narrativeScript: "Inside a dying supergiant star, nuclear fusion reaches iron. Because iron fusion absorbs energy rather than producing it, radiation pressure vanishes. In milliseconds, gravity violently crushes the stellar core to nuclear density."
      },
      {
        phase: "2. The Shockwave Rebound",
        timeline: "t = +0.25 seconds",
        temperature: "10 Billion Kelvin",
        title: "Shockwave Rebound",
        description: "The collapsing outer envelope impacts the rigid proto-neutron core and rebounds in an immense shockwave, energized by a torrent of neutrinos.",
        astrophysicalProcess: "Neutrino-driven convection revives the stalled shock, blasting the outer layers into space at ten percent the speed of light.",
        narrativeScript: "The infalling outer envelope slams into the ultra-dense neutron core and rebounds with staggering ferocity. Energized by an immense torrent of neutrinos, a cataclysmic shockwave tears the star apart at a fraction of the speed of light."
      },
      {
        phase: "3. Heavy Element Forge & Pulsar",
        timeline: "t = Weeks to Millennia",
        temperature: "Cooling expanding remnant",
        title: "Stardust & Neutron Star",
        description: "Rapid neutron capture synthesizes heavy elements like gold and platinum, dispersing stardust while a spinning pulsar sweeps lighthouse beams.",
        astrophysicalProcess: "R-process nucleosynthesis disperses heavy elements into the interstellar medium, leaving a relativistic spinning neutron star.",
        narrativeScript: "The cataclysmic shockwave synthesizes the cosmos's heaviest elements—including gold, platinum, and uranium—scattering stardust across the galaxy to seed new solar systems, while leaving behind a rapidly spinning pulsar."
      }
    ]
  },
  {
    id: "milkyway_andromeda",
    title: "Milkomeda Collision",
    subtitle: "The Majestic Merger of Two Spiral Galaxies",
    tagline: "A multi-billion-year gravitational waltz between the Milky Way and Andromeda",
    era: "4.5 Billion Years in the Future",
    timescale: "Approach: 4B Years → Interpenetration: 1.5B Years → Merged Elliptical: 2B Years",
    category: "galactic_collision",
    visualType: "milkyway_andromeda",
    summary: "The Andromeda galaxy is racing toward the Milky Way at 110 km/s. Over billions of years, mutual gravity will merge both galaxies into a giant elliptical galaxy.",
    energyOutput: "Gravitational potential energy release of two trillion solar masses",
    scientificConsensus: "Hubble Space Telescope proper motion measurements and high-resolution N-body simulations.",
    bizarreFacts: [
      "Because interstellar distances are so vast, virtually no individual stars will collide during the entire merger.",
      "The night sky will be filled with sweeping stellar bridges and vibrant starburst nebulae."
    ],
    stages: [
      {
        phase: "1. The Grand Approach",
        timeline: "t = +4.0 Billion Years",
        temperature: "Interstellar Medium",
        title: "The Approaching Giant",
        description: "Andromeda looms immense in Earth's sky, its spiral arms spanning across the entire horizon as mutual gravity accelerates both systems.",
        astrophysicalProcess: "Gravitational acceleration along mutual orbital trajectory within the Local Group.",
        narrativeScript: "Four billion years from now, our sister galaxy Andromeda looms colossal across the night sky, hurtling toward the Milky Way at over one hundred kilometers per second in a grand, inevitable gravitational waltz."
      },
      {
        phase: "2. Tidal Disruption & Starburst",
        timeline: "t = +4.8 Billion Years",
        temperature: "Gas compression shockwaves",
        title: "Tidal Tails & Starburst",
        description: "The galaxies pass through one another. Tidal gravity draws out immense bridges of stars while compressing interstellar gas into starburst knots.",
        astrophysicalProcess: "Tidal stripping hurls stellar streams across hundreds of thousands of light-years while colliding molecular clouds trigger rapid star formation.",
        narrativeScript: "As the two colossal spirals interpenetrate, stellar collisions are extraordinarily rare. Yet tidal forces tear vast bridges of stars across hundreds of thousands of light-years, compressing interstellar gas into brilliant starburst nebulae."
      },
      {
        phase: "3. Merged Giant Elliptical",
        timeline: "t = +7.0 Billion Years",
        temperature: "Relaxed stellar velocity dispersion",
        title: "Milkomeda Ascendant",
        description: "Dynamical friction merges the central supermassive black holes, settling the galaxies into a majestic giant elliptical galaxy.",
        astrophysicalProcess: "Phase-space mixing and violent relaxation transform the flattened disks into a triaxial elliptical spheroid with a merged central black hole.",
        narrativeScript: "Over billions of years, gravitational friction merges the two central supermassive black holes. The spiral arms dissolve into a serene, monumental elliptical galaxy named Milkomeda, illuminated by the combined light of a trillion stars."
      }
    ]
  },
  {
    id: "black_hole_lensing",
    title: "Black Hole Event Horizon",
    subtitle: "Spacetime Warping and Relativistic Gravitation",
    tagline: "Where the fabric of spacetime bends to infinity and not even light can escape",
    era: "Ongoing across the cosmos",
    timescale: "Infinite time dilation at the Horizon from an external observer's frame",
    category: "relativity",
    visualType: "black_hole_lensing",
    summary: "A supermassive black hole warps surrounding spacetime so severely that light paths bend into Einstein rings, while surrounding plasma forms a glowing accretion disk and relativistic jets.",
    energyOutput: "Accretion efficiency up to 42% of rest-mass energy (10^40 Watts in quasars)",
    scientificConsensus: "General Relativity predictions verified by Event Horizon Telescope images of M87* and Sagittarius A*.",
    bizarreFacts: [
      "To an outside observer, an infalling object appears to slow down and freeze at the event horizon, redshifting into oblivion.",
      "Extreme tidal forces near stellar-mass black holes stretch matter along the gravitational gradient—a process known as spaghettification."
    ],
    stages: [
      {
        phase: "1. Relativistic Accretion Disk",
        timeline: "Outer Accretion Flow",
        temperature: "Millions of Kelvin",
        title: "The Accretion Disk",
        description: "Gas and matter spiral inward at relativistic speeds, frictionally heating into a brilliant plasma disk emitting high-energy X-rays.",
        astrophysicalProcess: "Viscous dissipation in the magnetized accretion disk converts gravitational potential energy into intense radiation.",
        narrativeScript: "Circling the supermassive black hole at near-light speeds, infalling gas and dust grind together in a blistering accretion disk, glowing fiercely across the electromagnetic spectrum under immense gravitational pressure."
      },
      {
        phase: "2. Gravitational Lensing & Photon Sphere",
        timeline: "1.5 to 3 Schwarzschild Radii",
        temperature: "Radiation Trapping",
        title: "Gravitational Light Bending",
        description: "Extreme spacetime curvature bends light rays around the black hole, projecting the rear of the accretion disk over the top and bottom of the dark silhouette.",
        astrophysicalProcess: "Null geodesics deflected by strong-field Kerr metric, creating photon rings and relativistic Doppler asymmetry.",
        narrativeScript: "Extreme spacetime curvature acts as a cosmic gravitational lens, warping background starlight into brilliant Einstein rings and bending the rear accretion disk into view above and below the dark silhouette of the event horizon."
      },
      {
        phase: "3. Event Horizon & Spaghettification",
        timeline: "The Boundary of No Return (r = Rs)",
        temperature: "Cosmic Censorship",
        title: "The Event Horizon",
        description: "Crossing the one-way membrane where escape velocity exceeds light. Infalling matter is drawn into extreme tidal stretching toward the singularity.",
        astrophysicalProcess: "Spacetime coordinates swap roles inside the horizon; radial motion toward the central singularity becomes inevitable.",
        narrativeScript: "Passing beyond the photon sphere, matter reaches the event horizon—the ultimate boundary of no return. Here, escape velocity exceeds the speed of light, and ferocious gravitational tides draw infalling matter toward the central singularity."
      }
    ]
  }
];
