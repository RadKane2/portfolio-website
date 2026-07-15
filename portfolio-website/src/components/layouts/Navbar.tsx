import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400"
        >
          Ángel Ríos Vega
        </Link>

        <nav className="flex gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Sobre mí
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Proyectos
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Contacto
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;