/**
 * German umlaut handling for lunr.
 *
 * The Snowball German stemmer maps ü→u, ä→a, ö→o, ß→ss. It does not treat the
 * ASCII digraphs ae/oe/ue as umlauts, so "Osnabrück" and "Osnabrueck" would not
 * match unless we index both forms.
 */

/** Same mapping the German stemmer applies to umlauts. */
export function foldUmlauts(text: string): string {
  return text
    .replaceAll('ä', 'a')
    .replaceAll('ö', 'o')
    .replaceAll('ü', 'u')
    .replaceAll('Ä', 'a')
    .replaceAll('Ö', 'o')
    .replaceAll('Ü', 'u')
    .replaceAll('ß', 'ss')
    .replaceAll('ẞ', 'ss')
}

/** Append ae/oe/ue ASCII spellings so slug-style queries match umlaut titles. */
export function withUmlautTransliteration(text: string): string {
  const ascii = text
    .replaceAll(/[äÄ]/g, 'ae')
    .replaceAll(/[öÖ]/g, 'oe')
    .replaceAll(/[üÜ]/g, 'ue')
    .replaceAll(/[ßẞ]/g, 'ss')
  return ascii === text ? text : `${text} ${ascii}`
}
