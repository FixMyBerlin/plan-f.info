import React from 'react'

import { Prose } from '../core/Prose'
import { Section } from '../Layout/Section'
import { P } from '../Text'
import { CardCommunityEntry } from './CardCommunityEntry'
import SendCommunityEntryLink from './SendCommunityEntryLink'

export type CommunityEntryItem = {
  title: string
  /** Website URL, if any. */
  url?: string
  image?: { src: string; copyright?: string }
  commune: string
  countryState: string
  subcategory?: string
  /** Description rendered to HTML (from Markdown) by the route. */
  descriptionHTML: string
}

type Props = {
  communityEntries: CommunityEntryItem[]
}

export const CommunityEntriesSection: React.FC<Props> = ({ communityEntries }) => {
  return (
    <Section className="bg-gray-300">
      <h2 className="font-mono text-xl font-normal text-black md:text-3xl">
        Weitere Praxisbeispiele
      </h2>
      <P>Hier finden Sie eine Reihe an weiteren nenneswerten Beiträge aus der Community. </P>
      <P>
        Wenn Sie ein vorbildhaftes Praxisbeispiel kennen, das sich noch nicht im Plan F
        Wissensspeicher befindet, können Sie uns dieses zuschicken und wir prüfen eine
        Veröffentlichung. Für das Zusenden von Vorschlägen benötigen wir eine kurze Beschreibung,
        einen Link zu einer Website, auf der das Beispiel vorgestellt wird und ggf. ein Foto.
      </P>
      <SendCommunityEntryLink />
      <div className="mt-12 flex flex-col gap-5">
        {communityEntries
          .filter((entry) => entry.title !== 'PLACEHOLDER_TO_AVOID_TYPEERROR')
          .map((entry) => (
            <CardCommunityEntry
              key={entry.title}
              title={entry.title}
              link={entry.url || null}
              image={entry.image?.src}
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-700 uppercase md:text-base">
                  <strong>Stadt: </strong>
                  {entry.commune}
                  <br />
                  <strong>Bundesland: </strong>
                  {entry.countryState}
                  {entry.subcategory && (
                    <>
                      <br />
                      <strong>MaßnahmenTyp: </strong>
                      {entry.subcategory}
                    </>
                  )}
                </p>
                <Prose
                  className="prose-p:leading-normal line-clamp-4"
                  markdownHTML={entry.descriptionHTML}
                />
                {entry.image?.copyright && (
                  <p className="mt-2 text-xs text-gray-700">Abbildung: {entry.image.copyright}</p>
                )}
              </div>
            </CardCommunityEntry>
          ))}
      </div>
    </Section>
  )
}
