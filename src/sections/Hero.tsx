import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../data/profile";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden py-24"
    >
      {/* Luces decorativas del fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Información principal */}
          <div>
            <p className="mb-4 text-lg font-medium text-cyan-400">
              Hola, soy
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.firstName}
              <span className="block text-cyan-400">
                {profile.lastName}
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
              {profile.roles.join(" · ")}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              {profile.description}
            </p>

            {/* Botones */}
            <div className="mt-9 flex flex-wrap gap-4">
             <Button
                href={profile.cv}
                download
              >
                <span className="inline-flex items-center gap-2">
                  <Download size={20} />
                  Descargar CV
                </span>
              </Button>

              <Button
                href={profile.github}
                variant="outline"
                external
              >
                <span className="inline-flex items-center gap-2">
                  <FaGithub size={20} />
                  GitHub
                </span>
              </Button>
            </div>

            {/* Redes sociales */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Correo electrónico"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Imagen o iniciales */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 shadow-2xl shadow-cyan-950/40 sm:h-96 sm:w-96">
                <div className="text-center">
                  <span className="block text-7xl font-bold text-cyan-400">
                    AR
                  </span>

                  <span className="mt-3 block text-sm uppercase tracking-[0.35em] text-slate-400">
                    Software Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;