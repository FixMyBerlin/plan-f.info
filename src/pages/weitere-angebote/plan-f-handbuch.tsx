import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const ManualPage = () => {
  const title = 'Plan F Handbuch';
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

export default ManualPage;
