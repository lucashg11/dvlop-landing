import type { ImageMetadata } from "astro";
import webDevImg from "../assets/images/web-development.avif";
import uxuiImg from "../assets/images/ux-ui.avif";
import ecommerceImg from "../assets/images/e-commerce-solution.avif";
import seoImg from "../assets/images/seo-performance.avif";

export interface Service {
  id: string
  title: string
  description: string
  descriptionFull: string
  icon: string
  features: string[]
  image: ImageMetadata
  loading: "eager" | "lazy",
  price?: string
}

export const services: Service[] = [
  {
    id: "landing-page-development",
    title: "Landing Page Responsiva",
    description:
      "Una página que aparece en Google, genera confianza y convierte visitas en consultas. Tu mejor vendedor disponible las 24 horas.",
    descriptionFull:
      "Diseñada para convertir: una sola página con todo lo que un cliente necesita ver para contactarte. Incluye posicionamiento SEO básico, diseño mobile-first, formulario de contacto, integración con WhatsApp y Google Maps. Hosting y dominio incluidos el primer año. Lista en 7 a 10 días.",
    icon: "code-xml",
    features: [
      "Aparece en Google cuando te buscan",
      "Se ve perfecto en celular, tablet y escritorio",
      "Formulario de contacto que funciona",
      "Botón de WhatsApp directo para consultas",
    ],
    image: webDevImg,
    loading: "eager",
    price: "Desde $350.000",
  },
  {
    id: "institutional-website-development",
    title: "Sitio Web Institucional",
    description:
      "Tu empresa en internet como debe verse. Responsivo, rápido, posicionado en Google. Desde la portada hasta el contacto, todo pensado para que tus clientes confíen en vos.",
    descriptionFull:
      "Un sitio completo que representa tu empresa. Hasta 6 páginas o secciones, animaciones modernas, optimizado para Google, panel para ver cuántos clientes te llegan, formulario avanzado y WhatsApp flotante. Dominio, hosting y SSL incluidos el primer año. Plazo de entrega: 18 a 25 días hábiles.",
    icon: "paintbrush",
    features: [
      "Optimizado para aparecer en Google",
      "Animaciones que se ven profesionales",
      "Panel para ver cuántos clientes te llegan",
      "Diseño que representa tu negocio",
    ],
    image: uxuiImg,
    loading: "lazy",
    price: "Desde $950.000",
  },
  {
    id: "QR-digital-menu-development",
    title: "Menú Digital QR",
    description:
      "Tu carta siempre actualizada, sin reimprimir. El cliente escanea y ve el menú desde el celular. Sin app, sin descargas.",
    descriptionFull:
      "Menú web accesible desde cualquier celular escaneando un QR. Categorías, fotos de platos, precios y descripción. Actualizable cuando vos querés, sin costo de reimpresión. El QR en alta calidad se entrega listo para imprimir. Sin app, sin descarga para el cliente final.",
    icon: "shopping-cart",
    features: [
      "El cliente escanea y accede sin descargar nada",
      "Categorías, fotos, precios y descripciones",
      "Actualiza el menú cuando quieras",
      "QR listo para imprimir e usar",
    ],
    image: ecommerceImg,
    loading: "lazy",
    price: "Desde $280.000",
  },
  {
    id: "appointment-scheduling-system-development",
    title: "Sistema de Turnos Online",
    description:
      "Que el cliente reserve su turno solo, a cualquier hora. Confirmación automática y panel de administración incluido.",
    descriptionFull:
      "Eliminá la gestión de turnos por WhatsApp. El cliente ve los horarios disponibles, reserva y recibe confirmación automática por email. Vos administrás todo desde un panel: ver, cancelar y bloquear turnos. Incluye recordatorio automático 24hs antes para reducir los no-shows.",
    icon: "calendar",
    features: [
      "El cliente se reserva sin complicaciones",
      "Recibe confirmación automática",
      "Vos ves todo en un panel fácil",
      "Recordatorio automático 24hs antes",
    ],
    image: seoImg,
    loading: "lazy",
    price: "Desde $1.200.000",
  },
  {
    id: "maintenance-plan",
    title: "Plan Mantenimiento Mensual",
    description:
      "Alguien que cuida tu web todos los meses. Cambios de contenido, backups, soporte por WhatsApp y reporte de visitas.",
    descriptionFull:
      "Tu sitio siempre actualizado y funcionando sin que tengas que hacer nada. Hasta 4 cambios de contenido por mes, backup mensual, revisión de velocidad y errores, renovación de hosting gestionada y reporte mensual de visitas. Todo por WhatsApp, sin burocracia.",
    icon: "shield-check",
    features: [
      "Hasta 4 cambios de contenido por mes",
      "Copia de seguridad mensual",
      "Soporte por WhatsApp directo",
      "Reporte de cuántos clientes te llegan",
    ],
    image: seoImg,
    loading: "lazy",
    price: "Desde $95.000/mes",
  },
  {
    id: "seo-local-plan",
    title: "Plan SEO Local",
    description:
      "Para aparecer cuando te buscan en Google. Trabajo mensual de posicionamiento local con reporte de resultados incluido.",
    descriptionFull:
      "Trabajo mensual para que aparezcas en Google cuando alguien busca lo que hacés en tu zona. Incluye optimización de Google My Business, palabras clave locales, mejora de velocidad del sitio, alta en directorios locales y reporte mensual de posiciones y tráfico. Resultados visibles a partir del segundo mes.",
    icon: "map-pin",
    features: [
      "Optimizo tu presencia en Google Maps",
      "Trabajamos palabras clave de tu zona",
      "Apareces en directorios locales importantes",
      "Reporte de cómo está tu posicionamiento",
    ],
    image: seoImg,
    loading: "lazy",
    price: "Desde $150.000/mes",
  },
];
