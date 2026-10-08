/**
 * Writes a real HTML file for every route, so crawlers (and anyone with JS off)
 * get the full article without executing the bundle.
 *
 * Runs after both vite builds: the client build supplies the HTML shell with the
 * hashed asset tags, the SSR build supplies render() and the route table.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

// Windows needs a file:// URL for a dynamic import of an absolute path.
const { render, ALL_ROUTES, getMeta, canonicalFor } = await import(
  pathToFileURL(join(root, '.ssr-build', 'entry-server.js')).href
);

const template = readFileSync(join(dist, 'index.html'), 'utf-8');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const headFor = (meta, url) => {
  const canonical = canonicalFor(url);
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:type" content="${url.startsWith('/reviews/') ? 'article' : 'website'}" />`
  ];
  if (meta.image) tags.push(`<meta property="og:image" content="${esc(meta.image)}" />`);
  return tags.join('\n    ');
};

let written = 0;
for (const route of ALL_ROUTES) {
  const url = route.path;
  const appHtml = render(url);
  const meta = getMeta(url);

  const html = template
    // replace the shell's placeholder head tags with this route's
    .replace(/<title>[\s\S]*?<\/title>/, '<!--HEAD-->')
    .replace(/\n\s*<meta name="description"[\s\S]*?\/>/, '')
    .replace(/\n\s*<link rel="canonical"[\s\S]*?\/>/, '')
    .replace(/\n\s*<meta property="og:(?:title|description|type|url)"[\s\S]*?\/>/g, '')
    .replace('<!--HEAD-->', headFor(meta, url))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outPath = url === '/' ? join(dist, 'index.html') : join(dist, url.slice(1), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  written += 1;
  console.log(`  ${url.padEnd(50)} ${(html.length / 1024).toFixed(1)} kB`);
}
console.log(`\nPrerendered ${written} routes.`);
