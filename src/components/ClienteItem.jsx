// src/components/ClienteItem.jsx (¡Lo crearemos!)
// Este componente recibirá { cliente } como una prop.

function ClienteItem({ cliente }) { // Recibimos el objeto cliente completo
  return (
    <li key={cliente.id} className="cliente-item">
      {/* Usamos los datos pasados por props */}
      <strong>{cliente.nombre}</strong> - Tel: {cliente.telefono}
      {/* Botones de acción irán aquí... */}
    </li>
  );
}
export default ClienteItem;