import { PageProps } from 'gatsby';
import React from 'react';
import { Footer } from './Footer';
import { NavigationDesktopAndMobile } from './Navigation/NavigationDesktopAndMobile';
import { SideNavigation } from './Navigation/SideNavigation';
import { ScrollTopLink } from './ScrollTopLink';
import { Breadcrumbs } from './Breadcrumbs';

type Props = {
  children?: React.ReactNode;
};
// TODO: Maybe find a better way to manipulate the path to the first thre directories
const Layout: React.FC<
  Props &
    PageProps<
      | Queries.ExampleDetailsAndCommunityEntriesQuery
      | Queries.MeasureDetailsAndCommunityEntriesQuery
      | Queries.TopicDetailsQuery
    >
> = ({ data, path, children }) => {
  const dirs = path.split('/');

  // check if we are inside wiki
  const isWiki = dirs[1] === 'wissensspeicher';

  // check if we have property in data object to find wiki layer
  const layer = ['measure', 'topic', 'example', 'topics'].filter((property) =>
    Object.hasOwn(data, property)
  )[0];

  let breadcrumbNames = [];
  // find names for breadcrumbs of layers from data depending on layer
  if (layer) {
    switch (layer) {
      case 'topic':
        breadcrumbNames = [data.topic.name];
        break;
      case 'measure':
        breadcrumbNames = [data.measure.topic.name, data.measure.name];
        break;
      case 'example':
        breadcrumbNames = [
          data.example.measure.topic.name,
          data.example.measure.name,
          data.example.title,
        ];
        break;
      default:
    }
  }
  return (
    <div className="relative flex h-full flex-col overflow-x-hidden bg-gray-200">
      <div className="relative mx-auto w-full max-w-[1440px] bg-white">
        <ScrollTopLink />
        <NavigationDesktopAndMobile isWiki layer={layer} path={path}>
          {isWiki && (
            <Breadcrumbs names={['Wissensspeicher'].concat(breadcrumbNames)} />
          )}
        </NavigationDesktopAndMobile>
        <div className="mx-auto w-full bg-white">
          <div className="flex w-full flex-row">
            {isWiki && (
              <div className="hidden xl:block">
                <SideNavigation
                  path={`${dirs
                    .slice(0, Math.min(dirs.length - 1, 4))
                    .join('/')}/`}
                />
              </div>
            )}
            <div className="flex-grow">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
