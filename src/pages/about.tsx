import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { Caption, H2, H3, P } from '~/components/Text';
import { Link, MailLink } from '~/components/core/links';

const AboutPage = () => {
  const title = 'Über Plan F';
  return (
    <>
      <HelmetSeo title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          <H2>Was ist Plan F? </H2>
          <P>
            Einen Plan zu haben, ist gut. Plan F zu haben, ist sehr gut. F wie
            Fahrrad, Fortschritt und Fachthemen. Plan F unterstützt Kommunen bei
            der Förderung des Radverkehrs. Dafür strukturieren wir bestehendes
            Wissen, Maßnahmen und Leitfäden zur Fahrradmobilität und zeigen
            notwendige Handlungsfelder auf. Ergänzt wird die Übersicht durch
            aktuelle Beispiele aus der kommunalen Praxis, die auf städtische und
            zielgruppenspezifische Besonderheiten eingehen. Kommunen erhalten
            auf diese Weise einen Überblick und konkrete Handlungsmöglichkeiten
            zur Radverkehrsförderung.
          </P>
          <P>
            Das Herzstück von Plan F ist die Systematisierung mit den
            Praxisbeispielen und Leitfäden. Durch die strukturierte Aufarbeitung
            der Materialien nach neun Handlungsfeldern ist eine zielorientierte
            und übersichtliche Maßnahmensammlung, welche die Akteur*innen in den
            Kommunen einfach bedienen und damit ihre Lücke in der
            Radverkehrsförderung schließen können, entstanden. Für eine
            ganzheitliche Radverkehrsförderung ist es notwendig, Maßnahmen in
            verschiedenen Handlungsfeldern umzusetzen. Durch einen schlauen und
            passgenauen Maßnahmenmix kann die Fahrradkultur und der
            Radverkehrsanteil in deutschen Kommunen gesteigert und die
            Radverkehrsförderung effizienter werden.
          </P>
          <P>
            Plan F ist ein gemeinsames Projekt von{' '}
            <Link href="https://fair-spaces.de/">Fair Spaces</Link> und{' '}
            <Link href="https://www.fixmycity.de/">FixMyCity</Link>
            und wird vom Bundesministerium für Digitales und Verkehr (BMDV) im
            Rahmen des Nationalen Radverkehrsplan (NRVP) gefördert.
          </P>
          <H3>Benutzung dieser Seite</H3>
          <P>
            In jedem Praxisbeispiel werden die Kommunen, welche die Maßnahmen
            umgesetzt haben, (mit Größe, Lage, lokalen Herausforderungen) kurz
            beschrieben. Die Maßnahmen und der Umsetzungsprozess werden u. a.
            anhand der angesprochenen Zielgruppen, Einbindung der Bevölkerung,
            Ziele, Kosten, Nutzung von Fördermitteln, Kommunikation und
            Herausforderungen vertiefend dargestellt.
          </P>
          <P>
            Auch wird auf Besonderheiten eingegangen, wie durchgeführte
            Evaluation, Beteiligung, interkommunale Maßnahme, temporäre oder
            Einsteigermaßnahmen. Über die intelligente Suche kann nach
            verschiedenen Stichpunkten gesucht werden.
          </P>
          <P>
            Zudem befindet sich unter weitere Angebote:
            <ul className="ml-2 list-disc pl-2">
              <li>
                Ergänzende Informationen und Empfehlungen zur kommunalen
                Radverkehrsförderung
              </li>
              <li>Stellen und Organisationen für weitere Informationen</li>
              <li>
                Informationen zum gedruckten Handbuch und dem E-Learningkurs
              </li>
              <li>Plan F Audit</li>
            </ul>
          </P>
          <P>
            Über den Plan F Check (coming soon) erhalten Kommunen passgenaue
            Handlungsempfehlungen über eine Selbstevaluation.
          </P>
          <H3>Pressestelle</H3>
          <P>
            Presseanfragen können an: <MailLink>kontakt@plan-f.info</MailLink>{' '}
            und 0176 / 807 122 12 gerichtet werden.
          </P>
          <Caption className="pt-12">
            Plan F ist ein gemeinsames Projekt von fair spaces und FixMyCity und
            wird vom Bundesministerium für Digitales und Verkehr (BMDV) im
            Rahmen des Nationalen Radverkehrsplan (NRVP) gefördert.
          </Caption>
        </Content>
      </Section>
    </>
  );
};

export default AboutPage;
