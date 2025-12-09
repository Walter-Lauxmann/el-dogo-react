// ⭐️ Importamos Link
import { Link, useLocation } from 'react-router-dom';

function Navegacion() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => `
    text-sm font-medium transition-colors duration-200
    ${isActive(path)
      ? 'text-indigo-600 dark:text-indigo-400'
      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'}
  `;

  return (
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
          <span className="sr-only">El Dogo</span>
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg transition-transform group-hover:scale-110">
            <span className="text-xl">🐾</span>
          </div>
          <span className="font-bold text-xl text-slate-800 dark:text-white tracking-tight">El Dogo</span>
        </Link>
      </div>

      {/* Mobile menu button (Simplificado, idealmente requeriría estado para abrir/cerrar) */}
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-200">
          <span className="sr-only">Abrir menú</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex lg:gap-x-12">
        <Link to="/" className={linkClass('/')}>Clientes</Link>
        <Link to="/mascotas" className={linkClass('/mascotas')}>Mascotas</Link>
        <Link to="/config" className={linkClass('/config')}>Configuración</Link>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Admin
        </div>
      </div>
    </nav>
  );
}

export default Navegacion;