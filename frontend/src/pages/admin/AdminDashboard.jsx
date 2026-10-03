import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] border-r border-slate-700/50 flex-shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6">YomiNovels</h2>
          <nav className="space-y-2">
            <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-white bg-blue-600/20 rounded-lg border border-blue-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dash
            </Link>
            <Link to="/admin/novelas" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors">
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
            <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">A</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">{user?.nombre}</p>
                  <p className="text-slate-400 text-xs">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-[#1e293b] rounded-lg p-4 border border-slate-700/50">
              <p className="text-slate-400 text-xs mb-1">Usuarios</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="bg-[#1e293b] rounded-lg p-4 border border-slate-700/50">
              <p className="text-slate-400 text-xs mb-1">Novelas</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="bg-[#1e293b] rounded-lg p-4 border border-slate-700/50">
              <p className="text-slate-400 text-xs mb-1">Capítulos</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="bg-[#1e293b] rounded-lg p-4 border border-slate-700/50">
              <p className="text-slate-400 text-xs mb-1">Vistas Totales</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
            <div className="bg-[#1e293b] rounded-lg p-4 border border-slate-700/50">
              <p className="text-slate-400 text-xs mb-1">Reportes</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#1e293b] rounded-lg p-6 border border-slate-700/50 mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">ACCESOS RÁPIDOS</h2>
            <div className="flex flex-wrap gap-4">
              <Link to="/admin/novelas/crear" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                + Nueva Novela
              </Link>
              <Link to="/admin/caps/subir" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                + Subir Capítulo
              </Link>
              <Link to="/admin/moderacion" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
                Moderación
              </Link>
              <Link to="/admin/ajustes" className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium">
                Ajustes
              </Link>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Chart */}
            <div className="bg-[#1e293b] rounded-lg p-6 border border-slate-700/50">
              <h2 className="text-lg font-semibold text-white mb-4">Tendencia de Lecturas</h2>
              <div className="h-64 flex items-center justify-center border border-dashed border-slate-600 rounded-lg">
                <p className="text-slate-400">Gráfico de vistas por día</p>
              </div>
            </div>

            {/* Top Novels */}
            <div className="bg-[#1e293b] rounded-lg p-6 border border-slate-700/50">
              <h2 className="text-lg font-semibold text-white mb-4">TOP NOVELAS MÁS LEÍDAS</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-16 h-20 bg-slate-700 rounded flex items-center justify-center">
                      <span className="text-slate-500 text-xs">Portada</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">Novela #{i}</p>
                      <p className="text-slate-400 text-xs">0 vistas</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Chapters */}
            <div className="bg-[#1e293b] rounded-lg p-6 border border-slate-700/50">
              <h2 className="text-lg font-semibold text-white mb-4">Últimos Capítulos Subidos</h2>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-slate-400 text-xs border-b border-slate-700">
                    <th className="pb-2">Novela</th>
                    <th className="pb-2">Capítulo</th>
                    <th className="pb-2">Fecha</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 text-white">-</td>
                    <td className="py-3 text-slate-300">-</td>
                    <td className="py-3 text-slate-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Recent Comments */}
            <div className="bg-[#1e293b] rounded-lg p-6 border border-slate-700/50">
              <h2 className="text-lg font-semibold text-white mb-4">FEED: Comentarios Recientes</h2>
              <div className="space-y-3">
                <div className="p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-slate-400 text-xs mb-1">Usuario - hace X horas</p>
                  <p className="text-white text-sm">Sin comentarios aún</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
