// src/components/VistaClientes.jsx
import React, {useContext} from 'react';
import { VeterinariaContext } from '../context/VeterinariaContext';
import FormularioCliente from './FormularioCliente'; // ¡Lo importamos!
import ClienteItem from './ClienteItem';

// ⭐️ Importamos el objeto 'styles'
import styles from './VistaClientes.module.css';

function VistaClientes() {
  // ⭐️ Consumir la data: Accedemos directamente a lo que necesitamos del contexto
    const { 
        clientes, 
        agregarCliente, 
        actualizarCliente, 
        eliminarCliente 
    } = useContext(VeterinariaContext);
  

  return (
    
    <div className={styles.contenedorPrincipal}>
      <section className="dashboard">
        <h2 className={styles.titulo}>Gestión de Clientes</h2>
        
        <p className={styles.contador}>Total de clientes registrados: **{clientes.length}**</p> 
        {/* 
        ¡Lo usamos como una etiqueta HTML! 
        ⭐️ PASAMOS LA FUNCIÓN COMO UNA PROP al componente hijo
        */}
        <FormularioCliente onClienteAgregado={agregarCliente} />
        
        <h2>Clientes Actuales</h2>
        <ul className="lista-clientes">
          {/* ⭐️ 1. Usamos llaves {} para meter JavaScript (el .map) en el JSX */}
          {clientes.map((cliente) => (
            // ⭐️ Pasar la función como prop al componente hijo
            <ClienteItem 
              key={cliente.id} 
              cliente={cliente} 
              onEliminar={eliminarCliente}  
              onGuardar={actualizarCliente} // 👈 Nueva prop para la modificación
            />
          ))}
        </ul>
      </section>
    </div>
  );
  
}

export default VistaClientes;
