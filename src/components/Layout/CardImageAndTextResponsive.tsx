import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image?: string;
  children: ReactNode;
  className?: string;
};
export const CardImageAndTextResponsive: React.FC<Props> = ({
  className,
  children,
  link,
  image,
}) => {
  return (
    <Link
      button="card"
      className={clsx(
        'flex h-full flex-col gap-3 rounded-b-3xl bg-white p-6 pt-4 sm:flex-row sm:items-center sm:gap-6',
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
      <div>{children}</div>
    </Link>
  );
};
