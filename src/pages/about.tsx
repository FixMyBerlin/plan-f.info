import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const AboutPage = () => {
  const title = 'Über Plan F';
  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>d</Content>
      </Section>
    </>
  );
};

export default AboutPage;
