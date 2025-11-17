// src/components/MascotaItem.jsx
import React, { useState } from 'react';
// ⭐️ 1. IMPORTAMOS EL MÓDULO DE ESTILOS
import styles from './MascotaItem.module.css';

function MascotaItem({ clientes, mascota, onEliminar, onGuardar }) { // Recibimos el objeto mascota completo
  
  // ⭐️ 1. Nuevo Estado: Controla si el componente está en modo edición
  const [isEditing, setIsEditing] = useState(false);
  
  // ⭐️ 2. Estados para los campos (si estamos editando, se pueden cambiar)
  const [nombreEditado, setNombreEditado] = useState(mascota.nombre);
  const [especieEditado, setEspecieEditado] = useState(mascota.especie);
  const [clienteIdEditado, setClienteIdEditado] = useState(mascota.clienteId);
  
    // Función de ayuda para obtener el nombre del dueño
    const getNombreDuenio = (id) => {
        // Usamos .find() para buscar al cliente por su ID
        const duenio = clientes.find(c => c.id === id);
        return duenio ? duenio.nombre : 'Dueño Desconocido';
    };

  // Función para cambiar al modo edición
  const handleEditClick = () => {
    setIsEditing(true);
  };
  
  // Función para manejar el guardado
  const handleGuardar = (e) => {
    e.preventDefault();
    
    // Creamos el objeto mascota actualizado
    const mascotaActualizado = {
      ...mascota, // Copiamos el resto de las propiedades (como el ID)
      nombre: nombreEditado,
      especie: especieEditado,
      clienteId: Number(clienteIdEditado),
    };
    
    // ⭐️ Ejecutamos la función del Padre
    onGuardar(mascotaActualizado); 
    
    // Volvemos al modo de visualización
    setIsEditing(false);
  };
    
    const handleEliminarClick = () => {
    // Lógica de confirmación antes de eliminar
    if (window.confirm(`¿Seguro que quieres eliminar a ${mascota.nombre}?`)) {
      // ⭐️ Ejecutamos la función del Padre, enviándole el ID del mascota
      onEliminar(mascota.id); 
    }
  };
  
  return (
    <li className={styles.tarjetaMascota}>
        {isEditing ? (
        // ⭐️ Modo EDICIÓN: Un formulario que permite cambiar los valores
        <form onSubmit={handleGuardar} className={styles.modoEdicion}>
          <input 
            value={nombreEditado} 
            onChange={(e) => setNombreEditado(e.target.value)} 
          />
          <input 
            value={especieEditado} 
            onChange={(e) => setEspecieEditado(e.target.value)} 
          />
          <select value={clienteIdEditado} onChange={(e) => setClienteIdEditado(e.target.value)} required>
          <option value="">-- Selecciona un dueño --</option>
          {clientes.map(cliente => (
            // ⭐️ El 'value' debe ser el ID del cliente
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre}
            </option>
          ))}
        </select>
          <button type="submit">💾 Guardar</button>
          <button type="button" onClick={() => setIsEditing(false)}>❌ Cancelar</button>
        </form>
      ) : (
        // ⭐️ Modo VISUALIZACIÓN
        <div className={styles.infoMascota}>
            {/* Usamos los datos pasados por props */}
            <strong className={styles.nombreMascota}>{mascota.nombre}</strong> 
            - Especie: {mascota.especie} 
            <span className={styles.dueño}>
            - Dueño: {getNombreDuenio(mascota.clienteId)}
            </span>
            <div className={styles.acciones}>
              <button className="btn-editar"onClick={handleEditClick}>✏️ Editar</button>
              <button className="btn-eliminar" onClick={handleEliminarClick} >🗑️ Eliminar</button>
            </div>
        </div>
      )}
    </li>
  );
}
export default MascotaItem;