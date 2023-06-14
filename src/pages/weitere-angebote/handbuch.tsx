import { StaticImage } from 'gatsby-plugin-image';
import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { ImageWithCopyright } from '~/components/Layout/ImageWithCopyright';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { MailLink } from '~/components/core/links';

const ManualPage = () => {
  return (
    <>
      <HelmetSeo title="Plan F Handbuch" />
      <Hero bgColor="bg-green-500" title="Plan F Handbuch" />
      <Section className={articleProseClasses}>
        <Content>
          <p>
            Im Handbuch sind die Inhalte des Wissensspeichers und weitere
            Angebote komprimiert und übersichtlich zusammengefasst.
          </p>
          <p>
            Die ersten 200 Exemplare können kostenlos bestellt werden. Hiernach
            kostet es 25 € / Exemplar.
          </p>
          <MailLink
            className="mt-4"
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
            Plan F Handbuch bestellen
          </MailLink>
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
