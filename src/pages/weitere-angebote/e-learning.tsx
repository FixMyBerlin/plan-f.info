import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { LinkButtonWithArrow } from '~/components/PageTopic/LinkButtonWithArrow';
import { articleProseClasses } from '~/components/core/articleProseClasses';
import { MailLink } from '~/components/core/links';

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
            teilnehmen. Hiernach kostet der Kurs 50 €. Der Kursraum wird bis
            Ende 2023 offen sein.
          </p>
          <p>Hier geht es zu der Kursplattform </p>
          <LinkButtonWithArrow
            button="black"
            href="https://edu.fair-spaces.de/"
            blank
          >
            edu.fair-spaces.de
          </LinkButtonWithArrow>
          <p>
            Für Rückfragen bitte <MailLink>kontakt@plan-f.info</MailLink>{' '}
            kontaktieren.
          </p>
          <h2>Online-Termine</h2>
          <p>
            Im Rahmen von neun einstündigen Online-Terminen werden die
            Handlungsfelder und jeweils zwei Praxisbeispiele noch einmal
            gesondert vorgestellt. Es gibt jeweils ein Termin pro Handlungsfeld.
            Die Praxisbeispiele werden von den Kommunen selbst vorgetragen.
            Anschließend bleibt noch ausreichend Zeit für Fragen.
          </p>
          <p>
            Die Online-Termine finden ab Anfang Juli bis Ende des Jahres statt.
            Es gibt eine Sommerpause. Aktuelle Informationen sowie konkrete
            Termine werden in unserem Newsletter und auf der Kursplattform
            veröffentlicht.{' '}
          </p>
          <LinkButtonWithArrow
            button="black"
            href="https://21c51c7f.sibforms.com/serve/MUIEAGplIkaHl15aR0t77TNjvH7cDv4l8zcUfOrncK7K6guRKNllBJWifyt4jlFptCKiYzTo0bG-8Yki2vBvV_zEa-iaSrhDdFkL672BPNxBpijMD8iCnMJOFOiTmHDYSg_g2EuFAd2YLTRe5BTKYvjiNkqDQZT4SHRCgemWbXl8C60kIzzwmBd4uYzO65v3DYJvlmpHqLaRyVPz"
          >
            Link zum Newsletter
          </LinkButtonWithArrow>
          <p>
            Bitte vorher über{' '}
            <MailLink subject="Webinar und Datum des Termins">
              kontakt@plan-f.info
            </MailLink>{' '}
            anmelden mit Betreff “Online Termin und Datum des Termins”.
          </p>
        </Content>
      </Section>
    </>
  );
};

export default ELearningPage;
