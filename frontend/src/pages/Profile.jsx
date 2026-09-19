import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [email, setEmail] = useState('usuario@email.com');
  const [password, setPassword] = useState('******************');
  const [notifications, setNotifications] = useState(true);

  const handleSaveChanges = () => {
    // Simular guardado
    alert('Cambios guardados correctamente');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold text-white mb-6">Mi Perfil</h1>

        {/* Tarjeta de identidad de usuario */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg p-6 mb-6 border border-slate-700/50">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              LN
            </div>
            
            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Lector_Novelas2026</h2>
              <p className="text-slate-400">Miembro desde: Septiembre 2026</p>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full border-2 border-blue-400">
                Borde Azul
              </span>
              <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                Insignia Ko-fi
              </span>
            </div>
          </div>
        </div>

        {/* Estadísticas de lectura */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#1e293b] rounded-xl shadow-lg p-6 border border-slate-700/50">
            <h3 className="text-slate-400 text-sm font-medium mb-2">CAPÍTULOS LEÍDOS</h3>
            <p className="text-4xl font-bold text-white">248</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl shadow-lg p-6 border border-slate-700/50">
            <h3 className="text-slate-400 text-sm font-medium mb-2">TIEMPO DE LECTURA</h3>
            <p className="text-4xl font-bold text-white">42 Horas</p>
          </div>
          <div className="bg-[#1e293b] rounded-xl shadow-lg p-6 border border-slate-700/50">
            <h3 className="text-slate-400 text-sm font-medium mb-2">NOVELAS COMPLETADAS</h3>
            <p className="text-4xl font-bold text-white">12</p>
          </div>
        </div>

        {/* Insignias y logros */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg p-6 mb-6 border border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-4">Insignias y Logros de Comunidad</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-medium">
              🏆 Lector Frecuente
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-medium">
              💎 Mecenas del Servidor
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-medium">
              📚 100 Capítulos
            </span>
          </div>
        </div>

        {/* Ajustes de cuenta */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg p-6 mb-6 border border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-4">Ajustes de Cuenta y Acceso</h3>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="text-slate-400 sm:w-48">Correo Electrónico:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="text-slate-400 sm:w-48">Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                Cambiar Contraseña
              </button>
            </div>
          </div>
        </div>

        {/* Notificaciones */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg p-6 mb-6 border border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-4">Notificaciones</h3>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="w-5 h-5 rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-slate-300">
              Recibir alertas cuando se publique un nuevo capítulo de mi biblioteca
            </span>
          </label>
        </div>

        {/* Botón guardar */}
        <button
          onClick={handleSaveChanges}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/30"
        >
          Guardar Cambios
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
