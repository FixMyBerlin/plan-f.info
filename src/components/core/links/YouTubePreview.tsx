import { PlayIcon } from '@heroicons/react/24/solid';

import clsx from 'clsx';
import React from 'react';
import { Link } from './Link';

type Props = {
  link: string;
  image: React.ReactElement;
  marginClass?: string;
};

export const YouTubePreview: React.FC<Props> = ({
  link,
  image,
  marginClass,
}) => {
  return (
    <Link
      href={link}
      className={clsx(
        'group relative flex aspect-video w-full items-center justify-center overflow-clip rounded-md',
        { 'my-8': !marginClass },
        marginClass,
      )}
    >
      <div className="z-[1] flex h-20 w-20 items-center justify-center rounded-full bg-white/70 shadow backdrop-blur-md transition-all duration-300 group-hover:h-24 group-hover:w-24">
        <PlayIcon className="h-14 w-14 transition-all group-hover:h-20 group-hover:w-20" />
      </div>
      <picture className="absolute inset-0">{image}</picture>
    </Link>
  );
};
