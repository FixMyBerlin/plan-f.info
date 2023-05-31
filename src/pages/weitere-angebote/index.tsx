import clsx from 'clsx';
import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { articleProseClasses } from '~/components/core/articleProseClasses';

const MiscIndexPage = () => {
  const title = 'Weitere Angebote';
  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={clsx(articleProseClasses, 'prose-ul:list-none')}>
        <Content>
          <ul>
            <li>
              <LinkButtonWithArrow
                button="black"
                href="/weitere-angebote/handbuch"
              >
                Plan F Handbuch
              </LinkButtonWithArrow>
            </li>
            <li>
              <LinkButtonWithArrow
                button="black"
                href="/weitere-angebote/e-learning"
              >
                Plan F E-Learning
              </LinkButtonWithArrow>
            </li>
            <li>
              <LinkButtonWithArrow
                button="black"
                href="/weitere-angebote/audits"
              >
                Plan F Audit
              </LinkButtonWithArrow>
            </li>
          </ul>
        </Content>
      </Section>
    </>
  );
};

export default MiscIndexPage;
