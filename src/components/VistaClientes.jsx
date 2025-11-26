// src/components/VistaClientes.jsx
import React, {useContext} from 'react';
import { VeterinariaContext } from '../context/VeterinariaContext';
import FormularioCliente from './FormularioCliente'; // ¡Lo importamos!
import ClienteItem from './ClienteItem';

// ⭐️ Importamos el objeto 'styles'
// ¡Ya no necesitamos importar import styles from './VistaClientes.module.css';

function VistaClientes() {
  // ⭐️ Consumir la data: Accedemos directamente a lo que necesitamos del contexto
    const { 
        clientes, 
        agregarCliente, 
        actualizarCliente, 
        eliminarCliente 
    } = useContext(VeterinariaContext);
  

  return (
      // ⭐️ Uso de clases Tailwind: p-6 (padding: 6), bg-white (fondo blanco), shadow-lg (sombra grande)
      <div className="bg-gray-900 py-24 sm:py-32"> 
        <section className='mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3'>
          
          {/* ⭐️ text-3xl (tamaño de fuente), font-bold (negrita), mb-6 (margin-bottom: 6) */}
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">
              🐶 Gestión de Clientes
          </h2>
          
          {/* ⭐️ flex (display: flex), justify-between (espaciado) */}
          <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">
                  Total de clientes registrados: <strong className="text-xl text-indigo-800">{clientes.length}</strong>
              </p>
              {/* Aquí iría un botón de filtro o acción rápida */}
          </div>
          
          {/* El formulario ahora debería tener sus propias clases Tailwind */}
          <FormularioCliente onClienteAgregado={agregarCliente} />
          
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-700 border-t pt-4">
              Clientes Actuales
          </h2>
          
          {/* grid (display: grid), grid-cols-1 (una columna), gap-4 (espacio entre elementos) */}
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {clientes.map((cliente) => (
                <li>
                  <ClienteItem 
                      key={cliente.id} 
                      cliente={cliente} 
                      onEliminar={eliminarCliente}
                      onGuardar={actualizarCliente}
                  />
                </li>
              ))}
          </ul>
        </section>
      </div>          
  );  
}

export default VistaClientes;
