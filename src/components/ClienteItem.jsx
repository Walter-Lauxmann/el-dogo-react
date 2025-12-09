import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ClienteItem({ cliente, onEliminar, onGuardar }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nombreEditado, setNombreEditado] = useState(cliente.nombre);
  const [telefonoEditado, setTelefonoEditado] = useState(cliente.telefono);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    const clienteActualizado = {
      ...cliente,
      nombre: nombreEditado,
      telefono: telefonoEditado,
    };
    onGuardar(clienteActualizado);
    setIsEditing(false);
  };

  const handleEliminarClick = () => {
    if (window.confirm(`¿Seguro que quieres eliminar a ${cliente.nombre}?`)) {
      onEliminar(cliente.id);
    }
  };

  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {isEditing ? (
        <form onSubmit={handleGuardar} className="p-4 bg-indigo-50 dark:bg-indigo-900/10 h-full flex flex-col justify-center">
          <div className="space-y-3">
            <input
              value={nombreEditado}
              onChange={(e) => setNombreEditado(e.target.value)}
              className="w-full px-3 py-2 rounded border border-indigo-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm dark:bg-slate-900 dark:border-slate-600 dark:text-white"
              placeholder="Nombre"
              autoFocus
            />
            <input
              value={telefonoEditado}
              onChange={(e) => setTelefonoEditado(e.target.value)}
              className="w-full px-3 py-2 rounded border border-indigo-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm dark:bg-slate-900 dark:border-slate-600 dark:text-white"
              placeholder="Teléfono"
            />
            <div className="flex gap-2 justify-end pt-2">
              <button type="button" onClick={() => setIsEditing(false)} className="text-xs font-semibold text-slate-500 hover:text-slate-700 px-3 py-1.5 bg-white border border-slate-300 rounded shadow-sm hover:bg-slate-50">Cancelar</button>
              <button type="submit" className="text-xs font-semibold text-white px-3 py-1.5 bg-indigo-600 rounded shadow-sm hover:bg-indigo-700">Guardar</button>
            </div>
          </div>
        </form>
      ) : (
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                {cliente.nombre.charAt(0).toUpperCase()}
              </div>
              <div>
                <Link to={`/cliente/${cliente.id}`} className="block font-bold text-slate-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {cliente.nombre}
                </Link>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                  <span>📞</span> {cliente.telefono}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            {/* Nota: opacity-0 group-hover:opacity-100 requeriría 'group' en el container padre, lo agregaré, o mejor siempre visibles para usabilidad móvil */}
          </div>
          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <Link to={`/cliente/${cliente.id}`} className="text-xs font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
              Ver Detalles →
            </Link>
            <div className="flex gap-2">
              <button
                onClick={handleEditClick}
                className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
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
        </div>
      )}
    </article>
  );
}
export default ClienteItem;