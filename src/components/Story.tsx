import { BookOpen, Heart, Globe, Music } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-blue-400 bg-clip-text text-transparent">
            Nuestra Historia
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un viaje para preservar las tradiciones musicales de América Latina
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-orange-900/30 to-blue-900/30 rounded-2xl p-12 border border-orange-500/30">
              <BookOpen className="w-16 h-16 text-orange-500 mb-6" />
              <h3 className="text-3xl font-bold mb-6">El Origen</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  En un mundo donde las tradiciones musicales se están perdiendo, un grupo de maestros
                  folklóricos decidió unir fuerzas para preservar el legado cultural de América Latina.
                </p>
                <p>
                  Cada uno, experto en su propia tradición regional, comprendió que la mejor manera de
                  mantener viva la música era compartirla con las nuevas generaciones de una forma
                  moderna y accesible.
                </p>
                <p>
                  Así nació Ritmo Folklórico: una plataforma donde el arte ancestral se encuentra con
                  la tecnología, creando una experiencia única que honra el pasado mientras construye el futuro.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-orange-900/30">
              <Heart className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="text-2xl font-bold mb-3">Nuestra Misión</h4>
              <p className="text-gray-300 leading-relaxed">
                Preservar y difundir las ricas tradiciones musicales folklóricas de América Latina,
                haciendo que cada ritmo, cada melodía y cada historia llegue a millones de personas
                en todo el mundo a través de una experiencia interactiva y emocionante.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-blue-900/30">
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-2xl font-bold mb-3">Nuestra Visión</h4>
              <p className="text-gray-300 leading-relaxed">
                Convertirnos en la plataforma líder mundial para el aprendizaje y disfrute del folklore
                latinoamericano, creando una comunidad global de apasionados por la música tradicional
                y asegurando que estas tradiciones perduren para las futuras generaciones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-orange-900/30">
              <Music className="w-12 h-12 text-orange-500 mb-4" />
              <h4 className="text-2xl font-bold mb-3">Nuestros Valores</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Respeto profundo por las tradiciones culturales</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Autenticidad en cada canción y representación</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Innovación tecnológica al servicio de la cultura</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Inclusión y accesibilidad para todos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/20 to-blue-900/20 rounded-2xl p-12 border border-orange-500/30 text-center">
          <h3 className="text-3xl font-bold mb-6">La Importancia del Folklore</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            El folklore no es solo música; es la memoria colectiva de nuestros pueblos. Cada canción
            cuenta historias de amor, trabajo, celebración y resistencia. Al preservar estas tradiciones,
            mantenemos viva nuestra identidad cultural y construimos puentes entre generaciones.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">15+</div>
              <p className="text-gray-400">Países Representados</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-gray-400">Ritmos Tradicionales</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">100+</div>
              <p className="text-gray-400">Años de Historia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
