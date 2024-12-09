import { Canvas } from '@react-three/fiber';
import { useState, Suspense } from 'react';
import { StarField } from '../components/StarField';
import { ConstellationLines } from '../components/ConstellationLines';
import { InfoPanel } from '../components/InfoPanel';
import { ConstellationSelector } from '../components/ConstellationSelector';
import { SolarSystem } from '../components/solar-system/SolarSystem';
import { Scene } from '../components/three/Scene';
import { Controls } from '../components/three/Controls';
import { constellationsData } from '../data/constellations';
import { Star } from '../types/constellation';
import { CampInfo } from '../components/ui/CampInfo';

export function ConstellationViewer() {
  const [currentConstellation, setCurrentConstellation] = useState(constellationsData[0].id);
  const [selectedStar, setSelectedStar] = useState<Star | null>(null);
  const [selectedCamp, setSelectedCamp] = useState<'greek' | 'trojan' | null>(null);

  const constellation = constellationsData.find(c => c.id === currentConstellation)!;

  const handleStarClick = (star: Star) => {
    setSelectedStar(star);
  };

  const handleConstellationChange = (newConstellation: string) => {
    setCurrentConstellation(newConstellation);
    setSelectedStar(null);
    setSelectedCamp(null);
  };

  const handleCampClick = (camp: 'greek' | 'trojan') => {
    setSelectedCamp(camp);
    setSelectedStar(null);
  };

  return (
    <div className="w-full h-screen bg-black relative text-white">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <Scene />
          {currentConstellation === 'TRJ' ? (
            <SolarSystem onCampClick={handleCampClick} />
          ) : (
            <>
              <StarField 
                currentConstellation={currentConstellation}
                onStarClick={handleStarClick}
              />
              <ConstellationLines currentConstellation={currentConstellation} />
            </>
          )}
          <Controls />
        </Suspense>
      </Canvas>
      
      <ConstellationSelector
        currentConstellation={currentConstellation}
        onConstellationChange={handleConstellationChange}
      />
      
      {selectedCamp ? (
        <CampInfo 
          camp={selectedCamp} 
          onClose={() => setSelectedCamp(null)}
        />
      ) : (
        <InfoPanel
          constellation={constellation}
          selectedStar={selectedStar}
        />
      )}
    </div>
  );
}