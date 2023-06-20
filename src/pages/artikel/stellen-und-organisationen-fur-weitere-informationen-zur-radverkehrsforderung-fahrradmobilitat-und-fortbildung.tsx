import { Content, MetaTags, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/TopicPage/LinkButtonWithArrow';
import { H3, P } from '~/components/Text';
import { HeadFC } from 'gatsby';

const title =
  'Stellen und Organisationen für weitere Informationen zur Radverkehrsförderung, Fahrradmobilität und Fortbildung';

const FurtherInformationArticle = () => {
  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          <H3>Informationen & Unterstützung: </H3>
          <P>
            Der Nationale Radverkehrsplan 3.0 (NRVP 3.0) ist die
            Radverkehrsstrategie des Bundes bis zum Jahr 2030:
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://www.mobilitaetsforum.bund.de/DE/Themen/NationalerRadverkehrsplan/nationaler-radverkehrsplan_node.html"
          >
            Nationaler Radverkehrsplan
          </LinkButtonWithArrow>
          <P>
            Das Bundesamt für Logistik und Mobilität (BALM) ist als zentraler
            Projektträger zur Förderung des Radverkehrs im Auftrag des
            Bundesministeriums für Digitales und Verkehr (BMDV) erste
            Anlaufstelle für viele Fragen zur Finanzierung und Förderung des
            Radverkehrs:
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://www.balm.bund.de/DE/Themen/Radverkehr/Radverkehr_node.html;jsessionid=12003753930D92515C524F2140D229C2.live21322"
          >
            BALM
          </LinkButtonWithArrow>
          <P>
            AGFKs (Arbeitsgemeinschaften fußgänger- und fahrradfreundlicher
            Städte, Gemeinden und Kreise): Die AGFKs sind in verschiedenen
            Bundesländern tätige Netzwerke von Städten, Gemeinden und
            Landkreisen, die sich für eine fahrrad- und fußgängerfreundliche
            Verkehrspolitik einsetzen. Sie bieten Unterstützung bei der Planung
            und Umsetzung von Maßnahmen, organisieren Erfahrungsaustausch und
            Schulungen und vergeben Auszeichnungen für besonders fahrrad- und
            fußgängerfreundliche Kommunen. Überblick und weitere Informationen
            zu den elf Arbeitsgemeinschaften auf Landesebene: Radverkehrs:
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://www.wir-machen-radverkehr.de/"
          >
            AGFK
          </LinkButtonWithArrow>
          <P>
            Mobilitätsforum Bund mit Literatur-Verzeichnis: Das Mobilitätsforum
            Bund bietet auch eine Literatur-Datenbank, in der Fachliteratur zum
            Thema Radverkehrsförderung recherchiert werden kann:
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://www.mobilitaetsforum.bund.de/SiteGlobals/Forms/Suche/Wissenspool_Formular.html;jsessionid=9BA9A93D5007DC031FC318B77846DD85.live21304"
          >
            Mobilitätsforum Bund
          </LinkButtonWithArrow>
          <P>
            Landesbetrieb für Straßenbau: Die Landesbetriebe für Straßenbau in
            den Bundesländern können als Ansprechpartner für kommunale
            Radverkehrsplanungen und -projekte dienen.
          </P>
          <P>
            Der Allgemeine Deutsche Fahrrad-Club e.V. (ADFC) ist die
            Interessenvertretung für Radfahrende und informiert über
            verschiedene Positionspapiere und Fachveröffentlichungen:
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://www.adfc.de/fachwissen"
          >
            ADFC
          </LinkButtonWithArrow>
          <P>
            Der Verkehrsclub Deutschland e.V. (VCD) setzt sich für die
            Verkehrswende ein. Auf den Radverkehr macht er sie sich für mehr
            Sicherheit und Platz für Radfahrende stark:
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://www.vcd.org/radverkehr"
          >
            VCD
          </LinkButtonWithArrow>
          <P>
            Changing Cities e.V. ist ein spendenfinanzierter, unabhängiger
            Verein. Changing Cities setzt sich für lebenswerte Städte, die für
            alle gleichermaßen offen, sicher und gesund sind, ein:
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://changing-cities.org/"
          >
            Changing Cities
          </LinkButtonWithArrow>
          <P>
            Wer einen Blick in unser Nachbarland Niederlande wagen möchte, kann
            sich bei Fietsberaad, dem Wissenszentrum für den Radverkehr der
            niederländischen Behörden, über gute Beispiele und Leitfäden
            informieren:{' '}
          </P>
          <LinkButtonWithArrow button="black" href="https://fietsberaad.nl/">
            Fietsberaad
          </LinkButtonWithArrow>
          <H3>Fördermittel:</H3>
          <P>
            Mobilitätsforum Bund mit Förderfibel: Das vom
            Bundesverkehrsministerium ins Leben gerufene Mobilitätsforum bietet
            eine Online-Plattform, auf der Informationen zu verschiedenen
            Mobilitätsthemen, darunter auch der Radverkehr, bereitgestellt
            werden. Eine Förderfibel gibt einen Überblick über Förderprogramme
            und -möglichkeiten:{' '}
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://www.mobilitaetsforum.bund.de/SiteGlobals/Forms/Suche/Foerderfibel_Formular.html"
          >
            Förderfibel
          </LinkButtonWithArrow>

          <P>
            Die Europäische Union stellt auch Fördermittel bereit. Die European
            Cycling Federation (ECF) zeigt diese übersichtlich auf:
          </P>
          <LinkButtonWithArrow
            button="black"
            href="https://ecf.com/what-we-do/european-funding"
          >
            ECF
          </LinkButtonWithArrow>
          <H3>Weiterbildung:</H3>
          <P>
            <LinkButtonWithArrow
              button="black"
              href="https://www.mobilitaetsforum.bund.de/DE/Fortbildungen/fortbildungen_node.html"
            >
              Mobilitätsforum
            </LinkButtonWithArrow>
          </P>
          <P>
            <LinkButtonWithArrow
              button="black"
              href="https://www.adfc.de/artikel/die-adfc-akademie-1"
            >
              ADFC-Akademie
            </LinkButtonWithArrow>
          </P>
          <P>
            <LinkButtonWithArrow
              button="black"
              href="https://www.vcd.org/der-vcd/bildungs-und-beratungsservice-des-vcd"
            >
              Bildungs- und Beratungsservice des VCD
            </LinkButtonWithArrow>
          </P>
          <P>
            <LinkButtonWithArrow
              button="black"
              href="https://fair-spaces.de/lernen/"
            >
              Fair Spaces
            </LinkButtonWithArrow>
          </P>
        </Content>
      </Section>
    </>
  );
};

export default FurtherInformationArticle;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;
