import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { Link, MailLink } from '~/components/core/links';

const ELearningPage = () => {
  const title = 'E-Learning';
  return (
    <>
      <HelmetSeo title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section className={articleProseClasses}>
        <Content>
          <p>
            Der E-Learning Kurs vermittelt die Inhalte von Plan F in einer
            interaktiven Form.
          </p>
          <p>Folgende Themen werden vermittelt:</p>
          <ul>
            <li>Systematisierung</li>
            <li>Fahrradfreundliche Kommune: Definition & Zielformulierung</li>
            <li>Akteur*innen & Beteiligung</li>
            <li>Budget & Vorbereitung der Maßnahmen</li>
            <li>Praxisbeispiele</li>
          </ul>
          <p>
            Die ersten 200 Teilnehmenden können kostenlos an dem Kurs
            teilnehmen. Hiernach kostet der Kurs xx €. Der Kursraum wird bis
            Ende 2023 offen sein.
          </p>
          <p>
            Hier geht es zu der Kursplattform{' '}
            <Link href="https://edu.fair-spaces.de/" blank>
              edu.fair-spaces.de
            </Link>
          </p>
          <p>
            Für Rückfragen bitte <MailLink>kontakt@plan-f.info</MailLink>{' '}
            kontaktieren.
          </p>
          <h2>Präsenztermine</h2>
          <p>
            Im Rahmen von neun einstündigen Präsenzterminen (1/Handlungsfeld)
            werden die Handlungsfelder und jeweils zwei Praxisbeispiele noch
            einmal gesondert vorgestellt. Die Praxisbeispiele werden von den
            Kommunen selbst vorgetragen. Anschließend bleibt noch ausreichend
            Zeit für Fragen.{' '}
          </p>
          <p>
            <strong>Die Termine sind:</strong>
          </p>
          <ul>
            <li>–</li>
          </ul>
          <p>
            Bitte vorher über{' '}
            <MailLink subject="Webinar und Datum des Termins">
              kontakt@plan-f.info
            </MailLink>{' '}
            anmelden. Im Betreff bitte schreiben “Webinar und Datum des
            Termins”.
          </p>
        </Content>
      </Section>
    </>
  );
};

export default ELearningPage;
