const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * Deterministic "8 October 2026".
 *
 * Intl.DateTimeFormat output can differ between Node's ICU and the browser's,
 * which would produce a hydration mismatch on prerendered pages. Formatting by
 * hand keeps server and client output identical.
 *
 * @param iso date as YYYY-MM-DD
 */
export const formatDate = (iso: string): string => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};
