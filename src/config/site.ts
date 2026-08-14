/**
 * Fuente única de verdad para los datos del sitio.
 * Editar SOLO este archivo para cambiar marca, navegación,
 * SEO por defecto, datos de contacto y redes sociales.
 */

export interface NavItem {
  label: string;
  href: string;
  /** Icono opcional de Phosphor, p. ej. "ph:house". */
  icon?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Icono de Phosphor, p. ej. "ph:github-logo". */
  icon: string;
}

export const site = {
  /** Nombre de la marca / sitio. */
  name: 'Lucas Dev',
  /** Nombre alternativo (logo / schema.org). */
  alternateName: 'LUCAS <DEV/>',
  /** Título por defecto para la etiqueta <title> y OG. */
  title: 'Lucas Dev · La web que tu negocio merece, sin complicaciones',
  /** Plantilla de título: %s se reemplaza por el título de página. */
  titleTemplate: '%s · Lucas Dev',
  /** Descripción por defecto (meta description / OG). */
  description:
    'Soy Lucas, tu socio tecnológico en Zárate. Ayudo a dueños de negocios a tener una web profesional que aparezca en Google y traiga clientes, sin complicaciones técnicas ni palabras raras.',
  /** Idioma del documento. */
  locale: 'es_AR',
  lang: 'es',
  /** Debe coincidir con `site` en astro.config.mjs. */
  url: 'https://lhgdev.netlify.app',
  /** Imagen social por defecto (ruta en /public). */
  defaultOgImage: '/og-image.webp',
  /** Autor / organización para metadatos. */
  author: 'Lucas',
  themeColor: '#ea580c',
  /** Datos de contacto. */
  email: 'gomezlucashernan@hotmail.com',
  phone: '+54 (3487) 314-587',
  phoneRaw: '5493487314587',
  whatsappUrl: 'https://wa.me/5493487314587',
  address: ['Zárate', 'Buenos Aires, Argentina'],
} as const;

export const mainNav: NavItem[] = [
  { label: 'Proceso', href: '#process' },
  { label: 'Trabajos', href: '#work' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Sobre mí', href: '#about' },
];

export const footerNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Proceso', href: '#process' },
  { label: 'Trabajos', href: '#work' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contact' },
];

export const socials: SocialLink[] = [];
