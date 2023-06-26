import { Content, MetaTags, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { CardText } from '~/components/Layout/CardText';
import { H3, P } from '~/components/Text';
import { HeadFC } from 'gatsby';

const title =
  'Welche Motive für die Nutzung bzw. Nicht-Nutzung des Fahrrads gibt es?';

const motivationArticle = () => {
  const motivationCardTexts = [
    {
      cardTitle: 'Praktisch',
      content:
        'Das Fahrrad ist für viele Menschen ein praktisches Verkehrsmittel. Auf Strecken bis ca. fünf Kilometer ist das Fahrrad oftmals das schnellste Verkehrsmittel, zugleich bietet es hohe Flexibilität und ist kostengünstig.',
    },
    {
      cardTitle: 'Spaß/Freizeit',
      content:
        'Für viele Menschen ist das Fahrradfahren ein Vergnügen. Manche nutzen es nur oder vorrangig zu Freizeitzwecken.',
    },
    {
      cardTitle: 'Gesundheit',
      content:
        'Fahrradfahren ist eine großartige Möglichkeit, körperlich aktiv zu sein und einen gesunden Lebensstil zu fördern. Viele Menschen nutzen das Fahrrad als tägliche Bewegungsform, um ihre Gesundheit und Fitness zu verbessern.',
    },
    {
      cardTitle: 'Nachhaltigkeit',
      content:
        'Fahrradfahren ist eine klimaschonende Mobilitätsform und kann dazu beitragen, die Umweltbelastung durch den Verkehr zu reduzieren. Viele Menschen nutzen das Fahrrad, um ihren ökologischen Fußabdruck zu minimieren und einen Beitrag zum Umweltschutz zu leisten.',
    },
    {
      cardTitle: 'Statussymbol',
      content:
        'Insbesondere in den großen Metropolen hat sich das Fahrrad zu einem Statussymbol entwickelt und das Radfahren wird in einigen Milieus als hipp/cool angesehen.',
    },
  ];
  const negativeMotivationCardTexts = [
    {
      cardTitle: 'Anstrengung und fehlender Komfort:',
      content:
        'Das Radfahren wird von einigen Personen als unkomfortabel und anstrengend empfunden, z. B. wenn es besondere topographische Herausforderungen gibt.',
    },
    {
      cardTitle: 'Soziales Umfeld',
      content:
        'Das soziale Umfeld hat einen großen Einfluss auf die Fahrradnutzung. Es kann motivieren, wenn viele Personen im sozialen Umfeld Fahrrad fahren, aber auch von der Nutzung abhalten, wenn das Fahrrad von sozialen Kontakten nicht als Alltagsverkehrsmittel genutzt wird. Kinder, deren Eltern nicht Rad fahren, fahren später selbst selten mit dem Rad.',
    },
    {
      cardTitle: 'Sicherheitsbedenken',
      content:
        'Viele Menschen fühlen sich unsicher auf dem Fahrrad, insbesondere in städtischen Gebieten, wo der Verkehr dicht und chaotisch sein kann. Wenn gute Radwege fehlen, auf denen Menschen sich sicher fühlen, kann dies dazu führen, dass Menschen das Fahrrad meiden.',
    },
    {
      cardTitle: 'Kein Fahrrad vorhanden/nutzbar',
      content:
        'Manche Menschen besitzen kein Fahrrad, das Fahrrad ist nicht funktionsfähig oder z. B. im Keller nur schwer zu erreichen.',
    },
    {
      cardTitle: 'Fehlende Kenntnisse',
      content:
        'Es gibt Menschen, die nie gelernt haben, mit dem Fahrrad zu fahren, oder seit langer Zeit nicht mehr Rad gefahren sind.',
    },
    {
      cardTitle: 'Körperliche Einschränkungen',
      content:
        'Für manche Menschen kann das Fahrradfahren auch aufgrund von körperlichen Einschränkungen wie Rückenproblemen oder Gelenkschmerzen unangenehm sein.',
    },
    {
      cardTitle: 'Unpraktisch',
      content:
        'Die Strecke, die zurückgelegt werden muss, ist zu weit. Auch das Transportieren von schweren oder sperrigen Gegenständen kann unpraktisch sein.',
    },
    {
      cardTitle: 'Wetterbedingungen',
      content:
        'Regen, Schnee und extreme Hitze können dazu führen, dass das Fahrrad als unpraktikables Verkehrsmittel angesehen wird. Wenn keine geeignete Kleidung oder Ausrüstung zur Verfügung steht, kann das Fahrradfahren unangenehm und unpraktisch sein.',
    },
    {
      cardTitle: 'Autobesitz',
      content:
        'Die Verfügbarkeit eines Pkws kann von der Fahrradnutzung abhalten.',
    },
    {
      cardTitle: 'Stress',
      content:
        'Manche Personen empfinden das Radfahren insbesondere im städtischen Verkehr als stressig.',
    },
    {
      cardTitle: 'Fehlende Infrastrukturen und Angebote',
      content:
        'Nicht nur Lücken im Fahrradnetz können Menschen von der Nutzung des Fahrrads abhalten. Wenn z. B. gut zugängliche, sichere Abstellmöglichkeiten oder Dusch- und Umkleideeinrichtungen am Arbeitsplatz fehlen, kann es schwierig sein, das Fahrrad als Alltagsverkehrsmittel zu nutzen.',
    },
  ];

  return (
    <>
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          <P>
            In der Radverkehrsförderung ist eine zielgruppenspezifische
            Ansprache sinnvoll, um möglichst viele Personen erreichen zu können.
            Personen haben verschiedene Motive, weshalb sie das Fahrrad als
            Verkehrsmittel nutzen oder auch nicht nutzen. Sie gilt es zu
            verstehen und Treiber entsprechend zu fördern sowie Hindernissen
            entgegenzuwirken.
          </P>
          <H3>Motive für die Nutzung des Fahrrads können sein:</H3>

          <div className="flex flex-col gap-6">
            {motivationCardTexts.map(({ cardTitle, content }) => (
              <CardText title={cardTitle}>
                <P>{content}</P>
              </CardText>
            ))}
          </div>

          <H3>
            Motive, weshalb Personen das Fahrrad nicht als Verkehrsmittel im
            Alltag nutzen, können sein:
          </H3>

          <div className="flex flex-col gap-6">
            {negativeMotivationCardTexts.map(({ cardTitle, content }) => (
              <CardText title={cardTitle}>
                <P>{content}</P>
              </CardText>
            ))}
          </div>
          <P>
            Die Radverkehrsförderung an die Motive der Radnutzung bzw.
            Nicht-Nutzung anzupassen, ist zielführend. Kommunen sollen
            insbesondere Maßnahmen treffen, welche auf die Motive der
            Nicht-Nutzung abzielen, um mehr Menschen das Radfahren zu
            ermöglichen.
          </P>
        </Content>
      </Section>
    </>
  );
};

export default motivationArticle;

export const Head: HeadFC = () => <MetaTags title={title} />;
