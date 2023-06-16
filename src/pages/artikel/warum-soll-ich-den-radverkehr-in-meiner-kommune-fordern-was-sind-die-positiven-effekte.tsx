import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { Section } from '~/components/Layout/Section';
import { CardText } from '~/components/Layout/CardText';
import { P } from '~/components/Text';

const SupportArticle = () => {
  const title =
    'Warum soll ich den Radverkehr in meiner Kommune fördern? Was sind die positiven Effekte?';

  const supportCardTexts = [
    {
      cardTitle: 'Klimaschutz',
      content:
        'Radfahren ist eine umweltfreundliche Alternative zum Autoverkehr und trägt somit zum Klimaschutz bei. Durch die Förderung des Radverkehrs können Kommunen ebenfalls dazu beitragen, Klimaschutzziele zu erreichen.',
    },
    {
      cardTitle: 'Gesundheit',
      content:
        'Radfahren ist nicht nur umweltfreundlich, sondern auch gesund. Regelmäßiges Radfahren kann das Herz-Kreislauf-System stärken, die Ausdauer verbessern und somit einen Beitrag zur Gesundheit der Bevölkerung und Mitarbeitenden in der Verwaltung leisten und kann so langfristig auch zu einer Reduktion von Gesundheitskosten beitragen.',
    },
    {
      cardTitle: 'Platzersparnis',
      content:
        'Im Vergleich zu Autos benötigen Fahrräder weniger Platz auf der Straße und beim Parken. Das schafft Raum für andere Nutzungen und Verkehrsteilnehmenden und auch für eine attraktive Gestaltung des öffentlichen Raums.',
    },
    {
      cardTitle: 'Entlastung',
      content:
        'Durch den Ausbau des Radverkehrs kann der Autoverkehr reduziert werden. Das entlastet nicht nur die Straßen, sondern auch die Umwelt (z. B. Luftverschmutzung) und reduziert den Lärm in den Städten.',
    },
    {
      cardTitle: 'Kostenersparnis',
      content:
        'Die Förderung des Radverkehrs ist im Vergleich zu anderen Verkehrsinfrastrukturen oft günstiger und kann somit auch Kosten einsparen.',
    },
    {
      cardTitle: 'Attraktivität',
      content:
        'Eine gute Radverkehrsinfrastruktur kann dazu beitragen, dass eine Stadt oder Gemeinde attraktiver wird. Eine hohe Lebensqualität und eine attraktive Gestaltung des öffentlichen Raums können sich positiv auf die Wirtschaft, den Tourismus und die eigene Bevölkerung auswirken.',
    },
    {
      cardTitle: 'Soziale Teilhabe',
      content:
        'Durch den Radverkehr können auch Menschen mit geringem Einkommen oder ohne eigenes Auto am gesellschaftlichen Leben teilhaben und sich flexibel und kostengünstig in der Stadt bewegen.',
    },
  ];

  return (
    <>
      <HelmetSeo title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          <P>
            Zuvor wurden bereits verschiedene Gründe beschrieben, warum Menschen
            das Fahrrad nutzen. Ähnliche Faktoren gelten auch für Kommunen.
            Diese sind:
          </P>
          <div className="flex flex-col gap-6">
            {supportCardTexts.map(({ cardTitle, content }) => (
              <CardText title={cardTitle}>
                <P>{content}</P>
              </CardText>
            ))}
          </div>
          <P>
            Eine gut ausgebaute Radverkehrsinfrastruktur kann also dazu
            beitragen, dass eine Stadt oder Gemeinde umweltfreundlicher,
            gesünder, attraktiver und sozialer wird. Mit den häufig nicht sehr
            kostenintensiven Maßnahmen ergeben sich also viele gute Gründe,
            warum Kommunen den Radverkehr bei sich vor Ort fördern sollten.
          </P>
        </Content>
      </Section>
    </>
  );
};

export default SupportArticle;
