// src/App.jsx (o VeterinariaApp.jsx)
import React, { useState } from 'react'; // ¡Importamos useState!
// ⭐️ Importamos las herramientas clave del Router
import { Routes, Route } from 'react-router-dom';

// ⭐️ Importamos el Proveedor
import { VeterinariaProvider } from './context/VeterinariaProvider'; 

import Navegacion from './components/Navegacion';
// ⭐️ Importamos las vistas
import VistaClientes from './components/VistaClientes';
import VistaDetalleCliente from './components/VistaDetalleCliente';
import VistaMascotas from './components/VistaMascotas';
import VistaConfiguracion from './components/VistaConfiguracion';
import Login from './components/Login';
//import './App.css'; 

function VeterinariaApp() {
  // ⭐️ 1. Nuevo Estado de Seguridad: Por defecto, nadie está logueado (false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // ⭐️ 2. Función Setter que pasaremos al componente Login
  const handleLogin = (estado) => {
    setIsLoggedIn(estado); // Cambia el estado a true si el login fue exitoso
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* ⭐️ 3. EL RENDERIZADO CONDICIONAL GLOBAL */}
      {isLoggedIn ? (
        // ⭐️ ENVOLVEMOS el DASHBOARD con el Proveedor de Contexto
        <VeterinariaProvider> 

          <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b border-slate-200 dark:bg-slate-950/70 dark:border-slate-800">
            <Navegacion /> 
          </header>
          
          <main className="container mx-auto px-4 py-8 max-w-7xl">
            {/* ⭐️ El CORAZÓN DEL ROUTER: Aquí se renderizará el componente que coincida con la URL */}
            <Routes>
              {/* ⭐️ Ya no pasamos props manualmente */}
              <Route path="/" element={<VistaClientes />} /> 
              <Route path="/cliente/:id" element={<VistaDetalleCliente />} />
              <Route path="/mascotas" element={<VistaMascotas />} />
              <Route path="/config" element={<VistaConfiguracion />} />
              <Route path="*" element={<div className="text-center py-20"><h2 className="text-3xl font-bold text-slate-700">404 | Página no encontrada</h2></div>} />
            </Routes>
          </main>

        </VeterinariaProvider>
        ) : (
          // Bloque B: Si el usuario NO está logueado (FALSE)
          // Mostramos el componente Login es un layout centrado
           <main className="min-h-screen flex items-center justify-center p-4">
             <Login onLoginExitoso={handleLogin} />
           </main>
        )}

      {/* Opcional: un botón de Logout flotante o en el header (por ahora aquí abajo como estaba pero más bonito, aunque lo ideal sería moverlo al Nav) */}
      {isLoggedIn && (
        <div className="fixed bottom-4 right-4 animate-fade-in">
             <button 
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95" 
                onClick={() => setIsLoggedIn(false)}
             >
            Salir
            </button>
        </div>
      )}
    </div>
    
  );
}

export default VeterinariaApp;