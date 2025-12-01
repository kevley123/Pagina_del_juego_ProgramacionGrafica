import { Guitar, Drum, Music2, Radio, PlayCircle, MapPin, Award, Zap } from 'lucide-react';

export default function Characters() {
  const characters = [
    {
      name: 'Luzmila Carpio',
      origin: 'Potosí, Bolivia',
      specialty: 'Canto Andino & Kullawada',
      description: 'La voz de los Andes bolivianos. Cantante aymara internacional reconocida por su poderosa voz de soprano y su activismo por los derechos indígenas.',
      icon: Music2,
      color: 'from-purple-600 to-pink-500',
      difficulty: 'Intermedio',
      unlockLevel: 1,
      image: '/images/artists/luzmila-carpio.jpg', // Añade esta imagen en public/images/artists/
      genre: 'Música Andina',
      achievements: ['Embajadora de Bolivia ante Francia', 'Premio Nacional de Cultura']
    },
    {
      name: 'Los Kjarkas',
      origin: 'Cochabamba, Bolivia',
      specialty: 'Saya Afroboliviana & Caporal',
      description: 'Grupo musical legendario fundador de la música folklórica boliviana moderna. Creadores del icónico tema "Llorando se fue".',
      icon: Guitar,
      color: 'from-green-600 to-emerald-500',
      difficulty: 'Avanzado',
      unlockLevel: 15,
      image: '/images/artists/kjarkas.jpg',
      genre: 'Folklore Boliviano',
      achievements: ['Más de 50 años de trayectoria', 'Difusión mundial de la cultura boliviana']
    },
    {
      name: 'Maya Andina',
      origin: 'La Paz, Bolivia',
      specialty: 'Tinku & Morenada',
      description: 'Joven percusionista que fusiona ritmos ancestrales del altiplano con sonidos contemporáneos. Maestra del bombo legüero y charango.',
      icon: Drum,
      color: 'from-orange-500 to-yellow-500',
      difficulty: 'Intermedio',
      unlockLevel: 8,
      image: '/images/artists/maya-andina.jpg',
      genre: 'Fusión Andina',
      achievements: ['Ganadora del Carnaval de Oruro 2023', 'Innovadora musical']
    },
    {
      name: 'Don Rómulo',
      origin: 'Sucre, Bolivia',
      specialty: 'Cueca Boliviana & Taquirari',
      description: 'Patriarca de la música criolla boliviana. Virtuoso del violín y la guitarra, guardián de las tradiciones musicales del valle.',
      icon: Radio,
      color: 'from-blue-500 to-cyan-400',
      difficulty: 'Experto',
      unlockLevel: 25,
      image: '/images/artists/don-romulo.jpeg',
      genre: 'Música Criolla',
      achievements: ['Tesoro Humano Vivo de Bolivia', '70 años de carrera musical']
    }
  ];

  const bolivianGenres = [
    { name: 'Saya Afroboliviana', color: 'bg-purple-500' },
    { name: 'Tinku', color: 'bg-red-500' },
    { name: 'Morenada', color: 'bg-blue-500' },
    { name: 'Caporal', color: 'bg-yellow-500' },
    { name: 'Cueca Boliviana', color: 'bg-green-500' },
    { name: 'Taquirari', color: 'bg-pink-500' },
    { name: 'Kullawada', color: 'bg-indigo-500' },
    { name: 'Huayño', color: 'bg-orange-500' }
  ];

  return (
    <section id="characters" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
            Maestros de la Tradición Boliviana
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Descubre los guardianes de los ritmos ancestrales de Bolivia. Cada artista representa una región y tradición única de nuestra patria.
          </p>
          
          {/* Géneros bolivianos */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {bolivianGenres.map((genre, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full ${genre.color} text-white font-medium text-sm flex items-center gap-2`}
              >
                <Music2 className="w-4 h-4" />
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {characters.map((character, index) => {
            const Icon = character.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-orange-900/30 hover:border-orange-500/50 transition-all hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Fondo degradado animado */}
                <div className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Imagen del artista */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${character.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors flex items-center gap-2">
                      {character.name}
                      <span className="text-sm px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">
                        {character.genre}
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{character.origin}</span>
                    </div>
                    <p className="text-orange-500 font-semibold text-lg mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      {character.specialty}
                    </p>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {character.description}
                  </p>

                  {/* Logros */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-400 font-medium">Reconocimientos:</span>
                    </div>
                    <ul className="space-y-2">
                      {character.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer de la tarjeta */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Dificultad</p>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-500 font-bold">{character.difficulty}</span>
                        <div className="flex">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full mx-1 ${
                                i < (character.difficulty === 'Intermedio' ? 2 : 
                                     character.difficulty === 'Avanzado' ? 3 : 1)
                                  ? 'bg-orange-500'
                                  : 'bg-gray-700'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-400 mb-1">Disponible en</p>
                      <p className="text-blue-400 font-bold flex items-center gap-2">
                        <PlayCircle className="w-5 h-5" />
                        Nivel {character.unlockLevel}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Botón de escuchar */}
                <button className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:scale-110">
                  <PlayCircle className="w-6 h-6 text-white" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Sección de más artistas */}
        <div className="mt-20 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Más Ritmos Bolivianos por Descubrir
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bolivia es un crisol de ritmos. Cada región tiene su propio sello musical que espera ser explorado.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Música Chaquena', region: 'Tarija' },
              { name: 'Salay', region: 'Cochabamba' },
              { name: 'Taquirari', region: 'Beni' },
              { name: 'Cullaguada', region: 'La Paz' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 border border-orange-900/20 hover:border-orange-500/30 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Music2 className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.region}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}