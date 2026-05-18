import type { TeamMember } from "../components/sections/Team.astro";
import type { Value } from "../components/sections/Values.astro";

export const values: Value[] = [
  {
    title: "Te escucho de verdad",
    description:
      "No te vendo features que no necesitas. Antes de escribir una línea de código, entiendo qué querés lograr con tu sitio y por qué.",
    icon: "target",
  },
  {
    title: "Sitios que duran",
    description:
      "Responsivo en cualquier dispositivo, que cargue rápido. Si lo publico, tiene que aguantar. Sin atajos, sin sorpresas a los 3 meses.",
    icon: "zap",
  },
  {
    title: "Rápido y bien",
    description:
      "Entrego en días, no meses. Sin burocracia, sin esperas. Chats directos por WhatsApp, claridad total del progreso.",
    icon: "clock",
  },
  {
    title: "Explico todo",
    description:
      "Sabes qué hago y por qué. Sin jerga innecesaria. Si no entiendes algo, te lo explico de nuevo hasta que quede claro.",
    icon: "users",
  },
];

export const team: TeamMember[] = [];
