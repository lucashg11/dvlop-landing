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
    id: "princess-dream",
    title: "Princess Dream — Landing",
    category: "Turismo",
    image: ecommerceReplatformingImg,
    timeline: "Entrega en 8 días",
    problem:
      "El cliente dependía solo de Instagram para mostrar su catálogo y recibir consultas. Cada vez que cambiaba un servicio o agregaba una salida, tenía que rearmar publicaciones y perdía alcance por el algoritmo.",
    solution: [
      "Landing con catálogo de servicios y salidas organizada por secciones",
      "Formulario de contacto directo con confirmación por email",
      "Optimización SEO local para aparecer cuando alguien busca el rubro",
      "Mobile-first: el 80% del tráfico de Instagram viene del celular",
    ],
    results:
      "Sitio en producción desde hace 8 meses. Carga en 1.2s en PageSpeed. Indexado en Google en 14 días.",
    loading: "lazy",
  },
  {
    id: "ayestaran-vazquez",
    title: "Ayestarán Vázquez — Estudio Jurídico",
    category: "Estudio jurídico",
    image: fintechDashboardImg,
    timeline: "Entrega en 15 días",
    problem:
      "Estudio jurídico especializado en derecho laboral con presencia solo en redes. Querían un lugar donde mostrar servicios y estar disponibles 24/7, los 7 días de la semana, sin depender del horario de atención al público.",
    solution: [
      "Landing profesional con las áreas de práctica y equipo",
      "Formulario de contacto con campos específicos para casos laborales",
      "Calculadora de indemnización como herramienta de valor agregado",
      "Diseño sobrio que transmite seriedad y confianza",
    ],
    results:
      "Sitio activo hace 6 meses. 0 caídas reportadas. Recibe consultas directas sin pasar por redes.",
    loading: "lazy",
  },
  {
    id: "serflet-logistica",
    title: "Serflet Logística — Sitio Institucional",
    category: "Logística",
    image: corporateIdentityImg,
    timeline: "Entrega en 22 días",
    problem:
      "Empresa de logística B2B que solo estaba en redes sociales. Faltaba presencia profesional para presentar a clientes corporativos, licitaciones y nuevos proveedores que googleaban antes de contactarlos.",
    solution: [
      "Sitio institucional con secciones de servicios, flota y cobertura",
      "Diseño profesional que refleja seriedad B2B",
      "Optimización SEO para búsquedas del rubro en Argentina",
      "Formulario de cotización con campos estructurados",
    ],
    results:
      "Sitio en producción hace 1 año. Recibieron 3 cotizaciones de empresas grandes vía web en el primer trimestre.",
    loading: "lazy",
  },
  {
    id: "hpej-constructora",
    title: "HPEJ SRL — Constructora",
    category: "Construcción",
    image: healthcarePortalImg,
    timeline: "Entrega en 30 días",
    problem:
      "Constructora con obras finalizadas y en curso que no tenía dónde mostrar su portfolio. Los clientes no sabían dónde encontrar información de cada proyecto, y el boca a boca no escalaba.",
    solution: [
      "Sitio con portfolio de obras, ficha técnica por proyecto y galería",
      "Optimización de imágenes para que cargue rápido aunque tenga muchas fotos",
      "Sección 'Obra en curso' para que clientes actuales sigan el avance",
      "Posicionamiento SEO local para búsquedas de constructoras en zona norte",
    ],
    results:
      "Sitio en producción hace 4 meses. Las consultas sobre nuevas obras ahora llegan primero por web, después por teléfono.",
    loading: "lazy",
  },
];
