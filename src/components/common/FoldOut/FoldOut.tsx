import React, { ReactNode, useState } from 'react';
import { PlusIcon, MinusIcon } from './assets';

type Props = {
  children: ReactNode;
  previewMode?: null | 'blend' | 'clamp';
  foldedText?: string;
  unfoldedText?: string;
};

export const FoldOut: React.FC<Props> = ({
  children,
  previewMode,
  foldedText = 'Mehr Anzeigen',
  unfoldedText = 'Weniger Details',
}) => {
  const [folded, setFolded] = useState<boolean>(true);
  let preview;
  switch (previewMode) {
    case 'blend':
      preview = (
        <div className="relative h-52 overflow-hidden">
          {children}
          <div className="absolute bottom-0 z-10 h-28 w-full translate-y-1 bg-gradient-to-b from-transparent to-white" />
        </div>
      );
      break;
    case 'clamp':
      preview = <div className="line-clamp-3">{children}</div>;
      break;
    default:
      break;
  }
  return (
    <div>
      {folded ? preview : children}
      <button
        type="submit"
        className="flex flex-row items-center py-8 font-bold hover:cursor-pointer"
        onClick={() => setFolded(!folded)}
      >
        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
          {folded ? <PlusIcon /> : <MinusIcon />}
        </div>
        {folded ? foldedText : unfoldedText}
      </button>
    </div>
  );
};
