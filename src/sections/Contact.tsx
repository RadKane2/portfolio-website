import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

import { profile } from "../data/profile";

function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-24"
    >
      {/* Luz decorativa */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Container>
        <SectionTitle
          title="Hablemos"
          subtitle="Contacto"
        />

        <div className="mx-auto max-w-5xl">
          {/* CTA principal */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center md:p-12">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Disponible para nuevas oportunidades
            </span>

            <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              ¿Tienes una oportunidad o proyecto en mente?
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Estoy interesado en seguir creciendo profesionalmente en
              desarrollo de software, infraestructura tecnológica y proyectos
              donde pueda aplicar mis conocimientos para resolver problemas
              reales.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Mail size={20} />

              Enviar correo

              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Métodos de contacto */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Mail size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Correo
              </p>

              <p className="mt-1 break-all font-medium text-slate-200 transition group-hover:text-cyan-400">
                {profile.email}
              </p>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FaLinkedin size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                LinkedIn
              </p>

              <p className="mt-1 font-medium text-slate-200 transition group-hover:text-cyan-400">
                Conectar en LinkedIn
              </p>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FaGithub size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">
                GitHub
              </p>

              <p className="mt-1 font-medium text-slate-200 transition group-hover:text-cyan-400">
                Ver repositorios
              </p>
            </a>
          </div>

          {/* Ubicación */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
            <MapPin size={17} />

            <span>{profile.location}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;