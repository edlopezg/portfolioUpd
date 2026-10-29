export const profile = {
  name: "Ed Jasser Lopez Guardado",
  email: "edj.lopezguardado@gmail.com",
  phone: "+52 33 2232 9247",
  linkedin: "https://www.linkedin.com/in/ed-jasser-lopez-guardado/",
  github: "https://github.com/edlopezg",
  portfolio: "https://portfolio2024elg.netlify.app/",
  photo: "/images/profile picture.jpeg",
  aboutPhoto: "/images/about-photo.jpg",
  resumeEn: "/documents/CV-Ed-Lopez-Guardado-EN.pdf",
  resumeEs: "/documents/CV-Ed-Lopez-Guardado-ES.pdf",
};

export const marqueeItems = [
  "React",
  "TypeScript",
  "Python",
  "Django",
  "PostgreSQL",
  "Oracle",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "DDD",
  "CQRS",
  "Hexagonal Architecture",
  "AI Agents",
];

const stackMuhami = [
  "Python",
  "Django",
  "PostgreSQL",
  "Oracle",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "React",
  "TypeScript",
];

const stackMetlife = [
  "React",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Material UI",
  "Context API",
  "REST APIs",
  "Webpack",
  "npm",
  "Git",
  "Azure DevOps",
];

const stackTata = ["Java", "Spring Boot", "Jira", "Notion", "Scrum"];

const stackNissan = [
  "React",
  "JavaScript",
  "Webpack",
  "npm",
  "REST APIs",
  "SASS",
  "HTML5",
  "CSS3",
];

const stackHidro = [
  "HTML5",
  "CSS3",
  "SASS",
  "Bootstrap",
  "WordPress",
  "JavaScript",
];

