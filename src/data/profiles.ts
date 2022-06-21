import { ProfileData } from '~/types/ProfileData';

export const jury: ProfileData[] = [
  {
    name: 'Prof. Dr. Angela Francke',
    description:
      'Professorin für Radverkehr und Nahmobilität an der Universität Kassel',
    quote:
      '„Ich finde, jede Kommune sollte einen Plan F haben! Ich möchte gerne dabei unterstützen, dass dieser unkompliziert und schnell umgesetzt werden kann.“',
    foto: {
      src: 'profile-images/a_francke.jpg',
    },
  },
  {
    name: 'Thimo Weitemeier',
    description:
      'Stellvertretender Vorsitzender im AGFK Niedersachsen/Bremen e.V., Stadtbaurat, Stadt Nordhorn',
    quote:
      'In meiner Heimatstadt Nordhorn ist das Fahrrad als alltägliches Verkehrsmittel schon etabliert und die fahrradgerechte Anpassung nimmt bei allen Planungen als auch politisch einen hohen Stellenwert ein. Nordhorn zählt zu den fahrradfreundlichsten Kommunen Deutschlands und damit auch andere Kommunen fahrradfreundlicher werden, unterstütze ich Plan F.',
    foto: {
      src: 'profile-images/t_weitemeier.jpg',
    },
  },
];

export const CEO: ProfileData = {
  name: 'Rebecca Peters',
  description: 'Bundesvorsitzende des ADFC e. V.',
  quote:
    'Kommunen müssen das Rad nicht immer wieder neu erfinden, sondern können vieles voneinander lernen. Der Plan F Award ehrt die besten Beispiele aus der kommunalen Praxis und zeigt unterschiedliche Herangehensweisen und Möglichkeiten der Radverkehrsförderung auf. Somit sorgt Plan F für den notwendigen Rückenwind in den Kommunen auf dem Weg Richtung Fahrradland Deutschland.',
  foto: {
    src: 'profile-images/r_peters.jpg',
    attribution: 'ADFC/Deckbar',
  },
};
