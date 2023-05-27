import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H3 } from '../Text';
import { Prose } from '../core/Prose';

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
      <H3 className="bg-lime-200 p-4">{title}</H3>
      <div className="-mt-5 p-4 pt-6">
        {markdownHTML && <Prose markdownHTML={markdownHTML} />}
        {children && children}
      </div>
    </div>
  );
};
