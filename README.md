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
* **Core Framework:** React 19, TypeScript
* **Build Tooling:** Vite, Bun
* **3D Engine:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
* **Styling & Animation:** Tailwind CSS, Framer Motion
* **UI Components:** Radix UI / Custom Glassmorphism

### Backend, APIs & Data Pipeline
* **Live Data Provider:** NASA Open APIs (APOD, Asteroid NeoWs, Mars Rover Photos)
* **Static Data Generation:** Node.js offline AI scripting (`gen_neos.cjs`, `gen_universe_components.cjs`, and automated formatting utilities)
* **Database & Auth:** Supabase (PostgreSQL)
* **Deployment:** Vercel

---

## 📁 Comprehensive System Architecture

```text
novanexus/
├── bun.lock                        # Bun dependency lockfile
├── package.json                    # Full dependency specification
├── tsconfig.json                   # TypeScript compiler configuration
├── vite.config.ts                  # Vite build configuration
├── metadata.json                   # Project metadata
├── index.html                      # Root HTML template
├── .env.example                    # Environment variable template
├── README.md                       # Project documentation
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
    │   ├── SolarSystem3D.tsx       # Primary React Three Fiber physics canvas
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
    │   ├── extraDashboardsData.ts  # Supplementary
