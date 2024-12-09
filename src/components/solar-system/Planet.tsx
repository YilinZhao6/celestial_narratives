import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import { PlanetData } from '../../types/solar-system';
import * as THREE from 'three';

interface PlanetProps {
  data: PlanetData;
  time: number;
}

export function Planet({ data, time }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  const angle = (time / data.orbitalPeriod) * Math.PI * 2;
  const position: [number, number, number] = [
    Math.cos(angle) * data.orbitRadius,
    0,
    Math.sin(angle) * data.orbitRadius
  ];

  // Enhanced size scaling
  const getScaledSize = () => {
    const baseScale = 0.3;
    if (data.name === "Jupiter") {
      return baseScale * 2.5; // Make Jupiter more prominent
    }
    const earthSize = baseScale;
    const scale = data.diameter / 12742; // Earth's diameter
    return Math.max(earthSize * scale, baseScale * 0.4);
  };

  const size = getScaledSize();

  // Create orbit line with more segments for smoother appearance
  const orbitPoints = new Array(128).fill(0).map((_, i) => {
    const theta = (i / 127) * Math.PI * 2;
    return new THREE.Vector3(
      Math.cos(theta) * data.orbitRadius,
      0,
      Math.sin(theta) * data.orbitRadius
    );
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 
        (0.01 * Math.sign(data.rotationPeriod)) / Math.abs(data.rotationPeriod);
    }
  });

  return (
    <group>
      {/* Enhanced orbit line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={orbitPoints.length}
            array={Float32Array.from(orbitPoints.flatMap(v => [v.x, v.y, v.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#444444" opacity={0.3} transparent />
      </line>

      {/* Planet sphere with enhanced materials */}
      <mesh 
        ref={meshRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          color={data.color}
          metalness={0.4}
          roughness={0.7}
          emissive={hovered ? data.color : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>

      {/* Enhanced planet label */}
      <Text
        position={[position[0], size + 0.3, position[2]]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        backgroundColor="rgba(0,0,0,0.5)"
        padding={0.1}
      >
        {data.name}
      </Text>

      {/* Information popup on hover */}
      {hovered && (
        <Html position={[position[0], size + 0.8, position[2]]}>
          <div className="bg-black/80 text-white p-2 rounded-lg text-sm whitespace-nowrap">
            <p>Diameter: {data.diameter.toLocaleString()} km</p>
            <p>Orbital Period: {data.orbitalPeriod.toFixed(2)} Earth days</p>
          </div>
        </Html>
      )}
    </group>
  );
}