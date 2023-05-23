import { wikiPath } from './wikiPath.const';

export const isWiki = (path: string) => path.startsWith(`/${wikiPath}/`);
