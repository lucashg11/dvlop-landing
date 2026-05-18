import type { ImageMetadata } from "astro";
import ecommerceReplatformingImg from "../assets/images/Screenshot From 2026-05-15 11-50-55.png";
import fintechDashboardImg from "../assets/images/Screenshot From 2026-05-15 12-10-39.png";
import corporateIdentityImg from "../assets/images/Screenshot From 2026-05-15 13-35-00.png";
import healthcarePortalImg from "../assets/images/Screenshot From 2026-05-15 13-52-34.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: ImageMetadata;
  timeline: string;
  problem: string;
  solution: string[];
  results: string;
  loading: "eager" | "lazy";
}

export const projects: Project[] = [
  {
    id: "Landing-page-princess",
    title: "Princess Dream Landing Page",
    category: "Turismo",
    image: ecommerceReplatformingImg,
    timeline: "1 año",
    problem:
      "El cliente estaba en busqueda de una herramienta mas por fuera de sus redes sociales. Necesitaba una página que le permita mostrar su catálogo de productos y servicios, y que a su vez le permita recibir consultas por sus proximas salidas/reuniones.",
    solution: [
      "Una landing moderna que se ve perfecto en celular",
      "Formulario para que los visitantes dejen sus consultas",
      "Optimizado para que Google lo encuentre cuando alguien busca sus servicios",
      "Posicionada para aparecer en búsquedas locales",
    ],
    results:
      "Más consultas por mes, presencia profesional en internet, no solo dependiendo de redes sociales.",
    loading: "lazy",
  },
  {
    id: "Landing-page-ayestaranvazquez",
    title: "EDA Ayestaran Vazquez Landing Page",
    category: "Estudio Abogados",
    image: fintechDashboardImg,
    timeline: "2 Meses",
    problem:
      "Necesitaban una landing page para dar a conocerse como estudio juridico especializado en derecho laboral, solo tenian presencia en redes pero querian tener un lugar donde puedan mostrar lo que hacen 24/7",
    solution: [
      "Landing page profesional donde los clientes conocen el estudio",
      "Formulario de contacto directo para nuevas consultas",
      "Herramienta especial para que los clientes calculen sus indemnizaciones",
      "Diseño que se ve igual de bien en celular que en computadora",
    ],
    results:
      "Más consultas de calidad, mejor posicionamiento en Google, presencia profesional 24/7.",
    loading: "lazy",
  },
  {
    id: "Landing-page-serflet-logistica",
    title: "Serflet Logística Landing Page",
    category: "Logistica",
    image: corporateIdentityImg,
    timeline: "2 Meses",
    problem:
      "Una empresa de logística necesitaba un sitio que inspire confianza en sus clientes empresariales. Solo estaba en redes sociales y faltaba presencia profesional.",
    solution: [
      "Diseño moderno que refleja profesionalismo",
      "Se ve igual de bien en celular que en escritorio",
      "Carga rápido, sin demoras",
      "Posicionado para que aparezca cuando la buscan",
    ],
    results:
      "Imagen más profesional, más solicitudes de clientes empresariales, mejor presencia que sus competidores.",
    loading: "lazy",
  },
  {
    id: "Landing-page-hpej-constructora",
    title: "HPEJ SRL - Sitio Web Constructora",
    category: "Construccion",
    image: healthcarePortalImg,
    timeline: "4 Meses",
    problem:
      "La constructora necesitaba un sitio que muestre sus obras, detalles de proyectos y galería de fotos. Los clientes no sabían dónde encontrar la información del proyecto.",
    solution: [
      "Un sitio moderno que carga rápido aunque tenga muchas imágenes",
      "Cada proyecto con sus detalles, galería y descripción",
      "Fácil de ver desde cualquier celular o computadora",
      "Posicionado en Google para que potenciales clientes lo encuentren",
    ],
    results:
      "Los clientes encuentran lo que buscan, la empresa se ve profesional, menos llamadas de 'no entiendo dónde está mi proyecto'.",
    loading: "lazy",
  },
];
