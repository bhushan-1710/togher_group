# Togher Group Website Redesign

**Project:** Premium website redesign / demo
**Client:** Togher Group
**Primary source:** https://www.toghergroup.com/
**Status:** Documentation / pre-development
**Source of truth:** `SOURCE_OF_TRUTH.md`

> This document set is intended to guide a production-quality redesign. Verified company facts are separated from design proposals. Any fact that could not be verified is explicitly marked `[VERIFY]`.

# Implementation Plan

## PHASE 1 — Project Setup
Tasks: initialise Next.js/TypeScript/Tailwind; establish linting; create route skeleton; configure assets.
Files: `app/`, `components/`, `content/`, config files.
Completion: app runs, routes compile, no console errors.

## PHASE 2 — Design System
Tasks: tokens, typography, colours, grid, buttons, links, focus states.
Completion: reusable primitives visually match DESIGN.md.

## PHASE 3 — Global Layout
Tasks: header, navigation, mobile menu, footer, page shell, metadata.
Completion: keyboard-accessible global chrome at all breakpoints.

## PHASE 4 — Homepage
Tasks: hero, group intro, capabilities, experience/proof, reach, people, careers, final CTA.
Dependency: verified copy and imagery.
Completion: narrative works without filler sections.

## PHASE 5 — Internal Pages
Tasks: About, service pages, client journey, candidate journey, vacancies, contact, optional insights.
Completion: all approved content has a clear route and CTA.

## PHASE 6 — Interactions
Tasks: motion primitives, hover states, filters if needed, form validation, upload flow integration.
Completion: no jank; reduced-motion support.

## PHASE 7 — Responsive
Tasks: test 1440/1280/1024/768/390/375; intentional mobile compositions.
Completion: no overflow or broken hierarchy.

## PHASE 8 — SEO
Tasks: metadata, canonicals, schema, sitemap, robots, OG, internal linking.
Completion: crawlable and logically structured.

## PHASE 9 — Accessibility
Tasks: keyboard audit, contrast, focus, semantics, forms, reduced motion.
Completion: no critical accessibility defects.

## PHASE 10 — Performance
Tasks: image optimisation, font strategy, script audit, loading strategy.
Completion: strong Core Web Vitals trajectory and no obvious heavy assets.

## PHASE 11 — QA
Tasks: visual regression, browser testing, links, forms, SEO, accessibility, console.
Completion: QA_CHECKLIST.md signed off.
