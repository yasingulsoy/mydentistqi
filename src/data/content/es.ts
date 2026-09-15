/** İspanyolca içerik — Türkçe kaynaktan çeviri. */

import type { Dict } from "../dict";

export const es: Dict = {
  locale: "es",
  htmlLang: "es",
  meta: {
    title: "MyDentist | Turismo de salud internacional",
    description:
      "Su socio de confianza en turismo de salud internacional. Clínicas acreditadas y médicos expertos en injerto capilar, tratamiento dental, estética facial y ortopedia.",
    keywords: [
      "turismo de salud",
      "turismo médico Turquía",
      "injerto capilar",
      "tratamiento dental",
      "implantes dentales",
      "diseño de sonrisa",
      "estética facial",
      "ortopedia",
      "tratamiento en Turquía",
    ],
    ogAlt: "MyDentist — turismo de salud internacional",
  },
  h1: "MyDentist — Turismo de salud internacional y asesoramiento de tratamientos",
  skipToContent: "Ir al contenido",
  nav: {
    links: [
      { label: "Inicio", href: "#ana-sayfa" },
      { label: "Sobre nosotros", href: "#hakkimizda", wideOnly: true },
      { label: "Tratamientos", href: "#tedaviler" },
      { label: "Clínicas asociadas", href: "#anlasmali-kurumlar" },
      { label: "Destinos", href: "#rotalar" },
      { label: "Contacto", href: "#iletisim" },
    ],
    cta: "Consulta gratuita",
    menuLabel: "Abrir/cerrar menú",
    themeToggle: "Cambiar tema claro / oscuro",
  },
  hero: {
    imageAlt:
      "Una paciente satisfecha tratada en Turquía a través del turismo de salud",
    pills: [
      "Injerto capilar",
      "Diseño de sonrisa y salud dental",
      "Estética facial",
      "Ortopedia",
    ],
    form: {
      name: "Nombre y apellidos",
      phone: "Número de teléfono",
      email: "Correo electrónico",
      submit: "Enviar",
      sent: "Hemos recibido su solicitud. Nos pondremos en contacto con usted en breve.",
      countryLabel: "Prefijo del país",
      searchCountry: "Buscar país",
      noResults: "No se han encontrado resultados",
      invalidPhone:
        "Introduzca un número de teléfono válido para el país seleccionado.",
    },
  },
  treatments: {
    eyebrow: "TRATAMIENTOS",
    title: "Tratamientos destacados",
    description:
      "Las áreas de tratamiento más solicitadas a nuestros médicos expertos y clínicas acreditadas.",
    link: "Más información",
    items: [
      {
        title: "Injerto capilar",
        description:
          "Resultados permanentes y estéticos con técnicas de injerto de aspecto natural.",
      },
      {
        title: "Tratamiento dental",
        description:
          "Diseño de sonrisa estético, implantes y todos los servicios de salud dental.",
      },
      {
        title: "Estética facial",
        description:
          "Bótox, rellenos, lifting facial y mucho más para un aspecto joven y dinámico.",
      },
      {
        title: "Ortopedia",
        description:
          "Soluciones quirúrgicas modernas para tratamientos de rodilla, cadera y articulaciones.",
      },
    ],
  },
  partners: {
    eyebrow: "INSTITUCIONES CON LAS QUE TRABAJAMOS",
    title: "Clínicas asociadas",
    goToPage: "Ir a la página",
  },
  process: {
    eyebrow: "NUESTRO PROCESO",
    title: "¿Cómo funciona?",
    description:
      "Nuestros médicos expertos le acompañan en un proceso acreditado y transparente.",
    steps: [
      {
        no: "01",
        title: "Primer contacto",
        description:
          "Póngase en contacto con nosotros para que podamos escuchar sus necesidades e intercambiar la información inicial.",
      },
      {
        no: "02",
        title: "Evaluación",
        description:
          "Revisamos su información médica y determinamos el plan de tratamiento más adecuado.",
      },
      {
        no: "03",
        title: "Selección de médico y clínica",
        description:
          "Le presentamos opciones de médicos expertos y clínicas adecuadas a su caso.",
      },
      {
        no: "04",
        title: "Planificación del viaje",
        description:
          "Organizamos sus vuelos, su alojamiento y todos los servicios de traslado.",
      },
      {
        no: "05",
        title: "Tratamiento",
        description:
          "Su tratamiento se realiza de forma segura, cómoda y conforme a los estándares internacionales.",
      },
      {
        no: "06",
        title: "Seguimiento y apoyo",
        description:
          "Continuamos ofreciéndole seguimiento y asesoramiento después del tratamiento.",
      },
    ],
  },
  destinations: {
    eyebrow: "DESTINOS",
    title: "Destinos populares",
    cta: "Descubrir",
    items: [
      { title: "Turquía", cities: "Estambul, Antalya, Bodrum" },
      { title: "Alemania", cities: "Fráncfort" },
      { title: "Portugal", cities: "Lisboa, Oporto" },
    ],
  },
  stats: [
    {
      value: "5+",
      label: "Países",
      description:
        "Atendemos a pacientes satisfechos procedentes de todo el mundo.",
    },
    {
      value: "25.000+",
      label: "Pacientes",
      description:
        "Cada año, miles de pacientes internacionales recuperan su salud con nosotros.",
    },
    {
      value: "150+",
      label: "Médicos expertos",
      description:
        "Nuestro equipo médico experimentado y certificado internacionalmente.",
    },
    {
      value: "98 %",
      label: "Índice de satisfacción",
      description:
        "La satisfacción de nuestros pacientes es nuestra mayor motivación.",
    },
  ],
  testimonials: {
    prev: "Opinión anterior",
    next: "Opinión siguiente",
    label: "Opiniones de pacientes",
    goTo: "Ir a la opinión",
    // La primera opinión procede del diseño. Las demás son MARCADORES DE
    // POSICIÓN: sustitúyalas por opiniones reales antes de publicar. No se
    // emiten deliberadamente como datos schema.org Review/AggregateRating.
    items: [
      {
        name: "Anna L.",
        country: "Francia",
        rating: 5,
        quote:
          "Vine a Estambul para ponerme implantes. El equipo me apoyó muchísimo durante todo el proceso. La clínica, el hotel y los traslados fueron perfectos. Estoy muy contenta con el resultado y con el servicio.",
      },
      {
        name: "Michael B.",
        country: "Alemania",
        rating: 5,
        quote:
          "Vine para un injerto capilar. Cada paso, desde la consulta hasta la operación, estaba planificado de antemano. Gracias al apoyo del intérprete no tuve ninguna dificultad en ningún momento.",
      },
      {
        name: "Sofia R.",
        country: "Portugal",
        rating: 5,
        quote:
          "Estuve en Esmirna para mi diseño de sonrisa. La clínica era muy moderna y el equipo sumamente atento. Mis revisiones continuaron en línea tras volver a casa.",
      },
      {
        name: "James W.",
        country: "Reino Unido",
        rating: 5,
        quote:
          "Me operaron para ponerme una prótesis de rodilla. Recogida en el aeropuerto, hotel, traslados… no tuve que organizar absolutamente nada por mi cuenta. Todo el proceso fue transparente.",
      },
      {
        name: "Lena K.",
        country: "Países Bajos",
        rating: 5,
        quote:
          "Había muchísimas opciones cuando estaba informándome sobre estética facial. Me orientaron de verdad hacia la clínica y el médico que mejor encajaban conmigo.",
      },
    ],
  },
  faq: {
    eyebrow: "PREGUNTAS FRECUENTES",
    items: [
      {
        question: "¿Qué debo hacer antes de viajar a Turquía para tratarme?",
        answer:
          "Puede iniciar el proceso de evaluación previa enviando a nuestro equipo su historial médico y sus informes.",
      },
      {
        question: "¿El alojamiento y los traslados están incluidos?",
        answer:
          "La recogida en el aeropuerto, el alojamiento en hotel y los traslados a la clínica están incluidos en su paquete. Los detalles se confirman según su plan de tratamiento.",
      },
      {
        question: "¿Cómo se realizan las revisiones posteriores al tratamiento?",
        answer:
          "Tras su regreso se programan consultas de seguimiento en línea y, siempre que sea necesario, se le deriva a nuestras clínicas asociadas.",
      },
      {
        question: "¿En qué idiomas ofrecen asistencia?",
        answer:
          "Ofrecemos asistencia con intérprete en turco, inglés, alemán, francés y árabe.",
      },
    ],
  },
  services: {
    eyebrow: "APOYO INTEGRAL",
    title: "A su lado en cada paso de su viaje",
    description:
      "Le ofrecemos desde un único punto todos los servicios que pueda necesitar durante su tratamiento. Su comodidad y su seguridad son nuestra prioridad.",
    cta: "Descubrir nuestros servicios",
    labels: [
      "Servicio de aeropuerto",
      "Equipo de intérpretes",
      "Agencias de confianza",
      "Instituciones sanitarias\nde calidad y prestigio",
      "Asesores\nprofesionales",
      "Alojamiento en hotel",
    ],
  },
  contact: {
    eyebrow: "CONTACTO",
    title: "Permítanos responder a sus preguntas",
    description:
      "Rellene el formulario y nuestros asesores se pondrán en contacto con usted. Ofrecemos una evaluación previa gratuita sobre su plan de tratamiento, el proceso y los detalles del viaje.",
  },
  detail: {
    treatmentsCrumb: "Tratamientos",
    destinationsCrumb: "Destinos",
    highlights: "DE UN VISTAZO",
    faqTitle: "Preguntas frecuentes",
    otherTreatments: "Otros tratamientos",
    otherDestinations: "Otros destinos",
    medicalNotice:
      "La información de esta página tiene únicamente carácter orientativo general. No constituye asesoramiento médico ni sustituye a un examen por parte de un médico. Los plazos y los resultados varían de una persona a otra. Solo el médico que le examine puede realizar una evaluación definitiva.",
    clinicsTitle: "Nuestras clínicas asociadas en este país",
    ctaTitle: "Evaluación previa gratuita",
    ctaText:
      "Envíenos sus informes y sus dudas: le presentaremos clínicas y médicos adecuados junto con un calendario y un plan de proceso estimados.",
  },
  footer: {
    description:
      "Su socio de confianza en turismo de salud internacional, a su lado por un mañana más saludable.",
    columns: [
      {
        title: "ENLACES RÁPIDOS",
        links: [
          { label: "Inicio", href: "#ana-sayfa" },
          { label: "Sobre nosotros", href: "#hakkimizda" },
          { label: "Tratamientos", href: "#tedaviler" },
          { label: "Clínicas asociadas", href: "#anlasmali-kurumlar" },
          { label: "Destinos", href: "#rotalar" },
          { label: "Contacto", href: "#iletisim" },
        ],
      },
      {
        title: "NUESTROS SERVICIOS",
        links: [
          { label: "Servicio de aeropuerto", href: "#hizmetler" },
          { label: "Alojamiento en hotel", href: "#hizmetler" },
          { label: "Equipo de intérpretes", href: "#hizmetler" },
          { label: "Asesores profesionales", href: "#hizmetler" },
          { label: "Agencias de confianza", href: "#hizmetler" },
          { label: "Instituciones sanitarias", href: "#hizmetler" },
        ],
      },
    ],
    contactTitle: "CONTACTO",
    address: ["...Mah. ...Cad.", "No: 123 .... / Istanbul"],
    legal: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Condiciones de uso",
  },
};
