import { useMemo } from 'react';
import * as THREE from 'three';
import { Constellation } from '../types/constellation';

export function useStarPositions(constellation: Constellation) {
  return useMemo(() => {
    const starCount = constellation.stars.length;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const colors = new Float32Array(starCount * 3);

    constellation.stars.forEach((star, i) => {
      // Convert RA/Dec to Cartesian coordinates
      const index = i * 3;
      const raRad = (star.ra * Math.PI) / 180;
      const decRad = (star.dec * Math.PI) / 180;
      
      // Use provided x,y,z for visualization positioning
      positions[index] = star.x;
      positions[index + 1] = star.y;
      positions[index + 2] = star.z;
      
      // Size based on magnitude (brighter stars appear larger)
      const visualMagnitude = Math.max(0.05, 2.0 - star.magnitude / 4);
      sizes[i] = visualMagnitude;
      
      // Color based on magnitude and special cases
      const color = new THREE.Color();
      
      if (constellation.id === 'TRJ') {
        // Trojan asteroids get a distinct golden color
        color.setHSL(0.12, 0.9, 0.7);
      } else {
        // Regular stars
        const temp = 5000 + (2 - star.magnitude) * 2000;
        if (temp > 8000) {
          color.setHSL(0.6, 1, 0.9); // Blue-white
        } else if (temp > 6500) {
          color.setHSL(0.2, 0.5, 0.9); // White
        } else if (temp > 5000) {
          color.setHSL(0.15, 0.8, 0.8); // Yellow-white
        } else {
          color.setHSL(0.08, 0.9, 0.7); // Orange-red
        }
      }
      
      colors[index] = color.r;
      colors[index + 1] = color.g;
      colors[index + 2] = color.b;
    });

    return {
      positions,
      sizes,
      colors,
      count: starCount
    };
  }, [constellation]);
}