import { PageTeaserCard } from '~/components/PageTeaserCard';
import { Content, HelmetSeo, Hero } from '~/components/Layout';
import {
  menuItems,
  menuItemsWithChildren,
} from '~/components/Layout/Navigation/menuItems';
import { Section } from '~/components/Layout/Section';

const MiscIndexPage = () => {
  const title = 'Weitere Angebote';
  const moreOffersTeaserTexts = {
    'Plan F Handbuch':
      'Im Handbuch sind die Inhalte des Wissensspeichers und weitere Angebote komprimiert und übersichtlich zusammengefasst. Das Handbuch kann als Printversion bestellt werden. Weiterlesen',
    'Plan F E-Learning':
      'Der E-Learning Kurs vermittelt in mehreren Modulen wichtige Informationen zu Maßnahmen und Möglichkeiten für eine ganzheitliche Radverkehrsförderung. In einer interaktiven Form lernen die Teilnehmenden Grundlagen und spezifisches Wissen zur kommunalen Radverkehrsförderung besser kennen. Weiterlesen',
    'Plan F Audit':
      'Im Plan F Audit wird der derzeitige Stand Ihrer Aktivitäten in der Radverkehrsförderung anhand der Plan F Systematisierung ermittelt und weitere Maßnahmen erarbeitet und diskutiert. Ihre Kommune erhält innovative und fachliche Unterstützung und wird so in kurzer Zeit (noch) fahrradfreundlicher. Weiterlesen',
  };

  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero bgColor="bg-green-500" title={title} />
      <Section>
        <Content>
          <div className="flex flex-col gap-10">
            {Object.keys(menuItemsWithChildren['Weitere Angebote']).map(
              (key) => {
                return (
                  <PageTeaserCard
                    key={key}
                    title={key}
                    link={`${menuItems['Weitere Angebote']}${menuItemsWithChildren['Weitere Angebote'][key]}`}
                  >
                    {moreOffersTeaserTexts[key]}
                  </PageTeaserCard>
                );
              }
            )}
          </div>
        </Content>
      </Section>
    </>
  );
};

export default MiscIndexPage;
