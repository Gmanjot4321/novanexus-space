# NovaNexus — Interactive 3D Cosmos & NASA Explorer 

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Gmanjot4321/novanexus-space)

**NovaNexus** is a highly visual, physics-driven 3D web application that merges real-time celestial mechanics, live astronomical telemetry, and AI-curated cosmic lore into a fully explorable, interactive universe. 

Designed as a flagship demonstration of advanced frontend engineering and data orchestration, NovaNexus pushes the boundaries of browser-based rendering by combining custom orbital math, interactive camera logic, and a highly optimized hybrid data pipeline.

---

## Key Highlights & Architecture

* **Real-Time 3D Rendering:** Built directly on Three.js (no React Three Fiber wrapper), featuring dynamic lighting setups, procedural celestial materials, and mathematical planetary orbit simulations.
* **Hybrid Data Architecture (Live Telemetry + Static Lore):** 
  * **Live NASA API Integration:** Asynchronously fetches and parses real-time astronomical data, near-Earth object (NEO) tracking, and planetary telemetry directly from NASA's public endpoints.
  * **AI-Generated Cosmic Encyclopedias:** Utilizes offline generative AI scripts to research, structure, and format massive static datasets, powering the app's rich encyclopedic knowledge base with zero runtime latency.
* **Orbit, Pan & Zoom Camera:** Navigate the 3D universe with Three.js OrbitControls-based camera navigation, moving seamlessly through celestial visualizations without losing spatial orientation.
* **Persistent State:** Supabase (PostgreSQL) syncs NEO records, universe components, and planet textures; bookmarks and custom textures persist in the browser via localStorage.
* **High-Performance UI:** Features a sleek, museum-like dark mode interface powered by Tailwind CSS and Motion for buttery smooth data card reveals and transitions.

---

## Tech Stack & Technologies Used

### Frontend & 3D Visualization
* **Core Framework:** React 19, TypeScript
* **Build Tooling:** Vite, Bun
* **3D Engine:** Three.js (imperative WebGL rendering, no React Three Fiber wrapper)
* **Styling & Animation:** Tailwind CSS, Motion
* **UI Components:** Custom glassmorphism components

### Backend, APIs & Data Pipeline
* **Live Data Provider:** NASA Open APIs (APOD, Asteroid NeoWs, Mars Rover Photos)
* **Static Data Generation:** Node.js offline AI scripting (`gen_neos.cjs`, `gen_universe_components.cjs`, and automated formatting utilities)
* **Database & Auth:** Supabase (PostgreSQL)
* **Deployment:** Vercel

---

## Comprehensive System Architecture

