import React from 'react';

interface NovaNexusLogoProps {
  className?: string;
  size?: number | string;
  animated?: boolean;
}

export const NovaNexusLogo: React.FC<NovaNexusLogoProps> = ({ 
  className = '', 
  size = 96,
  animated = true 
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient Pulsing Backlight Glow */}
      <div 
        className={`absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/40 via-indigo-500/30 to-fuchsia-500/40 blur-xl ${
          animated ? 'animate-pulse' : ''
        }`}
        style={{ animationDuration: '3s' }}
      />

      {/* SVG Emblem */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_0_25px_rgba(6,182,212,0.65)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="nexusGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          <linearGradient id="nexusGradSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>

          <linearGradient id="nexusGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <radialGradient id="coreSingularity" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#67e8f9" />
            <stop offset="60%" stopColor="#6366f1" />
            <stop offset="90%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          <filter id="nexusGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hexagonal Tech Frame */}
        <polygon
          points="100,8 178,52 178,148 100,192 22,148 22,52"
          stroke="url(#nexusGradPrimary)"
          strokeWidth="2.5"
          strokeDasharray="8 6"
          fill="none"
          opacity="0.45"
        />

        {/* Outer Accent Corner Brackets */}
        <path d="M 100 8 L 120 19" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 100 8 L 80 19" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 178 52 L 166 72" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 178 148 L 166 128" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 100 192 L 120 181" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 100 192 L 80 181" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 22 148 L 34 128" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 22 52 L 34 72" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.9" />

        {/* Outer Concentric Radar Compass Ring */}
        <circle
          cx="100"
          cy="100"
          r="82"
          stroke="url(#nexusGradPrimary)"
          strokeWidth="1.2"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Orbital Keplerian Ellipse 1 (Rotated -32 deg) */}
        <g transform="rotate(-32 100 100)">
          <ellipse
            cx="100"
            cy="100"
            rx="74"
            ry="26"
            stroke="url(#nexusGradPrimary)"
            strokeWidth="3.2"
            fill="none"
            filter="url(#nexusGlowFilter)"
          />
          {/* Orbiting Satellite 1 */}
          <circle cx="174" cy="100" r="4.5" fill="#38bdf8" filter="url(#nexusGlowFilter)" />
          <circle cx="174" cy="100" r="2" fill="#ffffff" />
          {/* Opposite node */}
          <circle cx="26" cy="100" r="3" fill="#818cf8" opacity="0.75" />
        </g>

        {/* Orbital Keplerian Ellipse 2 (Rotated 38 deg) */}
        <g transform="rotate(38 100 100)">
          <ellipse
            cx="100"
            cy="100"
            rx="74"
            ry="26"
            stroke="url(#nexusGradSecondary)"
            strokeWidth="3.2"
            fill="none"
            filter="url(#nexusGlowFilter)"
          />
          {/* Orbiting Satellite 2 */}
          <circle cx="174" cy="100" r="4.5" fill="#f43f5e" filter="url(#nexusGlowFilter)" />
          <circle cx="174" cy="100" r="2" fill="#ffffff" />
          {/* Opposite node */}
          <circle cx="26" cy="100" r="3" fill="#a855f7" opacity="0.75" />
        </g>

        {/* Inner Counter-Orbital Ring (Rotated 90 deg) */}
        <g transform="rotate(90 100 100)">
          <ellipse
            cx="100"
            cy="100"
            rx="56"
            ry="18"
            stroke="url(#nexusGradPrimary)"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            opacity="0.6"
          />
          <circle cx="156" cy="100" r="3.5" fill="#22d3ee" />
        </g>

        {/* Radiant Diamond Starburst / 4-Point Lens Flares */}
        <g filter="url(#nexusGlowFilter)">
          {/* Vertical Lens Spikes */}
          <path
            d="M 100 32 Q 100 100 100 100 Q 100 100 100 168 Q 100 100 100 100 Q 100 100 100 32 Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            opacity="0.85"
          />
          {/* Horizontal Lens Spikes */}
          <path
            d="M 32 100 Q 100 100 100 100 Q 100 100 168 100 Q 100 100 100 100 Q 100 100 32 100 Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            opacity="0.85"
          />

          {/* Diagonal Secondary Micro-Flares */}
          <line x1="62" y1="62" x2="138" y2="138" stroke="#38bdf8" strokeWidth="1.2" opacity="0.5" />
          <line x1="138" y1="62" x2="62" y2="138" stroke="#c084fc" strokeWidth="1.2" opacity="0.5" />
        </g>

        {/* Central Ambient Halo */}
        <circle cx="100" cy="100" r="28" fill="url(#haloGlow)" />

        {/* Central Luminous Singularity / Nova Core */}
        <circle
          cx="100"
          cy="100"
          r="16"
          fill="url(#coreSingularity)"
          filter="url(#nexusGlowFilter)"
        />

        {/* Central Pure White Starlight Core */}
        <circle cx="100" cy="100" r="6" fill="#ffffff" />
        
        {/* Core Diamond Glint */}
        <polygon points="100,90 103,100 100,110 97,100" fill="#ffffff" />
        <polygon points="90,100 100,103 110,100 100,97" fill="#ffffff" />
      </svg>
    </div>
  );
};
