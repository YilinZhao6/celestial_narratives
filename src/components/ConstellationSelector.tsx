import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { constellationsData } from '../data/constellations';

interface ConstellationSelectorProps {
  currentConstellation: string;
  onConstellationChange: (id: string) => void;
}

export function ConstellationSelector({ currentConstellation, onConstellationChange }: ConstellationSelectorProps) {
  const currentIndex = constellationsData.findIndex(c => c.id === currentConstellation);

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + constellationsData.length) % constellationsData.length;
    onConstellationChange(constellationsData[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % constellationsData.length;
    onConstellationChange(constellationsData[newIndex].id);
  };

  return (
    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/70 px-6 py-3 rounded-full backdrop-blur-md">
      <button
        onClick={handlePrevious}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <h2 className="text-xl font-bold min-w-[200px] text-center">
        {constellationsData[currentIndex].name}
      </h2>
      <button
        onClick={handleNext}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}