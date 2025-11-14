// src/App.jsx (o VeterinariaApp.jsx)

import React, { useState } from 'react'; // ¡Importamos useState!
import FormularioCliente from './components/FormularioCliente'; // ¡Lo importamos!
import ClienteItem from './components/ClienteItem';
import './App.css'; 

function VeterinariaApp() {
  
  // 🐶 Nuestro Primer Estado: Lista de Clientes
  // clientes: la variable que contiene la lista (un array de objetos)
  // setClientes: la función para cambiar esa lista
  const [clientes, setClientes] = useState([
    // Empezamos con un cliente de ejemplo para probar
    { id: 1, nombre: 'Juan Pérez', telefono: '1123456789' },
    { id: 2, nombre: 'Ana Gómez', telefono: '1198765432' },
  ]);

  // ⭐️ La Función que se ejecutará en el Padre
  const agregarNuevoCliente = (nuevoCliente) => {
    // La función recibe el objeto 'nuevoCliente' como parámetro desde el Hijo.
    // Usamos el Setter para agregar el nuevo cliente a la lista existente.
    // IMPORTANTE: Siempre debes crear una *nueva* lista (copia) con el spread operator
    // {...clientes} y agregar el nuevo elemento, ¡nunca modificar la lista original!
    setClientes([
      ...clientes, // Copia todos los clientes existentes
      nuevoCliente // Agrega el nuevo cliente al final
    ]);
  };

  // ⭐️ Función para actualizar un cliente en la lista
  const actualizarCliente = (clienteActualizado) => {
    // Usamos .map() para recorrer el array y cambiar solo el cliente deseado
    const listaActualizada = clientes.map(cliente => {
      if (cliente.id === clienteActualizado.id) {
        // Si encontramos el cliente, devolvemos el objeto NUEVO y actualizado
        return clienteActualizado;
      }
      // Si no es el cliente que buscamos, devolvemos el cliente ORIGINAL sin cambios
      return cliente;
    });
    
    // Pasamos el array completamente NUEVO a setClientes
    setClientes(listaActualizada);
  };

  // ⭐️ Función para eliminar un cliente
  const eliminarCliente = (clienteId) => {
    // 1. Usamos .filter() para crear un NUEVO array
    // .filter() incluye solo los elementos para los que la condición es TRUE.
    const listaActualizada = clientes.filter(cliente => 
      cliente.id !== clienteId // Se queda con todos EXCEPTO el que tiene el ID a eliminar
    );
    
    // 2. Pasamos el NUEVO array inmutable al Setter
    setClientes(listaActualizada);
  };

  return (
    <div className="app-container">
      <h1>El Dogo - Gestión de Veterinaria 🐾</h1>
      
      {/* Aquí podemos mostrar cuántos clientes tenemos 
        ¡El valor 'clientes.length' se actualizará automáticamente 
        cuando usemos setClientes!
      */}
      <p>Total de clientes registrados: **{clientes.length}**</p> 

      <section className="dashboard">
        <h2>Gestión de Clientes</h2>
        {/* 
        ¡Lo usamos como una etiqueta HTML! 
        ⭐️ PASAMOS LA FUNCIÓN COMO UNA PROP al componente hijo
        */}
        <FormularioCliente onClienteAgregado={agregarNuevoCliente} />
        
        <h2>Clientes Actuales</h2>
        <ul className="lista-clientes">
          {/* ⭐️ 1. Usamos llaves {} para meter JavaScript (el .map) en el JSX */}
          {clientes.map((cliente) => (
            // ⭐️ Pasar la función como prop al componente hijo
            <ClienteItem 
              key={cliente.id} 
              cliente={cliente} 
              onEliminar={eliminarCliente}  
              onGuardar={actualizarCliente} // 👈 Nueva prop para la modificación
            />

          ))}
        </ul>
      </section>
      
    </div>
  );
}

export default VeterinariaApp;