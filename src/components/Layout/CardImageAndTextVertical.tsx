import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from '../core/links/Link';
import { H3 } from '../Text';

type Props = {
  link: string;
  image: IGatsbyImageData | null;
  children: ReactNode;
  title: string;
};
export const CardImageAndTextVertical: React.FC<Props> = ({
  children,
  link,
  image,
  title,
}) => {
  return (
    <Link
      button="card"
      className="flex h-full flex-col rounded-b-3xl bg-white"
      href={link}
    >
      {image && (
        <GatsbyImage
          className="h-52 w-full overflow-hidden"
          alt={`Titelbild ${link}`}
          image={image}
        />
      )}
      <div className="p-6 pb-2">
        <H3 className="mb-0 mt-0 md:mb-0 md:mt-0">{title}</H3>
        {children}
      </div>
    </Link>
  );
};
