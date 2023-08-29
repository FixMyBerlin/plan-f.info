type MeasureType =
  | 'Finanzierung'
  | 'Personal'
  | 'Förderungen und Förderprogramme'
  | 'Rechtliche Grundlagen'
  | 'Verkehrspolitik, Siedlungspolitik und kommunalpolitische Zielsetzung'
  | 'Konzepte und Pläne'
  | 'Förderung sozialer Projekte und Engagement'
  | 'Teilnahme Modell- und Forschungsprojekte'
  | 'Koordination und Organisation Radverkehr'
  | 'Daten'
  | 'Partizipation (Bürger*innen)'
  | 'Akteur*innen-Vernetzung'
  | 'Organisierter Austausch mit Privatwirtschaft und Tourismus'
  | 'Kooperation mit Universitäten und Forschungseinrichtungen'
  | 'Modal Split'
  | 'Maßnahmenevaluierung'
  | 'Fahrradzählungen'
  | 'Evaluation der Radverkehrsförderung'
  | 'Mobilitätsbildung für Schüler*innen'
  | 'Fahrradkurse'
  | 'Fahrradflotte'
  | 'Aktionen'
  | 'Netzmerkmale: Komfort, Netzwerk, Direktheit, Sicherheit, Attraktivität'
  | 'Wegweisung'
  | 'Abstellanlagen im öffentlichen Raum'
  | 'Abstellanlagen an öffentlichen Einrichtungen'
  | 'Abstellanlagen für "Spezialfahrräder"'
  | 'Kampagnen'
  | 'Veranstaltungen und Aktionen'
  | 'Fahrradmarke und Branding'
  | 'Informationen'
  | 'Zertifizierung Fahrradfreundlicher Arbeitgeber'
  | 'Fahrradleasing und Fahrradflotte'
  | 'Fahrräder gegen Nutzungsgebühr'
  | 'Lastenfahrräder (gebührenpflichtig/als Teil des ÖPNVs)'
  | 'Kostenfreie kommunale Lastenfahrräder'
  | 'Veranstaltungen und Beratungsangebote'
  | 'Flächen zur Verfügung stellen';

type Measure =
  | 'Verwaltung & Politik'
  | 'Konzepte und Organisation'
  | 'Information, Austausch und Beteiligung'
  | 'Monitoring und Evaluation'
  | 'Radverkehr in Schulen, Kinder- und Jugendclubs und Kindergärten'
  | 'Training für Erwachsene'
  | 'Fahrradnetz'
  | 'Fahrradstraßen und -zonen'
  | 'Sichere Kreuzungen'
  | 'Geschützte Radfahrstreifen'
  | 'Bauliche Radwege'
  | 'Radfahrstreifen'
  | 'Radschnellverbindungen, Radschnellwege und Premiumrouten'
  | 'Fahrradbrücken und -unterführungen'
  | 'Temporäre Radfahrstreifen'
  | 'Verkehrsfluss'
  | 'Beleuchtung'
  | 'Gestaltungselemente'
  | 'Umleitungen und Baustellenführung'
  | 'Wirtschaftswege'
  | 'Fahrradparken'
  | 'Marketing und Kommunikation'
  | 'Kommunalverwaltung als Vorbild'
  | 'Reparaturservice'
  | 'Fahrradverleihsysteme'
  | 'Karten'
  | 'Kurierdienste'
  | 'Apps'
  | 'Ladeinfrastruktur'
  | 'Kombination Fahrrad und ÖPNV'
  | 'Bike und Ride'
  | 'Mobility Hubs im öffentlichen Raum'
  | 'Mobility Hubs an Wohnanlagen'
  | 'Rücksicht Rad- und Fußverkehr'
  | 'Wirtschafts- und Lieferverkehr und Stadtlogistik'
  | 'Einzelhandel'
  | 'Betriebliche Radverkehrsförderung'
  | 'Beschilderung und Infotafeln'
  | 'Touristische Wege und Freizeitwege'
  | 'Anreize für den Umstieg im Urlaub'
  | 'Touren'
  | 'Bikeparks'
  | 'Reduzierung Kfz-Durchgangsverkehre'
  | 'Geschwindigkeitsreduzierung'
  | 'Parkraummanagement'
  | 'Reduzierung des innerstädtischen Kfz-Verkehrs';

