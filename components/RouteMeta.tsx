import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalFor, getMeta } from '../seo/routeMeta';

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/**
 * Keeps head tags correct during client-side navigation.
 *
 * The first paint already has the right tags: scripts/prerender.mjs writes them
 * into each route's HTML at build time, from the same getMeta() used here. This
 * only has to handle SPA navigation after hydration.
 */
const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getMeta(pathname);
    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', canonicalFor(pathname));
    if (meta.image) upsertMeta('property', 'og:image', meta.image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalFor(pathname);
  }, [pathname]);

  return null;
};

export default RouteMeta;
