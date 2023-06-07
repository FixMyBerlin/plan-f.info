import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H3 } from '../Text';
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
      <H3 className="!md:mb-0 !md:mt-0 !mb-0 !mt-0 bg-lime-200 p-4">{title}</H3>
      <div className="p-4">
        {children && (
          <div className={planFMarkdownProseClasses}>{children}</div>
        )}
        {markdownHTML && <Prose markdownHTML={markdownHTML} />}
      </div>
    </div>
  );
};
