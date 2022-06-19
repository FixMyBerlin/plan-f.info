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
    <div
      className={classNames('flex', mirror ? 'flex-row-reverse' : 'flex-row')}
    >
      <img
        src={src}
        alt={`profilfoto ${name}`}
        className="h-52 w-52 rounded-full"
      />
      <div
        className={classNames(
          'flex flex-col text-lg',
          mirror ? 'pr-8' : 'pl-8'
        )}
      >
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
