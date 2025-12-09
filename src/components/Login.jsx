// src/components/Login.jsx

import React, { useState } from 'react';

// Recibimos la función que el Padre ejecutará al loguearse
function Login({ onLoginExitoso }) {
  const [password, setPassword] = useState('');
  // La contraseña "secreta" simulada. En la vida real, vendría de una base de datos.
  const PASSWORD_SECRETA = "elDogo2024";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === PASSWORD_SECRETA) {
      // ⭐️ Si es correcta, ejecutamos la función del Padre
      onLoginExitoso(true);
    } else {
      alert('Contraseña incorrecta. ¡Acceso denegado!');
      setPassword(''); // Limpiamos el campo
    }
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
      <div className="px-8 py-10">
        <div className="text-center mb-10">
          <div className="mx-auto h-16 w-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-3xl shadow-sm">
            🔐
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Bienvenido a El Dogo</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Ingresa tu clave de acceso para continuar.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 text-slate-900 dark:text-white placeholder-slate-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Ingresar
          </button>
        </form>
      </div>
      <div className="px-8 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 text-center">
        <p className="text-xs text-slate-500">¿Olvidaste tu contraseña? Contacta al administrador.</p>
      </div>
    </div>
  );
}

export default Login;