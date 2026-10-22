function Header({ titulo }) {
  return (
    <header className="site-header">
      <p className="site-kicker">PORTAFOLIO PERSONAL</p>
      <h1>{titulo}</h1>
    </header>
  );
}

export default Header;