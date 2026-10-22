import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="site-nav" aria-label="Navegación principal">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/about">Sobre mí</NavLink>
      <NavLink to="/skills">Habilidades</NavLink>
      <NavLink to="/projects">Proyectos</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
    </nav>
  );
}

export default Sidebar;