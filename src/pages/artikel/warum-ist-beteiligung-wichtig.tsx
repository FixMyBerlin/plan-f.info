import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { CardText } from '~/components/PageExample/CardText';
import { P } from '~/components/Text';

const ParticipationArticle = () => {
  const title = 'Warum ist Beteiligung wichtig?';

  const participationCardTexts = [
    {
      cardTitle: 'Berücksichtigung von Bedürfnissen und Wünschen',
      content:
        'Wenn Menschen, die das Fahrrad nutzen oder nutzen möchten, in den Planungsprozess einbezogen werden, können ihre Bedürfnisse und Wünsche besser berücksichtigt werden. Dies kann dazu beitragen, dass die Infrastruktur und andere Maßnahmen zur Förderung des Radverkehrs effektiver und zielgerichteter gestaltet werden.',
    },
    {
      cardTitle: 'Akzeptanz und Unterstützung',
      content:
        'Wenn Menschen in den Planungsprozess einbezogen werden, fühlen sie sich eher mit den Ergebnissen verbunden und unterstützen die Maßnahmen zur Förderung des Radverkehrs. Dies kann dazu beitragen, dass die Maßnahmen erfolgreich umgesetzt werden und mehr Menschen dazu motivieren, das Fahrrad als Verkehrsmittel zu nutzen.',
    },
    {
      cardTitle: 'Wissensaustausch',
      content:
        'Die Beteiligung von Menschen in der Radverkehrsförderung bietet die Möglichkeit, Wissen und Erfahrungen auszutauschen. Radfahrende können beispielsweise ihr Wissen über sichere Radwege und Fahrradparkplätze teilen, während Planer*innen und Entscheidungsträger*innen Informationen darüber sammeln können, wie sie die Infrastruktur und die Fördermaßnahmen verbessern können.',
    },
    {
      cardTitle: 'Demokratische Teilhabe',
      content:
        'Die Beteiligung von Menschen in der Radverkehrsförderung ist ein wichtiger Bestandteil einer demokratischen Gesellschaft. Es ermöglicht den Menschen, ihre Meinungen und Bedürfnisse in Bezug auf die Gestaltung ihres öffentlichen Raums auszudrücken und Einfluss auf die Entscheidungen zu nehmen, die ihr tägliches Leben beeinflussen.',
    },
    {
      cardTitle: 'Innovationsförderung',
      content:
        'Durch die Beteiligung von Menschen in der Radverkehrsförderung können neue und innovative Ideen und Ansätze für die Verbesserung des Radverkehrs entstehen. Beispielsweise können Fahrrad-Communities Ideen für neue Infrastruktur oder Programme entwickeln, die für den Radverkehr förderlich sind.',
    },
  ];

  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          {participationCardTexts.map(({ cardTitle, content }) => (
            <CardText title={cardTitle}>
              <P>{content}</P>
            </CardText>
          ))}

          <P>
            Zusammenfassend kann die Beteiligung von Menschen in der
            Radverkehrsförderung dazu beitragen, passgenaue Maßnahmen zu
            etablieren und den Radverkehr zielgerichtet zu fördern.
          </P>
        </Content>
      </Section>
    </>
  );
};

export default ParticipationArticle;
