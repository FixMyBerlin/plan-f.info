import React from 'react';
import { MailLink } from '../core/links';

const SendCommunityEntryLink = () => {
  return (
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
  );
};

export default SendCommunityEntryLink;
