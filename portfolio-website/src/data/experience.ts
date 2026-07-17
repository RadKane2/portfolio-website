export type ExperienceType = "work" | "education";

export interface ExperienceItem {
  type: ExperienceType;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    type: "work",
    title: "Practicante de IT Infraestructura",
    organization: "Daimler Truck México",
    period: "Agosto 2025 - Julio 2026",
    location: "Saltillo, Coahuila",
    description:
      "Participación en proyectos de infraestructura tecnológica, administración de activos de TI y seguimiento de procesos operativos para oficinas corporativas.",
    highlights: [
      "Gestión y control del inventario de equipos tecnológicos.",
      "Seguimiento de asignaciones y recuperación de equipos.",
      "Coordinación y seguimiento de proveedores.",
      "Apoyo en procesos de onboarding, movimientos y offboarding.",
      "Elaboración de documentación técnica y reportes ejecutivos.",
      "Participación en proyectos de expansión y adecuación de espacios.",
    ],
    technologies: [
      "Power BI",
      "Power Apps",
      "Power Automate",
      "Excel",
      "Git",
    ],
  },
  {
    type: "education",
    title: "Ingeniería en Sistemas Computacionales",
    organization: "Universidad Autónoma de Coahuila",
    period: "Agosto 2021 - Diciembre 2026",
    location: "Arteaga, Coahuila",
    description:
      "Formación enfocada en desarrollo de software, bases de datos, redes, sistemas de información, arquitectura de computadoras e ingeniería de software.",
    highlights: [
      "Desarrollo de aplicaciones web y empresariales.",
      "Programación orientada a objetos.",
      "Diseño y administración de bases de datos.",
      "Redes, infraestructura y sistemas operativos.",
      "Proyectos académicos de inteligencia artificial y optimización.",
    ],
    technologies: [
      "C#",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
];