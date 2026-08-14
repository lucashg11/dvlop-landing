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
      "Una Landing Page, entre 7 y 10 días hábiles. Un Mini Sitio (3 páginas), entre 12 y 15. Un Sitio Institucional completo, entre 18 y 25. El plazo exacto te lo paso por escrito en la propuesta, antes de empezar. Si necesitás algo para una fecha concreta, avísame y veo si es viable ajustar el cronograma, pero sin prometerte lo que después no puedo cumplir.",
  },
  {
    id: "propiedad",
    question: "¿De quién es el sitio cuando terminamos?",
    answer:
      "Tuyo, al 100%. El dominio queda registrado a tu nombre, te entrego el código fuente, los archivos de diseño y, si aplica, la base de datos. Una vez abonado el precio total, es todo tuyo. Si en algún momento dejás de pagar el mantenimiento mensual, el sitio sigue siendo tuyo y sigue funcionando como el día de la entrega; lo único que cambia es que ya no tenés soporte técnico mío incluído.",
  },
  {
    id: "mantenimiento-obligatorio",
    question: "¿Tengo que pagar mantenimiento sí o sí?",
    answer:
      "No, el mantenimiento mensual es opcional. Si tu sitio funciona bien y no necesitás cambios de contenido, podés no contratarlo. Si más adelante querés retomarlo, lo sumás en cualquier momento. Vos decidís, sin cláusulas atadas.",
  },
  {
    id: "garantia",
    question: "¿Y si no me gusta el resultado?",
    answer:
      "Dentro del alcance definido, iteramos las veces que haga falta hasta que estés conforme. Si aun así, durante los primeros 30 días desde la entrega, decidís que el sitio no cumplió lo que prometimos, te devuelvo el 100% de lo que pagaste. Está como cláusula explícita en el contrato, sin letra chica ni condiciones raras.",
  },
  {
    id: "wordpress",
    question: "¿Por qué no usar WordPress o Wix?",
    answer:
      "Porque en la práctica son más lentos, más vulnerables a hackeos y terminan saliendo más caros a largo plazo: plugins pagos, mantenimiento extra, problemas de seguridad recurrentes. Lo que uso (Astro) carga más rápido, posiciona mejor en Google y no necesita actualizaciones constantes. Si querés ver la diferencia con números concretos, pasame tu sitio actual por WhatsApp y te paso un reporte gratuito de velocidad y SEO en 24 horas.",
  },
  {
    id: "pago",
    question: "¿Cómo es la forma de pago?",
    answer:
      "Para proyectos únicos: 50% al inicio para arrancar, 50% antes de publicar. Para planes mensuales: el pago se hace los primeros 5 días de cada mes, por adelantado. Acepto transferencia bancaria y MercadoPago. En todos los casos entrego Factura C de Monotributo.",
  },
  {
    id: "contrato-minimo",
    question: "¿Por qué el plan SEO/Mantenimiento pide 3 meses?",
    answer:
      "Porque el SEO necesita tiempo para mostrar resultados medibles: indexación,Authority de dominio, posiciones estables en Google. Un mes no alcanza para saber si una estrategia está funcionando. Por eso el compromiso mínimo de los planes con SEO recurrente es de 3 meses. Después de eso, seguís mes a mes, con 15 días de aviso si querés cancelar.",
  },
  {
    id: "factura",
    question: "¿Hacés factura?",
    answer:
      "Sí, siempre. Factura C de Monotributo, que es lo que corresponde por mi categoría. La entrego junto con cada pago, en PDF y firmada digitalmente.",
  },
];
