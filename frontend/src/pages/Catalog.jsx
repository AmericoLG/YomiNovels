import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import genericoImg from '../assets/images/generico.png';

const Catalog = () => {
  const [selectedGenre, setSelectedGenre] = useState('todos');

  const genres = [
    { id: 'todos', name: 'Todos' },
    { id: 'accion', name: 'Acción' },
    { id: 'aventura', name: 'Aventura' },
    { id: 'fantasia', name: 'Fantasía' },
    { id: 'romance', name: 'Romance' },
    { id: 'terror', name: 'Terror' },
    { id: 'ciencia-ficcion', name: 'Ciencia Ficción' },
    { id: 'misterio', name: 'Misterio' },
    { id: 'historico', name: 'Histórico' },
    { id: 'comedia', name: 'Comedia' },
    { id: 'drama', name: 'Drama' },
    { id: 'sobrenatural', name: 'Sobrenatural' },
  ];

  const novels = [
    { id: 1, title: 'La Leyenda del Dragón Eterno', genre: 'fantasia', chapter: 'Capítulo 45', rating: 4.5 },
    { id: 2, title: 'El Reino de las Sombras', genre: 'terror', chapter: 'Capítulo 23', rating: 4.2 },
    { id: 3, title: 'Caminos de Luz', genre: 'fantasia', chapter: 'Capítulo 78', rating: 4.8 },
    { id: 4, title: 'La Espada del Destino', genre: 'accion', chapter: 'Capítulo 12', rating: 4.3 },
    { id: 5, title: 'El Último Guardián', genre: 'aventura', chapter: 'Capítulo 56', rating: 4.6 },
    { id: 6, title: 'Cronos del Tiempo', genre: 'ciencia-ficcion', chapter: 'Capítulo 34', rating: 4.4 },
    { id: 7, title: 'La Sombra Eterna', genre: 'misterio', chapter: 'Capítulo 89', rating: 4.1 },
    { id: 8, title: 'El Despertar del Fénix', genre: 'fantasia', chapter: 'Capítulo 21', rating: 4.7 },
    { id: 9, title: 'Reinos Perdidos', genre: 'historico', chapter: 'Capítulo 67', rating: 4.5 },
    { id: 10, title: 'La Profecía Antigua', genre: 'sobrenatural', chapter: 'Capítulo 45', rating: 4.3 },
    { id: 11, title: 'El Camino del Guerrero', genre: 'accion', chapter: 'Capítulo 33', rating: 4.6 },
    { id: 12, title: 'Sombras de la Noche', genre: 'terror', chapter: 'Capítulo 78', rating: 4.2 },
    { id: 13, title: 'Amor en el Tiempo', genre: 'romance', chapter: 'Capítulo 15', rating: 4.4 },
    { id: 14, title: 'Risas del Destino', genre: 'comedia', chapter: 'Capítulo 28', rating: 4.1 },
    { id: 15, title: 'Lágrimas de Acero', genre: 'drama', chapter: 'Capítulo 52', rating: 4.5 },
    { id: 16, title: 'El Enigma del Laberinto', genre: 'misterio', chapter: 'Capítulo 19', rating: 4.3 },
    { id: 17, title: 'Guerreros del Norte', genre: 'historico', chapter: 'Capítulo 41', rating: 4.6 },
    { id: 18, title: 'Almas Perdidas', genre: 'drama', chapter: 'Capítulo 36', rating: 4.4 },
  ];

  const filteredNovels = selectedGenre === 'todos' 
    ? novels 
    : novels.filter(novel => novel.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold text-white mb-6">Catálogo de Novelas</h1>

        {/* Selector de Géneros */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedGenre === genre.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Novelas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredNovels.map((novel) => (
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
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-slate-300 text-sm">{novel.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNovels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No hay novelas en este género.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
