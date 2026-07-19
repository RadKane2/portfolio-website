import ProjectCard from "../components/cards/ProjectCard";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="proyectos"
      className="border-y border-slate-900 bg-slate-950 py-24"
    >
      <Container>
        <SectionTitle
          title="Proyectos destacados"
          subtitle="Trabajo y experiencia aplicada"
        />

        <p className="mx-auto -mt-8 mb-12 max-w-3xl text-center leading-7 text-slate-400">
          Una selección de proyectos empresariales y académicos en los que he
          aplicado desarrollo de software, bases de datos, inteligencia
          artificial y resolución de problemas.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;