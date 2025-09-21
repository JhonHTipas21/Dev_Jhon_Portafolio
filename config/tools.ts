export type Tool = {
    slug: string;
    name: string;
    kind: "frontend" | "backend" | "devops" | "lang" | "productivity";
    summary: string;
    why: string[];
    links?: { label: string; href: string }[];
    badges?: string[];
  };
  
  export const tools: Tool[] = [
    {
      slug: "nextjs",
      name: "Next.js",
      kind: "frontend",
      summary: "Framework React para SSR/SSG, App Router y rendimiento.",
      why: [
        "Rutas modernas y SEO excelente.",
        "Imágenes optimizadas y edge ready.",
      ],
      links: [{ label: "Sitio oficial", href: "https://nextjs.org" }],
      badges: ["React", "App Router", "SSG/ISR"],
    },
    {
      slug: "react",
      name: "React",
      kind: "frontend",
      summary: "Librería UI declarativa y componible.",
      why: ["Ecosistema maduro", "Reutilización y testabilidad"],
      links: [{ label: "React.dev", href: "https://react.dev" }],
      badges: ["Hooks", "SPA/MPA"],
    },
    {
      slug: "vue",
      name: "Vue.js",
      kind: "frontend",
      summary: "Framework progresivo para interfaces reactivas.",
      why: ["Curva de aprendizaje suave", "SFC con DX agradable"],
      links: [{ label: "vuejs.org", href: "https://vuejs.org" }],
      badges: ["SFC", "Reactividad"],
    },
    {
      slug: "angular",
      name: "Angular",
      kind: "frontend",
      summary: "Framework opinado full-stack para SPAs empresariales.",
      why: ["Arquitectura clara", "CLI poderosa"],
      links: [{ label: "angular.dev", href: "https://angular.dev" }],
      badges: ["RxJS", "CLI"],
    },
    {
      slug: "node",
      name: "Node.js",
      kind: "backend",
      summary: "Entorno de ejecución JS para APIs rápidas.",
      why: ["Ecosistema NPM", "JSON end-to-end"],
      links: [{ label: "nodejs.org", href: "https://nodejs.org" }],
      badges: ["REST", "JWT", "Express/Nest"],
    },
    {
      slug: "fastapi",
      name: "FastAPI",
      kind: "backend",
      summary: "Framework Python rápido con tipado y OpenAPI.",
      why: ["Productividad altísima", "Excelente para ML/serving"],
      links: [{ label: "fastapi.tiangolo.com", href: "https://fastapi.tiangolo.com" }],
      badges: ["Pydantic", "OpenAPI"],
    },
    {
      slug: "python",
      name: "Python (Django/Flask)",
      kind: "backend",
      summary: "Backends robustos, integraciones y ciencia de datos.",
      why: ["ORMs maduros", "Ecosistema de IA"],
      badges: ["Django", "Flask", "Pandas/Numpy"],
    },
    {
      slug: "aws",
      name: "AWS",
      kind: "devops",
      summary: "Infraestructura gestionada para despliegues y datos.",
      why: ["Escalabilidad", "Servicios administrados"],
      badges: ["EC2", "RDS", "S3"],
    },
    {
      slug: "mysql",
      name: "MySQL",
      kind: "backend",
      summary: "Base de datos relacional popular y estable.",
      why: ["Sencilla y eficiente", "Amplio soporte"],
      badges: ["SQL", "ORMs"],
    },
    {
      slug: "dotnet",
      name: ".NET / C#",
      kind: "backend",
      summary: "Plataforma para servicios, APIs y apps de escritorio.",
      why: ["Rendimiento", "Ecosistema maduro"],
      badges: ["ASP.NET", "EF Core"],
    },
    {
      slug: "productividad",
      name: "Jira / Trello",
      kind: "productivity",
      summary: "Gestión ágil y seguimiento de tareas.",
      why: ["Scrum/XP", "Visibilidad de equipo"],
      badges: ["Boards", "Sprints"],
    }
  ];
  