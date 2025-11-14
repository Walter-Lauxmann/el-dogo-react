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
    <div className="login-container">
      <h2>🔑 Verificación de Usuario</h2>
      <p>Ingresa tu clave para acceder a la gestión de Clientes y Mascotas.</p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;