type Topic =
  | 'Governance'
  | 'Bildung und Training'
  | 'Infrastruktur'
  | 'Kommunikation und Öffentlichkeitsarbeit'
  | 'Services'
  | 'Multimodalität'
  | 'Wirtschaft'
  | 'Tourismus'
  | 'Verkehrsberuhigung';

type Question = {
  question: string;
  explanation: string;
  topics: Topic[];
  measures: Measure[];
  measureTypes: MeasureType[];
  weight: number;
  options: { weight: number; text: string }[];
};

const defaultOptions = [
  { text: 'trifft gar nicht zu', weight: 0 },
  { text: 'trifft kaum zu', weight: 1 },
  { text: 'trifft größtenteils zu', weight: 2 },
  { text: 'trifft voll zu', weight: 3 },
];

export const firstBlock: Question[] = [
  {
    question: 'Es gibt eine*n Radverkehrsbeauftragte*n.',
    explanation:
      'Manche Kommunen haben aufgrund ihrer Größe keinen Radverkehrsbeauftragen. Falls es aber Personen aus der Verwaltung und Politik gibt, die sich für den Radverkehr engangieren oder es eine*n Ansprechpartner*in gibt, kann auch mit "ja" geantwortet werden.',
    weight: 3,
    topics: ['Governance'],
    measures: ['Verwaltung & Politik', 'Konzepte und Organisation'],
    measureTypes: ['Personal', 'Koordination und Organisation Radverkehr'],
    options: [
      { text: 'ja', weight: 3 },
      { text: 'nein', weight: 0 },
    ],
  },
  {
    question: 'Es gibt Konzept(e) und Zielsetzungen für den Radverkehr.',
    explanation:
      'Hiermit meinen wir Mobilitätskonzepte, Radverkehrskonzepte, Klimaschutzkonzepte usw. sowie festgeschriebene Ziele, Leitbilder und / oder Visionen.',
    weight: 3,
    topics: ['Governance'],
    measures: ['Verwaltung & Politik', 'Konzepte und Organisation'],
    measureTypes: [
      'Konzepte und Pläne',
      'Verkehrspolitik, Siedlungspolitik und kommunalpolitische Zielsetzung',
    ],
    options: defaultOptions,
  },
  {
    question:
      'Es gibt eigene rechtliche Grundlagen zur Planung des Radverkehrs, wie Radverkehrsgesetze, Stellplatzsatzungen und eigene Planungsstandards.',
    explanation:
      's. auch: https://plan-f.info/wissensspeicher/governance/verwaltung-und-politik/',
    weight: 2,
    topics: ['Governance'],
    measures: ['Verwaltung & Politik'],
    measureTypes: ['Rechtliche Grundlagen'],
    options: defaultOptions,
  },
  {
    question:
      'Es gibt einen aktuellen Datenstand zur Radverkehrsinfrastruktur / zu den Radverkehrsmaßnahmen.',
    explanation: '',
    weight: 3,
    topics: ['Governance'],
    measures: ['Konzepte und Organisation'],
    measureTypes: ['Daten'],
    options: defaultOptions,
  },

  {
    question:
      'Wie viel Geld wird jährlich pro Einwohner*in für den Radverkehr ausgegeben?',
    explanation:
      's. auch: https://plan-f.info/artikel/welches-budget-sollte-ich-fur-die-forderung-der-fahrradmobilitat-ansetzen/',
    weight: 2,
    topics: ['Governance'],
    measures: ['Verwaltung & Politik'],
    measureTypes: ['Finanzierung'],
    options: [
      { text: '> 30€/Person', weight: 3 },
      { text: '10-30€/Person', weight: 2 },
      { text: '5-10€/Person', weight: 1 },
      { text: '< 5€/Person', weight: 0 },
    ],
  },
  {
    question:
      'Es werden regelmäßig Maßnahmen evaluiert, Radverkehre gezählt und der Modal Split erhoben.',
    explanation:
      'Der Modal Split (auch Modal Share genannt) ist eine Kenngröße zur Aufteilung der Verkehrsnachfrage auf verschiedene Verkehrsmittel. Er stellt die prozentuale Verteilung des Verkehrsaufkommens (Wege) oder der Verkehrsleistung (Personenkilometer) differenziert nach den Verkehrsmitteln dar.',
    weight: 2,
    topics: ['Governance'],
    measures: ['Monitoring und Evaluation'],
    measureTypes: [
      'Modal Split',
      'Maßnahmenevaluierung',
      'Fahrradzählungen',
      'Evaluation der Radverkehrsförderung',
    ],
    options: defaultOptions,
  },
  {
    question:
      'Es gibt finanzielle Förderungen, zum Beispiel für (Lasten-)fahrräder und Fahrradinitiativen.',
    explanation: '',
    weight: 2,
    topics: ['Governance', 'Services', 'Multimodalität'],
    measures: [
      'Verwaltung & Politik',
      'Konzepte und Organisation',
      'Mobility Hubs an Wohnanlagen',
      'Kurierdienste',
    ],
    measureTypes: [
      'Förderung sozialer Projekte und Engagement',
      'Förderungen und Förderprogramme',
    ],
    options: defaultOptions,
  },
  {
    question:
      'Es gibt einen regelmäßigen Austausch mit relevanten Stakeholdern des Radverkehrs.',
    explanation: '',
    weight: 3,
    topics: ['Governance'],
    measures: [
      'Konzepte und Organisation',
      'Information, Austausch und Beteiligung',
    ],
    measureTypes: [
      'Koordination und Organisation Radverkehr',
      'Partizipation (Bürger*innen)',
      'Akteur*innen-Vernetzung',
      'Organisierter Austausch mit Privatwirtschaft und Tourismus',
      'Kooperation mit Universitäten und Forschungseinrichtungen',
    ],
    options: defaultOptions,
  },
];

