import clsx from 'clsx';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { Prose } from '../core/Prose';
import { Article } from './Article';
import { Section } from './Section';

type Props = {
  image: IGatsbyImageData | null;
  children: ReactNode;
  className?: string;
};
export const PageHeaderTextAndImage: React.FC<Props> = ({
  className,
  children,
  image,
}) => {
  return (
    <Section className={clsx('flex flex-col gap-10 lg:flex-row', className)}>
      <Article>
        <Prose>{children}</Prose>
      </Article>

      {image && (
        <GatsbyImage
          className="h-72 w-72 flex-shrink-0"
          image={image}
          alt="Titelbild"
        />
      )}
    </Section>
  );
};
