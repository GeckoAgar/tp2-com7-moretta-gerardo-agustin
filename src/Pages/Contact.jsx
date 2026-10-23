function Contact({ email }) {
  return (
    <section className="section contact-section">
      <div className="section-heading">
        <h2>Contacto</h2>
      </div>
      <p className="contact-intro">
        Estoy buscando mi primera experiencia en programación. Si tenés un
        proyecto o una oportunidad, escribime.
      </p>
      <div className="contact-methods">
        <article className="contact-card">
          <h3>Correo electrónico</h3>
          <p>{email}</p>
          <a className="primary-button" href={`mailto:${email}`}>
            Enviar un correo
          </a>
        </article>
        <article className="contact-card">
          <h3>GitHub</h3>
          <p>github.com/GeckoAgar</p>
          <a
            className="primary-button"
            href="https://github.com/GeckoAgar"
            target="_blank"
            rel="noreferrer"
          >
            Visitar
          </a>
        </article>
      </div>
      <p className="contact-copyright">© 2026 Agustin Moretta</p>
    </section>
  );
}

export default Contact;