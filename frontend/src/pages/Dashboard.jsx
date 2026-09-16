import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">Perfil</h3>
              <div className="mt-4 space-y-2">
                <p><strong>Nombre:</strong> {user?.nombre}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Rol:</strong> {user?.rol}</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800">Estadísticas</h3>
              <div className="mt-4 space-y-2">
                <p><strong>Novelas:</strong> 0</p>
                <p><strong>Capítulos:</strong> 0</p>
                <p><strong>Vistas:</strong> 0</p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800">Acciones</h3>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                  Ver Biblioteca
                </button>
                <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                  Historial
                </button>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Bienvenido a YomiNovels</h3>
            <p className="text-gray-600">
              Sistema de lectura de novelas web con gestión de usuarios, biblioteca personal, 
              valoraciones y comentarios. Más funcionalidades próximamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
