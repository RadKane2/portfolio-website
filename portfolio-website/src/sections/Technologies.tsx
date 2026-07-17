import SkillCard from "../components/cards/SkillCard";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

import {
  additionalSkills,
  skillGroups,
} from "../data/skills";

function Technologies() {
  return (
    <section id="tecnologias" className="py-24">
      <Container>
        <SectionTitle
          title="Tecnologías y habilidades"
          subtitle="Stack técnico"
        />

        <div className="space-y-16">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-7 max-w-3xl">
                <h3 className="text-2xl font-bold text-white">
                  {group.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-400">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
          <div className="max-w-3xl">
            <h3 className="text-xl font-semibold text-white">
              Conocimientos adicionales
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Lenguajes, frameworks y herramientas utilizados durante mi
              formación académica y el desarrollo de distintos proyectos.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Technologies;