import clsx from 'clsx';
import { LinkProps } from './Link';

// LINK
export const linkStyles =
  'underline decoration-black hover:decoration-purple-600 hover:text-purple-600';

const buttonBase = 'inline-flex py-2';

// WHITE BUTTON  (white/purple text)
const whiteButtonBase =
  'ring-black text-black bg-transparent rounded-lg ring-1 px-6';
const whiteButtonStylesForLinkElement = clsx(
  buttonBase,
  whiteButtonBase,
  'hover:hover:ring-2 hover:ring-purple-600', // hoverStyleForLinkElement
  'active:bg-purple-600 active:text-white' // activeStyleForLinkElement
);
export const whiteButtonStyles = clsx(
  buttonBase,
  whiteButtonBase,
  'enabled:hover:border-0 enabled:hover:ring-2 enabled:hover:ring-purple-600', // hoverStyleForButtonElement
  'enabled:active:bg-purple-600 enabled:active:text-white' // activeStyleForButtonElement
);

// BUTTON BLACK  (black/white text)
const blackButtonBase = 'text-white bg-black px-2';
const blackButtonStylesForLinkElement = clsx(
  buttonBase,
  blackButtonBase,
  'hover:hover:ring-2 hover:ring-purple-600', // hoverStyleForLinkElement
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
