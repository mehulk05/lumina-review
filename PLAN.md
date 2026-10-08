# Plan: Amazon Associates compliance fix  (started 2026-10-08)

Goal: lumina-review.vercel.app serves real, pre-written, indexable review content on working URLs with the legal pages Amazon requires — so the Associates site review can pass and the site can rank for organic traffic.

| # | Task | Files / area | Status | Notes |
|---|------|--------------|--------|-------|
| 1 | Add client-side router | package.json, index.tsx, App.tsx | ✅ done | react-router-dom 7.18.4; 8 routes + catch-all |
| 2 | Vercel SPA rewrite config | vercel.json | ✅ done | all 12 local routes return 200 |
| 3 | Move AI calls out of browser | deleted services/geminiService.ts | ✅ done | @google/genai uninstalled; no key can ship now |
| 4 | Static review data model | content/reviews.ts, types.ts | ✅ done | StaticReview type; sources[] required |
| 5 | Write TCL TV review | content/reviews.ts | ✅ done | 1,220 words, 5 sources, verified in browser |
| 6 | Write 2 more reviews | content/reviews.ts | ✅ done | Sony WH-1000XM5, Lava Agni 3 — both researched first |
| 7 | Review detail page | pages/ReviewPages.tsx | ✅ done | static render; title/canonical set per route |
| 8 | Privacy Policy page | pages/InfoPages.tsx | ✅ done | 350 words, names Amazon/Vercel/fonts |
| 9 | About + Contact pages | pages/InfoPages.tsx | ✅ done | real email published |
| 10 | Editorial Policy page | pages/InfoPages.tsx | ✅ done | states what we will not publish |
| 11 | Fix footer dead links | components/Footer.tsx | ✅ done | 0 dead links on home (was 7) |
| 12 | Remove unverifiable claims | App.tsx, index.html | ✅ done | all 4 fabricated claims gone, checked in DOM |
| 13 | SEO basics | index.html, public/ | ✅ done | meta+OG+canonical, robots.txt, sitemap.xml (9 URLs) |
| 14 | Remove fake 5-star ratings | deleted components/ProductCard.tsx | ✅ done | added mid-flight; every product showed 5/5 |
| 15 | Build + local verify | — | ✅ done | tsc clean, vite build ok, 0 console errors |
| 16 | Push + Vercel deploy verify | — | ✅ done | PR #1 merged to main; 11/11 live routes 200 |
| 17 | Prerender every route | scripts/prerender.mjs, entry-server.tsx, seo/routeMeta.ts | ✅ done | raw HTML went 0 → 1,330 words on the TCL page |
| 18 | Hydrate instead of re-render | index.tsx, utils/formatDate.ts | ✅ done | 0 hydration errors; date formatting made deterministic |

## Known follow-ups (not blocking)

- **Tailwind is loaded from the CDN** (`cdn.tailwindcss.com`), which warns in console that it is not for production. Works, but should move to a build-time Tailwind install.
- **Own domain.** `lumina-review.vercel.app` is a subdomain; it cannot build its own search authority and reads as temporary.

## Still needs a human decision

- ~~Display name~~ — confirmed correct by Mehul, 8 Oct 2026.
- **More reviews.** Next up, per Mehul: **chimneys** and **laptops**. Same research-first treatment.
- **Traffic.** The site is now reviewable, but nothing drives visitors to it yet. The 180-day clock started when the account was approved, not when the site went live.

## What I found (evidence, 2026-10-08)

- **Site was fully broken.** Clicking "Read Intelligence" on the live site returned *"Analysis Interrupted — Failed to generate intelligence report."* `GEMINI_API_KEY` was not set in Vercel, so `process.env.API_KEY` compiled to empty.
- **All content was runtime-generated.** `generateProductDeepDive()` called Gemini on click. Nothing was pre-written → nothing to index, nothing for a reviewer to read.
- **Setting the key would have leaked it.** `vite.config.ts` inlined `GEMINI_API_KEY` into the client bundle via `define`. Checked the deployed bundle — no key was present, so nothing leaked.
- **No routes existed.** Nav was `useState`. `/about`, `/privacy`, `/contact`, `/reviews`, `/deals`, `/sitemap.xml`, `/robots.txt` all 404'd.
- **All 7 footer links were `href="#"`.**
- **Every product card showed a hardcoded 5-star rating** regardless of product.
- Working already, kept: affiliate disclosure text, tracking ID `aztrack20250e-21`.

## Verification evidence

```
tsc --noEmit            → exit 0
vite build              → 49 modules, built in 1.16s
route status (local)    → 12/12 return 200
/reviews/tcl-…          → 1,220 words, 5 sources, 0 console errors
home page DOM           → 0 dead links, 0 fake stars, 0 fabricated claims
affiliate CTA           → tag=aztrack20250e-21, rel="sponsored"
source citations        → untagged, rel="nofollow"
```
