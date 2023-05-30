import { ArticleTeaserCard } from '~/components/ArtikelPages/ArticleTeaserCard';
import { Content, HelmetSeo, Hero } from '~/components/Layout';
import { menuItemsWithChildren } from '~/components/Layout/Navigation/menuItems';
import { Section } from '~/components/Layout/Section';

const IndexPage = () => {
  const title = 'Alle Artikel';

  const articleTeaserTexts = [
    'Eine fahrradfreundliche Kommune ist eine Stadt, Gemeinde oder Stadtteil / Bezirk, die sich darauf konzentriert, das Radfahren als eine attraktive, sichere und umweltfreundliche Form der Mobilität zu fördern. Es gibt auch fahrradfreundliche Bezirke und Stadtteile. In einer fahrradfreundlichen Kommune ist es einfach und sicher, mit dem Fahrrad zu fahren. Die Kommune setzt sich auch dafür ein XYZZZ.',
    'Eine fahrradfreundliche Kommune ist eine Stadt, Gemeinde oder Stadtteil / Bezirk, die sich darauf konzentriert, das Radfahren als eine attraktive, sichere und umweltfreundliche Form der Mobilität zu fördern. Es gibt auch fahrradfreundliche Bezirke und Stadtteile. In einer fahrradfreundlichen Kommune ist es einfach und sicher, mit dem Fahrrad zu fahren. Die Kommune setzt sich auch dafür ein XYZZZ.',
  ];

  return (
    <>
      <HelmetSeo noindex title={title} />
      <Hero
        bgColor="bg-green-500"
        title={title}
        subtitle="Ergänzende Informationen und Empfehlungen für die kommunale Radverkehrsförderung"
      />
      <Section>
        <Content>
          <div className="flex flex-col gap-10">
            {Object.keys(menuItemsWithChildren.Artikel).map((key, index) => (
              <ArticleTeaserCard
                key={key}
                title={key}
                link={menuItemsWithChildren[key]}
              >
                {articleTeaserTexts[index]}
              </ArticleTeaserCard>
            ))}
          </div>
        </Content>
      </Section>
    </>
  );
};

export default IndexPage;
