# NovaNexus — Interactive 3D Cosmos & NASA Explorer 🌌✨

[![Live Demo](https://img.shields.io/badge/Live_Demo-novanexus.vercel.app-success?style=for-the-badge&logo=vercel)](https://novanexus.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Gmanjot4321/novanexus)

> 🔗 **Live Demo:** [https://novanexus.vercel.app](https://novanexus.vercel.app)

**NovaNexus** is a highly visual, physics-driven 3D web application that merges real-time celestial mechanics, live astronomical telemetry, and AI-curated cosmic lore into a fully explorable, interactive universe. 

Designed as a flagship demonstration of advanced frontend engineering and data orchestration, NovaNexus pushes the boundaries of browser-based rendering by combining custom WebGL shaders, interactive camera logic, and a highly optimized hybrid data pipeline.

---

## ⚡ Key Highlights & Architecture

* **Real-Time 3D Rendering:** Built on React Three Fiber and Three.js, featuring complex material shaders, dynamic lighting setups, and mathematical planetary orbit simulations.
* **Hybrid Data Architecture (Live Telemetry + Static Lore):** 
  * **Live NASA API Integration:** Asynchronously fetches and parses real-time astronomical data, near-Earth object (NEO) tracking, and planetary telemetry directly from NASA's public endpoints.
  * **AI-Generated Cosmic Encyclopedias:** Utilizes offline generative AI scripts to research, structure, and format massive static datasets, powering the app's rich encyclopedic knowledge base with zero runtime latency.
* **Cinematic Camera Controllers:** Implements custom camera navigation logic allowing users to seamlessly orbit, pan, and zoom through 3D celestial visualizations without losing spatial orientation.
* **Persistent Cosmic State:** Leverages Supabase (PostgreSQL) to store user configurations, saved cosmic coordinates, and bookmarked celestial bodies.
* **High-Performance UI:** Features a sleek, museum-like dark mode interface powered by Tailwind CSS and Framer Motion for buttery smooth data card reveals and transitions.

---

## 🛠️ Tech Stack & Technologies Used

### Frontend & 3D Visualization
* **Core Framework:** React 19, TypeScript[cite: 3]
* **Build Tooling:** Vite, Bun[cite: 3]
* **3D Engine:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
* **Styling & Animation:** Tailwind CSS, Framer Motion
* **UI Components:** Radix UI / Custom Glassmorphism

### Backend, APIs & Data Pipeline
* **Live Data Provider:** NASA Open APIs (APOD, Asteroid NeoWs, Mars Rover Photos)[cite: 3]
* **Static Data Generation:** Node.js offline AI scripting (`gen_neos.cjs`, `gen_universe_components.cjs`, and massive automated formatting scripts)[cite: 3]
* **Database & Auth:** Supabase (PostgreSQL)[cite: 3]
* **Deployment:** Vercel

---

## 📁 Comprehensive System Architecture

```text
novanexus/
├── bun.lock                        # Bun dependency lockfile[cite: 3]
├── package.json                    # Full dependency specification[cite: 3]
├── tsconfig.json                   # TypeScript compiler configuration[cite: 3]
├── vite.config.ts                  # Vite build configuration[cite: 3]
├── metadata.json                   # Project metadata[cite: 3]
├── index.html                      # Root HTML template[cite: 3]
├── .env.example                    # Environment variable template[cite: 3]
├── README.md                       # Project documentation[cite: 3]
│
├── [Offline AI Data Generators & Formatting Scripts]
│   ├── gen_neos.cjs                # AI generator for static NEO encyclopedic data[cite: 3]
│   ├── gen_universe_components.cjs # AI script for generating cosmic lore[cite: 3]
│   ├── make_bg_sleek.cjs           # Global background styling generator[cite: 3]
│   └── fix_*.cjs                   # 15+ automated formatting scripts for batch processing (e.g., fix_celestial_bodies.cjs, fix_radar.cjs, fix_black_hole.cjs, fix_simulations.cjs)[cite: 3]
│
└── src/
    ├── App.tsx                     # Main application layout and state management[cite: 3]
    ├── main.tsx                    # React client entrypoint[cite: 3]
    ├── types.ts                    # Global TypeScript interfaces[cite: 3]
    ├── index.css                   # Global styles and Tailwind directives[cite: 3]
    │
    ├── components/                 # [UI & 3D Rendering Tier]
    │   ├── SolarSystem3D.tsx       # Primary React Three Fiber physics canvas[cite: 3]
    │   ├── RelativityLabView.tsx   # Interactive physics and orbital simulators[cite: 3]
    │   ├── PhenomenaSimulators.tsx # Cosmic event visualizers[cite: 3]
    │   ├── SpaceHubView.tsx        # Central navigation hub[cite: 3]
    │   ├── DashboardsView.tsx      # Analytical dashboard layout[cite: 3]
    │   ├── DashboardUI.tsx         # Reusable dashboard widgets[cite: 3]
    │   ├── KnowledgeBaseView.tsx   # Lore and encyclopedia reader[cite: 3]
    │   ├── ComparisonLab.tsx       # Multi-entity comparative analysis[cite: 3]
    │   ├── NeoRadarView.tsx        # Local radar targeting interface[cite: 3]
    │   ├── NovaNexusLogo.tsx       # Animated branding component[cite: 3]
    │   ├── SpaceWaveIntro.tsx      # Cinematic intro sequence[cite: 3]
    │   ├── GlobalBackground.tsx    # Universal starry background[cite: 3]
    │   ├── Tooltip.tsx             # Interactive UI tooltips[cite: 3]
    │   │
    │   ├── codex/                  # [Interactive Quiz & Learning]
    │   │   ├── ArticleQuizCard.tsx # Lore-based quiz components[cite: 3]
    │   │   └── CodexQuizArena.tsx  # Gamified knowledge testing[cite: 3]
    │   │
    │   ├── home_backgrounds/       # [Dynamic Cinematic Backgrounds]
    │   │   ├── BlackHoleBackground.tsx         # Event horizon shader[cite: 3]
    │   │   ├── CosmicWebBackground.tsx         # Dark matter web visualizer[cite: 3]
    │   │   ├── CyberMatrixBackground.tsx       # Grid-based UI backdrop[cite: 3]
    │   │   ├── RadarAsteroidBackground.tsx     # Threat detection sweep[cite: 3]
    │   │   ├── RelativityWarpBackground.tsx    # Space-time distortion[cite: 3]
    │   │   ├── SatelliteTelemetryBackground.tsx# Live data stream aesthetic[cite: 3]
    │   │   ├── ScaleArenaBackground.tsx        # Size comparison grid[cite: 3]
    │   │   ├── SilkWaveBackground.tsx          # Fluid motion shader[cite: 3]
    │   │   ├── SolarSystemBackground.tsx       # Orbital overview[cite: 3]
    │   │   └── SpiralGalaxyBackground.tsx      # Volumetric galactic render[cite: 3]
    │   │
    │   └── telemetry/              # [NASA API Interfaces]
    │       ├── TelemetryLogView.tsx    # Raw data stream logs[cite: 3]
    │       ├── TelemetryRadarView.tsx  # Live object tracking[cite: 3]
    │       └── TelemetryScatterView.tsx# Statistical data plots[cite: 3]
    │
    ├── data/                       # [STATIC TIER] Pre-Compiled AI-Generated Lore
    │   ├── celestialData.ts        # Encyclopedic planetary parameters[cite: 3]
    │   ├── codexQuizData.ts        # Structured Q&A for the Codex Arena[cite: 3]
    │   ├── comparableEntitiesData.ts # Relational scaling data[cite: 3]
    │   ├── extraDashboardsData.ts  # Supplementary analytical metrics[cite: 3]
    │   ├── extremeData.ts          # Edge-case cosmic phenomena[cite: 3]
    │   ├── knowledgeData.ts        # General astronomical concepts[cite: 3]
    │   ├── neoData.ts              # Historical lore for famous Near-Earth Objects[cite: 3]
    │   ├── phenomenaData.ts        # Physics parameters for cosmic events[cite: 3]
    │   ├── telemetryDashboardsData.ts # Baseline telemetry structures[cite: 3]
    │   └── universeData.ts         # Macro-scale galactic mapping[cite: 3]
    │
    ├── services/                   # [DYNAMIC TIER] Live API Orchestration
    │   ├── nasaApiService.ts       # Live async fetching for NASA NeoWs[cite: 3]
    │   └── marsPhotosData.ts       # Live fetcher for NASA Mars Rover image endpoints[cite: 3]
    │
    └── utils/                      # [Core Utilities]
        ├── audioEngine.ts          # Web Audio API ambient soundscapes[cite: 3]
        ├── planetTextures.ts       # 3D material and texture mappers[cite: 3]
        └── supabaseClient.ts       # PostgreSQL connection and state synchronization[cite: 3]

