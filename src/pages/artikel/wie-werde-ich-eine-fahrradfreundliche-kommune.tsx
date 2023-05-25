import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const BikeFriendlyArticle = () => {
  const title = 'Wie werde ich eine Fahrradfreundliche Kommune?';

  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>s</Content>
      </Section>
    </>
  );
};

export default BikeFriendlyArticle;
