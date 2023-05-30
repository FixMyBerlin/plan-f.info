import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const PlanFCheckPage = () => {
  const title = 'Plan F Check';
  return (
    <>
      <HelmetSeo title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>d</Content>
      </Section>
    </>
  );
};

export default PlanFCheckPage;
