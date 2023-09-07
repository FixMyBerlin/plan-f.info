import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image?: string;
  children: ReactNode;
  className?: string;
  title: string;
  linkExternal?: boolean;
};
export const CardTopic: React.FC<Props> = ({
  className,
  children,
  link,
  image,
  title,
  linkExternal,
}) => {
  return (
    <Link
      external={linkExternal}
      button="card"
      className={clsx(
        'flex h-full flex-col gap-3 rounded-b-3xl bg-white p-6 sm:flex-row sm:gap-6',
        className,
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
        <h3 className="text-blackmd:text-xl mb-2 text-lg font-bold">{title}</h3>
        {children}
      </div>
    </Link>
  );
};
