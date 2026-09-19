import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import genericoImg from '../assets/images/generico.png';

const Library = () => {
  const [activeTab, setActiveTab] = useState('leyendo');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recientes');

  const tabs = [
    { id: 'leyendo', name: 'Leyendo', count: 8 },
    { id: 'favoritos', name: 'Favoritos', count: 12 },
    { id: 'historial', name: 'Historial', count: 25 },
    { id: 'completadas', name: 'Completadas', count: 5 },
  ];

  const novels = [
    { id: 1, title: 'La Leyenda del Dragón Eterno', currentChapter: 45, totalChapters: 120, progress: 37.5, completed: false },
    { id: 2, title: 'El Despertar de la Magia', currentChapter: 12, totalChapters: 80, progress: 15, completed: false },
    { id: 3, title: 'Reencarnado como Rey', currentChapter: 200, totalChapters: 200, progress: 100, completed: true },
    { id: 4, title: 'El Reino de las Sombras', currentChapter: 23, totalChapters: 150, progress: 15.3, completed: false },
    { id: 5, title: 'Caminos de Luz', currentChapter: 78, totalChapters: 100, progress: 78, completed: false },
    { id: 6, title: 'La Espada del Destino', currentChapter: 56, totalChapters: 180, progress: 31.1, completed: false },
    { id: 7, title: 'El Último Guardián', currentChapter: 89, totalChapters: 90, progress: 98.9, completed: false },
    { id: 8, title: 'Cronos del Tiempo', currentChapter: 34, totalChapters: 200, progress: 17, completed: false },
  ];

  const filteredNovels = novels.filter(novel => {
    const matchesSearch = novel.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    
    if (activeTab === 'leyendo') return !novel.completed && novel.progress > 0;
    if (activeTab === 'completadas') return novel.completed;
    if (activeTab === 'favoritos') return true; // Simulado
    if (activeTab === 'historial') return true; // Simulado
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold text-white mb-6">Mi Biblioteca</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tab.name}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-slate-600 text-slate-300'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Barra de filtros y búsqueda */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg p-4 mb-6 border border-slate-700/50">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Buscar en mi biblioteca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
            >
              <option value="recientes">Más recientes</option>
              <option value="antiguos">Más antiguos</option>
              <option value="titulo">Título A-Z</option>
              <option value="progreso">Progreso</option>
            </select>
          </div>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNovels.map((novel) => (
            <div key={novel.id} className="bg-[#1e293b] rounded-xl shadow-lg overflow-hidden border border-slate-700/50">
              <img 
                src={genericoImg} 
                alt={novel.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2 truncate">
                  {novel.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  Progreso: Cap {novel.currentChapter}/{novel.totalChapters}
                </p>
                
                {/* Barra de progreso */}
                <div className="mb-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${novel.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-slate-400 text-xs mt-1 text-right">
                    {novel.progress.toFixed(1)}%
                  </p>
                </div>

                {/* Botón de acción */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
                  {novel.completed ? 'LEER DE NUEVO' : 'CONTINUAR LEYENDO'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNovels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No hay novelas en esta sección.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Library;
