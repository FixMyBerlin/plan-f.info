import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { Link } from '~/components/core/links';

const ManualPage = () => {
  const title = 'Plan F Handbuch';
  return (
    <>
      <HelmetSeo title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={articleProseClasses}>
        <Content>
          <p>
            Im Handbuch sind die Inhalte des Wissensspeichers und weitere
            Angebote komprimiert und übersichtlich zusammengefasst.
          </p>
          <p>
            <Link button="black" href="#TODO">
              Handbuch als PDF downloaden
            </Link>
          </p>
          <p>
            Printversion: Die ersten 200 Exemplare können kostenlos bestellt
            werden. Hiernach kostet es xx € / Exemplar. Nutzen Sie dafür das
            Formular.
          </p>
        </Content>
      </Section>
    </>
  );
};

export default ManualPage;
