export interface CelestialBody {
  id: string;
  name: string;
  type: 'Star' | 'Planet' | 'Dwarf Planet' | 'Moon';
  parentBody?: string;
  radiusKm: number;
  massKg: string;
  distanceFromSunMillionKm: number; // in million km
  orbitalPeriodDays: number; // in Earth days
  rotationalPeriodHours: number; // in Earth hours
  dayLengthHours?: number; // in Earth hours
  orbitalVelocityKmS: number; // in km/s
  axialTiltDeg: number;
  surfaceGravityMs2: number; // m/s^2 (e.g. Earth 9.81)
  surfaceGravityG: number; // relative to Earth 1.0g
  surfaceTempC: { min: number; max: number; mean: number };
  meanTempC?: number; // in Celsius
  summary?: string;
  atmosphere: string[];
  textureUrl: string;
  color: string;
  orbitColor: string;
  rings?: {
    innerRadius: number;
    outerRadius: number;
    colors: string[];
  };
  totalMoonsCount: number;
  majorMoons: {
    name: string;
    radiusKm: number;
    orbitalPeriodDays: number;
    peculiarity: string;
  }[];
  minorMoonsSummary?: string;
  funnyFacts: string[];
  educationalFacts: string[];
  historicalDiscovery: string;
  humanAnalogy: string;
}

export interface CosmicPhenomenon {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  era: string;
  timescale: string;
  category: 'origins' | 'stellar_evolution' | 'galactic_collision' | 'relativity' | 'cosmic_fate';
  visualType: 'big_bang' | 'sun_death' | 'supernova' | 'milkyway_andromeda' | 'black_hole_lensing';
  summary: string;
  stages: {
    phase: string;
    timeline: string;
    temperature: string;
    title: string;
    description: string;
    astrophysicalProcess: string;
    narrativeScript?: string;
  }[];
  bizarreFacts: string[];
  energyOutput: string;
  scientificConsensus: string;
}

export interface NeoObject {
  id: string;
  name: string;
  designation: string;
  discoveryYear: number;
  estimatedDiameterMeters: { min: number; max: number };
  velocityKmS: number;
  velocityMph: number;
  missDistanceAU: number;
  missDistanceKm: number;
  missDistanceLunarDistances: number;
  isHazardous: boolean;
  closeApproachDate: string;
  torinoScale: number; // 0 to 10
  palermoScale: number;
  impactProbabilityPercent: number;
  extinctionScalePercent: number; // Relative to 10,000m Chicxulub dinosaur killer
  composition: string;
  orbitalGroup: 'Aten' | 'Apollo' | 'Amor' | 'Atira';
  riskAnalysis: string;
  mitigationStrategy: string;
}

export interface CosmicKnowledgeItem {
  id: string;
  category: 'theories' | 'top_10_exoplanets' | 'top_10_monsters' | 'cosmic_mysteries';
  title: string;
  subtitle: string;
  tag: string;
  badge: string;
  readTime: string;
  summary: string;
  stats: { label: string; value: string }[];
  content: string[];
  mindBlowingTakeaway: string;
  imageUrl?: string;
}

export interface ComparableEntity {
  id: string;
  name: string;
  category: 'Terrestrial Planet' | 'Gas Giant' | 'Ice Giant' | 'Star' | 'Major Moon' | 'Dwarf Planet' | 'Exoplanet' | 'Stellar Monster' | 'Remnant & Black Hole' | 'Asteroid & Minor Body';
  parentBody?: string;
  radiusKm: number;
  massKg: string;
  distanceFromSunMillionKm?: number;
  orbitalPeriodDays?: number;
  surfaceGravityMs2: number;
  surfaceGravityG: number;
  surfaceTempC: { min: number; max: number; mean: number };
  atmosphere: string[];
  color: string;
  peculiarity: string;
  humanAnalogy: string;
  facts: string[];
}

export interface UniverseComponent {
  id: string;
  name: string;
  type: 'Planet' | 'Moon' | 'Star' | 'Black Hole' | 'Exoplanet' | 'Nebula' | 'Galaxy' | 'Phenomenon';
  category: string;
  distanceLightYears?: number | string;
  description: string;
  highlightStat: string;
  badge: string;
  comparableId?: string;
}

export type ViewMode = 
  | 'home'
  | 'solar_system' 
  | 'phenomena' 
  | 'neo_radar' 
  | 'knowledge_base' 
  | 'comparison_lab'
  | 'dashboards'
  | 'space_hub'
  | 'relativity_lab';

export interface ApodData {
  date: string;
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: 'image' | 'video';
  copyright?: string;
  thumbnail_url?: string;
}

export interface IssTelemetry {
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  altitude: number; // km
  velocity: number; // km/h
  visibility: 'daylight' | 'eclipsed';
  footprint: number; // km diameter of visibility on Earth
  timestamp: number;
  solar_lat?: number;
  solar_lon?: number;
  units: string;
}

export interface MarsRoverPhoto {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol?: number;
    max_date?: string;
    total_photos?: number;
  };
}

export interface HohmannMission {
  id: string;
  name: string;
  fromBody: string;
  toBody: string;
  fromRadiusAU: number;
  toRadiusAU: number;
  deltaVDepartureKmS: number;
  deltaVArrivalKmS: number;
  totalDeltaVKmS: number;
  transitTimeDays: number;
  synodicPeriodDays: number;
  color: string;
  historicalMission: string;
  scientificObjective: string;
}
