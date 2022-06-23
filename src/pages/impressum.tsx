import React from 'react';
import { Layout, Content, Hero } from '~/components/Layout';
import { H2 } from '~/components/Text';
import { TextLink } from '~/components/Link';

const ImpressumPage = () => {
  return (
    <Layout>
      <Hero title="Impressum" />
      <Content>
        {/* <H1>Impressum</H1> */}
        <div className="mt-8">
          <H2>Angaben gemäß § 5 TMG:</H2>
          <p className="mt-2">AEM Accessible Equitable Mobility GmbH</p>
        </div>
        <div className="mt-8">
          <H2>Postanschrift:</H2>
          <ul className="mt-2">
            <li>Lohmühlenstraße 65</li>
            <li>12435 Berlin</li>
            <li>c/o Factory Berlin</li>
          </ul>
        </div>
        <div className="mt-8">
          <H2>Kontakt:</H2>
          <ul className="mt-2">
            <li>Telefon: (+49) (0) 176 8071 2212</li>
            <li>
              E-Mail:{' '}
              <TextLink external to="mailto:kontakt@plan-f.info">
                kontakt@plan-f.info
              </TextLink>{' '}
              oder{' '}
              <TextLink external to="mailto:contact@aem-institute.de">
                contact@aem-institute.de
              </TextLink>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <H2>Vertreten durch:</H2>
          <ul className="mt-2">
            <li>Ines Kawgan-Kagan </li>
            <li>Carolin Kruse</li>
          </ul>
        </div>
        <div className="mt-8">
          <H2>Handelsregister</H2>
          <ul className="mt-2">
            <li>Berlin Charlottenburg</li>
            <li>HRB 225269</li>
          </ul>
        </div>
        <div className="mt-8">
          <H2>Steuernummer</H2>
          <p className="mt-2">37/202/50875</p>
        </div>
        <div className="mt-8 mb-20">
          <H2>Information gemäß § 36 VSBG</H2>
          <p className="mt-2">
            Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die
            alternative Streitbeilegung in Verbrauchersachen) erklärt der
            Betreiber dieser Website:
          </p>
          <p className="mt-2">
            Wir sind weder bereit noch verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default ImpressumPage;
