# Togher Group Website Redesign

**Project:** Premium website redesign / demo
**Client:** Togher Group
**Primary source:** https://www.toghergroup.com/
**Status:** Documentation / pre-development
**Source of truth:** `SOURCE_OF_TRUTH.md`

> This document set is intended to guide a production-quality redesign. Verified company facts are separated from design proposals. Any fact that could not be verified is explicitly marked `[VERIFY]`.

## Target
Build to WCAG 2.2 AA-conscious practices.

## Semantic HTML
Use proper header/nav/main/section/footer, headings in logical order, buttons for actions and links for navigation.

## Keyboard
Every interactive element reachable by keyboard. Visible focus state. Menu/dialog focus management. Escape closes overlays.

## Contrast
Validate text and interactive states. Proposed palette must be tested before production.

## Images
Meaningful images get descriptive alt; decorative imagery uses empty alt.

## ARIA
Prefer semantic HTML. Use ARIA only when native semantics are insufficient.

## Forms
Persistent labels, clear instructions, field-level errors, summary where needed, accessible success state and privacy information.

## Motion
Respect `prefers-reduced-motion`. No essential content may depend on animation.

## Screen Readers
Meaningful link names; avoid “Read More” without context; announce form status; ensure mobile menu state is communicated.

## Mobile
Touch targets ≥44px, adequate spacing, no hover-only information, zoom-friendly typography.
