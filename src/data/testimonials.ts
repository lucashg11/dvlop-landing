export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  metric: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "[Nombre del cliente]",
    role: "Estudio jurídico — [Ciudad]",
    quote:
      "[Acá va la cita textual del cliente, con su permiso. Recomendado: 2-3 frases con un resultado concreto que haya notado.]",
    metric: "[Métrica real, ej: 'Sitio activo hace 6 meses, 0 caídas reportadas']",
  },
  {
    id: "t2",
    name: "[Nombre del cliente]",
    role: "Constructora — [Zona]",
    quote:
      "[Cita textual del cliente hablando del proceso, no solo del resultado. Ideal si menciona comunicación, plazos o profesionalismo.]",
    metric: "[Métrica real, ej: 'Recibimos 3 cotizaciones de empresas grandes en el primer trimestre']",
  },
  {
    id: "t3",
    name: "[Nombre del cliente]",
    role: "[Rubro] — [Ciudad]",
    quote:
      "[Cita del cliente que hable de haber dejado de depender solo de redes sociales o de aparecer en Google.]",
    metric: "[Métrica real, ej: 'Indexado en Google en 14 días']",
  },
];
