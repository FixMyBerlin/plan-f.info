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
    <Link
      button="card"
      className="flex h-28 min-h-fit items-center justify-start gap-4 rounded-b-3xl bg-white px-4"
      href={link}
    >
      {image && (
        <GatsbyImage
          className="h-16 w-16 shrink-0 flex-grow-0 overflow-hidden"
          alt={`Titelbild ${link}`}
          image={image}
        />
      )}
      <div className="overflow-hidden py-4">{children}</div>
    </Link>
  );
};
