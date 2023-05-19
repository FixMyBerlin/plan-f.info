import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image: string;
  children: ReactNode;
};
export const CardImageAndTextHorizontal: React.FC<Props> = ({
  children,
  link,
  image,
}) => {
  return (
    <Link className="!no-underline" href={link}>
      <div className="flex h-28 min-h-fit items-center justify-start gap-4 rounded-b-3xl bg-white px-4">
        {image && (
          <img
            className="h-16 w-16 shrink-0 flex-grow-0 overflow-hidden"
            alt={`Titelbild ${link}`}
            src={image}
          />
        )}
        <div className="overflow-hidden py-4">{children}</div>
      </div>
    </Link>
  );
};
