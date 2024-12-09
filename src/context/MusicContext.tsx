import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

// Import music files
import cinematicAtmosphere from '../musics/cinematic-atmosphere-score-2-22136.mp3';
import spaceTravel from '../musics/space-travel-universe-planets-stars-and-black-holes-165922.mp3';
import whiteDwarf from '../musics/white-dwarf-261405.mp3';

interface MusicContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  currentTrack: number;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Music tracks array with imported files
  const musicTracks = [
    cinematicAtmosphere,
    spaceTravel,
    whiteDwarf
  ];

  useEffect(() => {
    audioRef.current = new Audio(musicTracks[currentTrack]);
    
    const handleTrackEnd = () => {
      setCurrentTrack((prev) => (prev + 1) % musicTracks.length);
    };

    audioRef.current.addEventListener('ended', handleTrackEnd);

    return () => {
      audioRef.current?.removeEventListener('ended', handleTrackEnd);
      audioRef.current?.pause();
    };
  }, [currentTrack]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
        .catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrack]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, currentTrack }}>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};