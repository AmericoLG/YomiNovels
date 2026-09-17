import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#162032] border-t border-slate-700/50">
      <div className="w-full px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © 2026 YomiNovels • Todos los derechos reservados
          </p>

          {/* Enlaces centrales */}
          <div className="flex items-center gap-4">
            <Link 
              to="/donar" 
              className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              <span className="text-red-500">♥</span> Donar
            </Link>
            <span className="text-slate-600">•</span>
            <Link 
              to="/dmca" 
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              DMCA
            </Link>
          </div>

          {/* Volver arriba */}
          <button 
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
          >
            <span>↑</span> Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
