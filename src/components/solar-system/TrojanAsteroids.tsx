import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { createGaussianPoint } from '../../utils/math';

interface TrojanClusterProps {
  position: THREE.Vector3;
  name: string;
  onClick: () => void;
  isGreek: boolean;
}

export function TrojanCluster({ position, name, onClick, isGreek }: TrojanClusterProps) {
  const groupRef = useRef<THREE.Group>(null!);
  
  // Scientific parameters
  const particleCount = isGreek ? 2800 : 4600;
  const clusterRadius = 2.5;
  const verticalSpread = 0.8;
  
  const { positions, sizes, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const point = createGaussianPoint(clusterRadius, verticalSpread);
      const i3 = i * 3;
      
      positions[i3] = point.x;
      positions[i3 + 1] = point.y;
      positions[i3 + 2] = point.z;
      
      // Power law distribution for sizes (more small asteroids)
      const sizeScale = Math.pow(Math.random(), 3) * 0.03 + 0.005;
      sizes[i] = sizeScale;
      
      // Color variation based on asteroid composition
      const baseColor = new THREE.Color(0xffd700);
      const variation = Math.random() * 0.2 - 0.1;
      const color = new THREE.Color(
        baseColor.r + variation,
        baseColor.g + variation,
        baseColor.b + variation * 0.5
      );
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return { positions, sizes, colors };
  }, [particleCount, clusterRadius, verticalSpread]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group position={position}>
      <group ref={groupRef} onClick={onClick}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={positions}
              itemSize={3}
              usage={THREE.StaticDrawUsage}
            />
            <bufferAttribute
              attach="attributes-size"
              count={particleCount}
              array={sizes}
              itemSize={1}
              usage={THREE.StaticDrawUsage}
            />
            <bufferAttribute
              attach="attributes-color"
              count={particleCount}
              array={colors}
              itemSize={3}
              usage={THREE.StaticDrawUsage}
            />
          </bufferGeometry>
          <pointsMaterial
            vertexColors
            size={0.02}
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
            depthWrite={false}
          />
        </points>
      </group>
      
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        renderOrder={1}
        depthWrite={false}
        depthTest={false}
        billboard
      >
        {name}
      </Text>
    </group>
  );
}