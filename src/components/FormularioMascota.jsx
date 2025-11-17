// src/components/FormularioMascota.jsx

import React, { useState } from 'react';

// ⭐️ Recibimos la lista de clientes para la selección del dueño
function FormularioMascota({ clientes, onMascotaAgregada }) {
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [raza, setRaza] = useState('');
  // El clienteId es el ID del dueño seleccionado, lo inicializamos como string vacío
  const [clienteId, setClienteId] = useState(''); 

  const handleNombreChange = (e) => {
    // Usamos el Setter para actualizar el estado del nombre en tiempo real
    setNombre(e.target.value); 
  };

  const handleEspecieChange = (e) => {
    // Usamos el Setter para actualizar el estado del Especie en tiempo real
    setEspecie(e.target.value); 
  };

  const handleRazaChange = (e) => {
    // Usamos el Setter para actualizar el estado del Raza en tiempo real
    setRaza(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !especie || !clienteId) {
      alert('Por favor, completa Nombre, Especie y Dueño.');
      return;
    }

    const nuevaMascota = {
      id: Date.now(),
      nombre,
      especie,
      raza,
      // ⭐️ Clave: Guardamos el ID del dueño como número
      clienteId: Number(clienteId), 
    };

    onMascotaAgregada(nuevaMascota);
    // Limpiamos los campos
    setNombre('');
    setEspecie('');
    setRaza('');
    setClienteId('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-mascota">
      <h3>Nueva Mascota</h3>
      
      {/* ⭐️ Campo Dueño: Usamos el .map para llenar el <select> */}
      <label>
        Dueño (Cliente):
        <select value={clienteId} onChange={(e) => setClienteId(e.target.value)} required>
          <option value="">-- Selecciona un dueño --</option>
          {clientes.map(cliente => (
            // ⭐️ El 'value' debe ser el ID del cliente
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre}
            </option>
          ))}
        </select>
      </label>

      {/* ... (Otros campos de nombre, especie, raza) ... */}
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
        Especie:
        <input 
          type="text" 
          value={especie} // 👈 El valor del input está controlado por el Estado
          onChange={handleEspecieChange} // 👈 Se actualiza con cada tecla
          required 
        />
      </label>
      
      <label>
        Raza:
        <input 
          type="text" 
          value={raza} 
          onChange={handleRazaChange} 
        />
      </label>
      <button type="submit">Registrar Mascota</button>
    </form>
  );
}

export default FormularioMascota;