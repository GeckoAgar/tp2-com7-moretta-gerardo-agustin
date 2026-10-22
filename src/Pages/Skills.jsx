import SkillCard from "../components/SkillCard";

function Skills({ categorias, aprendiendo }) {
  return (
    <section id="habilidades" className="skills-section section">
      <div className="section-heading">
        <h2>Habilidades</h2>
      </div>

      <div className="skills-categories">
        {categorias.map(({ nombre, habilidades }) => (
          <section className="skill-category" key={nombre}>
            <h3>{nombre}</h3>
            <ul className="skills-grid">
              {habilidades.map((habilidad) => (
                <SkillCard key={habilidad} habilidad={habilidad} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="learning-section" aria-labelledby="learning-heading">
        <h3 id="learning-heading">Estoy aprendiendo</h3>
        <p>Actualmente estoy ampliando mis conocimientos en:</p>
        <ul className="skills-grid">
          {aprendiendo.map((habilidad) => (
            <SkillCard key={habilidad} habilidad={habilidad} />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Skills;