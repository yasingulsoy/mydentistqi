/** İngilizce içerik — Türkçe kaynaktan çeviri. */

import type { Dict } from "../dict";

export const en: Dict = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "MyDentist | International Dental Health Tourism",
    description:
      "Your trusted partner in international dental health tourism. Accredited clinics and expert dentists for dental implants, Hollywood Smile, zirconium crowns and All on Four.",
    keywords: [
      "dental tourism",
      "medical tourism Turkey",
      "dental implants",
      "Hollywood Smile",
      "zirconium crowns",
      "All on Four",
      "smile design",
      "dental treatment",
      "dental treatment in Türkiye",
    ],
    ogAlt: "MyDentist — international dental health tourism",
  },
  h1:
    "Let's plan the right treatment for your smile together",
  heroLead:
    "Discover the treatment options that suit your dental needs, plan your journey with confidence and reach the right solution with ease.",
  skipToContent: "Skip to content",
  nav: {
    links: [
      { label: "Home", href: "#ana-sayfa" },
      { label: "About Us", href: "#hakkimizda", wideOnly: true },
      { label: "Treatments", href: "#tedaviler" },
      { label: "Partner Institutions", href: "#anlasmali-kurumlar" },
      { label: "Destinations", href: "#rotalar" },
      { label: "Contact", href: "#iletisim" },
    ],
    cta: "Free Consultation",
    menuLabel: "Toggle menu",
    themeToggle: "Switch dark / light theme",
  },
  hero: {
    imageAlt: "A happy patient who travelled to Türkiye for dental treatment",
    pills: [
      "Dental Implant",
      "Hollywood Smile",
      "Zirconium Crowns",
      "All On Four",
    ],
    form: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      submit: "Send",
      sending: "Sending…",
      sent: "We have received your request. We will contact you shortly.",
      error:
        "We could not send your request. Please try again or email info@mydentist.com.",
      countryLabel: "Country code",
      searchCountry: "Search country",
      noResults: "No results found",
      invalidPhone: "Enter a valid phone number for the selected country.",
    },
  },
  about: {
    eyebrow: "ABOUT US",
    title: "For 16 years, helping you reach the right treatment with confidence",
    paragraphs: [
      "With over 16 years of experience and a clinic network spanning more than 7 countries, we have supported more than 25,000 patients through their dental treatment. Our aim is to bring high quality standards together with accessible, affordable treatment options so that our patients reach the right treatment with confidence. From the first assessment to treatment planning, from booking to aftercare, we provide a transparent, fast and professional service at every stage.",
      "We use modern digital technology throughout treatment to offer a faster, more accurate and more efficient planning experience. By enabling a preliminary assessment based on intraoral photographs, panoramic X-rays and any other digital imaging required, we help our patients reach suitable treatment options without losing time. Fast communication, accurate guidance and effective coordination make every step of the process as easy and comfortable as possible.",
      "Our service does not end when the treatment does. We continue to stand by our patients for follow-up, check-ups and re-assessment whenever needed. By setting out the aftercare and warranty terms offered by our partner clinics transparently, we make sure our patients feel secure not only during treatment but afterwards as well.",
    ],
  },
  treatments: {
    eyebrow: "TREATMENTS",
    title: "Featured Treatments",
    description:
      "The treatment areas most preferred at our expert dentists and accredited clinics.",
    link: "Learn More",
    items: [
      {
        title: "Dental Implant",
        description:
          "A permanent solution for missing teeth; a natural look and comfortable chewing.",
      },
      {
        title: "Zirconium Crowns",
        description:
          "Durable, metal-free crowns that come close to the look of natural teeth.",
      },
      {
        title: "Hollywood Smile",
        description:
          "An aesthetic smile design planned as a whole around your facial features.",
      },
      {
        title: "All On Four",
        description:
          "Full-arch restoration with a fixed prosthesis on four implants.",
      },
    ],
  },
  partners: {
    eyebrow: "INSTITUTIONS WE WORK WITH",
    title: "Partner Institutions",
    goToPage: "Go to page",
  },
  process: {
    eyebrow: "OUR PROCESS",
    title: "How Does It Work?",
    description:
      "You can book a free appointment or simply share your intraoral photographs and X-rays with us. Our expert dentists review them, so you can easily find out your personalised treatment plan.",
    steps: [
      {
        no: "01",
        title: "First Contact",
        description:
          "Get in touch so we can listen to your needs and exchange initial information.",
      },
      {
        no: "02",
        title: "Assessment",
        description:
          "We review your medical information and determine the most suitable treatment plan.",
      },
      {
        no: "03",
        title: "Doctor & Clinic Matching",
        description: "We share expert doctor and clinic options with you.",
      },
      {
        no: "04",
        title: "Travel Planning",
        description:
          "We arrange your flights, accommodation and all transfer services.",
      },
      {
        no: "05",
        title: "Treatment",
        description:
          "Your treatment is carried out safely, comfortably and to international standards.",
      },
      {
        no: "06",
        title: "Follow-up & Support",
        description:
          "We continue to provide post-treatment follow-up and consultancy support.",
      },
    ],
  },
  destinations: {
    eyebrow: "DESTINATIONS",
    title: "Popular Destinations",
    cta: "Discover",
    items: [
      { title: "Türkiye", cities: "Istanbul, Antalya, Bodrum" },
      { title: "Germany", cities: "Frankfurt" },
      { title: "Portugal", cities: "Lisbon, Porto" },
    ],
  },
  stats: [
    {
      value: "7+",
      label: "Countries",
      description: "We serve happy patients from all around the world.",
    },
    {
      value: "25,000+",
      label: "Patients",
      description:
        "Thousands of international patients regain their health with us every year.",
    },
    {
      value: "16+",
      label: "Years of Experience",
      description:
        "For over 16 years we have stood by our patients throughout their dental treatment.",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      description: "Our patients' satisfaction is our greatest motivation.",
    },
  ],
  testimonials: {
    prev: "Previous review",
    next: "Next review",
    label: "Patient reviews",
    goTo: "Go to review",
    // The first review comes from the design. The rest are PLACEHOLDERS -
    // replace them with real patient reviews before going live. They are
    // deliberately not emitted as schema.org Review/AggregateRating data.
    items: [
      {
        name: "Elif K.",
        country: "Türkiye",
        rating: 5,
        quote:
          "I had zirconium crowns fitted. From choosing the shade to the try-in, they explained what would happen at every step. The result really does look natural — nobody can tell they are crowns.",
      },
      {
        name: "Murat S.",
        country: "Türkiye",
        rating: 5,
        quote:
          "I came for two implants. After I sent my intraoral photographs we discussed the plan in advance, so there were no surprises when I arrived in Istanbul. My check-ups were done regularly too.",
      },
      {
        name: "Zeynep A.",
        country: "Türkiye",
        rating: 5,
        quote:
          "I applied for a Hollywood Smile. Seeing the result at the try-in stage put my mind at ease, and we made a few adjustments I wanted right there. My check-ups afterwards never slipped.",
      },
      {
        name: "Anna L.",
        country: "France",
        rating: 5,
        quote:
          "I came to Istanbul for a smile design. The team was incredibly supportive throughout the process. The clinic, the hotel and the transfers were all perfect. I am very happy with the result and the service.",
      },
      {
        name: "Michael B.",
        country: "Germany",
        rating: 5,
        quote:
          "I had All on Four treatment. Every step from the consultation to the operation was planned in advance. Thanks to the interpreter support I never struggled at any stage.",
      },
      {
        name: "Sofia R.",
        country: "Portugal",
        rating: 5,
        quote:
          "I was in Izmir for my zirconium crowns. The clinic was very modern and the team extremely attentive. My check-ups continued online after I returned home.",
      },
    ],
  },
  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    items: [
      {
        question: "What should I do before travelling to Türkiye for treatment?",
        answer:
          "You can start the pre-assessment process by sharing your medical history and reports with our team.",
      },
      {
        question: "Are accommodation and transfer services included?",
        answer:
          "Airport pick-up, hotel accommodation and clinic transfers are included in your package. The details are confirmed according to your treatment plan.",
      },
      {
        question: "How are post-treatment check-ups carried out?",
        answer:
          "Online follow-up consultations are scheduled after you return home, and you are referred to our partner clinics whenever needed.",
      },
      {
        question: "Which languages do you offer support in?",
        answer:
          "We provide interpreter support in Turkish, English, German, French and Arabic.",
      },
    ],
  },
  services: {
    eyebrow: "FULL SERVICE SUPPORT",
    title: "By Your Side at Every Step of Your Journey",
    description:
      "We provide every service you may need throughout your treatment from a single point. Your comfort and safety are our priority.",
    cta: "Explore Our Services",
    labels: [
      "Airport Service",
      "Interpreter Team",
      "Trusted Agencies",
      "Quality and Reputable\nHealthcare Institutions",
      "Professional\nConsultants",
      "Hotel Accommodation",
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Let us answer your questions",
    description:
      "Fill in the form and our consultants will get back to you. We offer a free pre-assessment covering your treatment plan, the process and travel details.",
  },
  detail: {
    treatmentsCrumb: "Treatments",
    destinationsCrumb: "Destinations",
    highlights: "AT A GLANCE",
    faqTitle: "Frequently Asked Questions",
    otherTreatments: "Other treatments",
    otherDestinations: "Other destinations",
    medicalNotice:
      "The information on this page is for general guidance only. It is not medical advice and is not a substitute for examination by a physician. Timeframes and results vary from person to person. Only the physician examining you can make a final assessment.",
    clinicsTitle: "Our partner clinics in this country",
    ctaTitle: "Free pre-assessment",
    ctaText:
      "Share your reports and questions, and we will present suitable clinic and physician options together with an estimated timeframe and process plan.",
  },
  footer: {
    description:
      "Your trusted partner in international health tourism, by your side for healthier tomorrows.",
    columns: [
      {
        title: "QUICK LINKS",
        links: [
          { label: "Home", href: "#ana-sayfa" },
          { label: "About Us", href: "#hakkimizda" },
          { label: "Treatments", href: "#tedaviler" },
          { label: "Partner Institutions", href: "#anlasmali-kurumlar" },
          { label: "Destinations", href: "#rotalar" },
          { label: "Contact", href: "#iletisim" },
        ],
      },
      {
        title: "OUR SERVICES",
        links: [
          { label: "Airport Service", href: "#hizmetler" },
          { label: "Hotel Accommodation", href: "#hizmetler" },
          { label: "Interpreter Team", href: "#hizmetler" },
          { label: "Professional Consultants", href: "#hizmetler" },
          { label: "Trusted Agencies", href: "#hizmetler" },
          { label: "Healthcare Institutions", href: "#hizmetler" },
        ],
      },
    ],
    contactTitle: "CONTACT",
    legal: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
};
