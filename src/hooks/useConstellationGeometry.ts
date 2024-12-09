import { useMemo } from 'react';
import * as THREE from 'three';
import { Constellation } from '../types/constellation';

export function useConstellationGeometry(constellation: Constellation) {
  return useMemo(() => {
    const starPositions = constellation.stars.map(star => 
      new THREE.Vector3(star.x, star.y, star.z)
    );

    const linePoints: THREE.Vector3[] = [];
    const boundaries = constellation.boundaries;

    // Create curved line segments between connected stars
    for (let i = 0; i < boundaries.length - 1; i++) {
      const start = new THREE.Vector3(boundaries[i][0], boundaries[i][1], 0);
      const end = new THREE.Vector3(boundaries[i + 1][0], boundaries[i + 1][1], 0);
      
      // Create a curved path between points
      const midPoint = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5);
      midPoint.z = -0.2 * Math.sin(Math.PI * 0.5); // Smooth curve depth
      
      const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
      const curvePoints = curve.getPoints(10); // Reduced point count for better performance
      linePoints.push(...curvePoints);
    }

    // Close the constellation shape if needed
    if (boundaries.length > 2) {
      const start = new THREE.Vector3(boundaries[boundaries.length - 1][0], boundaries[boundaries.length - 1][1], 0);
      const end = new THREE.Vector3(boundaries[0][0], boundaries[0][1], 0);
      const midPoint = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5);
      midPoint.z = -0.2 * Math.sin(Math.PI * 0.5);
      
      const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
      const curvePoints = curve.getPoints(10);
      linePoints.push(...curvePoints);
    }

    return {
      linePoints,
      spherePositions: starPositions
    };
  }, [constellation]);
}