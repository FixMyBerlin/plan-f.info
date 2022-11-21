import React from 'react';

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
      <div className="mt-auto flex-none text-sm">
        Foto:&nbsp;&copy;&nbsp;{copyright}
      </div>
    </div>
  );
};
