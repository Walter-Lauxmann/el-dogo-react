// src/components/FormularioCliente.jsx

import React, { useState } from 'react';

// Este es nuestro componente hijo
function FormularioCliente({ onClienteAgregado }) {
  
  // 1. Estados para capturar los datos del formulario (la 'memoria' de lo que se escribe)
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  
  // 2. Función para manejar los cambios en los campos de texto
  // El 'e' es el objeto Evento que nos da el navegador.
  const handleNombreChange = (e) => {
    // Usamos el Setter para actualizar el estado del nombre en tiempo real
    setNombre(e.target.value); 
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };
  
  // 3. Función que se dispara cuando Ricardo pulsa el botón "Registrar"
  const handleSubmit = (e) => {
    // Evitamos que la página se recargue (comportamiento por defecto del formulario HTML)
    e.preventDefault(); 
    
    if (nombre.trim() === '' || telefono.trim() === '') {
      alert('Por favor, completa ambos campos.');
      return;
    }

    // Aquí iría la lógica para registrar al cliente (lo haremos en el siguiente paso)
    const nuevoCliente = {
      id: Date.now(), // Generamos un ID simple con la hora actual
      nombre: nombre,
      telefono: telefono,
    };
    
    console.log('¡Cliente listo para registrar!', nuevoCliente);

    // ⭐️ EJECUTAMOS la función que nos pasó el Padre, enviándole los datos.
    // ¡Esto dispara la actualización del Estado en el componente VeterinariaApp!
    onClienteAgregado(nuevoCliente);
    
    // Limpiamos el formulario después de "enviar"
    setNombre('');
    setTelefono('');
  };

  // 4. Devolvemos el JSX del formulario
  return (
    <form onSubmit={handleSubmit} className="formulario-cliente">
      <h3>Nuevo Cliente</h3>
      
      <label>
        Nombre Completo:
        <input 
          type="text" 
          value={nombre} // 👈 El valor del input está controlado por el Estado
          onChange={handleNombreChange} // 👈 Se actualiza con cada tecla
          required 
        />
      </label>
      
      <label>
        Teléfono:
        <input 
          type="tel" 
          value={telefono} 
          onChange={handleTelefonoChange}
          required 
        />
      </label>
      
      <button type="submit">Registrar Cliente</button>
    </form>
  );
}

export default FormularioCliente;