import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { Link } from '../Link';

type Props = {
  link: string;
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
  return (
    <Link className={className} to={link}>
      <div className="flex h-full flex-col gap-3 rounded-b-3xl bg-white sm:flex-row sm:items-center sm:gap-6 ">
        <GatsbyImage
          className="w-full overflow-hidden sm:h-72 sm:w-1/3 sm:shrink-0 sm:rounded-bl-3xl"
          alt={`Titelbild ${link}`}
          image={image}
        />
        <div className="px-6 pb-6 sm:pl-0">{children}</div>
      </div>
    </Link>
  );
};
