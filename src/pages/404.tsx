import React from 'react';
import { Content, HelmetSeo } from '~/components/Layout';
import { Link } from '~/components/Link';
import { H1, H2 } from '~/components/Text';
import Logo from '~/components/Layout/assets/Logo.svg';

const NotFound: React.FC = () => {
  return (
    <>
      <HelmetSeo noindex />
      <div className="flex h-full flex-col bg-purple-300">
        <div className="bg-green-500 pt-20 pb-12">
          <Content>
            <Link to="/">
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
              Hier kommst du zur <Link to="/">Startseite</Link>
            </div>
          </Content>
        </div>
      </div>
    </>
  );
};

export default NotFound;
