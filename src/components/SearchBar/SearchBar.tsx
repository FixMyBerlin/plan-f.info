import React, { useState, ChangeEvent } from 'react';
import { navigate } from 'gatsby';
import { Combobox } from '@headlessui/react';
import clsx from 'clsx';
import { wikiColors } from '../utils';
import { getSearchResults } from './getSearchResults';
import SearchIcon from './assets/SearchIcon.svg';
import CancelIcon from './assets/CancelIcon.svg';

type categoryMeta = {
  key: string;
  name: string;
};

const categoryMeta: categoryMeta[] = [
  { key: 'example', name: 'PRAXISBEISPIELE' },
  { key: 'measure', name: 'MAßNAHMEN' },
  { key: 'topic', name: 'HANDLUNGSFELDER' },
];

const defaultDisplayValue = 'Suche im Wissensspeicher';

export const SearchBar = () => {
  const [searchResults, setSearchResults] = useState(undefined);
  const [resultHeader, setResultHeader] = useState<string>('');
  const [displayVal, setDisplayVal] = useState<string>(defaultDisplayValue);
  const [controller, setController] = useState<AbortController>(
    new AbortController()
  );
  const search = (event: ChangeEvent<HTMLInputElement>) => {
    controller.abort();
    const query = event.target.value;
    setDisplayVal(query);
    if (query === '') {
      setSearchResults(undefined);
      return;
    }
    // create new AbortController for each API call
    const newController = new AbortController();
    setController(newController);
    const { signal } = newController;
    getSearchResults(query, signal)
      .then((results) => {
        setSearchResults(results);
        const nResults = Object.values(results).reduce(
          (acc, cur) => acc + cur.length,
          0
        );
        if (nResults > 1) {
          setResultHeader(`Die ${nResults} besten Ergebnisse für „${query}“`);
        } else if (nResults === 1) {
          setResultHeader(`Ein Ergebnis für „${query}“`);
        } else {
          setResultHeader(`Keine Ergebnisse gefunden für „${query}“`);
        }
      })
      .catch((e) => {
        // we let abort errors pass
        if (e.name !== 'AbortError') {
          throw e;
        }
      });
  };

  return (
    <Combobox
      as="div"
      value={displayVal}
      onChange={(path: string) => navigate(path)}
      onFocus={() => setDisplayVal('')}
      onBlur={() => {
        setDisplayVal(defaultDisplayValue);
        setSearchResults(undefined);
      }}
    >
      <div className="relative mt-2 w-80">
        <Combobox.Input
          className="h-10 w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-12  text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          onChange={search}
        />
        <SearchIcon className="absolute left-4 top-3 flex h-4 w-4" />
        {!{ [defaultDisplayValue]: true, '': true }[displayVal] && (
          <Combobox.Button>
            <CancelIcon className="absolute right-4 top-4 flex h-2.5 w-2.5" />
          </Combobox.Button>
        )}
        {searchResults && (
          <Combobox.Options className="max-h-120 absolute z-10 mt-4 w-full overflow-auto rounded-md bg-white py-2 pl-4 pr-9 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <div className="relative cursor-default select-none py-2 font-bold text-gray-700">
              {resultHeader}
            </div>
            {categoryMeta.map(({ key, name }) => {
              const results = searchResults[key];
              return (
                results.length > 0 && (
                  <div key={key}>
                    <div className="relative cursor-default select-none py-3 text-gray-700">
                      {name}
                    </div>
                    {results.map(({ title, path }) => {
                      return (
                        <Combobox.Option
                          key={path}
                          value={`/handlungsfelder/${path}`}
                          className={({ active }) =>
                            clsx(
                              'relative cursor-default select-none py-2',
                              active && 'bg-gray-50'
                            )
                          }
                        >
                          <div className="flex items-center">
                            <span
                              className={clsx(
                                'inline-block h-5 w-5 flex-shrink-0 rounded-full',
                                wikiColors[key]
                              )}
                              aria-hidden="true"
                            />
                            <span className="ml-3 truncate">{title}</span>
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
