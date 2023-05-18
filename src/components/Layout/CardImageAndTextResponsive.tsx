import clsx from 'clsx';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image?: IGatsbyImageData | null;
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
        'flex h-full flex-col gap-3 rounded-b-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-6',
        className
      )}
      href={link}
    >
      {image && (
        <GatsbyImage
          className="h-36 w-36 flex-shrink-0 overflow-hidden"
          alt={`Titelbild ${link}`}
          image={image}
        />
      )}
      <div>{children}</div>
    </Link>
  );
};
