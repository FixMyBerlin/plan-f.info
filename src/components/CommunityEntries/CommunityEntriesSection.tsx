import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import SendCommunityEntryLink from './SendCommunityEntryLink';
import { CardCommunityEntry } from './CardCommunityEntry';
import { Section } from '../Layout/Section';
import { P } from '../Text';
import { Prose } from '../core/Prose';

type Props = {
  communityEntries: Queries.MeasureDetailsQuery['measure']['communityEntries'];
};

export const CommunityEntriesSection: React.FC<Props> = ({
  communityEntries,
}) => {
  return (
    <Section className="bg-gray-300">
      <h2 className="font-mono text-xl font-normal text-black md:text-3xl">
        Weitere Praxisbeispiele
      </h2>
      <P>
        Hier finden Sie eine Reihe an weiteren nenneswerten Beiträge aus der
        Community.{' '}
      </P>
      <P>
        Wenn Sie ein vorbildhaftes Praxisbeispiel kennen, das sich noch nicht im
        Plan F Wissensspeicher befindet, können Sie uns dieses zuschicken und
        wir prüfen eine Veröffentlichung. Für das Zusenden von Vorschlägen
        benötigen wir eine kurze Beschreibung, einen Link zu einer Website, auf
        der das Beispiel vorgestellt wird und ggf. ein Foto.
      </P>
      <SendCommunityEntryLink />
      <div className="mt-12 flex flex-col gap-5">
        {/* 'PLACEHOLDER_TO_AVOID_TYPEERROR' entry (and this filter) can be deleted in Strapi when fields are filled out by editors */}
        {communityEntries
          .filter((entry) => entry.title !== 'PLACEHOLDER_TO_AVOID_TYPEERROR')
          .map((entry) => (
            <CardCommunityEntry
              key={entry.title}
              title={entry.title}
              link={entry.website?.url && entry.website.url}
              image={
                entry.image && getImage(entry.image.image.localFile as any)
              }
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm uppercase text-gray-700 md:text-base">
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
                  className="line-clamp-4 prose-p:leading-normal"
                  markdownHTML={entry.description.data.childMarkdownRemark.html}
                />
                {entry.image?.copyright && (
                  <p className="mt-2 text-xs text-gray-700">
                    Abbildung: {entry.image.copyright}
                  </p>
                )}
              </div>
            </CardCommunityEntry>
          ))}
      </div>
    </Section>
  );
};