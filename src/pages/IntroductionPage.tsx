import { useState, useEffect } from 'react';
import { ArrowRight, Star, ScrollText } from 'lucide-react';
import { Quote } from '../components/ui/Quote';
import { FeatureCard } from '../components/ui/FeatureCard';

interface IntroductionPageProps {
  onNavigateNext: () => void;
}

export function IntroductionPage({ onNavigateNext }: IntroductionPageProps) {
  const [scrollQuote, setScrollQuote] = useState(0);
  const quotes = [
    { text: "Tell me, O Muse, of the stars that guide us", author: "Homer" },
    { text: "As above in heaven, so below in verse", author: "Aratus" },
    { text: "The heroes of old now shine eternal", author: "Ptolemy" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setScrollQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black text-white">
      {/* Background effects */}
      <div className="stars-bg" />
      <div className="constellation-bg" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Header section */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <Star className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-wide">
              <span className="block text-blue-300">Celestial</span>
              <span className="block text-white mt-2">Narratives</span>
            </h1>
            <p className="text-xl text-blue-200 font-light tracking-wide">
              Where Ancient Tales Meet the Stars
            </p>
          </div>

          {/* Quote carousel */}
          <Quote quote={quotes[scrollQuote]} />

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <FeatureCard
              icon={<ScrollText className="w-5 h-5 text-blue-400" />}
              title="Literary Cosmos"
              description="Explore how ancient epics shaped our understanding of the stars, from Homer's heroes to Ptolemy's observations."
            />
            <FeatureCard
              icon={<Star className="w-5 h-5 text-blue-400" />}
              title="Interactive Atlas"
              description="Navigate through an interactive map of celestial bodies named after classical figures, each with its own story to tell."
            />
          </div>

          {/* CTA Button */}
          <button
            onClick={onNavigateNext}
            className="group relative px-8 py-4 overflow-hidden rounded-full bg-transparent
                     border border-blue-400 hover:border-blue-300 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                          transform group-hover:translate-x-full transition-transform duration-500" />
            <span className="relative flex items-center gap-2 text-lg">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}