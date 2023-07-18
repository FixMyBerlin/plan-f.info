export function sortByPosition<T extends { position: number }>(
  array: readonly T[],
): T[] {
  return [...array].sort((a, b) => a.position - b.position);
}
