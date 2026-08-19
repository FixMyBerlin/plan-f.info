import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import React, { useState } from 'react'

import { menuLinkActiveStyles, menuLinkStylesDefault } from '~/components/core/links'
import Logo from '~/components/Layout/assets/Logo.svg?react'
import { wikiPath } from '~/components/utils'

import { Link } from '../../core/links/Link'

export type SideNavMeasure = { name: string; slug: string }
export type SideNavTopic = { name: string; slug: string; measures: SideNavMeasure[] }

type Props = { path: string; topics: SideNavTopic[] }

export const sidePanelWidthClassName = 'w-72'

export const SideNavigation: React.FC<Props> = ({ path, topics }) => {
  const basePath = `/${wikiPath}`

  const [folded, setFolded] = useState(true)
  return (
    <>
      <div className="fixed z-20 h-screen">
        <nav className="flex h-full items-center">
          {!folded ? (
            <ul
              className={clsx(
                sidePanelWidthClassName,
                'shadow-r h-full overflow-y-auto bg-gray-100 px-4 py-3 pr-8',
              )}
            >
              <li className="mb-16 px-4">
                <Link href="/">
                  <Logo className="h-8 w-auto shrink-0" />
                </Link>
              </li>
              <div style={{ scrollbarWidth: 'none' }} className="overflow-y-auto">
                {topics.map((topic) => (
                  <li key={topic.name} className="">
                    <Link
                      href={`${basePath}/${topic.slug}`}
                      className={clsx(
                        '!text-sm font-bold',
                        path === `${basePath}/${topic.slug}/`
                          ? menuLinkActiveStyles
                          : menuLinkStylesDefault,
                      )}
                    >
                      {topic.name}
                    </Link>
                    <ul className="my-3 flex flex-col gap-2">
                      {Boolean(topic.measures?.length) &&
                        topic.measures.map((measure) => (
                          <li key={measure.name} className="relative">
                            <Link
                              href={`${basePath}/${topic.slug}/${measure.slug}`}
                              className={clsx(
                                'block pl-3.5 !text-sm',
                                path.startsWith(`${basePath}/${topic.slug}/${measure.slug}/`)
                                  ? menuLinkActiveStyles
                                  : menuLinkStylesDefault,
                              )}
                            >
                              {measure.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </div>
            </ul>
          ) : (
            <div className="shadow-r h-full w-[6px] bg-gray-100" />
          )}

          <div className="z-30 flex flex-col justify-center">
            <button
              className="shadow-r rounded-tr-lg rounded-br-lg bg-gray-100 py-10"
              type="button"
              onClick={() => setFolded(!folded)}
            >
              {folded ? (
                <ChevronRightIcon className="h-5 w-5" />
              ) : (
                <ChevronLeftIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>
      {/* div pushes main to the side */}
      {!folded ? (
        <div className={clsx(sidePanelWidthClassName, 'z-10 hidden xl:block')} />
      ) : (
        <div className="shadow-r hidden h-full w-[6px] bg-gray-100 xl:block" />
      )}
    </>
  )
}
