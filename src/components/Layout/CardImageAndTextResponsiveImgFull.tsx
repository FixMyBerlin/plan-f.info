import clsx from 'clsx';
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';
import { H3 } from '../Text';

type Props = {
  link: string | null;
  image: IGatsbyImageData;
  children: ReactNode;
  className?: string;
  title: string;
};
export const CardImageAndTextResponsiveImgFull: React.FC<Props> = ({
  className,
  children,
  link,
  image,
  title,
}) => {
  if (!link)
    return (
      <div className="flex h-full flex-col gap-3 rounded-b-3xl bg-white sm:flex-row sm:gap-6 ">
        <GatsbyImage
          className="w-full overflow-hidden sm:h-72 sm:w-1/3 sm:shrink-0 sm:rounded-bl-3xl"
          alt=""
          image={image}
        />
        <div className="p-6 sm:pl-0">{children}</div>
      </div>
    );
  return (
    <Link
      blank
      button="card"
      className={clsx(
        'flex h-full flex-col gap-3 rounded-b-3xl bg-white sm:flex-row sm:gap-6',
        className
      )}
      href={link}
    >
      {image ? (
        <GatsbyImage
          className="w-full overflow-hidden sm:h-72 sm:w-1/3 sm:shrink-0 sm:rounded-bl-3xl"
          alt=""
          image={image}
        />
      ) : (
        <StaticImage
          src="./../CommunityEntries/assets/planf-placeholder.jpg"
          className="w-full overflow-hidden sm:h-72 sm:w-1/3 sm:shrink-0 sm:rounded-bl-3xl"
          alt=""
        />
      )}
      <div className="p-6 sm:pl-0">
        <H3 className="!md:mb-0 !md:mt-0 !mb-0 !mt-0">{title}</H3>
        {children}
      </div>
    </Link>
  );
};
