import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { HeadFC } from 'gatsby';
import { Content, Hero, MetaTags } from '~/components/Layout';
import { LinkButtonWithArrowBlack } from '~/components/Layout/LinkButtonWithArrowBlack';
import { Section } from '~/components/Layout/Section';
import { H1, H2, H3, P } from '~/components/Text';
import { Link } from '~/components/core/links';

const title = 'Plan F Check';

const FahrradcheckPage = () => {
  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section className="mb-10">
        <Content>
          <H1 className="font-mono pt-8 md:pt-16">
            Willkommen beim Plan F Check
          </H1>
          <P>
            Herzlich willkommen beim Plan F Check! Der Plan F Check ist eine
            Selbstevaluation des Status quo der Radverkehrsförderung in Ihrer
            Kommune. Um den Plan F Check durchzuführen, müssen Sie 21 Fragen zum
            Radverkehr in Ihrer Kommune beantworten. Für die Bearbeitung
            benötigen Sie durchschnittlich fünf Minuten. Im Anschluss erhalten
            Sie passgenaue Handlungsempfehlungen, was Sie in Ihrer Kommune
            gezielt zur Förderung des Radverkehrs tun können.
          </P>
          <LinkButtonWithArrowBlack
            className="mb-10"
            href="/plan-f-check/fragebogen"
          >
            Direkt zum Plan F Check
          </LinkButtonWithArrowBlack>

          <H3>Was ist das Ziel? </H3>
          <P>
            Unser Ziel ist es, Kommunen dabei zu unterstützen,
            fahrradfreundlicher zu werden. Mit der Durchführung des Plan F
            Checks erhalten Sie eine Einschätzung des aktuellen Status quo der
            Radverkehrsförderung in Ihrer Kommune und erfahren, welche Maßnahmen
            speziell für Ihre Kommune geeignet sind. Wir möchten Sie dabei
            unterstützen, zukunftsorientierte, effektive und effiziente
            Entscheidungen zu treffen, um die Fahrradmobilität zu fördern und
            die Lebensqualität für Ihre Bürger*innen zu verbessern. Die
            Förderung des Radverkehrs ist eine gemeinsame Kraftanstrengung und
            wir sind fest entschlossen, Ihnen dabei zu helfen. Der Plan F Check
            ist keineswegs ein Alleingang unsererseits. Bei der Entwicklung des
            Plan F Checks haben wir eng mit unserem Arbeitskreis (Expert*innen
            aus der Verwaltung, Verbänden und Wissenschaft) zusammengearbeitet.
          </P>

          <div className="mb-16">
            <P className="font-bold text-black mb-1.5">Datenschutzhinweise</P>
            <P className="text-xs md:text-xs">
              Die Teilnahme an dieser Umfrage ist ohne die Nennung Ihres Namens
              oder Ihrer Kommune möglich. Eine Registrierung ist für die
              Teilnahme nicht erforderlich. Auch bei dieser Selbstevaluation
              haben Sie gemäß Datenschutz gegenüber den Informationsträger*innen
              das Recht auf Auskunft sowie Löschung Ihrer personenbezogenen
              Daten. Sie können diese Einwilligungserklärung jederzeit
              widerrufen. Senden Sie dazu eine E-Mail an kontakt@fair-spaces.de.
              Nach erfolgtem Widerruf werden Ihre Daten gelöscht und
              unzugänglich aufbewahrt.
            </P>
          </div>

          <H3>
            Möchten Sie sich erst einmal darüber informieren, was eine
            fahrradfreundliche Kommune ausmacht? Dann lesen Sie unseren Artikel
            hier:
          </H3>
          <Link
            className="flex pr-5"
            href="/artikel/wie-werde-ich-eine-fahrradfreundliche-kommune"
          >
            <ArrowUpRightIcon className="mr-2 h-6 w-6 flex-shrink-0" />
            <span>Artikel: Wie werde ich eine Fahrradfreundliche Kommune?</span>
          </Link>
        </Content>
      </Section>
      <Section className="bg-purple-300 rounded-b-none">
        <Content>
          <H2 className="!mt-0">Bereit, den Plan F Check zu starten?</H2>
          <P>
            {`Klicken Sie auf 'Plan F Check starten', um direkt mit dem Plan F
            Check zu beginnen.`}
          </P>
          <LinkButtonWithArrowBlack href="/plan-f-check/fragebogen">
            Plan F Check starten
          </LinkButtonWithArrowBlack>
        </Content>
      </Section>
    </>
  );
};

export default FahrradcheckPage;

export const Head: HeadFC = () => <MetaTags noindex title={title} />;
