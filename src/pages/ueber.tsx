import { HeadFC } from 'gatsby';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { Caption, H2, H3, P } from '~/components/Text';
import { planFMarkdownProseClasses } from '~/components/core/Prose';
import { Link, MailLink } from '~/components/core/links';

const title = 'Über Plan F';

const AboutPage = () => {
  return (
    <>
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
            und übersichtliche Maßnahmensammlung entstanden, welcher sich die
            Akteur*innen in den Kommunen einfach bedienen, um ihre Lücke in der
            Radverkehrsförderung schließen zu können. Für eine ganzheitliche
            Radverkehrsförderung ist es notwendig, Maßnahmen in verschiedenen
            Handlungsfeldern umzusetzen. Durch einen schlauen und passgenauen
            Maßnahmenmix können die Fahrradkultur und der Radverkehrsanteil in
            deutschen Kommunen gesteigert und die Radverkehrsförderung
            effizienter werden.
          </P>
          <P>
            Plan F ist ein gemeinsames Projekt von{' '}
            <Link href="https://fair-spaces.de/">Fair Spaces</Link> und{' '}
            <Link href="https://www.fixmycity.de/">FixMyCity</Link> und wird vom
            Bundesministerium für Digitales und Verkehr (BMDV) im Rahmen des
            Nationalen Radverkehrsplan (NRVP) gefördert.
          </P>
          <H3>Benutzung dieser Seite</H3>
          <P>
            Diese Webseite gibt einen Überblick über die neun Handlungsfeldern
            der kommunalen Fahrradmobilität. In den verschiedenen
            Handlungsfeldern werden unterschiedliche Praxisbeispiele aufgezeigt,
            die Impulse für die Umsetzung vielfältiger Maßnahmen der
            Radverkehrsförderung geben sollen.
          </P>
          <P>
            In jedem Praxisbeispiel werden die Kommunen, welche die Maßnahmen
            umgesetzt haben, kurz (mit Größe, Lage, lokalen Herausforderungen)
            beschrieben. Die Maßnahmen und der Umsetzungsprozess werden u. a.
            anhand der angesprochenen Zielgruppen, Einbindung der Bevölkerung,
            Ziele, Kosten, Nutzung von Fördermitteln, Kommunikation und
            Herausforderungen vertiefend dargestellt.
          </P>
          <P>
            Auch wird auf Besonderheiten eingegangen, wie durchgeführte
            Evaluation, Beteiligung, interkommunale Maßnahme, temporäre oder
            Einsteiger*innenmaßnahmen. Über die intelligente Suche kann nach
            verschiedenen Stichpunkten gesucht werden.
          </P>
          <P>
            Relevante Leitfäden, Förderprogramme und weitere Hinweise sind den
            Handlungsfeldern und Maßnahmen zugeordnet.
          </P>
          <div className={planFMarkdownProseClasses}>
            <p>Unter weitere Angebote befindet sich:</p>
            <ul className="ml-2 list-disc pl-2">
              <li>Plan F Handbuch</li>
              <li>Plan F E-Learning</li>
              <li>Plan F Audit</li>
            </ul>
          </div>
          <P>
            Unter Artikel befinden sich ergänzende Informationen und
            Empfehlungen zur kommunalen Radverkehrsförderung sowie Stellen und
            Organisationen für weitere Informationen.
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

export const Head: HeadFC = () => <MetaTags title={title} />;
