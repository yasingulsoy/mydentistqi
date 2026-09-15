/** İngilizce içerik — Türkçe kaynaktan çeviri. */

import type { Dict } from "../dict";

export const en: Dict = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "MyDentist | International Health Tourism",
    description:
      "Your trusted partner in international health tourism. Accredited clinics and expert doctors for hair transplants, dental treatment, facial aesthetics and orthopedics.",
    keywords: [
      "health tourism",
      "medical tourism Turkey",
      "hair transplant",
      "dental treatment",
      "dental implants",
      "smile design",
      "facial aesthetics",
      "orthopedics",
      "treatment in Türkiye",
    ],
    ogAlt: "MyDentist — international health tourism",
  },
  h1: "MyDentist — International Health Tourism and Treatment Consultancy",
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
    imageAlt: "A happy patient treated in Türkiye through health tourism",
    pills: [
      "Hair Transplant",
      "Smile Design & Dental Health",
      "Facial Aesthetics",
      "Orthopedics",
    ],
    form: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      submit: "Send",
      sent: "We have received your request. We will contact you shortly.",
      countryLabel: "Country code",
      searchCountry: "Search country",
      noResults: "No results found",
      invalidPhone: "Enter a valid phone number for the selected country.",
    },
  },
  treatments: {
    eyebrow: "TREATMENTS",
    title: "Featured Treatments",
    description:
      "The treatment areas most preferred by our expert doctors and accredited clinics.",
    link: "Learn More",
    items: [
      {
        title: "Hair Transplant",
        description:
          "Permanent and aesthetic results with natural-looking hair transplant techniques.",
      },
      {
        title: "Dental Treatment",
        description:
          "Aesthetic smile design, implants and all dental health services.",
      },
      {
        title: "Facial Aesthetics",
        description:
          "Botox, fillers, face lifts and more for a young and dynamic appearance.",
      },
      {
        title: "Orthopedics",
        description:
          "Modern surgical solutions for knee, hip and joint treatments.",
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
      "Our expert doctors guide you through an accredited and transparent process.",
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
      value: "5+",
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
      value: "150+",
      label: "Expert Doctors",
      description:
        "Our experienced and internationally certified medical team.",
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
        name: "Anna L.",
        country: "France",
        rating: 5,
        quote:
          "I came to Istanbul for implants. The team was incredibly supportive throughout the entire process. The clinic, the hotel and the transfers were all perfect. I am very happy with the result and the service.",
      },
      {
        name: "Michael B.",
        country: "Germany",
        rating: 5,
        quote:
          "I came for a hair transplant. Every step from the consultation to the operation was planned in advance. Thanks to the interpreter support I never struggled at any stage.",
      },
      {
        name: "Sofia R.",
        country: "Portugal",
        rating: 5,
        quote:
          "I was in Izmir for my smile design. The clinic was very modern and the team was extremely attentive. My check-ups continued online after I returned home.",
      },
      {
        name: "James W.",
        country: "United Kingdom",
        rating: 5,
        quote:
          "I had knee replacement surgery. Airport pick-up, hotel, transfers... I never had to arrange a single thing myself. The whole process was transparent.",
      },
      {
        name: "Lena K.",
        country: "Netherlands",
        rating: 5,
        quote:
          "There were so many options when I was researching facial aesthetics. They genuinely guided me to the clinic and the doctor that suited me best.",
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
    address: ["...Mah. ...Cad.", "No: 123 .... / Istanbul"],
    legal: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
};
