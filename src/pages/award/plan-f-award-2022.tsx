import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const PlanFAwardPage = () => {
  const title = 'Plan F Award 2022';

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

export default PlanFAwardPage;
