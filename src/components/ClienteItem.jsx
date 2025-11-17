import React, { useState } from 'react';

// ⭐️ Importamos Link
import { Link } from 'react-router-dom';

import styles from './ClienteItem.module.css';

// src/components/ClienteItem.jsx (¡Lo crearemos!)
// Este componente recibirá { cliente } como una prop.
// ⭐️ Recibimos la función onEliminar como una prop

function ClienteItem({ cliente, onEliminar, onGuardar }) { // Recibimos el objeto cliente completo
  
    // ⭐️ 1. Nuevo Estado: Controla si el componente está en modo edición
  const [isEditing, setIsEditing] = useState(false);
  
  // ⭐️ 2. Estados para los campos (si estamos editando, se pueden cambiar)
  const [nombreEditado, setNombreEditado] = useState(cliente.nombre);
  const [telefonoEditado, setTelefonoEditado] = useState(cliente.telefono);
  
  // Función para cambiar al modo edición
  const handleEditClick = () => {
    setIsEditing(true);
  };
  
  // Función para manejar el guardado
  const handleGuardar = (e) => {
    e.preventDefault();
    
    // Creamos el objeto cliente actualizado
    const clienteActualizado = {
      ...cliente, // Copiamos el resto de las propiedades (como el ID)
      nombre: nombreEditado,
      telefono: telefonoEditado,
    };
    
    // ⭐️ Ejecutamos la función del Padre
    onGuardar(clienteActualizado); 
    
    // Volvemos al modo de visualización
    setIsEditing(false);
  };
    
    const handleEliminarClick = () => {
    // Lógica de confirmación antes de eliminar
    if (window.confirm(`¿Seguro que quieres eliminar a ${cliente.nombre}?`)) {
      // ⭐️ Ejecutamos la función del Padre, enviándole el ID del cliente
      onEliminar(cliente.id); 
    }
  };
  
  return (
    <li className="cliente-item">
        {isEditing ? (
        // ⭐️ Modo EDICIÓN: Un formulario que permite cambiar los valores
        <form onSubmit={handleGuardar}>
          <input 
            value={nombreEditado} 
            onChange={(e) => setNombreEditado(e.target.value)} 
          />
          <input 
            value={telefonoEditado} 
            onChange={(e) => setTelefonoEditado(e.target.value)} 
          />
          <button type="submit">💾 Guardar</button>
          <button type="button" onClick={() => setIsEditing(false)}>❌ Cancelar</button>
        </form>
      ) : (
        // ⭐️ Modo VISUALIZACIÓN
        <div className={`${styles.itemBase} ${cliente.esVIP ? styles.itemVIP : ''}`}>
            {/* Usamos los datos pasados por props */}
            <div className="info-cliente">
                {/* ⭐️ USAMOS LINK: Esto genera una URL como /cliente/10001 */}
                <Link to={`/cliente/${cliente.id}`}>
                    <strong>{cliente.nombre}</strong> 
                </Link>
                - Tel: {cliente.telefono}
            </div>

            <button className="btn-editar"onClick={handleEditClick}>✏️ Editar</button>
            <button className="btn-eliminar" onClick={handleEliminarClick} >🗑️ Eliminar</button>
        </div>
      )}
    </li>
  );
}
export default ClienteItem;