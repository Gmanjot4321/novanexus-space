import React from 'react';

export const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
      {/* Deep Rich Space Base */}
      <div className="absolute inset-0 bg-[#020617]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-fuchsia-950/20 via-transparent to-black"></div>

      {/* Hyper-realistic Pinterest Aesthetic Aurora Glow Mesh */}
      <div className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] rounded-full bg-cyan-500/12 blur-[140px] mix-blend-screen opacity-70 animate-pulse" style={{ animationDuration: '9s' }}></div>
      <div className="absolute top-[25%] right-[0%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-600/12 blur-[150px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '13s' }}></div>
      <div className="absolute -bottom-[20%] left-[15%] w-[70vw] h-[60vw] rounded-full bg-indigo-600/12 blur-[160px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '11s' }}></div>
      
      {/* Pinterest-style dynamic flowing space wave vectors */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.22] mix-blend-screen pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path 
          fill="none" 
          stroke="url(#globalGrad1)" 
          strokeWidth="2.5" 
          d="M-100,400 C200,180 500,620 900,380 C1150,230 1350,480 1600,420" 
          className="animate-pulse" 
          style={{ animationDuration: '7s' }} 
        />
        <path 
          fill="none" 
          stroke="url(#globalGrad2)" 
          strokeWidth="3.5" 
          d="M-100,520 C350,720 750,180 1150,560 C1350,720 1550,300 1600,450" 
          className="animate-pulse" 
          style={{ animationDuration: '10s' }} 
        />
        <path 
          fill="none" 
          stroke="url(#globalGrad3)" 
          strokeWidth="1.5" 
          d="M-100,280 C400,220 850,700 1300,250 C1450,120 1550,380 1600,320" 
          className="animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        
        <defs>
          <linearGradient id="globalGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="globalGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="40%" stopColor="#d946ef" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="globalGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Light Star Field / Ambient Micro-Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.06)_0%,_transparent_70%)] pointer-events-none" />
    </div>
  );
};
