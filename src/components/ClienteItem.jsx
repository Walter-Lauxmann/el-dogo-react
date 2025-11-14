// src/components/ClienteItem.jsx (¡Lo crearemos!)
// Este componente recibirá { cliente } como una prop.
// ⭐️ Recibimos la función onEliminar como una prop

function ClienteItem({ cliente, onEliminar }) { // Recibimos el objeto cliente completo
  
    const handleEliminarClick = () => {
    // Lógica de confirmación antes de eliminar
    if (window.confirm(`¿Seguro que quieres eliminar a ${cliente.nombre}?`)) {
      // ⭐️ Ejecutamos la función del Padre, enviándole el ID del cliente
      onEliminar(cliente.id); 
    }
  };
  
  return (
    <li key={cliente.id} className="cliente-item">
      {/* Usamos los datos pasados por props */}
      <strong>{cliente.nombre}</strong> - Tel: {cliente.telefono}
      {/* Botones de acción irán aquí... */}
      {/* Botón de Eliminar */}
      <button 
        className="btn-eliminar" 
        onClick={handleEliminarClick} // 👈 El evento de clic llama a la función
      >
        🗑️ Eliminar
      </button>
      
      {/* Botón de Editar lo haremos a continuación */}
      <button className="btn-editar">✏️ Editar</button>
    </li>
  );
}
export default ClienteItem;