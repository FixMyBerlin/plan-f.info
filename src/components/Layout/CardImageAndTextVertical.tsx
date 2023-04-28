import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image: IGatsbyImageData;
  children: ReactNode;
};
export const CardImageAndTextVertical: React.FC<Props> = ({
  children,
  link,
  image,
}) => {
  return (
    <Link href={link}>
      <div className="flex h-full flex-col rounded-b-3xl bg-white">
        <GatsbyImage
          className="h-52 w-full overflow-hidden"
          alt={`Titelbild ${link}`}
          image={image}
        />
        <div className="p-4 !no-underline">{children}</div>
      </div>
    </Link>
  );
};
