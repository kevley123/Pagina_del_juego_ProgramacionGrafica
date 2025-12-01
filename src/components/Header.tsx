import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-orange-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-orange-500/10 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-orange-500" />
          </button>
          <div className="flex items-center">
            <img 
              src="/images/logo.png"  // Ruta desde la carpeta public
              alt="Ritmo Folklórico Logo"
              className="h-10 w-auto"  // Ajusta la altura según necesites
            />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">Inicio</button>
          <button onClick={() => scrollToSection('characters')} className="hover:text-orange-500 transition-colors">Personajes</button>
          <button onClick={() => scrollToSection('gameplay')} className="hover:text-orange-500 transition-colors">Jugabilidad</button>
          <button onClick={() => scrollToSection('levels')} className="hover:text-orange-500 transition-colors">Niveles</button>
          <button onClick={() => scrollToSection('story')} className="hover:text-orange-500 transition-colors">Historia</button>
          <button onClick={() => scrollToSection('trailer')} className="hover:text-orange-500 transition-colors">Trailer</button>
        </nav>

        <button
          onClick={() => scrollToSection('download')}
          className="bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-2 rounded-full font-semibold hover:from-orange-500 hover:to-orange-400 transition-all shadow-lg shadow-orange-500/30"
        >
          Descargar
        </button>
      </div>
    </header>
  );
}
