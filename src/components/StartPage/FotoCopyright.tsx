import React from 'react';

type Props = { data: { src: any; copyright: string }; preload?: boolean };

export const FotoCopyright: React.FC<Props> = ({
  data: { src, copyright },
  preload = true,
}) => {
  return (
    <div className="pt-4">
      <img
        src={src}
        alt={`Foto von ${copyright}`}
        loading={preload ? 'eager' : 'lazy'}
      />
      <figcaption>Foto:&nbsp;&copy;&nbsp;{copyright}</figcaption>
    </div>
  );
};
