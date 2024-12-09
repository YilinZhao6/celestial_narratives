import { Constellation } from '../types/constellation';

export const constellationsData: Constellation[] = [
  {
    id: "TRJ",
    name: "Jupiter Trojans",
    latinName: "Trojani",
    mythology: "The Jupiter Trojans are two groups of asteroids that share Jupiter's orbit around the Sun, positioned at the stable Lagrange points L4 and L5. The leading group (L4) is known as the 'Greek Camp' as its asteroids are named after Greek heroes of the Trojan War, while the trailing group (L5) is the 'Trojan Camp', named after the heroes of Troy. These asteroids are believed to be remnants from the early Solar System, captured in Jupiter's orbital resonance.",
    stars: [
      { id: "trj1", name: "Achilles", ra: 240.8, dec: -15.3, magnitude: 15.2, x: 4.33, y: 0, z: 2.5 },
      { id: "trj2", name: "Patroclus", ra: 238.2, dec: -17.8, magnitude: 15.7, x: 4.33, y: 0, z: -2.5 },
      { id: "trj3", name: "Ajax", ra: 235.6, dec: -20.1, magnitude: 15.9, x: 3.75, y: 0, z: 0 },
      { id: "trj4", name: "Hektor", ra: 245.3, dec: -12.5, magnitude: 14.5, x: -4.33, y: 0, z: 2.5 },
      { id: "trj5", name: "Aeneas", ra: 233.1, dec: -22.4, magnitude: 16.1, x: -4.33, y: 0, z: -2.5 },
      { id: "trj6", name: "Troilus", ra: 232.5, dec: -23.1, magnitude: 16.3, x: -3.75, y: 0, z: 0 }
    ],
    boundaries: [
      [4.33, 0, 2.5],
      [4.33, 0, -2.5],
      [3.75, 0, 0],
      [-4.33, 0, 2.5],
      [-4.33, 0, -2.5],
      [-3.75, 0, 0]
    ]
  },
  {
    id: "ORI",
    name: "Orion",
    latinName: "Orion",
    mythology: "Orion was a mighty hunter in Greek mythology. According to legend, he was killed by a scorpion sent by Gaia (or in some versions, by Artemis). Zeus placed him among the stars where he eternally hunts across the night sky.",
    stars: [
      { 
        id: "ori1", 
        name: "Betelgeuse", 
        ra: 88.7929, 
        dec: 7.4071, 
        magnitude: 0.50, 
        x: 1.5, 
        y: 2, 
        z: 0  // Right shoulder (viewer's left)
      },
      { 
        id: "ori2", 
        name: "Rigel", 
        ra: 78.6345, 
        dec: -8.2016, 
        magnitude: 0.13,
        x: 0.5, 
        y: -3, 
        z: 0  // Right foot (viewer's left)
      },
      { 
        id: "ori3", 
        name: "Bellatrix", 
        ra: 81.2828, 
        dec: 6.3497, 
        magnitude: 1.64,
        x: -1.5, 
        y: 2, 
        z: 0  // Left shoulder (viewer's right)
      },
      { 
        id: "ori4", 
        name: "Mintaka", 
        ra: 83.0016, 
        dec: -0.2991, 
        magnitude: 2.23,
        x: -1, 
        y: 0, 
        z: 0  // Rightmost belt star
      },
      { 
        id: "ori5", 
        name: "Alnilam", 
        ra: 84.0534, 
        dec: -1.2019, 
        magnitude: 1.69,
        x: 0, 
        y: 0, 
        z: 0  // Center belt star
      },
      { 
        id: "ori6", 
        name: "Alnitak", 
        ra: 85.1896, 
        dec: -1.9425, 
        magnitude: 1.77,
        x: 1, 
        y: 0, 
        z: 0  // Leftmost belt star
      },
      { 
        id: "ori7", 
        name: "Saiph", 
        ra: 86.9391, 
        dec: -9.6696, 
        magnitude: 2.09,
        x: 1.5, 
        y: -2.8, 
        z: 0  // Left foot (viewer's right)
      },
      { 
        id: "ori8", 
        name: "Meissa", 
        ra: 83.7845, 
        dec: 9.9342, 
        magnitude: 3.33,
        x: 0, 
        y: 4, 
        z: 0  // Head star
      }
    ],
    boundaries: [
      // Following the exact connection pattern specified:
      [0, 4], [-1.5, 2],     // Meissa to Bellatrix
      [-1.5, 2], [-1, 0],    // Bellatrix to Mintaka
      [-1, 0], [0.5, -3],    // Mintaka to Rigel
      [-1, 0], [0, 0],       // Mintaka to Alnilam
      [0, 0], [1, 0],        // Alnilam to Alnitak
      [1, 0], [1.5, -2.8],   // Alnitak to Saiph
      [1, 0], [1.5, 2],      // Alnitak to Betelgeuse
      [1.5, 2], [0, 4]       // Betelgeuse to Meissa
    ]
  },
  {
    id: "UMA",
    name: "Ursa Major",
    latinName: "Ursa Major",
    mythology: "In Greek mythology, Zeus fell in love with a beautiful nymph named Callisto. Hera, Zeus's wife, discovered this and transformed Callisto into a bear. Zeus later placed her in the stars as Ursa Major. The constellation is most famous for containing the Big Dipper asterism, which has been used for navigation throughout human history.",
    stars: [
      { id: "uma1", name: "Dubhe", ra: 165.9321, dec: 61.7510, magnitude: 1.79, x: 0, y: 3, z: 0 },
      { id: "uma2", name: "Merak", ra: 165.4604, dec: 56.3824, magnitude: 2.37, x: -1, y: 2, z: 0 },
      { id: "uma3", name: "Phecda", ra: 178.4577, dec: 53.6948, magnitude: 2.44, x: 0, y: 1, z: 0 },
      { id: "uma4", name: "Megrez", ra: 183.8565, dec: 57.0326, magnitude: 3.31, x: 1, y: 1.5, z: 0 },
      { id: "uma5", name: "Alioth", ra: 193.5071, dec: 55.9598, magnitude: 1.77, x: 2, y: 1.8, z: 0 },
      { id: "uma6", name: "Mizar", ra: 200.9812, dec: 54.9259, magnitude: 2.27, x: 3, y: 2, z: 0 },
      { id: "uma7", name: "Alkaid", ra: 206.8850, dec: 49.3133, magnitude: 1.85, x: 4, y: 1.5, z: 0 }
    ],
    // Adjusted to create proper Big Dipper shape
    boundaries: [
      [0, 3], [-1, 2], [0, 1], [1, 1.5], [2, 1.8], [3, 2], [4, 1.5],  // Main dipper outline
      [0, 1], [1, 1.5]  // Additional connection to complete the dipper shape
    ]
  },
  {
    id: "CYG",
    name: "Cygnus",
    latinName: "Cygnus",
    mythology: "Cygnus represents a swan in Greek mythology, forming one of the most recognizable patterns in the northern sky. The constellation depicts a swan flying along the Milky Way, with its long neck stretched out and wings spread wide.",
    stars: [
      { 
        id: "cyg1", 
        name: "Deneb", // Alpha Cygni
        ra: 310.3583, 
        dec: 45.2803, 
        magnitude: 1.25, 
        x: 0, 
        y: 2, 
        z: 0,
      },
      { 
        id: "cyg2", 
        name: "Albireo", // Beta Cygni
        ra: 292.6804, 
        dec: 27.9597, 
        magnitude: 3.05, 
        x: 0, 
        y: -4, 
        z: 0,
      },
      { 
        id: "cyg3", 
        name: "Sadr", // Gamma Cygni
        ra: 305.5571, 
        dec: 40.2567, 
        magnitude: 2.23, 
        x: 0, 
        y: 1, 
        z: 0,
      },
      { 
        id: "cyg4", 
        name: "Fawaris", // Delta Cygni
        ra: 303.4083, 
        dec: 45.1308, 
        magnitude: 2.87, 
        x: -2, 
        y: 1, 
        z: 0,
      },
      { 
        id: "cyg5", 
        name: "Aljanah", // Epsilon Cygni
        ra: 307.4192, 
        dec: 40.2567, 
        magnitude: 2.48, 
        x: 2, 
        y: 1, 
        z: 0,
      }
    ],
    boundaries: [
      // Main swan shape
      [0, 2], [0, 1],     // Deneb to Sadr (tail to heart)
      [0, 1], [0, -4],    // Sadr to Albireo (heart to head - longer neck)
      [-2, 1], [2, 1],    // Fawaris to Aljanah (wings)
      [-2, 1], [0, 1],    // Fawaris to Sadr (left wing to heart)
      [2, 1], [0, 1]      // Aljanah to Sadr (right wing to heart)
    ]
  }
];