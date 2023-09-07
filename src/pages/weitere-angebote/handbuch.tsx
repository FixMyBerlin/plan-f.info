import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Content, MetaTags, Hero } from '~/components/Layout';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { Link, MailLink } from '~/components/core/links';
import manualPdf from './PlanF-Handbuch_2023.pdf';

const title = 'Plan F Handbuch';

const ManualPage = () => {
  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={articleProseClasses}>
        <Content>
          <p>
            Im Handbuch sind die Inhalte des Wissensspeichers und weitere
            Angebote komprimiert und übersichtlich zusammengefasst.
          </p>
          <p>
            Das Handbuch kann als Hardcopy bestellt oder als PDF heruntergeladen
            werden.
          </p>
          <p>
            Die ersten 200 gedruckten Exemplare können kostenlos bestellt
            werden. Hiernach kostet es 25 € / Exemplar.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 items-start">
            <MailLink
              button
              mailto="kontakt@plan-f.info"
              subject="Bestellung Handbuch"
              body={`Vorname, Name
            Adresse
            Gewünschte Anzahl
            optional: E-Mail Adresse und Telefonnummer für Rückfragen
            `}
              type="button"
            >
              Plan F Handbuch (Hardcopy) bestellen
            </MailLink>
            <Link button href={manualPdf}>
              PDF herunterladen
            </Link>
          </div>
          <ImageWithCopyright copyright="Plan F Handbuch">
            <StaticImage
              src="./../../components/WeitereAngebotePages/assets/MockUp_Handbuch.jpg"
              className="mt-12 w-full overflow-hidden"
              alt="Plan F Handbuch"
            />
          </ImageWithCopyright>
        </Content>
      </Section>
    </>
  );
};

export default ManualPage;

export const Head: HeadFC = () => <MetaTags title={title} />;
