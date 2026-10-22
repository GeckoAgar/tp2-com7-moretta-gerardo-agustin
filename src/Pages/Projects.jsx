import ProjectCard from "../components/ProjectCard";

function Projects({ proyectos }) {
  return (
    <section id="proyectos" className="projects-section section">
      <div className="section-heading">
        <h2>Proyectos</h2>
      </div>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <ProjectCard key={proyecto.title} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;