import { HeadFC, PageProps, navigate } from 'gatsby';
import { useEffect } from 'react';
import { Content, MetaTags, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';

const title = 'Fahrradcheck';

const FahrradcheckPage: React.FC<PageProps> = ({ params }) => {
  const { result } = params;
  if (result.length !== 20) {
    useEffect(() => {
      navigate('/404', { replace: true });
    });
  }
  const answers: number[] = result.split('').map((x) => parseInt(x, 10));
  return (
    <>
      <Hero bgColor="bg-green-500" title={result} />
      <Section className={articleProseClasses}>
        <Content>
          <h2>Plan-f Fahrradcheck</h2>
          <p>Blabla</p>
        </Content>
      </Section>
    </>
  );
};

export default FahrradcheckPage;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;
