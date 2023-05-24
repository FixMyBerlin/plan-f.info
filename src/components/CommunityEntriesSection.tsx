import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { CardImageAndTextResponsiveImgFull } from './Layout/CardImageAndTextResponsiveImgFull';
import { Section } from './Layout/Section';
import { H2, H3, P } from './Text';
import { Prose } from './core/Prose';
import { MailLink } from './core/links';

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
        benötigen Sie eine kurze Beschreibung, einen Link zu einer Website, auf
        der das Beispiel vorgestellt wird und ggf. ein Foto.
      </P>
      <MailLink
        className="mt-4"
        button
        mailto="kontakt@plan-f.info"
        subject="Vorschlag für ein weiteres Praxisbeispiel"
        body={`Liebes Plan F Team,

für die Kategorie Weitere Praxisbeispiele möchte ich folgenden Inhalt vorschlagen:

    - Titel des Beispiels
    - Stadt / Kommune
    - Bundesland
    - (optional) Maßnahmentyp (Auf dieser Seite finden Sie eine Liste mit Maßnahmentypen, von denen Sie einen auswählen können)
    - Link zu einer Website
    - (Optional) Bild zur Illustration des Beispiels im Anhang (jpg. Oder png. Mindestens 400 px hoch, max 5 MB) (Wenn kein Bild eingesendet wird, wird ein Screenshot der Website als Bild ausgegeben)
    - Attribution zum Bild (Was soll unter dem Bild stehen, z.B. Quelle / Autor )

Hinweis: Mit dem Zusenden eines Bildes bestätigen Sie, dieses frei von Rechten dritter ist und auf plan-f.info veröffentlicht werden darf

    - Beschreibungstext Text (max. 300 Zeichen)
    - (optional) Autor dieses Beitrags (Wenn Sie hier genannt werden möchten, dann bitte Ihren Namen angeben)
`}
        type="button"
      >
        Neuen Vorschlag einreichen
      </MailLink>
      <div className="mt-12 flex flex-col gap-5">
        {communityEntries.map((entry) => (
          <CardImageAndTextResponsiveImgFull
            key={entry.title}
            link={entry.website?.url && entry.website.url}
            image={entry.image && getImage(entry.image.image.localFile as any)}
          >
            <H3>{entry.title}</H3>
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
