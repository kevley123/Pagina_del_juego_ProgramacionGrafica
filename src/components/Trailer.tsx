import { Play, Volume2, Maximize } from 'lucide-react';

export default function Trailer() {
  return (
    <section id="trailer" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-blue-400 bg-clip-text text-transparent">
            Trailer Oficial
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experimenta la magia del folklore en acción
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-orange-500/30 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-blue-900/40"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <button className="relative bg-gradient-to-r from-orange-600 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-orange-500/50">
                  <Play className="w-12 h-12 text-white ml-1" fill="white" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
              <div className="relative text-center">
                <p className="text-2xl font-bold mb-2">Ver Trailer</p>
                <p className="text-gray-300">Duración: 2:30</p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Play className="w-6 h-6" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Volume2 className="w-6 h-6" />
                  </button>
                  <div className="text-sm text-gray-300">0:00 / 2:30</div>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Maximize className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-3 bg-gray-700 rounded-full h-1 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-full w-0"></div>
              </div>
            </div>

            <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              4K Ultra HD
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-orange-900/30 text-center">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="font-bold text-lg mb-2">Cinemáticas Épicas</h3>
              <p className="text-gray-400 text-sm">Historias inmersivas con gráficos de última generación</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-blue-900/30 text-center">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="font-bold text-lg mb-2">Audio Profesional</h3>
              <p className="text-gray-400 text-sm">Grabaciones auténticas de músicos tradicionales</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-orange-900/30 text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold text-lg mb-2">Efectos Visuales</h3>
              <p className="text-gray-400 text-sm">Experiencia audiovisual deslumbrante</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-900/20 to-blue-900/20 rounded-xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold mb-4 text-center">Lo que dicen los críticos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-300">
                "Una obra maestra que fusiona tradición y tecnología de manera brillante.
                Ritmo Folklórico no es solo un juego, es una experiencia cultural."
                <footer className="text-sm text-gray-400 mt-2 not-italic">- GameSpot, 9.5/10</footer>
              </blockquote>
              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-300">
                "Finalmente, un juego que celebra nuestra herencia musical. Cada nivel es un
                tributo apasionado al folklore latinoamericano."
                <footer className="text-sm text-gray-400 mt-2 not-italic">- IGN, 9/10</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
