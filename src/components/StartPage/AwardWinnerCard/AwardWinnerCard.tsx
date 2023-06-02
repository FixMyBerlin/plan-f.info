import React, { ReactNode } from 'react';
import { H3 } from '~/components/Text';
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
      <FoldOut headline={<H3>{title}</H3>}>
        <>
          {children}
          {media?.length && media.map((m) => <FotoCopyright data={m} />)}
        </>
      </FoldOut>
    </div>
  );
};
