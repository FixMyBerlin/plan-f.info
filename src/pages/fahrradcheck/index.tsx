import { HeadFC } from 'gatsby';
import { Content, MetaTags, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';

const title = 'Fahrradcheck-Intro';

const FahrradcheckPage = () => {
  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={articleProseClasses}>
        <Content>
          <h2>Willkommen beim Plan F Check</h2>
          <p>Blabla</p>
        </Content>
      </Section>
    </>
  );
};

export default FahrradcheckPage;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;
