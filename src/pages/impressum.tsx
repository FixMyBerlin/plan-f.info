import React from 'react';
import { Layout, Content, Hero } from '~/components/Layout';
import { H1, H2 } from '~/components/Text';

const ImpressumPage = () => {
  return (
    <Layout>
      <Hero title="Impressum" />
      <Content>
        <H1>Impressum</H1>
        <H2>Angaben gemäß § 5 TMG:</H2>
      </Content>
    </Layout>
  );
};

export default ImpressumPage;
