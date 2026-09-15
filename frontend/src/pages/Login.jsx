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
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* FONDO LIMPIO */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgLoginImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)',
          zIndex: 1
        }}
      />

      {/* TARJETA CON BORDE AZUL GRUESO */}
      <div 
        style={{
          position: 'relative',
          zIndex: 3,
          width: '520px',
          backgroundColor: '#162032',
          border: '12px solid #2563eb',
          borderRadius: '20px',
          padding: '50px 45px',
          boxShadow: '0 0 35px rgba(37, 99, 235, 0.7), 0 30px 60px rgba(0, 0, 0, 0.95)',
          boxSizing: 'border-box'
        }}
      >
        {/* CABECERA */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '32px'
          }}
        >
          <img 
            src={logoImg} 
            alt="YomiNovels Logo" 
            style={{
              height: '140px',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              marginBottom: '20px'
            }}
          />
          <h1 
            style={{
              color: '#ffffff',
              fontSize: '22px',
              fontWeight: '900',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              margin: 0,
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}
          >
            BIENVENIDO A YOMINOVELS
          </h1>
        </div>

        {/* ALERTA DE ERROR */}
        {error && (
          <div 
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              fontSize: '14px',
              padding: '12px',
              borderRadius: '6px',
              marginBottom: '22px',
              textAlign: 'center'
            }}
          >
            {error}
          </div>
        )}

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          
          {/* CAMPO NOMBRE DE USUARIO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
            <label 
              style={{
                color: '#e2e8f0',
                fontSize: '15px',
                fontWeight: '600',
                display: 'block'
              }}
            >
              Nombre de usuario
            </label>
            <div 
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  zIndex: 4
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YomiReader"
                required
                style={{
                  width: '100%',
                  backgroundColor: '#f1f5f9',
                  color: '#0f172a',
                  fontSize: '16px',
                  fontWeight: '500',
                  paddingLeft: '50px',
                  paddingRight: '16px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  borderRadius: '8px',
                  border: 'none',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* CAMPO CONTRASEÑA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
            <label 
              style={{
                color: '#e2e8f0',
                fontSize: '15px',
                fontWeight: '600',
                display: 'block'
              }}
            >
              Contraseña
            </label>
            <div 
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  left: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  zIndex: 4
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  backgroundColor: '#f1f5f9',
                  color: '#0f172a',
                  fontSize: '16px',
                  fontWeight: '500',
                  paddingLeft: '50px',
                  paddingRight: '16px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  borderRadius: '8px',
                  border: 'none',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* BOTÓN INICIAR SESIÓN */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              marginTop: '10px',
              backgroundColor: '#5b54e0',
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '17px',
              paddingTop: '15px',
              paddingBottom: '15px',
              borderRadius: '8px',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 18px rgba(91, 84, 224, 0.5)',
              transition: 'background-color 0.2s ease'
            }}
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </form>

        {/* ENLACES INFERIORES */}
        <div 
          style={{
            marginTop: '28px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            fontSize: '15px'
          }}
        >
          <a 
            href="#forgot" 
            style={{
              color: '#94a3b8',
              textDecoration: 'none'
            }}
          >
            ¿Olvidaste tu contraseña?
          </a>
          <Link 
            to="/register" 
            style={{
              color: '#818cf8',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Crear una cuenta
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;