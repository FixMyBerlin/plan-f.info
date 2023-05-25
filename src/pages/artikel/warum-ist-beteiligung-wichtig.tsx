import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

const ParticipationArticle = () => {
  const title = 'Warum ist Beteiligung wichtig?';

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

export default ParticipationArticle;
