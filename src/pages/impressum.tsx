import { MailLink, TelLink } from '~/components/core/links';
import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { H2 } from '~/components/Text';

const ImpressumPage = () => {
  const title = 'Impressum';
  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Content>
        <section className="mt-8">
          <H2>Angaben gemäß § 5 TMG</H2>
          <p>Fair Spaces GmbH</p>
        </section>

        <section className="mt-8">
          <H2>Postanschrift</H2>
          <ul>
            <li>Rollbergstraße 28A</li>
            <li>12053 Berlin</li>
          </ul>
        </section>

        <section className="mt-8">
          <H2>Kontakt</H2>
          <ul>
            <li>
              Telefon: <TelLink>+49 176 8071 2212</TelLink>
            </li>
            <li>
              E-Mail: <MailLink>kontakt@plan-f.info</MailLink> oder{' '}
              <MailLink>kontakt@fair-spaces.de</MailLink>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <H2>Vertreten durch</H2>
          <ul>
            <li>Carolin Kruse</li>
          </ul>
        </section>

        <section className="mt-8">
          <H2>Handelsregister</H2>
          <ul>
            <li>Berlin Charlottenburg</li>
            <li>HRB 225269</li>
          </ul>
        </section>

        <section className="mt-8">
          <H2>Steuernummer</H2>
          <p>37/202/50875</p>
        </section>

        <section className="mb-20 mt-8">
          <H2>Information gemäß § 36 VSBG</H2>
          <p>
            Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die
            alternative Streitbeilegung in Verbrauchersachen) erklärt der
            Betreiber dieser Website:
          </p>
          <p>
            Wir sind weder bereit noch verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>
      </Content>
    </>
  );
};

export default ImpressumPage;
