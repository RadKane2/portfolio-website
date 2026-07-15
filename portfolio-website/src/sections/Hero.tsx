import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-lg font-medium text-cyan-400">
            Hola, soy
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Angel Daniel
            <span className="block text-cyan-400">Ríos Vega</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Software Developer · IT Infrastructure · AI Projects
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Desarrollo aplicaciones web, soluciones empresariales y proyectos
            tecnológicos utilizando React, TypeScript, ASP.NET Core, SQL Server
            y Python.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/Angel_Daniel_Rios_Vega_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Download size={20} />
              Descargar CV
            </a>

            <a
              href="https://github.com/RadKane2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
             <FaGithub size={20} />
              GitHub
            </a>

          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/angel-daniel-rios-vega-b999151b9"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://github.com/RadKane2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              <FaGithub size={24} />
            </a>

            <a
                href="mailto:angel.rfm.123@gmail.com"
                className="text-slate-400 transition hover:text-cyan-400"
                aria-label="Correo"
            >
                <Mail size={24} />
            </a>
          </div>
        </div>

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
    </section>
  );
}

export default Hero;