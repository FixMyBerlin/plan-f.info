import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const IndexPage = () => {
  const title = 'Alle Artikel';

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

export default IndexPage;
