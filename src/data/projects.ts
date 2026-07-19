import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Gamepad2,
  Route,
  ScanSearch,
} from "lucide-react";

export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: LucideIcon;
  repository?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Sistema de Gestión de Inventario y Activos de TI",
    category: "Aplicación empresarial",
    description:
      "Aplicación web para administrar empleados, equipos tecnológicos, asignaciones, recuperaciones y movimientos de activos dentro de una organización.",
    highlights: [
      "API REST desarrollada con ASP.NET Core.",
      "Autenticación y autorización basada en roles.",
      "Administración de empleados y activos tecnológicos.",
      "Dashboards operativos y base de datos relacional.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework Core",
      "Swagger",
    ],
    icon: Boxes,
    repository: "",
    demo: "",
    featured: true,
  },
  {
    title: "Clasificador Inteligente de Frutas",
    category: "Inteligencia artificial e IoT",
    description:
      "Sistema que utiliza datos de color y características físicas para agrupar y clasificar frutas mediante el algoritmo K-Means.",
    highlights: [
      "Lectura de color mediante sensor RGB.",
      "Procesamiento y limpieza de datos.",
      "Agrupamiento no supervisado con K-Means.",
      "Visualización de clústeres y valores atípicos.",
    ],
    technologies: [
      "Python",
      "K-Means",
      "Pandas",
      "Arduino",
      "ESP32",
      "Sensor RGB",
    ],
    icon: ScanSearch,
    repository: "",
    demo: "",
  },
  {
    title: "Inteligencia Artificial para 2048",
    category: "Algoritmos de búsqueda",
    description:
      "Agente inteligente para el juego 2048 capaz de evaluar movimientos futuros y seleccionar acciones mediante Expectimax.",
    highlights: [
      "Implementación del algoritmo Expectimax.",
      "Evaluación de estados posibles del tablero.",
      "Uso de heurísticas para seleccionar movimientos.",
      "Modelado de eventos probabilísticos del juego.",
    ],
    technologies: [
      "Python",
      "Expectimax",
      "Heurísticas",
      "Inteligencia Artificial",
    ],
    icon: Gamepad2,
    repository: "",
    demo: "",
  },
  {
    title: "Conecta 4 con Minimax",
    category: "Inteligencia artificial",
    description:
      "Juego estratégico contra computadora que utiliza Minimax y una función heurística para analizar las mejores jugadas.",
    highlights: [
      "Árbol de decisiones con profundidad limitada.",
      "Evaluación heurística de posiciones.",
      "Detección de victorias y movimientos válidos.",
      "Optimización de decisiones de la computadora.",
    ],
    technologies: [
      "Python",
      "Minimax",
      "Heurísticas",
      "Estructuras de datos",
    ],
    icon: BrainCircuit,
    repository: "",
    demo: "",
  },
  {
    title: "Optimización de Rutas CVRP",
    category: "Investigación y optimización",
    description:
      "Investigación y experimentación computacional sobre el problema de ruteo de vehículos con capacidad limitada.",
    highlights: [
      "Modelado de clientes, demandas y vehículos.",
      "Ejecución de múltiples corridas experimentales.",
      "Análisis de distancias y soluciones obtenidas.",
      "Visualización de rutas y resultados.",
    ],
    technologies: [
      "Python",
      "Optimización",
      "CVRP",
      "Análisis de datos",
      "Matplotlib",
    ],
    icon: Route,
    repository: "",
    demo: "",
  },
];