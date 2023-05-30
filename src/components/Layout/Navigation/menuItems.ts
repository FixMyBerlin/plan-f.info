import { wikiPath } from '~/components/utils';

export const menuItems = {
  Wissensspeicher: `/${wikiPath}/`,
  'Plan F Check': '/plan-f-check/',
  'Weitere Angebote': '/weitere-angebote/',
  Artikel: '/artikel/',
  About: '/about/',
  Award: '/award/plan-f-award-2022/',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const menuItemsWithChildren = {
  Artikel: {
    'Alle Artikel': '',
    'Wie werde ich eine Fahrradfreundliche Kommune?':
      'wie-werde-ich-eine-fahrradfreundliche-kommune/',
    'Warum ist Beteiligung wichtig?': 'warum-ist-beteiligung-wichtig/',
    'Welche Motive für die Nutzung bzw. Nicht-Nutzung des Fahrrads gibt es?':
      'welche-motive-fur-die-nutzung-bzw-nicht-nutzung-des-fahrrads-gibt-es/',
    'Welches Budget sollte ich für die Förderung der Fahrradmobilität ansetzen?':
      'welches-budget-sollte-ich-fur-die-forderung-der-fahrradmobilitat-ansetzen/',
    'Warum soll ich den Radverkehr in meiner Kommune fördern? Was sind die positiven Effekte?':
      'warum-soll-ich-den-radverkehr-in-meiner-kommune-fordern-was-sind-die-positiven-effekte/',
    'Stellen und Organisationen für weitere Informationen zur Radverkehrsförderung, Fahrradmobilität und Fortbildung':
      'stellen-und-organisationen-fur-weitere-informationen-zur-radverkehrsforderung-fahrradmobilitat-und-fortbildung/',
  },

  'Weitere Angebote': {
    'Plan F Handbuch': 'handbuch/',
    Audits: 'audits/',
    'E-Learning': 'e-learning/',
  },
};
