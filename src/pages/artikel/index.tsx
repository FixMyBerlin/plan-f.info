import { HeadFC } from 'gatsby';
import { Content, MetaTags, Hero } from '~/components/Layout';
import { PageTeaserCard } from '~/components/Layout/CardPageTeaser';
import {
  menuItems,
  menuItemsWithChildren,
} from '~/components/Layout/Navigation/menuItems';
import { Section } from '~/components/Layout/Section';

const title = 'Alle Artikel';

const IndexPage = () => {
  const articleTeaserTexts = {
    'Wie werde ich eine Fahrradfreundliche Kommune?':
      'Eine fahrradfreundliche Kommune konzentriert sich darauf, das Radfahren als eine attraktive, sichere, umweltfreundliche und gleichberechtigte Form der Mobilität zu fördern. Es ist wichtig viele verschiedene Maßnahmen umzusetzen, Ziele zu formulieren, ein Radverkehrskonzept und einen Projektplan aufzustellen.',
    'Welche Motive für die Nutzung bzw. Nicht-Nutzung des Fahrrads gibt es?':
      'In der Radverkehrsförderung ist eine zielgruppenspezifische Ansprache sinnvoll, um möglichst viele Personen erreichen zu können. Personen haben verschiedene Motive, weshalb sie das Fahrrad als Verkehrsmittel nutzen oder auch nicht nutzen. Diese gilt es zu verstehen und Treiber entsprechend zu fördern sowie Hindernissen entgegenzuwirken.',
    'Warum ist Beteiligung wichtig?':
      'Beteiligung in der Radverkehrsförderung bezieht sich auf den Prozess, bei dem Bürger*innen sowie andere Interessengruppen aktiv in Entscheidungen und Maßnahmen zur Förderung des Radverkehrs einbezogen werden. Es geht darum, ihre Meinungen, Bedürfnisse und Ideen zu berücksichtigen, um effektive und nachhaltige Radverkehrsmaßnahmen zu entwickeln und umzusetzen.',
    'Welches Budget sollte ich für die Förderung der Fahrradmobilität ansetzen?':
      'Das Budget für die Radverkehrsförderung hängt von verschiedenen Faktoren ab, wie beispielsweise der Größe und Geografie der Stadt oder Gemeinde, der Anzahl der zu implementierenden Maßnahmen, der Qualität und dem Umfang der Radinfrastruktur und anderen Maßnahmen sowie dem gewünschten Zeitrahmen für die Umsetzung.',
    'Warum soll ich den Radverkehr in meiner Kommune fördern? Was sind die positiven Effekte?':
      'Der Radverkehr löst zahlreiche Probleme und Herausforderungen in einer Kommune. Er trägt nicht nur zum Klimaschutz bei, sondern ist auch z. B. gut für die Gesundheit, ist Flächeneffizienz, entlastet den Straßenverkehr und erspart Kosten.',
    'Stellen und Organisationen für weitere Informationen zur Radverkehrsförderung, Fahrradmobilität und Fortbildung':
      'Es gibt zahlreiche Anlaufstellen, neben Plan F, um sich weiter informieren und beraten zu lassen. Diese Stellen sind auf nationaler, landesebene und regionaler Ebene gestreut und bieten unterschiedliche Unterstützungen.',
  };

  return (
    <>
      <Hero
        bgColor="bg-green-500"
        title={title}
        subtitle="Ergänzende Informationen und Empfehlungen für die kommunale Radverkehrsförderung"
      />
      <Section>
        <Content>
          <div className="flex flex-col gap-10">
            {Object.keys(menuItemsWithChildren.Artikel).map((key) => {
              if (key === 'Alle Artikel') return null;
              return (
                <PageTeaserCard
                  key={key}
                  title={key}
                  link={`${menuItems.Artikel}${menuItemsWithChildren.Artikel[key]}`}
                >
                  {articleTeaserTexts[key]}
                </PageTeaserCard>
              );
            })}
          </div>
        </Content>
      </Section>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <MetaTags title={title} />;