export const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    profile: {
      role: "Senior Full Stack Developer",
      location: "Mexico City, Mexico (Hybrid)",
    },
    hero: {
      lines: ["I Build", "Systems.", "I Transform", "Data.", "Deliver", "Results."],
      accent: [2, 3, 5],
      annotation: "Frontend Craft. Backend Depth.",
      text:
        "Full Stack Developer building scalable products — React interfaces, Python/Django backends, cloud-native architecture, and AI-assisted delivery.",
      downloadEn: "CV · English",
      downloadEs: "CV · Español",
      cta: "Say Hello",
      available: "Open to Senior Full Stack roles",
    },
    stats: [
      { number: "7+", label: "Years of Experience" },
      { number: "5", label: "Companies & Products" },
      { number: "1.5M+", label: "Records Migrated" },
      { number: "8", label: "Engineers Mentored" },
    ],
    about: {
      badge: "About Me",
      heading: "A Bit About Me & What I Bring",
      basedIn: "Based in",
      email: "Email",
      body:
        "I'm Ed, a Full Stack Developer based in Mexico City with 7+ years of experience shipping production software — from scalable React interfaces to Python/Django backends. Over the last year I've owned full modules end-to-end (backend + frontend) on TV Azteca's sales platform, applying Hexagonal Architecture, DDD and CQRS, led a large-scale Oracle-to-in-house data migration, and integrated AI coding agents into the delivery pipeline to ship faster without cutting corners. I'm currently looking for a Senior Full Stack role, remote or hybrid, inside a high-performing team.",
    },
    skills: {
      badge: "Toolkit",
      heading: "Skills & Tools",
      groups: [
        { number: "01", title: "Backend", tags: ["Python", "Django", "Java", "Spring Boot", "Node.js"] },
        { number: "02", title: "Frontend", tags: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
        { number: "03", title: "Databases", tags: ["PostgreSQL", "Oracle", "MongoDB"] },
        { number: "04", title: "Cloud & DevOps", tags: ["AWS", "Docker", "Kubernetes"] },
        { number: "05", title: "Architecture", tags: ["DDD", "CQRS", "Hexagonal Architecture"] },
        { number: "06", title: "AI & Tools", tags: ["Claude", "OpenCode", "Git", "Jest", "Jira"] },
      ],
    },
    experience: {
      badge: "Career",
      heading: "Experience",
      jobs: [
        {
          company: "Muhami — TV Azteca Project",
          role: "Full Stack Developer",
          dates: "Feb 2025 – Present",
          location: "Mexico City (Hybrid)",
          highlights: [
            "Designed and built end-to-end modules (backend and frontend) for TV Azteca's sales system, applying Hexagonal Architecture, Domain-Driven Design (DDD) and CQRS.",
            "Led the migration of 1.5M+ records from Oracle to the in-house system using Python scripts, significantly reducing data migration time.",
            "Drove the adoption of AI coding agents (Claude, OpenCode) across the team, compressing a 3-sprint module build cycle (UI plus query, create and edit flows) down to a single sprint.",
            "Diagnosed and resolved production incidents through data analysis, keeping the system stable and reliable.",
            "Collaborated with an 8-person engineering team and led technical onboarding for every new hire.",
          ],
          stack: stackMuhami,
        },
        {
          company: "MetLife Mexico",
          role: "Frontend Developer (React)",
          dates: "Nov 2022 – Jun 2024",
          location: "Remote",
          highlights: [
            "Expanded MetLife's service catalog with 5 new services, improving application stability and modernizing the UI.",
            "Designed and built reusable UI components with React, TypeScript, HTML5 and CSS3 on a Webpack/npm build stack.",
            "Implemented centralized state management with Context API and integrated RESTful APIs with the backend team.",
          ],
          stack: stackMetlife,
        },
        {
          company: "TATA Consultancy Services",
          role: "Asst. Software Engineer",
          dates: "Jun 2022 – Nov 2022",
          location: "Guadalajara, Jalisco",
          highlights: [
            "Diagnosed and fixed defects in Java/Spring Boot applications, tracked in Jira and Notion under agile methodologies.",
          ],
          stack: stackTata,
        },
        {
          company: "NISSAN DAOSA Mexico",
          role: "Web Developer",
          dates: "Jan 2022 – May 2022",
          location: "Guadalajara, Jalisco",
          highlights: [
            "Built Nissan Mexico's official website (catalog, locations and appointment scheduler) with React, Webpack and npm, integrating RESTful APIs with the backend team.",
          ],
          stack: stackNissan,
        },
        {
          company: "Hidrosoluciones Colima",
          role: "Web Developer",
          dates: "Jul 2019 – Jan 2020",
          location: "Colima, Mexico",
          highlights: [
            "Developed, maintained and updated websites for local clients using HTML, CSS3, SASS, Bootstrap, WordPress and JavaScript, optimizing performance and user experience.",
          ],
          stack: stackHidro,
        },
      ],
    },
    projects: {
      badge: "Side Projects",
      heading: "Personal Projects",
      visit: "Visit site →",
      items: [
        {
          title: "Weather App",
          description: "Weather dashboard built with React, consuming a public weather API with search by city.",
          image: "/images/weather-project.png",
          link: "https://weather-reatc-app.netlify.app/",
        },
        {
          title: "Rick & Morty Wiki",
          description: "Character explorer built with React, consuming the public Rick and Morty API.",
          image: "/images/rickapp.png",
          link: "https://rickymorty-wiki-app.netlify.app/",
        },
        {
          title: "Random Message Card",
          description: "Small React app that generates random motivational messages on demand.",
          image: "/images/random.png",
          link: "https://card-message-random.netlify.app/",
        },
        {
          title: "Random User Explorer",
          description: "React app consuming the Random User API with pagination and profile details.",
          image: "/images/userappcomplete.jpg",
          link: "https://apprandomusers.netlify.app/",
        },
        {
          title: "User CRUD App",
          description: "React CRUD application to create, read, update and delete users, with form validation and local state management.",
          image: "/images/crudreact.png",
          link: "https://storied-halva-97965b.netlify.app/",
        },
        {
          title: "Tennis Store",
          description: "E-commerce store built on Shopify with product catalog, bilingual navigation and a custom theme.",
          image: "/images/pageTennis.jpg",
          link: "https://vakktc-vr.myshopify.com/",
        },
      ],
    },
    education: {
      badge: "Background",
      heading: "Education",
      languagesHeading: "Languages",
      items: [
        {
          title: "Computer Systems Engineering",
          institution: "Tecnológico Nacional de México, Campus Colima",
          date: "2014 – 2019",
        },
        {
          title: "Full Stack Web Development",
          institution: "ACADEMLO — Querétaro, Mexico",
          date: "Oct 2021 – May 2021",
        },
      ],
      languages: [
        { name: "Spanish", level: "Native", value: 100 },
        { name: "English", level: "Intermediate", value: 70 },
      ],
    },
    contact: {
      badge: "Contact",
      heading: "Let's Connect",
      subtext:
        "Whether it's about an opportunity, a project, or just to say hi — I'd love to hear from you.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      location: "Location",
      phone: "Phone",
      copyright: "All rights reserved.",
    },
  },

  es: {
    nav: {
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      menu: "Menú",
      close: "Cerrar",
    },
    profile: {
      role: "Desarrollador Full Stack Senior",
      location: "Ciudad de México, México (Híbrido)",
    },
    hero: {
      lines: ["Construyo", "Sistemas.", "Transformo", "Datos.", "Entrego", "Resultados."],
      accent: [2, 3, 5],
      annotation: "Frontend con criterio. Backend con profundidad.",
      text:
        "Desarrollador Full Stack construyendo productos escalables — interfaces con React, backends en Python/Django, arquitectura cloud y entrega asistida por IA.",
      downloadEn: "CV · English",
      downloadEs: "CV · Español",
      cta: "Hablemos",
      available: "Abierto a roles Senior Full Stack",
    },
    stats: [
      { number: "7+", label: "Años de experiencia" },
      { number: "5", label: "Empresas y productos" },
      { number: "1.5M+", label: "Registros migrados" },
      { number: "8", label: "Ingenieros mentorizados" },
    ],
    about: {
      badge: "Sobre mí",
      heading: "Un poco sobre mí y lo que aporto",
      basedIn: "Ubicación",
      email: "Correo",
      body:
        "Soy Ed, Desarrollador Full Stack radicado en la Ciudad de México con más de 7 años de experiencia entregando software en producción — desde interfaces escalables con React hasta backends en Python/Django. Durante el último año he sido dueño de módulos completos (backend y frontend) en la plataforma de ventas de TV Azteca, aplicando arquitectura hexagonal, DDD y CQRS, lideré una migración de datos a gran escala de Oracle al sistema propio e integré agentes de IA en el flujo de entrega para avanzar más rápido sin sacrificar calidad. Hoy busco un rol Senior Full Stack, remoto o híbrido, dentro de un equipo de alto desempeño.",
    },
    skills: {
      badge: "Herramientas",
      heading: "Habilidades y Tecnologías",
      groups: [
        { number: "01", title: "Backend", tags: ["Python", "Django", "Java", "Spring Boot", "Node.js"] },
        { number: "02", title: "Frontend", tags: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
        { number: "03", title: "Bases de datos", tags: ["PostgreSQL", "Oracle", "MongoDB"] },
        { number: "04", title: "Cloud & DevOps", tags: ["AWS", "Docker", "Kubernetes"] },
        { number: "05", title: "Arquitectura", tags: ["DDD", "CQRS", "Arquitectura Hexagonal"] },
        { number: "06", title: "IA y Herramientas", tags: ["Claude", "OpenCode", "Git", "Jest", "Jira"] },
      ],
    },
    experience: {
      badge: "Trayectoria",
      heading: "Experiencia",
      jobs: [
        {
          company: "Muhami — Proyecto TV Azteca",
          role: "Desarrollador Full Stack",
          dates: "Feb 2025 – Actualidad",
          location: "Ciudad de México (Híbrido)",
          highlights: [
            "Diseñé y construí módulos end-to-end (backend y frontend) del sistema de ventas de TV Azteca, aplicando arquitectura hexagonal, Domain-Driven Design (DDD) y CQRS.",
            "Lideré la migración de más de 1.5 millones de registros desde Oracle hacia el sistema propio (DS) mediante scripts en Python, reduciendo considerablemente el tiempo de migración de los registros.",
            "Impulsé la adopción de agentes de IA (Claude, OpenCode) en el equipo, comprimiendo de 3 sprints a 1 el ciclo de construcción de módulos completos (UI y flujos de consulta, creación y edición).",
            "Diagnostiqué y resolví incidencias en módulos productivos mediante análisis de datos, manteniendo la estabilidad del sistema.",
            "Colaboré en un equipo de 8 ingenieros y lideré el onboarding técnico de cada nuevo integrante.",
          ],
          stack: stackMuhami,
        },
        {
          company: "MetLife México",
          role: "Desarrollador Frontend (React)",
          dates: "Nov 2022 – Jun 2024",
          location: "Remoto",
          highlights: [
            "Amplié el catálogo de MetLife con 5 nuevos servicios, mejorando la estabilidad de la aplicación y modernizando la interfaz.",
            "Diseñé y desarrollé componentes de UI reutilizables con React, TypeScript, HTML5 y CSS3 sobre un stack de build con Webpack y npm.",
            "Implementé manejo de estado centralizado con Context API e integré APIs RESTful con el equipo de backend.",
          ],
          stack: stackMetlife,
        },
        {
          company: "TATA Consultancy Services",
          role: "Asst. Software Engineer",
          dates: "Jun 2022 – Nov 2022",
          location: "Guadalajara, Jalisco",
          highlights: [
            "Diagnostiqué y corregí defectos en aplicaciones Java/Spring Boot, con seguimiento en Jira y Notion bajo metodologías ágiles.",
          ],
          stack: stackTata,
        },
        {
          company: "NISSAN DAOSA México",
          role: "Desarrollador Web",
          dates: "Ene 2022 – May 2022",
          location: "Guadalajara, Jalisco",
          highlights: [
            "Desarrollé el sitio oficial de Nissan México (catálogo, ubicaciones y agendador de citas) con React, Webpack y npm, integrando APIs RESTful con el equipo de backend.",
          ],
          stack: stackNissan,
        },
        {
          company: "Hidrosoluciones Colima",
          role: "Desarrollador Web",
          dates: "Jul 2019 – Ene 2020",
          location: "Colima, México",
          highlights: [
            "Desarrollé, mantuve y actualicé sitios web para clientes locales con HTML, CSS3, SASS, Bootstrap, WordPress y JavaScript, optimizando rendimiento y experiencia de usuario.",
          ],
          stack: stackHidro,
        },
      ],
    },
    projects: {
      badge: "Proyectos personales",
      heading: "Proyectos Personales",
      visit: "Ver sitio →",
      items: [
        {
          title: "Weather App",
          description: "Dashboard del clima construido con React, consumiendo una API pública con búsqueda por ciudad.",
          image: "/images/weather-project.png",
          link: "https://weather-reatc-app.netlify.app/",
        },
        {
          title: "Rick & Morty Wiki",
          description: "Explorador de personajes construido con React, consumiendo la API pública de Rick and Morty.",
          image: "/images/rickapp.png",
          link: "https://rickymorty-wiki-app.netlify.app/",
        },
        {
          title: "Random Message Card",
          description: "Pequeña app en React que genera mensajes motivacionales aleatorios bajo demanda.",
          image: "/images/random.png",
          link: "https://card-message-random.netlify.app/",
        },
        {
          title: "Random User Explorer",
          description: "App en React que consume la API de Random User con paginación y detalle de perfiles.",
          image: "/images/userappcomplete.jpg",
          link: "https://apprandomusers.netlify.app/",
        },
        {
          title: "User CRUD App",
          description: "Aplicación CRUD en React para crear, leer, actualizar y eliminar usuarios, con validación de formularios y manejo de estado local.",
          image: "/images/crudreact.png",
          link: "https://storied-halva-97965b.netlify.app/",
        },
        {
          title: "Tienda de Tenis",
          description: "Tienda e-commerce desarrollada en Shopify con catálogo de productos, navegación bilingüe y tema personalizado.",
          image: "/images/pageTennis.jpg",
          link: "https://vakktc-vr.myshopify.com/",
        },
      ],
    },
    education: {
      badge: "Formación",
      heading: "Educación",
      languagesHeading: "Idiomas",
      items: [
        {
          title: "Ingeniería en Sistemas Computacionales",
          institution: "Tecnológico Nacional de México, Campus Colima",
          date: "2014 – 2019",
        },
        {
          title: "Programación Web Full Stack",
          institution: "ACADEMLO — Querétaro, México",
          date: "Oct 2021 – May 2021",
        },
      ],
      languages: [
        { name: "Español", level: "Nativo", value: 100 },
        { name: "Inglés", level: "Intermedio", value: 70 },
      ],
    },
    contact: {
      badge: "Contacto",
      heading: "Hablemos",
      subtext:
        "Ya sea por una oportunidad, un proyecto o simplemente para saludar, me encantará leerte.",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      location: "Ubicación",
      phone: "Teléfono",
      copyright: "Todos los derechos reservados.",
    },
  },
};
