import { HeadFC } from 'gatsby';
import React from 'react';
import { Content, MetaTags } from '~/components/Layout';
import Logo from '~/components/Layout/assets/Logo.svg';
import { H1, H2 } from '~/components/Text/Headings';
import { Link } from '~/components/core/links/Link';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-full flex-col bg-purple-300">
      <div className="bg-green-500 pb-12 pt-20">
        <Content>
          <Link href="/">
            <Logo />
          </Link>
          <H2 className="!font-mono">404</H2>
        </Content>
      </div>
      <div className="flex-grow  py-16">
        <Content>
          <H1 className="text-black">
            Diese Seite gibt es leider nicht (mehr)
          </H1>
          <div className="mt-10">
            Hier kommst du zur <Link href="/">Startseite</Link>
          </div>
        </Content>
      </div>
    </div>
  );
};

export default NotFound;

export const Head: HeadFC = () => (
  <MetaTags noindex title="Seite nicht gefunden" />
);
