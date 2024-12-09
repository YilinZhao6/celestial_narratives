import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sun } from './Sun';
import { Planet } from './Planet';
import { TrojanCluster } from './TrojanAsteroids';
import { planetaryData } from '../../data/solarSystem';
import * as THREE from 'three';

interface SolarSystemProps {
  onCampClick: (camp: 'greek' | 'trojan') => void;
}

export function SolarSystem({ onCampClick }: SolarSystemProps) {
  const [time, setTime] = useState(0);
  const jupiterOrbitRadius = planetaryData[4].orbitRadius;

  useFrame((state, delta) => {
    setTime(prev => prev + delta * 50);
  });

  // Calculate positions of Trojan camps based on Jupiter's orbit
  const angle = (time / planetaryData[4].orbitalPeriod) * Math.PI * 2;
  const jupiterX = Math.cos(angle) * jupiterOrbitRadius;
  const jupiterZ = Math.sin(angle) * jupiterOrbitRadius;

  // L4 (Greek Camp) leads Jupiter by 60°
  const greekAngle = angle + (Math.PI / 3);
  const greekPosition = new THREE.Vector3(
    Math.cos(greekAngle) * jupiterOrbitRadius,
    0,
    Math.sin(greekAngle) * jupiterOrbitRadius
  );

  // L5 (Trojan Camp) trails Jupiter by 60°
  const trojanAngle = angle - (Math.PI / 3);
  const trojanPosition = new THREE.Vector3(
    Math.cos(trojanAngle) * jupiterOrbitRadius,
    0,
    Math.sin(trojanAngle) * jupiterOrbitRadius
  );

  return (
    <group>
      <Sun />
      {planetaryData.map((planet) => (
        <Planet key={planet.name} data={planet} time={time} />
      ))}
      <TrojanCluster 
        position={greekPosition}
        name="Greek Camp (L4)"
        onClick={() => onCampClick('greek')}
        isGreek={true}
      />
      <TrojanCluster 
        position={trojanPosition}
        name="Trojan Camp (L5)"
        onClick={() => onCampClick('trojan')}
        isGreek={false}
      />
    </group>
  );
}