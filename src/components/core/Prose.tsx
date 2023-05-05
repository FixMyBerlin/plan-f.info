import clsx from 'clsx';
import React from 'react';

type Props = {
  markdownHTML: string;
  className?: string;
};

export const Prose: React.FC<Props> = ({ markdownHTML, className }) => {
  return (
    <div
      className={clsx(
        className,
        'max-w-full', // We always wrap Prose in Section containers, which bring their own max-width
        'text-black',
        'prose-h1:text-lg', // h1 size
        'prose-h2:text-base', // h2 size
        'prose-h3:text-base', // h3 size
        'prose prose-sm md:prose-base', // responsive sizes
        'prose-h3:m1-1 prose-h1:mb-2 prose-h2:mb-2 prose-h2:mt-1 prose-h3:mb-2 prose-p:mb-2 prose-p:mt-1',
        'prose-ul:list-none prose-ul:pl-0 prose-li:m-0 prose-li:p-0'
      )}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: markdownHTML }}
    />
  );
};

// p & heading configuaretions if we would want to have prose styled like P / H1 / H2 / H3 Headings.tsx
// 'prose-h1:text-3xl md:prose-h1:text-4xl', // h1 sizes
// 'prose-h2:font-mono prose-h2:text-xl md:prose-h2:text-2xl', // h2 sizes
// 'prose-h3:text-base md:prose-h3:text-xl', // h3 sizes
// 'lg:prose-h1:mb-6 lg:prose-h1:mt-0 lg:prose-h2:mb-6 lg:prose-h2:mt-1 lg:prose-h3:mb-6 lg:prose-h3:mt-4 lg:prose-p:mb-2 lg:prose-p:mt-2', // p & heading margins for desktop
// 'prose-h2:mt-0.5 prose-h1:mb-3 prose-h1:mt-0 prose-h2:mb-3 prose-h3:mb-3 prose-h3:mt-2 prose-p:mb-1 prose-p:mt-1', // p & heading margins for mobile
