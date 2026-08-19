import { Combobox } from '@headlessui/react'
import clsx from 'clsx'
import React, { type ChangeEvent, Fragment, useRef, useState } from 'react'

import { type GroupedResults, search } from '~/lib/search'

import { trackSearch } from '../matomo/trackSearch'
import { wikiColors } from '../utils'
import CancelIcon from './assets/CancelIcon.svg?react'
import SearchIcon from './assets/SearchIcon.svg?react'

type Props = {
  className?: string
}

type CategoryMeta = {
  key: keyof GroupedResults
  name: string
}

const categoryMeta: CategoryMeta[] = [
  { key: 'example', name: 'PRAXISBEISPIELE' },
  { key: 'measure', name: 'MAßNAHMEN' },
  { key: 'topic', name: 'HANDLUNGSFELDER' },
]

export const SearchBar: React.FC<Props> = ({ className }) => {
  const [searchResults, setSearchResults] = useState<GroupedResults | undefined>(undefined)
  const [resultHeader, setResultHeader] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  // Guards against out-of-order async results when typing quickly.
  const requestId = useRef(0)

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setSearchQuery(query)
    if (query === '') {
      setSearchResults(undefined)
      return
    }

    const currentRequest = ++requestId.current
    search(query).then((results) => {
      if (currentRequest !== requestId.current) return
      setSearchResults(results)
      const nResults = Object.values(results).reduce((acc, cur) => acc + cur.length, 0)
      if (nResults > 1) {
        setResultHeader(`Die ${nResults} besten Ergebnisse für „${query}“`)
      } else if (nResults === 1) {
        setResultHeader(`Ein Ergebnis für „${query}“`)
      } else {
        setResultHeader(`Keine Ergebnisse gefunden für „${query}“`)
      }
      trackSearch({
        searchterm: query,
        category: 'Suche (alle Kategorien)',
        results: nResults,
      })
    })
  }

  return (
    <Combobox
      as="div"
      className={clsx('w-80', className)}
      value={searchQuery}
      onChange={(path: string | null) => {
        if (path) window.location.href = path
      }}
    >
      <div className="relative w-full">
        <Combobox.Input
          placeholder="Suche im Wissensspeicher"
          className="h-10 w-full rounded-md border-0 bg-white py-1.5 pr-8 pl-10 text-gray-500 shadow-sm ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-purple-600 focus:ring-inset sm:text-sm sm:leading-6"
          onChange={onSearch}
        />
        <SearchIcon className="absolute top-3 left-4 h-4 w-4" />
        {searchQuery.length > 0 && (
          <Combobox.Button
            className="absolute top-4 right-4"
            onClick={() => {
              setSearchQuery('')
              setSearchResults(undefined)
            }}
          >
            <CancelIcon className="h-2.5 w-2.5" />
          </Combobox.Button>
        )}
        {searchResults && (
          <Combobox.Options
            as="section"
            className="ring-opacity-5 absolute z-10 mt-4 max-h-120 w-full overflow-auto rounded-md bg-white px-2 py-2 text-base shadow-lg ring-1 ring-black focus:outline-none sm:text-sm"
          >
            <h2 className="relative cursor-default px-2 py-2 font-bold text-gray-700 select-none">
              {resultHeader}
            </h2>
            {categoryMeta.map(({ key, name }) => {
              const results = searchResults[key]
              if (!results.length) return null

              return (
                <Fragment key={key}>
                  <h3 className="relative px-2 py-3 text-gray-700 select-none">{name}</h3>
                  {results.map(({ title, path }) => (
                    <Combobox.Option
                      key={path}
                      value={path}
                      as="div"
                      className={({ active }: { active: boolean }) =>
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
                  ))}
                </Fragment>
              )
            })}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
