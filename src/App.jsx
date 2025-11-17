// src/App.jsx (o VeterinariaApp.jsx)
import React, { useState, useEffect } from 'react'; // ¡Importamos useState!
// ⭐️ Importamos las herramientas clave del Router
import { Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
// ⭐️ Importamos las vistas
import VistaClientes from './components/VistaClientes';
import VistaDetalleCliente from './components/VistaDetalleCliente';
import VistaMascotas from './components/VistaMascotas';
import VistaConfiguracion from './components/VistaConfiguracion';
import Login from './components/Login';
import './App.css'; 

function VeterinariaApp() {
  // ⭐️ 1. Nuevo Estado de Seguridad: Por defecto, nadie está logueado (false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // ⭐️ 2. Función Setter que pasaremos al componente Login
  const handleLogin = (estado) => {
    setIsLoggedIn(estado); // Cambia el estado a true si el login fue exitoso
  };

  //////////// CLIENTES ///////////

  // Obtenemos los clientes
  const [clientes, setClientes] = useState(() => {
    const datosGuardados = localStorage.getItem('clientesDogo');
    // Si hay datos guardados, los parseamos (JSON.parse), si no, devolvemos un array vacío
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  }
  );

  // ⭐️ 2. useEffect para GUARDAR los clientes
  useEffect(() => {
    // Esta función se dispara CADA VEZ que el array 'clientes' cambia
    console.log("Detectado cambio en la lista de clientes. ¡Guardando!");
    // Guardamos la lista en el navegador, convertida a string (JSON.stringify)
    localStorage.setItem('clientesDogo', JSON.stringify(clientes));
  }, [clientes]); // 👈 Dependencia: Vigila la variable 'clientes'

  // ⭐️ La Función que se ejecutará en el Padre
  const agregarCliente = (nuevoCliente) => {
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

  //////////// MASCOTAS ///////////
  // Obtenemos las mascotas
  const [mascotas, setMascotas] = useState(() => {
    const datosGuardados = localStorage.getItem('mascotasDogo');
    // Si hay datos guardados, los parseamos (JSON.parse), si no, devolvemos un array vacío
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  }
  );

  // ⭐️ 2. useEffect para GUARDAR las mascotas
  useEffect(() => {
    // Esta función se dispara CADA VEZ que el array 'mascotas' cambia
    console.log("Detectado cambio en la lista de mascotas. ¡Guardando!");
    // Guardamos la lista en el navegador, convertida a string (JSON.stringify)
    localStorage.setItem('mascotasDogo', JSON.stringify(mascotas));
  }, [mascotas]); // 👈 Dependencia: Vigila la variable 'mascotas'

  const agregarMascota = (nuevoMascota) => {
    setMascotas([
      ...mascotas, // Copia todos los Mascotas existentes
      nuevoMascota // Agrega el nuevo Mascota al final
    ]);
  };

  // ⭐️ Función para actualizar un cliente en la lista
  const actualizarMascota = (mascotaActualizado) => {
    // Usamos .map() para recorrer el array y cambiar solo el mascota deseado
    const listaActualizada = mascotas.map(mascota => {
      if (mascota.id === mascotaActualizado.id) {
        // Si encontramos el mascota, devolvemos el objeto NUEVO y actualizado
        return mascotaActualizado;
      }
      // Si no es el mascota que buscamos, devolvemos el mascota ORIGINAL sin cambios
      return mascota;
    });
    
    // Pasamos el array completamente NUEVO a setmascotas
    setMascotas(listaActualizada);
  };

  // ⭐️ Función para eliminar un mascota
  const eliminarMascota = (mascotaId) => {
    // 1. Usamos .filter() para crear un NUEVO array
    // .filter() incluye solo los elementos para los que la condición es TRUE.
    const listaActualizada = mascotas.filter(mascota => 
      mascota.id !== mascotaId // Se queda con todos EXCEPTO el que tiene el ID a eliminar
    );
    
    // 2. Pasamos el NUEVO array inmutable al Setter
    setMascotas(listaActualizada);
  };


  return (
    <div className="app-container">
      <h1>El Dogo - Gestión de Veterinaria 🐾</h1>
      {/* ⭐️ 3. EL RENDERIZADO CONDICIONAL GLOBAL */}
      {isLoggedIn ? (
        // Bloque A: Si el usuario está logueado (TRUE) 
      <>
        {/* ⭐️ La barra de Navegación se mostrará siempre que estemos logueados */}
        <Navegacion /> 
        
        {/* ⭐️ El CORAZÓN DEL ROUTER: Aquí se renderizará el componente que coincida con la URL */}
        <Routes>
          {/* Route 1: La ruta por defecto (URL: /) */}
          <Route path="/" element={
            <VistaClientes 
              clientes={clientes}
              onClienteAgregado={agregarCliente}
              onActualizarCliente={actualizarCliente}
              onEliminarCliente={eliminarCliente}
            />
          } /> 

          {/* ⭐️ RUTA DINÁMICA: /cliente/:id */}
            <Route path="/cliente/:id" element={
                <VistaDetalleCliente 
                    clientes={clientes} // Necesitamos la lista para buscar al dueño
                    mascotas={mascotas} // Necesitamos las mascotas para filtrar
                />
            } />

          {/* Route 2: URL: /mascotas */}
          <Route path="/mascotas" element={
            <VistaMascotas
              clientes={clientes} // Lista de clientes para el select
              mascotas={mascotas} // Lista de mascotas para mostrar
              onMascotaAgregada={agregarMascota} // Función para agregar
              onActualizarMascota={actualizarMascota}
              onEliminarMascota={eliminarMascota}   
            />
          } />
          {/* Route 3: URL: /config */}
          <Route path="/config" element={<VistaConfiguracion />} />
          {/* Opcional: Ruta para cuando no se encuentra nada */}
          <Route path="*" element={<h2>404 | Página no encontrada</h2>} />
        </Routes>
      </>
      ) : (
        // Bloque B: Si el usuario NO está logueado (FALSE)
        // Mostramos el componente Login, pasándole la función handleLogin
        <Login onLoginExitoso={handleLogin} />
      )}

      {/* Opcional: un botón de Logout para volver a la pantalla de login */}
      {isLoggedIn && (
        <button className="btn-logout" onClick={() => setIsLoggedIn(false)}>
          Salir (Logout)
        </button>
      )}
    </div>
  );
}

export default VeterinariaApp;