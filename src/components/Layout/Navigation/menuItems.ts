import { wikiPath } from '~/components/utils';

export const menuItems = {
  Wissensspeicher: `/${wikiPath}`,
  'Plan F Check': '/plan-f-check',
  About: '/about',
  Artikel: '/artikel',
  Award: '/award/plan-f-award-2022',
  'Weitere Angebote': '/weitere-angebote/plan-f-handbuch',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const menuItemsWithChildren = {
  Artikel: [
    {
      display: 'Wie werde ich eine Fahrradfreundliche Kommune?',
      path: '/wie-werde-ich-eine-fahrradfreundliche-kommune',
    },
    {
      display: 'Warum ist Beteiligung wichtig?',
      path: '/warum-ist-beteiligung-wichtig',
    },
    {
      display:
        'Welche Motive für die Nutzung bzw. Nicht-Nutzung des Fahrrads gibt es?',
      path: '/welche-motive-fur-die-nutzung-bzw-nicht-nutzung-des-fahrrads-gibt-es',
    },
  ],
  Award: {
    'Plan F Award 2022': '/award/plan-f-award-2022',
  },
  'Weitere Angebote': {
    'Plan F Handbuch': '/weitere-angebote/plan-f-handbuch',
    Audits: '/weitere-angebote/audits',
    'E-Learning': '/weitere-angebote/e-Learning',
  },
};
