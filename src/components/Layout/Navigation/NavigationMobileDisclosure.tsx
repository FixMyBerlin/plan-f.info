import { Disclosure, Transition } from '@headlessui/react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import React, { ReactNode } from 'react';

type Props = {
  button: string;
  children: ReactNode;
};

export const NavigationMobileDisclosure: React.FC<Props> = ({
  button,
  children,
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          {/* Mobile menu button */}
          <Disclosure.Button className="inline-flex w-full items-center justify-between py-3 !text-sm">
            <p className="whitespace-nowrap">{button}</p>
            {open ? (
              <MinusCircleIcon className="h-6 text-black" />
            ) : (
              <PlusCircleIcon className="h-6 text-black" />
            )}
          </Disclosure.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="flex flex-col gap-2 py-2 pl-5">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
