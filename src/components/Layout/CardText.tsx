import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Prose, planFMarkdownProseClasses } from '../core/Prose';

type Props = {
  title: string;
  markdownHTML?: string;
  className?: string;
  children?: ReactNode;
};
export const CardText: React.FC<Props> = ({
  title,
  markdownHTML,
  className,
  children,
}) => {
  return (
    <div className={clsx(className, 'rounded-b-3xl bg-gray-50')}>
      <h3 className="bg-lime-200 p-4 text-lg font-bold text-black md:text-xl ">
        {title}
      </h3>
      <div className="p-4">
        {children && (
          <div className={planFMarkdownProseClasses}>{children}</div>
        )}
        {markdownHTML && <Prose markdownHTML={markdownHTML} />}
      </div>
    </div>
  );
};
