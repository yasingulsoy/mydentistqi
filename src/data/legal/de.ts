/** Almanca hukuki metinler — Türkçe taslaktan çeviri. AVUKAT ONAYI ŞART. */

import type { LegalDocs } from "../legal";

const COMPANY = "[Firmenname]";

export const de: LegalDocs = {
  privacy: {
    title: "Datenschutzerklärung und Informationen zur Datenverarbeitung",
    description:
      "Wie MyDentist Ihre personenbezogenen Daten und Gesundheitsdaten verarbeitet, an wen wir sie weitergeben und welche Rechte Ihnen nach DSGVO und türkischem Datenschutzrecht zustehen.",
    updatedLabel: "Zuletzt aktualisiert",
    updatedAt: "10. September 2026",
    backToHome: "Zurück zur Startseite",
    draft: true,
    draftNotice:
      "Dies ist eine Vorlage. Füllen Sie vor dem Livegang die Felder in eckigen Klammern aus und lassen Sie den Text von einem Rechtsberater prüfen.",
    sections: [
      {
        heading: "1. Verantwortlicher",
        blocks: [
          `Diese Erklärung wird von ${COMPANY} als Verantwortlicher im Sinne der EU-Datenschutz-Grundverordnung („DSGVO“) und des türkischen Datenschutzgesetzes Nr. 6698 („KVKK“) herausgegeben.`,
          {
            list: [
              `Firmenname: ${COMPANY}`,
              "Anschrift: [Vollständige Anschrift]",
              "Handelsregister-/Steuernummer: [Nummer]",
              "E-Mail: info@mydentist.com",
            ],
          },
        ],
      },
      {
        heading: "2. Welche personenbezogenen Daten wir verarbeiten",
        blocks: [
          "Wenn Sie das Kontaktformular auf unserer Website ausfüllen oder anderweitig Kontakt aufnehmen, verarbeiten wir Folgendes:",
          {
            list: [
              "Identitätsdaten: Vorname, Nachname",
              "Kontaktdaten: Telefonnummer, E-Mail-Adresse, Land",
              "Gesundheitsdaten: Krankengeschichte, Befunde, Bilder und diagnostische Angaben, die Sie uns im Zusammenhang mit Ihrer Behandlungsanfrage übermitteln",
              "Technische Daten: IP-Adresse, Browser- und Geräteinformationen, Nutzungsprotokolle der Website",
              "Reisedaten: Passangaben, Flug- und Unterkunftswünsche (nur wenn Sie uns mit der Organisation beauftragen)",
            ],
          },
          "Gesundheitsdaten sind nach Art. 9 DSGVO und Art. 6 KVKK eine besondere Kategorie personenbezogener Daten und werden ausschließlich mit Ihrer ausdrücklichen Einwilligung verarbeitet.",
        ],
      },
      {
        heading: "3. Zwecke der Verarbeitung",
        blocks: [
          {
            list: [
              "Beurteilung Ihrer Behandlungsanfrage und Vorschlag passender Kliniken und Ärzte",
              "Durchführung von Vorabprüfung, Preisermittlung und Angebotserstellung",
              "Organisation von Reise, Unterkunft, Transfer und Dolmetscherleistungen",
              "Nachsorge und Beratung nach der Behandlung",
              "Erfüllung unserer gesetzlichen Pflichten sowie Geltendmachung oder Abwehr von Rechtsansprüchen",
            ],
          },
        ],
      },
      {
        heading: "4. Rechtsgrundlagen",
        blocks: [
          "Wir verarbeiten Ihre personenbezogenen Daten auf Grundlage der Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO), der Erfüllung einer rechtlichen Verpflichtung (Art. 6 Abs. 1 lit. c) und unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f).",
          "Ihre Gesundheitsdaten werden ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung verarbeitet (Art. 9 Abs. 2 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen; der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.",
        ],
      },
      {
        heading: "5. Weitergabe und Übermittlung in Drittländer",
        blocks: [
          "Aufgrund der Art unserer Leistung werden Ihre Daten, streng im erforderlichen Umfang, weitergegeben an:",
          {
            list: [
              "Partnerkrankenhäuser, -kliniken und -ärzte",
              "Reisebüros, Fluggesellschaften, Hotels und Transferanbieter",
              "Anbieter von Dolmetscherleistungen",
              "Behörden, die gesetzlich zur Auskunft berechtigt sind",
              "Unsere Hosting-, E-Mail- und CRM-Dienstleister",
            ],
          },
          "Werden Daten außerhalb Ihres Landes übermittelt, stützen wir uns auf Ihre ausdrückliche Einwilligung oder treffen geeignete Garantien wie Standardvertragsklauseln gemäß Kapitel V DSGVO.",
        ],
      },
      {
        heading: "6. Speicherdauer",
        blocks: [
          "Wir bewahren Ihre personenbezogenen Daten so lange auf, wie es für die oben genannten Zwecke erforderlich ist, sowie bis zum Ablauf der gesetzlichen Verjährungsfristen. Danach werden die Daten gelöscht, vernichtet oder anonymisiert.",
        ],
      },
      {
        heading: "7. Cookies",
        blocks: [
          "Wir setzen unbedingt erforderliche Cookies ein, um Ihre Sitzung aufrechtzuerhalten und Ihre Spracheinstellung zu speichern. Analyse- oder Marketing-Cookies werden nur mit Ihrer Einwilligung gesetzt und können jederzeit über Ihre Browsereinstellungen blockiert werden.",
        ],
      },
      {
        heading: "8. Ihre Rechte",
        blocks: [
          "Nach Art. 15–22 DSGVO und Art. 11 KVKK haben Sie das Recht:",
          {
            list: [
              "zu erfahren, ob Ihre Daten verarbeitet werden, und Auskunft darüber zu erhalten",
              "unrichtige oder unvollständige Daten berichtigen zu lassen",
              "die Löschung Ihrer Daten zu verlangen",
              "die Einschränkung der Verarbeitung zu verlangen und der Verarbeitung zu widersprechen",
              "Ihre Daten in einem übertragbaren Format zu erhalten",
              "Entscheidungen zu widersprechen, die ausschließlich auf automatisierter Verarbeitung beruhen",
              "Schadensersatz für Schäden aus unrechtmäßiger Verarbeitung zu verlangen",
            ],
          },
        ],
      },
      {
        heading: "9. Sicherheit",
        blocks: [
          "Wir treffen organisatorische und technische Schutzmaßnahmen — Zugriffskontrolle, Verschlüsselung, gesicherte Übertragung (HTTPS) und regelmäßige Prüfungen —, um Ihre Daten vor unbefugtem Zugriff, Verlust und Offenlegung zu schützen.",
        ],
      },
      {
        heading: "10. Kontakt",
        blocks: [
          `Zur Ausübung Ihrer Rechte schreiben Sie an info@mydentist.com oder an die Geschäftsanschrift von ${COMPANY}. Wir antworten spätestens innerhalb von 30 Tagen. Sind Sie mit unserer Antwort nicht zufrieden, können Sie Beschwerde bei Ihrer zuständigen Aufsichtsbehörde einlegen — in der Türkei bei der Datenschutzbehörde (KVKK).`,
        ],
      },
      {
        heading: "11. Änderungen",
        blocks: [
          "Wir können diese Erklärung aktualisieren. Die jeweils aktuelle Fassung wird stets auf dieser Seite veröffentlicht und das Datum oben entsprechend angepasst.",
        ],
      },
    ],
  },

  terms: {
    title: "Nutzungsbedingungen",
    description:
      "Bedingungen für die Nutzung der MyDentist-Website und unserer Beratungsleistungen im Gesundheitstourismus, einschließlich medizinischer Haftungsausschlüsse und Haftungsbeschränkungen.",
    updatedLabel: "Zuletzt aktualisiert",
    updatedAt: "10. September 2026",
    backToHome: "Zurück zur Startseite",
    draft: true,
    draftNotice:
      "Dies ist eine Vorlage. Füllen Sie vor dem Livegang die Felder in eckigen Klammern aus und lassen Sie den Text von einem Rechtsberater prüfen.",
    sections: [
      {
        heading: "1. Parteien und Geltungsbereich",
        blocks: [
          `Diese Bedingungen gelten für alle, die diese Website besuchen oder die von ${COMPANY} („MyDentist“, „wir“) betriebenen Leistungen nutzen. Mit der Nutzung der Website erklären Sie sich mit diesen Bedingungen einverstanden.`,
        ],
      },
      {
        heading: "2. Art unserer Leistung",
        blocks: [
          "MyDentist erbringt Vermittlungs- und Beratungsleistungen im Gesundheitstourismus. Wir stellen keine medizinischen Diagnosen und führen weder Behandlungen noch operative Eingriffe durch.",
          "Alle medizinischen Eingriffe werden von Partnerkrankenhäusern, -kliniken und -ärzten durchgeführt, die nach dem Recht des jeweiligen Landes zugelassen sind und in eigener Verantwortung handeln. Das Behandlungsverhältnis kommt unmittelbar zwischen Ihnen und dem Leistungserbringer zustande.",
        ],
      },
      {
        heading: "3. Medizinischer Haftungsausschluss",
        blocks: [
          "Behandlungsbeschreibungen, Ablauferklärungen und ähnliche Inhalte auf dieser Website dienen ausschließlich der allgemeinen Information. Sie stellen keine medizinische Beratung dar und ersetzen keine ärztliche Untersuchung.",
          "Ein Behandlungserfolg wird nicht garantiert. Ergebnisse sind von Person zu Person verschieden, und eine abschließende Beurteilung kann nur der Sie untersuchende Arzt vornehmen. Wenden Sie sich in einem medizinischen Notfall bitte direkt an den Rettungsdienst.",
        ],
      },
      {
        heading: "4. Ihre Pflichten",
        blocks: [
          {
            list: [
              "Sie sind dafür verantwortlich, dass die von Ihnen übermittelten Angaben richtig, aktuell und vollständig sind",
              "Zu Ihrer eigenen Sicherheit müssen Sie Ihre Krankengeschichte, Medikamente und Allergien vollständig offenlegen",
              "Sie dürfen die Website nicht zu rechtswidrigen Zwecken, mit automatisierten Auslesewerkzeugen oder in einer den Betrieb störenden Weise nutzen",
              "Sind Sie unter 18 Jahre alt, dürfen Sie unsere Leistungen nur mit Zustimmung eines Erziehungsberechtigten nutzen",
            ],
          },
        ],
      },
      {
        heading: "5. Angebote, Buchung und Stornierung",
        blocks: [
          "Über die Website gestellte Anfragen begründen keine verbindliche Buchung; sie eröffnen lediglich eine Erstberatung. Preise, Behandlungsumfang, Zahlungsbedingungen sowie Stornierungs- und Erstattungsbedingungen werden in einem gesonderten, mit Ihnen geschlossenen Dienstleistungsvertrag geregelt.",
          "Auf der Website angezeigte Preise und Aktionsangaben sind unverbindlich und können sich durch Wechselkurse oder Abweichungen in Ihrem Behandlungsplan ändern.",
        ],
      },
      {
        heading: "6. Geistiges Eigentum",
        blocks: [
          `Sämtliche Texte, Bilder, Logos, Gestaltung und Software dieser Website gehören ${COMPANY} oder dessen Lizenzgebern. Sie dürfen ohne schriftliche Erlaubnis weder kopiert noch vervielfältigt noch gewerblich genutzt werden.`,
        ],
      },
      {
        heading: "7. Links zu Dritten",
        blocks: [
          "Die Website kann Links zu Partnereinrichtungen oder Dritten enthalten. Für die Inhalte, Datenschutzpraktiken oder Leistungen dieser Seiten übernehmen wir keine Verantwortung.",
        ],
      },
      {
        heading: "8. Haftungsbeschränkung",
        blocks: [
          "Wir gewährleisten nicht, dass die Website ununterbrochen oder fehlerfrei funktioniert. Soweit gesetzlich zulässig, haften wir nicht für mittelbare Schäden, Datenverlust oder entgangenen Gewinn aus der Nutzung der Website.",
          "Die medizinische Haftung aus dem Verschulden einer Partnereinrichtung oder eines anderen Leistungserbringers liegt bei diesem selbst.",
        ],
      },
      {
        heading: "9. Anwendbares Recht und Gerichtsstand",
        blocks: [
          "Diese Bedingungen unterliegen dem Recht der Republik Türkei. Zuständig sind die Gerichte und Vollstreckungsstellen von [Stadt]. Nutzer, die als Verbraucher gelten, behalten ihr Recht, Verbraucherschlichtungsstellen und Verbrauchergerichte anzurufen.",
        ],
      },
      {
        heading: "10. Änderungen und Kontakt",
        blocks: [
          "Wir können diese Bedingungen aktualisieren; die jeweils aktuelle Fassung wird auf dieser Seite veröffentlicht. Bei Fragen erreichen Sie uns unter info@mydentist.com.",
        ],
      },
    ],
  },
};
