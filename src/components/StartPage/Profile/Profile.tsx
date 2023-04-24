import classNames from 'classnames';
import React from 'react';
import { ProfileData } from 'src/types/ProfileData';

type Props = {
  profile: ProfileData;
  mirror?: boolean;
  preload?: boolean;
};

export const Profile: React.FC<Props> = ({
  profile: {
    name,
    description,
    foto: { src, attribution },
  },
  mirror = false,
  preload = false,
}) => {
  return (
    <div className="h-fit-max overflow-y-auto overflow-x-hidden">
      <img
        className={classNames(
          mirror ? 'float-right ml-4' : 'float-left mr-4',
          'h-24 w-24 rounded-full lg:h-40 lg:w-40'
        )}
        src={src}
        alt={`profilfoto ${name}`}
        loading={preload ? 'eager' : 'lazy'}
      />
      <div className={classNames('flex flex-col')}>
        <h1 className="font-bold">{name}</h1>
        <p className="mt-2 flex-grow text-gray-300">{description}</p>
        {attribution && (
          <div className="mt-auto flex-none text-sm text-gray-300">
            Foto:&nbsp;&copy;&nbsp;{attribution}
          </div>
        )}
      </div>
    </div>
  );
};
