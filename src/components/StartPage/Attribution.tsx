import React from 'react';

type Props = { owner: string };

export const Attribution: React.FC<Props> = ({ owner }) => {
  return (
    <div className="mt-auto flex-none text-sm text-light-gray">
      Foto:&nbsp;&copy;&nbsp;{owner}
    </div>
  );
};
