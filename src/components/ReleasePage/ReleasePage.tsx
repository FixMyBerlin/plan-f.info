import { PageProps } from 'gatsby';
import React from 'react';
import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';

import { planfProseClasses } from '~/components/core/articleProseClasses';

const ReleasePage: React.FC<PageProps> = ({ pageContext }) => {
  const title = 'Plan F Release Page';
  const { GITHUB_ACTION_URL, GITHUB_TOKEN } = pageContext;
  function triggerBuild() {
    fetch(GITHUB_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
        Authorization: GITHUB_TOKEN,
      },
      body: JSON.stringify({ ref: 'main' }), // body data type must match "Content-Type" header
    });
  }

  return (
    <>
      <HelmetSeo title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={planfProseClasses}>
        <Content>
          <p>release info text:</p>
          <button
            className="shadow-r bg-pruple-700 rounded-br-lg rounded-tr-lg py-10"
            type="button"
            onClick={triggerBuild}
          >
            Inhalte Updaten
          </button>
        </Content>
      </Section>
    </>
  );
};

export default ReleasePage;
