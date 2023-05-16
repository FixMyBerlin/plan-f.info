import { isWiki } from '.';

export function wikiLevel(path: string) {
  if (!isWiki(path)) {
    return undefined;
  }
  const depth = path.split('/').length;
  return { 3: 'topics', 4: 'topic', 5: 'measure', 6: 'example' }[depth];
}
