import {
  ArrowUp,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../ui/Container";

import { profile } from "../../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Nombre */}
          <div className="text-center md:text-left">
            <a
              href="#inicio"
              className="text-lg font-bold text-white"
            >
              Ángel <span className="text-cyan-400">Ríos</span>
            </a>

            <p className="mt-1 text-sm text-slate-500">
              © {currentYear} {profile.name}
            </p>
          </div>

          {/* Redes */}
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Correo electrónico"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              <Mail size={20} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Regresar arriba */}
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-400"
          >
            Volver arriba
            <ArrowUp size={17} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;