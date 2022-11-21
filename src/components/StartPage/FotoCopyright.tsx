import React from 'react';
import { Attribution } from '.';

type Props = { data: { src: any; copyright: string }; preload?: boolean };

export const FotoCopyright: React.FC<Props> = ({
  data: { src, copyright },
  preload = false,
}) => {
  return (
    <div>
      <img
        src={src}
        alt={`Foto von ${copyright}`}
        loading={preload ? 'eager' : 'lazy'}
      />
      <Attribution owner={copyright} />
    </div>
  );
};
