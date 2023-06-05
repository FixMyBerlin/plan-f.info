import React, { ReactNode, useState } from 'react';
import MinusIcon from './assets/MinusIcon.svg';
import PlusIcon from './assets/PlusIcon.svg';

type Props = {
  children: ReactNode;
  previewMode?: null | 'blend' | 'clamp' | 'headline';
  foldedText?: string;
  unfoldedText?: string;
  className?: string;
  headline?: ReactNode;
};

export const FoldOut: React.FC<Props> = ({
  children,
  previewMode,
  headline,
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

  if (headline) {
    preview = <div>{headline}</div>;
  }

  if (headline)
    return (
      <div className={className}>
        <div className="flex items-center justify-between gap-3 py-3">
          {preview}
          <button type="button" onClick={() => setFolded(!folded)}>
            {folded ? (
              <PlusIcon className="h-6 w-6 rounded-full border border-black p-1" />
            ) : (
              <MinusIcon className="h-6  w-6 rounded-full border border-black p-1" />
            )}
          </button>
        </div>
        {!folded && children}
      </div>
    );

  return (
    <div className={className}>
      <div>{folded ? preview : children}</div>
      {(!folded || preview != null) && <div className="h-4" />}
      <button
        type="button"
        className="flex flex-row items-center font-sans text-[16px] font-bold  hover:cursor-pointer"
        onClick={() => setFolded(!folded)}
      >
        {folded ? (
          <PlusIcon className="mr-2  h-6 w-6 rounded-full border border-black" />
        ) : (
          <MinusIcon className="mr-2  h-6 w-6 rounded-full border border-black" />
        )}

        {folded ? foldedText : unfoldedText}
      </button>
    </div>
  );
};
