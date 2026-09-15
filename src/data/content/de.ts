/** Almanca içerik — Türkçe kaynaktan çeviri. */

import type { Dict } from "../dict";

export const de: Dict = {
  locale: "de",
  htmlLang: "de",
  meta: {
    title: "MyDentist | Internationaler Gesundheitstourismus",
    description:
      "Ihr vertrauenswürdiger Partner im internationalen Gesundheitstourismus. Akkreditierte Kliniken und erfahrene Ärzte für Haartransplantation, Zahnbehandlung, Gesichtsästhetik und Orthopädie.",
    keywords: [
      "Gesundheitstourismus",
      "Medizintourismus Türkei",
      "Haartransplantation",
      "Zahnbehandlung",
      "Zahnimplantate",
      "Smile Design",
      "Gesichtsästhetik",
      "Orthopädie",
      "Behandlung in der Türkei",
    ],
    ogAlt: "MyDentist — internationaler Gesundheitstourismus",
  },
  h1: "MyDentist — Internationaler Gesundheitstourismus und Behandlungsberatung",
  skipToContent: "Zum Inhalt springen",
  nav: {
    links: [
      { label: "Startseite", href: "#ana-sayfa" },
      { label: "Über uns", href: "#hakkimizda", wideOnly: true },
      { label: "Behandlungen", href: "#tedaviler" },
      { label: "Partnerkliniken", href: "#anlasmali-kurumlar" },
      { label: "Reiseziele", href: "#rotalar" },
      { label: "Kontakt", href: "#iletisim" },
    ],
    cta: "Kostenlose Beratung",
    menuLabel: "Menü öffnen/schließen",
    themeToggle: "Dunkles / helles Design wechseln",
  },
  hero: {
    imageAlt:
      "Eine zufriedene Patientin, die über den Gesundheitstourismus in der Türkei behandelt wurde",
    pills: [
      "Haartransplantation",
      "Smile Design & Zahngesundheit",
      "Gesichtsästhetik",
      "Orthopädie",
    ],
    form: {
      name: "Vor- und Nachname",
      phone: "Telefonnummer",
      email: "E-Mail-Adresse",
      submit: "Senden",
      sent: "Wir haben Ihre Anfrage erhalten. Wir melden uns in Kürze bei Ihnen.",
      countryLabel: "Ländervorwahl",
      searchCountry: "Land suchen",
      noResults: "Keine Ergebnisse gefunden",
      invalidPhone:
        "Geben Sie eine gültige Telefonnummer für das gewählte Land ein.",
    },
  },
  treatments: {
    eyebrow: "BEHANDLUNGEN",
    title: "Beliebte Behandlungen",
    description:
      "Die Behandlungsbereiche, die von unseren Fachärzten und akkreditierten Kliniken am häufigsten durchgeführt werden.",
    link: "Mehr erfahren",
    items: [
      {
        title: "Haartransplantation",
        description:
          "Dauerhafte und ästhetische Ergebnisse durch natürlich wirkende Transplantationstechniken.",
      },
      {
        title: "Zahnbehandlung",
        description:
          "Ästhetisches Smile Design, Implantate und sämtliche Leistungen der Zahngesundheit.",
      },
      {
        title: "Gesichtsästhetik",
        description:
          "Botox, Filler, Facelifting und mehr für ein junges und dynamisches Aussehen.",
      },
      {
        title: "Orthopädie",
        description:
          "Moderne chirurgische Lösungen für Knie-, Hüft- und Gelenkbehandlungen.",
      },
    ],
  },
  partners: {
    eyebrow: "UNSERE PARTNEREINRICHTUNGEN",
    title: "Partnerkliniken",
    goToPage: "Zur Seite",
  },
  process: {
    eyebrow: "UNSER ABLAUF",
    title: "Wie läuft es ab?",
    description:
      "Unsere Fachärzte begleiten Sie durch einen akkreditierten und transparenten Prozess.",
    steps: [
      {
        no: "01",
        title: "Erster Kontakt",
        description:
          "Nehmen Sie Kontakt auf, damit wir Ihre Anliegen anhören und erste Informationen austauschen können.",
      },
      {
        no: "02",
        title: "Beurteilung",
        description:
          "Wir prüfen Ihre medizinischen Unterlagen und bestimmen den passendsten Behandlungsplan.",
      },
      {
        no: "03",
        title: "Arzt- & Klinikauswahl",
        description: "Wir stellen Ihnen passende Fachärzte und Kliniken vor.",
      },
      {
        no: "04",
        title: "Reiseplanung",
        description:
          "Wir organisieren Ihre Flüge, Unterkunft und sämtliche Transferleistungen.",
      },
      {
        no: "05",
        title: "Behandlung",
        description:
          "Ihre Behandlung erfolgt sicher, komfortabel und nach internationalen Standards.",
      },
      {
        no: "06",
        title: "Nachsorge & Betreuung",
        description:
          "Auch nach der Behandlung begleiten wir Sie mit Nachsorge und Beratung.",
      },
    ],
  },
  destinations: {
    eyebrow: "REISEZIELE",
    title: "Beliebte Reiseziele",
    cta: "Entdecken",
    items: [
      { title: "Türkei", cities: "Istanbul, Antalya, Bodrum" },
      { title: "Deutschland", cities: "Frankfurt" },
      { title: "Portugal", cities: "Lissabon, Porto" },
    ],
  },
  stats: [
    {
      value: "5+",
      label: "Länder",
      description: "Wir betreuen zufriedene Patienten aus aller Welt.",
    },
    {
      value: "25.000+",
      label: "Patienten",
      description:
        "Jedes Jahr finden Tausende internationale Patienten mit uns zu ihrer Gesundheit zurück.",
    },
    {
      value: "150+",
      label: "Fachärzte",
      description:
        "Unser erfahrenes und international zertifiziertes Ärzteteam.",
    },
    {
      value: "98 %",
      label: "Zufriedenheitsrate",
      description:
        "Die Zufriedenheit unserer Patienten ist unser größter Antrieb.",
    },
  ],
  testimonials: {
    prev: "Vorherige Bewertung",
    next: "Nächste Bewertung",
    label: "Patientenbewertungen",
    goTo: "Zur Bewertung",
    // Die erste Bewertung stammt aus dem Design. Die übrigen sind PLATZHALTER
    // und müssen vor dem Livegang durch echte Patientenstimmen ersetzt werden.
    // Sie werden bewusst nicht als schema.org Review/AggregateRating ausgegeben.
    items: [
      {
        name: "Anna L.",
        country: "Frankreich",
        rating: 5,
        quote:
          "Ich kam für Implantate nach Istanbul. Das Team hat mich während des gesamten Ablaufs unglaublich gut unterstützt. Klinik, Hotel und Transfers waren einwandfrei. Mit Ergebnis und Service bin ich sehr zufrieden.",
      },
      {
        name: "Michael B.",
        country: "Deutschland",
        rating: 5,
        quote:
          "Ich kam für eine Haartransplantation. Jeder Schritt von der Beratung bis zur Operation war im Voraus geplant. Dank der Dolmetscherbetreuung hatte ich zu keinem Zeitpunkt Schwierigkeiten.",
      },
      {
        name: "Sofia R.",
        country: "Portugal",
        rating: 5,
        quote:
          "Für mein Smile Design war ich in Izmir. Die Klinik war sehr modern und das Team äußerst aufmerksam. Nach meiner Rückkehr wurden die Kontrollen online fortgesetzt.",
      },
      {
        name: "James W.",
        country: "Vereinigtes Königreich",
        rating: 5,
        quote:
          "Ich hatte eine Knieprothesen-Operation. Abholung am Flughafen, Hotel, Transfers — ich musste mich um nichts selbst kümmern. Der gesamte Ablauf war transparent.",
      },
      {
        name: "Lena K.",
        country: "Niederlande",
        rating: 5,
        quote:
          "Bei der Recherche zur Gesichtsästhetik gab es unzählige Möglichkeiten. Man hat mich wirklich zu der Klinik und dem Arzt geführt, die am besten zu mir passten.",
      },
    ],
  },
  faq: {
    eyebrow: "HÄUFIG GESTELLTE FRAGEN",
    items: [
      {
        question:
          "Was sollte ich vor einer Behandlungsreise in die Türkei beachten?",
        answer:
          "Sie können den Vorabprüfungsprozess starten, indem Sie unserem Team Ihre Krankengeschichte und Befunde zusenden.",
      },
      {
        question: "Sind Unterkunft und Transfer inbegriffen?",
        answer:
          "Abholung am Flughafen, Hotelunterkunft und Kliniktransfers sind in Ihrem Paket enthalten. Die Einzelheiten werden entsprechend Ihrem Behandlungsplan festgelegt.",
      },
      {
        question: "Wie laufen die Kontrollen nach der Behandlung ab?",
        answer:
          "Nach Ihrer Rückkehr werden Online-Nachsorgetermine vereinbart; bei Bedarf werden Sie an unsere Partnerkliniken verwiesen.",
      },
      {
        question: "In welchen Sprachen bieten Sie Unterstützung an?",
        answer:
          "Wir bieten Dolmetscherbetreuung auf Türkisch, Englisch, Deutsch, Französisch und Arabisch.",
      },
    ],
  },
  services: {
    eyebrow: "RUNDUM-BETREUUNG",
    title: "Auf jedem Schritt Ihrer Reise an Ihrer Seite",
    description:
      "Alle Leistungen, die Sie während Ihrer Behandlung benötigen, erhalten Sie aus einer Hand. Ihr Komfort und Ihre Sicherheit haben Vorrang.",
    cta: "Unsere Leistungen entdecken",
    labels: [
      "Flughafenservice",
      "Dolmetscherteam",
      "Vertrauenswürdige Agenturen",
      "Hochwertige und renommierte\nGesundheitseinrichtungen",
      "Professionelle\nBerater",
      "Hotelunterkunft",
    ],
  },
  contact: {
    eyebrow: "KONTAKT",
    title: "Wir beantworten Ihre Fragen",
    description:
      "Füllen Sie das Formular aus und unsere Berater melden sich bei Ihnen. Wir bieten eine kostenlose Vorabprüfung zu Behandlungsplan, Ablauf und Reisedetails.",
  },
  detail: {
    treatmentsCrumb: "Behandlungen",
    destinationsCrumb: "Reiseziele",
    highlights: "AUF EINEN BLICK",
    faqTitle: "Häufig gestellte Fragen",
    otherTreatments: "Weitere Behandlungen",
    otherDestinations: "Weitere Reiseziele",
    medicalNotice:
      "Die Informationen auf dieser Seite dienen ausschließlich der allgemeinen Orientierung. Sie stellen keine medizinische Beratung dar und ersetzen keine ärztliche Untersuchung. Zeitangaben und Ergebnisse sind von Person zu Person verschieden. Eine abschließende Beurteilung kann nur der Sie untersuchende Arzt vornehmen.",
    clinicsTitle: "Unsere Partnerkliniken in diesem Land",
    ctaTitle: "Kostenlose Vorabprüfung",
    ctaText:
      "Senden Sie uns Ihre Befunde und Fragen — wir stellen Ihnen passende Kliniken und Ärzte samt voraussichtlichem Zeitrahmen und Ablaufplan vor.",
  },
  footer: {
    description:
      "Ihr vertrauenswürdiger Partner im internationalen Gesundheitstourismus — an Ihrer Seite für ein gesünderes Morgen.",
    columns: [
      {
        title: "SCHNELLZUGRIFF",
        links: [
          { label: "Startseite", href: "#ana-sayfa" },
          { label: "Über uns", href: "#hakkimizda" },
          { label: "Behandlungen", href: "#tedaviler" },
          { label: "Partnerkliniken", href: "#anlasmali-kurumlar" },
          { label: "Reiseziele", href: "#rotalar" },
          { label: "Kontakt", href: "#iletisim" },
        ],
      },
      {
        title: "UNSERE LEISTUNGEN",
        links: [
          { label: "Flughafenservice", href: "#hizmetler" },
          { label: "Hotelunterkunft", href: "#hizmetler" },
          { label: "Dolmetscherteam", href: "#hizmetler" },
          { label: "Professionelle Berater", href: "#hizmetler" },
          { label: "Vertrauenswürdige Agenturen", href: "#hizmetler" },
          { label: "Gesundheitseinrichtungen", href: "#hizmetler" },
        ],
      },
    ],
    contactTitle: "KONTAKT",
    address: ["...Mah. ...Cad.", "No: 123 .... / Istanbul"],
    legal: "Alle Rechte vorbehalten.",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
  },
};
