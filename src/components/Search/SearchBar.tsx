import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { Combobox } from '@headlessui/react';
import clsx from 'clsx';
import { getSearchResults } from './getSearchResults';
import SearchIcon from './assets/SearchIcon.svg';

type categoryMeta = {
  key: string;
  displayName: string;
  color: string;
};

const categoryMeta: categoryMeta[] = [
  // { key: 'topicResults', displayName: 'Handlungsfelder', color:  },
  {
    key: 'exampleResults',
    displayName: 'PRAXISBEISPIELE',
    color: 'bg-lime-400',
  },
  { key: 'measureResults', displayName: 'MAßNAHMEN', color: 'bg-green-500' },
];

export const SearchBar = () => {
  // const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState(undefined);

  return (
    <Combobox as="div" nullable onChange={(path: string) => navigate(path)}>
      <div className="relative mt-2">
        <Combobox.Input
          className="h-10 w-80 rounded-md border-0 bg-white py-1.5 pl-10 pr-12  text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          onChange={(event) => {
            const query = event.target.value;
            if (query === '') {
              setSearchResults(undefined);
              return;
            }
            getSearchResults(query).then((results) =>
              setSearchResults(results)
            );
          }}
        />
        <SearchIcon className="absolute left-4 top-3 flex" />
        {searchResults !== undefined && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-80 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {categoryMeta.map(({ key, displayName, color }) => {
              const results = searchResults[key];
              return (
                results.length > 0 && (
                  <div key={key}>
                    <div className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-700">
                      {displayName}
                    </div>
                    {results.map(({ name, path }) => {
                      return (
                        <Combobox.Option
                          key={path}
                          value={`/handlungsfelder/${path}`}
                          className={({ active }) =>
                            clsx(
                              'relative cursor-default select-none py-2 pl-3 pr-9',
                              active
                                ? 'bg-purple-600 text-white'
                                : 'text-gray-700'
                            )
                          }
                        >
                          <div className="flex items-center">
                            <span
                              className={clsx(
                                'inline-block h-5 w-5 flex-shrink-0 rounded-full',
                                color
                              )}
                              aria-hidden="true"
                            />
                            <span className="ml-3 truncate">{name}</span>
                          </div>
                        </Combobox.Option>
                      );
                    })}
                  </div>
                )
              );
            })}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
