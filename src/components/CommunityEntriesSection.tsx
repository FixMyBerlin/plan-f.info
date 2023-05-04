import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { CardImageAndTextResponsiveImgFull } from './Layout/CardImageAndTextResponsiveImgFull';
import { Section } from './Layout/Section';
import { H2, H3, P } from './Text';
import { Prose } from './core/Prose';

type Props = {
  communityEntries: Queries.MeasureDetailsAndCommunityEntriesQuery['communityEntries'];
};

export const CommunityEntriesSection: React.FC<Props> = ({
  communityEntries,
}) => {
  return (
    <Section className="bg-gray-300">
      <H2>Weitere Beiträge</H2>
      <P>
        Hier finden Sie eine Reihe an weiteren nenneswerten Beiträge aus der
        Community.
      </P>
      <div className="mt-12 flex flex-col gap-5">
        {communityEntries.nodes.map((entry) => (
          <CardImageAndTextResponsiveImgFull
            key={entry.title}
            link={entry.website.length && entry.website[0].url}
            image={entry.image && getImage(entry.image.image.localFile as any)}
          >
            <H3>{entry.title}</H3>
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
