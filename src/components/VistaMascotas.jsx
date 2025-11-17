// src/components/VistaMascotas.jsx
import React from 'react';
import FormularioMascota from './FormularioMascota';
import MascotaItem from './MascotaItem';

// ⭐️ Recibimos props de clientes, mascotas y la función para agregar
function VistaMascotas({ clientes, mascotas, onMascotaAgregada, onActualizarMascota, onEliminarMascota }) {
    
    return (
        <div>
            <h2>🐾 Gestión de Mascotas</h2>
            
            {/* 1. Usamos el formulario, pasándole las props necesarias */}
            <FormularioMascota 
                clientes={clientes} 
                onMascotaAgregada={onMascotaAgregada} 
            />
            
            {/* 2. Lista de Mascotas */}
            <h3>Total de Mascotas: {mascotas.length}</h3>
            <ul>
                {mascotas.map(mascota => (
                    // ⭐️ Pasar la función como prop al componente hijo
                    <MascotaItem 
                        key={mascota.id} 
                        clientes={clientes}
                        mascota={mascota} 
                        onEliminar={onEliminarMascota}  
                        onGuardar={onActualizarMascota} // 👈 Nueva prop para la modificación
                    />
                ))}
            </ul>
        </div>
    );
}
export default VistaMascotas;
