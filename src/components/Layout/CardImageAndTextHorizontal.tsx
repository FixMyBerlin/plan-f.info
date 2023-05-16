import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image: IGatsbyImageData | null;
  children: ReactNode;
};
export const CardImageAndTextHorizontal: React.FC<Props> = ({
  children,
  link,
  image,
}) => {
  return (
    <Link className="!no-underline" href={link}>
      <div className="flex h-full rounded-b-3xl bg-white">
        {image && (
          <GatsbyImage
            className="h-5 overflow-hidden"
            alt={`Titelbild ${link}`}
            image={image}
          />
        )}
        <div className="p-4">{children}</div>
      </div>
    </Link>
  );
};
