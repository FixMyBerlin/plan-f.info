import { Popover } from '@headlessui/react';
import { ReactNode } from 'react';

type Props = {
  children: any;
  button: ReactNode;
};

export const InfoPopover: React.FC<Props> = ({ children, button }) => {
  return (
    <Popover className="relative">
      <Popover.Button>{button}</Popover.Button>

      <Popover.Panel className="absolute z-[30] w-full bg-black px-4 sm:ml-8">
        {children}
      </Popover.Panel>
    </Popover>
  );
};
