// src/components/FormularioCliente.jsx

import React, { useState } from 'react';

function FormularioCliente({ onClienteAgregado }) {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleTelefonoChange = (e) => setTelefono(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '' || telefono.trim() === '') {
      alert('Por favor, completa ambos campos.');
      return;
    }

    const nuevoCliente = {
      id: Date.now(),
      nombre: nombre,
      telefono: telefono,
    };

    onClienteAgregado(nuevoCliente);

    setNombre('');
    setTelefono('');
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-2xl">
          👤
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Nuevo Cliente</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Ej. Juan Pérez"
            className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            value={telefono}
            onChange={handleTelefonoChange}
            placeholder="+56 9 1234 5678"
            className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 flex justify-center items-center gap-2"
        >
          <span>✨</span> Registrar Cliente
        </button>
      </form>
    </div>
  );
}

export default FormularioCliente;