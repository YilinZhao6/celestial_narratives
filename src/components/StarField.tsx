import { useMemo } from 'react';
import { Points } from '@react-three/drei';
import * as THREE from 'three';
import { constellationsData } from '../data/constellations';
import { Star } from '../types/constellation';
import { useStarPositions } from '../hooks/useStarPositions';

interface StarFieldProps {
  currentConstellation: string;
  onStarClick: (star: Star) => void;
}

export function StarField({ currentConstellation, onStarClick }: StarFieldProps) {
  const constellation = constellationsData.find(c => c.id === currentConstellation)!;
  const { positions, sizes, colors, count } = useStarPositions(constellation);
  
  const bufferGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    
    return geometry;
  }, [positions, colors, sizes]);

  const handleClick = (event: any) => {
    event.stopPropagation();
    if (event.index !== undefined && event.index < constellation.stars.length) {
      onStarClick(constellation.stars[event.index]);
    }
  };

  const material = useMemo(() => new THREE.PointsMaterial({
    size: 0.15,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }), []);

  return (
    <primitive 
      object={new THREE.Points(bufferGeometry, material)}
      onClick={handleClick}
      frustumCulled={false}
    />
  );
}