import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { Link } from '~/components/core/links';

const MiscIndexPage = () => {
  const title = 'Weitere Angebote';
  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={articleProseClasses}>
        <Content>
          <ul>
            <li>
              <Link href="/weitere-angebote/handbuch">Plan F Handbuch</Link>
            </li>
            <li>
              <Link href="/weitere-angebote/e-learning">Plan F E-Learning</Link>
            </li>
            <li>
              <Link href="/weitere-angebote/audits">Plan F Audit</Link>
            </li>
          </ul>
        </Content>
      </Section>
    </>
  );
};

export default MiscIndexPage;
