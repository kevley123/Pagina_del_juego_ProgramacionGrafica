import { Star, Lock, Mountain, Sun, CloudRain, Music2, Trophy, Zap, Award, MapPin } from 'lucide-react';

export default function Levels() {
  const difficulties = [
    {
      name: 'Pichanga',
      slang: "¡Así nomás!",
      description: 'Para empezar suave y disfrutar sin apuro',
      stars: 1,
      songs: 25,
      color: 'from-green-500 to-emerald-400',
      features: ['Tempo despacito', 'Ritmos básicos', 'Mucha repetición', 'Modo calentamiento'],
      icon: Sun,
      region: 'Valles',
      typicalSong: 'Carnavalito Paceño',
      tempo: '60-80 BPM'
    },
    {
      name: 'Wassho',
      slang: "¡Ya está agarrando ritmo!",
      description: 'Para los que ya le agarraron el gustito al ritmo',
      stars: 2,
      songs: 30,
      color: 'from-blue-500 to-cyan-400',
      features: ['Tempo medio', 'Combinaciones de acordes', 'Introducción a síncopas', 'Variaciones'],
      icon: CloudRain,
      region: 'Altiplano',
      typicalSong: 'Huayño Potosino',
      tempo: '90-110 BPM'
    },
    {
      name: 'Bien Rayado',
      slang: "¡A ponerse las pilas!",
      description: 'Para los que ya tienen cancha y quieren más sabor',
      stars: 3,
      songs: 35,
      color: 'from-orange-500 to-amber-400',
      features: ['Tempo rápido', 'Cambios de ritmo repentinos', 'Solos intermedios', 'Fusión de ritmos'],
      icon: Zap,
      region: 'Yungas',
      typicalSong: 'Saya Afroboliviana',
      tempo: '120-140 BPM'
    },
    {
      name: 'Muy Chacra',
      slang: "¡Puro maestro che!",
      description: 'Solo para los caporales que dominan la tradición',
      stars: 4,
      songs: 20,
      color: 'from-red-500 to-purple-600',
      features: ['Tempo experto', 'Síncopas complejas', 'Solos virtuosos', 'Improvisación obligatoria'],
      icon: Mountain,
      region: 'Andes',
      typicalSong: 'Tinku Potosino',
      tempo: '150-180 BPM'
    }
  ];

  const bolivianRegions = [
    { 
      name: 'Altiplano Paceño', 
      songs: 18, 
      icon: '🏔️',
      genres: ['Huayño', 'Morenada', 'Kullawada'],
      difficulty: 'Wassho',
      color: 'from-blue-600 to-cyan-500'
    },
    { 
      name: 'Valles Cochabambinos', 
      songs: 15, 
      icon: '🌄',
      genres: ['Cueca', 'Taquirari', 'Chacarera'],
      difficulty: 'Pichanga',
      color: 'from-green-500 to-emerald-400'
    },
    { 
      name: 'Yungas La Paz', 
      songs: 12, 
      icon: '🌿',
      genres: ['Saya', 'Afroboliviano', 'Ritmos Tropicales'],
      difficulty: 'Bien Rayado',
      color: 'from-orange-500 to-yellow-400'
    },
    { 
      name: 'Chaco Tarijeño', 
      songs: 10, 
      icon: '🌵',
      genres: ['Chovena', 'Guarania', 'Polca'],
      difficulty: 'Muy Chacra',
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Amazonía Beniana', 
      songs: 8, 
      icon: '🌴',
      genres: ['Moxeño', 'Bailecito', 'Ritmos Selváticos'],
      difficulty: 'Wassho',
      color: 'from-purple-500 to-indigo-400'
    },
    { 
      name: 'Potosino', 
      songs: 10, 
      icon: '⛏️',
      genres: ['Tinku', 'Pujllay', 'Ritmos Mineros'],
      difficulty: 'Bien Rayado',
      color: 'from-gray-600 to-orange-500'
    }
  ];

  const specialLevels = [
    {
      name: 'Carnaval de Oruro',
      description: 'El desafío supremo con la Diablada',
      unlockLevel: 25,
      color: 'from-red-500 to-yellow-500',
      icon: Trophy,
      duration: '10 minutos',
      rewards: ['Traje de Diablo', 'Máscara Dorada', 'Título de Caporal']
    },
    {
      name: 'Entrada Universitaria',
      description: 'La gran batalla de fraternidades',
      unlockLevel: 40,
      color: 'from-blue-500 to-white',
      icon: Music2,
      duration: '15 minutos',
      rewards: ['Bandera de tu U', 'Chaleco de Fraternidad', 'Reconocimiento Estudiantil']
    },
    {
      name: 'Gran Power Fiesta',
      description: 'Maratón de ritmos sin parar',
      unlockLevel: 60,
      color: 'from-purple-600 to-pink-500',
      icon: Zap,
      duration: 'Infinito',
      rewards: ['Poder ilimitado', 'Título de Rey del Power', 'Todos los ritmos desbloqueados']
    }
  ];

  return (
    <section id="levels" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
            ¡Elije tu Nivel Cholita!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Desde la tranquila Pichanga hasta el Muy Chacra. ¿Con cuál te animas?
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
              <span className="text-white font-bold text-sm">100% Ritmos Bolivianos</span>
            </div>
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full">
              <span className="text-white font-bold text-sm">90 Canciones Tradicionales</span>
            </div>
          </div>
        </div>

        {/* Niveles de Dificultad */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {difficulties.map((difficulty, index) => {
            const Icon = difficulty.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Header con color del nivel */}
                <div className={`h-2 w-full bg-gradient-to-r ${difficulty.color}`}></div>
                
                <div className="p-6 relative">
                  {/* Icono y región */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${difficulty.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-400">Región</span>
                      <p className="text-sm font-semibold text-white">{difficulty.region}</p>
                    </div>
                  </div>

                  {/* Nombre y slang */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-white">{difficulty.name}</h3>
                      <div className="flex gap-1">
                        {[...Array(difficulty.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg font-bold text-orange-400 italic">{difficulty.slang}</p>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm">{difficulty.description}</p>

                  {/* Información de canción típica */}
                  <div className="mb-4 p-3 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Music2 className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-gray-400">Canción típica:</span>
                    </div>
                    <p className="text-white font-medium">{difficulty.typicalSong}</p>
                    <p className="text-xs text-gray-400 mt-1">Tempo: {difficulty.tempo}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {difficulty.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${difficulty.color}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Footer con número de canciones */}
                  <div className={`mt-4 inline-flex items-center justify-between w-full px-4 py-2 rounded-lg bg-gradient-to-r ${difficulty.color} text-white text-sm font-bold`}>
                    <span>{difficulty.songs} canciones</span>
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regiones Musicales de Bolivia */}
        <div className="bg-gradient-to-r from-orange-900/20 via-red-900/20 to-purple-900/20 rounded-2xl p-8 border border-orange-500/30 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3 text-white flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-orange-500" />
              Recorre Bolivia con la Música
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cada región de nuestro país tiene su propio sabor. ¡Descúbrelos todos!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bolivianRegions.map((region, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${region.color} rounded-xl p-4 border border-gray-700 group-hover:border-orange-500 transition-all`}>
                  <div className="text-4xl mb-3">{region.icon}</div>
                  <h4 className="font-bold text-white mb-2 text-sm">{region.name}</h4>
                  <p className="text-xs text-gray-200 mb-2">{region.songs} canciones</p>
                  
                  <div className="mt-2">
                    <span className="text-xs px-2 py-1 bg-black/30 rounded-full text-white">
                      {region.difficulty}
                    </span>
                  </div>
                  
                  {/* Géneros en hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/80 rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center">
                    <p className="text-xs text-gray-300 mb-2">Géneros:</p>
                    <div className="space-y-1">
                      {region.genres.map((genre, i) => (
                        <span key={i} className="block text-xs text-white bg-orange-500/20 px-2 py-1 rounded">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-300 italic">
              "Desde los Andes hasta la Amazonía, cada nota cuenta nuestra historia"
            </p>
          </div>
        </div>

        {/* Niveles Especiales */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-orange-900/30">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Desafíos Épicos Bolivianos
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Eventos especiales basados en nuestras tradiciones más importantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specialLevels.map((level, index) => {
              const Icon = level.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all"
                >
                  <div className={`h-3 w-full bg-gradient-to-r ${level.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${level.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white">{level.name}</h4>
                        <p className="text-xs text-gray-400">Duración: {level.duration}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm">{level.description}</p>

                    {/* Recompensas */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-400 mb-2">Recompensas:</p>
                      <div className="space-y-2">
                        {level.rewards.map((reward, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-sm text-white">{reward}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Botón de desbloqueo */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="text-sm">
                        <p className="text-gray-400">Desbloqueo:</p>
                        <p className="text-orange-500 font-bold">Nivel {level.unlockLevel}</p>
                      </div>
                      <Lock className="w-5 h-5 text-gray-500 group-hover:text-orange-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Frase motivacional */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-white font-medium">¡Sigue adelante chapaco que la música no espera!</span>
            </div>
          </div>
        </div>

        {/* Progreso total */}
        <div className="mt-12 bg-gray-900/30 rounded-xl p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Tu Progreso Musical</h4>
              <p className="text-gray-400">Completa todos los niveles para convertirte en un verdadero Maestro</p>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">90</p>
                <p className="text-sm text-gray-400">Canciones Totales</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-500">6</p>
                <p className="text-sm text-gray-400">Regiones</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">4</p>
                <p className="text-sm text-gray-400">Niveles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}