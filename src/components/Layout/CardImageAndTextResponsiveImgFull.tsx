import clsx from 'clsx';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';

type Props = {
  link: string | null;
  image: IGatsbyImageData;
  children: ReactNode;
  className?: string;
};
export const CardImageAndTextResponsiveImgFull: React.FC<Props> = ({
  className,
  children,
  link,
  image,
}) => {
  if (!link)
    return (
      <div className="flex h-full flex-col gap-3 rounded-b-3xl bg-white sm:flex-row sm:items-center sm:gap-6 ">
        <GatsbyImage
          className="w-full overflow-hidden sm:h-72 sm:w-1/3 sm:shrink-0 sm:rounded-bl-3xl"
          alt={`Titelbild ${link}`}
          image={image}
        />
        <div className="p-6 pt-4 sm:pl-0">{children}</div>
      </div>
    );
  return (
    <Link
      blank
      button="card"
      className={clsx(
        'flex h-full flex-col gap-3 rounded-b-3xl bg-white sm:flex-row sm:items-center sm:gap-6',
        className
      )}
      href={link}
    >
      <GatsbyImage
        className="w-full overflow-hidden sm:h-72 sm:w-1/3 sm:shrink-0 sm:rounded-bl-3xl"
        alt={`Titelbild ${link}`}
        image={image}
      />
      <div className="p-6 pt-4 sm:pl-0">{children}</div>
    </Link>
  );
};
