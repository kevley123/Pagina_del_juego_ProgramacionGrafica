import { Music, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-blue-900/20"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <Music className="w-20 h-20 text-orange-500 animate-bounce" />
        </div>

        <div className="flex justify-center mb-8">  {/* Cambié a justify-center */}
    <img 
      src="/images/logo.png"
      alt="Ritmo Folklórico Logo"
      className="h-50 w-auto max-w-full"  /* Agregué max-w-full */
    />
  </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Vive la pasión de nuestra música boliviana!!
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Sumérgete en el ritmo vibrante de Bolivia en un desafío musical que late con identidad propia❤️🔥.
Domina melodías inspiradas en nuestro folklore nacional, desbloquea temas emblemáticos y demuestra tu destreza como guardián del sonido ancestral.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:from-orange-500 hover:to-orange-400 transition-all shadow-2xl shadow-orange-500/50 flex items-center gap-3">
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Jugar Ahora
          </button>

          <button className="border-2 border-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500/10 transition-all flex items-center gap-3">
            Ver Trailer
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500 mb-2">10+</p>
            <p className="text-gray-400">Canciones</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500 mb-2">3+</p>
            <p className="text-gray-400">Generos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500 mb-2">3</p>
            <p className="text-gray-400">Dificultades</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange-500 mb-2">20+</p>
            <p className="text-gray-400">Niveles</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full p-1">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
