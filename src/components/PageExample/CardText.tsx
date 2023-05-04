import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H2 } from '../Text';
import { Prose } from '../core/Prose';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};
export const CardText: React.FC<Props> = ({ title, children, className }) => {
  return (
    <div className={clsx(className, 'rounded-b-3xl bg-gray-50')}>
      <H2 className=" bg-lime-200 p-4">{title}</H2>
      <Prose className="-mt-6 p-4 pt-6">{children}</Prose>
    </div>
  );
};
