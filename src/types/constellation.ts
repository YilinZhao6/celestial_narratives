export interface Star {
  id: string;
  name: string;
  ra: number;  // Right Ascension
  dec: number; // Declination
  magnitude: number;
  x: number;
  y: number;
  z: number;
}

export interface Constellation {
  id: string;
  name: string;
  latinName: string;
  stars: Star[];
  mythology: string;
  boundaries: number[][];
}