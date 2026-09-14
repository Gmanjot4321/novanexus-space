import { ComparableEntity, UniverseComponent } from '../types';
export { COMPARABLE_ENTITIES } from './comparableEntitiesData';


export const UNIVERSE_COMPONENTS: UniverseComponent[] = [
  {
    "id": "earth",
    "name": "Earth (Terra)",
    "type": "Planet",
    "category": "Terrestrial Planets",
    "distanceLightYears": "0.0000158 ly",
    "description": "The cradle of human civilization and the only known harbor of liquid surface oceans and self-replicating biology.",
    "highlightStat": "6,371 km radius // 1.0g gravity",
    "badge": "Habitable World",
    "comparableId": "earth"
  },
  {
    "id": "mars",
    "name": "Mars (The Red Planet)",
    "type": "Planet",
    "category": "Terrestrial Planets",
    "distanceLightYears": "0.0000241 ly",
    "description": "Home to Olympus Mons and colossal subterranean ice sheets beneath rust-laden oxidized regolith sands.",
    "highlightStat": "3,390 km radius // 0.38g gravity",
    "badge": "Primary Frontier",
    "comparableId": "mars"
  },
  {
    "id": "jupiter",
    "name": "Jupiter (King of Planets)",
    "type": "Planet",
    "category": "Gas Giants",
    "distanceLightYears": "0.0000823 ly",
    "description": "A massive gas behemoth with 95 moons and the Great Red Spot storm system that has raged for centuries.",
    "highlightStat": "69,911 km radius // 318 Earth Masses",
    "badge": "System Anchor",
    "comparableId": "jupiter"
  },
  {
    "id": "saturn",
    "name": "Saturn (Ringed Monarch)",
    "type": "Planet",
    "category": "Gas Giants",
    "distanceLightYears": "0.0001509 ly",
    "description": "Famed for its majestic ring system composed of billions of water-ice shards and 146 known orbiting moons.",
    "highlightStat": "58,232 km radius // 0.687 g/cm³ density",
    "badge": "Ring System King",
    "comparableId": "saturn"
  },
  {
    "id": "venus",
    "name": "Venus (Morning Star)",
    "type": "Planet",
    "category": "Terrestrial Planets",
    "distanceLightYears": "0.0000114 ly",
    "description": "A runaway greenhouse inferno with 92 atmospheres of supercritical carbon dioxide pressure.",
    "highlightStat": "6,052 km radius // 464°C Mean Temp",
    "badge": "Acid Crucible",
    "comparableId": "venus"
  },
  {
    "id": "mercury",
    "name": "Mercury (Sun Scorched)",
    "type": "Planet",
    "category": "Terrestrial Planets",
    "distanceLightYears": "0.0000097 ly",
    "description": "A dense iron core world baking under the Sun, experiencing the most extreme thermal swings in our system.",
    "highlightStat": "2,440 km radius // 430°C to -180°C",
    "badge": "Solar Sentinel",
    "comparableId": "mercury"
  },
  {
    "id": "uranus",
    "name": "Uranus (The Tilted Giant)",
    "type": "Planet",
    "category": "Ice Giants",
    "distanceLightYears": "0.000304 ly",
    "description": "An aquamarine ice giant knocked on its side with a 98-degree axial tilt and freezing diamond hail rain.",
    "highlightStat": "25,362 km radius // 97.8° Axial Tilt",
    "badge": "Sideways World",
    "comparableId": "uranus"
  },
  {
    "id": "neptune",
    "name": "Neptune (Supersonic Storm)",
    "type": "Planet",
    "category": "Ice Giants",
    "distanceLightYears": "0.000475 ly",
    "description": "The outermost major planet, racked by supersonic 2,100 km/h winds and deep methane blue cloud decks.",
    "highlightStat": "24,622 km radius // 2,100 km/h Winds",
    "badge": "Supersonic Giant",
    "comparableId": "neptune"
  },
  {
    "id": "europa",
    "name": "Europa",
    "type": "Moon",
    "category": "Ocean Moons",
    "distanceLightYears": "0.000082 ly (Jupiter)",
    "description": "A smooth cracked ice shell sheltering a global saltwater ocean containing more water than all Earth oceans combined.",
    "highlightStat": "1,560 km radius // 100 km deep ocean",
    "badge": "Astrobiology Target",
    "comparableId": "europa"
  },
  {
    "id": "titan",
    "name": "Titan",
    "type": "Moon",
    "category": "Hydrocarbon Moons",
    "distanceLightYears": "0.00015 ly (Saturn)",
    "description": "The only moon with a dense nitrogen atmosphere, featuring rivers, rain, and lakes of liquid methane-ethane.",
    "highlightStat": "2,574 km radius // 1.5 atm atmosphere",
    "badge": "Prebiotic Haven",
    "comparableId": "titan"
  },
  {
    "id": "ganymede",
    "name": "Ganymede",
    "type": "Moon",
    "category": "Major Moons",
    "distanceLightYears": "0.000082 ly (Jupiter)",
    "description": "The largest moon in the Solar System, larger than planet Mercury and possessing its own intrinsic magnetic field.",
    "highlightStat": "2,634 km radius // Own Magnetosphere",
    "badge": "King Moon",
    "comparableId": "ganymede"
  },
  {
    "id": "enceladus",
    "name": "Enceladus",
    "type": "Moon",
    "category": "Ocean Moons",
    "distanceLightYears": "0.00015 ly (Saturn)",
    "description": "A gleaming ice moon shooting hydrothermal cryovolcanic geysers of organic-rich water vapor into orbit.",
    "highlightStat": "252 km radius // Hydrothermal Vents",
    "badge": "Cryogeyser World",
    "comparableId": "enceladus"
  },
  {
    "id": "io",
    "name": "Io",
    "type": "Moon",
    "category": "Volcanic Moons",
    "distanceLightYears": "0.000082 ly (Jupiter)",
    "description": "The most volcanically hyperactive body in the solar system, with 400+ erupting sulfur volcanoes.",
    "highlightStat": "1,821 km radius // 1,200°C Lava Plumes",
    "badge": "Sulfur Inferno",
    "comparableId": "io"
  },
  {
    "id": "callisto",
    "name": "Callisto",
    "type": "Moon",
    "category": "Major Moons",
    "distanceLightYears": "0.000082 ly (Jupiter)",
    "description": "The most heavily cratered ancient body in the solar system, with a pristine primordial ice-rock surface.",
    "highlightStat": "2,410 km radius // Ancient Primordial Crust",
    "badge": "Impact Relic",
    "comparableId": "callisto"
  },
  {
    "id": "triton",
    "name": "Triton",
    "type": "Moon",
    "category": "Cryogenic Moons",
    "distanceLightYears": "0.000475 ly (Neptune)",
    "description": "A captured Kuiper Belt dwarf moon orbiting backwards, sporting nitrogen geysers and cantaloupe terrain.",
    "highlightStat": "1,353 km radius // Retrograde Orbit",
    "badge": "Captured Kuiper World",
    "comparableId": "triton"
  },
  {
    "id": "sagittarius-a",
    "name": "Sagittarius A*",
    "type": "Black Hole",
    "category": "Supermassive Black Holes",
    "distanceLightYears": "26,673 ly (Galactic Center)",
    "description": "The supermassive gravitational dynamo anchoring the rotational center of our Milky Way Galaxy.",
    "highlightStat": "4.15 Million M☉ // EHT Imaged Horizon",
    "badge": "Galactic Core Anchor"
  },
  {
    "id": "ton-618",
    "name": "TON 618",
    "type": "Black Hole",
    "category": "Ultramassive Black Holes",
    "distanceLightYears": "10.8 Billion ly",
    "description": "One of the most massive black holes ever discovered, radiating with the luminosity of 140 trillion suns.",
    "highlightStat": "66 Billion M☉ // 390 Billion km Event Horizon",
    "badge": "Universal Titan"
  },
  {
    "id": "m87-blackhole",
    "name": "M87* (Pōwehi)",
    "type": "Black Hole",
    "category": "Supermassive Black Holes",
    "distanceLightYears": "53.5 Million ly (Virgo A)",
    "description": "The historical first black hole directly imaged in human history, launching a 5,000-light-year relativistic jet.",
    "highlightStat": "6.5 Billion M☉ // Relativistic Plasma Jet",
    "badge": "First Imaged Black Hole"
  },
  {
    "id": "cygnus-x1",
    "name": "Cygnus X-1",
    "type": "Black Hole",
    "category": "Stellar Mass Black Holes",
    "distanceLightYears": "6,070 ly (Cygnus)",
    "description": "The first widely accepted black hole candidate, stripping plasma from a blue supergiant companion star.",
    "highlightStat": "21.2 M☉ // Near Light-Speed Spin",
    "badge": "First Confirmed Black Hole"
  },
  {
    "id": "phoenix-a",
    "name": "Phoenix A*",
    "type": "Black Hole",
    "category": "Ultramassive Black Holes",
    "distanceLightYears": "5.8 Billion ly",
    "description": "A gargantuan black hole situated in the central galaxy of the Phoenix Cluster, growing at a record pace.",
    "highlightStat": "100 Billion M☉ // Cosmic Leviathan",
    "badge": "Cluster Behemoth"
  },
  {
    "id": "stephenson-2-18",
    "name": "Stephenson 2-18",
    "type": "Star",
    "category": "Red Hypergiants",
    "distanceLightYears": "18,900 ly (Scutum)",
    "description": "The largest known star by volume; if placed at our Sun’s center, its photosphere would engulf Saturn’s orbit.",
    "highlightStat": "2,150 R☉ // 10 Billion Suns Volume",
    "badge": "Largest Known Star"
  },
  {
    "id": "uy-scuti",
    "name": "UY Scuti",
    "type": "Star",
    "category": "Red Supergiants",
    "distanceLightYears": "9,500 ly (Scutum)",
    "description": "A pulsating red supergiant of staggering dimensions, losing massive amounts of mass through solar winds.",
    "highlightStat": "1,708 R☉ // Pulsating Hypergiant",
    "badge": "Hypergiant Pulsar"
  },
  {
    "id": "r136a1",
    "name": "R136a1",
    "type": "Star",
    "category": "Wolf-Rayet Stars",
    "distanceLightYears": "163,000 ly (LMC)",
    "description": "The most massive and luminous star known, radiating 4.7 million times the total energy output of our Sun.",
    "highlightStat": "230 M☉ // 4.7 Million L☉ Luminosity",
    "badge": "Most Massive Star"
  },
  {
    "id": "betelgeuse",
    "name": "Betelgeuse",
    "type": "Star",
    "category": "Red Supergiants",
    "distanceLightYears": "642.5 ly (Orion)",
    "description": "A nearby red supergiant on the brink of core-collapse supernova, which will illuminate night skies like a full moon.",
    "highlightStat": "764 R☉ // Supernova Countdown",
    "badge": "Future Supernova"
  },
  {
    "id": "vy-canis-majoris",
    "name": "VY Canis Majoris",
    "type": "Star",
    "category": "Red Hypergiants",
    "distanceLightYears": "3,840 ly (Canis Major)",
    "description": "An extreme red hypergiant enveloped in complex circumstellar clouds of expelled silicates and gas.",
    "highlightStat": "1,420 R☉ // Complex Nebula Shell",
    "badge": "Hypergiant Giant"
  },
  {
    "id": "eta-carinae",
    "name": "Eta Carinae",
    "type": "Star",
    "category": "Luminous Blue Variables",
    "distanceLightYears": "7,500 ly (Carina)",
    "description": "A volatile binary system surrounded by the bipolar Homunculus Nebula, prone to catastrophic mega-eruptions.",
    "highlightStat": "100+ M☉ // Homunculus Ejecta",
    "badge": "Great Erupter"
  },
  {
    "id": "andromeda-galaxy",
    "name": "Andromeda Galaxy (M31)",
    "type": "Galaxy",
    "category": "Spiral Galaxies",
    "distanceLightYears": "2.537 Million ly",
    "description": "Our majestic sister galaxy containing one trillion stars, currently on a collision course with the Milky Way.",
    "highlightStat": "220,000 ly diameter // 1 Trillion Stars",
    "badge": "Local Group Giant"
  },
  {
    "id": "orion-nebula",
    "name": "Orion Nebula (M42)",
    "type": "Nebula",
    "category": "Diffuse Emission Nebulae",
    "distanceLightYears": "1,344 ly (Orion)",
    "description": "A stellar nursery where hundreds of infant protostars are condensing out of turbulent hydrogen clouds.",
    "highlightStat": "24 ly diameter // Active Star Nursery",
    "badge": "Stellar Nursery"
  },
  {
    "id": "crab-nebula",
    "name": "Crab Nebula (M1)",
    "type": "Nebula",
    "category": "Supernova Remnants",
    "distanceLightYears": "6,500 ly (Taurus)",
    "description": "The glowing remnant of a supernova recorded by global astronomers in 1054 AD, powered by a central pulsar.",
    "highlightStat": "11 ly diameter // 30 Hz Central Pulsar",
    "badge": "Supernova Remnant"
  },
  {
    "id": "sombrero-galaxy",
    "name": "Sombrero Galaxy (M104)",
    "type": "Galaxy",
    "category": "Unbarred Spiral Galaxies",
    "distanceLightYears": "31.1 Million ly (Virgo)",
    "description": "A bright white bulbous core encircled by a prominent symmetrical lane of dark cosmic dust lanes.",
    "highlightStat": "50,000 ly diameter // Massive Central BH",
    "badge": "Iconic Dust Ring"
  },
  {
    "id": "pillars-of-creation",
    "name": "Pillars of Creation",
    "type": "Nebula",
    "category": "Molecular Cloud Columns",
    "distanceLightYears": "7,000 ly (Eagle Nebula)",
    "description": "Monumental towers of interstellar gas and dust sculpting newborn proto-planetary systems.",
    "highlightStat": "4-5 ly tall pillars // Photo-evaporation",
    "badge": "Cosmic Sculptures"
  },
  {
    "id": "triangulum-galaxy",
    "name": "Triangulum Galaxy (M33)",
    "type": "Galaxy",
    "category": "Spiral Galaxies",
    "distanceLightYears": "2.73 Million ly",
    "description": "The third-largest member of the Local Group, packed with high star-formation nurseries like NGC 604.",
    "highlightStat": "60,000 ly diameter // High Starburst Rate",
    "badge": "Local Spiral"
  },
  {
    "id": "carina-nebula",
    "name": "Carina Nebula (NGC 3372)",
    "type": "Nebula",
    "category": "Giant Emission Nebulae",
    "distanceLightYears": "8,500 ly (Carina)",
    "description": "A turbulent stellar furnace four times larger and brighter than Orion, cradling hypergiant stars.",
    "highlightStat": "300 ly diameter // Cosmic Cliffs",
    "badge": "Giant Star Furnace"
  },
  {
    "id": "catalog-entity-33",
    "name": "IC-331 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "493.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-34",
    "name": "UGC J1338+86",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "508.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-35",
    "name": "Abell J1345+10",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "522.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 595 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-36",
    "name": "ESO BH-352",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "537.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "12700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-37",
    "name": "Vela 559",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "551.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "87 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-38",
    "name": "Centaurus 366 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "566.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-39",
    "name": "Cygnus-373 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "580.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,353 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-40",
    "name": "Kepler-380 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "595.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 240 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-41",
    "name": "TOI-387 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "609.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-42",
    "name": "K2-394 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "624.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-43",
    "name": "WASP-401 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "638.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-44",
    "name": "HD J1408+38",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "653.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-45",
    "name": "TRAPPIST-1 J1415+51",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "667.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 65 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-46",
    "name": "Gliese BH-422",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "682.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "16200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-47",
    "name": "LHS 629",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "696.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "97 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-48",
    "name": "CoRoT 436 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "711.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-49",
    "name": "OGLE-443 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "725.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,623 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-50",
    "name": "PSR-450 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "740.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 250 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-51",
    "name": "SGR-457 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "754.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-52",
    "name": "NGC-464 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "769.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-53",
    "name": "IC-471 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "783.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-54",
    "name": "UGC J1478+79",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "798.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-55",
    "name": "Abell J1485+3",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "812.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 235 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-56",
    "name": "ESO BH-492",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "827.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "19700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-57",
    "name": "Vela 699",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "841.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "107 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-58",
    "name": "Centaurus 506 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "856.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-59",
    "name": "Cygnus-513 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "870.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,893 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-60",
    "name": "Kepler-520 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "885.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 260 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-61",
    "name": "TOI-527 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "899.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-62",
    "name": "K2-534 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "914.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-63",
    "name": "WASP-541 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "928.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-64",
    "name": "HD J1548+31",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "943.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-65",
    "name": "TRAPPIST-1 J1555+44",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "957.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 405 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-66",
    "name": "Gliese BH-562",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "972.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "23200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-67",
    "name": "LHS 769",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "986.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "117 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-68",
    "name": "CoRoT 576 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "1001.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-69",
    "name": "OGLE-583 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "1015.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,163 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-70",
    "name": "PSR-590 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "1030.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 270 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-71",
    "name": "SGR-597 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "1044.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-72",
    "name": "NGC-604 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "1059.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-73",
    "name": "IC-611 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "1073.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-74",
    "name": "UGC J1618+72",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "1088.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-75",
    "name": "Abell J1625+85",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "1102.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 575 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-76",
    "name": "ESO BH-632",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "1117.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "26700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-77",
    "name": "Vela 839",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "1131.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "127 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-78",
    "name": "Centaurus 646 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "1146.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-79",
    "name": "Cygnus-653 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "1160.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,433 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-80",
    "name": "Kepler-660 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "1175.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 280 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-81",
    "name": "TOI-667 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "1189.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-82",
    "name": "K2-674 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "1204.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-83",
    "name": "WASP-681 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "1218.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-84",
    "name": "HD J1688+24",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "1233.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-85",
    "name": "TRAPPIST-1 J1695+37",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "1247.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 45 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-86",
    "name": "Gliese BH-702",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "1262.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-87",
    "name": "LHS 909",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "1276.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "137 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-88",
    "name": "CoRoT 716 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "1291.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-89",
    "name": "OGLE-723 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "1305.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,703 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-90",
    "name": "PSR-730 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "1320.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 290 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-91",
    "name": "SGR-737 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "1334.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-92",
    "name": "NGC-744 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "1349.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-93",
    "name": "IC-751 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "1363.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-94",
    "name": "UGC J1758+65",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "1378.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-95",
    "name": "Abell J1765+78",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "1392.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 215 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-96",
    "name": "ESO BH-772",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "1407.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "33700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-97",
    "name": "Vela 979",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "1421.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "147 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-98",
    "name": "Centaurus 786 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "1436.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-99",
    "name": "Cygnus-793 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "1450.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "473 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-100",
    "name": "Kepler-800 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "1465.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 300 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-101",
    "name": "TOI-807 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "1479.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-102",
    "name": "K2-814 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "1494.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-103",
    "name": "WASP-821 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "1508.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-104",
    "name": "HD J1828+17",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "1523.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-105",
    "name": "TRAPPIST-1 J1835+30",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "1537.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 385 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-106",
    "name": "Gliese BH-842",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "1552.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "37200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-107",
    "name": "LHS 1049",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "1566.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "157 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-108",
    "name": "CoRoT 856 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "1581.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-109",
    "name": "OGLE-863 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "1595.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "743 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-110",
    "name": "PSR-870 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "1610.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 310 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-111",
    "name": "SGR-877 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "1624.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-112",
    "name": "NGC-884 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "1639.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-113",
    "name": "IC-891 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "1653.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-114",
    "name": "UGC J1898+58",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "1668.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-115",
    "name": "Abell J1905+71",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "1682.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 555 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-116",
    "name": "ESO BH-912",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "1697.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-117",
    "name": "Vela 1119",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "1711.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "167 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-118",
    "name": "Centaurus 926 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "1726.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-119",
    "name": "Cygnus-933 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "1740.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,013 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-120",
    "name": "Kepler-940 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "1755.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 320 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-121",
    "name": "TOI-947 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "1769.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-122",
    "name": "K2-954 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "1784.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-123",
    "name": "WASP-961 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "1798.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-124",
    "name": "HD J1968+10",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "1813.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-125",
    "name": "TRAPPIST-1 J1975+23",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "1827.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 25 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-126",
    "name": "Gliese BH-982",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "1842.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "44200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-127",
    "name": "LHS 1189",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "1856.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "177 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-128",
    "name": "CoRoT 996 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "1871.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-129",
    "name": "OGLE-1003 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "1885.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,283 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-130",
    "name": "PSR-1010 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "1900.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 330 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-131",
    "name": "SGR-1017 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "1914.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-132",
    "name": "NGC-1024 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "1929.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-133",
    "name": "IC-1031 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "1943.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-134",
    "name": "UGC J2038+51",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "1958.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-135",
    "name": "Abell J2045+64",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "1972.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 195 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-136",
    "name": "ESO BH-1052",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "1987.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "47700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-137",
    "name": "Vela 1259",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "2001.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "187 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-138",
    "name": "Centaurus 1066 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "2016.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-139",
    "name": "Cygnus-1073 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "2030.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,553 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-140",
    "name": "Kepler-1080 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "2045.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 340 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-141",
    "name": "TOI-1087 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "2059.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-142",
    "name": "K2-1094 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "2074.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-143",
    "name": "WASP-1101 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "2088.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-144",
    "name": "HD J2108+3",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "2103.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-145",
    "name": "TRAPPIST-1 J2115+16",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "2117.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 365 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-146",
    "name": "Gliese BH-1122",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "2132.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "51200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-147",
    "name": "LHS 1329",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "2146.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "197 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-148",
    "name": "CoRoT 1136 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "2161.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-149",
    "name": "OGLE-1143 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "2175.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,823 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-150",
    "name": "PSR-1150 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "2190.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 350 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-151",
    "name": "SGR-1157 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "2204.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-152",
    "name": "NGC-1164 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "2219.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-153",
    "name": "IC-1171 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "2233.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-154",
    "name": "UGC J2178+44",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "2248.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-155",
    "name": "Abell J2185+57",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "2262.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 535 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-156",
    "name": "ESO BH-1192",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "2277.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "54700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-157",
    "name": "Vela 1399",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "2291.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "207 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-158",
    "name": "Centaurus 1206 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "2306.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-159",
    "name": "Cygnus-1213 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "2320.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,093 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-160",
    "name": "Kepler-1220 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "2335.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 360 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-161",
    "name": "TOI-1227 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "2349.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-162",
    "name": "K2-1234 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "2364.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-163",
    "name": "WASP-1241 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "2378.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-164",
    "name": "HD J2248+85",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "2393.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-165",
    "name": "TRAPPIST-1 J2255+9",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "2407.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 5 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-166",
    "name": "Gliese BH-1262",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "2422.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "58200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-167",
    "name": "LHS 1469",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "2436.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "217 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-168",
    "name": "CoRoT 1276 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "2451.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-169",
    "name": "OGLE-1283 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "2465.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,363 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-170",
    "name": "PSR-1290 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "2480.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 370 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-171",
    "name": "SGR-1297 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "2494.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-172",
    "name": "NGC-1304 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "2509.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-173",
    "name": "IC-1311 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "2523.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-174",
    "name": "UGC J2318+37",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "2538.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-175",
    "name": "Abell J2325+50",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "2552.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 175 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-176",
    "name": "ESO BH-1332",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "2567.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "61700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-177",
    "name": "Vela 1539",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "2581.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "227 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-178",
    "name": "Centaurus 1346 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "2596.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-179",
    "name": "Cygnus-1353 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "2610.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,633 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-180",
    "name": "Kepler-1360 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "2625.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 380 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-181",
    "name": "TOI-1367 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "2639.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-182",
    "name": "K2-1374 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "2654.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-183",
    "name": "WASP-1381 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "2668.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-184",
    "name": "HD J2388+78",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "2683.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-185",
    "name": "TRAPPIST-1 J2395+2",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "2697.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 345 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-186",
    "name": "Gliese BH-1402",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "2712.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "65200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-187",
    "name": "LHS 1609",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "2726.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "237 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-188",
    "name": "CoRoT 1416 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "2741.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-189",
    "name": "OGLE-1423 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "2755.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "403 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-190",
    "name": "PSR-1430 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "2770.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 390 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-191",
    "name": "SGR-1437 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "2784.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-192",
    "name": "NGC-1444 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "2799.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-193",
    "name": "IC-1451 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "2813.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-194",
    "name": "UGC J2458+30",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "2828.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-195",
    "name": "Abell J2465+43",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "2842.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 515 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-196",
    "name": "ESO BH-1472",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "2857.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "68700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-197",
    "name": "Vela 1679",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "2871.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "247 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-198",
    "name": "Centaurus 1486 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "2886.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-199",
    "name": "Cygnus-1493 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "2900.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "673 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-200",
    "name": "Kepler-1500 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "2915.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 400 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-201",
    "name": "TOI-1507 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "2929.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-202",
    "name": "K2-1514 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "2944.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-203",
    "name": "WASP-1521 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "2958.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-204",
    "name": "HD J2528+71",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "2973.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-205",
    "name": "TRAPPIST-1 J2535+84",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "2987.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 685 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-206",
    "name": "Gliese BH-1542",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "3002.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "72200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-207",
    "name": "LHS 1749",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "3016.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-208",
    "name": "CoRoT 1556 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "3031.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-209",
    "name": "OGLE-1563 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "3045.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "943 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-210",
    "name": "PSR-1570 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "3060.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 410 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-211",
    "name": "SGR-1577 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "3074.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-212",
    "name": "NGC-1584 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "3089.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-213",
    "name": "IC-1591 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "3103.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-214",
    "name": "UGC J2598+23",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "3118.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-215",
    "name": "Abell J2605+36",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "3132.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 155 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-216",
    "name": "ESO BH-1612",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "3147.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "75700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-217",
    "name": "Vela 1819",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "3161.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-218",
    "name": "Centaurus 1626 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "3176.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-219",
    "name": "Cygnus-1633 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "3190.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,213 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-220",
    "name": "Kepler-1640 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "3205.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 420 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-221",
    "name": "TOI-1647 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "3219.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-222",
    "name": "K2-1654 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "3234.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-223",
    "name": "WASP-1661 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "3248.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-224",
    "name": "HD J2668+64",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "3263.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-225",
    "name": "TRAPPIST-1 J2675+77",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "3277.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 325 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-226",
    "name": "Gliese BH-1682",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "3292.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "79200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-227",
    "name": "LHS 1889",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "3306.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-228",
    "name": "CoRoT 1696 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "3321.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-229",
    "name": "OGLE-1703 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "3335.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,483 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-230",
    "name": "PSR-1710 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "3350.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 430 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-231",
    "name": "SGR-1717 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "3364.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-232",
    "name": "NGC-1724 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "3379.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-233",
    "name": "IC-1731 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "3393.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-234",
    "name": "UGC J2738+16",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "3408.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-235",
    "name": "Abell J2745+29",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "3422.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 495 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-236",
    "name": "ESO BH-1752",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "3437.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-237",
    "name": "Vela 1959",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "3451.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "87 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-238",
    "name": "Centaurus 1766 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "3466.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-239",
    "name": "Cygnus-1773 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "3480.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,753 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-240",
    "name": "Kepler-1780 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "3495.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 440 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-241",
    "name": "TOI-1787 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "3509.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-242",
    "name": "K2-1794 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "3524.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-243",
    "name": "WASP-1801 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "3538.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-244",
    "name": "HD J2808+57",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "3553.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-245",
    "name": "TRAPPIST-1 J2815+70",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "3567.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 665 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-246",
    "name": "Gliese BH-1822",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "3582.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "6200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-247",
    "name": "LHS 2029",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "3596.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "97 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-248",
    "name": "CoRoT 1836 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "3611.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-249",
    "name": "OGLE-1843 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "3625.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,023 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-250",
    "name": "PSR-1850 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "3640.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 450 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-251",
    "name": "SGR-1857 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "3654.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-252",
    "name": "NGC-1864 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "3669.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-253",
    "name": "IC-1871 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "3683.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-254",
    "name": "UGC J2878+9",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "3698.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-255",
    "name": "Abell J2885+22",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "3712.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 135 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-256",
    "name": "ESO BH-1892",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "3727.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "9700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-257",
    "name": "Vela 2099",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "3741.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "107 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-258",
    "name": "Centaurus 1906 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "3756.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-259",
    "name": "Cygnus-1913 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "3770.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,293 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-260",
    "name": "Kepler-1920 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "3785.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 460 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-261",
    "name": "TOI-1927 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "3799.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-262",
    "name": "K2-1934 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "3814.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-263",
    "name": "WASP-1941 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "3828.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-264",
    "name": "HD J2948+50",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "3843.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-265",
    "name": "TRAPPIST-1 J2955+63",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "3857.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 305 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-266",
    "name": "Gliese BH-1962",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "3872.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "13200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-267",
    "name": "LHS 2169",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "3886.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "117 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-268",
    "name": "CoRoT 1976 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "3901.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-269",
    "name": "OGLE-1983 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "3915.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,563 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-270",
    "name": "PSR-1990 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "3930.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 470 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-271",
    "name": "SGR-1997 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "3944.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-272",
    "name": "NGC-2004 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "3959.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-273",
    "name": "IC-2011 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "3973.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-274",
    "name": "UGC J3018+2",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "3988.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-275",
    "name": "Abell J3025+15",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "4002.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 475 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-276",
    "name": "ESO BH-2032",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "4017.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "16700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-277",
    "name": "Vela 2239",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "4031.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "127 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-278",
    "name": "Centaurus 2046 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "4046.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-279",
    "name": "Cygnus-2053 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "4060.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "333 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-280",
    "name": "Kepler-2060 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "4075.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 480 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-281",
    "name": "TOI-2067 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "4089.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-282",
    "name": "K2-2074 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "4104.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-283",
    "name": "WASP-2081 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "4118.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-284",
    "name": "HD J3088+43",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "4133.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-285",
    "name": "TRAPPIST-1 J3095+56",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "4147.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 645 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-286",
    "name": "Gliese BH-2102",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "4162.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-287",
    "name": "LHS 2309",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "4176.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "137 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-288",
    "name": "CoRoT 2116 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "4191.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-289",
    "name": "OGLE-2123 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "4205.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "603 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-290",
    "name": "PSR-2130 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "4220.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 490 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-291",
    "name": "SGR-2137 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "4234.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-292",
    "name": "NGC-2144 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "4249.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-293",
    "name": "IC-2151 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "4263.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-294",
    "name": "UGC J3158+84",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "4278.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-295",
    "name": "Abell J3165+8",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "4292.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 115 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-296",
    "name": "ESO BH-2172",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "4307.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "23700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-297",
    "name": "Vela 2379",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "4321.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "147 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-298",
    "name": "Centaurus 2186 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "4336.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-299",
    "name": "Cygnus-2193 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "4350.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "873 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-300",
    "name": "Kepler-2200 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "4365.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 500 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-301",
    "name": "TOI-2207 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "4379.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-302",
    "name": "K2-2214 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "4394.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-303",
    "name": "WASP-2221 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "4408.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-304",
    "name": "HD J3228+36",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "4423.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-305",
    "name": "TRAPPIST-1 J3235+49",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "4437.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 285 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-306",
    "name": "Gliese BH-2242",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "4452.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "27200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-307",
    "name": "LHS 2449",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "4466.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "157 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-308",
    "name": "CoRoT 2256 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "4481.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-309",
    "name": "OGLE-2263 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "4495.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,143 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-310",
    "name": "PSR-2270 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "4510.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 510 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-311",
    "name": "SGR-2277 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "4524.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-312",
    "name": "NGC-2284 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "4539.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-313",
    "name": "IC-2291 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "4553.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-314",
    "name": "UGC J3298+77",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "4568.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-315",
    "name": "Abell J3305+1",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "4582.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 455 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-316",
    "name": "ESO BH-2312",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "4597.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-317",
    "name": "Vela 2519",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "4611.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "167 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-318",
    "name": "Centaurus 2326 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "4626.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-319",
    "name": "Cygnus-2333 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "4640.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,413 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-320",
    "name": "Kepler-2340 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "4655.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 520 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-321",
    "name": "TOI-2347 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "4669.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-322",
    "name": "K2-2354 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "4684.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-323",
    "name": "WASP-2361 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "4698.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-324",
    "name": "HD J3368+29",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "4713.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-325",
    "name": "TRAPPIST-1 J3375+42",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "4727.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 625 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-326",
    "name": "Gliese BH-2382",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "4742.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "34200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-327",
    "name": "LHS 2589",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "4756.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "177 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-328",
    "name": "CoRoT 2396 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "4771.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-329",
    "name": "OGLE-2403 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "4785.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,683 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-330",
    "name": "PSR-2410 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "4800.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 530 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-331",
    "name": "SGR-2417 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "4814.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-332",
    "name": "NGC-2424 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "4829.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-333",
    "name": "IC-2431 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "4843.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-334",
    "name": "UGC J3438+70",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "4858.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-335",
    "name": "Abell J3445+83",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "4872.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 95 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-336",
    "name": "ESO BH-2452",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "4887.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "37700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-337",
    "name": "Vela 2659",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "4901.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "187 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-338",
    "name": "Centaurus 2466 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "4916.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-339",
    "name": "Cygnus-2473 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "4930.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,953 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-340",
    "name": "Kepler-2480 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "4945.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 540 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-341",
    "name": "TOI-2487 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "4959.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-342",
    "name": "K2-2494 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "4974.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-343",
    "name": "WASP-2501 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "4988.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-344",
    "name": "HD J3508+22",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "5003.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-345",
    "name": "TRAPPIST-1 J3515+35",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "5017.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 265 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-346",
    "name": "Gliese BH-2522",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "5032.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "41200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-347",
    "name": "LHS 2729",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "5046.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "197 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-348",
    "name": "CoRoT 2536 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "5061.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-349",
    "name": "OGLE-2543 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "5075.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,223 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-350",
    "name": "PSR-2550 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "5090.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 550 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-351",
    "name": "SGR-2557 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "5104.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-352",
    "name": "NGC-2564 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "5119.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-353",
    "name": "IC-2571 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "5133.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-354",
    "name": "UGC J3578+63",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "5148.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-355",
    "name": "Abell J3585+76",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "5162.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 435 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-356",
    "name": "ESO BH-2592",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "5177.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "44700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-357",
    "name": "Vela 2799",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "5191.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "207 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-358",
    "name": "Centaurus 2606 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "5206.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-359",
    "name": "Cygnus-2613 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "5220.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,493 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-360",
    "name": "Kepler-2620 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "5235.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 560 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-361",
    "name": "TOI-2627 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "5249.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-362",
    "name": "K2-2634 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "5264.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-363",
    "name": "WASP-2641 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "5278.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-364",
    "name": "HD J3648+15",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "5293.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-365",
    "name": "TRAPPIST-1 J3655+28",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "5307.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 605 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-366",
    "name": "Gliese BH-2662",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "5322.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "48200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-367",
    "name": "LHS 2869",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "5336.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "217 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-368",
    "name": "CoRoT 2676 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "5351.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-369",
    "name": "OGLE-2683 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "5365.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,763 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-370",
    "name": "PSR-2690 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "5380.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 570 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-371",
    "name": "SGR-2697 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "5394.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-372",
    "name": "NGC-2704 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "5409.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-373",
    "name": "IC-2711 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "5423.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-374",
    "name": "UGC J3718+56",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "5438.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-375",
    "name": "Abell J3725+69",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "5452.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 75 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-376",
    "name": "ESO BH-2732",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "5467.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "51700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-377",
    "name": "Vela 2939",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "5481.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "227 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-378",
    "name": "Centaurus 2746 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "5496.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-379",
    "name": "Cygnus-2753 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "5510.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "533 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-380",
    "name": "Kepler-2760 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "5525.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 580 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-381",
    "name": "TOI-2767 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "5539.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-382",
    "name": "K2-2774 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "5554.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-383",
    "name": "WASP-2781 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "5568.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-384",
    "name": "HD J3788+8",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "5583.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-385",
    "name": "TRAPPIST-1 J3795+21",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "5597.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 245 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-386",
    "name": "Gliese BH-2802",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "5612.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "55200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-387",
    "name": "LHS 3009",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "5626.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "237 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-388",
    "name": "CoRoT 2816 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "5641.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-389",
    "name": "OGLE-2823 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "5655.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "803 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-390",
    "name": "PSR-2830 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "5670.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 590 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-391",
    "name": "SGR-2837 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "5684.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-392",
    "name": "NGC-2844 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "5699.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-393",
    "name": "IC-2851 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "5713.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-394",
    "name": "UGC J3858+49",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "5728.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-395",
    "name": "Abell J3865+62",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "5742.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 415 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-396",
    "name": "ESO BH-2872",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "5757.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "58700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-397",
    "name": "Vela 3079",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "5771.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "247 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-398",
    "name": "Centaurus 2886 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "5786.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-399",
    "name": "Cygnus-2893 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "5800.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,073 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-400",
    "name": "Kepler-2900 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "5815.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 600 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-401",
    "name": "TOI-2907 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "5829.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-402",
    "name": "K2-2914 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "5844.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-403",
    "name": "WASP-2921 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "5858.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-404",
    "name": "HD J3928+1",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "5873.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-405",
    "name": "TRAPPIST-1 J3935+14",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "5887.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 585 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-406",
    "name": "Gliese BH-2942",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "5902.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "62200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-407",
    "name": "LHS 3149",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "5916.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-408",
    "name": "CoRoT 2956 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "5931.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-409",
    "name": "OGLE-2963 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "5945.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,343 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-410",
    "name": "PSR-2970 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "5960.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 610 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-411",
    "name": "SGR-2977 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "5974.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-412",
    "name": "NGC-2984 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "5989.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-413",
    "name": "IC-2991 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "6003.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-414",
    "name": "UGC J3998+42",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "6018.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-415",
    "name": "Abell J4005+55",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "6032.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 55 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-416",
    "name": "ESO BH-3012",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "6047.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "65700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-417",
    "name": "Vela 3219",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "6061.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-418",
    "name": "Centaurus 3026 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "6076.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-419",
    "name": "Cygnus-3033 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "6090.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,613 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-420",
    "name": "Kepler-3040 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "6105.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 620 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-421",
    "name": "TOI-3047 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "6119.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-422",
    "name": "K2-3054 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "6134.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-423",
    "name": "WASP-3061 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "6148.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-424",
    "name": "HD J4068+83",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "6163.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-425",
    "name": "TRAPPIST-1 J4075+7",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "6177.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 225 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-426",
    "name": "Gliese BH-3082",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "6192.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "69200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-427",
    "name": "LHS 3289",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "6206.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-428",
    "name": "CoRoT 3096 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "6221.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-429",
    "name": "OGLE-3103 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "6235.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,883 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-430",
    "name": "PSR-3110 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "6250.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 630 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-431",
    "name": "SGR-3117 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "6264.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-432",
    "name": "NGC-3124 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "6279.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-433",
    "name": "IC-3131 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "6293.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-434",
    "name": "UGC J4138+35",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "6308.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-435",
    "name": "Abell J4145+48",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "6322.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 395 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-436",
    "name": "ESO BH-3152",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "6337.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "72700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-437",
    "name": "Vela 3359",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "6351.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "87 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-438",
    "name": "Centaurus 3166 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "6366.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-439",
    "name": "Cygnus-3173 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "6380.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,153 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-440",
    "name": "Kepler-3180 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "6395.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 640 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-441",
    "name": "TOI-3187 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "6409.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-442",
    "name": "K2-3194 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "6424.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-443",
    "name": "WASP-3201 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "6438.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-444",
    "name": "HD J4208+76",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "6453.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-445",
    "name": "TRAPPIST-1 J4215+0",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "6467.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 565 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-446",
    "name": "Gliese BH-3222",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "6482.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "76200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-447",
    "name": "LHS 3429",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "6496.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "97 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-448",
    "name": "CoRoT 3236 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "6511.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-449",
    "name": "OGLE-3243 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "6525.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,423 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-450",
    "name": "PSR-3250 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "6540.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 650 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-451",
    "name": "SGR-3257 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "6554.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-452",
    "name": "NGC-3264 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "6569.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-453",
    "name": "IC-3271 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "6583.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-454",
    "name": "UGC J4278+28",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "6598.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-455",
    "name": "Abell J4285+41",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "6612.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 35 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-456",
    "name": "ESO BH-3292",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "6627.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "79700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-457",
    "name": "Vela 3499",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "6641.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "107 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-458",
    "name": "Centaurus 3306 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "6656.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-459",
    "name": "Cygnus-3313 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "6670.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,693 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-460",
    "name": "Kepler-3320 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "6685.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 660 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-461",
    "name": "TOI-3327 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "6699.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-462",
    "name": "K2-3334 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "6714.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-463",
    "name": "WASP-3341 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "6728.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-464",
    "name": "HD J4348+69",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "6743.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-465",
    "name": "TRAPPIST-1 J4355+82",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "6757.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 205 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-466",
    "name": "Gliese BH-3362",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "6772.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-467",
    "name": "LHS 3569",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "6786.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "117 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-468",
    "name": "CoRoT 3376 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "6801.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-469",
    "name": "OGLE-3383 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "6815.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "463 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-470",
    "name": "PSR-3390 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "6830.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 670 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-471",
    "name": "SGR-3397 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "6844.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-472",
    "name": "NGC-3404 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "6859.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-473",
    "name": "IC-3411 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "6873.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-474",
    "name": "UGC J4418+21",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "6888.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-475",
    "name": "Abell J4425+34",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "6902.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 375 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-476",
    "name": "ESO BH-3432",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "6917.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "6700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-477",
    "name": "Vela 3639",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "6931.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "127 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-478",
    "name": "Centaurus 3446 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "6946.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-479",
    "name": "Cygnus-3453 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "6960.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "733 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-480",
    "name": "Kepler-3460 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "6975.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 680 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-481",
    "name": "TOI-3467 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "6989.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-482",
    "name": "K2-3474 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "7004.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-483",
    "name": "WASP-3481 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "7018.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-484",
    "name": "HD J4488+62",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "7033.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-485",
    "name": "TRAPPIST-1 J4495+75",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "7047.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 545 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-486",
    "name": "Gliese BH-3502",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "7062.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-487",
    "name": "LHS 3709",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "7076.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "137 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-488",
    "name": "CoRoT 3516 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "7091.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-489",
    "name": "OGLE-3523 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "7105.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,003 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-490",
    "name": "PSR-3530 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "7120.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 690 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-491",
    "name": "SGR-3537 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "7134.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-492",
    "name": "NGC-3544 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "7149.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-493",
    "name": "IC-3551 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "7163.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-494",
    "name": "UGC J4558+14",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "7178.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-495",
    "name": "Abell J4565+27",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "7192.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 15 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-496",
    "name": "ESO BH-3572",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "7207.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "13700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-497",
    "name": "Vela 3779",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "7221.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "147 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-498",
    "name": "Centaurus 3586 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "7236.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-499",
    "name": "Cygnus-3593 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "7250.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,273 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-500",
    "name": "Kepler-3600 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "7265.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 700 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-501",
    "name": "TOI-3607 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "7279.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-502",
    "name": "K2-3614 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "7294.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-503",
    "name": "WASP-3621 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "7308.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-504",
    "name": "HD J4628+55",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "7323.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-505",
    "name": "TRAPPIST-1 J4635+68",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "7337.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 185 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-506",
    "name": "Gliese BH-3642",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "7352.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "17200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-507",
    "name": "LHS 3849",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "7366.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "157 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-508",
    "name": "CoRoT 3656 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "7381.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-509",
    "name": "OGLE-3663 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "7395.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,543 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-510",
    "name": "PSR-3670 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "7410.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 710 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-511",
    "name": "SGR-3677 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "7424.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-512",
    "name": "NGC-3684 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "7439.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-513",
    "name": "IC-3691 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "7453.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-514",
    "name": "UGC J4698+7",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "7468.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-515",
    "name": "Abell J4705+20",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "7482.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 355 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-516",
    "name": "ESO BH-3712",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "7497.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-517",
    "name": "Vela 3919",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "7511.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "167 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-518",
    "name": "Centaurus 3726 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "7526.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-519",
    "name": "Cygnus-3733 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "7540.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,813 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-520",
    "name": "Kepler-3740 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "7555.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 720 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-521",
    "name": "TOI-3747 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "7569.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-522",
    "name": "K2-3754 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "7584.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-523",
    "name": "WASP-3761 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "7598.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-524",
    "name": "HD J4768+48",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "7613.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-525",
    "name": "TRAPPIST-1 J4775+61",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "7627.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 525 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-526",
    "name": "Gliese BH-3782",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "7642.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "24200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-527",
    "name": "LHS 3989",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "7656.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "177 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-528",
    "name": "CoRoT 3796 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "7671.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-529",
    "name": "OGLE-3803 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "7685.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,083 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-530",
    "name": "PSR-3810 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "7700.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 730 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-531",
    "name": "SGR-3817 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "7714.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-532",
    "name": "NGC-3824 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "7729.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-533",
    "name": "IC-3831 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "7743.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-534",
    "name": "UGC J4838+0",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "7758.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-535",
    "name": "Abell J4845+13",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "7772.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 695 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-536",
    "name": "ESO BH-3852",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "7787.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "27700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-537",
    "name": "Vela 4059",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "7801.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "187 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-538",
    "name": "Centaurus 3866 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "7816.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-539",
    "name": "Cygnus-3873 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "7830.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,353 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-540",
    "name": "Kepler-3880 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "7845.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 740 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-541",
    "name": "TOI-3887 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "7859.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-542",
    "name": "K2-3894 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "7874.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-543",
    "name": "WASP-3901 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "7888.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-544",
    "name": "HD J4908+41",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "7903.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-545",
    "name": "TRAPPIST-1 J4915+54",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "7917.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 165 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-546",
    "name": "Gliese BH-3922",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "7932.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "31200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-547",
    "name": "LHS 4129",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "7946.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "197 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-548",
    "name": "CoRoT 3936 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "7961.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-549",
    "name": "OGLE-3943 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "7975.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,623 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-550",
    "name": "PSR-3950 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "7990.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 750 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-551",
    "name": "SGR-3957 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "8004.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-552",
    "name": "NGC-3964 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "8019.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-553",
    "name": "IC-3971 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "8033.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-554",
    "name": "UGC J4978+82",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "8048.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-555",
    "name": "Abell J4985+6",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "8062.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 335 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-556",
    "name": "ESO BH-3992",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "8077.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "34700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-557",
    "name": "Vela 4199",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "8091.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "207 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-558",
    "name": "Centaurus 4006 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "8106.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-559",
    "name": "Cygnus-4013 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "8120.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "393 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-560",
    "name": "Kepler-4020 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "8135.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 760 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-561",
    "name": "TOI-4027 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "8149.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-562",
    "name": "K2-4034 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "8164.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-563",
    "name": "WASP-4041 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "8178.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-564",
    "name": "HD J5048+34",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "8193.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-565",
    "name": "TRAPPIST-1 J5055+47",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "8207.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 505 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-566",
    "name": "Gliese BH-4062",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "8222.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "38200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-567",
    "name": "LHS 4269",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "8236.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "217 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-568",
    "name": "CoRoT 4076 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "8251.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-569",
    "name": "OGLE-4083 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "8265.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "663 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-570",
    "name": "PSR-4090 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "8280.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 770 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-571",
    "name": "SGR-4097 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "8294.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-572",
    "name": "NGC-4104 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "8309.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-573",
    "name": "IC-4111 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "8323.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-574",
    "name": "UGC J5118+75",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "8338.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-575",
    "name": "Abell J5125+88",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "8352.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 675 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-576",
    "name": "ESO BH-4132",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "8367.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "41700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-577",
    "name": "Vela 4339",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "8381.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "227 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-578",
    "name": "Centaurus 4146 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "8396.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-579",
    "name": "Cygnus-4153 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "8410.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "933 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-580",
    "name": "Kepler-4160 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "8425.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 780 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-581",
    "name": "TOI-4167 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "8439.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-582",
    "name": "K2-4174 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "8454.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-583",
    "name": "WASP-4181 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "8468.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-584",
    "name": "HD J5188+27",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "8483.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-585",
    "name": "TRAPPIST-1 J5195+40",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "8497.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 145 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-586",
    "name": "Gliese BH-4202",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "8512.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-587",
    "name": "LHS 4409",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "8526.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "237 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-588",
    "name": "CoRoT 4216 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "8541.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-589",
    "name": "OGLE-4223 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "8555.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,203 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-590",
    "name": "PSR-4230 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "8570.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 790 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-591",
    "name": "SGR-4237 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "8584.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-592",
    "name": "NGC-4244 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "8599.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-593",
    "name": "IC-4251 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "8613.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-594",
    "name": "UGC J5258+68",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "8628.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-595",
    "name": "Abell J5265+81",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "8642.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 315 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-596",
    "name": "ESO BH-4272",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "8657.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "48700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-597",
    "name": "Vela 4479",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "8671.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "247 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-598",
    "name": "Centaurus 4286 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "8686.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-599",
    "name": "Cygnus-4293 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "8700.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,473 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-600",
    "name": "Kepler-4300 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "8715.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 800 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-601",
    "name": "TOI-4307 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "8729.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-602",
    "name": "K2-4314 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "8744.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-603",
    "name": "WASP-4321 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "8758.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-604",
    "name": "HD J5328+20",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "8773.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-605",
    "name": "TRAPPIST-1 J5335+33",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "8787.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 485 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-606",
    "name": "Gliese BH-4342",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "8802.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "52200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-607",
    "name": "LHS 4549",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "8816.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-608",
    "name": "CoRoT 4356 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "8831.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-609",
    "name": "OGLE-4363 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "8845.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,743 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-610",
    "name": "PSR-4370 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "8860.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 810 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-611",
    "name": "SGR-4377 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "8874.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-612",
    "name": "NGC-4384 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "8889.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-613",
    "name": "IC-4391 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "8903.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-614",
    "name": "UGC J5398+61",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "8918.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-615",
    "name": "Abell J5405+74",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "8932.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 655 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-616",
    "name": "ESO BH-4412",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "8947.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "55700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-617",
    "name": "Vela 4619",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "8961.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-618",
    "name": "Centaurus 4426 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "8976.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-619",
    "name": "Cygnus-4433 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "8990.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,013 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-620",
    "name": "Kepler-4440 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "9005.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 820 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-621",
    "name": "TOI-4447 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "9019.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-622",
    "name": "K2-4454 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "9034.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-623",
    "name": "WASP-4461 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "9048.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-624",
    "name": "HD J5468+13",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "9063.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-625",
    "name": "TRAPPIST-1 J5475+26",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "9077.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 125 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-626",
    "name": "Gliese BH-4482",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "9092.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "59200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-627",
    "name": "LHS 4689",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "9106.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-628",
    "name": "CoRoT 4496 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "9121.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-629",
    "name": "OGLE-4503 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "9135.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,283 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-630",
    "name": "PSR-4510 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "9150.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 830 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-631",
    "name": "SGR-4517 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "9164.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-632",
    "name": "NGC-4524 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "9179.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-633",
    "name": "IC-4531 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "9193.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-634",
    "name": "UGC J5538+54",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "9208.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-635",
    "name": "Abell J5545+67",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "9222.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 295 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-636",
    "name": "ESO BH-4552",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "9237.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "62700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-637",
    "name": "Vela 4759",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "9251.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "87 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-638",
    "name": "Centaurus 4566 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "9266.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-639",
    "name": "Cygnus-4573 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "9280.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,553 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-640",
    "name": "Kepler-4580 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "9295.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 840 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-641",
    "name": "TOI-4587 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "9309.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-642",
    "name": "K2-4594 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "9324.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-643",
    "name": "WASP-4601 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "9338.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-644",
    "name": "HD J5608+6",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "9353.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-645",
    "name": "TRAPPIST-1 J5615+19",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "9367.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 465 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-646",
    "name": "Gliese BH-4622",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "9382.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "66200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-647",
    "name": "LHS 4829",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "9396.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "97 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-648",
    "name": "CoRoT 4636 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "9411.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-649",
    "name": "OGLE-4643 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "9425.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "323 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-650",
    "name": "PSR-4650 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "9440.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 850 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-651",
    "name": "SGR-4657 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "9454.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-652",
    "name": "NGC-4664 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "9469.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-653",
    "name": "IC-4671 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "9483.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-654",
    "name": "UGC J5678+47",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "9498.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-655",
    "name": "Abell J5685+60",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "9512.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 635 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-656",
    "name": "ESO BH-4692",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "9527.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "69700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-657",
    "name": "Vela 4899",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "9541.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "107 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-658",
    "name": "Centaurus 4706 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "9556.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-659",
    "name": "Cygnus-4713 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "9570.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "593 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-660",
    "name": "Kepler-4720 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "9585.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 860 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-661",
    "name": "TOI-4727 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "9599.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-662",
    "name": "K2-4734 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "9614.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-663",
    "name": "WASP-4741 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "9628.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-664",
    "name": "HD J5748+88",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "9643.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-665",
    "name": "TRAPPIST-1 J5755+12",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "9657.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 105 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-666",
    "name": "Gliese BH-4762",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "9672.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "73200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-667",
    "name": "LHS 4969",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "9686.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "117 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-668",
    "name": "CoRoT 4776 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "9701.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-669",
    "name": "OGLE-4783 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "9715.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "863 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-670",
    "name": "PSR-4790 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "9730.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 870 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-671",
    "name": "SGR-4797 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "9744.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-672",
    "name": "NGC-4804 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "9759.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-673",
    "name": "IC-4811 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "9773.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-674",
    "name": "UGC J5818+40",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "9788.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-675",
    "name": "Abell J5825+53",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "9802.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 275 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-676",
    "name": "ESO BH-4832",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "9817.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "76700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-677",
    "name": "Vela 5039",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "9831.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "127 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-678",
    "name": "Centaurus 4846 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "9846.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-679",
    "name": "Cygnus-4853 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "9860.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,133 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-680",
    "name": "Kepler-4860 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "9875.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 880 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-681",
    "name": "TOI-4867 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "9889.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-682",
    "name": "K2-4874 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "9904.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-683",
    "name": "WASP-4881 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "9918.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-684",
    "name": "HD J5888+81",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "9933.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-685",
    "name": "TRAPPIST-1 J5895+5",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "9947.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 445 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-686",
    "name": "Gliese BH-4902",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "9962.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-687",
    "name": "LHS 5109",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "9976.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "137 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-688",
    "name": "CoRoT 4916 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "9991.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-689",
    "name": "OGLE-4923 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "10005.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,403 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-690",
    "name": "PSR-4930 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "10020.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 890 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-691",
    "name": "SGR-4937 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "10034.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-692",
    "name": "NGC-4944 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "10049.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-693",
    "name": "IC-4951 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "10063.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-694",
    "name": "UGC J5958+33",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "10078.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-695",
    "name": "Abell J5965+46",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "10092.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 615 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-696",
    "name": "ESO BH-4972",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "10107.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-697",
    "name": "Vela 5179",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "10121.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "147 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-698",
    "name": "Centaurus 4986 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "10136.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-699",
    "name": "Cygnus-4993 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "10150.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,673 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-700",
    "name": "Kepler-5000 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "10165.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 900 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-701",
    "name": "TOI-5007 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "10179.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-702",
    "name": "K2-5014 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "10194.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-703",
    "name": "WASP-5021 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "10208.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-704",
    "name": "HD J6028+74",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "10223.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-705",
    "name": "TRAPPIST-1 J6035+87",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "10237.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 85 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-706",
    "name": "Gliese BH-5042",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "10252.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "7200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-707",
    "name": "LHS 5249",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "10266.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "157 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-708",
    "name": "CoRoT 5056 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "10281.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-709",
    "name": "OGLE-5063 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "10295.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,943 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-710",
    "name": "PSR-5070 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "10310.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 910 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-711",
    "name": "SGR-5077 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "10324.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-712",
    "name": "NGC-5084 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "10339.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-713",
    "name": "IC-5091 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "10353.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-714",
    "name": "UGC J6098+26",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "10368.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-715",
    "name": "Abell J6105+39",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "10382.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 255 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-716",
    "name": "ESO BH-5112",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "10397.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-717",
    "name": "Vela 5319",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "10411.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "167 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-718",
    "name": "Centaurus 5126 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "10426.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-719",
    "name": "Cygnus-5133 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "10440.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,213 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-720",
    "name": "Kepler-5140 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "10455.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 920 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-721",
    "name": "TOI-5147 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "10469.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-722",
    "name": "K2-5154 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "10484.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-723",
    "name": "WASP-5161 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "10498.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-724",
    "name": "HD J6168+67",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "10513.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-725",
    "name": "TRAPPIST-1 J6175+80",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "10527.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 425 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-726",
    "name": "Gliese BH-5182",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "10542.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "14200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-727",
    "name": "LHS 5389",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "10556.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "177 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-728",
    "name": "CoRoT 5196 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "10571.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-729",
    "name": "OGLE-5203 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "10585.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,483 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-730",
    "name": "PSR-5210 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "10600.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 930 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-731",
    "name": "SGR-5217 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "10614.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-732",
    "name": "NGC-5224 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "10629.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-733",
    "name": "IC-5231 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "10643.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-734",
    "name": "UGC J6238+19",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "10658.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-735",
    "name": "Abell J6245+32",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "10672.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 595 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-736",
    "name": "ESO BH-5252",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "10687.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "17700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-737",
    "name": "Vela 5459",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "10701.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "187 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-738",
    "name": "Centaurus 5266 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "10716.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-739",
    "name": "Cygnus-5273 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "10730.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,753 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-740",
    "name": "Kepler-5280 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "10745.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 940 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-741",
    "name": "TOI-5287 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "10759.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-742",
    "name": "K2-5294 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "10774.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-743",
    "name": "WASP-5301 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "10788.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-744",
    "name": "HD J6308+60",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "10803.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-745",
    "name": "TRAPPIST-1 J6315+73",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "10817.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 65 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-746",
    "name": "Gliese BH-5322",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "10832.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "21200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-747",
    "name": "LHS 5529",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "10846.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "197 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-748",
    "name": "CoRoT 5336 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "10861.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-749",
    "name": "OGLE-5343 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "10875.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "523 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-750",
    "name": "PSR-5350 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "10890.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 950 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-751",
    "name": "SGR-5357 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "10904.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-752",
    "name": "NGC-5364 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "10919.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-753",
    "name": "IC-5371 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "10933.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-754",
    "name": "UGC J6378+12",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "10948.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-755",
    "name": "Abell J6385+25",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "10962.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 235 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-756",
    "name": "ESO BH-5392",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "10977.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "24700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-757",
    "name": "Vela 5599",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "10991.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "207 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-758",
    "name": "Centaurus 5406 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "11006.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-759",
    "name": "Cygnus-5413 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "11020.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "793 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-760",
    "name": "Kepler-5420 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "11035.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 960 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-761",
    "name": "TOI-5427 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "11049.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-762",
    "name": "K2-5434 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "11064.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-763",
    "name": "WASP-5441 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "11078.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-764",
    "name": "HD J6448+53",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "11093.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-765",
    "name": "TRAPPIST-1 J6455+66",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "11107.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 405 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-766",
    "name": "Gliese BH-5462",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "11122.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "28200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-767",
    "name": "LHS 5669",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "11136.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "217 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-768",
    "name": "CoRoT 5476 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "11151.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-769",
    "name": "OGLE-5483 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "11165.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,063 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-770",
    "name": "PSR-5490 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "11180.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 970 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-771",
    "name": "SGR-5497 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "11194.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-772",
    "name": "NGC-5504 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "11209.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-773",
    "name": "IC-5511 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "11223.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-774",
    "name": "UGC J6518+5",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "11238.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-775",
    "name": "Abell J6525+18",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "11252.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 575 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-776",
    "name": "ESO BH-5532",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "11267.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "31700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-777",
    "name": "Vela 5739",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "11281.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "227 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-778",
    "name": "Centaurus 5546 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "11296.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-779",
    "name": "Cygnus-5553 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "11310.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,333 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-780",
    "name": "Kepler-5560 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "11325.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 980 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-781",
    "name": "TOI-5567 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "11339.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-782",
    "name": "K2-5574 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "11354.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-783",
    "name": "WASP-5581 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "11368.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-784",
    "name": "HD J6588+46",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "11383.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-785",
    "name": "TRAPPIST-1 J6595+59",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "11397.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 45 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-786",
    "name": "Gliese BH-5602",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "11412.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-787",
    "name": "LHS 5809",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "11426.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "237 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-788",
    "name": "CoRoT 5616 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "11441.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-789",
    "name": "OGLE-5623 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "11455.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,603 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-790",
    "name": "PSR-5630 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "11470.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 990 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-791",
    "name": "SGR-5637 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "11484.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-792",
    "name": "NGC-5644 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "11499.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-793",
    "name": "IC-5651 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "11513.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-794",
    "name": "UGC J6658+87",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "11528.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-795",
    "name": "Abell J6665+11",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "11542.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 215 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-796",
    "name": "ESO BH-5672",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "11557.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "38700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-797",
    "name": "Vela 5879",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "11571.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "247 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-798",
    "name": "Centaurus 5686 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "11586.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-799",
    "name": "Cygnus-5693 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "11600.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,873 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-800",
    "name": "Kepler-5700 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "11615.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 200 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-801",
    "name": "TOI-5707 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "11629.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-802",
    "name": "K2-5714 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "11644.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-803",
    "name": "WASP-5721 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "11658.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-804",
    "name": "HD J6728+39",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "11673.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-805",
    "name": "TRAPPIST-1 J6735+52",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "11687.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 385 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-806",
    "name": "Gliese BH-5742",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "11702.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "42200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-807",
    "name": "LHS 5949",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "11716.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-808",
    "name": "CoRoT 5756 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "11731.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-809",
    "name": "OGLE-5763 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "11745.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,143 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-810",
    "name": "PSR-5770 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "11760.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 210 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-811",
    "name": "SGR-5777 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "11774.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-812",
    "name": "NGC-5784 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "11789.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-813",
    "name": "IC-5791 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "11803.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-814",
    "name": "UGC J6798+80",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "11818.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-815",
    "name": "Abell J6805+4",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "11832.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 555 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-816",
    "name": "ESO BH-5812",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "11847.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-817",
    "name": "Vela 6019",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "11861.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-818",
    "name": "Centaurus 5826 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "11876.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-819",
    "name": "Cygnus-5833 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "11890.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,413 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-820",
    "name": "Kepler-5840 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "11905.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 220 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-821",
    "name": "TOI-5847 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "11919.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-822",
    "name": "K2-5854 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "11934.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-823",
    "name": "WASP-5861 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "11948.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-824",
    "name": "HD J6868+32",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "11963.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-825",
    "name": "TRAPPIST-1 J6875+45",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "11977.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 25 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-826",
    "name": "Gliese BH-5882",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "11992.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "49200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-827",
    "name": "LHS 6089",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "12006.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-828",
    "name": "CoRoT 5896 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "12021.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-829",
    "name": "OGLE-5903 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "12035.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,683 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-830",
    "name": "PSR-5910 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "12050.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 230 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-831",
    "name": "SGR-5917 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "12064.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-832",
    "name": "NGC-5924 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "12079.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-833",
    "name": "IC-5931 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "12093.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-834",
    "name": "UGC J6938+73",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "12108.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-835",
    "name": "Abell J6945+86",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "12122.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 195 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-836",
    "name": "ESO BH-5952",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "12137.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "52700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-837",
    "name": "Vela 6159",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "12151.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "87 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-838",
    "name": "Centaurus 5966 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "12166.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-839",
    "name": "Cygnus-5973 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "12180.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "453 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-840",
    "name": "Kepler-5980 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "12195.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 240 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-841",
    "name": "TOI-5987 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "12209.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-842",
    "name": "K2-5994 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "12224.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-843",
    "name": "WASP-6001 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "12238.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-844",
    "name": "HD J7008+25",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "12253.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-845",
    "name": "TRAPPIST-1 J7015+38",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "12267.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 365 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-846",
    "name": "Gliese BH-6022",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "12282.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "56200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-847",
    "name": "LHS 6229",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "12296.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "97 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-848",
    "name": "CoRoT 6036 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "12311.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-849",
    "name": "OGLE-6043 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "12325.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "723 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-850",
    "name": "PSR-6050 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "12340.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 250 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-851",
    "name": "SGR-6057 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "12354.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-852",
    "name": "NGC-6064 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "12369.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-853",
    "name": "IC-6071 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "12383.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-854",
    "name": "UGC J7078+66",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "12398.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-855",
    "name": "Abell J7085+79",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "12412.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 535 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-856",
    "name": "ESO BH-6092",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "12427.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "59700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-857",
    "name": "Vela 6299",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "12441.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "107 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-858",
    "name": "Centaurus 6106 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "12456.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-859",
    "name": "Cygnus-6113 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "12470.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "993 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-860",
    "name": "Kepler-6120 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "12485.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 260 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-861",
    "name": "TOI-6127 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "12499.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-862",
    "name": "K2-6134 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "12514.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-863",
    "name": "WASP-6141 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "12528.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-864",
    "name": "HD J7148+18",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "12543.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-865",
    "name": "TRAPPIST-1 J7155+31",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "12557.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 5 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-866",
    "name": "Gliese BH-6162",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "12572.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "63200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-867",
    "name": "LHS 6369",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "12586.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "117 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-868",
    "name": "CoRoT 6176 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "12601.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-869",
    "name": "OGLE-6183 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "12615.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,263 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-870",
    "name": "PSR-6190 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "12630.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 270 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-871",
    "name": "SGR-6197 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "12644.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-872",
    "name": "NGC-6204 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "12659.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-873",
    "name": "IC-6211 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "12673.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-874",
    "name": "UGC J7218+59",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "12688.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-875",
    "name": "Abell J7225+72",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "12702.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 175 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-876",
    "name": "ESO BH-6232",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "12717.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "66700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-877",
    "name": "Vela 6439",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "12731.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "127 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-878",
    "name": "Centaurus 6246 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "12746.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-879",
    "name": "Cygnus-6253 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "12760.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,533 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-880",
    "name": "Kepler-6260 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "12775.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 280 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-881",
    "name": "TOI-6267 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "12789.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-882",
    "name": "K2-6274 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "12804.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-883",
    "name": "WASP-6281 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "12818.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-884",
    "name": "HD J7288+11",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "12833.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-885",
    "name": "TRAPPIST-1 J7295+24",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "12847.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 345 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-886",
    "name": "Gliese BH-6302",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "12862.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "70200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-887",
    "name": "LHS 6509",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "12876.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "137 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-888",
    "name": "CoRoT 6316 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "12891.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-889",
    "name": "OGLE-6323 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "12905.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,803 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-890",
    "name": "PSR-6330 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "12920.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 290 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-891",
    "name": "SGR-6337 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "12934.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-892",
    "name": "NGC-6344 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "12949.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-893",
    "name": "IC-6351 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "12963.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-894",
    "name": "UGC J7358+52",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "12978.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-895",
    "name": "Abell J7365+65",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "12992.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 515 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-896",
    "name": "ESO BH-6372",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "13007.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "73700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-897",
    "name": "Vela 6579",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "13021.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "147 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-898",
    "name": "Centaurus 6386 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "13036.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-899",
    "name": "Cygnus-6393 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "13050.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,073 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-900",
    "name": "Kepler-6400 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "13065.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 300 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-901",
    "name": "TOI-6407 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "13079.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-902",
    "name": "K2-6414 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "13094.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-903",
    "name": "WASP-6421 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "13108.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-904",
    "name": "HD J7428+4",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "13123.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-905",
    "name": "TRAPPIST-1 J7435+17",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "13137.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 685 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-906",
    "name": "Gliese BH-6442",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "13152.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-907",
    "name": "LHS 6649",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "13166.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "157 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-908",
    "name": "CoRoT 6456 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "13181.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-909",
    "name": "OGLE-6463 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "13195.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,343 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-910",
    "name": "PSR-6470 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "13210.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 310 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-911",
    "name": "SGR-6477 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "13224.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-912",
    "name": "NGC-6484 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "13239.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-913",
    "name": "IC-6491 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "13253.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-914",
    "name": "UGC J7498+45",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "13268.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-915",
    "name": "Abell J7505+58",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "13282.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 155 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-916",
    "name": "ESO BH-6512",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "13297.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-917",
    "name": "Vela 6719",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "13311.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "167 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-918",
    "name": "Centaurus 6526 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "13326.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-919",
    "name": "Cygnus-6533 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "13340.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,613 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-920",
    "name": "Kepler-6540 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "13355.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 320 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-921",
    "name": "TOI-6547 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "13369.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-922",
    "name": "K2-6554 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "13384.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-923",
    "name": "WASP-6561 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "13398.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-924",
    "name": "HD J7568+86",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "13413.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-925",
    "name": "TRAPPIST-1 J7575+10",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "13427.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 325 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-926",
    "name": "Gliese BH-6582",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "13442.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "4200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-927",
    "name": "LHS 6789",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "13456.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "177 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-928",
    "name": "CoRoT 6596 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "13471.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-929",
    "name": "OGLE-6603 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "13485.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "383 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-930",
    "name": "PSR-6610 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "13500.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 330 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-931",
    "name": "SGR-6617 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "13514.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-932",
    "name": "NGC-6624 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "13529.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-933",
    "name": "IC-6631 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "13543.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-934",
    "name": "UGC J7638+38",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "13558.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-935",
    "name": "Abell J7645+51",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "13572.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 495 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-936",
    "name": "ESO BH-6652",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "13587.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "7700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-937",
    "name": "Vela 6859",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "13601.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "187 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-938",
    "name": "Centaurus 6666 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "13616.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-939",
    "name": "Cygnus-6673 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "13630.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "653 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-940",
    "name": "Kepler-6680 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "13645.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 340 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-941",
    "name": "TOI-6687 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "13659.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-942",
    "name": "K2-6694 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "13674.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-943",
    "name": "WASP-6701 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "13688.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-944",
    "name": "HD J7708+79",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "13703.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-945",
    "name": "TRAPPIST-1 J7715+3",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "13717.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 665 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-946",
    "name": "Gliese BH-6722",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "13732.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "11200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-947",
    "name": "LHS 6929",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "13746.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "197 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-948",
    "name": "CoRoT 6736 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "13761.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-949",
    "name": "OGLE-6743 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "13775.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "923 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-950",
    "name": "PSR-6750 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "13790.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 350 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-951",
    "name": "SGR-6757 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "13804.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-952",
    "name": "NGC-6764 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "13819.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-953",
    "name": "IC-6771 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "13833.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-954",
    "name": "UGC J7778+31",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "13848.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-955",
    "name": "Abell J7785+44",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "13862.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 135 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-956",
    "name": "ESO BH-6792",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "13877.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "14700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-957",
    "name": "Vela 6999",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "13891.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "207 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-958",
    "name": "Centaurus 6806 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "13906.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-959",
    "name": "Cygnus-6813 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "13920.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,193 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-960",
    "name": "Kepler-6820 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "13935.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 360 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-961",
    "name": "TOI-6827 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "13949.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-962",
    "name": "K2-6834 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "13964.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-963",
    "name": "WASP-6841 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "13978.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-964",
    "name": "HD J7848+72",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "13993.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-965",
    "name": "TRAPPIST-1 J7855+85",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "14007.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 305 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-966",
    "name": "Gliese BH-6862",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "14022.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "18200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-967",
    "name": "LHS 7069",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "14036.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "217 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-968",
    "name": "CoRoT 6876 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "14051.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-969",
    "name": "OGLE-6883 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "14065.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,463 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-970",
    "name": "PSR-6890 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "14080.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 370 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-971",
    "name": "SGR-6897 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "14094.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-972",
    "name": "NGC-6904 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "14109.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-973",
    "name": "IC-6911 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "14123.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-974",
    "name": "UGC J7918+24",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "14138.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-975",
    "name": "Abell J7925+37",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "14152.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 475 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-976",
    "name": "ESO BH-6932",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "14167.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "21700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-977",
    "name": "Vela 7139",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "14181.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "227 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-978",
    "name": "Centaurus 6946 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "14196.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-979",
    "name": "Cygnus-6953 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "14210.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,733 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-980",
    "name": "Kepler-6960 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "14225.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 380 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-981",
    "name": "TOI-6967 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "14239.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-982",
    "name": "K2-6974 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "14254.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-983",
    "name": "WASP-6981 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "14268.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-984",
    "name": "HD J7988+65",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "14283.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-985",
    "name": "TRAPPIST-1 J7995+78",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "14297.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 645 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-986",
    "name": "Gliese BH-7002",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "14312.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-987",
    "name": "LHS 7209",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "14326.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "237 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-988",
    "name": "CoRoT 7016 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "14341.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-989",
    "name": "OGLE-7023 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "14355.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,003 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-990",
    "name": "PSR-7030 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "14370.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 390 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-991",
    "name": "SGR-7037 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "14384.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-992",
    "name": "NGC-7044 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "14399.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-993",
    "name": "IC-7051 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "14413.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-994",
    "name": "UGC J8058+17",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "14428.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-995",
    "name": "Abell J8065+30",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "14442.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 115 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-996",
    "name": "ESO BH-7072",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "14457.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "28700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-997",
    "name": "Vela 7279",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "14471.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "247 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-998",
    "name": "Centaurus 7086 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "14486.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-999",
    "name": "Cygnus-7093 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "14500.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,273 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1000",
    "name": "Kepler-7100 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "14515.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 400 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1001",
    "name": "TOI-7107 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "14529.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1002",
    "name": "K2-7114 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "14544.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1003",
    "name": "WASP-7121 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "14558.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1004",
    "name": "HD J8128+58",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "14573.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1005",
    "name": "TRAPPIST-1 J8135+71",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "14587.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 285 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1006",
    "name": "Gliese BH-7142",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "14602.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "32200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1007",
    "name": "LHS 7349",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "14616.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1008",
    "name": "CoRoT 7156 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "14631.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1009",
    "name": "OGLE-7163 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "14645.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,543 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1010",
    "name": "PSR-7170 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "14660.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 410 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1011",
    "name": "SGR-7177 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "14674.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1012",
    "name": "NGC-7184 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "14689.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1013",
    "name": "IC-7191 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "14703.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1014",
    "name": "UGC J8198+10",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "14718.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1015",
    "name": "Abell J8205+23",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "14732.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 455 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1016",
    "name": "ESO BH-7212",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "14747.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1017",
    "name": "Vela 7419",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "14761.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1018",
    "name": "Centaurus 7226 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "14776.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1019",
    "name": "Cygnus-7233 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "14790.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "313 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1020",
    "name": "Kepler-7240 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "14805.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 420 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1021",
    "name": "TOI-7247 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "14819.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1022",
    "name": "K2-7254 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "14834.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1023",
    "name": "WASP-7261 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "14848.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1024",
    "name": "HD J8268+51",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "14863.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1025",
    "name": "TRAPPIST-1 J8275+64",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "14877.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 625 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1026",
    "name": "Gliese BH-7282",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "14892.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "39200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1027",
    "name": "LHS 7489",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "14906.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1028",
    "name": "CoRoT 7296 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "14921.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1029",
    "name": "OGLE-7303 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "14935.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "583 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1030",
    "name": "PSR-7310 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "14950.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 430 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1031",
    "name": "SGR-7317 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "14964.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1032",
    "name": "NGC-7324 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "14979.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1033",
    "name": "IC-7331 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "14993.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1034",
    "name": "UGC J8338+3",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "15008.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1035",
    "name": "Abell J8345+16",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "15022.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 95 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1036",
    "name": "ESO BH-7352",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "15037.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "42700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1037",
    "name": "Vela 7559",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "15051.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "87 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1038",
    "name": "Centaurus 7366 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "15066.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1039",
    "name": "Cygnus-7373 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "15080.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "853 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1040",
    "name": "Kepler-7380 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "15095.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 440 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1041",
    "name": "TOI-7387 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "15109.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1042",
    "name": "K2-7394 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "15124.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1043",
    "name": "WASP-7401 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "15138.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1044",
    "name": "HD J8408+44",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "15153.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1045",
    "name": "TRAPPIST-1 J8415+57",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "15167.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 265 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1046",
    "name": "Gliese BH-7422",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "15182.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "46200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1047",
    "name": "LHS 7629",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "15196.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "97 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1048",
    "name": "CoRoT 7436 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "15211.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1049",
    "name": "OGLE-7443 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "15225.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,123 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1050",
    "name": "PSR-7450 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "15240.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 450 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1051",
    "name": "SGR-7457 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "15254.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1052",
    "name": "NGC-7464 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "15269.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1053",
    "name": "IC-7471 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "15283.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1054",
    "name": "UGC J8478+85",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "15298.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1055",
    "name": "Abell J8485+9",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "15312.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 435 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1056",
    "name": "ESO BH-7492",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "15327.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "49700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1057",
    "name": "Vela 7699",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "15341.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "107 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1058",
    "name": "Centaurus 7506 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "15356.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1059",
    "name": "Cygnus-7513 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "15370.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,393 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1060",
    "name": "Kepler-7520 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "15385.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 460 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1061",
    "name": "TOI-7527 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "15399.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1062",
    "name": "K2-7534 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "15414.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1063",
    "name": "WASP-7541 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "15428.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1064",
    "name": "HD J8548+37",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "15443.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1065",
    "name": "TRAPPIST-1 J8555+50",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "15457.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 605 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1066",
    "name": "Gliese BH-7562",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "15472.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "53200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1067",
    "name": "LHS 7769",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "15486.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "117 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1068",
    "name": "CoRoT 7576 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "15501.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1069",
    "name": "OGLE-7583 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "15515.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,663 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1070",
    "name": "PSR-7590 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "15530.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 470 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1071",
    "name": "SGR-7597 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "15544.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1072",
    "name": "NGC-7604 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "15559.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1073",
    "name": "IC-7611 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "15573.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1074",
    "name": "UGC J8618+78",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "15588.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1075",
    "name": "Abell J8625+2",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "15602.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 75 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1076",
    "name": "ESO BH-7632",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "15617.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "56700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1077",
    "name": "Vela 7839",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "15631.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "127 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1078",
    "name": "Centaurus 7646 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "15646.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1079",
    "name": "Cygnus-7653 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "15660.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,933 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1080",
    "name": "Kepler-7660 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "15675.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 480 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1081",
    "name": "TOI-7667 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "15689.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1082",
    "name": "K2-7674 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "15704.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1083",
    "name": "WASP-7681 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "15718.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1084",
    "name": "HD J8688+30",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "15733.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1085",
    "name": "TRAPPIST-1 J8695+43",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "15747.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 245 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1086",
    "name": "Gliese BH-7702",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "15762.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "60200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1087",
    "name": "LHS 7909",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "15776.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "137 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1088",
    "name": "CoRoT 7716 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "15791.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1089",
    "name": "OGLE-7723 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "15805.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,203 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1090",
    "name": "PSR-7730 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "15820.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 490 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1091",
    "name": "SGR-7737 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "15834.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1092",
    "name": "NGC-7744 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "15849.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1093",
    "name": "IC-7751 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "15863.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1094",
    "name": "UGC J8758+71",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "15878.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1095",
    "name": "Abell J8765+84",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "15892.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 415 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1096",
    "name": "ESO BH-7772",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "15907.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "63700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1097",
    "name": "Vela 7979",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "15921.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "147 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1098",
    "name": "Centaurus 7786 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "15936.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1099",
    "name": "Cygnus-7793 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "15950.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,473 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1100",
    "name": "Kepler-7800 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "15965.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 500 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1101",
    "name": "TOI-7807 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "15979.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1102",
    "name": "K2-7814 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "15994.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1103",
    "name": "WASP-7821 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "16008.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1104",
    "name": "HD J8828+23",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "16023.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1105",
    "name": "TRAPPIST-1 J8835+36",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "16037.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 585 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1106",
    "name": "Gliese BH-7842",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "16052.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1107",
    "name": "LHS 8049",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "16066.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "157 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1108",
    "name": "CoRoT 7856 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "16081.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1109",
    "name": "OGLE-7863 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "16095.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,743 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1110",
    "name": "PSR-7870 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "16110.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 510 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1111",
    "name": "SGR-7877 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "16124.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1112",
    "name": "NGC-7884 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "16139.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1113",
    "name": "IC-7891 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "16153.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1114",
    "name": "UGC J8898+64",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "16168.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1115",
    "name": "Abell J8905+77",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "16182.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 55 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1116",
    "name": "ESO BH-7912",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "16197.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "70700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1117",
    "name": "Vela 8119",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "16211.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "167 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1118",
    "name": "Centaurus 7926 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "16226.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1119",
    "name": "Cygnus-7933 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "16240.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "513 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1120",
    "name": "Kepler-7940 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "16255.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 520 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1121",
    "name": "TOI-7947 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "16269.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1122",
    "name": "K2-7954 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "16284.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1123",
    "name": "WASP-7961 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "16298.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1124",
    "name": "HD J8968+16",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "16313.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1125",
    "name": "TRAPPIST-1 J8975+29",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "16327.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 225 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1126",
    "name": "Gliese BH-7982",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "16342.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "74200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1127",
    "name": "LHS 8189",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "16356.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "177 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1128",
    "name": "CoRoT 7996 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "16371.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1129",
    "name": "OGLE-8003 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "16385.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "783 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1130",
    "name": "PSR-8010 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "16400.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 530 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1131",
    "name": "SGR-8017 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "16414.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1132",
    "name": "NGC-8024 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "16429.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1133",
    "name": "IC-8031 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "16443.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1134",
    "name": "UGC J9038+57",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "16458.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1135",
    "name": "Abell J9045+70",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "16472.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 395 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1136",
    "name": "ESO BH-8052",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "16487.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1137",
    "name": "Vela 8259",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "16501.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "187 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1138",
    "name": "Centaurus 8066 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "16516.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1139",
    "name": "Cygnus-8073 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "16530.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,053 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1140",
    "name": "Kepler-8080 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "16545.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 540 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1141",
    "name": "TOI-8087 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "16559.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1142",
    "name": "K2-8094 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "16574.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1143",
    "name": "WASP-8101 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "16588.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1144",
    "name": "HD J9108+9",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "16603.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1145",
    "name": "TRAPPIST-1 J9115+22",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "16617.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 565 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1146",
    "name": "Gliese BH-8122",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "16632.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1147",
    "name": "LHS 8329",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "16646.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "197 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1148",
    "name": "CoRoT 8136 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "16661.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1149",
    "name": "OGLE-8143 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "16675.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,323 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1150",
    "name": "PSR-8150 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "16690.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 550 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1151",
    "name": "SGR-8157 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "16704.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1152",
    "name": "NGC-8164 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "16719.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1153",
    "name": "IC-8171 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "16733.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1154",
    "name": "UGC J9178+50",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "16748.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1155",
    "name": "Abell J9185+63",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "16762.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 35 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1156",
    "name": "ESO BH-8192",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "16777.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "4700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1157",
    "name": "Vela 8399",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "16791.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "207 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1158",
    "name": "Centaurus 8206 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "16806.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1159",
    "name": "Cygnus-8213 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "16820.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,593 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1160",
    "name": "Kepler-8220 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "16835.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 560 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1161",
    "name": "TOI-8227 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "16849.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1162",
    "name": "K2-8234 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "16864.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1163",
    "name": "WASP-8241 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "16878.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1164",
    "name": "HD J9248+2",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "16893.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1165",
    "name": "TRAPPIST-1 J9255+15",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "16907.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 205 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1166",
    "name": "Gliese BH-8262",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "16922.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "8200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1167",
    "name": "LHS 8469",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "16936.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "217 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1168",
    "name": "CoRoT 8276 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "16951.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1169",
    "name": "OGLE-8283 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "16965.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,863 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1170",
    "name": "PSR-8290 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "16980.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 570 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1171",
    "name": "SGR-8297 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "16994.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1172",
    "name": "NGC-8304 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "17009.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1173",
    "name": "IC-8311 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "17023.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1174",
    "name": "UGC J9318+43",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "17038.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1175",
    "name": "Abell J9325+56",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "17052.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 375 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1176",
    "name": "ESO BH-8332",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "17067.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "11700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1177",
    "name": "Vela 8539",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "17081.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "227 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1178",
    "name": "Centaurus 8346 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "17096.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1179",
    "name": "Cygnus-8353 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "17110.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,133 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1180",
    "name": "Kepler-8360 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "17125.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 580 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1181",
    "name": "TOI-8367 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "17139.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1182",
    "name": "K2-8374 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "17154.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1183",
    "name": "WASP-8381 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "17168.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1184",
    "name": "HD J9388+84",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "17183.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1185",
    "name": "TRAPPIST-1 J9395+8",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "17197.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 545 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1186",
    "name": "Gliese BH-8402",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "17212.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1187",
    "name": "LHS 8609",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "17226.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "237 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1188",
    "name": "CoRoT 8416 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "17241.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1189",
    "name": "OGLE-8423 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "17255.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,403 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1190",
    "name": "PSR-8430 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "17270.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 590 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1191",
    "name": "SGR-8437 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "17284.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1192",
    "name": "NGC-8444 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "17299.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1193",
    "name": "IC-8451 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "17313.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1194",
    "name": "UGC J9458+36",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "17328.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1195",
    "name": "Abell J9465+49",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "17342.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 15 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1196",
    "name": "ESO BH-8472",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "17357.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "18700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1197",
    "name": "Vela 8679",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "17371.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "247 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1198",
    "name": "Centaurus 8486 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "17386.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1199",
    "name": "Cygnus-8493 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "17400.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,673 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1200",
    "name": "Kepler-8500 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "17415.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 600 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1201",
    "name": "TOI-8507 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "17429.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1202",
    "name": "K2-8514 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "17444.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1203",
    "name": "WASP-8521 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "17458.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1204",
    "name": "HD J9528+77",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "17473.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1205",
    "name": "TRAPPIST-1 J9535+1",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "17487.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 185 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1206",
    "name": "Gliese BH-8542",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "17502.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "22200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1207",
    "name": "LHS 8749",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "17516.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1208",
    "name": "CoRoT 8556 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "17531.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1209",
    "name": "OGLE-8563 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "17545.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "443 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1210",
    "name": "PSR-8570 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "17560.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 610 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1211",
    "name": "SGR-8577 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "17574.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1212",
    "name": "NGC-8584 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "17589.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1213",
    "name": "IC-8591 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "17603.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1214",
    "name": "UGC J9598+29",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "17618.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1215",
    "name": "Abell J9605+42",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "17632.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 355 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1216",
    "name": "ESO BH-8612",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "17647.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1217",
    "name": "Vela 8819",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "17661.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1218",
    "name": "Centaurus 8626 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "17676.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1219",
    "name": "Cygnus-8633 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "17690.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "713 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1220",
    "name": "Kepler-8640 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "17705.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 620 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1221",
    "name": "TOI-8647 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "17719.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1222",
    "name": "K2-8654 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "17734.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1223",
    "name": "WASP-8661 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "17748.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1224",
    "name": "HD J9668+70",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "17763.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1225",
    "name": "TRAPPIST-1 J9675+83",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "17777.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 525 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1226",
    "name": "Gliese BH-8682",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "17792.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "29200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1227",
    "name": "LHS 8889",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "17806.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1228",
    "name": "CoRoT 8696 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "17821.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1229",
    "name": "OGLE-8703 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "17835.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "983 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1230",
    "name": "PSR-8710 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "17850.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 630 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1231",
    "name": "SGR-8717 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "17864.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1232",
    "name": "NGC-8724 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "17879.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1233",
    "name": "IC-8731 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "17893.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1234",
    "name": "UGC J9738+22",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "17908.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1235",
    "name": "Abell J9745+35",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "17922.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 695 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1236",
    "name": "ESO BH-8752",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "17937.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "32700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1237",
    "name": "Vela 8959",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "17951.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "87 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1238",
    "name": "Centaurus 8766 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "17966.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1239",
    "name": "Cygnus-8773 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "17980.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,253 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1240",
    "name": "Kepler-8780 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "17995.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 640 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1241",
    "name": "TOI-8787 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "18009.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1242",
    "name": "K2-8794 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "18024.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1243",
    "name": "WASP-8801 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "18038.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1244",
    "name": "HD J9808+63",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "18053.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1245",
    "name": "TRAPPIST-1 J9815+76",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "18067.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 165 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1246",
    "name": "Gliese BH-8822",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "18082.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "36200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1247",
    "name": "LHS 9029",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "18096.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "97 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1248",
    "name": "CoRoT 8836 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "18111.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1249",
    "name": "OGLE-8843 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "18125.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,523 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1250",
    "name": "PSR-8850 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "18140.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 650 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1251",
    "name": "SGR-8857 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "18154.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1252",
    "name": "NGC-8864 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "18169.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1253",
    "name": "IC-8871 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "18183.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1254",
    "name": "UGC J9878+15",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "18198.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1255",
    "name": "Abell J9885+28",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "18212.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 335 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1256",
    "name": "ESO BH-8892",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "18227.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "39700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1257",
    "name": "Vela 9099",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "18241.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "107 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1258",
    "name": "Centaurus 8906 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "18256.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1259",
    "name": "Cygnus-8913 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "18270.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,793 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1260",
    "name": "Kepler-8920 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "18285.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 660 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1261",
    "name": "TOI-8927 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "18299.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1262",
    "name": "K2-8934 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "18314.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1263",
    "name": "WASP-8941 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "18328.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1264",
    "name": "HD J9948+56",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "18343.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1265",
    "name": "TRAPPIST-1 J9955+69",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "18357.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 505 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1266",
    "name": "Gliese BH-8962",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "18372.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "43200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1267",
    "name": "LHS 9169",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "18386.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "117 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1268",
    "name": "CoRoT 8976 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "18401.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1269",
    "name": "OGLE-8983 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "18415.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,063 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1270",
    "name": "PSR-8990 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "18430.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 670 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1271",
    "name": "SGR-8997 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "18444.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1272",
    "name": "NGC-9004 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "18459.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1273",
    "name": "IC-9011 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "18473.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1274",
    "name": "UGC J10018+8",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "18488.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1275",
    "name": "Abell J10025+21",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "18502.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 675 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1276",
    "name": "ESO BH-9032",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "18517.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "46700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1277",
    "name": "Vela 9239",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "18531.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "127 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1278",
    "name": "Centaurus 9046 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "18546.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1279",
    "name": "Cygnus-9053 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "18560.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,333 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1280",
    "name": "Kepler-9060 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "18575.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 680 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1281",
    "name": "TOI-9067 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "18589.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1282",
    "name": "K2-9074 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "18604.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1283",
    "name": "WASP-9081 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "18618.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1284",
    "name": "HD J10088+49",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "18633.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1285",
    "name": "TRAPPIST-1 J10095+62",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "18647.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 145 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1286",
    "name": "Gliese BH-9102",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "18662.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "50200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1287",
    "name": "LHS 9309",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "18676.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "137 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1288",
    "name": "CoRoT 9116 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "18691.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1289",
    "name": "OGLE-9123 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "18705.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,603 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1290",
    "name": "PSR-9130 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "18720.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 690 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1291",
    "name": "SGR-9137 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "18734.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1292",
    "name": "NGC-9144 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "18749.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1293",
    "name": "IC-9151 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "18763.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1294",
    "name": "UGC J10158+1",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "18778.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1295",
    "name": "Abell J10165+14",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "18792.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 315 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1296",
    "name": "ESO BH-9172",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "18807.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "53700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1297",
    "name": "Vela 9379",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "18821.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "147 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1298",
    "name": "Centaurus 9186 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "18836.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1299",
    "name": "Cygnus-9193 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "18850.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "373 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1300",
    "name": "Kepler-9200 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "18865.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 700 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1301",
    "name": "TOI-9207 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "18879.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1302",
    "name": "K2-9214 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "18894.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1303",
    "name": "WASP-9221 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "18908.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1304",
    "name": "HD J10228+42",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "18923.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1305",
    "name": "TRAPPIST-1 J10235+55",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "18937.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 485 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1306",
    "name": "Gliese BH-9242",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "18952.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1307",
    "name": "LHS 9449",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "18966.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "157 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1308",
    "name": "CoRoT 9256 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "18981.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1309",
    "name": "OGLE-9263 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "18995.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "643 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1310",
    "name": "PSR-9270 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "19010.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 710 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1311",
    "name": "SGR-9277 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "19024.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1312",
    "name": "NGC-9284 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "19039.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1313",
    "name": "IC-9291 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "19053.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1314",
    "name": "UGC J10298+83",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "19068.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1315",
    "name": "Abell J10305+7",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "19082.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 655 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1316",
    "name": "ESO BH-9312",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "19097.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "60700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1317",
    "name": "Vela 9519",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "19111.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "167 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1318",
    "name": "Centaurus 9326 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "19126.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1319",
    "name": "Cygnus-9333 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "19140.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "913 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1320",
    "name": "Kepler-9340 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "19155.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 720 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1321",
    "name": "TOI-9347 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "19169.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1322",
    "name": "K2-9354 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "19184.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1323",
    "name": "WASP-9361 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "19198.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1324",
    "name": "HD J10368+35",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "19213.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1325",
    "name": "TRAPPIST-1 J10375+48",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "19227.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 125 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1326",
    "name": "Gliese BH-9382",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "19242.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "64200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1327",
    "name": "LHS 9589",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "19256.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "177 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1328",
    "name": "CoRoT 9396 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "19271.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1329",
    "name": "OGLE-9403 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "19285.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,183 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1330",
    "name": "PSR-9410 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "19300.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 730 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1331",
    "name": "SGR-9417 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "19314.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1332",
    "name": "NGC-9424 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "19329.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1333",
    "name": "IC-9431 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "19343.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1334",
    "name": "UGC J10438+76",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "19358.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1335",
    "name": "Abell J10445+0",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "19372.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 295 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1336",
    "name": "ESO BH-9452",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "19387.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1337",
    "name": "Vela 9659",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "19401.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "187 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1338",
    "name": "Centaurus 9466 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "19416.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1339",
    "name": "Cygnus-9473 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "19430.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,453 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1340",
    "name": "Kepler-9480 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "19445.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 740 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1341",
    "name": "TOI-9487 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "19459.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1342",
    "name": "K2-9494 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "19474.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1343",
    "name": "WASP-9501 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "19488.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1344",
    "name": "HD J10508+28",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "19503.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1345",
    "name": "TRAPPIST-1 J10515+41",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "19517.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 465 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1346",
    "name": "Gliese BH-9522",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "19532.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "71200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1347",
    "name": "LHS 9729",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "19546.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "197 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1348",
    "name": "CoRoT 9536 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "19561.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1349",
    "name": "OGLE-9543 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "19575.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,723 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1350",
    "name": "PSR-9550 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "19590.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 750 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1351",
    "name": "SGR-9557 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "19604.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1352",
    "name": "NGC-9564 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "19619.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1353",
    "name": "IC-9571 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "19633.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1354",
    "name": "UGC J10578+69",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "19648.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1355",
    "name": "Abell J10585+82",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "19662.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 635 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1356",
    "name": "ESO BH-9592",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "19677.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "74700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1357",
    "name": "Vela 9799",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "19691.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "207 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1358",
    "name": "Centaurus 9606 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "19706.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1359",
    "name": "Cygnus-9613 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "19720.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,993 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1360",
    "name": "Kepler-9620 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "19735.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 760 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1361",
    "name": "TOI-9627 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "19749.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1362",
    "name": "K2-9634 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "19764.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1363",
    "name": "WASP-9641 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "19778.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1364",
    "name": "HD J10648+21",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "19793.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1365",
    "name": "TRAPPIST-1 J10655+34",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "19807.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 105 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1366",
    "name": "Gliese BH-9662",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "19822.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "78200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1367",
    "name": "LHS 9869",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "19836.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "217 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1368",
    "name": "CoRoT 9676 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "19851.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1369",
    "name": "OGLE-9683 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "19865.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,263 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1370",
    "name": "PSR-9690 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "19880.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 770 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1371",
    "name": "SGR-9697 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "19894.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1372",
    "name": "NGC-9704 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "19909.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1373",
    "name": "IC-9711 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "19923.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1374",
    "name": "UGC J10718+62",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "19938.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1375",
    "name": "Abell J10725+75",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "19952.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 275 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1376",
    "name": "ESO BH-9732",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "19967.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1377",
    "name": "Vela 9939",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "19981.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "227 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1378",
    "name": "Centaurus 9746 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "19996.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1379",
    "name": "Cygnus-9753 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "20010.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,533 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1380",
    "name": "Kepler-9760 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "20025.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 780 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1381",
    "name": "TOI-9767 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "20039.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1382",
    "name": "K2-9774 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "20054.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1383",
    "name": "WASP-9781 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "20068.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1384",
    "name": "HD J10788+14",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "20083.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1385",
    "name": "TRAPPIST-1 J10795+27",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "20097.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 445 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1386",
    "name": "Gliese BH-9802",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "20112.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1387",
    "name": "LHS 10009",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "20126.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "237 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1388",
    "name": "CoRoT 9816 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "20141.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1389",
    "name": "OGLE-9823 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "20155.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "303 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1390",
    "name": "PSR-9830 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "20170.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 790 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1391",
    "name": "SGR-9837 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "20184.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1392",
    "name": "NGC-9844 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "20199.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1393",
    "name": "IC-9851 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "20213.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1394",
    "name": "UGC J10858+55",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "20228.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1395",
    "name": "Abell J10865+68",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "20242.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 615 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1396",
    "name": "ESO BH-9872",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "20257.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "8700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1397",
    "name": "Vela 10079",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "20271.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "247 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1398",
    "name": "Centaurus 9886 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "20286.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1399",
    "name": "Cygnus-9893 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "20300.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "573 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1400",
    "name": "Kepler-9900 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "20315.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 800 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1401",
    "name": "TOI-9907 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "20329.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1402",
    "name": "K2-9914 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "20344.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1403",
    "name": "WASP-9921 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "20358.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1404",
    "name": "HD J10928+7",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "20373.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1405",
    "name": "TRAPPIST-1 J10935+20",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "20387.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 85 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1406",
    "name": "Gliese BH-9942",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "20402.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "12200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1407",
    "name": "LHS 10149",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "20416.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1408",
    "name": "CoRoT 106 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "20431.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1409",
    "name": "OGLE-113 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "20445.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "843 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1410",
    "name": "PSR-120 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "20460.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 810 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1411",
    "name": "SGR-127 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "20474.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1412",
    "name": "NGC-134 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "20489.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1413",
    "name": "IC-141 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "20503.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1414",
    "name": "UGC J1148+48",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "20518.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1415",
    "name": "Abell J1155+61",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "20532.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 255 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1416",
    "name": "ESO BH-162",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "20547.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1417",
    "name": "Vela 369",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "20561.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "67 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1418",
    "name": "Centaurus 176 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "20576.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1419",
    "name": "Cygnus-183 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "20590.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,113 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1420",
    "name": "Kepler-190 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "20605.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 820 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1421",
    "name": "TOI-197 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "20619.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1422",
    "name": "K2-204 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "20634.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1423",
    "name": "WASP-211 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "20648.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1424",
    "name": "HD J1218+0",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "20663.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1425",
    "name": "TRAPPIST-1 J1225+13",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "20677.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 425 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1426",
    "name": "Gliese BH-232",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "20692.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "19200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1427",
    "name": "LHS 439",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "20706.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "77 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1428",
    "name": "CoRoT 246 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "20721.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1429",
    "name": "OGLE-253 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "20735.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,383 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1430",
    "name": "PSR-260 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "20750.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 830 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1431",
    "name": "SGR-267 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "20764.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1432",
    "name": "NGC-274 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "20779.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1433",
    "name": "IC-281 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "20793.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1434",
    "name": "UGC J1288+41",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "20808.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1435",
    "name": "Abell J1295+54",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "20822.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 595 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1436",
    "name": "ESO BH-302",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "20837.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "22700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1437",
    "name": "Vela 509",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "20851.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "87 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1438",
    "name": "Centaurus 316 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "20866.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1439",
    "name": "Cygnus-323 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "20880.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,653 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1440",
    "name": "Kepler-330 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "20895.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 840 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1441",
    "name": "TOI-337 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "20909.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1442",
    "name": "K2-344 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "20924.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1443",
    "name": "WASP-351 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "20938.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1444",
    "name": "HD J1358+82",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "20953.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1445",
    "name": "TRAPPIST-1 J1365+6",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "20967.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 65 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1446",
    "name": "Gliese BH-372",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "20982.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "26200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1447",
    "name": "LHS 579",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "20996.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "97 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1448",
    "name": "CoRoT 386 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "21011.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1449",
    "name": "OGLE-393 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "21025.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,923 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1450",
    "name": "PSR-400 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "21040.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 850 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1451",
    "name": "SGR-407 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "21054.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1452",
    "name": "NGC-414 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "21069.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1453",
    "name": "IC-421 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "21083.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1454",
    "name": "UGC J1428+34",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "21098.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1455",
    "name": "Abell J1435+47",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "21112.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 235 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1456",
    "name": "ESO BH-442",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "21127.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "29700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1457",
    "name": "Vela 649",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "21141.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "107 ly span // 855 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1458",
    "name": "Centaurus 456 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "21156.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1459",
    "name": "Cygnus-463 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "21170.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,193 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1460",
    "name": "Kepler-470 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "21185.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 860 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1461",
    "name": "TOI-477 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "21199.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1462",
    "name": "K2-484 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "21214.0 light-years",
    "description": "Cataloged astronomical target in sector 55. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1463",
    "name": "WASP-491 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "21228.5 light-years",
    "description": "Cataloged astronomical target in sector 56. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1464",
    "name": "HD J1498+75",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "21243.0 light-years",
    "description": "Cataloged astronomical target in sector 57. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1465",
    "name": "TRAPPIST-1 J1505+88",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "21257.5 light-years",
    "description": "Cataloged astronomical target in sector 58. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 405 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1466",
    "name": "Gliese BH-512",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "21272.0 light-years",
    "description": "Cataloged astronomical target in sector 59. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "33200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1467",
    "name": "LHS 719",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "21286.5 light-years",
    "description": "Cataloged astronomical target in sector 60. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "117 ly span // 1005 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1468",
    "name": "CoRoT 526 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "21301.0 light-years",
    "description": "Cataloged astronomical target in sector 61. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "30.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1469",
    "name": "OGLE-533 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "21315.5 light-years",
    "description": "Cataloged astronomical target in sector 62. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,463 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1470",
    "name": "PSR-540 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "21330.0 light-years",
    "description": "Cataloged astronomical target in sector 63. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 870 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1471",
    "name": "SGR-547 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "21344.5 light-years",
    "description": "Cataloged astronomical target in sector 64. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1472",
    "name": "NGC-554 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "21359.0 light-years",
    "description": "Cataloged astronomical target in sector 65. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1473",
    "name": "IC-561 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "21373.5 light-years",
    "description": "Cataloged astronomical target in sector 66. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1474",
    "name": "UGC J1568+27",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "21388.0 light-years",
    "description": "Cataloged astronomical target in sector 67. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1475",
    "name": "Abell J1575+40",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "21402.5 light-years",
    "description": "Cataloged astronomical target in sector 68. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 575 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1476",
    "name": "ESO BH-582",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "21417.0 light-years",
    "description": "Cataloged astronomical target in sector 69. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "36700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1477",
    "name": "Vela 789",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "21431.5 light-years",
    "description": "Cataloged astronomical target in sector 70. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "127 ly span // 1155 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1478",
    "name": "Centaurus 596 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "21446.0 light-years",
    "description": "Cataloged astronomical target in sector 71. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1479",
    "name": "Cygnus-603 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "21460.5 light-years",
    "description": "Cataloged astronomical target in sector 72. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,733 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1480",
    "name": "Kepler-610 e",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "21475.0 light-years",
    "description": "Cataloged astronomical target in sector 73. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 880 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1481",
    "name": "TOI-617 f",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "21489.5 light-years",
    "description": "Cataloged astronomical target in sector 74. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1482",
    "name": "K2-624 g",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "21504.0 light-years",
    "description": "Cataloged astronomical target in sector 75. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1483",
    "name": "WASP-631 h",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "21518.5 light-years",
    "description": "Cataloged astronomical target in sector 76. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1484",
    "name": "HD J1638+68",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "21533.0 light-years",
    "description": "Cataloged astronomical target in sector 77. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class M",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1485",
    "name": "TRAPPIST-1 J1645+81",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "21547.5 light-years",
    "description": "Cataloged astronomical target in sector 78. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 45 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1486",
    "name": "Gliese BH-652",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "21562.0 light-years",
    "description": "Cataloged astronomical target in sector 79. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "40200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1487",
    "name": "LHS 859",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "21576.5 light-years",
    "description": "Cataloged astronomical target in sector 80. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "137 ly span // 1305 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1488",
    "name": "CoRoT 666 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "21591.0 light-years",
    "description": "Cataloged astronomical target in sector 81. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "5.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1489",
    "name": "OGLE-673 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "21605.5 light-years",
    "description": "Cataloged astronomical target in sector 82. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "503 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1490",
    "name": "PSR-680 h",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "21620.0 light-years",
    "description": "Cataloged astronomical target in sector 83. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 890 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1491",
    "name": "SGR-687 b",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "21634.5 light-years",
    "description": "Cataloged astronomical target in sector 84. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1492",
    "name": "NGC-694 c",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "21649.0 light-years",
    "description": "Cataloged astronomical target in sector 85. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1493",
    "name": "IC-701 d",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "21663.5 light-years",
    "description": "Cataloged astronomical target in sector 86. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1494",
    "name": "UGC J1708+20",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "21678.0 light-years",
    "description": "Cataloged astronomical target in sector 87. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class F",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1495",
    "name": "Abell J1715+33",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "21692.5 light-years",
    "description": "Cataloged astronomical target in sector 88. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 215 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1496",
    "name": "ESO BH-722",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "21707.0 light-years",
    "description": "Cataloged astronomical target in sector 1. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "43700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1497",
    "name": "Vela 929",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "21721.5 light-years",
    "description": "Cataloged astronomical target in sector 2. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "147 ly span // 1455 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1498",
    "name": "Centaurus 736 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "21736.0 light-years",
    "description": "Cataloged astronomical target in sector 3. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "15.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1499",
    "name": "Cygnus-743 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "21750.5 light-years",
    "description": "Cataloged astronomical target in sector 4. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "773 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1500",
    "name": "Kepler-750 d",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "21765.0 light-years",
    "description": "Cataloged astronomical target in sector 5. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.20 Earth Radii // 900 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1501",
    "name": "TOI-757 e",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "21779.5 light-years",
    "description": "Cataloged astronomical target in sector 6. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1502",
    "name": "K2-764 f",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "21794.0 light-years",
    "description": "Cataloged astronomical target in sector 7. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1503",
    "name": "WASP-771 g",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "21808.5 light-years",
    "description": "Cataloged astronomical target in sector 8. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1504",
    "name": "HD J1778+61",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "21823.0 light-years",
    "description": "Cataloged astronomical target in sector 9. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "0.60 Solar Masses // Spectral Class O",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1505",
    "name": "TRAPPIST-1 J1785+74",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "21837.5 light-years",
    "description": "Cataloged astronomical target in sector 10. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 385 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1506",
    "name": "Gliese BH-792",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "21852.0 light-years",
    "description": "Cataloged astronomical target in sector 11. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "47200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1507",
    "name": "LHS 999",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "21866.5 light-years",
    "description": "Cataloged astronomical target in sector 12. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "157 ly span // 105 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1508",
    "name": "CoRoT 806 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "21881.0 light-years",
    "description": "Cataloged astronomical target in sector 13. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "25.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1509",
    "name": "OGLE-813 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "21895.5 light-years",
    "description": "Cataloged astronomical target in sector 14. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,043 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1510",
    "name": "PSR-820 g",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "21910.0 light-years",
    "description": "Cataloged astronomical target in sector 15. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Earth Radii // 910 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1511",
    "name": "SGR-827 h",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "21924.5 light-years",
    "description": "Cataloged astronomical target in sector 16. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1512",
    "name": "NGC-834 b",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "21939.0 light-years",
    "description": "Cataloged astronomical target in sector 17. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1513",
    "name": "IC-841 c",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "21953.5 light-years",
    "description": "Cataloged astronomical target in sector 18. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1514",
    "name": "UGC J1848+13",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "21968.0 light-years",
    "description": "Cataloged astronomical target in sector 19. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.10 Solar Masses // Spectral Class G",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1515",
    "name": "Abell J1855+26",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "21982.5 light-years",
    "description": "Cataloged astronomical target in sector 20. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 555 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1516",
    "name": "ESO BH-862",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "21997.0 light-years",
    "description": "Cataloged astronomical target in sector 21. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "50700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1517",
    "name": "Vela 1069",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "22011.5 light-years",
    "description": "Cataloged astronomical target in sector 22. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "167 ly span // 255 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1518",
    "name": "Centaurus 876 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "22026.0 light-years",
    "description": "Cataloged astronomical target in sector 23. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "35.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1519",
    "name": "Cygnus-883 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "22040.5 light-years",
    "description": "Cataloged astronomical target in sector 24. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,313 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1520",
    "name": "Kepler-890 c",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "22055.0 light-years",
    "description": "Cataloged astronomical target in sector 25. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.80 Earth Radii // 920 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1521",
    "name": "TOI-897 d",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "22069.5 light-years",
    "description": "Cataloged astronomical target in sector 26. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "3.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1522",
    "name": "K2-904 e",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "22084.0 light-years",
    "description": "Cataloged astronomical target in sector 27. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1523",
    "name": "WASP-911 f",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "22098.5 light-years",
    "description": "Cataloged astronomical target in sector 28. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.50 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1524",
    "name": "HD J1918+54",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "22113.0 light-years",
    "description": "Cataloged astronomical target in sector 29. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Solar Masses // Spectral Class B",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1525",
    "name": "TRAPPIST-1 J1925+67",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "22127.5 light-years",
    "description": "Cataloged astronomical target in sector 30. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 25 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1526",
    "name": "Gliese BH-932",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "22142.0 light-years",
    "description": "Cataloged astronomical target in sector 31. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "54200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1527",
    "name": "LHS 1139",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "22156.5 light-years",
    "description": "Cataloged astronomical target in sector 32. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "177 ly span // 405 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1528",
    "name": "CoRoT 946 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "22171.0 light-years",
    "description": "Cataloged astronomical target in sector 33. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "45.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1529",
    "name": "OGLE-953 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "22185.5 light-years",
    "description": "Cataloged astronomical target in sector 34. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,583 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1530",
    "name": "PSR-960 f",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "22200.0 light-years",
    "description": "Cataloged astronomical target in sector 35. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.60 Earth Radii // 930 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1531",
    "name": "SGR-967 g",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "22214.5 light-years",
    "description": "Cataloged astronomical target in sector 36. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1532",
    "name": "NGC-974 h",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "22229.0 light-years",
    "description": "Cataloged astronomical target in sector 37. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1533",
    "name": "IC-981 b",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "22243.5 light-years",
    "description": "Cataloged astronomical target in sector 38. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.25 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1534",
    "name": "UGC J1988+6",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "22258.0 light-years",
    "description": "Cataloged astronomical target in sector 39. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.10 Solar Masses // Spectral Class K",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1535",
    "name": "Abell J1995+19",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "22272.5 light-years",
    "description": "Cataloged astronomical target in sector 40. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 195 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1536",
    "name": "ESO BH-1002",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "22287.0 light-years",
    "description": "Cataloged astronomical target in sector 41. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "57700 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1537",
    "name": "Vela 1209",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "22301.5 light-years",
    "description": "Cataloged astronomical target in sector 42. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "187 ly span // 555 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1538",
    "name": "Centaurus 1016 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "22316.0 light-years",
    "description": "Cataloged astronomical target in sector 43. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "10.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1539",
    "name": "Cygnus-1023 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "22330.5 light-years",
    "description": "Cataloged astronomical target in sector 44. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1,853 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  },
  {
    "id": "catalog-entity-1540",
    "name": "Kepler-1030 b",
    "type": "Exoplanet",
    "category": "Super-Earths",
    "distanceLightYears": "22345.0 light-years",
    "description": "Cataloged astronomical target in sector 45. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.40 Earth Radii // 940 K Temp",
    "badge": "Terrestrial Exoplanet"
  },
  {
    "id": "catalog-entity-1541",
    "name": "TOI-1037 c",
    "type": "Exoplanet",
    "category": "Ocean Worlds",
    "distanceLightYears": "22359.5 light-years",
    "description": "Cataloged astronomical target in sector 46. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.90 Earth Radii // Water-Ice Mantle",
    "badge": "Volatile-Rich Exoplanet"
  },
  {
    "id": "catalog-entity-1542",
    "name": "K2-1044 d",
    "type": "Exoplanet",
    "category": "Hot Jupiters",
    "distanceLightYears": "22374.0 light-years",
    "description": "Cataloged astronomical target in sector 47. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.00 Jupiter Radii // 1,400+ °C Dayside",
    "badge": "Gas Giant Exoplanet"
  },
  {
    "id": "catalog-entity-1543",
    "name": "WASP-1051 e",
    "type": "Exoplanet",
    "category": "Hycean Candidates",
    "distanceLightYears": "22388.5 light-years",
    "description": "Cataloged astronomical target in sector 48. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.75 Earth Radii // Liquid Water Ocean",
    "badge": "Hydrogen Ocean Planet"
  },
  {
    "id": "catalog-entity-1544",
    "name": "HD J2058+47",
    "type": "Star",
    "category": "Main Sequence Stars",
    "distanceLightYears": "22403.0 light-years",
    "description": "Cataloged astronomical target in sector 49. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2.60 Solar Masses // Spectral Class A",
    "badge": "Stellar Engine"
  },
  {
    "id": "catalog-entity-1545",
    "name": "TRAPPIST-1 J2065+60",
    "type": "Star",
    "category": "Neutron Stars & Pulsars",
    "distanceLightYears": "22417.5 light-years",
    "description": "Cataloged astronomical target in sector 50. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "1.80 Solar Masses // 365 Hz Spin Rate",
    "badge": "Relativistic Dynamo"
  },
  {
    "id": "catalog-entity-1546",
    "name": "Gliese BH-1072",
    "type": "Black Hole",
    "category": "Intermediate Black Holes",
    "distanceLightYears": "22432.0 light-years",
    "description": "Cataloged astronomical target in sector 51. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "61200 Solar Masses // Relativistic Jet",
    "badge": "Gravitational Singularity"
  },
  {
    "id": "catalog-entity-1547",
    "name": "LHS 1279",
    "type": "Galaxy",
    "category": "Elliptical & Lenticular",
    "distanceLightYears": "22446.5 light-years",
    "description": "Cataloged astronomical target in sector 52. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "197 ly span // 705 Billion Solar Masses",
    "badge": "Deep Space Entity"
  },
  {
    "id": "catalog-entity-1548",
    "name": "CoRoT 1086 Nebula",
    "type": "Nebula",
    "category": "Planetary & Dark Nebulae",
    "distanceLightYears": "22461.0 light-years",
    "description": "Cataloged astronomical target in sector 53. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "20.0 ly diameter // Ionized Plasma Shockwave",
    "badge": "Interstellar Cloud"
  },
  {
    "id": "catalog-entity-1549",
    "name": "OGLE-1093 Moon I",
    "type": "Moon",
    "category": "Exomoons & Outer Moons",
    "distanceLightYears": "22475.5 light-years",
    "description": "Cataloged astronomical target in sector 54. Exhibiting distinct photometric curves, spectroscopic absorption lines, and orbital resonance with companion bodies.",
    "highlightStat": "2,123 km diameter // Subsurface Ice",
    "badge": "Natural Satellite"
  }
];
