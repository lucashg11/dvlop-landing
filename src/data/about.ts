import type { TeamMember } from "../components/sections/Team.astro";
import type { Value } from "../components/sections/Values.astro";

export const values: Value[] = [
  {
    title: "Te escucho de verdad",
    description:
      "Antes de escribir una línea de código, entiendo qué hace tu negocio, qué te duele y qué querés lograr. Si algo no te sirve, te lo digo, aunque sea perder la venta.",
    icon: "target",
  },
  {
    title: "Sitios que aguantan",
    description:
      "Responsivo en cualquier dispositivo, que cargue rápido, que se vea profesional. Lo que entrego tiene que seguir funcionando a los 6 meses, no solo el día del lanzamiento.",
    icon: "zap",
  },
  {
    title: "Sin vueltas",
    description:
      "Entrega en días, no meses. Chats directos por WhatsApp, propuestas por escrito, claridad total del avance. Sin burocracia, sin intermediarios, sin jerga.",
    icon: "clock",
  },
];

export const team: TeamMember[] = [];
