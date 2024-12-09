import * as THREE from 'three';

// Box-Muller transform for Gaussian distribution
export function gaussianRandom(mean = 0, std = 1): number {
  const u1 = Math.random();
  const u2 = Math.random();
  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  return z0 * std + mean;
}

// Create a point in 3D space with Gaussian distribution
export function createGaussianPoint(radius: number, verticalSpread: number): THREE.Vector3 {
  const theta = Math.random() * Math.PI * 2;
  const r = Math.abs(gaussianRandom(0, radius * 0.3));
  
  return new THREE.Vector3(
    Math.cos(theta) * r,
    gaussianRandom(0, verticalSpread * 0.3),
    Math.sin(theta) * r
  );
}