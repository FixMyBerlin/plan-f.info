import { describe, expect, test } from 'bun:test'

import lunr from 'lunr'
// @ts-ignore untyped module
import lunrDe from 'lunr-languages/lunr.de.js'
// @ts-ignore untyped module
import lunrStemmerSupport from 'lunr-languages/lunr.stemmer.support.js'

import { searchIndex, type LoadedIndex, type SearchDoc } from './search'
import { foldUmlauts, withUmlautTransliteration } from './searchGerman'

lunrStemmerSupport(lunr)
lunrDe(lunr)

function buildIndex(
  docs: Array<{ id: string; title: string; commune?: string; slug?: string; body?: string }>,
): { lunr: typeof lunr; loaded: LoadedIndex } {
  const searchDocs: Record<string, SearchDoc> = {}
  const indexDocs = docs.map((doc) => {
    searchDocs[doc.id] = {
      id: doc.id,
      type: 'example',
      title: doc.title,
      path: `/wissensspeicher/${doc.slug ?? doc.id}/`,
    }
    return {
      id: doc.id,
      type: 'example' as const,
      title: withUmlautTransliteration(doc.title),
      commune: withUmlautTransliteration(doc.commune ?? ''),
      slug: doc.slug ?? '',
      body: withUmlautTransliteration(doc.body ?? ''),
    }
  })

  const index = lunr(function () {
    // @ts-ignore lunr-languages augments lunr with `this.use`
    this.use(lunr.de)
    this.ref('id')
    this.field('title', { boost: 100 })
    this.field('commune', { boost: 10 })
    this.field('slug', { boost: 8 })
    this.field('body', { boost: 1 })
    for (const doc of indexDocs) this.add(doc)
  })

  return { lunr, loaded: { index, docs: searchDocs } }
}

const osnabrueckPath = '/wissensspeicher/bike-to-school-landkreis-und-stadt-osnabrueck/'

describe('searchGerman', () => {
  test('folds umlauts the way the German stemmer does', () => {
    expect(foldUmlauts('Osnabrück')).toBe('Osnabruck')
    expect(foldUmlauts('Fußgänger')).toBe('Fussganger')
  })

  test('appends ae/oe/ue spellings next to umlauts', () => {
    expect(withUmlautTransliteration('Osnabrück')).toBe('Osnabrück Osnabrueck')
    expect(withUmlautTransliteration('Berlin')).toBe('Berlin')
  })
})

describe('searchIndex', () => {
  const { lunr: lunrLib, loaded } = buildIndex([
    {
      id: 'example:osnabrueck',
      title: 'bike to school – Landkreis und Stadt Osnabrück',
      commune: 'Landkreis Osnabrück und Stadt Osnabrück',
      slug: 'bike-to-school-landkreis-und-stadt-osnabrueck',
    },
    {
      id: 'example:neue',
      title: 'neue Kampagne',
      slug: 'neue-kampagne',
    },
  ])

  test('finds an umlaut title from Osnabrück, Osnabrueck, and the slug', () => {
    for (const query of ['Osnabrück', 'osnabrueck', 'Osnabruck']) {
      const hits = searchIndex(lunrLib, loaded, query)
      expect(
        hits.example.some((r) => r.path === osnabrueckPath),
        query,
      ).toBe(true)
    }
  })

  test('does not fold genuine ue in neue', () => {
    const hits = searchIndex(lunrLib, loaded, 'neue')
    expect(hits.example.some((r) => r.path.includes('neue-kampagne'))).toBe(true)
  })
})
