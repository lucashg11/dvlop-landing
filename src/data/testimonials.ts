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
    name: "Ayestarán Vázquez",
    role: "Estudio jurídico laboralista · Buenos Aires",
    quote:
      "Antes dependíamos de redes para que la gente nos conociera. Hoy el sitio trabaja solo: nos encuentran en Google, leen las áreas de práctica que tenemos y nos contactan directo. Llevamos 6 meses con la web activa y no tuvimos ni una sola caída.",
    metric: "6 meses activo · 0 caídas",
  },
  {
    id: "t2",
    name: "Serflet Logística",
    role: "Logística B2B · Argentina",
    quote:
      "Necesitábamos presencia profesional para licitaciones y clientes corporativos que googlean antes de contactarnos. En el primer trimestre, 3 empresas grandes nos pidieron cotización entrando directo por la web. Ese volumen de consultas no lo hubiéramos tenido solo con redes.",
    metric: "3 cotizaciones B2B en 90 días",
  },
  {
    id: "t3",
    name: "Princess Dream",
    role: "Salidas de turismo · Zárate",
    quote:
      "Dependía 100% de Instagram para mostrar las salidas. Cuando cambiaba un servicio tenía que rearmar publicaciones y el alcance dependía del algoritmo. Con el sitio, el catálogo está siempre visible y Google empezó a mandarme consultas en 14 días. La diferencia de previsibilidad es enorme.",
    metric: "Indexada en Google en 14 días",
  },
];
