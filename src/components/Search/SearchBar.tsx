import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import clsx from 'clsx';
import { getSearchResults } from './getSearchResults';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const searchResults = query === '' ? undefined : getSearchResults;
  const categorieNames = {
    topicResults: 'Handlungsfelder',
    measureResults: 'Maßnahmen',
    exampleResults: 'Praxisbeispiele',
  };
  return (
    <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
      <div className="relative mt-2">
        <Combobox.Input
          className="focus:ring-indigo-600 w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          // displayValue={"Suche im Wissenspeicher"}
        />
        {searchResults && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {Object.keys(categorieNames).map((category) => {
              const results = searchResults[category];
              return (
                <Combobox.Option
                  key={category}
                  value={categorieNames[category]}
                  className={({ active }) =>
                    clsx(
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                    )
                  }
                >
                  {categorieNames[category]}
                </Combobox.Option>
              );
            })}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
