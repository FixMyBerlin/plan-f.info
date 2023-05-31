import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';
import { H3 } from '../Text';

type Props = {
  link: string;
  image?: string;
  children: ReactNode;
  className?: string;
  title: string;
};
export const CardImageAndTextResponsive: React.FC<Props> = ({
  className,
  children,
  link,
  image,
  title,
}) => {
  return (
    <Link
      button="card"
      className={clsx(
        'flex h-full flex-col gap-3 rounded-b-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-6',
        className
      )}
      href={link}
    >
      {image && (
        <img
          src={image}
          className="h-36 w-36 flex-shrink-0 overflow-hidden"
          alt={`Titelbild ${link}`}
        />
      )}
      <div>
        <H3 className="!md:mt-0 !mt-0">{title}</H3>
        {children}
      </div>
    </Link>
  );
};
