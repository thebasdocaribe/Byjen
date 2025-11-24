import {
  mobile,
  backend,
  creator,
  web,
  redux,
  tailwind,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import doing from '../assets/company/doing.png'
import question from '../assets/company/question.png'
import diferent from '../assets/company/diferent.png'
import logo from '../assets/logoSemF.png'
import wpp from '../assets/wpp.png'
import tk from '../assets/tk.png'
import face from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import relogio from '../assets/relogio.webp'
import influencer from '../assets/influencer.png'
import enterprise from '../assets/enterprise.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "BREAFING",
    icon: web,
    description: "Antes de hablar de métricas, definimos los objetivos, la identidad y el tono de la marca."
  },
  {
    title: "AUDITORÍA",
    icon: mobile,
    description: "Analizamos tu presencia digital actual para identificar oportunidades y errores ocultos."
  },
  {
    title: "POSICIONAMIENTO",
    icon: backend,
    description: "Creamos un enfoque estratégico para que tu marca destaque con autenticidad."
  },
  {
    title: "PROPUESTA CREATIVA",
    icon: creator,
    description: "Desarrollamos ideas originales basadas en datos y en la esencia real de tu proyecto."
  },
  {
    title: "PRODUCCIÓN Y ACTIVACIÓN",
    icon: creator,
    description: "Transformamos la estrategia en contenido real, campañas y acciones prácticas."
  },
  {
    title: "OPTIMIZACIÓN Y SEGUIMIENTO",
    icon: creator,
    description: "Monitoreamos y ajustamos constantemente para asegurar crecimiento y resultados."
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: wpp,
  },
  {
    name: "CSS 3",
    icon: tk,
  },
  {
    name: "JavaScript",
    icon: face,
  },
  {
    name: "TypeScript",
    icon: insta,
  },
  {
    name: "React JS",
    icon: relogio,
  },
  {
    name: "Redux Toolkit",
    icon: influencer,
  },
  {
    name: "Tailwind CSS",
    icon: enterprise,
  },

];

const experiences = [
  {
    title: "Quiénes somos",
    company_name: "Donde las ideas encuentran su voz",
    icon: question,
    iconBg: "#E6DEDD",
    points: [
      "Somos una empresa de marketing digital apasionada por la innovación y el impacto. Nuestro objetivo es ayudar a las marcas a conectar con su audiencia de manera auténtica y estratégica.",
      "En nuestro espacio, no hay moldes que limiten ni puertas que excluyan. Creemos en las historias que se viven con verdad, en los colores que no necesitan permiso para brillar, y en las voces que encuentran eco sin tener que pedirlo."
    ],
  },
  {
    title: "Qué hacemos",
    company_name: "Creatividad que nace de miradas únicas",
    icon: doing,
    iconBg: "#E6DEDD",
    points: [
      "Desde estrategias de redes sociales hasta campañas publicitarias digitales, diseñamos soluciones creativas que impulsan el crecimiento de nuestros clientes.",
      "Nos mueve el orgullo de construir entornos donde cada persona pueda mostrarse tal como es, sin filtros ni disfraces. Porque la creatividad nace de la diferencia, y la innovación se alimenta de miradas múltiples."
    ],
  },
  {
    title: "Nuestra diferencia",
    company_name: "Rompiendo esquemas con alma y creatividad",
    icon: diferent,
    iconBg: "#E6DEDD",
    points: [
      "Nos enfocamos en datos, creatividad y una visión centrada en resultados. No solo generamos contenido; creamos experiencias que transforman la interacción entre las marcas y sus consumidores.",
      "Aquí celebramos lo genuino. Lo que no encaja en lo estándar, lo que rompe esquemas con ternura, fuerza o humor. Abrimos caminos para que cada identidad, cada expresión y cada forma de amar y ser, tenga lugar, respeto y protagonismo."
    ],
  },
  {
    title: "Estrategias digitales",
    company_name: "Byjen",
    icon: logo,
    iconBg: "#E6DEDD",
    points: [
      "Gestión y optimización de campaña",
      "Automatización y embudos VSL",
      "Creatividad visual y contenido",
      "Automatización en redes sociales",
      "Chatbots y atención personalizad",
      "Gestión de redes y comunidad",
      "Google Analytics 4",
      "SEO y rendimiento orgánico",
      "Integración y automatización de datos",
      "Definición de posicionamiento",
      "Sorytelling • Branding",
      "Arquitectura de marca"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };