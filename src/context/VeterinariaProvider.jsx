// src/context/VeterinariaContext.jsx

import React, { useState, useEffect } from 'react';
// ⭐️ 1. Importamos el contexto desde el archivo separado
import { VeterinariaContext } from './VeterinariaContext';

// ⭐️ CREAR EL PROVEEDOR (El componente que envuelve la app y gestiona el estado)
export const VeterinariaProvider = ({ children }) => {
    
    // Mover toda la lógica de estado de Clientes y Mascotas aquí:
    
    // ESTADO Y PERSISTENCIA DE CLIENTES
    const [clientes, setClientes] = useState(() => {
        const datosGuardados = localStorage.getItem('clientesDogo');
        return datosGuardados ? JSON.parse(datosGuardados) : [];
    });
    useEffect(() => {
        localStorage.setItem('clientesDogo', JSON.stringify(clientes));
    }, [clientes]);
    
    // FUNCIONES DE CLIENTES (Alta, Baja, Modificación)
    const agregarCliente = (nuevoCliente) => {
        setClientes([...clientes, nuevoCliente]);
    };
    const actualizarCliente = (c) => {
        setClientes(clientes.map(cl => cl.id === c.id ? c : cl));
    };
    const eliminarCliente = (id) => {
        setClientes(clientes.filter(cl => cl.id !== id));
    };
    
    // ESTADO DE MASCOTAS (Similar a clientes)
    const [mascotas, setMascotas] = useState(() => {
        const datosGuardados = localStorage.getItem('mascotasDogo');
        return datosGuardados ? JSON.parse(datosGuardados) : [];
    });
    useEffect(() => {
        localStorage.setItem('mascotasDogo', JSON.stringify(mascotas));
    }, [mascotas]);
    
    // FUNCIONES DE MASCOTAS (Alta, Baja, Modificación)
    const agregarMascota = (m) => { setMascotas([...mascotas, m]); };
    const actualizarMascota = (m) => {
        setMascotas(mascotas.map(ma => ma.id === m.id ? m : ma));
    };
    const eliminarMascota = (id) => {
        setMascotas(mascotas.filter(ma => ma.id !== id));
    };

    // 3. ⭐️ DEFINIR EL OBJETO DE VALOR (Lo que estará disponible para los consumidores)
    const value = {
        // Clientes
        clientes,
        agregarCliente,
        actualizarCliente,
        eliminarCliente,
        // Mascotas
        mascotas,
        agregarMascota,
        actualizarMascota,
        eliminarMascota,
    };

    return (
        <VeterinariaContext.Provider value={value}>
            {children} {/* ⭐️ Renderiza todos los componentes hijos */}
        </VeterinariaContext.Provider>
    );
};