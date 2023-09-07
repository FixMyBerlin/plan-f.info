import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image: any;
  children: ReactNode;
  title: string;
  linkExternal?: boolean;
};
export const CardExample: React.FC<Props> = ({
  children,
  link,
  image,
  title,
  linkExternal,
}) => {
  return (
    <Link
      external={linkExternal}
      button="card"
      className="flex h-full flex-col rounded-b-3xl bg-white"
      href={link}
    >
      {image && (
        <>
          <GatsbyImage
            className="h-52 w-full overflow-hidden"
            alt=""
            image={getImage(image.image.localFile as any)}
          />
          {image.copyright && (
            <p className="px-5 pt-2 text-right text-xs text-gray-400">
              Abbildung: {image.copyright}
            </p>
          )}
        </>
      )}
      <div className="p-6">
        <h3 className="mb-3 text-lg font-bold text-black md:text-xl">
          {title}
        </h3>
        {children}
      </div>
    </Link>
  );
};
