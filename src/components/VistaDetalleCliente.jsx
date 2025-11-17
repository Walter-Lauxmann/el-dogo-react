// src/components/VistaDetalleCliente.jsx

import React from 'react';
// ⭐️ Importamos las herramientas clave: useParams para leer la URL
import { useParams, Link } from 'react-router-dom'; 

function VistaDetalleCliente({ clientes, mascotas }) {
    // ⭐️ 1. Leer el ID desde la URL
    // useParams() devuelve un objeto: { id: "valor_en_la_url" }
    const { id: clienteIdString } = useParams();
    // Convertimos el string de la URL a número
    const clienteId = Number(clienteIdString); 
    
    // ⭐️ 2. Buscar el cliente principal
    const cliente = clientes.find(c => c.id === clienteId);
    
    // ⭐️ 3. Filtrar las mascotas asociadas a este cliente
    const mascotasDelCliente = mascotas.filter(m => m.clienteId === clienteId);

    // Manejo de Error 404
    if (!cliente) {
        return <h2>Cliente no encontrado (ID: {clienteId})</h2>;
    }

    return (
        <div className="detalle-cliente-container">
            <Link to="/">← Volver a la Lista de Clientes</Link>
            
            <section className="info-principal">
                <h2>👤 Cliente: {cliente.nombre}</h2>
                <p>Teléfono: **{cliente.telefono}**</p>
                <hr />
            </section>

            <section className="mascotas-asociadas">
                <h3>🐾 Mascotas de {cliente.nombre} ({mascotasDelCliente.length})</h3>
                {mascotasDelCliente.length === 0 ? (
                    <p>Este cliente aún no tiene mascotas registradas.</p>
                ) : (
                    <ul>
                        {mascotasDelCliente.map(mascota => (
                            <li key={mascota.id}>
                                **{mascota.nombre}** - Especie: {mascota.especie}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}

export default VistaDetalleCliente;