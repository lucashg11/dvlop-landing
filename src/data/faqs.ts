export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "tiempo",
    question: "¿Cuánto tarda estar online?",
    answer:
      "Una Landing Page, entre 7 y 10 días hábiles. Un Mini Sitio (3 páginas), entre 12 y 15. Un Sitio Institucional completo, entre 18 y 25. El plazo exacto te lo paso por escrito en la propuesta, antes de empezar.",
  },
  {
    id: "propiedad",
    question: "¿De quién es el sitio cuando terminamos?",
    answer:
      "Tuyo, al 100%. Dominio registrado a tu nombre, código fuente, archivos de diseño, base de datos. Una vez abonado el precio total, te lo llevás. Si en algún momento dejás de pagar el mantenimiento mensual, el sitio sigue siendo tuyo y funcionando.",
  },
  {
    id: "mantenimiento-obligatorio",
    question: "¿Tengo que pagar mantenimiento sí o sí?",
    answer:
      "No. El mantenimiento mensual es opcional. Si tu sitio funciona bien y no necesitás cambios, podés no contratarlo. Si después querés retomarlo, lo sumás. Vos decidís.",
  },
  {
    id: "garantia",
    question: "¿Y si no me gusta el resultado?",
    answer:
      "Iteramos las veces que haga falta dentro del alcance. Si en 30 días desde la entrega no estás conforme con el diseño, te devuelvo el 100% del proyecto inicial. Esta garantía está escrita en el contrato.",
  },
  {
    id: "wordpress",
    question: "¿Por qué no usar WordPress o Wix?",
    answer:
      "Porque son más lentos, más hackeables y terminan saliendo más caros a largo plazo (plugins pagos, mantenimiento extra, problemas de seguridad). Lo que uso (Astro) carga más rápido, posiciona mejor en Google y no necesita parches constantes. Si querés ver la diferencia, pasame tu sitio actual y te paso un reporte.",
  },
  {
    id: "pago",
    question: "¿Cómo es la forma de pago?",
    answer:
      "Para proyectos únicos: 50% al inicio, 50% antes de publicar. Para planes mensuales: pago mensual adelantado los primeros 5 días de cada mes. Acepto transferencia bancaria y MercadoPago. Emito factura.",
  },
  {
    id: "contrato-minimo",
    question: "¿Por qué el plan SEO/Mantenimiento pide 3 meses?",
    answer:
      "Porque el SEO necesita tiempo para mostrar resultados medibles. Un mes no alcanza para ver si una estrategia funciona. Por eso el compromiso mínimo es de 3 meses. Después, mes a mes, con 15 días de aviso para cancelar. Sin trampas.",
  },
  {
    id: "factura",
    question: "¿Hacés factura?",
    answer:
      "Sí. Factura A o B según corresponda. Estoy inscripto en AFIP como Monotributista. La factura se entrega junto con cada pago.",
  },
];
