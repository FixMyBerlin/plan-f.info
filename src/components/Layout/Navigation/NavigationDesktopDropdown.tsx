import { Menu, Transition } from '@headlessui/react';
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
    <Menu>
      {() => (
        <div className="relative">
          <Menu.Button className="relative">{button}</Menu.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute mt-2 flex flex-col gap-4 rounded border-2 bg-white px-5 py-4 shadow">
              <>
                <Menu.Item
                  as={Link}
                  href={basePath}
                  className={clsx('whitespace-nowrap !text-sm no-underline')}
                >
                  Wissensspeicher
                </Menu.Item>
                {menuItems.map((topic) => (
                  <Menu.Item key={topic.slug} as={React.Fragment}>
                    <Link
                      href={`${basePath}${topic.slug}`}
                      activeClassName="font-bold"
                      className="whitespace-nowrap !text-sm no-underline hover:underline"
                    >
                      {topic.name}
                    </Link>
                  </Menu.Item>
                ))}
              </>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
};
