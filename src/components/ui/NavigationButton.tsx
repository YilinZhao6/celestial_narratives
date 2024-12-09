import { ArrowLeft, Home } from 'lucide-react';

interface NavigationButtonProps {
  type: 'back' | 'home';
  onClick: () => void;
}

export function NavigationButton({ type, onClick }: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-8 left-8 z-50 text-white/80 hover:text-white 
                 transition-colors duration-200 p-3"
      aria-label={type === 'back' ? 'Go back' : 'Go home'}
    >
      {type === 'back' ? (
        <ArrowLeft className="w-6 h-6" />
      ) : (
        <Home className="w-6 h-6" />
      )}
    </button>
  );
}