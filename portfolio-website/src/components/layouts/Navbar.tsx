function Navbar() {
  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="text-xl font-bold tracking-tight text-white"
        >
          Ángel <span className="text-cyan-400">Ríos</span>
        </a>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-cyan-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;