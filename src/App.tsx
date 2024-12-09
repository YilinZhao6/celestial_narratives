import { useState } from 'react';
import { IntroductionPage } from './pages/IntroductionPage';
import { ConstellationViewer } from './pages/ConstellationViewer';
import { NavigationButton } from './components/ui/NavigationButton';
import { MusicProvider } from './context/MusicContext';
import { MusicButton } from './components/ui/MusicButton';

export function App() {
  const [currentPage, setCurrentPage] = useState<'intro' | 'viewer'>('intro');

  const handleNavigate = (page: 'intro' | 'viewer') => {
    setCurrentPage(page);
  };

  return (
    <MusicProvider>
      <div className="w-full h-screen bg-black">
        {currentPage === 'intro' ? (
          <>
            <IntroductionPage onNavigateNext={() => handleNavigate('viewer')} />
            <MusicButton />
          </>
        ) : (
          <>
            <NavigationButton type="home" onClick={() => handleNavigate('intro')} />
            <ConstellationViewer />
          </>
        )}
      </div>
    </MusicProvider>
  );
}

export default App;