import { Vector3 } from 'three';

// Astronomical Units in our scale
const AU = 2; // 2 units = 1 AU for visualization

export interface PlanetData {
  name: string;
  diameter: number; // km
  orbitRadius: number; // AU
  color: string;
  rotationPeriod: number; // hours
  orbitalPeriod: number; // days
}

export const planetaryData: PlanetData[] = [
  {
    name: "Mercury",
    diameter: 4879,
    orbitRadius: 0.387 * AU,
    color: "#A5A5A5",
    rotationPeriod: 1407.6,
    orbitalPeriod: 88
  },
  {
    name: "Venus",
    diameter: 12104,
    orbitRadius: 0.723 * AU,
    color: "#E6B88A",
    rotationPeriod: -5832.5,
    orbitalPeriod: 224.7
  },
  {
    name: "Earth",
    diameter: 12742,
    orbitRadius: 1.0 * AU,
    color: "#4B70DD",
    rotationPeriod: 24,
    orbitalPeriod: 365.2
  },
  {
    name: "Mars",
    diameter: 6779,
    orbitRadius: 1.524 * AU,
    color: "#E27B58",
    rotationPeriod: 24.7,
    orbitalPeriod: 687
  },
  {
    name: "Jupiter",
    diameter: 139820,
    orbitRadius: 5.203 * AU,
    color: "#C88B3A",
    rotationPeriod: 9.9,
    orbitalPeriod: 4331
  }
];

// L4 and L5 Lagrange points are 60° ahead and behind Jupiter
export const jupiterTrojanPoints = {
  l4: new Vector3(
    Math.cos(Math.PI / 3) * planetaryData[4].orbitRadius,
    0,
    Math.sin(Math.PI / 3) * planetaryData[4].orbitRadius
  ),
  l5: new Vector3(
    Math.cos(-Math.PI / 3) * planetaryData[4].orbitRadius,
    0,
    Math.sin(-Math.PI / 3) * planetaryData[4].orbitRadius
  )
};