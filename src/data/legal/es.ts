/** İspanyolca hukuki metinler — Türkçe taslaktan çeviri. AVUKAT ONAYI ŞART. */

import type { LegalDocs } from "../legal";

const COMPANY = "[Razón social]";

export const es: LegalDocs = {
  privacy: {
    title: "Política de privacidad e información sobre el tratamiento de datos",
    description:
      "Cómo trata MyDentist sus datos personales y de salud, con quién los compartimos y qué derechos le asisten conforme al RGPD y a la legislación turca de protección de datos.",
    updatedLabel: "Última actualización",
    updatedAt: "10 de septiembre de 2026",
    backToHome: "Volver al inicio",
    draft: true,
    draftNotice:
      "Este es un texto de plantilla. Antes de publicarlo, complete los campos entre corchetes y haga que lo revise un asesor jurídico.",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        blocks: [
          `Esta información la emite ${COMPANY} en calidad de responsable del tratamiento conforme al Reglamento General de Protección de Datos («RGPD») y a la Ley turca n.º 6698 de Protección de Datos Personales («KVKK»).`,
          {
            list: [
              `Razón social: ${COMPANY}`,
              "Dirección: [Dirección completa]",
              "Número de registro mercantil / fiscal: [Número]",
              "Correo electrónico: info@mydentist.com",
            ],
          },
        ],
      },
      {
        heading: "2. Datos personales que tratamos",
        blocks: [
          "Cuando rellena el formulario de contacto de nuestro sitio web o se pone en contacto con nosotros por otra vía, tratamos lo siguiente:",
          {
            list: [
              "Datos identificativos: nombre y apellidos",
              "Datos de contacto: número de teléfono, correo electrónico, país",
              "Datos de salud: historial médico, informes, imágenes e información diagnóstica que nos facilite en relación con su consulta de tratamiento",
              "Datos técnicos: dirección IP, información del navegador y del dispositivo, registros de uso del sitio",
              "Datos de viaje: datos del pasaporte, preferencias de vuelo y alojamiento (solo cuando nos encarga su organización)",
            ],
          },
          "Los datos de salud son una categoría especial de datos personales conforme al art. 9 del RGPD y al art. 6 de la KVKK, y se tratan únicamente con su consentimiento explícito.",
        ],
      },
      {
        heading: "3. Finalidades del tratamiento",
        blocks: [
          {
            list: [
              "Evaluar su consulta de tratamiento y proponerle clínicas y médicos adecuados",
              "Llevar a cabo los procesos de evaluación previa, fijación de precios y presupuesto",
              "Organizar el viaje, el alojamiento, los traslados y los servicios de interpretación",
              "Prestar seguimiento y apoyo de asesoramiento tras el tratamiento",
              "Cumplir nuestras obligaciones legales y formular o defender reclamaciones jurídicas",
            ],
          },
        ],
      },
      {
        heading: "4. Bases jurídicas",
        blocks: [
          "Tratamos sus datos personales sobre la base de la ejecución de un contrato (art. 6.1.b del RGPD), del cumplimiento de una obligación legal (art. 6.1.c) y de nuestros intereses legítimos (art. 6.1.f).",
          "Sus datos de salud se tratan exclusivamente sobre la base de su consentimiento explícito (art. 9.2.a del RGPD). Puede retirar su consentimiento en cualquier momento; la retirada no afecta a la licitud del tratamiento realizado con anterioridad.",
        ],
      },
      {
        heading: "5. Comunicación de datos y transferencias internacionales",
        blocks: [
          "Dada la naturaleza de nuestro servicio, sus datos se comparten, estrictamente en la medida necesaria, con:",
          {
            list: [
              "Hospitales, clínicas y médicos asociados",
              "Agencias de viajes, aerolíneas, hoteles y proveedores de traslados",
              "Proveedores de servicios de interpretación",
              "Autoridades públicas legalmente facultadas para solicitar información",
              "Nuestros proveedores de alojamiento web, correo electrónico y CRM",
            ],
          },
          "Cuando los datos se transfieren fuera de su país, nos basamos en su consentimiento explícito o adoptamos garantías adecuadas, como las cláusulas contractuales tipo, conforme al capítulo V del RGPD.",
        ],
      },
      {
        heading: "6. Plazo de conservación",
        blocks: [
          "Conservamos sus datos personales durante el tiempo necesario para las finalidades descritas y hasta que expiren los plazos legales de prescripción. Transcurrido ese periodo, los datos se suprimen, destruyen o anonimizan.",
        ],
      },
      {
        heading: "7. Cookies",
        blocks: [
          "Utilizamos cookies estrictamente necesarias para mantener su sesión y recordar su preferencia de idioma. Las cookies analíticas o de marketing solo se instalan con su consentimiento y puede bloquearlas en cualquier momento desde la configuración de su navegador.",
        ],
      },
      {
        heading: "8. Sus derechos",
        blocks: [
          "Conforme a los arts. 15 a 22 del RGPD y al art. 11 de la KVKK, usted tiene derecho a:",
          {
            list: [
              "Saber si sus datos están siendo tratados y acceder a ellos",
              "Obtener la rectificación de datos inexactos o incompletos",
              "Solicitar la supresión de sus datos",
              "Solicitar la limitación del tratamiento y oponerse a él",
              "Recibir sus datos en un formato portátil",
              "Oponerse a decisiones basadas únicamente en el tratamiento automatizado",
              "Reclamar una indemnización por los daños derivados de un tratamiento ilícito",
            ],
          },
        ],
      },
      {
        heading: "9. Seguridad",
        blocks: [
          "Aplicamos medidas organizativas y técnicas —control de accesos, cifrado, transmisión segura (HTTPS) y auditorías periódicas— para proteger sus datos frente a accesos no autorizados, pérdidas y divulgaciones.",
        ],
      },
      {
        heading: "10. Cómo contactarnos",
        blocks: [
          `Para ejercer sus derechos, escriba a info@mydentist.com o a la dirección social de ${COMPANY}. Respondemos en un plazo máximo de 30 días. Si no queda satisfecho con nuestra respuesta, puede presentar una reclamación ante la autoridad de control de su país o, en Turquía, ante la Autoridad de Protección de Datos Personales.`,
        ],
      },
      {
        heading: "11. Cambios",
        blocks: [
          "Podemos actualizar esta política. La versión vigente se publica siempre en esta página y la fecha que figura arriba se actualiza en consecuencia.",
        ],
      },
    ],
  },

  terms: {
    title: "Condiciones de uso",
    description:
      "Condiciones que rigen el uso del sitio web de MyDentist y de nuestros servicios de asesoramiento en turismo de salud, incluidas las advertencias médicas y las limitaciones de responsabilidad.",
    updatedLabel: "Última actualización",
    updatedAt: "10 de septiembre de 2026",
    backToHome: "Volver al inicio",
    draft: true,
    draftNotice:
      "Este es un texto de plantilla. Antes de publicarlo, complete los campos entre corchetes y haga que lo revise un asesor jurídico.",
    sections: [
      {
        heading: "1. Partes y ámbito de aplicación",
        blocks: [
          `Estas condiciones se aplican a toda persona que visite este sitio web o utilice los servicios prestados por ${COMPANY} («MyDentist», «nosotros»). Al usar el sitio, usted acepta estas condiciones.`,
        ],
      },
      {
        heading: "2. Naturaleza de nuestro servicio",
        blocks: [
          "MyDentist presta servicios de intermediación y asesoramiento en turismo de salud. No realizamos diagnósticos médicos, tratamientos ni intervenciones quirúrgicas.",
          "Todos los procedimientos médicos los llevan a cabo hospitales, clínicas y médicos asociados habilitados conforme a la legislación del país correspondiente y bajo su propia responsabilidad. La relación médico-paciente se establece directamente entre usted y el prestador sanitario.",
        ],
      },
      {
        heading: "3. Advertencia médica",
        blocks: [
          "Las descripciones de tratamientos, las explicaciones del proceso y los contenidos similares de este sitio tienen carácter meramente informativo general. No constituyen asesoramiento médico ni sustituyen a un examen por parte de un médico.",
          "No se garantiza ningún resultado del tratamiento. Los resultados varían de una persona a otra y solo el médico que le examine puede realizar una valoración definitiva. En caso de urgencia médica, contacte directamente con los servicios de emergencia.",
        ],
      },
      {
        heading: "4. Sus obligaciones",
        blocks: [
          {
            list: [
              "Usted es responsable de que la información que facilite sea exacta, actual y completa",
              "Por su propia seguridad, debe revelar íntegramente su historial médico, su medicación y sus alergias",
              "No puede utilizar el sitio con fines ilícitos, mediante herramientas de extracción automatizada ni de forma que altere su funcionamiento",
              "Si es menor de 18 años, solo puede utilizar nuestros servicios con el consentimiento de un progenitor o tutor",
            ],
          },
        ],
      },
      {
        heading: "5. Presupuestos, reserva y cancelación",
        blocks: [
          "Las consultas enviadas a través del sitio no constituyen una reserva vinculante; únicamente inician una consulta preliminar. Los precios, el alcance del tratamiento, las condiciones de pago y las condiciones de cancelación y reembolso se recogen en un contrato de servicios independiente firmado con usted.",
          "Los precios y la información promocional mostrados en el sitio son orientativos y pueden variar por el tipo de cambio o por diferencias en su plan de tratamiento.",
        ],
      },
      {
        heading: "6. Propiedad intelectual",
        blocks: [
          `Todos los textos, imágenes, logotipos, elementos de diseño y software de este sitio pertenecen a ${COMPANY} o a sus licenciantes. No pueden copiarse, reproducirse ni utilizarse con fines comerciales sin autorización por escrito.`,
        ],
      },
      {
        heading: "7. Enlaces a terceros",
        blocks: [
          "El sitio puede contener enlaces a instituciones asociadas o a terceros. No nos hacemos responsables del contenido, las prácticas de privacidad ni los servicios de esos sitios.",
        ],
      },
      {
        heading: "8. Limitación de responsabilidad",
        blocks: [
          "No garantizamos que el sitio funcione de forma ininterrumpida ni libre de errores. En la medida permitida por la ley, no respondemos de daños indirectos, pérdida de datos ni lucro cesante derivados del uso del sitio.",
          "La responsabilidad médica derivada de la culpa de una institución sanitaria asociada o de otro prestador corresponde a dicho prestador.",
        ],
      },
      {
        heading: "9. Ley aplicable y jurisdicción",
        blocks: [
          "Estas condiciones se rigen por la legislación de la República de Turquía. Son competentes los tribunales y oficinas de ejecución de [Ciudad]. Los usuarios con condición de consumidor conservan su derecho a acudir a las juntas arbitrales de consumo y a los tribunales de consumo.",
        ],
      },
      {
        heading: "10. Cambios y contacto",
        blocks: [
          "Podemos actualizar estas condiciones; la versión vigente se publica en esta página. Para cualquier consulta, escríbanos a info@mydentist.com.",
        ],
      },
    ],
  },
};
