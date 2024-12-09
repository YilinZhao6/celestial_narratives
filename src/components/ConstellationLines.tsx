import { useMemo } from 'react';
import { Line, Sphere, Html } from '@react-three/drei';
import { constellationsData } from '../data/constellations';
import * as THREE from 'three';
import { useConstellationGeometry } from '../hooks/useConstellationGeometry';

interface ConstellationLinesProps {
  currentConstellation: string;
  showLabels?: boolean;
}

export function ConstellationLines({ 
  currentConstellation, 
  showLabels = false 
}: ConstellationLinesProps) {
  const constellation = constellationsData.find(c => c.id === currentConstellation)!;
  
  // Create line segments from boundaries
  const lineSegments = useMemo(() => {
    const segments: THREE.Vector3[][] = [];
    let currentSegment: THREE.Vector3[] = [];
    
    for (let i = 0; i < constellation.boundaries.length; i++) {
      const point = constellation.boundaries[i];
      currentSegment.push(new THREE.Vector3(...point));
      
      // Check if next point starts a new segment
      const nextPoint = constellation.boundaries[i + 1];
      if (!nextPoint || (i < constellation.boundaries.length - 1 && 
          Math.abs(nextPoint[0] - point[0]) > 3 || 
          Math.abs(nextPoint[1] - point[1]) > 3)) {
        segments.push([...currentSegment]);
        currentSegment = [];
      }
    }
    
    if (currentSegment.length > 0) {
      segments.push(currentSegment);
    }
    
    return segments;
  }, [constellation.boundaries]);

  // Create star positions
  const starPositions = useMemo(() => 
    constellation.stars.map(star => 
      new THREE.Vector3(star.x, star.y, star.z)
    ), [constellation.stars]
  );

  // Materials
  const lineMaterial = useMemo(() => {
    const color = constellation.id === 'TRJ' ? '#ffd700' : '#4a9eff';
    return new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.6,
      linewidth: 2
    });
  }, [constellation.id]);

  const sphereMaterial = useMemo(() => 
    new THREE.MeshBasicMaterial({
      color: constellation.id === 'TRJ' ? 0xffd700 : 0x4a9eff,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }), [constellation.id]
  );

  // Calculate star sizes based on magnitude
  const getStarSize = (magnitude: number) => {
    // Brighter stars (lower magnitude) should be larger
    return Math.max(0.03, 0.08 - (magnitude * 0.01));
  };

  return (
    <group>
      {/* Render each line segment */}
      {lineSegments.map((segment, idx) => (
        <Line
          key={`line-${idx}`}
          points={segment}
          color={lineMaterial.color}
          lineWidth={2}
          transparent
          opacity={0.6}
          frustumCulled={false}
        />
      ))}

      {/* Render stars */}
      {constellation.stars.map((star, index) => (
        <group key={star.id} position={starPositions[index]}>
          <Sphere
            args={[getStarSize(star.magnitude), 16, 16]}
            material={sphereMaterial}
          >
            {showLabels && (
              <Html
                position={[0.1, 0.1, 0]}
                style={{
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  padding: '2px 4px',
                  borderRadius: '3px',
                  color: 'white',
                  fontSize: '10px',
                  whiteSpace: 'nowrap'
                }}
              >
                {star.name}
              </Html>
            )}
          </Sphere>
        </group>
      ))}
    </group>
  );
}