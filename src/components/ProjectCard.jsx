function ProjectCard({ proyecto }) {
  return (
    <article className="project-card">
      <h3>{proyecto.title}</h3>
      <p>{proyecto.description}</p>
      <p>
        <strong>Tecnologías:</strong> {proyecto.technologies}
      </p>
    </article>
  );
}

export default ProjectCard;