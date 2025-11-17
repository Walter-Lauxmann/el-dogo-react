// src/components/VistaClientes.jsx
import React from 'react';
import FormularioCliente from './FormularioCliente'; // ¡Lo importamos!
import ClienteItem from './ClienteItem';

function VistaClientes({ clientes, onClienteAgregado, onActualizarCliente, onEliminarCliente }) {
  
  return (
    <div className="app-container">
      <section className="dashboard">
        <h2>Gestión de Clientes</h2>
        
        <p>Total de clientes registrados: **{clientes.length}**</p> 
        {/* 
        ¡Lo usamos como una etiqueta HTML! 
        ⭐️ PASAMOS LA FUNCIÓN COMO UNA PROP al componente hijo
        */}
        <FormularioCliente onClienteAgregado={onClienteAgregado} />
        
        <h2>Clientes Actuales</h2>
        <ul className="lista-clientes">
          {/* ⭐️ 1. Usamos llaves {} para meter JavaScript (el .map) en el JSX */}
          {clientes.map((cliente) => (
            // ⭐️ Pasar la función como prop al componente hijo
            <ClienteItem 
              key={cliente.id} 
              cliente={cliente} 
              onEliminar={onEliminarCliente}  
              onGuardar={onActualizarCliente} // 👈 Nueva prop para la modificación
            />
          ))}
        </ul>
      </section>
    </div>
  );
  
}

export default VistaClientes;
