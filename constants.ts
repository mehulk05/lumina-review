export const TRACKING_ID = 'aztrack20250e-21';
export const SITE_NAME = 'LuminaReviews';
export const SITE_URL = 'https://lumina-review.vercel.app';

/**
 * Amazon requires a working contact route and a real identity behind the site.
 * TODO (Mehul): confirm the display name you want published here before the
 * Associates review — a placeholder name is a rejection risk.
 */
export const SITE_OWNER = 'Mehul Kothari';
export const CONTACT_EMAIL = 'tonarsystem564@gmail.com';

export const DISCLOSURE =
  'As an Amazon Associate, LuminaReviews earns from qualifying purchases. This means we may receive a commission when you click a link to Amazon and buy something. It does not change the price you pay, and it does not change what we recommend.';

/** Appended to every outbound Amazon link. */
export const withTag = (url: string): string =>
  `${url}${url.includes('?') ? '&' : '?'}tag=${TRACKING_ID}`;
