import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text, Billboard } from '@react-three/drei';

interface TrojanClusterProps {
  position: THREE.Vector3;
  name: string;
  onClick: () => void;
}

export function TrojanCluster({ position, name, onClick }: TrojanClusterProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const particleCount = 200;
  
  const particlePositions = new Float32Array(particleCount * 3);
  const particleSizes = new Float32Array(particleCount);
  const spread = { x: 0.8, y: 0.3, z: 0.8 };
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    particlePositions[i3] = (Math.random() - 0.5) * spread.x;
    particlePositions[i3 + 1] = (Math.random() - 0.5) * spread.y;
    particlePositions[i3 + 2] = (Math.random() - 0.5) * spread.z;
    particleSizes[i] = Math.random() * 0.02 + 0.01;
  }

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Particle cluster */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particleCount}
            array={particleSizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#FFD700"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Text label */}
      <Billboard position={[0, 0.8, 0]}>
        <Text
          fontSize={0.2}
          color="white"
          onClick={onClick}
          anchorX="center"
          anchorY="middle"
          renderOrder={1}
          material-depthWrite={false}
          material-depthTest={false}
        >
          {name}
        </Text>
      </Billboard>
      
      {/* Invisible click target */}
      <mesh onClick={onClick} visible={false}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
}