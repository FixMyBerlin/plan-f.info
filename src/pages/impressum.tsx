import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { MailLink, TelLink } from '~/components/core/links';

const ImpressumPage = () => {
  const title = 'Impressum';
  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section className="prose max-w-none prose-h2:mb-3 prose-h2:mt-6 prose-h2:font-mono prose-h2:text-xl prose-h2:font-normal prose-h2:text-black prose-h2:md:mb-6 prose-h2:md:mt-14 prose-h2:md:text-3xl">
        <Content>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>Fair Spaces GmbH</p>

          <h2>Postanschrift</h2>
          <p>
            <strong>Fair Spaces GmbH</strong>
            <br />
            c/o Impact Hub Berlin
            <br />
            Rollbergstraße 28a
            <br />
            12053 Berlin
            <br />
            E-Mail: <MailLink>kontakt@fair-spaces.de</MailLink>
            <br />
            Telefon: <TelLink>+49 176 8071 2212</TelLink>
          </p>

          <h2>Kontakt</h2>
          <ul>
            <li>
              Telefon: <TelLink>+49 176 8071 2212</TelLink>
            </li>
            <li>
              E-Mail: <MailLink>kontakt@plan-f.info</MailLink> oder{' '}
              <MailLink>kontakt@fair-spaces.de</MailLink>
            </li>
          </ul>

          <h2>Vertreten durch</h2>
          <ul>
            <li>Carolin Kruse</li>
          </ul>

          <h2>Handelsregister</h2>
          <ul>
            <li>Berlin Charlottenburg</li>
            <li>HRB 225269</li>
          </ul>

          <h2>Steuernummer</h2>
          <p>37/202/50875</p>

          <h2>Information gemäß § 36 VSBG</h2>
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
        </Content>
      </Section>
    </>
  );
};

export default ImpressumPage;
