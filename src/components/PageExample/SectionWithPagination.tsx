import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Pagination, PaginationProps } from './Pagination';

type Props = {
  children?: ReactNode;
  pagination: Omit<PaginationProps, 'sectionPosition'>;
  className?: string;
};
export const SectionWithPagination: React.FC<Props> = ({
  pagination,
  children,
  className,
}) => {
  return (
    <section className={clsx(className, 'rounded-3xl')}>
      <Pagination sectionPosition="top" {...pagination} />
      <div className="p-5 lg:p-10">{children}</div>
      <Pagination sectionPosition="bottom" {...pagination} />
    </section>
  );
};
