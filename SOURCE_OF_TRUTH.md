# Togher Group Website Redesign

**Project:** Premium website redesign / demo
**Client:** Togher Group
**Primary source:** https://www.toghergroup.com/
**Status:** Documentation / pre-development
**Source of truth:** `SOURCE_OF_TRUTH.md`

> This document set is intended to guide a production-quality redesign. Verified company facts are separated from design proposals. Any fact that could not be verified is explicitly marked `[VERIFY]`.

# Master Rulebook

## Authority Order
1. Client-approved facts and supplied assets
2. Current Togher Group authoritative website
3. Official legal/brand documentation supplied by client
4. This document set
5. Design references as inspiration only

If documents conflict, this file wins until the client explicitly approves a change.

## Verified Facts
- Togher Group presents itself as an international construction recruitment consultancy. citeturn0search0
- Current UK/Ireland site lists management professionals recruitment, trades & labour recruitment and consultancy/investment. citeturn1search1
- Current recruitment pages reference Ireland, UK, Europe, USA and Australia. citeturn0search3turn0search4
- Steve Togher is identified as Managing Director. citeturn1search2
- Current site lists UK and Ireland addresses and a Dublin-based contact number/email. citeturn1search1turn1search2

## Brand Rules
- Existing logo/brand colours/typeface are `[VERIFY]`; do not replace them silently.
- Proposed design palette is a digital system, not an assertion of corporate brand colours.

## Content Rules
Never invent: people, revenue, employee count, years of experience, project values, project names, awards, locations, clients, testimonials, certifications or statistics.

Use `[VERIFY]` when evidence is missing.

## UX Rules
- Client and candidate routes must be visibly distinct.
- Every major page should have a logical next action.
- Do not hide contact options behind decorative interaction.

## Animation Rules
- Motion communicates hierarchy, continuity or feedback.
- Respect `prefers-reduced-motion`.
- No animation should block reading or conversion.

## Image Rules
- Real Togher imagery preferred.
- No fabricated project photography presented as Togher work.
- Placeholder assets must be labelled internally as `[ASSET REQUIRED]`.

## Technical Rules
- Next.js + TypeScript + Tailwind CSS.
- Framer Motion for normal UI motion.
- GSAP only where a timeline/scroll effect genuinely requires it.
- Avoid unnecessary dependencies.

## Approval Locks
Do not change without explicit approval: logo, factual claims, company locations, named people, service scope, contact details, primary CTA strategy, brand colours once supplied, legal copy, testimonials and certifications.
