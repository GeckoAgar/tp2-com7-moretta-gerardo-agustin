function Contact({ email }) {
  return (
    <section className="section contact-section">
      <div className="section-heading">
        <h2>Contacto</h2>
      </div>
      <p>Estoy disponible para conversar sobre proyectos y oportunidades.</p>
      <a className="contact-email" href={`mailto:${email}`}>
        {email}
      </a>
      <p className="contact-copyright">© 2026 Agustin Moretta</p>
    </section>
  );
}

export default Contact;