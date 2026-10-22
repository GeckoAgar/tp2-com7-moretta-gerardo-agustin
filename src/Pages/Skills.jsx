import SkillCard from "../components/SkillCard";

function Skills({ habilidades }) {
  return (
    <section id="habilidades" className="skills-section section">
      <div className="section-heading">
        <h2>Habilidades</h2>
      </div>

      <ul className="skills-grid">
        {habilidades.map((habilidad) => (
          <SkillCard key={habilidad} habilidad={habilidad} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;