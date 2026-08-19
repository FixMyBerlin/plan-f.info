import React from 'react'

import { Link } from '../core/links'
import { InfoPopover } from './InfoPopover'

/**
 * The Steckbrief info popover shown next to "Besiedelung" and "Lage".
 * The BBSR explanation text is identical for every example, so it is baked in here.
 * This keeps the hydrated island free of non-serializable (React element) props,
 * which Astro cannot pass to a `client:*` component.
 */
export const SpatialStructureInfoPopover: React.FC = () => {
  return (
    <InfoPopover
      label={
        <p>
          Für die Einteilung der Raumtypen Besiedlung und Lage nutzen wir die Daten des BBSR
          „Raumtypen 2010“ der Laufenden Raumbeobachtung – Raumabgrenzungen. Für die Definition sind
          die zwei räumlichen Strukturmerkmale, Dichte und Lage ausschlaggebend. Weitere
          Informationen zu den Daten finden Sie unter BBSR – Raumbeobachtung – Laufende
          Raumbeobachtung – Raumabgrenzungen (
          <Link href="https://www.bbsr.bund.de/BBSR/DE/forschung/raumbeobachtung/Raumabgrenzungen/deutschland/gemeinden/Raumtypen2010_vbg/Raumtypen2010_LageSied.html;jsessionid=8D851F8ECAFACA91FD6F226E7E7EC3CF.live11312">
            BBSR
          </Link>
          ).
        </p>
      }
    />
  )
}
