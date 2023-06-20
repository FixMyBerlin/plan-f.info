import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { MailLink } from '~/components/core/links';

const title = 'Plan F Audit';

const AuditsPage = () => {
  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={articleProseClasses}>
        <Content>
          <p>
            Im Plan F Audit wird der derzeitige Stand Ihrer Aktivitäten in der
            Radverkehrsförderung anhand der Plan F Systematisierung ermittelt
            und weitere Maßnahmen erarbeitet und diskutiert.
          </p>
          <p>
            Durch das Plan F Audit entsteht ein deutlicher Mehrwert für alle
            Beteiligten - Ihre Kommune erhält innovative und fachliche
            Unterstützung und wird so in kurzer Zeit (noch) fahrradfreundlicher.
            Häufig arbeiten wir mit Studierenden zusammen, die wiederum aus der
            kommunalen Praxis lernen.
          </p>
          <p>
            Das Plan F Audit ist angelehnt an das NRVP-Projekt FreshBrains.
            Studierende aus Deutschland und den Niederlanden haben im Rahmen
            dieses Projekts bereits in Kassel, Chemnitz, Mönchengladbach,
            Wuppertal, Bonn, und Dortmund ein Fahrradaudit durchgeführt.
            Weiterführende Informationen zu dem Projekt FreshBrains finden Sie
            hier.
          </p>
          <p>
            Haben Sie auch Interesse an einem Plan F Audit bei sich in der
            Kommune? Dann sprechen Sie uns an unter:{' '}
            <MailLink>kontakt@plan-f.info</MailLink>.
          </p>
          <ImageWithCopyright
            className="mt-8"
            copyright="Präsentation Plan F Audit in Wallmerod, Urheberin: Carolin Kruse"
          >
            <StaticImage
              src="./../../components/WeitereAngebotePages/assets/planf-audit.jpg"
              alt="Audit: Carolin Kruse"
            />
          </ImageWithCopyright>
        </Content>
      </Section>
    </>
  );
};

export default AuditsPage;

export const Head: HeadFC = () => <MetaTags title={title} />;
