import React, { useState, ChangeEvent, Fragment } from 'react';
import { navigate } from 'gatsby';
import { Combobox } from '@headlessui/react';
import clsx from 'clsx';
import { wikiColors } from '../utils';
import { getSearchResults } from './getSearchResults';
import SearchIcon from './assets/SearchIcon.svg';
import CancelIcon from './assets/CancelIcon.svg';
import { trackSearch } from '../matomo/trackSearch';

type Props = {
  className?: string;
};

type categoryMeta = {
  key: string;
  name: string;
};

const categoryMeta: categoryMeta[] = [
  { key: 'example', name: 'PRAXISBEISPIELE' },
  { key: 'measure', name: 'MAßNAHMEN' },
  { key: 'topic', name: 'HANDLUNGSFELDER' },
];

export const SearchBar: React.FC<Props> = ({ className }) => {
  const [searchResults, setSearchResults] = useState(undefined);
  const [resultHeader, setResultHeader] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [controller, setController] = useState<AbortController>(
    new AbortController(),
  );

  // search API logic:
  const search = (event: ChangeEvent<HTMLInputElement>) => {
    controller.abort();
    const query = event.target.value;
    setSearchQuery(query);
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
          0,
        );
        if (nResults > 1) {
          setResultHeader(`Die ${nResults} besten Ergebnisse für „${query}“`);
        } else if (nResults === 1) {
          setResultHeader(`Ein Ergebnis für „${query}“`);
        } else {
          setResultHeader(`Keine Ergebnisse gefunden für „${query}“`);
        }
        trackSearch({
          searchterm: query,
          category: 'Suche (alle Kategorien)',
          results: nResults,
        });
      })
      .catch((e) => {
        // we only abort errors pass
        if (e.name !== 'AbortError') {
          throw e;
        }
      });
  };

  return (
    <Combobox
      as="div"
      className={clsx('w-80', className)}
      value={searchQuery}
      onChange={(path: string) => navigate(`/${path}`)}
    >
      <div className="relative w-full">
        <Combobox.Input
          placeholder="Suche im Wissensspeicher"
          className="h-10 w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-8  text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          onChange={search}
        />
        <SearchIcon className="absolute left-4 top-3 h-4 w-4" />
        {searchQuery.length > 0 && (
          <Combobox.Button
            className="absolute right-4 top-4"
            onClick={() => {
              setSearchQuery('');
              setSearchResults('');
            }}
          >
            <CancelIcon className="h-2.5 w-2.5" />
          </Combobox.Button>
        )}
        {searchResults && (
          <Combobox.Options
            as="section"
            className="max-h-120 absolute z-10 mt-4 w-full overflow-auto rounded-md bg-white px-2 py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <h2 className="relative cursor-default select-none px-2 py-2 font-bold text-gray-700">
              {resultHeader}
            </h2>
            {categoryMeta.map(({ key, name }) => {
              const results = searchResults[key];
              if (!results.length) return null;

              return (
                <Fragment key={key}>
                  <h3 className="relative select-none px-2 py-3 text-gray-700">
                    {name}
                  </h3>
                  {results.map(({ title, path }) => {
                    return (
                      <Combobox.Option
                        key={path}
                        value={path}
                        as="div"
                        className={({ active }) =>
                          clsx(
                            'relative flex cursor-pointer select-none items-center gap-3 rounded px-2 py-2',
                            active && 'bg-gray-100',
                          )
                        }
                      >
                        <span
                          className={clsx(
                            'inline-block h-5 w-5 flex-none rounded-full',
                            wikiColors[key],
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{title}</span>
                      </Combobox.Option>
                    );
                  })}
                </Fragment>
              );
            })}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
