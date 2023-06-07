import { StaticImage } from 'gatsby-plugin-image';
import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { MailLink } from '~/components/core/links';

const AuditsPage = () => {
  const title = 'Plan F Audit';
  return (
    <>
      <HelmetSeo title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={articleProseClasses}>
        <Content>
          <p>
            Durch das Plan F Audit entsteht ein deutlicher Mehrwert für alle
            Beteiligten - Ihre Kommune erhält innovative und fachliche
            Unterstützung und wird so in kurzer Zeit (noch) fahrradfreundlicher.
            Die Studierenden wiederum lernen aus der kommunalen Praxis und
            erproben gleichzeitig die Anwendung der Systematisierung von Plan F
            - die besten Voraussetzungen also für einen gemeinsamen neuen Weg
            der kommunalen Radverkehrsförderung.
          </p>
          <p>
            Das Plan F Audit ist angelehnt an das NRVP-Projekt FreshBrains.
            Studierende aus Deutschland und den Niederlanden haben im Rahmen
            dieses Projekts bereits in Kassel, Chemnitz, Mönchengladbach,
            Wuppertal, Bonn, und Dortmund ein Fahrradaudit durchgeführt.
            Weiterführende Informationen zu dem Projekt finden Sie hier.
          </p>
          <p>
            Haben Sie auch Interesse an einem solchen Audit bei sich in der
            Kommune? Dann sprechen Sie uns an unter{' '}
            <MailLink>kontakt@plan-f.info</MailLink>.
          </p>
          <ImageWithCopyright
            className="mt-8"
            copyright="Präsentation Plan F Audit in Wallmerod, Urheberin: Carolin Kruse"
          >
            <StaticImage
              src="./../../components/WeitereAngebote/assets/planf-audit.jpg"
              alt="Audit: Carolin Kruse"
            />
          </ImageWithCopyright>
        </Content>
      </Section>
    </>
  );
};

export default AuditsPage;
