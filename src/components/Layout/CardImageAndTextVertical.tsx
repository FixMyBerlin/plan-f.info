import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image: IGatsbyImageData | null;
  children: ReactNode;
};
export const CardImageAndTextVertical: React.FC<Props> = ({
  children,
  link,
  image,
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
      <div className="p-6 pt-4">{children}</div>
    </Link>
  );
};
