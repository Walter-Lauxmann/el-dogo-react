// src/components/VistaMascotas.jsx
import React, {useContext} from 'react';
import { VeterinariaContext } from '../context/VeterinariaContext';
import FormularioMascota from './FormularioMascota';
import MascotaItem from './MascotaItem';

// ⭐️ Recibimos props de clientes, mascotas y la función para agregar
function VistaMascotas() {
    // ⭐️ Consumir la data: Accedemos directamente a lo que necesitamos del contexto
        const { 
            clientes, 
            mascotas,
            agregarMascota,
            actualizarMascota,
            eliminarMascota 
        } = useContext(VeterinariaContext);
    return (
        <div>
            <h2>🐾 Gestión de Mascotas</h2>
            
            {/* 1. Usamos el formulario, pasándole las props necesarias */}
            <FormularioMascota 
                clientes={clientes} 
                onMascotaAgregada={agregarMascota} 
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
                        onEliminar={eliminarMascota}  
                        onGuardar={actualizarMascota} // 👈 Nueva prop para la modificación
                    />
                ))}
            </ul>
        </div>
    );
}
export default VistaMascotas;
