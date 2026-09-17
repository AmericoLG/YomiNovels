import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import logoImg from '../assets/images/logo.png';
import bgLoginImg from '../assets/images/bg-login.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulación para desarrollo frontend sin backend
    setTimeout(() => {
      localStorage.setItem('token', 'simulated_token');
      setUser({ id: 1, nombre: 'Usuario Demo', email: email, rol: 'lector' });
      navigate('/dashboard');
      setLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] font-sans m-0 p-0 box-border overflow-hidden">
      {/* FONDO LIMPIO */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.9] z-1"
        style={{ backgroundImage: `url(${bgLoginImg})` }}
      />

      {/* TARJETA CON BORDE AZUL GRUESO */}
      <div className="relative z-3 w-full max-w-[520px] mx-4 sm:mx-0 sm:w-[520px] bg-[#162032] border-[8px] sm:border-[12px] border-blue-600 rounded-[20px] p-[30px_25px] sm:p-[50px_45px] shadow-[0_0_35px_rgba(37,99,235,0.7),0_30px_60px_rgba(0,0,0,0.95)] box-border">
        {/* CABECERA */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <img 
            src={logoImg} 
            alt="YomiNovels Logo" 
            className="h-[100px] sm:h-[140px] w-auto max-w-full object-contain mb-4 sm:mb-5"
          />
          <h1 className="text-white text-[18px] sm:text-[22px] font-black tracking-[1.5px] uppercase m-0 text-center whitespace-nowrap">
            BIENVENIDO A YOMINOVELS
          </h1>
        </div>

        {/* ALERTA DE ERROR */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 text-sm p-3 rounded-md mb-[22px] text-center">
            {error}
          </div>
        )}

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px] sm:gap-[22px]">
          
          {/* CAMPO NOMBRE DE USUARIO */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-slate-200 text-[14px] sm:text-[15px] font-semibold block">
              Nombre de usuario
            </label>
            <div className="relative flex items-center w-full">
              <div className="absolute left-4 flex items-center justify-center pointer-events-none z-4">
                <svg width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YomiReader"
                required
                className="w-full bg-slate-100 text-slate-900 text-sm sm:text-base font-medium pl-[45px] sm:pl-[50px] pr-4 py-[12px] sm:py-[14px] rounded-lg border-none outline-none box-border"
              />
            </div>
          </div>

          {/* CAMPO CONTRASEÑA */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-slate-200 text-[14px] sm:text-[15px] font-semibold block">
              Contraseña
            </label>
            <div className="relative flex items-center w-full">
              <div className="absolute left-4 flex items-center justify-center pointer-events-none z-4">
                <svg width="20" height="20" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-slate-100 text-slate-900 text-sm sm:text-base font-medium pl-[45px] sm:pl-[50px] pr-4 py-[12px] sm:py-[14px] rounded-lg border-none outline-none box-border"
              />
            </div>
          </div>

          {/* BOTÓN INICIAR SESIÓN */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-[10px] bg-[#5b54e0] text-white font-bold text-[15px] sm:text-[17px] py-[12px] sm:py-[15px] rounded-lg border-none cursor-not-allowed disabled:cursor-not-allowed shadow-[0_4px_18px_rgba(91,84,224,0.5)] transition-colors duration-200 hover:bg-[#4f46e5]"
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </form>

        {/* ENLACES INFERIORES */}
        <div className="mt-6 sm:mt-7 flex flex-col items-center gap-3 text-[14px] sm:text-[15px]">
          <a 
            href="#forgot" 
            className="text-slate-400 no-underline hover:text-slate-300 transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
          <Link 
            to="/register" 
            className="text-indigo-400 no-underline font-semibold hover:text-indigo-300 transition-colors"
          >
            Crear una cuenta
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;