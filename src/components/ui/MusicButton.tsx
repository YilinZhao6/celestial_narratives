// src/components/ui/MusicButton.tsx
import { Music, AudioLines } from 'lucide-react';
import { useMusic } from '../../context/MusicContext';

export function MusicButton() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-4 left-4 z-50 p-3 rounded-full bg-blue-400/20 
                 hover:bg-blue-400/30 transition-colors duration-300
                 border border-blue-400/30"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <AudioLines className="w-6 h-6 text-blue-400" />
      ) : (
        <Music className="w-6 h-6 text-blue-400" />
      )}
    </button>
  );
}