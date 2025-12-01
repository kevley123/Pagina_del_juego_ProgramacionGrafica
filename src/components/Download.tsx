import { Download as DownloadIcon, Monitor, Smartphone, Gamepad2, Star, Check } from 'lucide-react';

export default function Download() {
  const platforms = [
    { name: 'Windows', icon: Monitor, size: '2.5 GB' },
    { name: 'PlayStation 5', icon: Gamepad2, size: '3.1 GB' },
    { name: 'Xbox Series X', icon: Gamepad2, size: '3.1 GB' },
    { name: 'Nintendo Switch', icon: Gamepad2, size: '1.8 GB' },
    { name: 'iOS', icon: Smartphone, size: '1.2 GB' },
    { name: 'Android', icon: Smartphone, size: '1.2 GB' }
  ];

  const features = [
    'Más de 50 canciones folklóricas auténticas',
    '8 personajes jugables únicos',
    '100+ niveles con dificultad progresiva',
    'Modo multijugador online',
    'Actualizaciones mensuales gratuitas',
    'Soporte para controles de guitarra',
    'Ranking global y logros',
    'Contenido descargable exclusivo'
  ];

  return (
    <section id="download" className="py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-orange-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-blue-400 bg-clip-text text-transparent">
            Descarga Ahora
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Disponible en todas las plataformas principales
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl p-12 shadow-2xl shadow-orange-500/30 border border-orange-400">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="font-semibold">Oferta de Lanzamiento</span>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold">$29.99</span>
                <span className="text-2xl line-through text-white/60 ml-4">$49.99</span>
              </div>
              <p className="text-lg text-white/90">40% de descuento - Oferta limitada</p>
            </div>

            <button className="w-full bg-white text-orange-600 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-3 mb-6">
              <DownloadIcon className="w-7 h-7" />
              Comprar y Descargar
            </button>

            <p className="text-center text-sm text-white/80">
              Incluye todas las actualizaciones futuras sin costo adicional
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Plataformas Disponibles</h3>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-orange-900/30 hover:border-orange-500/50 transition-all group cursor-pointer"
                  >
                    <Icon className="w-10 h-10 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-lg mb-1">{platform.name}</h4>
                    <p className="text-sm text-gray-400">{platform.size}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Qué Incluye</h3>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-orange-900/30">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-orange-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/20 to-blue-900/20 rounded-2xl p-12 border border-orange-500/30">
          <h3 className="text-3xl font-bold mb-8 text-center">Requisitos del Sistema</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-orange-500">Mínimos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-gray-400">SO:</span> Windows 10 64-bit</li>
                <li><span className="text-gray-400">Procesador:</span> Intel Core i3-6100 / AMD FX-8350</li>
                <li><span className="text-gray-400">Memoria:</span> 8 GB RAM</li>
                <li><span className="text-gray-400">Gráficos:</span> NVIDIA GTX 960 / AMD R9 280</li>
                <li><span className="text-gray-400">Almacenamiento:</span> 5 GB disponible</li>
                <li><span className="text-gray-400">Tarjeta de Sonido:</span> Compatible DirectX</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-blue-400">Recomendados</h4>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-gray-400">SO:</span> Windows 11 64-bit</li>
                <li><span className="text-gray-400">Procesador:</span> Intel Core i5-9600K / AMD Ryzen 5 3600</li>
                <li><span className="text-gray-400">Memoria:</span> 16 GB RAM</li>
                <li><span className="text-gray-400">Gráficos:</span> NVIDIA RTX 2060 / AMD RX 5700</li>
                <li><span className="text-gray-400">Almacenamiento:</span> 5 GB SSD</li>
                <li><span className="text-gray-400">Tarjeta de Sonido:</span> Alta fidelidad</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">¿Tienes preguntas? Visita nuestro centro de ayuda</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
              FAQ
            </button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
              Soporte Técnico
            </button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
              Comunidad
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
