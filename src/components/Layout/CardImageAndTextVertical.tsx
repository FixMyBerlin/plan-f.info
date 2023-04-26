import React, { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from '../Link';

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
    <Link to={link}>
      <div className="flex h-full flex-col gap-3 rounded-b-3xl bg-white p-6 sm:gap-6 lg:p-8">
        <GatsbyImage
          className="max-h-60 w-full overflow-hidden"
          alt={`Titelbild ${link}`}
          image={image}
        />
        <div>{children}</div>
      </div>
    </Link>
  );
};
