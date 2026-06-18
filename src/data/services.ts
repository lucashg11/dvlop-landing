import type { ImageMetadata } from "astro";
import webDevImg from "../assets/images/web-development.avif";
import uxuiImg from "../assets/images/ux-ui.avif";
import ecommerceImg from "../assets/images/e-commerce-solution.avif";
import seoImg from "../assets/images/seo-performance.avif";

export interface Service {
  id: string;
  title: string;
  category: "presencia" | "automatizacion" | "ecommerce" | "nicho" | "recurrente";
  shortDescription: string;
  descriptionFull: string;
  icon: string;
  features: string[];
  image: ImageMetadata;
  loading: "eager" | "lazy";
  basePrice: string;
  deliveryTime: string;
  recurring?: boolean;
  cta: string;
}

export const services: Service[] = [
  {
    id: "landing-page",
    title: "Landing Page Responsiva",
    category: "presencia",
    shortDescription:
      "Una página que aparece en Google, genera confianza y convierte visitas en consultas. Tu mejor vendedor disponible las 24 horas.",
    descriptionFull:
      "Diseño 100% personalizado basado en la identidad del cliente. Una sola página con todas las secciones clave para que un cliente potencial te contacte: hero con propuesta clara, servicios, sobre nosotros, formulario funcional, WhatsApp y Google Maps. SEO on-page básico, mobile-first, velocidad 90+ en PageSpeed. Incluye hosting, dominio .com.ar y SSL el primer año. Capacitación de 15 minutos incluida.",
    icon: "code-xml",
    features: [
      "Diseño personalizado con tu identidad",
      "Aparece en Google cuando te buscan",
      "Se ve perfecto en celular, tablet y PC",
      "Formulario de contacto y WhatsApp directo",
      "Google Maps embebido",
      "Hosting + dominio + SSL primer año",
    ],
    image: webDevImg,
    loading: "eager",
    basePrice: "$350.000",
    deliveryTime: "7-10 días hábiles",
    cta: "Reservar mi llamada",
  },
  {
    id: "mini-sitio",
    title: "Mini Sitio Comercial (3 páginas)",
    category: "presencia",
    shortDescription:
      "Más que una tarjeta, menos que un sitio enorme. Tres páginas para contar bien tu historia.",
    descriptionFull:
      "Sitio de 3 páginas: Inicio, Servicios y Contacto. Diseño profesional, mobile-first, SEO on-page completo y Google Analytics configurado. Cada página tiene menú de navegación y todo lo que un cliente necesita para decidir. Ideal para profesionales independientes, estudios y talleres. Incluye hosting, dominio y SSL el primer año.",
    icon: "layout-grid",
    features: [
      "Inicio, Servicios y Contacto",
      "Menú de navegación entre páginas",
      "Google Analytics configurado",
      "Hosting + dominio + SSL primer año",
      "Mobile-first responsive",
      "Optimizado para Google",
    ],
    image: uxuiImg,
    loading: "lazy",
    basePrice: "$550.000",
    deliveryTime: "12-15 días hábiles",
    cta: "Ver si es lo que necesito",
  },
  {
    id: "sitio-institucional",
    title: "Sitio Web Institucional",
    category: "presencia",
    shortDescription:
      "Tu empresa en internet como debe verse. Hasta 6 páginas, animaciones, optimizado para Google. Para transmitir imagen profesional.",
    descriptionFull:
      "Sitio completo con hasta 6 páginas o secciones, animaciones sutiles y micro-interacciones CSS, SEO on-page completo, formulario avanzado, Google Analytics 4, integración con redes y WhatsApp flotante. Para empresas que necesitan proyectar imagen sólida: licitaciones, clientes corporativos, socios estratégicos. Incluye hosting, dominio y SSL el primer año, más capacitación de 30 minutos.",
    icon: "paintbrush",
    features: [
      "Hasta 6 páginas o secciones",
      "Animaciones y micro-interacciones",
      "SEO on-page completo por página",
      "Google Analytics 4 configurado",
      "WhatsApp flotante y redes integradas",
      "Hosting + dominio + SSL primer año",
    ],
    image: uxuiImg,
    loading: "lazy",
    basePrice: "$950.000",
    deliveryTime: "18-25 días hábiles",
    cta: "Hablemos de mi empresa",
  },
  {
    id: "link-in-bio",
    title: "Link-in-Bio Profesional",
    category: "nicho",
    shortDescription:
      "Tu página de links, con tu marca. Sin el logo de Linktree. Con tu dominio y tus colores.",
    descriptionFull:
      "Página personalizada con tu foto, tu bio, tus colores y tus links. Hasta 8 links configurados con íconos de redes, botón de WhatsApp destacado y analytics de clics. Dominio propio incluido el primer año. Ideal para community managers, influencers, profesionales de marca personal. Lista en 48 a 72 horas.",
    icon: "link",
    features: [
      "Diseño con tu identidad de marca",
      "Hasta 8 links configurados",
      "Botón de WhatsApp destacado",
      "Analytics de clics básicos",
      "Dominio propio incluido",
      "Lista en 48-72 horas",
    ],
    image: webDevImg,
    loading: "lazy",
    basePrice: "$120.000",
    deliveryTime: "2-3 días hábiles",
    cta: "Quiero la mía",
  },
  {
    id: "menu-qr",
    title: "Menú Digital QR",
    category: "nicho",
    shortDescription:
      "Tu carta siempre actualizada, sin reimprimir. El cliente escanea y ve el menú desde el celular. Sin app, sin descargas.",
    descriptionFull:
      "Menú web accesible con QR desde cualquier celular. Categorías, fotos, precios y descripción por plato. Actualizable de forma simple cuando cambia la carta, sin costo de reimpresión. QR en alta calidad listo para imprimir. Sin app ni descarga para el cliente final. Hasta 6 meses de actualizaciones incluidas.",
    icon: "shopping-cart",
    features: [
      "El cliente escanea y ve el menú al instante",
      "Categorías, fotos, precios y descripciones",
      "Actualizás el menú cuando quieras",
      "QR listo para imprimir en alta calidad",
      "Sin app, sin descarga para el cliente",
      "Hasta 6 meses de actualizaciones",
    ],
    image: ecommerceImg,
    loading: "lazy",
    basePrice: "$280.000",
    deliveryTime: "5-7 días hábiles",
    cta: "Quiero una demo",
  },
  {
    id: "landing-evento",
    title: "Landing de Evento / Campaña",
    category: "nicho",
    shortDescription:
      "Para cursos, lanzamientos o eventos que necesitan inscripciones y cobro online. Lista en una semana.",
    descriptionFull:
      "Landing con cuenta regresiva, descripción del evento, agenda o speakers, formulario de inscripción con confirmación automática por email e integración con MercadoPago para venta de entradas. Optimizada para compartir en redes. Diseñada para convertir, no solo para informar. Activa hasta 30 días después del evento.",
    icon: "calendar-clock",
    features: [
      "Cuenta regresiva en tiempo real",
      "Formulario con confirmación automática",
      "Integración MercadoPago para entradas",
      "Sección agenda o speakers",
      "Optimizada para compartir en redes",
      "Alta conversión",
    ],
    image: ecommerceImg,
    loading: "lazy",
    basePrice: "$480.000",
    deliveryTime: "5-8 días hábiles",
    cta: "Confirmar fecha y arrancar",
  },
  {
    id: "sistema-turnos",
    title: "Sistema de Turnos Online",
    category: "automatizacion",
    shortDescription:
      "Que el cliente reserve solo, a cualquier hora. Confirmación automática, recordatorio 24hs antes y panel para vos.",
    descriptionFull:
      "Eliminá la gestión de turnos por WhatsApp. El cliente ve los horarios disponibles en tu calendario, reserva online sin registrarse y recibe confirmación automática por email. Vos administrás todo desde un panel: ver, cancelar, bloquear turnos y fechas. Recordatorio automático 24hs antes para reducir los no-shows. Stack MERN para máxima confiabilidad.",
    icon: "calendar-clock",
    features: [
      "El cliente reserva sin registrarse",
      "Confirmación automática por email",
      "Recordatorio 24hs antes del turno",
      "Panel de administración completo",
      "Bloqueo de feriados y fechas",
      "Dominio + hosting + SSL primer año",
    ],
    image: seoImg,
    loading: "lazy",
    basePrice: "$1.200.000",
    deliveryTime: "25-35 días hábiles",
    cta: "Cuántos turnos por día tengo",
  },
  {
    id: "tienda-online",
    title: "Tienda Online Simple",
    category: "ecommerce",
    shortDescription:
      "Vender por WhatsApp no escala. Catálogo, carrito, MercadoPago y panel de administración. Hasta 50 productos.",
    descriptionFull:
      "Tienda completa con catálogo por categorías, carrito, checkout con MercadoPago, email automático de confirmación y panel de administración para gestionar productos, stock y pedidos. Registro de clientes e historial de compras. Diseño responsive mobile-first. Hasta 50 productos en la carga inicial. Stack MERN (React + Node + MongoDB).",
    icon: "store",
    features: [
      "Catálogo con categorías y búsqueda",
      "Carrito y checkout con MercadoPago",
      "Panel admin: productos, stock, pedidos",
      "Email automático de confirmación",
      "Hasta 50 productos en la carga inicial",
      "Dominio + hosting + SSL primer año",
    ],
    image: ecommerceImg,
    loading: "lazy",
    basePrice: "$1.800.000",
    deliveryTime: "30-40 días hábiles",
    cta: "Tengo X productos, cómo arrancamos",
  },
  {
    id: "portal-clientes",
    title: "Portal de Clientes / Intranet",
    category: "ecommerce",
    shortDescription:
      "Login seguro para que tus clientes accedan a presupuestos, facturas y estado de proyectos. Para empresas B2B.",
    descriptionFull:
      "Portal privado con login: cada cliente accede a sus presupuestos, facturas, archivos y estado de proyectos. Notificaciones automáticas por email cuando hay novedades. Panel admin para gestionar todos los clientes desde un solo lugar. Stack MERN con autenticación JWT y carga/descarga de archivos segura.",
    icon: "lock",
    features: [
      "Login seguro con JWT",
      "Dashboard del cliente con estado de proyectos",
      "Carga y descarga de archivos",
      "Notificaciones automáticas por email",
      "Panel admin centralizado",
      "Historial completo por cliente",
    ],
    image: webDevImg,
    loading: "lazy",
    basePrice: "$2.200.000",
    deliveryTime: "40-50 días hábiles",
    cta: "Hablemos del proyecto",
  },
  {
    id: "hosting-anual",
    title: "Hosting + Dominio + SSL + Webmail",
    category: "recurrente",
    shortDescription:
      "Compramos el hosting, configuramos dominio, SSL y cuentas de email. Vos te olvidás. Renovación anual gestionada.",
    descriptionFull:
      "Dominio .com.ar o .com registrado a tu nombre por un año, hosting compartido con cPanel, SSL Let's Encrypt configurado, hasta 5 cuentas de email corporativo con webmail. Soporte básico incluido. Renovación anual gestionada por mí. Vos te olvidás del tema técnico.",
    icon: "server",
    features: [
      "Dominio .com.ar o .com por 1 año",
      "Hosting con cPanel incluido",
      "SSL Let's Encrypt configurado",
      "Hasta 5 cuentas de email",
      "Renovación anual gestionada",
      "Soporte básico incluido",
    ],
    image: seoImg,
    loading: "lazy",
    basePrice: "$180.000/año",
    deliveryTime: "Configurado en 24-48hs",
    recurring: true,
    cta: "Lo quiero",
  },
  {
    id: "mantenimiento",
    title: "Plan Mantenimiento Web",
    category: "recurrente",
    shortDescription:
      "Alguien que cuida tu web todos los meses. Cambios, backups, soporte por WhatsApp y reporte de visitas.",
    descriptionFull:
      "Tu sitio siempre actualizado y funcionando sin que tengas que hacer nada. Hasta 4 cambios de contenido por mes, backup mensual completo, revisión mensual de velocidad y errores, renovación de hosting y dominio gestionada, reporte mensual de visitas, soporte por WhatsApp en horario hábil. Atención el mismo día hábil para urgencias.",
    icon: "shield",
    features: [
      "Hasta 4 cambios de contenido por mes",
      "Backup mensual completo",
      "Reporte mensual de visitas",
      "Soporte por WhatsApp directo",
      "Renovación de hosting y dominio gestionada",
      "Urgencias atendidas el mismo día",
    ],
    image: seoImg,
    loading: "lazy",
    basePrice: "$95.000/mes",
    deliveryTime: "Alta en 24-48hs",
    recurring: true,
    cta: "Sumarlo al proyecto",
  },
  {
    id: "seo-local",
    title: "Plan SEO Local Mensual",
    category: "recurrente",
    shortDescription:
      "Para aparecer cuando te buscan en Google. Trabajo mensual de posicionamiento local con reporte de resultados.",
    descriptionFull:
      "Trabajo mensual para que aparezcas en Google cuando alguien busca lo que hacés en tu zona. Incluye auditoría SEO inicial, optimización de Google My Business, trabajo de 3 a 5 palabras clave locales, mejora de velocidad y Core Web Vitals, alta en 3 directorios locales por mes, 1 artículo de blog SEO-optimizado y reporte mensual de posiciones y tráfico orgánico. Resultados visibles a partir del segundo o tercer mes.",
    icon: "map-pin",
    features: [
      "Optimización de Google My Business",
      "3-5 palabras clave locales por mes",
      "Mejora de velocidad y Core Web Vitals",
      "Alta en 3 directorios locales",
      "Reporte mensual de posiciones",
      "1 artículo de blog SEO mensual",
    ],
    image: seoImg,
    loading: "lazy",
    basePrice: "$150.000/mes",
    deliveryTime: "Alta en 24-48hs",
    recurring: true,
    cta: "Revisá mi sitio",
  },
];
