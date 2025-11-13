// src/App.jsx o similar

import './App.css'; // Asume que tienes un archivo CSS para estilos

// 1. Definimos nuestro componente principal
// Es una función que, por convención, empieza con Mayúscula.
function VeterinariaApp() {
  
  // 2. Aquí dentro va la lógica de JavaScript (aún simple)
  const nombreApp = "El Dogo - Gestión de Veterinaria";

  // 3. El componente DEBE devolver el JSX (lo que se va a ver en pantalla)
  return (
    <div className="app-container">
      {/* Esto es JSX. Parece HTML, ¡pero nos permite meter variables de JS!
        Para ello, usamos llaves { }
      */}
      <h1>{nombreApp}</h1>
      <p>¡Bienvenido, Ricardo! Aquí gestionarás a tus Clientes y Mascotas.</p>
      
      {/* En la próxima etapa, aquí pondremos otros componentes */}
      <section className="dashboard">
        {/* Placeholder para Clientes y Mascotas */}
        <h2>Gestión de Clientes</h2>
        <h2>Gestión de Mascotas</h2>
      </section>

      {/* ¡Ojo! En JSX, la clase de CSS se llama 'className', no 'class',
        para evitar conflictos con la palabra reservada 'class' de JS.
      */}
      
    </div>
  );
}

// 4. Exportamos el componente para poder usarlo en otro lugar (generalmente index.js)
export default VeterinariaApp;