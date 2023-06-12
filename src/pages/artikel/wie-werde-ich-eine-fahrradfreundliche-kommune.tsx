import clsx from 'clsx';
import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { CardImageAndTextResponsive } from '~/components/Layout/CardImageAndTextResponsive';
import { CardWrapperWissensspeicherPage } from '~/components/Layout/CardWrapperWissensspeicherPage';
import { Section } from '~/components/Layout/Section';
import { CardText } from '~/components/PageExample/CardText';
import { Caption, H2, H3, P } from '~/components/Text';
import { Prose } from '~/components/core/Prose';
import { planfProseClasses } from '~/components/core/articleProseClasses';
import { Link } from '~/components/core/links';
import { wikiPath } from '~/components/utils';

export const query = graphql`
  query TopicTeasers {
    topics: allStrapiTopic(sort: { position: ASC }) {
      nodes {
        slug
        name
        image {
          url
        }
        shortDescription
      }
    }
  }
`;
const planningCardTexts = [
  {
    cardTitle: 'Zielgruppe',
    content: (
      <P>
        Definieren Sie die Zielgruppe und berücksichtigen Sie ihre Bedürfnisse
        und Anforderungen, so haben z. B. Kinder andere Bedürfnisse als ältere
        Personen oder Berufspendler*innen.
      </P>
    ),
  },
  {
    cardTitle: 'Ziele',
    content: (
      <P>
        Es sind messbare Ziele pro Maßnahme zu erarbeiten. Ziele sind z. B.
        Sicherheit, Reduktion von Mobilitätsarmut, Umwelt- und Naturschutz,
        Erhöhung des Radverkehrsanteils und Reduktion des Pkw-Verkehrs.
      </P>
    ),
  },
  {
    cardTitle: 'Budget & Personal',
    content: (
      <P>
        Das Budget ist zu definieren. Zudem ist es notwendig die involvierten
        Ämter, Planungsbehörden und ggf. Interessensgruppen zu koordinieren.
        Eine koordinierte Verwaltungstätigkeit ist notwendig, um einen
        reibungslosen Planungs- und Umsetzungsprozess zu gewährleisten. Hierbei
        sollten klare Verantwortlichkeiten definiert und eine verantwortliche
        Person für die Maßnahmensteuerung benannt werden.
      </P>
    ),
  },
  {
    cardTitle: 'Umsetzungsplan',
    content: (
      <P>
        Dies ist die Umsetzung der Maßnahme selbst, das Produkt am Ende. Hierfür
        braucht es Zeitpläne und Umsetzungsschritte in Verknüpfung mit dem
        verantwortlichen Personal. Mögliche Herausforderungen und Risiken sind
        zu definieren und einzukalkulieren.
      </P>
    ),
  },
  {
    cardTitle: 'Priorisierung',
    content: (
      <P>
        Der Verkehr und Mobilitätssektor ist ein bedeutender Bereich für unser
        Leben in der Stadt und auf dem Land. Dieser steht in Zusammenhang mit
        vielen verschiedenen Bereichen und Aufgaben, z. B. kann die Luftqualität
        durch die Erhöhung des Radverkehrsanteils mit gleichzeitiger Minderung
        von Kfz-Verkehren verbessert werden. In einem Projektplan sollten auch
        diese Effekte berücksichtigt werden. Hierdurch können bessere
        strategische Entscheidungen und Priorisierungen getroffen werden.
      </P>
    ),
  },
  {
    cardTitle: 'Beteiligung',
    content: (
      <P>
        Eine erfolgreiche Umsetzung erfordert häufig eine breite Beteiligung
        aller Akteur*innen. Es ist daher wichtig, die Interessen und Bedürfnisse
        der Bevölkerung (auch von Kindern), Interessensverbände und der lokalen
        Unternehmen zu identifizieren. Hierzu können öffentliche
        Veranstaltungen, Workshops, Arbeitskreise, Online-Foren oder Umfragen
        genutzt werden, um die Meinungen und Wünsche der verschiedenen
        Interessengruppen zu sammeln und zu berücksichtigen (mehr zu
        Beteiligung, s. unten).
      </P>
    ),
  },
  {
    cardTitle: 'Kommunikation',
    content: (
      <P>
        Damit die Maßnahme nach Umsetzung Bekanntheit erfährt und genutzt wird,
        ist es notwendig, diese zu kommunizieren. Entweder nach Umsetzung oder
        auch schon im Prozess. Über Maßnahmen schon im Prozess zu informieren,
        erhöht die Akzeptanz der Maßnahmen, mindert Rückfragen der Bevölkerung
        zum Umsetzungsstand, stärkt das Vertrauen in die Verwaltung und kann
        notwendig sein, wenn im Planungs- und Gestaltungsprozess die Bevölkerung
        beteiligt wird. Hierbei sollten sowohl klassische Werbemaßnahmen wie
        Plakate oder Broschüren, Kommunikation über Social Media als auch
        zielgruppenorientierte Kommunikation an z. B. Schulen oder Unternehmen
        eingesetzt werden.{' '}
        <Link href="/wissensspeicher">
          Maßnahmen auch nachzulesen in unserem Wissensspeicher
        </Link>
        .
      </P>
    ),
  },
  {
    cardTitle: 'Evaluation',
    content: (
      <P>
        Um den Erfolg und die Effektivität der Maßnahme zu messen und zu
        bewerten, ist es wichtig, regelmäßige Evaluierungen durchzuführen.
        Hierzu können beispielsweise Interviews und Umfragen zur Zufriedenheit
        der Nutzenden, Verkehrszählungen, Luft- und Lärmmessungen, Audits
        Sicherheit, Umsetzungsstand, s. auch{' '}
        <Link href="/weitere-angebote/audits">Plan F Audit</Link> genutzt
        werden, um den Fortschritt zu messen und festzustellen, ob weitere
        Anpassungen oder Verbesserungen notwendig sind. Die Art der Evaluation
        hängt von den definierten Zielen ab. In unserem Plan F speicher befinden
        sich gute Praxisbeispiele zu Evaluationsmaßnahmen.
      </P>
    ),
  },
];

