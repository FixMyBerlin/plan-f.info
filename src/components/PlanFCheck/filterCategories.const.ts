export type FilterCategory = {
  label: string;
  options: Record<string, string>;
};
export const filterCategories: Record<string, FilterCategory> = {
  financiallyWeak: {
    label: 'Finanzschwache Kommune',
    options: {
      all: 'kein Filter',
      true: 'Ja',
      false: 'Nein',
    },
  },
  beginnerFriendly: {
    label: 'Einsteigerkommune',
    options: {
      all: 'kein Filter',
      true: 'Ja',
      false: 'Nein',
    },
  },
  population: {
    label: 'Einwohner*innenanzahl',
    options: {
      all: 'kein Filter',
      '0-20000': '< 20.000',
      '20000-50000': '20.000 - 50.000',
      '50000-100000': '50.001 - 100.000',
      '100000-200000': '100.001 - 200.000',
      '200000-500000': '200.001 - 500.000',
      '500000-Infinity': '> 500.000',
    },
  },
  spatialStructure: {
    label: 'Besiedlungstyp',
    options: {
      all: 'kein Filter',
      'Überwiegend städtisch,Städtischer Kreis':
        'Überwiegend städtisch, Städtischer Kreis',
      'Teilweise städtisch,Ländlicher Kreis mit Verdichtungsansätzen':
        'Teilweise städtisch, Ländlicher Kreis mit Verdichtungsansätzen',
      'Dünn besiedelter ländlicher Kreis,Überwiegend ländlich':
        'Dünn besiedelter ländlicher Kreis, Überwiegend ländlich',
    },
  },
  countryState: {
    label: 'Bundesländer',
    options: {
      all: 'alle Bundesländer',
      'Baden-Württemberg': 'Baden-Württemberg',
      Bayern: 'Bayern',
      Berlin: 'Berlin',
      Brandenburg: 'Brandenburg',
      Bremen: 'Bremen',
      Hamburg: 'Hamburg',
      Hessen: 'Hessen',
      'Mecklenburg-Vorpommern': 'Mecklenburg-Vorpommern',
      Niedersachsen: 'Niedersachsen',
      'Nordrhein-Westfalen': 'Nordrhein-Westfalen',
      'Rheinland-Pfalz': 'Rheinland-Pfalz',
      Saarland: 'Saarland',
      Sachsen: 'Sachsen',
      'Sachsen-Anhalt': 'Sachsen-Anhalt',
      'Schleswig-Holstein': 'Schleswig-Holstein',
      Thüringen: 'Thüringen',
    },
  },
};
