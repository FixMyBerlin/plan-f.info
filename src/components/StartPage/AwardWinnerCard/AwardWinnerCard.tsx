import React, { ReactNode } from 'react';
import { FoldOut } from '../FoldOut/FoldOut';
import { FotoCopyright } from '../FotoCopyright';

type Props = {
  children: ReactNode;
  title: string;
  media?: { src: any; copyright: string }[];
  className?: string;
};

export const AwardWinnerCard: React.FC<Props> = ({
  children,
  title,
  media,
  className,
}) => {
  return (
    <div className={className}>
      <FoldOut
        className="prose-h3:mb-0 prose-h3:mt-0 prose-h3:md:mb-0 prose-h3:md:mt-0"
        headline={<h3>{title}</h3>}
      >
        <>
          {children}
          {media?.length && media.map((m) => <FotoCopyright data={m} />)}
        </>
      </FoldOut>
    </div>
  );
};
