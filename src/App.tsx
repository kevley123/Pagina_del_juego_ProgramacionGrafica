import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Gameplay from './components/Gameplay';
import Levels from './components/Levels';
import Story from './components/Story';
import Trailer from './components/Trailer';
import Download from './components/Download';
import Sidebar from './components/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'characters', 'gameplay', 'levels', 'story', 'trailer', 'download'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
      />

      <main>
        <Hero />
        <Characters />
        <Gameplay />
        <Levels />
        <Story />
        <Trailer />
        <Download />
      </main>

      <footer className="bg-black py-12 px-6 text-center border-t border-orange-900/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 mb-4">© 2025 Ritmo Folklórico. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-500">Preservando la cultura a través de la música</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
