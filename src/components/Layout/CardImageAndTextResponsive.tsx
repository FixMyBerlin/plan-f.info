import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { Link } from '../Link';

type Props = {
  link: string;
  image: IGatsbyImageData;
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
    <Link className={className} to={link}>
      <div className="flex h-full flex-col gap-3 rounded-b-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-6 lg:p-8">
        <GatsbyImage
          className="h-auto max-h-60 w-48 flex-shrink-0 overflow-hidden"
          alt={`Titelbild ${link}`}
          image={image}
        />
        <div>{children}</div>
      </div>
    </Link>
  );
};
