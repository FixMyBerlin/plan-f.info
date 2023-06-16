import clsx from 'clsx';
import React from 'react';

import { Section } from './Section';
import { Prose } from '../core/Prose';

type Props = {
  image?: string;
  markdownHTML: string;
  className?: string;
};
export const PageIntro: React.FC<Props> = ({
  className,
  markdownHTML,
  image,
}) => {
  return (
    <Section className={clsx('flex flex-col gap-12 lg:flex-row', className)}>
      <article className="max-w-3xl">
        <Prose markdownHTML={markdownHTML} />
      </article>
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
