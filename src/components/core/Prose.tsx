import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

// p & heading configuaretions here should be always in sync with Headings.tsx

export const Prose: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        'max-w-full', // We always wrap Prose in Section containers, which bring their own max-width
        'prose-h1:text-3xl md:prose-h1:text-4xl', // h1 sizes
        'prose-h2:font-mono prose-h2:text-xl md:prose-h2:text-2xl', // h2 sizes
        'prose-h3:text-base md:prose-h3:text-xl', // h3 sizes
        'prose prose-sm lg:prose-base', // responsive sizes
        'lg:prose-h1:mb-6 lg:prose-h1:mt-0 lg:prose-h2:mb-6 lg:prose-h2:mt-1 lg:prose-h3:mb-6 lg:prose-h3:mt-4 lg:prose-p:mb-2 lg:prose-p:mt-2', // p & heading margins for desktop
        'prose-h1:mb-3 prose-h1:mt-0 prose-h2:mb-3 prose-h2:mt-0.5 prose-h3:mb-3 prose-h3:mt-2 prose-p:mb-1 prose-p:mt-1', // p & heading margins for mobile
        'prose-ul:list-none prose-ul:pl-0 prose-li:m-0 prose-li:p-0'
      )}
    >
      {children}
    </div>
  );
};
