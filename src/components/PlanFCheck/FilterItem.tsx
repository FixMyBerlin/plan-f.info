/* eslint-disable no-shadow */
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { Fragment, useState } from 'react';
import { FilterCategory } from './filterCategories.const';

type Props = {
  category: FilterCategory;
  filter: any;
  setFilter: any;
  categoryName: string;
};
export const FilterItem: React.FC<Props> = ({
  category,
  filter,
  setFilter,
  categoryName,
}) => {
  const [selected, setSelected] = useState('all');

  return (
    <Listbox
      value={selected}
      onChange={(x) => {
        setSelected(x);
        const newFilter = { ...filter };
        newFilter[categoryName] = x;
        setFilter(newFilter);
      }}
    >
      {({ open }) => (
        <div className="flex flex-col flex-grow">
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            {category.label}
          </Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 ring-gray-900">
              <span
                className={clsx(
                  selected === 'all'
                    ? '!text-gray-300 ring-gray-300'
                    : 'focus:ring-gray-900',
                  'block truncate',
                )}
              >
                {category.options[selected]}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Object.entries(category.options).map(
                  ([optionValue, optionLabel]) => (
                    <Listbox.Option
                      key={optionValue}
                      className={({ active }) =>
                        clsx(
                          active ? 'bg-gray-100 ' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9',
                        )
                      }
                      value={optionValue}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={clsx(
                              // selected ? 'font-bold' : 'font-normal',
                              'block truncate',
                            )}
                          >
                            {optionLabel}
                          </span>

                          {selected ? (
                            <span
                              className={clsx(
                                active ? '' : '',
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ),
                )}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};
