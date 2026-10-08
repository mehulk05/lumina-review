import { REVIEWS, getReviewBySlug } from '../content/reviews';
import { SITE_NAME, SITE_URL } from '../constants';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  image?: string;
}

const STATIC_ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: `${SITE_NAME} — honest product reviews for India`,
    description:
      'Detailed, sourced reviews of electronics sold in India. We show our working and tell you when something is not worth the money.'
  },
  {
    path: '/reviews',
    title: `All reviews — ${SITE_NAME}`,
    description: 'Every review published on LuminaReviews, newest first.'
  },
  {
    path: '/about',
    title: `About — ${SITE_NAME}`,
    description: `Who writes ${SITE_NAME}, how we pick products, and how the site is funded.`
  },
  {
    path: '/contact',
    title: `Contact — ${SITE_NAME}`,
    description: `How to reach ${SITE_NAME} about corrections or questions.`
  },
  {
    path: '/editorial-policy',
    title: `Editorial policy — ${SITE_NAME}`,
    description: 'How we research, how we handle affiliate links, and how we correct mistakes.'
  },
  {
    path: '/privacy-policy',
    title: `Privacy policy — ${SITE_NAME}`,
    description: `What data ${SITE_NAME} collects, what third parties are involved, and your choices.`
  }
];

/** Every route the prerenderer should emit an HTML file for. */
export const ALL_ROUTES: RouteMeta[] = [
  ...STATIC_ROUTES,
  ...REVIEWS.map((r) => ({
    path: `/reviews/${r.slug}`,
    title: `${r.title} — ${SITE_NAME}`,
    description: r.metaDescription,
    image: r.imageUrl
  }))
];

const NOT_FOUND: RouteMeta = {
  path: '*',
  title: `Page not found — ${SITE_NAME}`,
  description: 'That page does not exist.'
};

/** Single source of truth for per-route tags — used by both the prerenderer and the client. */
export const getMeta = (pathname: string): RouteMeta => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const exact = ALL_ROUTES.find((r) => r.path === clean);
  if (exact) return exact;

  const slugMatch = clean.match(/^\/reviews\/(.+)$/);
  if (slugMatch && getReviewBySlug(slugMatch[1])) {
    const r = getReviewBySlug(slugMatch[1])!;
    return {
      path: clean,
      title: `${r.title} — ${SITE_NAME}`,
      description: r.metaDescription,
      image: r.imageUrl
    };
  }
  return NOT_FOUND;
};

export const canonicalFor = (pathname: string): string => SITE_URL + pathname;
