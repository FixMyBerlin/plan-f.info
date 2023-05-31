import { Disclosure, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Link } from '~/components/core/links';

type Props = {
  button: ReactNode;
  menuItems: any; // TODO
  basePath: string;
};

export const NavigationDesktopDropdown: React.FC<Props> = ({
  button,
  menuItems,
  basePath,
}) => {
  return (
    <Disclosure>
      {() => (
        <div className="relative">
          {/* Mobile menu button */}
          <Disclosure.Button className="relative">{button}</Disclosure.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="absolute mt-2 flex flex-col gap-4 rounded border-2 bg-white px-5 py-4 shadow">
              <>
                <Disclosure.Button
                  as={Link}
                  href={basePath}
                  className={clsx('whitespace-nowrap !text-sm no-underline')}
                >
                  Wissensspeicher
                </Disclosure.Button>
                {menuItems.map((topic) => (
                  <Disclosure.Button
                    key={topic.slug}
                    as={Link}
                    href={`${basePath}${topic.slug}`}
                    className={clsx(
                      'whitespace-nowrap !text-sm no-underline hover:underline'
                    )}
                  >
                    {topic.name}
                  </Disclosure.Button>
                ))}
              </>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};
