import { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sun } from './Sun';
import { Planet } from './Planet';
import { TrojanCluster } from './TrojanAsteroids';
import { planetaryData, jupiterTrojanPoints } from '../data/solarSystem';

export function SolarSystem() {
  const [time, setTime] = useState(0);

  useFrame((state, delta) => {
    setTime(prev => prev + delta * 50); // Speed up time for visualization
  });

  return (
    <group>
      {/* Ambient light for general visibility */}
      <ambientLight intensity={0.1} />
      
      {/* Sun */}
      <Sun />
      
      {/* Planets */}
      {planetaryData.map((planet) => (
        <Planet key={planet.name} data={planet} time={time} />
      ))}
      
      {/* Trojan Asteroids */}
      <TrojanCluster position={jupiterTrojanPoints.l4} name="Greek Camp" />
      <TrojanCluster position={jupiterTrojanPoints.l5} name="Trojan Camp" />
      
      {/* Enhanced controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        maxDistance={25}
        minDistance={2}
      />
    </group>
  );
}