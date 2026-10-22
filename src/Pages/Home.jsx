import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="inicio" className="section hero-section">
      <div className="hero-copy">
        <h2>Agustin Moretta</h2>

        <h3>Estudiante - Tecnicatura en programación</h3>

        <h3>FRT - UTN 2026</h3>

        <p>
          Estoy aprendiendo desarrollo web y construyendo proyectos para mejorar
          mis conocimientos en programación.
        </p>

        <div>
          <Link className="primary-button" to="/projects">
            Ver mis proyectos
          </Link>
          <Link className="secondary-button" to="/about">
            Conóceme
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;