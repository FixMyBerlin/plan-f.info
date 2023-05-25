import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const AuditsPage = () => {
  const title = 'Audits';
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

export default AuditsPage;
