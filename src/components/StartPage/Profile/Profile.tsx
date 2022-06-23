import classNames from 'classnames';
import React from 'react';
import { ProfileData } from 'src/types/ProfileData';

type Props = {
  profile: ProfileData;
  mirror?: boolean;
};

export const Profile: React.FC<Props> = ({
  profile: {
    name,
    description,
    foto: { src, attribution },
  },
  mirror = false,
}) => {
  return (
    <div className="h-fit-max overflow-auto">
      <img
        className={classNames(
          mirror ? 'float-right ml-4' : 'float-left mr-4',
          'h-28 w-28 rounded-full lg:h-40 lg:w-40'
        )}
        src={src}
        alt={`profilfoto ${name}`}
      />
      <div className={classNames('flex flex-col')}>
        <h1 className="font-bold">{name}</h1>
        <p className="mt-2 flex-grow text-light-gray">{description}</p>
        {attribution && (
          <div className="mt-auto flex-none text-sm text-light-gray">
            Foto:&nbsp;&copy;&nbsp;{attribution}
          </div>
        )}
      </div>
    </div>
  );
};
