import { Target, Zap, Trophy, Star } from 'lucide-react';

export default function Gameplay() {
  const features = [
    {
      icon: Target,
      title: 'Precisión de Notas',
      description: 'Toca las notas en el momento exacto siguiendo el ritmo. Cada nota perfecta aumenta tu combo y multiplica tu puntuación.',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Modo Energía',
      description: 'Activa el modo especial para duplicar puntos. Recoge las notas doradas para cargar tu barra de energía al máximo.',
      color: 'blue'
    },
    {
      icon: Trophy,
      title: 'Sistema de Combos',
      description: 'Encadena notas perfectas para aumentar tu multiplicador. Alcanza combos de 100+ para desbloquear recompensas épicas.',
      color: 'orange'
    },
    {
      icon: Star,
      title: 'Ranking Global',
      description: 'Compite con jugadores de todo el mundo. Sube en el ranking y demuestra que eres el mejor intérprete folklórico.',
      color: 'blue'
    }
  ];

  return (
    <section id="gameplay" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-blue-400 bg-clip-text text-transparent">
            Jugabilidad
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una experiencia musical intuitiva pero desafiante. Domina los controles y conviértete en leyenda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-orange-900/30 hover:border-orange-500/50 transition-all group"
              >
                <div className={`inline-flex p-4 rounded-lg bg-${feature.color}-500/20 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${feature.color}-500`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-900/20 to-blue-900/20 rounded-2xl p-12 border border-orange-500/30">
          <h3 className="text-3xl font-bold mb-8 text-center">Controles del Juego</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-orange-500">Teclado</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <kbd className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 font-mono">A</kbd>
                    <kbd className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 font-mono">S</kbd>
                    <kbd className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 font-mono">D</kbd>
                    <kbd className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 font-mono">F</kbd>
                  </div>
                  <span className="text-gray-400">Notas principales</span>
                </div>
                <div className="flex items-center gap-4">
                  <kbd className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 font-mono">Espacio</kbd>
                  <span className="text-gray-400">Activar modo energía</span>
                </div>
                <div className="flex items-center gap-4">
                  <kbd className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 font-mono">Enter</kbd>
                  <span className="text-gray-400">Pausar</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Gamepad</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">X</div>
                    <div className="w-10 h-10 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">A</div>
                    <div className="w-10 h-10 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">B</div>
                    <div className="w-10 h-10 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">Y</div>
                  </div>
                  <span className="text-gray-400">Notas principales</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">RB</div>
                  <span className="text-gray-400">Activar modo energía</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">Start</div>
                  <span className="text-gray-400">Pausar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              Compatible con controles de guitarra y controladores MIDI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
