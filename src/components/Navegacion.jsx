// ⭐️ Importamos Link
import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <nav className="main-nav">
      {/* ⭐️ Usamos Link en lugar de <a> */}
      <Link to="/">Clientes</Link> 
      <Link to="/mascotas">Mascotas</Link>
      <Link to="/config">Configuración</Link>
    </nav>
  );
}

export default Navegacion;