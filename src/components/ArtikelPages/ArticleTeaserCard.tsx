import { ArrowRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { H2 } from '../Text';
import { Link } from '../core/links';

type Props = {
  title: string;
  link: string;
  children?: ReactNode;
  className?: string;
};

export const ArticleTeaserCard: React.FC<Props> = ({
  className,
  link,
  title,
  children,
}) => {
  return (
    <section className={clsx('bg-gray-50 p-5', className)}>
      <H2 className="!mt-0">{title}</H2>
      <div>{children}</div>
      <Link
        className="mt-10 flex items-center gap-2"
        button="black"
        href={`/artikel${link}`}
      >
        <ArrowRightIcon className="h-5 w-5 " />
        Weiterlesen
      </Link>
    </section>
  );
};
