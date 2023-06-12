import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import SendCommunityEntryLink from './CommunityEntries/SendCommunityEntryLink';
import { CardImageAndTextResponsiveImgFull } from './Layout/CardImageAndTextResponsiveImgFull';
import { Section } from './Layout/Section';
import { H2, P } from './Text';
import { Prose } from './core/Prose';

type Props = {
  communityEntries: Queries.MeasureDetailsQuery['measure']['communityEntries'];
};

export const CommunityEntriesSection: React.FC<Props> = ({
  communityEntries,
}) => {
  return (
    <Section className="bg-gray-300">
      <H2>Weitere Praxisbeispiele</H2>
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
        {communityEntries.map((entry) => (
          <CardImageAndTextResponsiveImgFull
            key={entry.title}
            title={entry.title}
            link={entry.website?.url && entry.website.url}
            image={entry.image && getImage(entry.image.image.localFile as any)}
          >
            <P className="uppercase">
              <strong>Stadt: </strong>
              {entry.commune}
              <br />
              <strong>Bundesland: </strong>
              {entry.countryState}
              <br />
              <strong>MaßnahmenTyp: </strong>
              {entry.subcategory}
            </P>
            <Prose
              className="line-clamp-4"
              markdownHTML={entry.description.data.childMarkdownRemark.html}
            />
          </CardImageAndTextResponsiveImgFull>
        ))}
      </div>
    </Section>
  );
};
