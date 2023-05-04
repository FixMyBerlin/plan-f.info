import React, { ReactNode, useState } from 'react';
import PlusIcon from './assets/PlusIcon.svg';
import MinusIcon from './assets/MinusIcon.svg';

type Props = {
  children: ReactNode;
  previewMode?: null | 'blend' | 'clamp';
  foldedText?: string;
  unfoldedText?: string;
  className?: string;
};

export const FoldOut: React.FC<Props> = ({
  children,
  previewMode,
  foldedText = 'Mehr erfahren',
  unfoldedText = 'Weniger Details',
  className,
}) => {
  const [folded, setFolded] = useState<boolean>(true);

  let preview;
  switch (previewMode) {
    case 'blend':
      preview = (
        <div className="relative h-40 overflow-hidden">
          {children}
          <div className="from-transparent absolute bottom-0 z-10 h-40 w-full translate-y-1 bg-gradient-to-b to-white" />
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
    <div className={className}>
      <div>{folded ? preview : children}</div>
      {(!folded || preview != null) && <div className="h-4" />}
      <button
        type="button"
        className="flex flex-row items-center font-sans text-[16px] font-bold  hover:cursor-pointer"
        onClick={() => setFolded(!folded)}
      >
        <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500">
          {folded ? <PlusIcon /> : <MinusIcon />}
        </div>
        {folded ? foldedText : unfoldedText}
      </button>
    </div>
  );
};
