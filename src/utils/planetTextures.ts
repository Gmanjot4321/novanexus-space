import * as THREE from 'three';

// Cache generated textures so we don't recreate them needlessly
const textureCache = new Map<string, THREE.CanvasTexture>();

/**
 * Creates a soft radial glow particle texture for points/particles
 * Completely eliminates ugly "tiny square blocks" in Three.js PointsMaterial
 */
export function createGlowParticleTexture(): THREE.CanvasTexture {
  const cacheKey = 'glow_particle';
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey)!;
  }

  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
  grad.addColorStop(0.15, 'rgba(255, 255, 255, 0.9)');
  grad.addColorStop(0.4, 'rgba(255, 255, 255, 0.35)');
  grad.addColorStop(0.7, 'rgba(255, 255, 255, 0.08)');
  grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  textureCache.set(cacheKey, texture);
  return texture;
}

/**
 * Procedural Realistic Planet & Celestial Body Textures (1024x512)
 * High-definition NASA-authentic surface & atmospheric patterns
 */
export function createRealisticPlanetTexture(planetId: string): THREE.CanvasTexture {
  if (textureCache.has(planetId)) {
    return textureCache.get(planetId)!;
  }

  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  switch (planetId) {
    case 'sun': {
      // Dynamic convective solar granules & magnetic filaments
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#ff9100');
      grad.addColorStop(0.3, '#ffab00');
      grad.addColorStop(0.5, '#ffd600');
      grad.addColorStop(0.7, '#ffab00');
      grad.addColorStop(1, '#ff6d00');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Convective granules
      for (let i = 0; i < 2400; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = 3 + Math.random() * 14;
        ctx.fillStyle = Math.random() > 0.4 ? 'rgba(255, 245, 157, 0.35)' : 'rgba(221, 44, 0, 0.25)';
        ctx.beginPath();
        ctx.ellipse(x, y, r * 1.6, r, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }

      // Sunspots
      for (let i = 0; i < 8; i++) {
        const sx = 150 + Math.random() * (width - 300);
        const sy = 180 + Math.random() * 150;
        const sr = 6 + Math.random() * 12;
        // Penumbra
        ctx.fillStyle = 'rgba(191, 54, 12, 0.8)';
        ctx.beginPath();
        ctx.arc(sx, sy, sr * 1.8, 0, Math.PI * 2);
        ctx.fill();
        // Umbra
        ctx.fillStyle = '#212121';
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'mercury': {
      // Cratered barren gray regolith with bright impact rays
      ctx.fillStyle = '#6b7280';
      ctx.fillRect(0, 0, width, height);

      // Mare patches
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = 30 + Math.random() * 90;
        ctx.fillStyle = 'rgba(55, 65, 81, 0.4)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Thousands of impact craters
      for (let i = 0; i < 1800; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = 1.5 + Math.random() * 8;
        // Crater rim
        ctx.fillStyle = 'rgba(229, 231, 235, 0.5)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        // Crater shadow interior
        ctx.fillStyle = 'rgba(31, 41, 55, 0.7)';
        ctx.beginPath();
        ctx.arc(x + 0.8, y + 0.8, r * 0.75, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'venus': {
      // Thick pale-yellow sulfuric acid cloud streaks and V-shaped atmospheric waves
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#fef08a');
      grad.addColorStop(0.2, '#fde047');
      grad.addColorStop(0.5, '#f59e0b');
      grad.addColorStop(0.8, '#d97706');
      grad.addColorStop(1, '#ca8a04');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Equatorial atmospheric jet streaks
      for (let y = 0; y < height; y += 4) {
        const alpha = 0.15 + Math.sin(y * 0.08) * 0.1;
        ctx.fillStyle = `rgba(254, 240, 138, ${alpha})`;
        ctx.fillRect(0, y, width, 3);
      }

      // Swirling UV cloud ripples
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const rx = 80 + Math.random() * 160;
        const ry = 10 + Math.random() * 25;
        ctx.fillStyle = 'rgba(217, 119, 6, 0.2)';
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, 0.05, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'earth': {
      // Deep oceans with realistic continents, desert Sahara, green Amazon/Congo, and polar ice caps
      ctx.fillStyle = '#0f3869'; // Deep Atlantic/Pacific Blue
      ctx.fillRect(0, 0, width, height);

      // Ocean shelf turquoise depth
      ctx.fillStyle = '#1e5f8a';
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * width;
        const y = 80 + Math.random() * (height - 160);
        ctx.beginPath();
        ctx.ellipse(x, y, 120, 70, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // North America
      ctx.fillStyle = '#227a3b'; // Forest
      ctx.beginPath();
      ctx.moveTo(140, 100);
      ctx.lineTo(260, 110);
      ctx.lineTo(280, 190);
      ctx.lineTo(210, 240);
      ctx.lineTo(160, 210);
      ctx.lineTo(120, 150);
      ctx.closePath();
      ctx.fill();

      // South America
      ctx.beginPath();
      ctx.moveTo(220, 250);
      ctx.lineTo(290, 280);
      ctx.lineTo(280, 390);
      ctx.lineTo(230, 420);
      ctx.lineTo(210, 310);
      ctx.closePath();
      ctx.fill();

      // Eurasia
      ctx.beginPath();
      ctx.moveTo(420, 100);
      ctx.lineTo(780, 110);
      ctx.lineTo(840, 220);
      ctx.lineTo(720, 250);
      ctx.lineTo(600, 210);
      ctx.lineTo(440, 180);
      ctx.closePath();
      ctx.fill();

      // Sahara & Middle East desert
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.ellipse(490, 210, 70, 35, 0, 0, Math.PI * 2);
      ctx.fill();

      // Africa
      ctx.fillStyle = '#2e7d32';
      ctx.beginPath();
      ctx.moveTo(430, 210);
      ctx.lineTo(540, 210);
      ctx.lineTo(560, 320);
      ctx.lineTo(490, 420);
      ctx.lineTo(430, 300);
      ctx.closePath();
      ctx.fill();

      // Australia
      ctx.fillStyle = '#c2410c';
      ctx.beginPath();
      ctx.ellipse(780, 360, 60, 40, 0, 0, Math.PI * 2);
      ctx.fill();

      // Polar Ice Caps
      ctx.fillStyle = '#f8fafc';
      // North Pole
      ctx.beginPath();
      ctx.ellipse(width / 2, 20, width / 2, 30, 0, 0, Math.PI * 2);
      ctx.fill();
      // South Pole (Antarctica)
      ctx.beginPath();
      ctx.ellipse(width / 2, height - 25, width / 2, 45, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'mars': {
      // Iron oxide red/ochre deserts with dark basaltic volcanic plains & Valles Marineris
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#c2410c');
      grad.addColorStop(0.3, '#ea580c');
      grad.addColorStop(0.5, '#b45309');
      grad.addColorStop(0.8, '#9a3412');
      grad.addColorStop(1, '#7c2d12');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Dark volcanic basalt regions (Syrtis Major, Acidalia Planitia)
      ctx.fillStyle = 'rgba(68, 40, 29, 0.65)';
      for (let i = 0; i < 18; i++) {
        const x = Math.random() * width;
        const y = 140 + Math.random() * 240;
        const rx = 50 + Math.random() * 120;
        const ry = 30 + Math.random() * 70;
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, Math.random() * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Valles Marineris colossal canyon rift
      ctx.strokeStyle = '#271711';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(350, 280);
      ctx.bezierCurveTo(450, 275, 520, 295, 620, 285);
      ctx.stroke();

      // Olympus Mons caldera ring
      ctx.fillStyle = '#552e1f';
      ctx.beginPath();
      ctx.arc(280, 220, 24, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#30180d';
      ctx.beginPath();
      ctx.arc(280, 220, 8, 0, Math.PI * 2);
      ctx.fill();

      // Brilliant white carbon dioxide & water ice polar caps
      ctx.fillStyle = '#f1f5f9';
      ctx.beginPath();
      ctx.ellipse(width / 2, 16, 260, 24, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(width / 2, height - 16, 220, 22, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'jupiter': {
      // Magnificent multi-banded Jovian atmosphere with Great Red Spot & swirling vortices
      const bands = [
        '#f8fafc', '#fed7aa', '#ea580c', '#ffedd5', '#c2410c', '#9a3412',
        '#ffedd5', '#f97316', '#fdba74', '#c2410c', '#fff7ed', '#7c2d12',
        '#fed7aa', '#ea580c', '#ffedd5', '#9a3412', '#f8fafc'
      ];

      const bandHeight = height / bands.length;
      bands.forEach((color, idx) => {
        ctx.fillStyle = color;
        ctx.fillRect(0, idx * bandHeight, width, bandHeight + 2);
      });

      // Zonal atmospheric jet stream wave distortions
      for (let y = 0; y < height; y += 8) {
        ctx.fillStyle = y % 16 === 0 ? 'rgba(154, 52, 18, 0.25)' : 'rgba(255, 255, 255, 0.25)';
        for (let x = 0; x < width; x += 15) {
          const waveY = y + Math.sin(x * 0.04 + y * 0.1) * 6;
          ctx.fillRect(x, waveY, 15, 4);
        }
      }

      // Swirling turbulence eddies
      for (let i = 0; i < 280; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const rx = 15 + Math.random() * 45;
        const ry = 4 + Math.random() * 10;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(234, 88, 12, 0.4)' : 'rgba(255, 255, 255, 0.35)';
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, 0.1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Iconic Great Red Spot (Southern Hemisphere)
      const grsX = width * 0.65;
      const grsY = height * 0.68;
      // Outer storm rim
      ctx.fillStyle = '#991b1b';
      ctx.beginPath();
      ctx.ellipse(grsX, grsY, 55, 32, -0.05, 0, Math.PI * 2);
      ctx.fill();
      // Core hurricane spiral
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.ellipse(grsX, grsY, 40, 22, -0.05, 0, Math.PI * 2);
      ctx.fill();
      // Eye of the storm
      ctx.fillStyle = '#fed7aa';
      ctx.beginPath();
      ctx.ellipse(grsX, grsY, 18, 9, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'saturn': {
      // Golden butterscotch and warm ochre atmospheric bands
      const saturnBands = [
        '#fef08a', '#fde047', '#eab308', '#ca8a04', '#a16207',
        '#fef08a', '#eab308', '#ca8a04', '#854d0e', '#fef9c3',
        '#eab308', '#ca8a04', '#a16207', '#713f12'
      ];
      const sH = height / saturnBands.length;
      saturnBands.forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.fillRect(0, i * sH, width, sH + 2);
      });

      // Subtle atmospheric streaks
      for (let y = 0; y < height; y += 6) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.fillRect(0, y, width, 3);
      }
      break;
    }

    case 'uranus': {
      // Smooth cyan-aquamarine ice giant atmosphere with delicate pale bands
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#67e8f9');
      grad.addColorStop(0.3, '#a5f3fc');
      grad.addColorStop(0.5, '#38bdf8');
      grad.addColorStop(0.7, '#22d3ee');
      grad.addColorStop(1, '#06b6d4');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle methane haze
      for (let y = 0; y < height; y += 12) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, y, width, 4);
      }
      break;
    }

    case 'neptune': {
      // Vivid deep cobalt and ultramarine with bright white methane cirrus cloud streaks
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#1d4ed8');
      grad.addColorStop(0.3, '#2563eb');
      grad.addColorStop(0.5, '#1e40af');
      grad.addColorStop(0.7, '#1d4ed8');
      grad.addColorStop(1, '#172554');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // High altitude white methane cloud bands
      for (let i = 0; i < 45; i++) {
        const x = Math.random() * width;
        const y = 80 + Math.random() * (height - 160);
        const rx = 60 + Math.random() * 140;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.beginPath();
        ctx.ellipse(x, y, rx, 3.5, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Great Dark Spot (Storm)
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.ellipse(width * 0.45, height * 0.42, 45, 22, 0.1, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'ceres': {
      // Dark grey carbonaceous chondrite surface with bright sodium carbonate spots
      ctx.fillStyle = '#475569';
      ctx.fillRect(0, 0, width, height);
      // Ancient crater scars
      ctx.fillStyle = '#334155';
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.arc(x, y, 3 + Math.random() * 18, 0, Math.PI * 2);
        ctx.fill();
      }
      // Occator Crater Cerealia & Vinalia Faculae (glowing white sodium carbonate salt spots)
      ctx.fillStyle = '#ffffff';
      const spotX = width * 0.45;
      const spotY = height * 0.48;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(spotX, spotY, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(spotX + (Math.random() - 0.5) * 25, spotY + (Math.random() - 0.5) * 20, 2 + Math.random() * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'pluto': {
      // Reddish-brown tholins with bright cream Sputnik Planitia nitrogen heart
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#78350f');
      grad.addColorStop(0.25, '#9a3412');
      grad.addColorStop(0.5, '#b45309');
      grad.addColorStop(0.75, '#7c2d12');
      grad.addColorStop(1, '#451a03');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Dark equatorial Cthulhu Macula belt
      ctx.fillStyle = '#3e1706';
      for (let i = 0; i < 80; i++) {
        const x = (width * 0.1) + Math.random() * (width * 0.5);
        const y = height * 0.55 + (Math.random() - 0.5) * 90;
        ctx.beginPath();
        ctx.ellipse(x, y, 20 + Math.random() * 40, 15 + Math.random() * 25, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Sputnik Planitia (Bright nitrogen-ice heart lobe)
      ctx.fillStyle = '#fef3c7';
      const heartX = width * 0.65;
      const heartY = height * 0.48;
      ctx.beginPath();
      ctx.ellipse(heartX - 30, heartY, 55, 75, -0.2, 0, Math.PI * 2);
      ctx.ellipse(heartX + 25, heartY - 5, 48, 65, 0.25, 0, Math.PI * 2);
      ctx.fill();

      // Rugged water-ice mountain ranges (Hillary Montes)
      ctx.fillStyle = '#fef08a';
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(heartX - 60 + Math.random() * 30, heartY - 40 + Math.random() * 80, 2 + Math.random() * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'haumea': {
      // Elongated rapid-spinning dwarf planet: Bright crystalline water-ice with reddish dark spot
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(0, 0, width, height);
      // Subtle crystalline striations
      ctx.fillStyle = '#cbd5e1';
      for (let y = 0; y < height; y += 8) {
        ctx.fillRect(0, y, width, 2 + Math.sin(y * 0.1) * 2);
      }
      // Dark reddish tholin impact spot
      ctx.fillStyle = '#991b1b';
      ctx.beginPath();
      ctx.ellipse(width * 0.35, height * 0.5, 35, 20, 0.3, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'makemake': {
      // Reddish methane & ethane ice pebble landscape
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#c2410c');
      grad.addColorStop(0.5, '#ea580c');
      grad.addColorStop(1, '#9a3412');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      // Methane frost grains
      ctx.fillStyle = '#fed7aa';
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.arc(x, y, 1 + Math.random() * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'eris': {
      // Ultra-reflective, brilliant frosted methane snow (albedo 0.96)
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#f8fafc');
      grad.addColorStop(0.5, '#f1f5f9');
      grad.addColorStop(1, '#e2e8f0');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      // Delicate crystalline frosts
      ctx.fillStyle = '#cbd5e1';
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.ellipse(x, y, 10 + Math.random() * 25, 5 + Math.random() * 12, Math.random(), 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'io': {
      // "Pizza world": Sulfur yellows, fiery oranges, and black volcanic caldera lakes
      ctx.fillStyle = '#eab308';
      ctx.fillRect(0, 0, width, height);
      // Sulfur dioxide frost patches
      ctx.fillStyle = '#fef08a';
      for (let i = 0; i < 80; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * width, Math.random() * height, 20 + Math.random() * 50, 15 + Math.random() * 35, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      // Volcanic hotspots & active calderas (Loki Patera, Pele)
      for (let i = 0; i < 60; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        // Red sulfur ring
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(x, y, 8 + Math.random() * 14, 0, Math.PI * 2);
        ctx.fill();
        // Black lava center
        ctx.fillStyle = '#18181b';
        ctx.beginPath();
        ctx.arc(x, y, 3 + Math.random() * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'europa': {
      // Smooth porcelain-white water ice with reddish-brown fractured lineae (chaos terrain)
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);
      // Subsurface ocean fracture lines (Lineae)
      ctx.strokeStyle = '#991b1b';
      ctx.lineWidth = 2;
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        let curX = Math.random() * width;
        let curY = Math.random() * height;
        ctx.moveTo(curX, curY);
        for (let j = 0; j < 5; j++) {
          curX += (Math.random() - 0.5) * 120;
          curY += (Math.random() - 0.5) * 60;
          ctx.lineTo(curX, curY);
        }
        ctx.stroke();
      }
      // Warm brownish mottling
      ctx.fillStyle = 'rgba(180, 83, 9, 0.15)';
      for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 20 + Math.random() * 40, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'ganymede': {
      // Dark ancient cratered regions mixed with bright grooved tectonics
      ctx.fillStyle = '#64748b';
      ctx.fillRect(0, 0, width, height);
      // Bright grooved terrain (sulci)
      ctx.fillStyle = '#cbd5e1';
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.ellipse(x, y, 40 + Math.random() * 80, 15 + Math.random() * 25, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      // Impact ray craters
      ctx.fillStyle = '#f8fafc';
      for (let i = 0; i < 300; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 1 + Math.random() * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'callisto': {
      // Primordial dark grey heavily cratered ancient ice/rock world
      ctx.fillStyle = '#334155';
      ctx.fillRect(0, 0, width, height);
      // Dense crater field
      ctx.fillStyle = '#94a3b8';
      for (let i = 0; i < 900; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 1.5 + Math.random() * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      // Valhalla multi-ring impact basin
      ctx.strokeStyle = '#cbd5e1';
      const valX = width * 0.4;
      const valY = height * 0.45;
      for (let r = 15; r < 85; r += 12) {
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(valX, valY, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      break;
    }

    case 'titan': {
      // Thick golden-orange nitrogen/methane haze atmosphere with darker polar lake zones
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, '#d97706');
      grad.addColorStop(0.3, '#f59e0b');
      grad.addColorStop(0.5, '#fbbf24');
      grad.addColorStop(0.7, '#f59e0b');
      grad.addColorStop(1, '#b45309');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Dark liquid methane seas in north polar region (Kraken Mare, Ligeia Mare)
      ctx.fillStyle = '#451a03';
      for (let i = 0; i < 15; i++) {
        const x = width * 0.3 + Math.random() * (width * 0.4);
        const y = 30 + Math.random() * 60;
        ctx.beginPath();
        ctx.ellipse(x, y, 25 + Math.random() * 45, 12 + Math.random() * 25, Math.random() * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'enceladus': {
      // Brilliant snow-white pristine ice with cyan south-polar Tiger Stripe thermal rifts
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      // Subtle icy mottling
      ctx.fillStyle = '#f1f5f9';
      for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 10 + Math.random() * 30, 0, Math.PI * 2);
        ctx.fill();
      }
      // South pole Tiger Stripes (Alexandria, Cairo, Baghdad, Damascus Sulci)
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 3;
      for (let i = 0; i < 4; i++) {
        const yStart = height * 0.82 + i * 14;
        ctx.beginPath();
        ctx.moveTo(width * 0.35, yStart);
        ctx.bezierCurveTo(width * 0.45, yStart + 8, width * 0.55, yStart - 8, width * 0.65, yStart + 4);
        ctx.stroke();
      }
      break;
    }

    case 'triton': {
      // Cantaloupe melon terrain: Pale celadon green with pinkish nitrogen frost & dark cryogeyser streaks
      ctx.fillStyle = '#a7f3d0';
      ctx.fillRect(0, 0, width, height);
      // Pinkish southern nitrogen ice cap
      ctx.fillStyle = '#fbcfe8';
      ctx.beginPath();
      ctx.ellipse(width * 0.5, height * 0.85, width * 0.45, height * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();
      // Cantaloupe dimple cells
      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 1;
      for (let i = 0; i < 120; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * (height * 0.7), 8 + Math.random() * 16, 0, Math.PI * 2);
        ctx.stroke();
      }
      // Dark nitrogen cryogeyser smoke trails
      ctx.fillStyle = '#1e293b';
      for (let i = 0; i < 20; i++) {
        const gx = width * 0.3 + Math.random() * (width * 0.4);
        const gy = height * 0.75 + Math.random() * 60;
        ctx.beginPath();
        ctx.ellipse(gx, gy, 3, 14, 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }

    case 'charon': {
      // Gray cratered ice world with dark red tholin north polar hood (Mordor Macula)
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(0, 0, width, height);
      // Craters and chasms
      ctx.fillStyle = '#64748b';
      for (let i = 0; i < 200; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 2 + Math.random() * 8, 0, Math.PI * 2);
        ctx.fill();
      }
      // Argo Chasma canyon system across equator
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(width * 0.1, height * 0.52);
      ctx.lineTo(width * 0.9, height * 0.54);
      ctx.stroke();

      // Mordor Macula (reddish tholin cap on North Pole)
      ctx.fillStyle = '#7c2d12';
      ctx.beginPath();
      ctx.ellipse(width * 0.5, 30, width * 0.25, 45, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'moon':
    default: {
      // Cratered lunar regolith
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(0, 0, width, height);
      // Maria (dark basalt seas)
      ctx.fillStyle = '#475569';
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.ellipse(x, y, 50 + Math.random() * 80, 40 + Math.random() * 60, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      // Bright craters
      for (let i = 0; i < 800; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.arc(x, y, 2 + Math.random() * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  textureCache.set(planetId, texture);
  return texture;
}

/**
 * Earth cloud layer texture (transparent with realistic white swirl clouds)
 */
export function createEarthCloudsTexture(): THREE.CanvasTexture {
  const cacheKey = 'earth_clouds';
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey)!;
  }

  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  ctx.clearRect(0, 0, width, height);

  // Swirling weather systems and storm fronts
  for (let i = 0; i < 240; i++) {
    const x = Math.random() * width;
    const y = 40 + Math.random() * (height - 80);
    const rx = 30 + Math.random() * 90;
    const ry = 8 + Math.random() * 25;
    const rot = (Math.random() - 0.5) * 0.6;
    ctx.fillStyle = `rgba(255, 255, 255, ${0.35 + Math.random() * 0.45})`;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2);
    ctx.fill();
  }

  // Tropical convergence zone cloud belts
  for (let x = 0; x < width; x += 10) {
    const y1 = height * 0.5 + Math.sin(x * 0.05) * 15;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(x, y1, 14 + Math.random() * 10, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  textureCache.set(cacheKey, texture);
  return texture;
}

/**
 * Saturn rings high-resolution alpha texture
 */
export function createSaturnRingsTexture(): THREE.CanvasTexture {
  const cacheKey = 'saturn_rings_hd';
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey)!;
  }

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 16;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, 512, 0);
  grad.addColorStop(0.0, 'rgba(0, 0, 0, 0)');
  grad.addColorStop(0.08, 'rgba(195, 175, 135, 0.25)'); // C Ring (Crepe)
  grad.addColorStop(0.24, 'rgba(215, 195, 155, 0.45)');
  grad.addColorStop(0.28, 'rgba(240, 225, 185, 0.95)'); // B Ring (Bright & dense)
  grad.addColorStop(0.55, 'rgba(235, 215, 175, 0.98)');
  grad.addColorStop(0.58, 'rgba(0, 0, 0, 0)'); // Cassini Division gap!
  grad.addColorStop(0.65, 'rgba(0, 0, 0, 0)');
  grad.addColorStop(0.67, 'rgba(225, 205, 165, 0.85)'); // A Ring
  grad.addColorStop(0.85, 'rgba(215, 195, 155, 0.75)');
  grad.addColorStop(0.89, 'rgba(0, 0, 0, 0)'); // Encke gap
  grad.addColorStop(0.92, 'rgba(205, 185, 145, 0.6)');
  grad.addColorStop(0.97, 'rgba(195, 175, 135, 0.2)');
  grad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 16);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  textureCache.set(cacheKey, texture);
  return texture;
}

/**
 * Creates an irregular, bumpy asteroid geometry (avoiding flat polygonal blocks!)
 */
export function createIrregularAsteroidGeometry(radius: number, detail = 3): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(radius, detail);
  const posAttr = geo.attributes.position;
  const vertex = new THREE.Vector3();

  // Pseudo-random noise perturbation for realistic craggy shape
  for (let i = 0; i < posAttr.count; i++) {
    vertex.fromBufferAttribute(posAttr, i);
    const length = vertex.length();
    // Deterministic displacement based on coordinates
    const noise = 
      Math.sin(vertex.x * 4.2) * 0.12 + 
      Math.cos(vertex.y * 3.8) * 0.12 + 
      Math.sin(vertex.z * 5.1) * 0.1;
    vertex.normalize().multiplyScalar(length * (1 + noise));
    posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }

  geo.computeVertexNormals();
  return geo;
}
