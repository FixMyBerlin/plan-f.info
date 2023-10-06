import React from 'react';

type Props = { data: { src: any; copyright: string }; preload?: boolean };

export const FotoCopyright: React.FC<Props> = ({
  data: { src, copyright },
  preload = true,
}) => {
  return (
    <div className="py-4 prose-figcaption:text-gray-400 prose-figcaption:mt-3">
      <img src={src} alt={copyright} loading={preload ? 'eager' : 'lazy'} />
      <figcaption>Foto:&nbsp;&copy;&nbsp;{copyright}</figcaption>
    </div>
  );
};
