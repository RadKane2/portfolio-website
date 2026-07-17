// src/sections/About.tsx
import { BrainCircuit, Code2, ServerCog } from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { about } from "../data/about";

const icons = [Code2, ServerCog, BrainCircuit];

function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <Container>
        <SectionTitle title="Sobre mí" subtitle="Conóceme" />

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-3xl border border-cyan-400/20 bg-slate-900">
              <span className="text-7xl font-bold text-cyan-400">AR</span>
            </div>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-400">
              {about.description}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {about.strengths.map((strength, index) => {
                const Icon = icons[index];

                return (
                  <article
                    key={strength.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
                  >
                    <Icon className="mb-4 text-cyan-400" size={28} />

                    <h3 className="text-lg font-semibold text-white">
                      {strength.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {strength.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;