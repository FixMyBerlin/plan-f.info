import React, { ReactNode } from 'react';
import { Link } from '../core/links/Link';

type Props = {
  link: string;
  image: string;
  children: ReactNode;
};
export const CardTopicTitle: React.FC<Props> = ({ children, link, image }) => {
  return (
    <Link
      button="card"
      className="flex items-center justify-start gap-1 rounded-b-3xl bg-white p-6 pt-4"
      href={link}
    >
      {image && (
        <img
          className="h-24 w-24 shrink-0 flex-grow-0 overflow-hidden"
          alt={`Titelbild ${link}`}
          src={image}
        />
      )}
      <div className="overflow-hidden pl-4">{children}</div>
    </Link>
  );
};
