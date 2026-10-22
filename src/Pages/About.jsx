import { useState } from "react";

function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section id="sobre-mi" className="about-section section">
      <div className="section-heading">
        <h2>Sobre mí</h2>
      </div>

      <div className="about-content">
        <div>
          <p>
            Soy estudiante de programación y actualmente estoy aprendiendo
            desarrollo web con tecnologías como HTML, CSS, Bases de Datos, JavaScript y React.
          </p>

          {mostrarMas && (
            <p> <br />
              Durante mi formación fui realizando distintos proyectos, desde
            páginas web hasta sistemas de gestión y proyectos que trabajan
            con bases de datos. Mi objetivo es seguir practicando, crear
            proyectos propios y ganar experiencia para poder desarrollarme
            profesionalmente en el área de programación.
             <br />
            Actualmente estoy buscando oportunidades para aplicar mis conocimientos y seguir aprendiendo en un entorno profesional. Estoy abierto a colaborar en proyectos, aprender de otros desarrolladores y contribuir con mi entusiasmo y dedicación.
            </p>
          )}

          <button className="about-button" onClick={() => setMostrarMas(!mostrarMas)}>
            {mostrarMas ? "Ver menos" : "Ver más"}
          </button>
        </div>

        <div className="about-panel">
          <p>
            Me gusta aprender haciendo, probar cosas nuevas y buscar la forma de resolver los problemas que van apareciendo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;