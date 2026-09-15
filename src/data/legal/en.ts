/** İngilizce hukuki metinler — Türkçe taslaktan çeviri. */

import type { LegalDocs } from "../legal";

const COMPANY = "[Company Legal Name]";

export const en: LegalDocs = {
  privacy: {
    title: "Privacy Policy and Data Protection Notice",
    description:
      "How MyDentist processes your personal and health data, who we share it with, and the rights you have under GDPR and Turkish data protection law.",
    updatedLabel: "Last updated",
    updatedAt: "10 September 2026",
    backToHome: "Back to home",
    draft: true,
    draftNotice:
      "This is a template. Before going live, fill in the bracketed fields and have the text reviewed by a legal advisor.",
    sections: [
      {
        heading: "1. Data controller",
        blocks: [
          `This notice is issued by ${COMPANY} as data controller under the EU General Data Protection Regulation ("GDPR") and Turkish Personal Data Protection Law No. 6698 ("KVKK").`,
          {
            list: [
              `Legal name: ${COMPANY}`,
              "Address: [Full address]",
              "Trade / tax registration number: [Number]",
              "Email: info@mydentist.com",
            ],
          },
        ],
      },
      {
        heading: "2. Personal data we process",
        blocks: [
          "When you complete the contact form on our website or otherwise get in touch, we process the following:",
          {
            list: [
              "Identity data: first name, last name",
              "Contact data: phone number, email address, country",
              "Health data: medical history, reports, images and diagnostic information you share with us in connection with your treatment enquiry",
              "Technical data: IP address, browser and device information, site usage logs",
              "Travel data: passport details, flight and accommodation preferences (only where you ask us to arrange them)",
            ],
          },
          "Health data is a special category of personal data under GDPR Art. 9 and KVKK Art. 6, and is processed only with your explicit consent.",
        ],
      },
      {
        heading: "3. Purposes of processing",
        blocks: [
          {
            list: [
              "Assessing your treatment enquiry and proposing suitable clinics and doctors",
              "Carrying out pre-assessment, pricing and quotation processes",
              "Arranging travel, accommodation, transfer and interpreter services",
              "Providing post-treatment follow-up and consultancy support",
              "Meeting our legal obligations and establishing or defending legal claims",
            ],
          },
        ],
      },
      {
        heading: "4. Legal bases",
        blocks: [
          "We process your personal data on the basis of the performance of a contract (GDPR Art. 6(1)(b)), compliance with a legal obligation (Art. 6(1)(c)) and our legitimate interests (Art. 6(1)(f)).",
          "Your health data is processed solely on the basis of your explicit consent (GDPR Art. 9(2)(a)). You may withdraw your consent at any time; withdrawal does not affect the lawfulness of processing carried out before it.",
        ],
      },
      {
        heading: "5. Sharing and international transfers",
        blocks: [
          "Given the nature of our service, your data is shared, strictly to the extent necessary, with:",
          {
            list: [
              "Partner hospitals, clinics and physicians",
              "Travel agencies, airlines, hotels and transfer providers",
              "Interpreting service providers",
              "Public authorities legally entitled to request information",
              "Our hosting, email and CRM infrastructure providers",
            ],
          },
          "Where data is transferred outside your country, we rely on your explicit consent or put appropriate safeguards in place, such as standard contractual clauses, in line with GDPR Chapter V.",
        ],
      },
      {
        heading: "6. Retention",
        blocks: [
          "We keep your personal data for as long as necessary for the purposes described above and until the statutory limitation periods expire. Once that period ends, the data is deleted, destroyed or anonymised.",
        ],
      },
      {
        heading: "7. Cookies",
        blocks: [
          "We use strictly necessary cookies to maintain your session and remember your language preference. Any analytics or marketing cookies are set only with your consent, and you can block them at any time through your browser settings.",
        ],
      },
      {
        heading: "8. Your rights",
        blocks: [
          "Under GDPR Art. 15-22 and KVKK Art. 11 you have the right to:",
          {
            list: [
              "Be informed whether your data is processed and obtain access to it",
              "Have inaccurate or incomplete data corrected",
              "Request erasure of your data",
              "Request restriction of processing and object to processing",
              "Receive your data in a portable format",
              "Object to decisions based solely on automated processing",
              "Claim compensation for damage caused by unlawful processing",
            ],
          },
        ],
      },
      {
        heading: "9. Security",
        blocks: [
          "We apply administrative and technical safeguards — access control, encryption, secure transport (HTTPS) and regular audits — to protect your data against unauthorised access, loss and disclosure.",
        ],
      },
      {
        heading: "10. Contacting us",
        blocks: [
          `To exercise your rights, write to info@mydentist.com or to the registered address of ${COMPANY}. We respond within 30 days at the latest. If you are not satisfied with our response, you may lodge a complaint with your local supervisory authority or, in Türkiye, with the Personal Data Protection Authority.`,
        ],
      },
      {
        heading: "11. Changes",
        blocks: [
          "We may update this policy. The current version is always published on this page and the date at the top is updated accordingly.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Use",
    description:
      "Terms governing the use of the MyDentist website and our health tourism consultancy services, including medical disclaimers and limitations of liability.",
    updatedLabel: "Last updated",
    updatedAt: "10 September 2026",
    backToHome: "Back to home",
    draft: true,
    draftNotice:
      "This is a template. Before going live, fill in the bracketed fields and have the text reviewed by a legal advisor.",
    sections: [
      {
        heading: "1. Parties and scope",
        blocks: [
          `These terms apply to everyone who visits this website or uses the services operated by ${COMPANY} ("MyDentist", "we"). By using the site you agree to these terms.`,
        ],
      },
      {
        heading: "2. Nature of our service",
        blocks: [
          "MyDentist provides health tourism intermediary and consultancy services. We do not provide medical diagnosis, treatment or surgical procedures.",
          "All medical procedures are performed by partner hospitals, clinics and physicians licensed under the law of the relevant country, under their own responsibility. The patient–physician relationship is established directly between you and the healthcare provider.",
        ],
      },
      {
        heading: "3. Medical disclaimer",
        blocks: [
          "Treatment descriptions, process explanations and similar content on this site are for general information only. They do not constitute medical advice and are not a substitute for examination by a physician.",
          "No treatment outcome is guaranteed. Results vary from person to person and only the physician examining you can make a final assessment. In a medical emergency, please contact emergency services directly.",
        ],
      },
      {
        heading: "4. Your obligations",
        blocks: [
          {
            list: [
              "You are responsible for ensuring the information you provide is accurate, current and complete",
              "For your own safety, you must fully disclose your medical history, medication and allergies",
              "You may not use the site for unlawful purposes, with automated scraping tools, or in a way that disrupts its operation",
              "If you are under 18, you may use our services only with the consent of a parent or guardian",
            ],
          },
        ],
      },
      {
        heading: "5. Quotes, booking and cancellation",
        blocks: [
          "Enquiries submitted through the site do not create a binding booking; they only start an initial consultation. Prices, treatment scope, payment terms and cancellation/refund conditions are set out in a separate service agreement signed with you.",
          "Prices and campaign information shown on the site are indicative and may change due to exchange rates or differences in your treatment plan.",
        ],
      },
      {
        heading: "6. Intellectual property",
        blocks: [
          `All text, images, logos, design and software on this site belong to ${COMPANY} or its licensors. They may not be copied, reproduced or used commercially without written permission.`,
        ],
      },
      {
        heading: "7. Third-party links",
        blocks: [
          "The site may contain links to partner institutions or third parties. We are not responsible for the content, privacy practices or services of those sites.",
        ],
      },
      {
        heading: "8. Limitation of liability",
        blocks: [
          "We do not warrant that the site will operate uninterrupted or error-free. To the extent permitted by law, we are not liable for indirect damages, data loss or loss of profit arising from use of the site.",
          "Medical liability arising from the fault of a partner healthcare institution or other service provider rests with that provider.",
        ],
      },
      {
        heading: "9. Governing law and jurisdiction",
        blocks: [
          "These terms are governed by the laws of the Republic of Türkiye. The courts and enforcement offices of [City] have jurisdiction. Users qualifying as consumers retain their right to apply to consumer arbitration committees and consumer courts.",
        ],
      },
      {
        heading: "10. Changes and contact",
        blocks: [
          "We may update these terms; the current version is published on this page. For questions, contact us at info@mydentist.com.",
        ],
      },
    ],
  },
};
