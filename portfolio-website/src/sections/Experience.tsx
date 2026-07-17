import {
  BriefcaseBusiness,
  CalendarDays,
  Check,
  GraduationCap,
  MapPin,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { experienceItems } from "../data/experience";

function Experience() {
  return (
    <section
      id="experiencia"
      className="border-y border-slate-900 bg-slate-950 py-24"
    >
      <Container>
        <SectionTitle
          title="Experiencia y formación"
          subtitle="Mi trayectoria"
        />

        <div className="relative mx-auto max-w-5xl border-l border-slate-800 pl-8 md:pl-12">
          {experienceItems.map((item) => {
            const Icon =
              item.type === "work"
                ? BriefcaseBusiness
                : GraduationCap;

            return (
              <article
                key={`${item.organization}-${item.title}`}
                className="relative mb-12 last:mb-0"
              >
                {/* Icono de la línea del tiempo */}
                <div className="absolute -left-[49px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 text-cyan-400 md:-left-[65px]">
                  <Icon size={18} />
                </div>

                {/* Tarjeta */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 md:p-8">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        {item.type === "work"
                          ? "Experiencia profesional"
                          : "Formación académica"}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-lg font-medium text-slate-300">
                        {item.organization}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm text-slate-400 md:text-right">
                      <p className="flex items-center gap-2 md:justify-end">
                        <CalendarDays size={16} />
                        {item.period}
                      </p>

                      <p className="flex items-center gap-2 md:justify-end">
                        <MapPin size={16} />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                      >
                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-cyan-400"
                        />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Experience;