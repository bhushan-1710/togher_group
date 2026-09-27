# Togher Group Website Redesign

**Project:** Premium website redesign / demo
**Client:** Togher Group
**Primary source:** https://www.toghergroup.com/
**Status:** Documentation / pre-development
**Source of truth:** `SOURCE_OF_TRUTH.md`

> This document set is intended to guide a production-quality redesign. Verified company facts are separated from design proposals. Any fact that could not be verified is explicitly marked `[VERIFY]`.

## Breakpoints
Use content-driven breakpoints, with these validation targets:
- 1440px desktop
- 1280px desktop
- 1024px small desktop/tablet landscape
- 768px tablet
- 390px mobile
- 375px mobile

## Desktop
12-column grid; max-width 1280–1360px; large display typography; split-screen/editorial layouts permitted.

## Tablet
Reduce grid density, collapse multi-column service layouts, reduce headline size with `clamp()`, keep strong imagery.

## Mobile
4-column grid; 20–24px gutters; single-column content; intentionally reordered sections; large touch targets; menu overlay; no horizontal overflow.

## Images
Use responsive `sizes`, `srcset` and `object-position`. Never force critical images into distorted aspect ratios.

## Buttons
Minimum 44px touch target. Full-width or near-full-width on narrow screens when appropriate.

## Motion
Reduce distance and duration on mobile. Disable nonessential parallax. Respect reduced-motion globally.

## Mobile Design Principle
Mobile is a first-class composition, not a collapsed desktop. Prioritise message → proof → action.
