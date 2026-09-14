export interface CodexQuizQuestion {
  id: string;
  articleId?: string; // Matching ID in KNOWLEDGE_ITEMS
  topic: string;
  category: 'theories' | 'exoplanets' | 'monsters' | 'cosmology' | 'quantum';
  difficulty: 'cadet' | 'astrophysicist' | 'commander';
  question: string;
  options: [string, string, string, string];
  correctIndex: number; // 0, 1, 2, or 3
  explanation: string;
  funFactSnippet: string;
}

export const CODEX_QUIZ_QUESTIONS: CodexQuizQuestion[] = [
  // 1. Time Travel & Relativity
  {
    id: 'relativity-01',
    articleId: 'time_travel_interstellar',
    topic: 'Gravity & Time Dilation',
    category: 'theories',
    difficulty: 'cadet',
    question: 'According to Einstein\'s General Relativity, what happens to the flow of time near a massive gravitational object like a supermassive black hole?',
    options: [
      'Time flows significantly slower relative to distant observers',
      'Time flows significantly faster relative to distant observers',
      'Time runs backwards in a closed loop',
      'Time stops completely for the observer experiencing the gravity'
    ],
    correctIndex: 0,
    explanation: 'Gravitational time dilation dictates that the deeper you are in a gravitational potential well, the slower time elapses relative to an observer in a weaker gravitational field.',
    funFactSnippet: 'GPS satellites must adjust their onboard atomic clocks because they tick ~38 microseconds faster per day than clocks on Earth\'s surface.'
  },
  {
    id: 'relativity-02',
    articleId: 'time_travel_interstellar',
    topic: 'Gravity & Time Dilation',
    category: 'theories',
    difficulty: 'astrophysicist',
    question: 'In the film Interstellar, one hour on Miller\'s Planet equals 7 years on Earth. What physically enables such intense time dilation?',
    options: [
      'The planet rotates faster than the speed of light',
      'The planet orbits extremely close to the event horizon of a rotating supermassive black hole',
      'The planet is composed entirely of dark matter',
      'The planet is surrounded by a dense shell of antimatter'
    ],
    correctIndex: 1,
    explanation: 'Miller\'s Planet was modeled by Nobel laureate Kip Thorne to orbit at the innermost stable circular orbit of a rapidly spinning Kerr black hole (Gargantua), creating extreme gravitational warping.',
    funFactSnippet: 'Kip Thorne\'s equations for the movie were so precise that the visual simulations led to peer-reviewed scientific astrophysics papers on gravitational lensing.'
  },

  // 2. Dinosaur Extinction & Impacts
  {
    id: 'impact-01',
    articleId: 'dinosaur_extinction',
    topic: 'Chicxulub Asteroid Impact',
    category: 'theories',
    difficulty: 'cadet',
    question: 'Approximately how large was the asteroid that triggered the K-Pg extinction event 66 million years ago?',
    options: [
      'About 500 meters (the size of a stadium)',
      'About 10 to 15 kilometers (the size of Mount Everest)',
      'About 300 kilometers (the size of the Moon)',
      'About 2 kilometers (the size of Central Park)'
    ],
    correctIndex: 1,
    explanation: 'The Chicxulub impactor was approximately 10 to 15 kilometers across, traveling at roughly 20 km/s (45,000 mph) when it struck the Yucatán Peninsula.',
    funFactSnippet: 'The impact released energy equivalent to roughly 100 teratonnes of TNT—over 1 billion times more powerful than the Hiroshima atomic bomb.'
  },
  {
    id: 'impact-02',
    articleId: 'dinosaur_extinction',
    topic: 'Chicxulub Asteroid Impact',
    category: 'theories',
    difficulty: 'astrophysicist',
    question: 'What element found in high concentrations worldwide in rock layers dating to 66 million years ago provided the key proof of an extraterrestrial impact?',
    options: [
      'Uranium',
      'Iridium',
      'Titanium',
      'Plutonium'
    ],
    correctIndex: 1,
    explanation: 'Iridium is extremely rare in Earth\'s crust (having sunk to the core during planetary differentiation), but abundant in asteroids. The global "Iridium anomaly" in the K-Pg boundary proved an extraterrestrial impact.',
    funFactSnippet: 'Father-son team Luis and Walter Alvarez discovered the global Iridium layer in Gubbio, Italy, winning widespread scientific consensus.'
  },

  // 3. Wormholes
  {
    id: 'wormhole-01',
    articleId: 'wormholes',
    topic: 'Einstein-Rosen Bridges',
    category: 'theories',
    difficulty: 'cadet',
    question: 'What is the formal scientific name for a theoretical tunnel connecting two distant points in spacetime?',
    options: [
      'Schwarzschild Bridge',
      'Einstein-Rosen Bridge',
      'Hawking-Penrose Corridor',
      'Oppenheimer Conduit'
    ],
    correctIndex: 1,
    explanation: 'Albert Einstein and Nathan Rosen published the theoretical concept of a mathematical bridge connecting two sheets of spacetime in 1935, known as an Einstein-Rosen bridge.',
    funFactSnippet: 'Physicist John Wheeler coined the popular term "wormhole" in 1957, using the analogy of an apple worm eating through the core instead of crawling across the skin.'
  },
  {
    id: 'wormhole-02',
    articleId: 'wormholes',
    topic: 'Einstein-Rosen Bridges',
    category: 'theories',
    difficulty: 'commander',
    question: 'According to theoretical physics, what hypothetical substance with negative mass-energy would be required to hold a traversable wormhole throat open?',
    options: [
      'Tachyonic Plasma',
      'Exotic Matter with Negative Energy Density',
      'Degenerate Neutronium',
      'Condensed Dark Matter'
    ],
    correctIndex: 1,
    explanation: 'Standard gravity attracts matter, causing a wormhole throat to pinch closed almost instantaneously. Exotic matter with negative energy density produces repulsive gravity to keep the throat stable.',
    funFactSnippet: 'The Casimir effect in quantum mechanics has experimentally demonstrated that regions of negative energy density can exist on microscopic quantum scales.'
  },

  // 4. Universe Expansion & Dark Energy
  {
    id: 'cosmo-01',
    articleId: 'universe_expansion',
    topic: 'Accelerating Universe',
    category: 'cosmology',
    difficulty: 'cadet',
    question: 'Roughly what percentage of the total energy-matter budget of the universe is composed of Dark Energy?',
    options: [
      'About 5%',
      'About 27%',
      'About 68%',
      'About 99%'
    ],
    correctIndex: 2,
    explanation: 'According to precision measurements by the Planck space observatory, the universe is approximately 68.3% Dark Energy, 26.8% Dark Matter, and only 4.9% ordinary baryonic matter.',
    funFactSnippet: 'All the stars, planets, nebulae, galaxies, and living organisms in the universe make up less than 5% of everything that exists.'
  },
  {
    id: 'cosmo-02',
    articleId: 'universe_expansion',
    topic: 'Hubble Expansion',
    category: 'cosmology',
    difficulty: 'astrophysicist',
    question: 'Why does the metric expansion of space allowing distant galaxies to recede faster than the speed of light NOT violate Einstein\'s theory of relativity?',
    options: [
      'Light travels faster in deep intergalactic space',
      'Special relativity limits objects moving THROUGH space, but the fabric of space itself can expand at any rate',
      'The speed of light constant has decayed over cosmological time',
      'Dark energy converts photons into tachyons'
    ],
    correctIndex: 1,
    explanation: 'Special relativity imposes a speed limit on objects moving through spacetime ($c$). However, the metric expansion is the creation of new space between galaxies, which has no upper velocity limit.',
    funFactSnippet: 'Galaxies with redshifts greater than $z \\approx 1.4$ are currently moving away from us faster than the speed of light.'
  },

  // 5. Fermi Paradox & Great Filter
  {
    id: 'fermi-01',
    articleId: 'fermi-paradox-great-filter',
    topic: 'Astrobiology & Fermi Paradox',
    category: 'theories',
    difficulty: 'cadet',
    question: 'What is the core dilemma known as the "Fermi Paradox"?',
    options: [
      'Why quantum mechanics and general relativity cannot be combined',
      'Why the universe is so old and vast with billions of habitable worlds, yet we see no evidence of alien civilizations',
      'Why black holes do not destroy information when they evaporate',
      'Why the universe appears to have more matter than antimatter'
    ],
    correctIndex: 1,
    explanation: 'Enrico Fermi famously asked "Where is everybody?", pointing out the contradiction between high statistical estimates for extraterrestrial life and the complete lack of contact or evidence.',
    funFactSnippet: 'Even at 0.1% the speed of light, a single technological species could colonize every corner of the Milky Way in just 100 million years—a fraction of cosmic time.'
  },
  {
    id: 'fermi-02',
    articleId: 'fermi-paradox-great-filter',
    topic: 'The Great Filter',
    category: 'theories',
    difficulty: 'astrophysicist',
    question: 'According to Robin Hanson\'s "Great Filter" hypothesis, why would discovering complex fossilized life or ancient alien ruins on Mars be bad news for humanity\'s future?',
    options: [
      'It would unleash prehistoric pathogens that wipe out humans',
      'It would prove that the evolutionary bottleneck (Great Filter) lies in our future rather than behind us',
      'It would cause immediate economic collapse of space agencies',
      'It would trigger an automated alien defense system'
    ],
    correctIndex: 1,
    explanation: 'If life easily evolves to complex stages on multiple worlds in our own solar system, it implies the barrier preventing interstellar civilization lies ahead of us (e.g. self-destruction via technology).',
    funFactSnippet: 'Philosopher Nick Bostrom summarized this sobering idea with the phrase: "Silence is golden; no news is good news for our species\' survival."'
  },

  // 6. Tabby's Star & Dyson Swarms
  {
    id: 'tabby-01',
    articleId: 'tabbys-star-dyson-swarm',
    topic: 'KIC 8462852 & Megastructures',
    category: 'exoplanets',
    difficulty: 'cadet',
    question: 'What made Tabby\'s Star (KIC 8462852) so sensational when observed by the Kepler Space Telescope?',
    options: [
      'It emitted intense artificial radio music',
      'Its light dipped irregularly by up to 22%, far more than any normal planet transit',
      'It was discovered to have a square cubic orbit',
      'It flashed Morse code in ultraviolet bursts'
    ],
    correctIndex: 1,
    explanation: 'A Jupiter-sized exoplanet blocks ~1% of a star\'s light. Tabby\'s Star dimmed irregularly by up to 22% in asymmetric spikes, leading to early speculation of alien megastructures.',
    funFactSnippet: 'Subsequent multi-wavelength observations showed blue light was blocked more than red light, indicating microscopic dust rather than opaque solid alien panels.'
  },
  {
    id: 'tabby-02',
    articleId: 'tabbys-star-dyson-swarm',
    topic: 'Kardashev Scale & Dyson Spheres',
    category: 'exoplanets',
    difficulty: 'astrophysicist',
    question: 'On the Kardashev Scale, what type of civilization has the capability to capture the total energy output of its host star (e.g., using a Dyson Swarm)?',
    options: [
      'Type I Civilization',
      'Type II Civilization',
      'Type III Civilization',
      'Type IV Civilization'
    ],
    correctIndex: 1,
    explanation: 'Soviet astronomer Nikolai Kardashev classified civilizations: Type I harnesses the power of its home planet, Type II harnesses its entire star (~$10^{26}$ W), and Type III harnesses its galaxy (~$10^{37}$ W).',
    funFactSnippet: 'Humanity is currently estimated to be around Type 0.73 on the Kardashev scale, relying primarily on fossil fuels and planetary solar/nuclear.'
  },

  // 7. Extreme Exoplanets (HD 189733b, 55 Cancri e, K2-18b)
  {
    id: 'exoplanet-01',
    articleId: 'hd-189733b-glass-rain',
    topic: 'Exoplanet HD 189733b',
    category: 'exoplanets',
    difficulty: 'cadet',
    question: 'What terrifying weather phenomenon characterizes the deep azure-blue gas giant HD 189733b?',
    options: [
      'Acid hail moving at walking speed',
      'Molten silicate glass raining sideways in 8,700 km/h hypersonic winds',
      'Liquid nitrogen blizzards',
      'Solid iron snowflakes falling into endless steam'
    ],
    correctIndex: 1,
    explanation: 'HD 189733b has an atmospheric temperature over 1,200°C and 2 km/s winds. Silicate minerals condense into liquid glass that is whipped sideways at Mach 7.',
    funFactSnippet: 'Its stunning cobalt-blue color in optical telescopes mimics Earth, but it comes entirely from the light scattering off high-altitude silicate clouds.'
  },
  {
    id: 'exoplanet-02',
    articleId: '55-cancri-e-diamond-planet',
    topic: '55 Cancri e',
    category: 'exoplanets',
    difficulty: 'cadet',
    question: 'Why is the super-Earth 55 Cancri e nicknamed the "Diamond Planet"?',
    options: [
      'It reflects starlight like a polished mirror due to pure ice mirrors',
      'Its carbon-rich mantle and crust have crystallized into diamond and graphite under intense heat and pressure',
      'It was discovered on a jewelry company’s anniversary',
      'It has giant floating diamond continents in a mercury ocean'
    ],
    correctIndex: 1,
    explanation: 'In a star system with high carbon-to-oxygen ratios, intense internal heat (>2,000°C) and colossal pressure compress thick carbon reserves into diamond and graphite.',
    funFactSnippet: 'Economists calculated that if 55 Cancri e\'s diamond could be mined, it would be valued at $26.9 nonillion dollars ($26.9 × 10²⁷).'
  },
  {
    id: 'exoplanet-03',
    articleId: 'trappist-1-seven-earths',
    topic: 'TRAPPIST-1 System',
    category: 'exoplanets',
    difficulty: 'astrophysicist',
    question: 'How many Earth-sized terrestrial planets orbit the ultracool red dwarf star TRAPPIST-1?',
    options: [
      '3 planets',
      '5 planets',
      '7 planets',
      '12 planets'
    ],
    correctIndex: 2,
    explanation: 'The TRAPPIST-1 system hosts 7 Earth-sized planets (b through h), with at least three (e, f, and g) residing in the star’s temperate habitable zone where liquid water could exist.',
    funFactSnippet: 'The entire TRAPPIST-1 system is so compact that all seven planets orbit closer to their star than Mercury orbits our Sun!'
  },

  // 8. Cosmic Voids & Mysteries (Boötes Void, "Wow!" Signal, Dark Forest)
  {
    id: 'mystery-01',
    articleId: 'bootes-void-loneliest-chasm',
    topic: 'The Boötes Void',
    category: 'cosmology',
    difficulty: 'astrophysicist',
    question: 'The Boötes Void spans roughly 330 million light-years across. How many galaxies have astronomers detected inside this colossal abyss compared to the ~2,000 expected?',
    options: [
      'Zero galaxies (pure complete vacuum)',
      'Only about 60 galaxies',
      'Roughly 500 galaxies',
      'Exactly 1 solitary super-galaxy'
    ],
    correctIndex: 1,
    explanation: 'Despite its staggering volume (nearly 0.27% of the observable universe), the Boötes Void contains only around 60 known galaxies, almost all aligned along an eerie central filament.',
    funFactSnippet: 'If the Milky Way were placed in the center of the Boötes Void, we wouldn\'t have discovered other galaxies until the invention of deep radio telescopes in the 1960s.'
  },
  {
    id: 'mystery-02',
    articleId: 'wow-signal-alien-transmission',
    topic: 'The "Wow!" Signal',
    category: 'theories',
    difficulty: 'cadet',
    question: 'At what universal electromagnetic frequency was the famous 72-second "Wow!" signal detected in 1977?',
    options: [
      '1420 MHz (The 21cm Hydrogen Line)',
      '2.4 GHz (Standard Microwave)',
      '100 MHz (FM Radio broadcast)',
      '432 Hz (Acoustic Resonance)'
    ],
    correctIndex: 0,
    explanation: 'The Wow! signal was detected at 1420.456 MHz—the natural emission frequency of neutral hydrogen atoms, recognized as the premier interstellar communication channel.',
    funFactSnippet: 'Astronomer Jerry Ehman circled the alphanumeric code "6EQUJ5" on the computer printout and wrote "Wow!" in red pen in the margin.'
  },
  {
    id: 'mystery-03',
    articleId: 'dark-forest-game-theory',
    topic: 'The Dark Forest Theory',
    category: 'theories',
    difficulty: 'astrophysicist',
    question: 'In cosmic sociology (Dark Forest theory), what is the primary reason why advanced civilizations choose to remain silent rather than broadcast their presence?',
    options: [
      'Radio equipment degrades too quickly over deep interstellar distances',
      'In a universe of finite resources and suspicion, any discovered civilization is treated as an existential threat to be preemptively eliminated',
      'Galactic law strictly bans contact with immature species',
      'Civilizations rapidly upload their consciousness into VR and lose interest in the physical cosmos'
    ],
    correctIndex: 1,
    explanation: 'The Dark Forest state of nature is driven by two axioms: survival is primary, and civilizational expansion creates suspicion across light-year communication delays, incentivizing preemptive strikes.',
    funFactSnippet: 'The theory was popularized in Liu Cixin\'s award-winning sci-fi novel "The Dark Forest", part of the Remembrance of Earth\'s Past trilogy.'
  },

  // 9. Cosmic Monsters (Magnetars, TON 618, Supermassive Black Holes)
  {
    id: 'monster-01',
    articleId: 'magnetars-starquakes',
    topic: 'Magnetars & Extreme Physics',
    category: 'monsters',
    difficulty: 'cadet',
    question: 'How powerful is the magnetic field of an active magnetar compared to Earth\'s magnetic field (~0.5 Gauss)?',
    options: [
      'About 100 times stronger',
      'About 10,000 times stronger',
      'About 1,000,000,000,000,000 times stronger (1 quadrillion Gauss)',
      'About 10 times weaker'
    ],
    correctIndex: 2,
    explanation: 'Magnetars possess magnetic fields exceeding $10^{14}$ to $10^{15}$ Gauss—so intense they would dissolve atomic electron clouds and rip iron atoms from human blood at thousands of miles away.',
    funFactSnippet: 'A starquake on magnetar SGR 1806-20 in 2004 released more energy in a tenth of a second than our Sun produces in 150,000 years, ionizing Earth\'s upper atmosphere from 50,000 light-years away.'
  },
  {
    id: 'monster-02',
    articleId: 'ton-618-monster-black-hole',
    topic: 'TON 618 & Ultramassive Black Holes',
    category: 'monsters',
    difficulty: 'astrophysicist',
    question: 'What is the estimated mass of TON 618, the most massive confirmed black hole in the known universe?',
    options: [
      '4 million solar masses (same as Sagittarius A*)',
      '1 billion solar masses',
      '66 billion solar masses',
      '1 trillion solar masses'
    ],
    correctIndex: 2,
    explanation: 'TON 618 has a verified mass of 66 billion times that of our Sun ($6.6 \\times 10^{10} M_\\odot$). Its event horizon spans nearly 400 billion kilometers—over 40 times the orbit of Neptune.',
    funFactSnippet: 'The accretion disk of TON 618 shines with the luminosity of 140 trillion suns, outshining its entire host galaxy by thousands of times.'
  },

  // 10. Quantum & Exotic Physics
  {
    id: 'quantum-01',
    articleId: 'strange-matter-quark-stars',
    topic: 'Strange Quark Matter',
    category: 'quantum',
    difficulty: 'commander',
    question: 'What makes the hypothetical "Strange Matter" so dangerous according to the strangelet hypothesis?',
    options: [
      'It is highly radioactive and emits lethal gamma rays',
      'It is theoretically more stable than normal baryonic matter, potentially converting any ordinary nucleus it touches into strange matter in a runaway chain reaction',
      'It creates microscopic singularities that rapidly evaporate via Hawking radiation',
      'It instantly cools anything it touches to below absolute zero'
    ],
    correctIndex: 1,
    explanation: 'Under the Bodmer-Witten hypothesis, strange quark matter (composed of up, down, and strange quarks in equal numbers) is the true ground state of matter, meaning contact could catalyze ordinary matter to decay into strangelets.',
    funFactSnippet: 'Fortunately, ultra-high-energy cosmic rays have pelted the Moon and asteroids for billions of years without converting them into strange matter, suggesting strangelets are rare or non-infectious.'
  },
  {
    id: 'stellar-01',
    articleId: 'betelgeuse-supernova-clock',
    topic: 'Betelgeuse & Supernovae',
    category: 'monsters',
    difficulty: 'cadet',
    question: 'When the red supergiant star Betelgeuse in Orion finally detonates as a Type II supernova, how bright will it appear in Earth\'s sky?',
    options: [
      'Barely visible to the naked eye on a dark night',
      'Bright enough to cast visible shadows and be easily seen in broad daylight for months',
      'Bright enough to permanently blind the entire human population',
      'It will cause Earth\'s oceans to boil immediately'
    ],
    correctIndex: 1,
    explanation: 'At a safe distance of ~640 light-years, Betelgeuse\'s supernova will shine as bright as the Full Moon, remaining easily visible in daytime skies for over 3 months without harming Earth\'s biosphere.',
    funFactSnippet: 'In late 2019, Betelgeuse dramatically dimmed by 60% during the "Great Dimming", which was later revealed by the Hubble Space Telescope to be a colossal ejection of dust that cooled and blocked starlight.'
  },
  {
    id: 'cosmology-03',
    articleId: 'great-attractor-laniakea',
    topic: 'The Great Attractor & Laniakea',
    category: 'cosmology',
    difficulty: 'astrophysicist',
    question: 'Why has it been historically difficult for optical telescopes on Earth to directly image the "Great Attractor" pulling our Milky Way and thousands of galaxies toward it?',
    options: [
      'It is hidden behind an immense cloud of dark energy',
      'It lies directly in the "Zone of Avoidance", obscured by the thick gas and dust disk of our own Milky Way galaxy',
      'It only reflects ultraviolet light that cannot penetrate Earth\'s atmosphere',
      'It is moving faster than light away from our field of view'
    ],
    correctIndex: 1,
    explanation: 'The Zone of Avoidance is the band of sky blocked by the Milky Way\'s own dense star and dust clouds. Radio and X-ray astronomy finally penetrated the veil to reveal massive galaxy clusters like the Norma Cluster.',
    funFactSnippet: 'The Milky Way and our entire Local Group are barreling toward the Great Attractor at a staggering speed of 600 kilometers per second (1.3 million mph)!'
  }
];

export interface QuizProgressState {
  completedArticleQuizIds: string[]; // e.g. ['time_travel_interstellar']
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  bestStreak: number;
  currentStreak: number;
  xpPoints: number;
  rankTitle: string;
}

export const getCosmicRank = (xp: number): { title: string; badge: string; color: string; nextLevelXp: number } => {
  if (xp >= 1500) return { title: 'Galactic Arch-Scholar', badge: 'Tier V • Arch-Scholar', color: 'text-amber-400', nextLevelXp: 3000 };
  if (xp >= 900) return { title: 'Cosmic Astrophile', badge: 'Tier IV • Master', color: 'text-purple-400', nextLevelXp: 1500 };
  if (xp >= 500) return { title: 'Quantum Theorist', badge: 'Tier III • Theorist', color: 'text-cyan-400', nextLevelXp: 900 };
  if (xp >= 200) return { title: 'Orbital Navigator', badge: 'Tier II • Navigator', color: 'text-emerald-400', nextLevelXp: 500 };
  return { title: 'Stargazer Cadet', badge: 'Tier I • Cadet', color: 'text-slate-300', nextLevelXp: 200 };
};
