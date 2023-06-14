import clsx from 'clsx';
import React from 'react';
import { Prose } from '../core/Prose';
import { Article } from './Article';
import { Section } from './Section';

type Props = {
  image?: string;
  markdownHTML: string;
  className?: string;
};
export const PageHeader: React.FC<Props> = ({
  className,
  markdownHTML,
  image,
}) => {
  return (
    <Section className={clsx('flex flex-col gap-12 lg:flex-row', className)}>
      <Article>
        <Prose markdownHTML={markdownHTML} />
      </Article>
      <div className="flex-shrink-0 px-10">
        {image && (
          <img
            className="h-72 w-72 flex-shrink-0"
            src={image}
            alt="Titelbild"
          />
        )}
      </div>
    </Section>
  );
};
