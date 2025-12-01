import { X, Home, Users, Gamepad2, Trophy, BookOpen, Video, Download } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function Sidebar({ isOpen, onClose, activeSection }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'characters', label: 'Personajes', icon: Users },
    { id: 'gameplay', label: 'Jugabilidad', icon: Gamepad2 },
    { id: 'levels', label: 'Niveles', icon: Trophy },
    { id: 'story', label: 'Historia', icon: BookOpen },
    { id: 'trailer', label: 'Trailer', icon: Video },
    { id: 'download', label: 'Descargar', icon: Download },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-r border-orange-900/30 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-orange-900/30 flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Menú
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-500/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-orange-500" />
          </button>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg mb-2 transition-all ${
                  isActive
                    ? 'bg-orange-500/20 text-orange-500 border border-orange-500/30'
                    : 'hover:bg-orange-500/10 text-gray-300 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-orange-900/30">
          <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-4 rounded-lg border border-orange-500/20">
            <p className="text-sm text-gray-300 mb-2">Próximo Nivel</p>
            <p className="text-orange-500 font-semibold">La Cueca Norteña</p>
            <div className="mt-3 bg-gray-800 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-full w-3/4"></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">75% completado</p>
          </div>
        </div>
      </aside>
    </>
  );
}