export const secondBlock: Question[] = [
  {
    question:
      'Es gibt ein durchgängiges, hochwertiges, komfortables und sicheres Fahrradnetz.',
    explanation:
      'Mit Sicherheit meinen wir die objektive Sicherheit (Unfallzahlen) und wie es subjektiv wahrgenommen wird (hierzu zählen die Verkehrssicherheit und soziale Sicherheit).',
    weight: 3,
    topics: ['Infrastruktur', 'Tourismus'],
    measures: [
      'Fahrradnetz',
      'Radschnellverbindungen, Radschnellwege und Premiumrouten',
      'Verkehrsfluss',
      'Wirtschaftswege',
      'Touristische Wege und Freizeitwege',
    ],
    measureTypes: [
      'Netzmerkmale: Komfort, Netzwerk, Direktheit, Sicherheit, Attraktivität',
    ],
    options: defaultOptions,
  },
  {
    question: 'Das Fahrradnetz ist intuiitiv und gut beschildert.',
    explanation: '',
    weight: 1,
    topics: ['Infrastruktur', 'Tourismus'],
    measures: ['Fahrradnetz', 'Beschilderung und Infotafeln'],
    measureTypes: ['Wegweisung'],
    options: defaultOptions,
  },
  {
    question:
      'Es gibt weniger Radfahrende, die einen Helm und/oder eine Warnweste tragen, als solche, die dies nicht tun.',
    explanation:
      'Wenn wenige Personen einen Helm und eine Warnweste tragen, kann das ein Zeichen von sicherer/ sicher wahrgenommener Infrastruktur sein. Wenn Sie nicht genau wissen wie es in Ihrer Kommune ist, dann tauschen Sie sich hierzu mit Kolleg*innen aus, die viel auf den Straßen Ihrer Kommune unterwegs sind. ',
    weight: 2,
    topics: ['Infrastruktur'],
    measures: [
      'Fahrradstraßen und -zonen',
      'Sichere Kreuzungen',
      'Geschützte Radfahrstreifen',
      'Bauliche Radwege',
      'Radfahrstreifen',
      'Fahrradbrücken und -unterführungen',
      'Temporäre Radfahrstreifen',
      'Beleuchtung',
      'Gestaltungselemente',
      'Umleitungen und Baustellenführung',
    ],
    measureTypes: [],
    options: defaultOptions,
  },
  {
    question: 'Unter den Radfahrenden sind mehr Frauen und Kinder als Männer.',
    explanation:
      'Wenn mehr Frauen und Kinder Radfahren, kann das ein Zeichen von sicherer/sicher wahrgenommener Infrastruktur sein. Falls Sie hierzu keine Daten haben, dann tauschen Sie sich hierzu mit Kolleg*innen aus, die viel auf den Straßen Ihrer Kommune unterwegs sind. Mit Frauen meinen wir weiblich gelesene Personen und mit Männer männlich gelesene Personen.',
    weight: 3,
    topics: [
      'Infrastruktur',
      'Governance',
      'Bildung und Training',
      'Multimodalität',
      'Tourismus',
    ],
    measures: [
      'Fahrradstraßen und -zonen',
      'Sichere Kreuzungen',
      'Geschützte Radfahrstreifen',
      'Bauliche Radwege',
      'Radfahrstreifen',
      'Fahrradbrücken und -unterführungen',
      'Temporäre Radfahrstreifen',
      'Beleuchtung',
      'Gestaltungselemente',
      'Umleitungen und Baustellenführung',
      'Information, Austausch und Beteiligung',
      'Training für Erwachsene',
      'Rücksicht Rad- und Fußverkehr',
      'Anreize für den Umstieg im Urlaub',
    ],
    measureTypes: ['Partizipation (Bürger*innen)'],
    options: defaultOptions,
  },
  {
    question:
      'Es werden Maßnahmen umgesetzt, die den Autoverkehr (sog. MIV - motorisierten Individualverkehr) reduzieren.',
    explanation:
      'Zu den Maßnahmen zählen zum Beispiel die Reduzierung der Geschwindigkeiten oder die Reduzierung von Kfz-Parkplätzen.',
    weight: 3,
    topics: ['Verkehrsberuhigung'],
    measures: [
      'Reduzierung Kfz-Durchgangsverkehre',
      'Geschwindigkeitsreduzierung',
      'Parkraummanagement',
      'Reduzierung des innerstädtischen Kfz-Verkehrs',
    ],
    measureTypes: [],
    options: defaultOptions,
  },
  {
    question:
      'Es gibt ausreichend Fahrradabstellplätze für Radfahrende mit hoher Qualität.',
    explanation:
      'Hiermit meinen wir Abstellanlagen, die zulassen den Rahmen des Fahrrads abzuschließen und die auch für unterschiedliche Fahrradtypen funktionieren wie z. B. für Lastenfahrräder und Kinderfahrräder.',
    weight: 3,
    topics: ['Infrastruktur'],
    measures: ['Fahrradparken'],
    measureTypes: [
      'Abstellanlagen im öffentlichen Raum',
      'Abstellanlagen an öffentlichen Einrichtungen',
      'Abstellanlagen für "Spezialfahrräder"',
    ],
    options: defaultOptions,
  },
];

