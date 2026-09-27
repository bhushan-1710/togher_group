# Togher Group Website Redesign

**Project:** Premium website redesign / demo
**Client:** Togher Group
**Primary source:** https://www.toghergroup.com/
**Status:** Documentation / pre-development
**Source of truth:** `SOURCE_OF_TRUTH.md`

> This document set is intended to guide a production-quality redesign. Verified company facts are separated from design proposals. Any fact that could not be verified is explicitly marked `[VERIFY]`.

## Recommended Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP only where justified
- Lucide icons or one consistent icon library

## Folder Structure
```
src/
  app/
    page.tsx
    about/page.tsx
    services/
    clients/
    candidates/
    vacancies/
    insights/
    contact/
  components/
    layout/
    navigation/
    hero/
    sections/
    services/
    forms/
    media/
    ui/
  content/
  lib/
  styles/
public/
  images/
  icons/
```

## Naming
PascalCase React components; kebab-case routes; semantic content IDs.

## Styling
Tailwind utility-first with a small token layer for typography, colour, spacing and containers. Avoid one-off arbitrary values unless they solve a genuine editorial composition requirement.

## Animation
Keep motion primitives reusable. Avoid page-specific animation duplication.

## Assets
Use Next/Image for responsive raster media. Prefer SVG for logo/icons.

## SEO
Next.js metadata API, canonical URLs, Open Graph, robots and sitemap.

## Performance
- Image dimensions declared.
- Critical hero image optimised/preloaded only when justified.
- Avoid heavy third-party scripts.
- Lazy-load below-fold media.
- Keep animation JS bounded.
