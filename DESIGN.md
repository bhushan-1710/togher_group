# Togher Group Website Redesign

**Project:** Premium website redesign / demo
**Client:** Togher Group
**Primary source:** https://www.toghergroup.com/
**Status:** Documentation / pre-development
**Source of truth:** `SOURCE_OF_TRUTH.md`

> This document set is intended to guide a production-quality redesign. Verified company facts are separated from design proposals. Any fact that could not be verified is explicitly marked `[VERIFY]`.

## Design Direction
**Editorial architecture × international construction group × premium recruitment organisation.**

The design should borrow principles rather than visual assets from the locked references. Kovo Haken demonstrates strong industrial storytelling, typography, machinery imagery, service presentation and direct enquiry paths. citeturn1search4turn1search8 Granger Construction demonstrates structured service architecture, project/service credibility, people/culture and clear conversion paths. citeturn0search10turn0search14

## Visual Personality
- Confident, restrained, industrial, editorial.
- Human photography over generic stock photography.
- Large type used as composition, not decoration.
- Strong horizontal rhythm with occasional asymmetry.
- Dark/light contrast used to establish hierarchy.

## Proposed Palette
This is **proposed digital direction**, not a claim about existing brand colours.
- Ink: `#111111`
- Off-white: `#F3F1EC`
- Warm white: `#FAF9F6`
- Graphite: `#242424`
- Muted grey: `#6D6D68`
- Structural line: `#D8D5CE`
- Accent: `#C9A35B` (restrained industrial brass/gold; validate against logo/brand) `[VERIFY]`

## Typography
Recommended pairing: a high-contrast editorial serif for display headlines + neutral grotesk sans for body/UI. Example implementation: **DM Serif Display + Inter** or **Newsreader + Inter**. Final font choice should be validated against brand assets/licensing.

### Type Scale
- Display XL: 72–96px / 0.92–0.98 line-height
- Display L: 56–72px
- H1: 48–64px
- H2: 36–48px
- H3: 24–32px
- Body L: 19–21px
- Body: 16–18px
- Caption: 12–14px

Use `clamp()` for fluid scaling.

## Grid
- Max content width: 1280–1360px.
- 12-column desktop grid.
- 8-column tablet adaptation.
- 4-column mobile grid.
- Desktop gutters: 32–48px.
- Mobile gutters: 20–24px.

## Spacing
Use a 4px base with primary rhythm at 8/16/24/32/48/64/96/128px.

## Shape Language
- Mostly square or subtly rounded controls.
- Border radius 0–8px.
- Avoid pill-shaped UI except tags/filters where semantically useful.

## Buttons
Primary: solid high-contrast rectangular button with directional arrow/icon.
Secondary: text/link button with animated underline or arrow.
Avoid oversized pill buttons.

## Image Treatment
- Use full-bleed architectural/construction imagery.
- Mix wide establishing shots with tight human/detail crops.
- Prefer authentic Togher/team/project imagery.
- Use controlled crop ratios rather than random card images.

## Navigation
Desktop: compact, high-contrast header with clear primary destinations and a persistent contact action.
Mobile: full-height or large overlay menu with clear hierarchy.

## States
Hover: subtle image scale/crop movement, underline/arrow movement, no glow.
Focus: visible 2–3px high-contrast outline.
Active: explicit current-page treatment.
Loading: restrained skeleton or progressive media reveal only where necessary.
Empty: informative text and a useful next action.

## NEVER USE
- Glassmorphism
- Neon effects
- Generic blue corporate styling
- Huge gradient blobs
- Excessive rounded cards
- Heavy shadows
- Fake statistics
- Generic AI illustrations
- Decorative icon grids
- Stock-photo collage aesthetic
- Excessive animation
