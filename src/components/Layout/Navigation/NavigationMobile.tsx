import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import Logo from '~/components/Layout/assets/Logo.svg';
import { SearchBar } from '~/components/SearchBar';
import {
  menuLinkActiveStyles,
  menuLinkStylesDefault,
} from '~/components/core/links';
import { Link } from '../../core/links/Link';
import { menuItems, menuItemsWithChildren } from './menuItems';
import { NavigationMobileDisclosure } from './NavigationMobileDisclosure';

type Props = { path: string; className?: string; children?: ReactNode };

// base: 'simple' from https://tailwindui.com/components/application-ui/navigation/navbars

export const NavigationMobile: React.FC<Props> = ({
  children,
  path,
  className,
}) => {
  return (
    <Menu>
      {({ open }) => (
        <nav
          className={clsx(
            className,
            open ? 'z-30' : 'z-10 ',
            'fixed w-full bg-white'
          )}
        >
          <div className={clsx('z-30 mx-auto px-4 pb-2 sm:px-6 lg:px-8')}>
            <div className="flex h-16 justify-between">
              <Link className="flex flex-col justify-center" href="/">
                <Logo className="h-8 w-auto shrink-0" />
              </Link>
              <div className="-mr-2 flex items-center">
                {/* Mobile menu button */}
                <Menu.Button className="inline-flex items-center justify-center">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-9 w-9 rounded-full bg-black p-1 text-white active:ring-0"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-9 w-9 rounded-full bg-black p-2 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Menu.Button>
              </div>
            </div>
            {children}
          </div>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items>
              <div className="flex h-[90vh] flex-col divide-y overflow-y-auto border bg-white px-4 py-4 pb-[25vh] font-bold">
                <SearchBar className="mb-4 w-full" />
                {Object.keys(menuItems).map((key) => (
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  <Menu.Item key={key}>
                    {key in menuItemsWithChildren ? (
                      <NavigationMobileDisclosure
                        // Inner Menu Button
                        button={
                          <p className={clsx('whitespace-nowrap !text-sm')}>
                            {key}
                          </p>
                        }
                      >
                        {/* children: Inner Menu Panel */}
                        {/* List of all children */}
                        {Object.keys(menuItemsWithChildren[key]).map(
                          (childKey) => (
                            <Menu.Item
                              key={menuItemsWithChildren[key][childKey]}
                            >
                              <Link
                                href={`${menuItems[key]}${menuItemsWithChildren[key][childKey]}`}
                                className={clsx(
                                  '!text-sm',
                                  path ===
                                    `${menuItems[key]}${menuItemsWithChildren[key][childKey]}`
                                    ? menuLinkActiveStyles
                                    : menuLinkStylesDefault
                                )}
                              >
                                {childKey}
                              </Link>
                            </Menu.Item>
                          )
                        )}
                      </NavigationMobileDisclosure>
                    ) : (
                      <Link
                        href={menuItems[key]}
                        className={clsx(
                          'py-3 !text-sm',
                          `${menuItems[key]}` === path
                            ? menuLinkActiveStyles
                            : menuLinkStylesDefault
                        )}
                      >
                        {key}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </nav>
      )}
    </Menu>
  );
};