export const thirdBlock: Question[] = [
  {
    question:
      'Es gibt radverkehrsbezogene Dienstleistungen wie einen Fahrradverleih, Reparaturangebote oder Kurierdienste.',
    explanation:
      'Kurierdienste können von der Kommune eingesetzt werden, um z. B. Personlausweise auszuliefern oder für die Beförderung von Personen eingesetzt werden (insbesondere interessant in großen Städten und z. B. in städtischen Senior*innenheimen).',
    weight: 2,
    topics: ['Services', 'Multimodalität', 'Tourismus'],
    measures: [
      'Reparaturservice',
      'Fahrradverleihsysteme',
      'Kurierdienste',
      'Ladeinfrastruktur',
      'Kombination Fahrrad und ÖPNV',
      'Bike und Ride',
      'Mobility Hubs im öffentlichen Raum',
      'Mobility Hubs an Wohnanlagen',
      'Bikeparks',
    ],
    measureTypes: [
      'Fahrräder gegen Nutzungsgebühr',
      'Lastenfahrräder (gebührenpflichtig/als Teil des ÖPNVs)',
      'Kostenfreie kommunale Lastenfahrräder',
    ],
    options: defaultOptions,
  },
  {
    question: 'In Kitas, Schulen und Horts wird das Fahrradfahren gefördert.',
    explanation: '',
    weight: 3,
    topics: ['Bildung und Training'],
    measures: [
      'Radverkehr in Schulen, Kinder- und Jugendclubs und Kindergärten',
    ],
    measureTypes: [
      'Mobilitätsbildung für Schüler*innen',
      'Fahrradkurse',
      'Fahrradflotte',
      'Aktionen',
    ],
    options: defaultOptions,
  },
];

