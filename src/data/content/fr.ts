/** Fransızca içerik — Türkçe kaynaktan çeviri. */

import type { Dict } from "../dict";

export const fr: Dict = {
  locale: "fr",
  htmlLang: "fr",
  meta: {
    title: "MyDentist | Tourisme médical international",
    description:
      "Votre partenaire de confiance en tourisme médical international. Cliniques accréditées et médecins experts en greffe de cheveux, soins dentaires, esthétique du visage et orthopédie.",
    keywords: [
      "tourisme médical",
      "tourisme médical Turquie",
      "greffe de cheveux",
      "soins dentaires",
      "implants dentaires",
      "design du sourire",
      "esthétique du visage",
      "orthopédie",
      "se faire soigner en Turquie",
    ],
    ogAlt: "MyDentist — tourisme médical international",
  },
  h1: "MyDentist — Tourisme médical international et conseil en traitement",
  skipToContent: "Aller au contenu",
  nav: {
    links: [
      { label: "Accueil", href: "#ana-sayfa" },
      { label: "À propos", href: "#hakkimizda", wideOnly: true },
      { label: "Traitements", href: "#tedaviler" },
      { label: "Cliniques partenaires", href: "#anlasmali-kurumlar" },
      { label: "Destinations", href: "#rotalar" },
      { label: "Contact", href: "#iletisim" },
    ],
    cta: "Consultation gratuite",
    menuLabel: "Ouvrir/fermer le menu",
    themeToggle: "Basculer le thème clair / sombre",
  },
  hero: {
    imageAlt:
      "Une patiente satisfaite soignée en Turquie dans le cadre du tourisme médical",
    pills: [
      "Greffe de cheveux",
      "Design du sourire & santé dentaire",
      "Esthétique du visage",
      "Orthopédie",
    ],
    form: {
      name: "Nom et prénom",
      phone: "Numéro de téléphone",
      email: "Adresse e-mail",
      submit: "Envoyer",
      sent: "Nous avons bien reçu votre demande. Nous vous contacterons très prochainement.",
      countryLabel: "Indicatif du pays",
      searchCountry: "Rechercher un pays",
      noResults: "Aucun résultat trouvé",
      invalidPhone:
        "Saisissez un numéro de téléphone valide pour le pays sélectionné.",
    },
  },
  treatments: {
    eyebrow: "TRAITEMENTS",
    title: "Traitements phares",
    description:
      "Les domaines de traitement les plus demandés auprès de nos médecins experts et de nos cliniques accréditées.",
    link: "En savoir plus",
    items: [
      {
        title: "Greffe de cheveux",
        description:
          "Des résultats durables et esthétiques grâce à des techniques de greffe au rendu naturel.",
      },
      {
        title: "Soins dentaires",
        description:
          "Design du sourire esthétique, implants et l'ensemble des soins de santé dentaire.",
      },
      {
        title: "Esthétique du visage",
        description:
          "Botox, injections, lifting et bien plus pour une apparence jeune et dynamique.",
      },
      {
        title: "Orthopédie",
        description:
          "Des solutions chirurgicales modernes pour le genou, la hanche et les articulations.",
      },
    ],
  },
  partners: {
    eyebrow: "NOS ÉTABLISSEMENTS PARTENAIRES",
    title: "Cliniques partenaires",
    goToPage: "Aller à la page",
  },
  process: {
    eyebrow: "NOTRE PROCESSUS",
    title: "Comment ça marche ?",
    description:
      "Nos médecins experts vous accompagnent dans un processus accrédité et transparent.",
    steps: [
      {
        no: "01",
        title: "Premier contact",
        description:
          "Contactez-nous afin que nous puissions écouter vos besoins et échanger les premières informations.",
      },
      {
        no: "02",
        title: "Évaluation",
        description:
          "Nous examinons vos informations médicales et définissons le plan de traitement le plus adapté.",
      },
      {
        no: "03",
        title: "Choix du médecin et de la clinique",
        description:
          "Nous vous présentons des médecins experts et des cliniques correspondant à votre cas.",
      },
      {
        no: "04",
        title: "Organisation du voyage",
        description:
          "Nous organisons vos vols, votre hébergement et l'ensemble des transferts.",
      },
      {
        no: "05",
        title: "Traitement",
        description:
          "Votre traitement se déroule en toute sécurité, dans le confort et selon les normes internationales.",
      },
      {
        no: "06",
        title: "Suivi et accompagnement",
        description:
          "Nous poursuivons le suivi et le conseil après votre traitement.",
      },
    ],
  },
  destinations: {
    eyebrow: "DESTINATIONS",
    title: "Destinations populaires",
    cta: "Découvrir",
    items: [
      { title: "Turquie", cities: "Istanbul, Antalya, Bodrum" },
      { title: "Allemagne", cities: "Francfort" },
      { title: "Portugal", cities: "Lisbonne, Porto" },
    ],
  },
  stats: [
    {
      value: "5+",
      label: "Pays",
      description:
        "Nous accompagnons des patients satisfaits venus du monde entier.",
    },
    {
      value: "25 000+",
      label: "Patients",
      description:
        "Chaque année, des milliers de patients internationaux retrouvent la santé avec nous.",
    },
    {
      value: "150+",
      label: "Médecins experts",
      description:
        "Notre équipe médicale expérimentée et certifiée à l'international.",
    },
    {
      value: "98 %",
      label: "Taux de satisfaction",
      description:
        "La satisfaction de nos patients est notre plus grande motivation.",
    },
  ],
  testimonials: {
    prev: "Avis précédent",
    next: "Avis suivant",
    label: "Avis des patients",
    goTo: "Aller à l'avis",
    // Le premier avis provient de la maquette. Les suivants sont des
    // ESPACES RÉSERVÉS : remplacez-les par de vrais témoignages avant la mise
    // en ligne. Ils ne sont volontairement pas publiés en schema.org
    // Review/AggregateRating.
    items: [
      {
        name: "Anna L.",
        country: "France",
        rating: 5,
        quote:
          "Je suis venue à Istanbul pour des implants. L'équipe m'a soutenue de façon remarquable tout au long du processus. La clinique, l'hôtel et les transferts étaient parfaits. Je suis très satisfaite du résultat et du service.",
      },
      {
        name: "Michael B.",
        country: "Allemagne",
        rating: 5,
        quote:
          "Je suis venu pour une greffe de cheveux. Chaque étape, de la consultation à l'opération, avait été planifiée à l'avance. Grâce à l'interprète, je n'ai eu aucune difficulté.",
      },
      {
        name: "Sofia R.",
        country: "Portugal",
        rating: 5,
        quote:
          "J'étais à Izmir pour mon design du sourire. La clinique était très moderne et l'équipe extrêmement attentive. Mes contrôles se sont poursuivis en ligne après mon retour.",
      },
      {
        name: "James W.",
        country: "Royaume-Uni",
        rating: 5,
        quote:
          "J'ai subi une pose de prothèse du genou. Accueil à l'aéroport, hôtel, transferts… je n'ai eu à organiser absolument rien moi-même. Tout le processus était transparent.",
      },
      {
        name: "Lena K.",
        country: "Pays-Bas",
        rating: 5,
        quote:
          "Il y avait énormément d'options lorsque je me renseignais sur l'esthétique du visage. On m'a vraiment orientée vers la clinique et le médecin qui me convenaient le mieux.",
      },
    ],
  },
  faq: {
    eyebrow: "QUESTIONS FRÉQUENTES",
    items: [
      {
        question:
          "Que dois-je faire avant de partir me faire soigner en Turquie ?",
        answer:
          "Vous pouvez lancer le processus de pré-évaluation en transmettant à notre équipe vos antécédents médicaux et vos comptes rendus.",
      },
      {
        question: "L'hébergement et les transferts sont-ils inclus ?",
        answer:
          "L'accueil à l'aéroport, l'hébergement à l'hôtel et les transferts vers la clinique sont compris dans votre formule. Les détails sont confirmés selon votre plan de traitement.",
      },
      {
        question: "Comment se déroulent les contrôles après le traitement ?",
        answer:
          "Des consultations de suivi en ligne sont programmées après votre retour et, si nécessaire, vous êtes orienté vers nos cliniques partenaires.",
      },
      {
        question: "Dans quelles langues proposez-vous une assistance ?",
        answer:
          "Nous proposons un accompagnement par interprète en turc, anglais, allemand, français et arabe.",
      },
    ],
  },
  services: {
    eyebrow: "ACCOMPAGNEMENT COMPLET",
    title: "À vos côtés à chaque étape de votre voyage",
    description:
      "Tous les services dont vous pourriez avoir besoin pendant votre traitement, réunis en un seul point de contact. Votre confort et votre sécurité sont notre priorité.",
    cta: "Découvrir nos services",
    labels: [
      "Service aéroport",
      "Équipe d'interprètes",
      "Agences de confiance",
      "Établissements de santé\nreconnus et de qualité",
      "Conseillers\nprofessionnels",
      "Hébergement à l'hôtel",
    ],
  },
  detail: {
    treatmentsCrumb: "Traitements",
    destinationsCrumb: "Destinations",
    highlights: "EN BREF",
    faqTitle: "Questions fréquentes",
    otherTreatments: "Autres traitements",
    otherDestinations: "Autres destinations",
    medicalNotice:
      "Les informations de cette page sont fournies à titre d'orientation générale. Elles ne constituent pas un avis médical et ne remplacent pas un examen par un médecin. Les délais et les résultats varient d'une personne à l'autre. Seul le médecin qui vous examine peut établir une évaluation définitive.",
    clinicsTitle: "Nos cliniques partenaires dans ce pays",
    ctaTitle: "Pré-évaluation gratuite",
    ctaText:
      "Transmettez-nous vos comptes rendus et vos questions : nous vous présenterons les cliniques et médecins adaptés, avec un calendrier et un déroulé prévisionnels.",
  },
  footer: {
    description:
      "Votre partenaire de confiance en tourisme médical international, à vos côtés pour des lendemains en meilleure santé.",
    columns: [
      {
        title: "LIENS RAPIDES",
        links: [
          { label: "Accueil", href: "#ana-sayfa" },
          { label: "À propos", href: "#hakkimizda" },
          { label: "Traitements", href: "#tedaviler" },
          { label: "Cliniques partenaires", href: "#anlasmali-kurumlar" },
          { label: "Destinations", href: "#rotalar" },
          { label: "Contact", href: "#iletisim" },
        ],
      },
      {
        title: "NOS SERVICES",
        links: [
          { label: "Service aéroport", href: "#hizmetler" },
          { label: "Hébergement à l'hôtel", href: "#hizmetler" },
          { label: "Équipe d'interprètes", href: "#hizmetler" },
          { label: "Conseillers professionnels", href: "#hizmetler" },
          { label: "Agences de confiance", href: "#hizmetler" },
          { label: "Établissements de santé", href: "#hizmetler" },
        ],
      },
    ],
    contactTitle: "CONTACT",
    address: ["...Mah. ...Cad.", "No: 123 .... / Istanbul"],
    legal: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
  },
};