```text
novanexus/
│
├── [Offline AI Data Generators & Formatting Scripts]
│   ├── gen_neos.cjs                # AI generator for static NEO encyclopedic data
│   ├── gen_universe_components.cjs # AI script for generating cosmic lore
│   ├── make_bg_sleek.cjs           # Global background styling generator
│   └── fix_*.cjs                   # Automated formatting scripts for batch processing (e.g., fix_celestial_bodies.cjs, fix_radar.cjs, fix_black_hole.cjs)
│
└── src/
    ├── App.tsx                     # Main application layout and state management
    ├── main.tsx                    # React client entrypoint
    ├── types.ts                    # Global TypeScript interfaces
    ├── index.css                   # Global styles and Tailwind directives
    │
    ├── components/                 # [UI & 3D Rendering Tier]
    │   ├── SolarSystem3D.tsx       # Primary 3D physics canvas (Three.js)
    │   ├── RelativityLabView.tsx   # Interactive physics and orbital simulators
    │   ├── PhenomenaSimulators.tsx # Cosmic event visualizers
    │   ├── SpaceHubView.tsx        # Central navigation hub
    │   ├── DashboardsView.tsx      # Analytical dashboard layout
    │   ├── DashboardUI.tsx         # Reusable dashboard widgets
    │   ├── KnowledgeBaseView.tsx   # Lore and encyclopedia reader
    │   ├── ComparisonLab.tsx       # Multi-entity comparative analysis
    │   ├── NeoRadarView.tsx        # Local radar targeting interface
    │   ├── NovaNexusLogo.tsx       # Animated branding component
    │   ├── SpaceWaveIntro.tsx      # Cinematic intro sequence
    │   ├── GlobalBackground.tsx    # Universal starry background
    │   ├── Tooltip.tsx             # Interactive UI tooltips
    │   │
    │   ├── codex/                  # [Interactive Quiz & Learning]
    │   │   ├── ArticleQuizCard.tsx # Lore-based quiz components
    │   │   └── CodexQuizArena.tsx  # Gamified knowledge testing
    │   │
    │   ├── home_backgrounds/       # [Dynamic Cinematic Backgrounds]
    │   │   ├── BlackHoleBackground.tsx         # Event horizon shader
    │   │   ├── CosmicWebBackground.tsx         # Dark matter web visualizer
    │   │   ├── CyberMatrixBackground.tsx       # Grid-based UI backdrop
    │   │   ├── RadarAsteroidBackground.tsx     # Threat detection sweep
    │   │   ├── RelativityWarpBackground.tsx    # Space-time distortion
    │   │   ├── SatelliteTelemetryBackground.tsx# Live data stream aesthetic
    │   │   ├── ScaleArenaBackground.tsx        # Size comparison grid
    │   │   ├── SilkWaveBackground.tsx          # Fluid motion shader
    │   │   ├── SolarSystemBackground.tsx       # Orbital overview
    │   │   └── SpiralGalaxyBackground.tsx      # Volumetric galactic render
    │   │
    │   └── telemetry/              # [NASA API Interfaces]
    │       ├── TelemetryLogView.tsx    # Raw data stream logs
    │       ├── TelemetryRadarView.tsx  # Live object tracking
    │       └── TelemetryScatterView.tsx# Statistical data plots
    │
    ├── data/                       # [STATIC TIER] Pre-Compiled AI-Generated Lore
    │   ├── celestialData.ts        # Encyclopedic planetary parameters
    │   ├── codexQuizData.ts        # Structured Q&A for the Codex Arena
    │   ├── comparableEntitiesData.ts # Relational scaling data
    │   ├── extraDashboardsData.ts  # Supplementary analytical metrics
    │   ├── extremeData.ts          # Edge-case cosmic phenomena
    │   ├── knowledgeData.ts        # General astronomical concepts
    │   ├── neoData.ts              # Historical lore for famous Near-Earth Objects
    │   ├── phenomenaData.ts        # Physics parameters for cosmic events
    │   ├── telemetryDashboardsData.ts # Baseline telemetry structures
    │   └── universeData.ts         # Macro-scale galactic mapping
    │
    ├── services/                   # [DYNAMIC TIER] Live API Orchestration
    │   ├── nasaApiService.ts       # Live async fetching for NASA NeoWs
    │   └── marsPhotosData.ts       # Live fetcher for NASA Mars Rover image endpoints
    │
    └── utils/                      # [Core Utilities]
        ├── audioEngine.ts          # Web Audio API ambient soundscapes
        ├── planetTextures.ts       # 3D material and texture mappers
        └── supabaseClient.ts       # Supabase client init, localStorage texture cache
```

---

## Getting Started

### Prerequisites

* Node.js 18+ (or [Bun](https://bun.sh))
* (Optional) A NASA API key — get one free at [api.nasa.gov](https://api.nasa.gov) (without it, the app uses the shared `DEMO_KEY` with lower rate limits)
* (Optional) A Supabase project for synced NEO data, universe components, and planet textures

### 1. Install dependencies

```bash
npm install        # or: bun install
```

### 2. Configure environment variables

Copy the example file and fill in your keys:

```bash
cp .env.example .env
```

| Variable | Required | Purpose |
|---|---|---|
| `VITE_NASA_API_KEY` | No | Live NASA API calls (NeoWs, APOD, Mars Rover Photos); falls back to `DEMO_KEY` |
| `VITE_SUPABASE_URL` | No | Supabase project URL for synced data |
| `VITE_SUPABASE_ANON_KEY` | No | Supabase anon key for synced data |

The app runs fine without any keys — NASA calls fall back to the demo key and Supabase features are skipped when unconfigured.

### 3. Run it

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production bundle -> dist/ (deploys to Vercel)
```