export const fourthBlock: Question[] = [
  {
    question: 'Die Mehrheit der Einwohner*innen kennt das Fahrradnetz.',
    explanation:
      'Denken sie an Veranstaltungen und Begegnungen mit Bürger*innen: Hatten Sie das Gefühl, dass viele das Radverkehrsnetz kannten?',
    weight: 2,
    topics: ['Kommunikation und Öffentlichkeitsarbeit', 'Services'],
    measures: ['Marketing und Kommunikation', 'Karten', 'Apps'],
    measureTypes: ['Informationen'],
    options: defaultOptions,
  },
  {
    question:
      'Regelmäßig und umfassend werden Bürger*innen zu Radverkehrsvorhaben beteiligt und informiert.',
    explanation: '',
    weight: 3,
    topics: [
      'Governance',
      'Kommunikation und Öffentlichkeitsarbeit',
      'Tourismus',
    ],
    measures: [
      'Konzepte und Organisation',
      'Marketing und Kommunikation',
      'Touren',
    ],
    measureTypes: [
      'Koordination und Organisation Radverkehr',
      'Kampagnen',
      'Veranstaltungen und Aktionen',
      'Informationen',
    ],
    options: defaultOptions,
  },
  {
    question:
      'Im Rahmen von Kampagnen oder Veranstaltungen wird regelmäßig über das Radverkehrsangebot informiert. ',
    explanation: '',
    weight: 1,
    topics: [
      'Governance',
      'Kommunikation und Öffentlichkeitsarbeit',
      'Tourismus',
    ],
    measures: [
      'Konzepte und Organisation',
      'Marketing und Kommunikation',
      'Touren',
    ],
    measureTypes: [
      'Teilnahme Modell- und Forschungsprojekte',
      'Kampagnen',
      'Veranstaltungen und Aktionen',
      'Informationen',
    ],
    options: defaultOptions,
  },
  {
    question:
      'Die Wirtschaft, wie z. B. der Einzelhandel, wird ermutigt, sich an der Radverkehrsförderung zu beteiligen.',
    explanation: '',
    weight: 1,
    topics: [
      'Governance',
      'Kommunikation und Öffentlichkeitsarbeit',
      'Wirtschaft',
    ],
    measures: [
      'Information, Austausch und Beteiligung',
      'Marketing und Kommunikation',
      'Wirtschafts- und Lieferverkehr und Stadtlogistik',
      'Einzelhandel',
      'Betriebliche Radverkehrsförderung',
    ],
    measureTypes: [
      'Organisierter Austausch mit Privatwirtschaft und Tourismus',
      'Informationen',
      'Veranstaltungen und Beratungsangebote',
      'Flächen zur Verfügung stellen',
    ],
    options: defaultOptions,
  },
  {
    question: 'Fahrradfahren wird positiv wahrgenommen.',
    explanation:
      'Wenn Sie sich hier unsicher sind, dann tauschen Sie sich hierzu mit Kolleg*innen aus.',
    weight: 3,
    topics: ['Kommunikation und Öffentlichkeitsarbeit', 'Tourismus'],
    measures: [
      'Marketing und Kommunikation',
      'Kommunalverwaltung als Vorbild',
      'Anreize für den Umstieg im Urlaub',
    ],
    measureTypes: [
      'Kampagnen',
      'Veranstaltungen und Aktionen',
      'Fahrradmarke und Branding',
      'Informationen',
      'Zertifizierung Fahrradfreundlicher Arbeitgeber',
      'Fahrradleasing und Fahrradflotte',
    ],
    options: defaultOptions,
  },
];

export const allQuestions = [
  ...firstBlock,
  ...secondBlock,
  ...thirdBlock,
  ...fourthBlock,
];
