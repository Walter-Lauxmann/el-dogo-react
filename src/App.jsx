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
import './App.css'; 

function VeterinariaApp() {
  // ⭐️ 1. Nuevo Estado de Seguridad: Por defecto, nadie está logueado (false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // ⭐️ 2. Función Setter que pasaremos al componente Login
  const handleLogin = (estado) => {
    setIsLoggedIn(estado); // Cambia el estado a true si el login fue exitoso
  };

  return (
    <div className="app-container">
      <h1>El Dogo - Gestión de Veterinaria 🐾</h1>
      {/* ⭐️ 3. EL RENDERIZADO CONDICIONAL GLOBAL */}
      {isLoggedIn ? (
        // ⭐️ ENVOLVEMOS el DASHBOARD con el Proveedor de Contexto
        <VeterinariaProvider> 

        {/* ⭐️ La barra de Navegación se mostrará siempre que estemos logueados */}
        <Navegacion /> 
        
        {/* ⭐️ El CORAZÓN DEL ROUTER: Aquí se renderizará el componente que coincida con la URL */}
        <Routes>
          {/* ⭐️ Ya no pasamos props manualmente */}
          <Route path="/" element={<VistaClientes />} /> 
          <Route path="/cliente/:id" element={<VistaDetalleCliente />} />
          <Route path="/mascotas" element={<VistaMascotas />} />
          <Route path="/config" element={<VistaConfiguracion />} />
          <Route path="*" element={<h2>404 | Página no encontrada</h2>} />
        </Routes>
      </VeterinariaProvider>
      ) : (
        // Bloque B: Si el usuario NO está logueado (FALSE)
        // Mostramos el componente Login, pasándole la función handleLogin
        <Login onLoginExitoso={handleLogin} />
      )}

      {/* Opcional: un botón de Logout para volver a la pantalla de login */}
      {isLoggedIn && (
        <button className="btn-logout" onClick={() => setIsLoggedIn(false)}>
          Salir (Logout)
        </button>
      )}
    </div>
  );
}

export default VeterinariaApp;