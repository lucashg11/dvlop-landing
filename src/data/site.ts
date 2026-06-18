export const siteConfig = {
  name: "Lucas Dev",
  alternateName: "LUCAS <DEV/>",
  description:
    "Desarrollador web en Zárate, Buenos Aires. Creo sitios rápidos, optimizados para Google y diseñados para convertir visitas en consultas. Para emprendedores y PyMEs que quieren presencia digital real.",
  email: "gomezlucashernan@hotmail.com",
  phone: "+54 (3487) 314-587",
  phoneRaw: "5493487314587",
  whatsappUrl: "https://wa.me/5493487314587",
  address: ["Zárate", "Buenos Aires, Argentina"],
  socials: [
    { name: "Twitter", icon: "ri:twitter-x-fill", href: "https://twitter.com/lucasdev" },
    { name: "Instagram", icon: "ri:instagram-fill", href: "https://instagram.com/lucasdev" },
    { name: "LinkedIn", icon: "ri:linkedin-fill", href: "https://linkedin.com/in/lucasdev" },
    { name: "GitHub", icon: "ri:github-fill", href: "https://github.com/lucasdev" },
  ],
} as const;

export const navLinks = [
  { name: "Servicios", href: "/services" },
  { name: "Trabajos", href: "/work" },
  { name: "Sobre mí", href: "/about" },
] as const;

export const footerLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Trabajos", href: "/work" },
  { name: "Sobre mí", href: "/about" },
  { name: "Contacto", href: "/contact" },
] as const;
