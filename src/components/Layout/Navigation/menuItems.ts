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
const menuItemsWithChildren = {
  Artikel: {
    'Alle Artikel': '/artikel',
    'Wie werde ich eine Fahrradfreundliche Kommune?':
      '/artikel/wie-werde-ich-eine-fahrradfreundliche-kommune',
    'Warum ist Beteiligung wichtig?': '/artikel/warum-ist-beteiligung-wichtig',
  },
  Award: {
    'Plan F Award 2022': '/award/plan-f-award-2022',
  },
  'Weitere Angebote': {
    'Plan F Handbuch': '/weitere-angebote/plan-f-handbuch',
    Audits: '/weitere-angebote/audits',
    'E-Learning': '/weitere-angebote/e-Learning',
  },
};
