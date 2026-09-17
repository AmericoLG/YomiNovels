import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import genericoImg from '../assets/images/generico.png';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);

  const readings = [
    {
      id: 1,
      title: 'La Leyenda del Dragón Eterno',
      chapter: 'Capítulo 45: El Despertar del Fuego',
      progress: 65,
      image: genericoImg
    },
    {
      id: 2,
      title: 'El Reino de las Sombras',
      chapter: 'Capítulo 23: La Traición',
      progress: 42,
      image: genericoImg
    },
    {
      id: 3,
      title: 'Caminos de Luz',
      chapter: 'Capítulo 78: El Destino',
      progress: 89,
      image: genericoImg
    }
  ];

  const latestNovels = [
    { id: 1, title: 'La Leyenda del Dragón Eterno', chapter: 'Capítulo 45', time: 'Hace 2 horas' },
    { id: 2, title: 'El Reino de las Sombras', chapter: 'Capítulo 23', time: 'Hace 4 horas' },
    { id: 3, title: 'Caminos de Luz', chapter: 'Capítulo 78', time: 'Hace 6 horas' },
    { id: 4, title: 'La Espada del Destino', chapter: 'Capítulo 12', time: 'Hace 8 horas' },
    { id: 5, title: 'El Último Guardián', chapter: 'Capítulo 56', time: 'Hace 10 horas' },
    { id: 6, title: 'Cronos del Tiempo', chapter: 'Capítulo 34', time: 'Hace 12 horas' },
    { id: 7, title: 'La Sombra Eterna', chapter: 'Capítulo 89', time: 'Hace 14 horas' },
    { id: 8, title: 'El Despertar del Fénix', chapter: 'Capítulo 21', time: 'Hace 16 horas' },
    { id: 9, title: 'Reinos Perdidos', chapter: 'Capítulo 67', time: 'Hace 18 horas' },
    { id: 10, title: 'La Profecía Antigua', chapter: 'Capítulo 45', time: 'Hace 20 horas' },
    { id: 11, title: 'El Camino del Guerrero', chapter: 'Capítulo 33', time: 'Hace 22 horas' },
    { id: 12, title: 'Sombras de la Noche', chapter: 'Capítulo 78', time: 'Hace 24 horas' },
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? readings.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === readings.length - 1 ? 0 : prev + 1));
  };

  const currentReading = readings[currentIndex];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Continuar Lectura */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg p-8 mb-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-8">Continuar Lectura</h2>
          
          <div className="flex items-center gap-6">
            {/* Flecha izquierda */}
            <button 
              onClick={handlePrevious}
              className="flex-shrink-0 p-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
              disabled={readings.length === 1}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Contenido */}
            <div className="flex items-center gap-8 flex-1">
              {/* Imagen a la izquierda */}
              <img 
                src={currentReading.image} 
                alt="Portada" 
                className="w-32 h-48 sm:w-40 sm:h-60 object-cover rounded-lg shadow-md flex-shrink-0"
              />

              {/* Contenido en medio */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 truncate">
                  {currentReading.title}
                </h3>
                <p className="text-slate-400 text-base sm:text-lg mb-6">
                  {currentReading.chapter}
                </p>
                
                {/* Barra de progreso */}
                <div className="mb-3">
                  <div className="flex justify-between text-base text-slate-400 mb-2">
                    <span>Progreso</span>
                    <span>{currentReading.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-300"
                      style={{ width: `${currentReading.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Botón continuar a la derecha */}
              <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg shadow-blue-500/30 text-lg">
                Continuar
              </button>
            </div>

            {/* Flecha derecha */}
            <button 
              onClick={handleNext}
              className="flex-shrink-0 p-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
              disabled={readings.length === 1}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicador de página */}
          {readings.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {readings.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Últimas Novelas Actualizadas */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-8">Últimas Novelas Actualizadas</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {latestNovels.map((novel) => (
              <div key={novel.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-colors cursor-pointer group">
                <img 
                  src={genericoImg} 
                  alt={novel.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-white font-semibold text-base mb-2 truncate">
                    {novel.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-2 truncate">
                    {novel.chapter}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {novel.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
