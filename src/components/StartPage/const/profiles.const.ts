import { ProfileData } from '~/types/ProfileData';
import aFrancke from '../assets/a_francke.jpg';
import aHerz from '../assets/a_herz.jpg';
import bWuhrl from '../assets/b_wuhrl.jpg';
import cKollert from '../assets/c_kollert.jpg';
import eRublack from '../assets/e_rublack.jpg';
import iSpape from '../assets/i_spape.jpg';
import jBaumann from '../assets/j_baumann.jpg';
import jWolff from '../assets/j_wolff.jpg';
import kStark from '../assets/k_stark.jpg';
import rPeters from '../assets/r_peters.jpg';
import sTsudome from '../assets/s_tsudome.jpg';
import tWeitermeier from '../assets/t_weitemeier.jpg';

export const jury: ProfileData[] = [
  {
    name: 'Prof. Dr. Angela Francke',
    description:
      'Professorin für Radverkehr und Nahmobilität an der Universität Kassel',
    quote:
      'Ich finde, jede Kommune sollte einen Plan F haben! Ich möchte gerne dabei unterstützen, dass dieser unkompliziert und schnell umgesetzt werden kann.',
    foto: {
      src: aFrancke,
    },
  },
  {
    name: 'Thimo Weitemeier',
    description:
      'Stellvertretender Vorsitzender im AGFK Niedersachsen/Bremen e.V., Stadtbaurat, Stadt Nordhorn',
    quote:
      'In meiner Heimatstadt Nordhorn ist das Fahrrad als alltägliches Verkehrsmittel schon etabliert und die fahrradgerechte Anpassung nimmt bei allen Planungen als auch politisch einen hohen Stellenwert ein. Nordhorn zählt zu den fahrradfreundlichsten Kommunen Deutschlands und damit auch andere Kommunen fahrradfreundlicher werden, unterstütze ich Plan F.',
    foto: {
      src: tWeitermeier,
    },
  },
  {
    name: 'Christoph Kollert',
    description:
      'Sachgebietsleiter Projekte bei der Gemeinde Eichwalde, Verbundkoordinator des NUDAFA-Reallabors für interkommunale Radverkehrsförderung',
    quote:
      'Ich unterstütze das Projekt, weil mich der Ansatz von Plan F sofort überzeugt hat! Ich bin überzeugt, dass eine systemische Betrachtungs- und Herangehensweise dringend notwendig ist, um große und kleine Kommunen bei der "Radverkehrswende" mitzunehmen oder überhaupt erst ins Boot zu holen.',
    foto: {
      src: cKollert,
    },
  },
  {
    name: 'Janina Wolff',
    description:
      'Behörde für Verkehr und Mobilitätswende Hamburg, Koordinierung Mobilitätswende/Fuß- und Radverkehr',
    quote:
      'Die Radverkehrsförderung ist wesentlicher Bestandteil der Mobilitätswende in Deutschland. Der übergreifende Austausch im Rahmen dieses Projekts in Verbindung mit einem Wettbewerb trägt auch wesentlich zu diesem Wandel bei.',
    foto: {
      src: jWolff,
    },
  },
  {
    name: 'Jörg Baumann',
    description:
      'Vertreter der "Arbeitsgemeinschaft fahrradfreundlicher Kommunen in Thüringen (AGFK-TH) e.V.“',
    quote:
      'Für mich ist das Fahrrad als Fortbewegungsmittel einfach genial, weil es deutlich mehr Vorteile als Nachteile aufweist, denn hinderlicher Regen oder Berge sind ja doch eher selten in unserem Land. Der Radverkehr gehört massiv gefördert, auch als Gegengewicht zum Druck der Autolobby.',
    foto: {
      src: jBaumann,
    },
  },
  {
    name: 'Sara Tsudome',
    description: 'Projektleitung Fahrradfreundlicher Arbeitgeber',
    quote:
      'Kommunen sind wichtige Akteure, nicht nur um gute und sichere Infrastruktur für Radfahrende bereit zu stellen. Sie können auch ihre Bewohnerinnen und Bewohner fürs Radfahren begeistern. Wir freuen uns, wenn sich viele auf diesen Weg machen!',
    foto: {
      src: sTsudome,
    },
  },
  {
    name: 'Esther Rublack',
    description: 'Referentin für Unternehmensmobilität bei AGORA Verkehrswende',
    quote:
      'Das Fahrrad spielt eine wichtige Rolle auf dem Weg zu einer klimaneutralen Mobilität. Damit es diese Rolle spielen kann, müssen Kommunen als Gestalter der Verkehrswende gestärkt werden.',
    foto: {
      src: eRublack,
    },
  },
  {
    name: 'Kerstin Stark',
    description: 'Mitgründerin und Vorstand von Changing Cities e. V.',
    quote:
      'Changing Cities setzt sich für eine weitreichende Mobilitätswende ein - mit Rad- und Fußverkehr im Mittelpunkt. Auch für die willigen Kommunen ist die Mobilitätswende eine große Herausforderung. Sie können jede Hilfe gebrauchen, um die richtigen Informationen zu finden und Handlungsoptionen leicht und systematisch vermittelt zu bekommen. Daher unterstützen wir Plan F.',
    foto: {
      src: kStark,
    },
  },
  {
    name: 'Ineke Spapé',
    description:
      'Professor Integrated and Sustainable Urban Mobility Planning an BUas (Breda University), Direktor SOAB Consultants, Berater Liveable Urban and Mobility Planning',
    quote:
      'Bürger*Innen von allen deutschen Städten und Dörfer verdienen es in einem lebendigen, attraktiven, gesunden und vitalen Wohnumfeld leben, spielen, arbeiten und erholen zu dürfen. Plan F zeigt wie das mit Radförderung aussehen kann!',
    foto: {
      src: iSpape,
    },
  },
  {
    name: 'Anja Herz',
    description: 'Vertreterin des VCD (Verkehrsclub Deutschland e.V.)',
    quote:
      'Für mich ist Radfahren das tollste Fortbewegungsmittel überhaupt - wer in besondererem Maße zu seiner Förderung beiträgt, soll auch besondere Anerkennung erhalten, gern bin ich ein Teil davon.',
    foto: {
      src: aHerz,
    },
  },
  {
    name: 'Benjamin Wührl',
    description: 'Referent Kommunikation & Partner beim AGFS NRW e.V.',
    quote:
      'Die Kommunen sind die Schlüsselakteure der Radverkehrsförderung. Dafür brauchen sie besonders über die Standard-Lösung hinaus Inspiration und Unterstützung. ',
    foto: {
      src: bWuhrl,
    },
  },
];

export const CEO: ProfileData = {
  name: 'Rebecca Peters',
  description: 'Bundesvorsitzende des ADFC e. V.',
  quote:
    'Kommunen müssen das Rad nicht immer wieder neu erfinden, sondern können vieles voneinander lernen. Der Plan F Award ehrt die besten Beispiele aus der kommunalen Praxis und zeigt unterschiedliche Herangehensweisen und Möglichkeiten der Radverkehrsförderung auf. Somit sorgt Plan F für den notwendigen Rückenwind in den Kommunen auf dem Weg Richtung Fahrradland Deutschland.',
  foto: {
    src: rPeters,
    attribution: 'ADFC/Deckbar',
  },
};
