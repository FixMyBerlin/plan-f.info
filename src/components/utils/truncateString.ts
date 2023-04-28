export const truncateString = (str: string, n = 25) => {
  if (!str) return null;
  return str.length > n ? `${str.slice(0, n - 1)}...` : str;
};
