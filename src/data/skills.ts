import {
  AppWindow,
  BarChart3,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  ServerCog,
  Workflow,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type SkillContext =
  | "Experiencia aplicada"
  | "Proyecto aplicado"
  | "Proyectos de IA"
  | "Formación académica";

export interface Skill {
  name: string;
  description: string;
  context: SkillContext;
  icon: LucideIcon;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Desarrollo de software",
    description:
      "Tecnologías utilizadas para construir aplicaciones web, interfaces y servicios empresariales.",
    skills: [
      {
        name: "React",
        description:
          "Desarrollo de interfaces web, componentes reutilizables y consumo de APIs REST.",
        context: "Proyecto aplicado",
        icon: AppWindow,
      },
      {
        name: "TypeScript",
        description:
          "Desarrollo frontend con tipado estático, interfaces y componentes mantenibles.",
        context: "Proyecto aplicado",
        icon: Braces,
      },
      {
        name: "C# y ASP.NET Core",
        description:
          "Creación de APIs REST, autenticación, autorización y lógica de negocio.",
        context: "Proyecto aplicado",
        icon: ServerCog,
      },
      {
        name: "Entity Framework Core",
        description:
          "Acceso a datos, relaciones entre entidades y persistencia en aplicaciones .NET.",
        context: "Proyecto aplicado",
        icon: Database,
      },
    ],
  },
  {
    title: "Datos y automatización",
    description:
      "Herramientas para administrar información, generar reportes y automatizar procesos.",
    skills: [
      {
        name: "SQL Server",
        description:
          "Diseño de bases de datos relacionales, consultas y almacenamiento de información.",
        context: "Proyecto aplicado",
        icon: Database,
      },
      {
        name: "MySQL",
        description:
          "Modelado de datos y desarrollo de consultas para aplicaciones académicas y web.",
        context: "Formación académica",
        icon: Database,
      },
      {
        name: "Power BI",
        description:
          "Creación de reportes y visualizaciones para el seguimiento de información.",
        context: "Experiencia aplicada",
        icon: BarChart3,
      },
      {
        name: "Power Platform",
        description:
          "Uso de Power Apps y Power Automate para soluciones y flujos de trabajo.",
        context: "Experiencia aplicada",
        icon: Workflow,
      },
    ],
  },
  {
    title: "Herramientas y lenguajes",
    description:
      "Tecnologías utilizadas para control de versiones, documentación y proyectos académicos.",
    skills: [
      {
        name: "Git y GitHub",
        description:
          "Control de versiones, organización de commits y administración de repositorios.",
        context: "Experiencia aplicada",
        icon: GitBranch,
      },
      {
        name: "Swagger",
        description:
          "Documentación, exploración y validación de endpoints en servicios REST.",
        context: "Proyecto aplicado",
        icon: FileCode2,
      },
      {
        name: "Python",
        description:
          "Desarrollo de algoritmos, análisis de datos y proyectos académicos de IA.",
        context: "Proyectos de IA",
        icon: BrainCircuit,
      },
      {
        name: "JavaScript",
        description:
          "Desarrollo de funcionalidades web, validaciones y manipulación de interfaces.",
        context: "Formación académica",
        icon: Code2,
      },
    ],
  },
];

export const additionalSkills = [
  "Java",
  "Django",
  "Flask",
  "Visual Basic",
  "C",
  "C++",
  "HTML",
  "CSS",
  "Power Apps",
  "Power Automate",
  "Visual Studio",
  "Visual Studio Code",
  "DataGrip",
];