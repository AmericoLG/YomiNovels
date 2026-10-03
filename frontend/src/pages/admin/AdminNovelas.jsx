import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminNovelas = () => {
  const { user } = useAuth();
  const [novelas, setNovelas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    sinopsis: '',
    autor: '',
    tipo: 'Web Novel',
    estado: 'En emisión',
    portada_url: '',
    categorias: []
  });
  const [portadaFile, setPortadaFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // Simulación de datos - luego conectar con API
    setTimeout(() => {
      setNovelas([]);
      setLoading(false);
    }, 500);
  }, []);

  const handlePortadaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPortadaFile(file);
    }
  };

  const uploadPortada = async () => {
    if (!portadaFile) return null;

    const formData = new FormData();
    formData.append('portada', portadaFile);
    formData.append('nombre', formData.titulo);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/api/novelas/upload-portada', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();
      return data.portada_url;
    } catch (error) {
      console.error('Error al subir portada:', error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    let portadaUrl = formData.portada_url;

    // Subir portada si se seleccionó un archivo
    if (portadaFile) {
      const uploadedUrl = await uploadPortada();
      if (uploadedUrl) {
        portadaUrl = uploadedUrl;
      }
    }

    // Aquí conectar con API para crear novela
    const novelaData = {
      ...formData,
      portada_url: portadaUrl
    };

    console.log('Crear novela:', novelaData);
    
    // TODO: Llamar a la API real para crear novela
    // const response = await fetch('http://localhost:3001/api/novelas', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   },
    //   body: JSON.stringify(novelaData)
    // });

    setShowModal(false);
    setFormData({
      titulo: '',
      sinopsis: '',
      autor: '',
      tipo: 'Web Novel',
      estado: 'En emisión',
      portada_url: '',
      categorias: []
    });
    setPortadaFile(null);
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] border-r border-slate-700/50 flex-shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6">YomiNovels</h2>
          <nav className="space-y-2">
            <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dash
            </Link>
            <Link to="/admin/novelas" className="flex items-center gap-3 px-4 py-3 text-white bg-blue-600/20 rounded-lg border border-blue-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Novelas
            </Link>
            <Link to="/admin/caps" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Caps
            </Link>
            <Link to="/admin/users" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Usuarios
            </Link>
            <Link to="/admin/reportes" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Reportes
            </Link>
            <Link to="/admin/ajustes" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ajustes
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-[#1e293b] border-b border-slate-700/50 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Gestión de Novelas</h1>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              + Nueva Novela
            </button>
          </div>
        </header>

        <div className="p-8">
          {loading ? (
            <div className="text-center text-slate-400">Cargando novelas...</div>
          ) : (
            <>
              {novelas.length === 0 ? (
                <div className="bg-[#1e293b] rounded-lg p-12 border border-slate-700/50 text-center">
                  <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white mb-2">No hay novelas</h3>
                  <p className="text-slate-400 mb-4">Comienza creando tu primera novela</p>
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Crear Primera Novela
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {novelas.map((novela) => (
                    <div key={novela.id} className="bg-[#1e293b] rounded-lg border border-slate-700/50 overflow-hidden">
                      <div className="h-48 bg-slate-700 flex items-center justify-center">
                        <span className="text-slate-500">Portada</span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-2">{novela.titulo}</h3>
                        <p className="text-slate-400 text-sm mb-3 line-clamp-2">{novela.sinopsis}</p>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>{novela.autor}</span>
                          <span className="px-2 py-1 bg-slate-700 rounded">{novela.estado}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Modal Crear Novela */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
          <div className="bg-[#1e293b] rounded-xl shadow-2xl p-6 max-w-2xl w-full mx-4 border border-slate-700/50 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-white mb-6">Crear Nueva Novela</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Título</label>
                <input
                  type="text"
                  value={formData.titulo}
                  onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                  required
                  className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Sinopsis</label>
                <textarea
                  value={formData.sinopsis}
                  onChange={(e) => setFormData({ ...formData, sinopsis: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Autor</label>
                <input
                  type="text"
                  value={formData.autor}
                  onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
                  required
                  className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Tipo</label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Web Novel">Web Novel</option>
                  <option value="Light Novel">Light Novel</option>
                  <option value="Manga">Manga</option>
                  <option value="Manhwa">Manhwa</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Estado</label>
                <select
                  value={formData.estado}
                  onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                  className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="En emisión">En emisión</option>
                  <option value="Finalizado">Finalizado</option>
                  <option value="Pausado">Pausado</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Portada</label>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handlePortadaChange}
                  className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
                {portadaFile && (
                  <p className="text-slate-400 text-xs mt-2">Seleccionado: {portadaFile.name}</p>
                )}
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Subiendo...' : 'Crear Novela'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNovelas;
