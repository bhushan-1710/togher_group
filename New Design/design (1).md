# Design System — "Sustainable Materials" Reference Site

Extracted from a screen-capture of a green-tech / sustainable-materials landing page
(brand shown: "EnviroMat"). Use this as a base design language for a new project —
swap the copy, imagery, and brand name, keep the system.

---

## 1. Brand Feel

Calm, premium, "clean-tech" nature aesthetic. Soft off-white canvas with a floating
white "app-like" card containing the whole page — not edge-to-edge, the site itself
looks like a rounded card sitting on a neutral grey-green background. Organic macro
photography (pleated green material, folded leaves) is the hero visual, not stock
lifestyle photos.

---

## 2. Layout Structure

- **Outer canvas:** muted sage/grey background (`#E4E6DD`-ish), full viewport.
- **Inner "app shell":** one large white rounded-rect card (radius ~28–32px) inset
  from the viewport edges (roughly 40–60px margin all around), drop shadow soft
  and diffuse. All content lives inside this shell.
- **Hero split:** inside the shell, two columns:
  - Left ~45%: logo/nav-left, eyebrow label, headline, subcopy, two pill buttons,
    small icon row bottom-left.
  - Right ~55%: full-bleed-to-card-edge photo (top-right and bottom-right corners
    match the shell's own radius), nav pills overlaid top-right of the photo, a
    floating "team" info card overlaid bottom-right of the photo.
- **Section rhythm below the fold:** each new section is its own big rounded card
  (radius ~24px) nested inside the shell, usually tinted pale sage-green
  (`#DCEBC8`-ish) to differentiate from the white shell background, with generous
  internal padding (~48–64px).

---

## 3. Typography

- **Display/headline font:** rounded-geometric sans, medium weight, quite large
  (roughly 56–72px), tight leading. Feels like *Poppins / Circular / General
  Sans* territory — friendly rounded terminals, not sharp.
- **Body/UI font:** a plain grotesk/system sans for nav, buttons, labels, stats —
  small size (13–15px), fairly wide letter-spacing on all-caps or pill labels.
- **Color treatment inside headlines:** one or two keywords per headline are
  recolored (not bolded) — e.g. one word in sage/lime green, another phrase in a
  soft lavender/periwinkle — while the rest stays near-black. This 2-accent-color-
  in-copy trick is a signature move; reuse it instead of bolding.
- **Micro-animation:** headline text enters as a **staggered character reveal** —
  letters of the last word fade/slide in individually with slightly altered
  tracking, settling into final position ~0.4–0.6s after the rest of the line is
  already static. Treat this as a one-time hero entrance, not a loop.

---

## 4. Color Palette

| Role | Approx. value | Usage |
|---|---|---|
| Canvas / outer bg | `#E3E6DC` | page background behind the app shell |
| Shell / card bg | `#FFFFFF` | main content card |
| Section tint (light) | `#DEEBC9` | secondary section backgrounds |
| Ink / heading text | `#1B1B18` | near-black, not pure black |
| Muted text | `#8A8E82` | eyebrow labels, secondary copy |
| Accent green (lime) | `#C7E36B` – `#A9D66A` | keyword highlight, active nav pill, progress rings |
| Accent lavender | `#B9AEF0` | second keyword highlight, tag pills, marquee band |
| Photography green | deep matte green (`#3F6B2E` range) | hero/product imagery — real photos, not illustration |
| Pure white chips | `#FFFFFF` | floating stat/info cards, buttons |

Two accent colors (lime-green + lavender) is the palette's signature — never more
than these two accents against the black/white/sage base.

---

## 5. Components

### 5.1 Pill buttons
- Fully rounded (999px radius), white or near-white fill, 1px hairline border in
  light grey, small drop shadow. Text centered, 14–15px.
- Nav items use the same pill shape; the **active/current nav item is filled
  lime-green**, inactive ones are ghost/outline on white.

### 5.2 Floating info card ("Pro Team" style)
- Small white rounded card (radius ~16px) overlaid on top of a photo, offset
  toward one corner (bottom-right in the reference), with a soft shadow lifting it
  off the image. Contains a stacked avatar cluster + 2-line text. This "chip
  floating on photography" pattern repeats throughout — reuse it for any
  credibility/social-proof callout.

### 5.3 Statement / mission section
- Large centered headline (2–3 lines) using the same 2-accent-color keyword
  treatment, sitting alone on white with generous vertical whitespace above/below.
- Below it, a **3-column row**: social/follow card (dark image + icon row) · a
  tag-cloud card (see 5.4) · a plain photo card. All three share the same card
  radius and height.

### 5.4 Floating tag-cloud / keyword pills
- A card containing 8–10 small pill-shaped tags (e.g. "Sustainable",
  "Progressive", "Eco-conscious", "Responsible", "Thoughtful", "Forward-looking")
  in alternating lime/lavender fills, each **tilted at a random small angle**
  (−15° to +15°) and **slowly drifting/rotating** on an idle physics-style loop
  (like tags floating in zero-gravity). A centered heading + "Get Started" pill
  button sits above the floating tags, unaffected by the motion.

### 5.5 Diagonal marquee band
- A full-width strip **rotated ~2–3°** off horizontal, lavender fill, containing
  an infinitely auto-scrolling repeated line of text separated by a small
  rotating "refresh"-style icon glyph (⟲). Used as a section divider/transition
  between the mission section and the services section. Text scrolls
  continuously, no pause on hover needed.

### 5.6 Stacked service cards ("folder tab" carousel)
This is the most distinctive pattern in the reference — build it carefully:
- A series of full-width rounded cards (pale sage tint) are **stacked like folder
  tabs**: the next card in the sequence peeks out from behind the top edge of the
  current card (a small rounded tab visible above, echoing a physical folder
  divider tab).
- As the user scrolls, the current card's content **crossfades/slides out** while
  the next stacked card **rises up and becomes the active one**, revealing a new
  peeking tab behind it for the following card. 3–4 cards deep.
- Each card layout: left side = small pill label ("Our Services") + H2 + 1–2 line
  description + left-edge vertical dot pagination (3 dots, active one filled
  solid, indicating position in the stack). Right side = a photo/3D-render tile
  with **floating data chips overlaid on top of the image**:
  - A circular progress ring with an animated **count-up percentage** in the
    center (e.g. 83% → 90%), label beneath.
  - Small free-floating pill badges with a stat + label (e.g. "Energy Savings
    $2M", "Carbon −50%", "Building Energy Efficiency +30%"), scattered at
    different corners of the image at slight offsets — not aligned to a grid.
  - A small circular rotating "seal/stamp" badge (spinning slowly, like a
    verification seal) near a corner.
  - A compact "Why Us?" mini-card with 2–3 small ring stats side by side plus a
    row of 3 small circular icon buttons beneath it.
- All numeric stats animate as **count-up on reveal**, easing to their final
  value over roughly 1–1.5s.

---

## 6. Motion Principles (summary to encode in CSS/JS)

1. **Hero text:** one-time staggered character reveal on load, ~40–60ms delay per
   letter, ease-out.
2. **Idle float:** decorative tag pills continuously drift + gently rotate
   (subtle, slow, randomized per-element phase — not synchronized).
3. **Marquee:** linear infinite horizontal scroll, constant speed, band itself
   statically rotated a few degrees.
4. **Scroll-linked stack transition:** service cards use a pinned/sticky scroll
   section where progress maps to (a) current card fading/lifting away, (b) next
   card's peeking tab growing into full view, (c) pagination dot updating.
5. **Count-up stats:** trigger once per card as it becomes active, ease-out cubic,
   number ticks from 0 (or previous value) to target.
6. **Everything else is static** — no hover-tilt or parallax observed beyond the
   above; keep motion restrained and purposeful rather than decorative.

---

## 7. Spacing & Radius Scale (approximate)

| Token | Value |
|---|---|
| Outer shell radius | 28–32px |
| Section card radius | 24px |
| Small chip/pill radius | 16px |
| Button/tag radius | 999px (full pill) |
| Section internal padding | 48–64px |
| Card grid gap | 20–24px |

---

## 8. How to apply this to a new project

- Keep: the white-shell-on-tinted-canvas structure, the two-accent-color keyword
  highlighting in headlines, the floating-chip-on-photo pattern, and the stacked
  folder-tab service carousel — these are the load-bearing signature moves.
- Swap: brand name/logo, photography subject, the two accent hues (keep it to
  exactly two, one warm-adjacent/lime and one cool-adjacent/lavender works well
  but any two soft accents against black/white/sage will read the same way),
  and copy.
- Simplify if needed: if the scroll-pinned stacked-card carousel is too complex
  for the project's timeline, it can degrade gracefully to a plain 3-up card grid
  without the peeking-tab/stack transition and still keep the rest of the system
  intact.
