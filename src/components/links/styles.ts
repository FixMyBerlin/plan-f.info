import clsx from 'clsx';
import { LinkProps } from './Link';

// LINK
export const linkStyles =
  'underline underline-offset-4 decoration-black hover:decoration-purple-600 hover:text-purple-600';

const buttonBase = 'inline-flex py-2';

// WHITE BUTTON  (primary - white/purple text)
const whiteButtonBase =
  'border-black text-black bg-white rounded-lg border-1 px-8';
const whiteButtonStylesForLinkElement = clsx(
  buttonBase,
  whiteButtonBase,
  'hover:border-0 hover:ring-2 hover:ring-purple-600', // hoverStyleForLinkElement
  'active:bg-purple-600 active:text-white' // activeStyleForLinkElement
);
export const whiteButtonStyles = clsx(
  buttonBase,
  whiteButtonBase,
  'enabled:hover:border-0 enabled:hover:ring-2 enabled:hover:ring-purple-600', // hoverStyleForButtonElement
  'enabled:active:bg-purple-600 enabled:active:text-white' // activeStyleForButtonElement
);

// BUTTON BLACK  (primary - black/white text)
const blackButtonBase = 'text-white bg-black px-2';
const blackButtonStylesForLinkElement = clsx(
  buttonBase,
  blackButtonBase,
  'hover:border-0 hover:ring-2 hover:ring-purple-600', // hoverStyleForLinkElement
  'active:bg-purple-600' // activeStyleForLinkElement
);
export const blackButtonStyles = clsx(
  buttonBase,
  blackButtonBase,
  'enabled:hover:border-0 enabled:hover:ring-2 enabled:hover:ring-purple-600', // hoverStyleForButtonElement
  'enabled:active:bg-purple-600' // activeStyleForButtonElement
);

export const selectLinkStyle = (
  button: LinkProps['button'],
  className?: string
) => {
  switch (button) {
    case true:
      return clsx(whiteButtonStylesForLinkElement, className);
    case 'white':
      return clsx(whiteButtonStylesForLinkElement, className);
    case 'black':
      return clsx(blackButtonStylesForLinkElement, className);
    default:
      return clsx(linkStyles, className);
  }
};
