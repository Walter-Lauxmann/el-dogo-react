// src/App.jsx (o VeterinariaApp.jsx)

import React, { useState } from 'react'; // ¡Importamos useState!
import FormularioCliente from './components/FormularioCliente'; // ¡Lo importamos!
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
        <ul>
          {/* En la Etapa 3 veremos cómo recorrer esta lista, 
             pero por ahora solo mostramos el primer elemento */}
          <li>
            **{clientes[0].nombre}** - Tel: {clientes[0].telefono}
          </li>
        </ul>
      </section>
      
    </div>
  );
}

export default VeterinariaApp;