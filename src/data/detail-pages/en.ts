/** İngilizce alt sayfa içerikleri — Türkçe kaynaktan çeviri. */

import type { DetailContent } from "../detail-pages";

export const en: Record<string, DetailContent> = {
  hair: {
    title: "Hair Transplant",
    tagline: "Natural-looking, permanent results with FUE and DHI techniques",
    metaDescription:
      "Hair transplant techniques, the process, recovery and frequently asked questions. Plan your treatment with MyDentist at accredited clinics.",
    intro: [
      "A hair transplant is a microsurgical procedure in which your own hair follicles are moved to the area affected by hair loss. Because the follicles are taken from a genetically resistant donor area, the result is permanent.",
      "Suitability depends on the degree of hair loss and the density of your donor area. Only the physician examining you can make that assessment; the information below is general guidance.",
    ],
    highlights: [
      { label: "Procedure time", value: "6–8 hours" },
      { label: "Anaesthesia", value: "Local" },
      { label: "Back to daily life", value: "2–3 days" },
      { label: "Final result", value: "12–18 months" },
    ],
    sections: [
      {
        heading: "Techniques we work with",
        list: [
          "FUE (Follicular Unit Extraction) — follicles are extracted individually; the most common scar-free method",
          "DHI (Direct Hair Implantation) — channel opening and placement happen in one step, allowing dense placement",
          "Sapphire FUE — sapphire-tipped tools open smaller channels, which can shorten recovery",
        ],
      },
      {
        heading: "How the process works",
        paragraphs: [
          "A pre-assessment is made from your photographs and hair loss history, and suitable clinic and physician options are shared with you. On arrival you have a physical examination and your hairline is designed.",
          "The procedure takes place the same day or the following day. The first wash and check-up is carried out the next day, together with aftercare instructions.",
        ],
      },
      {
        heading: "Recovery and aftercare",
        paragraphs: [
          "Crusting and mild redness in the recipient area are normal in the first days. Shedding of the transplanted hairs within the first 2–4 weeks (shock loss) is an expected stage; the follicles stay in place and new hair begins to grow.",
          "Follow-up consultations continue online after you return home.",
        ],
      },
    ],
    faq: [
      {
        question: "Is a hair transplant painful?",
        answer:
          "The procedure is performed under local anaesthesia, so you do not feel pain during it. Mild tenderness afterwards is managed with the pain relief your physician recommends.",
      },
      {
        question: "How many grafts will I need?",
        answer:
          "The number of grafts depends on the degree of hair loss and the density you are aiming for. An exact figure can only be set by the physician after an examination.",
      },
      {
        question: "When will I see results?",
        answer:
          "New hair usually starts to appear from the third or fourth month. The final appearance settles within 12–18 months.",
      },
    ],
  },
  dental: {
    title: "Dental Treatment",
    tagline: "Implants, smile design and aesthetic dentistry",
    metaDescription:
      "Dental implants, zirconium crowns, veneers and smile design. Treatment planning and process information at accredited clinics.",
    intro: [
      "Dental treatment covers a wide range of services, from implants to aesthetic smile design. Which treatment suits you is determined after an oral examination and radiological imaging.",
      "Every treatment plan is individual; the number of teeth, bone structure and general health directly affect it.",
    ],
    highlights: [
      { label: "Treatment time", value: "3–7 days" },
      { label: "Anaesthesia", value: "Local" },
      { label: "Recommended stay", value: "5–7 days" },
      { label: "Implant integration", value: "3–6 months" },
    ],
    sections: [
      {
        heading: "Treatments we offer",
        list: [
          "Dental implants — a permanent solution for missing teeth",
          "Zirconium and porcelain crowns — colour and shape correction",
          "Veneers — aesthetic front surfaces with minimal reduction",
          "Smile design — holistic planning that suits your facial features",
          "Teeth whitening and general dental health services",
        ],
      },
      {
        heading: "How many visits are needed?",
        paragraphs: [
          "Crowns and veneers are usually completed in a single visit over a 5–7 day programme.",
          "Implant treatment has two stages: the implant is placed on the first visit, 3–6 months are allowed for bone integration, and the restoration is completed on the second visit. In some cases a temporary prosthesis can be fitted on the first visit.",
        ],
      },
      {
        heading: "After treatment",
        paragraphs: [
          "Sensitivity and mild swelling are possible in the first days. Following your physician's dietary and oral care instructions speeds up recovery.",
          "Check-ups continue online after you return home, with referral to our partner clinics where needed.",
        ],
      },
    ],
    faq: [
      {
        question: "Is a single trip enough for implants?",
        answer:
          "Most cases require two visits. If your bone structure allows, protocols that can be completed in one trip may be an option — your physician will assess this.",
      },
      {
        question: "Is the treatment guaranteed?",
        answer:
          "The guarantee period depends on the materials used and the clinic. The conditions are shared with you in writing before treatment.",
      },
      {
        question: "Will the treatment hurt?",
        answer:
          "Procedures are carried out under local anaesthesia. Any sensitivity afterwards is managed with the medication recommended to you.",
      },
    ],
  },
  face: {
    title: "Facial Aesthetics",
    tagline: "Surgical and non-surgical facial rejuvenation",
    metaDescription:
      "Botox, fillers, face lifts and rhinoplasty. Facial aesthetic procedures, recovery and frequently asked questions.",
    intro: [
      "Facial aesthetics covers both surgical and non-surgical methods. The aim is a more rested, youthful appearance while preserving the natural balance of your features.",
      "Which procedure suits you depends on your skin, age and expectations. The final decision is made together with the physician examining you.",
    ],
    highlights: [
      { label: "Procedure time", value: "30 min – 4 hours" },
      { label: "Anaesthesia", value: "Local or general" },
      { label: "Social recovery", value: "3–14 days" },
      { label: "Longevity", value: "Varies by procedure" },
    ],
    sections: [
      {
        heading: "Procedures",
        list: [
          "Botox — softening expression lines",
          "Fillers — restoring lost volume and refining contours",
          "Face lift — surgical correction of sagging",
          "Rhinoplasty — adjusting both form and function",
          "Thread lifts and skin rejuvenation treatments",
        ],
      },
      {
        heading: "Surgical or non-surgical?",
        paragraphs: [
          "Treatments such as Botox and fillers are quick, injection-based, and you can usually return to daily life the same day. Their effects are temporary and need repeating at intervals.",
          "Surgical procedures such as face lifts and rhinoplasty take longer, require an operating theatre and involve a longer recovery — but their results are long-lasting.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "After non-surgical treatments, mild redness and bruising settle within a few days. After surgery, swelling and bruising can last one to two weeks.",
          "Sun protection, using the products your physician recommends and attending follow-up appointments all directly affect the result.",
        ],
      },
    ],
    faq: [
      {
        question: "Will the results look natural?",
        answer:
          "A natural result comes from planning the dose and technique around your own facial structure. Working with an experienced physician is decisive here.",
      },
      {
        question: "How many days should I stay?",
        answer:
          "One to two days is enough for non-surgical treatments. For surgery, a stay of 7–10 days is recommended to allow for check-ups.",
      },
      {
        question: "Can several procedures be combined?",
        answer:
          "Some procedures can be combined. Your physician decides this by assessing your general health and the total duration of the procedures.",
      },
    ],
  },
  ortho: {
    title: "Orthopedics",
    tagline: "Knee and hip replacement, joint and sports injury surgery",
    metaDescription:
      "Knee replacement, hip replacement and arthroscopic joint surgery. Treatment process, hospital stay and rehabilitation information.",
    intro: [
      "Orthopedic treatment comes into play when joint pain and restricted movement reduce quality of life. Surgery is usually considered when options such as medication and physiotherapy are no longer enough.",
      "The treatment decision is made by assessing X-ray and MRI images, pain levels and general health together.",
    ],
    highlights: [
      { label: "Hospital stay", value: "3–5 days" },
      { label: "Anaesthesia", value: "General or spinal" },
      { label: "Total stay", value: "10–14 days" },
      { label: "Physiotherapy", value: "4–6 weeks" },
    ],
    sections: [
      {
        heading: "Areas we cover",
        list: [
          "Total knee replacement — resurfacing the joint in advanced arthritis",
          "Total hip replacement — renewing the hip joint",
          "Arthroscopy — keyhole repair of the meniscus and ligaments",
          "Shoulder and elbow surgery",
          "Sports injuries and ligament reconstruction",
        ],
      },
      {
        heading: "How the process works",
        paragraphs: [
          "The pre-assessment starts when you share your existing imaging and reports. Suitable hospital and surgeon options are then presented.",
          "On arrival, pre-operative tests are carried out and the surgery and hospital stay are planned. Physiotherapy begins early after discharge.",
        ],
      },
      {
        heading: "Rehabilitation",
        paragraphs: [
          "In joint replacement surgery, physiotherapy is the most decisive stage of recovery. The first weeks are supported with walking aids and the range of motion is increased gradually.",
          "Your exercise programme is shared with you after you return home and progress is monitored through online follow-ups.",
        ],
      },
    ],
    faq: [
      {
        question: "When can I walk after surgery?",
        answer:
          "In joint replacement, most patients are helped to their feet with support within the first 24–48 hours. The time to independent walking varies by person and procedure.",
      },
      {
        question: "How long before I can fly?",
        answer:
          "Clearance to fly is given by your surgeon. After joint replacement a wait of 10–14 days is usually advised, which matters for clot risk.",
      },
      {
        question: "How long does a joint replacement last?",
        answer:
          "Material, age and activity level all affect longevity. Your surgeon will assess the expected lifespan for your own case.",
      },
    ],
  },
  turkiye: {
    title: "Türkiye",
    tagline: "Accredited healthcare institutions in Istanbul, Antalya and Bodrum",
    metaDescription:
      "Health tourism in Türkiye: accredited hospitals, cities, travel and practical information. Plan treatment in Istanbul, Antalya and Bodrum.",
    intro: [
      "Türkiye is one of the centres of health tourism, with a large number of internationally accredited hospitals, experienced physicians and strong airline connections.",
      "Alongside treatment, accommodation, transfers and interpreting are organised from a single point.",
    ],
    highlights: [
      { label: "Main cities", value: "Istanbul, Antalya, Bodrum" },
      { label: "Language support", value: "Turkish, English, German, Arabic" },
      { label: "Currency", value: "Turkish lira (TRY)" },
      { label: "Visa", value: "Depends on nationality" },
    ],
    sections: [
      {
        heading: "Cities",
        list: [
          "Istanbul — the widest hospital and clinic network, options in every speciality, dense flight connections",
          "Antalya — a coastal city for those combining treatment with a period of rest",
          "Bodrum — a preferred destination for a quiet recovery",
        ],
      },
      {
        heading: "Why Türkiye?",
        paragraphs: [
          "A large number of internationally accredited hospitals offer high case experience in many fields, particularly hair transplants and dental treatment.",
          "Short flight times from Europe and the Middle East make it easier to fit the treatment process into a single trip.",
        ],
      },
      {
        heading: "Practical information",
        paragraphs: [
          "Visa requirements depend on your nationality; many countries have electronic visas or visa-free entry. We check the current situation with you before travel.",
          "Airport pick-up, hotel–clinic transfers and interpreter support are planned as part of your package.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I bring a companion?",
        answer:
          "Yes. Accommodation and transfer arrangements for your companion can be made within the same programme.",
      },
      {
        question: "Where will I stay during treatment?",
        answer:
          "Accommodation is arranged in partner hotels close to the clinic. Just share your preferences at the start.",
      },
      {
        question: "Will language be a problem?",
        answer:
          "Interpreter support is provided throughout treatment, so examinations and explanations reach you in your own language.",
      },
    ],
  },
  almanya: {
    title: "Germany",
    tagline: "Technologically advanced healthcare institutions in Frankfurt",
    metaDescription:
      "Health tourism in Germany: advanced treatment options with Frankfurt clinics, travel and practical information.",
    intro: [
      "Germany is a preferred destination for complex cases, thanks to advanced technology and strict quality standards.",
      "Frankfurt's central location and strong airline connections make treatment planning straightforward.",
    ],
    highlights: [
      { label: "Main city", value: "Frankfurt" },
      { label: "Language support", value: "German, English, Turkish" },
      { label: "Currency", value: "Euro (EUR)" },
      { label: "Visa", value: "Schengen — depends on nationality" },
    ],
    sections: [
      {
        heading: "Key specialities",
        list: [
          "Advanced oncological treatment and second opinion assessments",
          "Cardiology and cardiac surgery",
          "Neurology and spinal surgery",
          "Orthopedics and robotic surgery",
        ],
      },
      {
        heading: "Why Germany?",
        paragraphs: [
          "A tightly regulated health system and a broad network of specialists make it a strong option, particularly for complex, multidisciplinary cases.",
          "For patients seeking a second opinion, a remote assessment can be started from your existing reports.",
        ],
      },
      {
        heading: "Practical information",
        paragraphs: [
          "Germany is in the Schengen area; visa requirements depend on your nationality and additional documents may be requested for medical travel. We provide the invitation and appointment documents needed for your application.",
          "Accommodation, transfers and interpreting are planned together with your treatment programme.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you help with the visa process?",
        answer:
          "Yes. We prepare and send you the documents requested in the application, such as appointment confirmation and treatment plan. You submit the application to the relevant consulate yourself.",
      },
      {
        question: "Do my reports need translating into German?",
        answer:
          "A German or English translation is usually requested. We guide you through the translation process.",
      },
      {
        question: "Is a remote second opinion possible?",
        answer:
          "Many clinics offer a remote assessment based on existing imaging and reports. Whether travel is needed becomes clear after that assessment.",
      },
    ],
  },
  portekiz: {
    title: "Portugal",
    tagline: "Treatment and recovery in Lisbon and Porto",
    metaDescription:
      "Health tourism in Portugal: clinics in Lisbon and Porto, travel, climate and practical information.",
    intro: [
      "With its mild climate and calm cities, Portugal is a comfortable destination for the recovery period after treatment.",
      "Lisbon and Porto are reachable by direct flights from many points across Europe.",
    ],
    highlights: [
      { label: "Main cities", value: "Lisbon, Porto" },
      { label: "Language support", value: "Portuguese, English" },
      { label: "Currency", value: "Euro (EUR)" },
      { label: "Visa", value: "Schengen — depends on nationality" },
    ],
    sections: [
      {
        heading: "Cities",
        list: [
          "Lisbon — a broad clinic network and dense flight connections",
          "Porto — treatment and recovery in a quieter setting",
        ],
      },
      {
        heading: "Why Portugal?",
        paragraphs: [
          "The mild climate offers a comfortable rest period after procedures that need a longer recovery.",
          "Healthcare infrastructure at EU standards and the widespread use of English both make the process easier.",
        ],
      },
      {
        heading: "Practical information",
        paragraphs: [
          "Portugal is in the Schengen area; visa requirements depend on your nationality. We support you in preparing the necessary documents.",
          "We can arrange accommodation in the city centre or by the coast, according to your treatment plan.",
        ],
      },
    ],
    faq: [
      {
        question: "How long should I stay for recovery?",
        answer:
          "The duration depends on the procedure. The recommended length of stay is shared clearly when your treatment plan is prepared.",
      },
      {
        question: "Can I travel after treatment?",
        answer:
          "Clearance to fly is given by your physician. No return ticket is planned before that clearance.",
      },
      {
        question: "Is English enough?",
        answer:
          "English is widely spoken in Portugal. Interpreter support is also provided throughout treatment.",
      },
    ],
  },
};
