import { PageProps, HeadFC } from 'gatsby';
import React from 'react';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

import { planfProseClasses } from '~/components/core/articleProseClasses';

const title = 'Plan F Release Page';

const ReleasePage: React.FC<PageProps> = ({ pageContext }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { GH_ACTION_URL, GH_TOKEN } = pageContext;
  function triggerBuild() {
    fetch(GH_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GH_TOKEN}`,
      },
      body: JSON.stringify({ ref: 'main' }),
    });
  }

  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={planfProseClasses}>
        <Content>
          <p>Click the button bellow to update the sites new content</p>
          <button
            className="h-20 w-40 rounded-xl bg-purple-300 font-bold text-white shadow"
            type="button"
            onClick={triggerBuild}
          >
            Update Content
          </button>
        </Content>
      </Section>
    </>
  );
};

export default ReleasePage;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;
