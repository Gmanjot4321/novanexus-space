const fs = require('fs');
let file = fs.readFileSync('src/components/GlobalBackground.tsx', 'utf-8');

file = file.replace(
`      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-black"></div>`,
`      {/* Deep Rich Base */}
      <div className="absolute inset-0 bg-[#020617]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-transparent to-black"></div>`
);

file = file.replace(
`      {/* Abstract Glowing Orbs (Glassmorphism aesthetics) */}
      <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-600/10 blur-[130px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[140px] mix-blend-screen opacity-40 animate-pulse" style={{ animationDuration: '10s' }}></div>`,
`      {/* Hyper-realistic Glassmorphism Orbs / Aurora Mesh */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-cyan-500/15 blur-[120px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute top-[20%] right-[0%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-600/15 blur-[140px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[60vw] rounded-full bg-indigo-600/15 blur-[150px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '12s' }}></div>`
);

file = file.replace(
`      {/* Abstract sleek waves (SVG) */}`,
`      {/* Sleek Pinterest-style motion waves */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)' }}></div>
      
      {/* Abstract sleek waves (SVG) */}`
);

fs.writeFileSync('src/components/GlobalBackground.tsx', file);
