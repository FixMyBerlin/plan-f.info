import { PageProps } from 'gatsby';
import React from 'react';
import { Footer } from './Footer';
import { NavigationDesktopAndMobile } from './Navigation/NavigationDesktopAndMobile';
import { SideNavigation } from './Navigation/SideNavigation';
import { ScrollTopLink } from './ScrollTopLink';
import { Breadcrumbs } from './Breadcrumbs';
import { isWiki, wikiColors } from '../utils';

type Props = {
  children?: React.ReactNode;
};
// TODO: Maybe find a better way to manipulate the path to the first thre directories
const Layout: React.FC<
  Props &
    PageProps<
      | Queries.ExampleDetailsQuery
      | Queries.MeasureDetailsQuery
      | Queries.TopicDetailsQuery
    >
> = ({ data, path, children }) => {
  const isTopic = (x: any): x is Queries.TopicDetailsQuery =>
    Object.hasOwn(x, 'topic');
  const isMeasure = (x: any): x is Queries.MeasureDetailsQuery =>
    Object.hasOwn(x, 'measure');
  const isExample = (x: any): x is Queries.ExampleDetailsQuery =>
    Object.hasOwn(x, 'example');
  const breadcrumbs = ['Wissensspeicher'];

  // find names for breadcrumbs of layers from data depending on layer
  let bgColor = 'bg-green-500';
  if (data && isWiki(path)) {
    bgColor = wikiColors.root;
    if (isTopic(data)) {
      bgColor = wikiColors.topic;
      breadcrumbs.push(data.topic.name);
    } else if (isMeasure(data)) {
      bgColor = wikiColors.measure;
      breadcrumbs.push(data.measure.topic.name, data.measure.name);
    } else if (isExample(data)) {
      bgColor = wikiColors.example;
      breadcrumbs.push(
        data.example.measure.topic.name,
        data.example.measure.name,
        data.example.title,
      );
    }
  }

  return (
    <div className="relative flex h-full flex-col overflow-x-hidden bg-gray-200">
      <div className="relative mx-auto w-full max-w-[1366px] bg-white">
        <ScrollTopLink />
        <NavigationDesktopAndMobile path={path} bgColor={bgColor}>
          {isWiki(path) && <Breadcrumbs names={breadcrumbs} />}
        </NavigationDesktopAndMobile>
        <div className="mx-auto w-full bg-white">
          <div className="flex w-full flex-row">
            {isWiki(path) && (
              <div>
                <SideNavigation path={path} />
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
