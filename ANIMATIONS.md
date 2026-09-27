# Togher Group Website Redesign

**Project:** Premium website redesign / demo
**Client:** Togher Group
**Primary source:** https://www.toghergroup.com/
**Status:** Documentation / pre-development
**Source of truth:** `SOURCE_OF_TRUTH.md`

> This document set is intended to guide a production-quality redesign. Verified company facts are separated from design proposals. Any fact that could not be verified is explicitly marked `[VERIFY]`.

## Motion Philosophy
Motion should reinforce hierarchy, spatial continuity and feedback. It should feel fast, quiet and intentional.

## Page Entrance
150–300ms opacity + 8–16px translate. Avoid long “loading” sequences.

## Hero Reveal
Stagger headline lines and supporting copy by 40–80ms. Media may reveal with a subtle clip-path/scale from 1.02 to 1.

## Image Reveal
Use masked reveal or opacity/translate on scroll. No dramatic zoom.

## Parallax
Optional for one or two large editorial images. Avoid on mobile and reduced-motion.

## Project Hover
Image crop/scale 1.02–1.05, metadata/arrow shift 4–8px.

## Navigation
Menu overlay: 250–400ms; focus trapping required.

## Buttons
Arrow translation and underline motion only.

## Scroll Reveals
IntersectionObserver or Framer Motion viewport triggers. Avoid revealing essential content only through animation.

## Page Transitions
Optional, 200–350ms, no white-flash or blocking.

## Technology
- Framer Motion: component/viewport motion.
- GSAP: only for complex scroll timelines.
- CSS transitions: hover/focus states.
- IntersectionObserver: lightweight reveal triggers where suitable.

## Reduced Motion
`@media (prefers-reduced-motion: reduce)` should remove transforms, parallax and nonessential stagger.
