export const siteConfig = {
  name: "LUCAS <DEV/>",
  description:
    "Desarrollador web especializado en crear sitios responsivos, rápidos y optimizados para Google. Ayudo emprendedores y PyMEs a tener presencia real en internet.",
  email: "hello@lucasdev.com",
  phone: "+54 (3487) 314-587",
  address: ["Zarate", "Buenos Aires, CP 2800"],
  socials: [
    { name: "Twitter", icon: "ri:twitter-x-fill", href: "https://twitter.com/lucasdev" },
    { name: "Instagram", icon: "ri:instagram-fill", href: "https://instagram.com/lucasdev" },
    { name: "LinkedIn", icon: "ri:linkedin-fill", href: "https://linkedin.com/in/lucasdev" },
    { name: "GitHub", icon: "ri:github-fill", href: "https://github.com/lucasdev" },
  ],
} as const;

export const navLinks = [
  { name: "Servicios", href: "/services" },
  { name: "Trabajos Realizados", href: "/work" },
  { name: "Quien Soy", href: "/about" },
] as const;

export const footerLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Mis Trabajos", href: "/work" },
  { name: "Sobre Mi", href: "/about" },
  { name: "Contacto", href: "/contact" },
] as const;
