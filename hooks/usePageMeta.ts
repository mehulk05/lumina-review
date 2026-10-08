import { useEffect } from 'react';
import { SITE_URL } from '../constants';

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/**
 * Sets the per-route title, description, canonical and Open Graph tags.
 *
 * Note: this runs client-side, so crawlers that do not execute JavaScript will
 * only see the tags in index.html. Googlebot does render JS, but if organic
 * search becomes important this app should move to a pre-rendered or SSG build.
 */
export const usePageMeta = (title: string, description: string, image?: string) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');

    const url = SITE_URL + window.location.pathname;
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    if (image) setMeta('meta[property="og:image"]', 'property', 'og:image', image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, image]);
};
