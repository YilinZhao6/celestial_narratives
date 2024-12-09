import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { PlanetData } from '../data/solarSystem';
import * as THREE from 'three';

interface PlanetProps {
  data: PlanetData;
  time: number;
}

export function Planet({ data, time }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Calculate planet position based on orbital period
  const angle = (time / data.orbitalPeriod) * Math.PI * 2;
  const position: [number, number, number] = [
    Math.cos(angle) * data.orbitRadius,
    0,
    Math.sin(angle) * data.orbitRadius
  ];

  // Create orbit line
  const orbitPoints = new Array(64).fill(0).map((_, i) => {
    const theta = (i / 63) * Math.PI * 2;
    return new THREE.Vector3(
      Math.cos(theta) * data.orbitRadius,
      0,
      Math.sin(theta) * data.orbitRadius
    );
  });

  // Scale planet size (normalized to Earth = 1)
  const size = (data.diameter / 12742) * 0.15;

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate planet on its axis
      meshRef.current.rotation.y += 
        (0.01 * Math.sign(data.rotationPeriod)) / Math.abs(data.rotationPeriod);
    }
  });

  return (
    <group>
      {/* Orbit line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={orbitPoints.length}
            array={Float32Array.from(orbitPoints.flatMap(v => [v.x, v.y, v.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#666666" opacity={0.3} transparent />
      </line>

      {/* Planet */}
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={data.color}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Label */}
      <Text
        position={[position[0], size + 0.2, position[2]]}
        fontSize={0.15}
        color="white"
      >
        {data.name}
      </Text>
    </group>
  );
}