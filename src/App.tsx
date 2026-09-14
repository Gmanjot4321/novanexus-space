import React, { useState, useCallback, useEffect } from 'react';
import { CelestialBody, ViewMode } from './types';
import { CELESTIAL_BODIES } from './data/celestialData';
import { SolarSystem3D } from './components/SolarSystem3D';
import { PhenomenaSimulators } from './components/PhenomenaSimulators';
import { NeoRadarView } from './components/NeoRadarView';
import { KnowledgeBaseView } from './components/KnowledgeBaseView';
import { ComparisonLab } from './components/ComparisonLab';
import { DashboardUI } from './components/DashboardUI';
import { HomeView } from './components/HomeView';
import { DashboardsView } from './components/DashboardsView';
import { SpaceHubView } from './components/SpaceHubView';
import { RelativityLabView } from './components/RelativityLabView';
import { GlobalBackground } from './components/GlobalBackground';
import { SpaceWaveIntro } from './components/SpaceWaveIntro';
import { audioEngine } from './utils/audioEngine';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [currentMode, setCurrentMode] = useState<ViewMode>('home');
  const [selectedBody, setSelectedBody] = useState<CelestialBody | null>(CELESTIAL_BODIES[0]);
  const [currentFactIdx, setCurrentFactIdx] = useState<number>(0);

  // Instantly terminate any speech narration whenever navigating between sections
  useEffect(() => {
    audioEngine.stopSpeech();
  }, [currentMode]);

  // Comparison Lab Target Entities
  const [comparisonEntityAId, setComparisonEntityAId] = useState<string>('earth');
  const [comparisonEntityBId, setComparisonEntityBId] = useState<string>('luna');

  // Solar system 3D view controls
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [showOrbits, setShowOrbits] = useState<boolean>(true);
  const [scaleMode, setScaleMode] = useState<'presentation' | 'realistic'>('presentation');
  const [timeScale, setTimeScale] = useState<number>(1);

  // Cycle to next fact for selected body
  const handleCycleFact = useCallback(() => {
    if (selectedBody && selectedBody.funnyFacts && selectedBody.funnyFacts.length > 0) {
      setCurrentFactIdx((prev) => (prev + 1) % selectedBody.funnyFacts.length);
    }
  }, [selectedBody]);

  // Reset fact index when selected body changes
  const handleSelectBody = useCallback((body: CelestialBody | null) => {
    setSelectedBody(body);
    setCurrentFactIdx(0);
  }, []);

  // Switch directly to Comparison Lab with targeted entities
  const handleStartComparison = useCallback((entityAId: string, entityBId?: string) => {
    setComparisonEntityAId(entityAId);
    if (entityBId) {
      setComparisonEntityBId(entityBId);
    } else {
      setComparisonEntityBId(entityAId === 'earth' ? 'mars' : 'earth');
    }
    setCurrentMode('comparison_lab');
  }, []);

  const handleToggleLabels = useCallback(() => setShowLabels(prev => !prev), []);
  const handleToggleOrbits = useCallback(() => setShowOrbits(prev => !prev), []);
  const handleToggleScaleMode = useCallback(() => {
    setScaleMode(prev => prev === 'presentation' ? 'realistic' : 'presentation');
  }, []);

  const currentFact = selectedBody && selectedBody.funnyFacts.length > 0
    ? selectedBody.funnyFacts[currentFactIdx % selectedBody.funnyFacts.length]
    : '';

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#020617] font-sans text-white select-none" style={{ backgroundColor: '#020617' }}>
      {/* Space Wave Initial Cinematic Intro Animation */}
      {showIntro && (
        <SpaceWaveIntro onComplete={() => setShowIntro(false)} />
      )}

      {['knowledge_base', 'comparison', 'comparison_lab', 'dashboards', 'space_hub'].includes(currentMode) && <GlobalBackground />}
      
      {/* Primary Active Mode Canvas/View */}
      <main className="w-full h-full bg-[#020617]" style={{ backgroundColor: '#020617' }}>
        {currentMode === 'home' && (
          <HomeView 
            onNavigate={(mode) => setCurrentMode(mode)} 
            onPlayIntro={() => setShowIntro(true)}
          />
        )}
        {currentMode === 'solar_system' && (
          <SolarSystem3D
            bodies={CELESTIAL_BODIES}
            selectedBody={selectedBody}
            onSelectBody={handleSelectBody}
            showLabels={showLabels}
            onToggleLabels={handleToggleLabels}
            showOrbits={showOrbits}
            onToggleOrbits={handleToggleOrbits}
            scaleMode={scaleMode}
            onToggleScaleMode={handleToggleScaleMode}
            timeScale={timeScale}
            onSetTimeScale={setTimeScale}
          />
        )}

        {currentMode === 'phenomena' && (
          <PhenomenaSimulators onBackToSolarSystem={() => setCurrentMode('solar_system')} />
        )}

        {currentMode === 'neo_radar' && (
          <NeoRadarView />
        )}

        {currentMode === 'knowledge_base' && (
          <KnowledgeBaseView />
        )}

        {currentMode === 'comparison_lab' && (
          <ComparisonLab 
            initialEntityAId={comparisonEntityAId}
            initialEntityBId={comparisonEntityBId}
          />
        )}
        {currentMode === 'dashboards' && (
          <DashboardsView onNavigate={(mode) => setCurrentMode(mode)} />
        )}
        {currentMode === 'space_hub' && (
          <SpaceHubView />
        )}
        {currentMode === 'relativity_lab' && (
          <RelativityLabView />
        )}
      </main>

      {/* Modern Glassmorphic Dashboard Overlay */}
      <DashboardUI
        currentMode={currentMode}
        onSelectMode={setCurrentMode}
        selectedBody={selectedBody}
        onSelectBody={handleSelectBody}
        bodies={CELESTIAL_BODIES}
        currentFact={currentFact}
        onCycleFact={handleCycleFact}
        onStartComparison={handleStartComparison}
      />
    </div>
  );
}
