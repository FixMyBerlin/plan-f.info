import React, { ReactNode, useState } from 'react';
import PlusIcon from './assets/PlusIcon.svg';
import MinusIcon from './assets/MinusIcon.svg';

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
        <div className="relative h-40 overflow-hidden">
          {children}
          <div className="absolute bottom-0 z-10 h-40 w-full translate-y-1 bg-gradient-to-b from-transparent to-white" />
        </div>
      );
      break;
    case 'clamp':
      preview = (
        <div className="line-clamp-3">
          <div>{children}</div>
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="pb-4">{folded ? preview : children}</div>
      <button
        type="button"
        className="flex flex-row items-center font-apercu text-[16px] font-bold hover:cursor-pointer"
        onClick={() => setFolded(!folded)}
      >
        <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark-green">
          {folded ? <PlusIcon /> : <MinusIcon />}
        </div>
        {folded ? foldedText : unfoldedText}
      </button>
    </div>
  );
};
