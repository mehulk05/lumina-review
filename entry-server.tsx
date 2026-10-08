import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';

/** Renders a route to HTML at build time. Called by scripts/prerender.mjs. */
export const render = (url: string): string =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

export { ALL_ROUTES, canonicalFor, getMeta } from './seo/routeMeta';
