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
    <Link className={clsx('!no-underline', className)} href={link}>
      <div className="flex h-full flex-col gap-3 rounded-b-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-6">
        {image && (
          <img
            src={image}
            className="h-36 w-36 flex-shrink-0 overflow-hidden"
            alt={`Titelbild ${link}`}
          />
        )}
        <div>{children}</div>
      </div>
    </Link>
  );
};