const BikeFriendlyArticle: React.FC<PageProps<Queries.TopicTeasersQuery>> = ({
  data: { topics },
}) => {
  const title = 'Wie werde ich eine Fahrradfreundliche Kommune?';
  const basePath = `/${wikiPath}`;

  return (
    <>
      <HelmetSeo title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          <P>
            Eine fahrradfreundliche Kommune ist eine Stadt, Gemeinde oder
            Stadtteil / Bezirk, die sich darauf konzentriert, das Radfahren als
            eine attraktive, sichere und umweltfreundliche Form der Mobilität zu
            fördern. Es gibt auch fahrradfreundliche Bezirke und Stadtteile. In
            einer fahrradfreundlichen Kommune ist es einfach und sicher, mit dem
            Fahrrad zu fahren. Die Kommune setzt sich auch dafür ein, dass das
            Radfahren als eine wichtige und gleichberechtigte Form der Mobilität
            angesehen wird und fördert es aktiv, zum Beispiel durch eine
            vielfältige Radkultur.
          </P>
          <P>
            Es ist daher wichtig, in verschiedenen Handlungsfeldern Maßnahmen
            umzusetzen, um den Radverkehr zu fördern. Es gibt nicht nur eine
            einzelne Lösung, die alle Probleme im Bereich der
            Radverkehrsförderung lösen kann. Vielmehr ist es notwendig,
            verschiedene Handlungsfelder zu betrachten, um ein umfassendes
            Maßnahmenpaket zu schnüren, welches viele Menschen anspricht.
          </P>
        </Content>
      </Section>
      <Section className="bg-purple-300">
        <H2>Die neun Handlungsfelder der Fahrradmobilität</H2>
        <P>
          Entdecken Sie die verschiedenen Handlungsfelder. Dort finden Sie
          Maßnahmen und deren zugehörigen Praxisbeispiele
        </P>
        <CardWrapperWissensspeicherPage className="mt-10">
          {topics &&
            topics.nodes.map((topic) => (
              <CardImageAndTextResponsive
                title={topic.name}
                key={topic.slug}
                link={`${basePath}/${topic.slug}`}
                image={topic.image && topic.image.url}
              >
                {topic.shortDescription && (
                  <Prose markdownHTML={topic.shortDescription} />
                )}
              </CardImageAndTextResponsive>
            ))}
        </CardWrapperWissensspeicherPage>
      </Section>
      <Section>
        <Content>
          <H2>Systematisierung</H2>
          {/* <StaticImage src={''} alt={''} /> */}
          <Caption>Grafik Systematisierung</Caption>
          <H3>Zielformulierung</H3>
          <P>
            Als Erstes sollten klare und messbare Ziele formuliert werden, die
            das Ziel haben, das Radfahren in der Kommune zu fördern. Zum
            Beispiel könnte ein Ziel sein, den Anteil des Fahrradverkehrs am
            Gesamtverkehrsaufkommen zu erhöhen, die Anzahl der
            Fahrradabstellanlagen auszubauen, die Sicherheit für Radfahrende zu
            verbessern oder über Dienstleistungen und Förderprogrammen den
            Zugang zum Fahrrad zu erleitern. Diese Ziele sollten mit den lokalen
            Bedürfnissen und Gegebenheiten im Einklang stehen.
          </P>
          <H3>Radverkehrskonzept</H3>
          <P>
            Ein Radverkehrskonzept ist ein Planungs- und Strategiepapier, das
            sich auf die Förderung des Fahrradverkehrs in einer Stadt oder
            Region konzentriert. Es ist ein umfassender Plan, der sich auf
            verschiedene Aspekte des Radverkehrs bezieht (s. Handlungsfelder der
            Fahrradmobilität).
          </P>
          <P>
            Ein Radverkehrskonzept wird in der Regel von der kommunalen
            Verwaltung oder einem externen Unternehmen in Zusammenarbeit mit
            verschiedenen Interessengruppen erstellt und setzt sich in der Regel
            das Ziel, den Anteil des Radverkehrs am Gesamtverkehr zu erhöhen und
            somit zur Förderung einer nachhaltigen Mobilität beizutragen.
          </P>
          <P>
            Ein gutes Radverkehrskonzept sollte realistische und praktikable
            Ziele setzen, die in Zusammenarbeit mit den Bürger*innen,
            Interessengruppen und der Wirtschaft erreicht werden können (s.
            „Zielformulierung“). Dabei sollten auch die langfristigen
            Entwicklungen in der Stadt- und Verkehrsplanung berücksichtigt
            werden, wie beispielsweise die Entwicklung von neuen Wohngebieten
            oder die Einführung von neuen Verkehrstechnologien.
          </P>
          <H3>Projektplan</H3>
          <P>
            Das Radverkehrskonzept besteht aus vielen verschiedenen Maßnahmen.
            Es ist notwendig für jede Maßnahme oder jedes Maßnahmenbündel einen
            Projektplan anzufertigen, der alle notwendigen Schritte und
            Maßnahmen zur Umsetzung umfasst.
          </P>
          <P>Der Projektplan sollte aus diesen Punkten bestehen:</P>
          <ol className="flex flex-col gap-3">
            {planningCardTexts.map(({ cardTitle, content }) => {
              return <CardText title={cardTitle}>{content}</CardText>;
            })}
          </ol>
          <P>
            Insgesamt erfordert der Weg zu einer fahrradfreundlichen Kommune ein
            ganzheitliches Konzept und eine langfristige Planung. Wenn die
            Kommune diese Schritte befolgt und die Beteiligung und
            Zusammenarbeit aller Interessengruppen fördert, kann sie zu einer
            fahrradfreundlicheren Kommune werden.
          </P>
        </Content>
      </Section>
      <Section className="bg-purple-300">
        <H2>Checkliste für die Planung und Umsetzung von Maßnahmen</H2>
        <P>
          Eine Checkliste für die Maßnahmen zu erstellen hilft, um
          sicherzugehen, dass sie den gewünschten Effekt hat. Nicht alle Punkte
          müssen für Ihre Maßnahme relevant sein.
        </P>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div
            className={clsx('rounded-b-3xl bg-white px-6', planfProseClasses)}
          >
            <p>
              <strong>1. Definition von Zielen der Maßnahme, z. B. </strong>
            </p>
            <ul>
              <li>
                Mobilitätsarmut wird reduziert und gesellschaftliche Teilhabe
                erhöht
              </li>
              <li>
                Menschen mit körperlichen Einschränkungen werden erreicht{' '}
              </li>
              <li>Erhöhung der objektiven Sicherheit (weniger Unfälle) </li>
              <li>Erhöhung der sozialen /subjektiven Sicherheit </li>
              <li>Fahrradnutzung wird praktischer </li>
              <li>Radverkehrsanteil wird erhöht </li>
              <li>Komfort und Fahrspaß werden verbessert</li>
              <li>
                Zielt auf Lebensumbruchphasen ab (Kinder aus dem Haus, Umzug,
                neue Arbeitsstelle, von Grundschule zu weiterführende Schule)
              </li>
              <li>
                Fahrrad steigt in der Wahrnehmung (Statussymbol / hipp /
                Fahrradkultur)
              </li>
            </ul>
          </div>
          <div
            className={clsx('rounded-b-3xl bg-white px-6', planfProseClasses)}
          >
            <p>
              <strong>
                2. Ermittlung des Aufwands / Bereitstellung der Mittel:
              </strong>
            </p>
            <ul>
              <li>Personelle Mittel sind verfügbar</li>
              <li>Erhöhung der objektiven Sicherheit (weniger Unfälle)</li>
              <li>Einsatz von Fördermitteln prüfen</li>
              <li>Zeitaufwand </li>
              <li>Ggf. Durchführung Kosten-Nutzen Analyse</li>
              <li>Radverkehrsanteil wird erhöht </li>
            </ul>
          </div>
          <div
            className={clsx('rounded-b-3xl bg-white px-6', planfProseClasses)}
          >
            <p>
              <strong>3. Integration von Partizipation / Vernetzung:</strong>
            </p>
            <ul>
              <li> Interdisziplinäre Gestaltung</li>
              <li>
                Einbindung / Beteiligung verschiedener Akteur*innen im
                Gestaltungsprozess
              </li>
              <li>
                Maßnahme verfolgt einen partizipativen,
                geschlechter-paritätischen und inklusiven Ansatz
              </li>
            </ul>
          </div>
          <div
            className={clsx('rounded-b-3xl bg-white px-6', planfProseClasses)}
          >
            <p>
              <strong>
                4. Maßnahme trägt zur Lösung anderer kommunalen
                Problemstellungen bei (indirekt)
              </strong>
            </p>
            <ul>
              <li>
                Klimaresiliente Städte (z. B. mehr Grünflächen, geringer
                Versiegelungsgrad, effiziente Flächennutzung)
              </li>
              <li>gerechterer Mobilitätszugang</li>
              <li>Förderung des Umweltverbundes</li>
              <li>Reduzierung des CO2 Ausstoßes</li>
              <li>Verbesserung der Luftqualität</li>
              <li>Verminderung der Lärmbelastung</li>
              <li>Verbesserung der Aufenthaltsqualität</li>
            </ul>
          </div>
          <div
            className={clsx('rounded-b-3xl bg-white px-6', planfProseClasses)}
          >
            <p>
              <strong>
                5. Evaluation / Formulierung von Indikatoren und messbaren
                Zielen
              </strong>
            </p>
          </div>
          <div
            className={clsx('rounded-b-3xl bg-white px-6', planfProseClasses)}
          >
            <p>
              <strong>6. Übertragbarkeit</strong>
            </p>
            <ul>
              <li>Wiederholungen sind möglich</li>
              <li>
                Maßnahme ist in anderen Stadtteilen (innerstädtisch) anwendbar
              </li>
              <li>Maßnahme ist auf andere deutsche Städte übertragbar</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BikeFriendlyArticle;
