// src/components/MascotaItem.jsx
import React, { useState } from 'react';

function MascotaItem({ clientes, mascota, onEliminar, onGuardar }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nombreEditado, setNombreEditado] = useState(mascota.nombre);
  const [especieEditado, setEspecieEditado] = useState(mascota.especie);
  const [clienteIdEditado, setClienteIdEditado] = useState(mascota.clienteId);

  const getNombreDuenio = (id) => {
    const duenio = clientes.find(c => c.id === id);
    return duenio ? duenio.nombre : 'Dueño Desconocido';
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    const mascotaActualizado = {
      ...mascota,
      nombre: nombreEditado,
      especie: especieEditado,
      clienteId: Number(clienteIdEditado),
    };
    onGuardar(mascotaActualizado);
    setIsEditing(false);
  };

  const handleEliminarClick = () => {
    if (window.confirm(`¿Seguro que quieres eliminar a ${mascota.nombre}?`)) {
      onEliminar(mascota.id);
    }
  };

  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {isEditing ? (
        <form onSubmit={handleGuardar} className="p-4 bg-emerald-50 dark:bg-emerald-900/10 h-full flex flex-col justify-center gap-3">
          <input
            value={nombreEditado}
            onChange={(e) => setNombreEditado(e.target.value)}
            className="w-full px-3 py-2 rounded border border-emerald-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm dark:bg-slate-900 dark:border-slate-600 dark:text-white"
            placeholder="Nombre"
          />
          <input
            value={especieEditado}
            onChange={(e) => setEspecieEditado(e.target.value)}
            className="w-full px-3 py-2 rounded border border-emerald-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm dark:bg-slate-900 dark:border-slate-600 dark:text-white"
            placeholder="Especie"
          />
          <select
            value={clienteIdEditado}
            onChange={(e) => setClienteIdEditado(e.target.value)}
            required
            className="w-full px-3 py-2 rounded border border-emerald-300 focus:ring-2 focus:ring-emerald-500 outline-none text-sm dark:bg-slate-900 dark:border-slate-600 dark:text-white"
          >
            <option value="">-- Selecciona un dueño --</option>
            {clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nombre}
              </option>
            ))}
          </select>
          <div className="flex gap-2 justify-end pt-2">
            <button type="button" onClick={() => setIsEditing(false)} className="text-xs font-semibold text-slate-500 hover:text-slate-700 px-3 py-1.5 bg-white border border-slate-300 rounded shadow-sm hover:bg-slate-50">Cancelar</button>
            <button type="submit" className="text-xs font-semibold text-white px-3 py-1.5 bg-emerald-600 rounded shadow-sm hover:bg-emerald-700">Guardar</button>
          </div>
        </form>
      ) : (
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl shadow-sm">
                🐾
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 dark:text-white leading-tight">
                  {mascota.nombre}
                </h4>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 inline-block mt-1">
                  {mascota.especie}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">Dueño:</span> {getNombreDuenio(mascota.clienteId)}
            </p>
            {/* Opcional: Mostrar Raza si existe */}
            {mascota.raza && <p className="text-sm text-slate-500 dark:text-slate-400"><span className="font-medium text-slate-700 dark:text-slate-300">Raza:</span> {mascota.raza}</p>}
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={handleEditClick}
              className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
              title="Editar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>
            <button
              onClick={handleEliminarClick}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
              title="Eliminar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
export default MascotaItem;