/** Fransızca hukuki metinler — Türkçe taslaktan çeviri. AVUKAT ONAYI ŞART. */

import type { LegalDocs } from "../legal";

const COMPANY = "[Raison sociale]";

export const fr: LegalDocs = {
  privacy: {
    title: "Politique de confidentialité et information sur le traitement des données",
    description:
      "Comment MyDentist traite vos données personnelles et vos données de santé, avec qui nous les partageons et quels sont vos droits au titre du RGPD et du droit turc de la protection des données.",
    updatedLabel: "Dernière mise à jour",
    updatedAt: "10 septembre 2026",
    backToHome: "Retour à l'accueil",
    draft: true,
    draftNotice:
      "Ceci est un modèle. Avant la mise en ligne, complétez les champs entre crochets et faites relire le texte par un conseil juridique.",
    sections: [
      {
        heading: "1. Responsable du traitement",
        blocks: [
          `La présente information est délivrée par ${COMPANY} en qualité de responsable du traitement au sens du Règlement général sur la protection des données (« RGPD ») et de la loi turque n° 6698 sur la protection des données personnelles (« KVKK »).`,
          {
            list: [
              `Raison sociale : ${COMPANY}`,
              "Adresse : [Adresse complète]",
              "Numéro d'immatriculation / fiscal : [Numéro]",
              "E-mail : info@mydentist.com",
            ],
          },
        ],
      },
      {
        heading: "2. Données personnelles traitées",
        blocks: [
          "Lorsque vous remplissez le formulaire de contact de notre site ou nous contactez par un autre moyen, nous traitons les données suivantes :",
          {
            list: [
              "Données d'identité : nom, prénom",
              "Données de contact : numéro de téléphone, adresse e-mail, pays",
              "Données de santé : antécédents médicaux, comptes rendus, images et informations diagnostiques que vous nous transmettez dans le cadre de votre demande de traitement",
              "Données techniques : adresse IP, informations sur le navigateur et l'appareil, journaux d'utilisation du site",
              "Données de voyage : informations de passeport, préférences de vol et d'hébergement (uniquement si vous nous en confiez l'organisation)",
            ],
          },
          "Les données de santé constituent une catégorie particulière de données personnelles au sens de l'art. 9 du RGPD et de l'art. 6 de la KVKK, et ne sont traitées qu'avec votre consentement explicite.",
        ],
      },
      {
        heading: "3. Finalités du traitement",
        blocks: [
          {
            list: [
              "Évaluer votre demande de traitement et vous proposer des cliniques et des médecins adaptés",
              "Mener les démarches de pré-évaluation, de tarification et de devis",
              "Organiser le voyage, l'hébergement, les transferts et les services d'interprétariat",
              "Assurer le suivi et l'accompagnement après le traitement",
              "Respecter nos obligations légales et faire valoir ou défendre des droits en justice",
            ],
          },
        ],
      },
      {
        heading: "4. Bases légales",
        blocks: [
          "Nous traitons vos données personnelles sur le fondement de l'exécution d'un contrat (art. 6, § 1, b du RGPD), du respect d'une obligation légale (art. 6, § 1, c) et de nos intérêts légitimes (art. 6, § 1, f).",
          "Vos données de santé sont traitées uniquement sur le fondement de votre consentement explicite (art. 9, § 2, a du RGPD). Vous pouvez retirer votre consentement à tout moment ; ce retrait n'affecte pas la licéité du traitement effectué auparavant.",
        ],
      },
      {
        heading: "5. Partage et transferts internationaux",
        blocks: [
          "Compte tenu de la nature de notre service, vos données sont partagées, strictement dans la mesure nécessaire, avec :",
          {
            list: [
              "Les hôpitaux, cliniques et médecins partenaires",
              "Les agences de voyage, compagnies aériennes, hôtels et prestataires de transfert",
              "Les prestataires de services d'interprétariat",
              "Les autorités publiques légalement habilitées à demander des informations",
              "Nos prestataires d'hébergement, de messagerie et de CRM",
            ],
          },
          "Lorsque des données sont transférées hors de votre pays, nous nous fondons sur votre consentement explicite ou mettons en place des garanties appropriées, telles que les clauses contractuelles types, conformément au chapitre V du RGPD.",
        ],
      },
      {
        heading: "6. Durée de conservation",
        blocks: [
          "Nous conservons vos données personnelles aussi longtemps que nécessaire aux finalités décrites ci-dessus et jusqu'à l'expiration des délais de prescription légaux. À l'issue de cette période, les données sont supprimées, détruites ou anonymisées.",
        ],
      },
      {
        heading: "7. Cookies",
        blocks: [
          "Nous utilisons des cookies strictement nécessaires pour maintenir votre session et mémoriser votre préférence de langue. Les cookies de mesure d'audience ou de marketing ne sont déposés qu'avec votre consentement et vous pouvez les bloquer à tout moment via les réglages de votre navigateur.",
        ],
      },
      {
        heading: "8. Vos droits",
        blocks: [
          "En vertu des art. 15 à 22 du RGPD et de l'art. 11 de la KVKK, vous avez le droit de :",
          {
            list: [
              "Savoir si vos données sont traitées et y accéder",
              "Faire rectifier des données inexactes ou incomplètes",
              "Demander l'effacement de vos données",
              "Demander la limitation du traitement et vous y opposer",
              "Recevoir vos données dans un format portable",
              "Vous opposer à des décisions fondées exclusivement sur un traitement automatisé",
              "Demander réparation du préjudice causé par un traitement illicite",
            ],
          },
        ],
      },
      {
        heading: "9. Sécurité",
        blocks: [
          "Nous appliquons des mesures organisationnelles et techniques — contrôle des accès, chiffrement, transport sécurisé (HTTPS) et audits réguliers — afin de protéger vos données contre tout accès non autorisé, toute perte et toute divulgation.",
        ],
      },
      {
        heading: "10. Nous contacter",
        blocks: [
          `Pour exercer vos droits, écrivez à info@mydentist.com ou à l'adresse du siège de ${COMPANY}. Nous répondons dans un délai maximal de 30 jours. Si notre réponse ne vous satisfait pas, vous pouvez saisir l'autorité de contrôle de votre pays ou, en Turquie, l'Autorité de protection des données personnelles.`,
        ],
      },
      {
        heading: "11. Modifications",
        blocks: [
          "Nous pouvons mettre à jour la présente politique. La version en vigueur est toujours publiée sur cette page et la date figurant en haut est actualisée en conséquence.",
        ],
      },
    ],
  },

  terms: {
    title: "Conditions d'utilisation",
    description:
      "Conditions régissant l'utilisation du site MyDentist et de nos services de conseil en tourisme médical, y compris les avertissements médicaux et les limitations de responsabilité.",
    updatedLabel: "Dernière mise à jour",
    updatedAt: "10 septembre 2026",
    backToHome: "Retour à l'accueil",
    draft: true,
    draftNotice:
      "Ceci est un modèle. Avant la mise en ligne, complétez les champs entre crochets et faites relire le texte par un conseil juridique.",
    sections: [
      {
        heading: "1. Parties et champ d'application",
        blocks: [
          `Les présentes conditions s'appliquent à toute personne qui visite ce site ou utilise les services exploités par ${COMPANY} (« MyDentist », « nous »). En utilisant le site, vous acceptez ces conditions.`,
        ],
      },
      {
        heading: "2. Nature de notre service",
        blocks: [
          "MyDentist fournit des services d'intermédiation et de conseil en tourisme médical. Nous ne réalisons ni diagnostic médical, ni traitement, ni acte chirurgical.",
          "Tous les actes médicaux sont réalisés par des hôpitaux, cliniques et médecins partenaires agréés selon le droit du pays concerné, sous leur propre responsabilité. La relation patient–médecin s'établit directement entre vous et le prestataire de soins.",
        ],
      },
      {
        heading: "3. Avertissement médical",
        blocks: [
          "Les descriptions de traitements, les explications de parcours et les contenus similaires figurant sur ce site sont fournis à titre d'information générale. Ils ne constituent pas un avis médical et ne remplacent pas un examen par un médecin.",
          "Aucun résultat de traitement n'est garanti. Les résultats varient d'une personne à l'autre et seul le médecin qui vous examine peut établir une évaluation définitive. En cas d'urgence médicale, contactez directement les services d'urgence.",
        ],
      },
      {
        heading: "4. Vos obligations",
        blocks: [
          {
            list: [
              "Il vous appartient de veiller à ce que les informations que vous fournissez soient exactes, à jour et complètes",
              "Pour votre propre sécurité, vous devez divulguer intégralement vos antécédents médicaux, vos traitements en cours et vos allergies",
              "Vous ne pouvez pas utiliser le site à des fins illicites, au moyen d'outils d'extraction automatisée, ni d'une manière qui en perturbe le fonctionnement",
              "Si vous avez moins de 18 ans, vous ne pouvez utiliser nos services qu'avec le consentement d'un parent ou d'un tuteur",
            ],
          },
        ],
      },
      {
        heading: "5. Devis, réservation et annulation",
        blocks: [
          "Les demandes transmises via le site ne constituent pas une réservation ferme ; elles ouvrent seulement une consultation initiale. Les prix, l'étendue du traitement, les modalités de paiement et les conditions d'annulation et de remboursement sont définis dans un contrat de services distinct signé avec vous.",
          "Les prix et informations promotionnelles affichés sur le site sont indicatifs et peuvent évoluer en fonction des taux de change ou des particularités de votre plan de traitement.",
        ],
      },
      {
        heading: "6. Propriété intellectuelle",
        blocks: [
          `L'ensemble des textes, images, logos, éléments de design et logiciels de ce site appartient à ${COMPANY} ou à ses concédants. Ils ne peuvent être copiés, reproduits ni exploités commercialement sans autorisation écrite.`,
        ],
      },
      {
        heading: "7. Liens vers des tiers",
        blocks: [
          "Le site peut contenir des liens vers des établissements partenaires ou des tiers. Nous ne sommes pas responsables du contenu, des pratiques de confidentialité ni des services de ces sites.",
        ],
      },
      {
        heading: "8. Limitation de responsabilité",
        blocks: [
          "Nous ne garantissons pas que le site fonctionnera sans interruption ni erreur. Dans les limites autorisées par la loi, nous ne sommes pas responsables des dommages indirects, des pertes de données ou des pertes de bénéfices résultant de l'utilisation du site.",
          "La responsabilité médicale résultant d'une faute d'un établissement de santé partenaire ou d'un autre prestataire incombe à ce prestataire.",
        ],
      },
      {
        heading: "9. Droit applicable et juridiction compétente",
        blocks: [
          "Les présentes conditions sont régies par le droit de la République de Turquie. Les tribunaux et bureaux d'exécution de [Ville] sont compétents. Les utilisateurs ayant la qualité de consommateur conservent leur droit de saisir les commissions d'arbitrage et les tribunaux de la consommation.",
        ],
      },
      {
        heading: "10. Modifications et contact",
        blocks: [
          "Nous pouvons mettre à jour ces conditions ; la version en vigueur est publiée sur cette page. Pour toute question, écrivez-nous à info@mydentist.com.",
        ],
      },
    ],
  },
};
