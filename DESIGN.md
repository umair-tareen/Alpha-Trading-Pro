# Design

## Theme

Dark, precise, "refined trading terminal." A near-black cool canvas with a single committed emerald signal color (the existing brand identity, preserved). The logo mark runs mint to emerald to teal; that ramp is reserved for graphics and the market visualizations, never for text. A muted trading red appears only as the deliberate counterpart to emerald in upside/downside and sell/teach contrasts.

Named aesthetic lane: Linear-grade precision plus Supabase dark-emerald restraint plus a Bloomberg-terminal seriousness, executed with discipline. Explicitly not: navy-and-gold fintech, purple-gradient SaaS, or editorial-serif magazine.

## Color

Strategy: Committed. Emerald carries the brand; everything else is near-black, ink, and hairline. Emerald scarcity rule: at most one filled emerald button per viewport. Everything else is ghost or outline.

```
--bg:            #0A0E12   /* canvas, near-black cool */
--bg-soft:       #0E141A   /* alternating section band */
--surface:       #12181F   /* cards, panels */
--surface-2:     #161D26   /* raised / hovered */
--border:        rgba(255,255,255,0.08)   /* hairline */
--border-strong: rgba(255,255,255,0.14)

--text:          #EAEEF3   /* primary, near-white cool, not pure white */
--text-muted:    #9BA6B4   /* secondary, passes 4.5:1 on --bg */
--text-faint:    #6B7686   /* non-essential labels only */

--emerald:        #10B981  /* primary brand, CTAs, confirms */
--emerald-bright: #34D399  /* hover, focus glow, highlights */
--mint:           #6EE7B7  /* logo top, graphic accent only */
--teal:           #0D9488  /* logo bottom, secondary graphic accent */
--on-emerald:     #04130D  /* dark text on emerald fills (lit surface) */

--red:           #F0556B   /* downside / "what mentors sell", used sparingly */
```

Rules:
- Dark text (`--on-emerald`) on emerald fills, never white. White on `#10B981` fails contrast and reads cheap.
- The mint to teal gradient is for SVG/canvas graphics and the logo only. Never `background-clip: text`.
- Red is always paired with an icon or label, never color alone.

## Typography

Font roles (none from the reflex-reject list):
- Display (hero, section headings): **Archivo**, weights 700 to 800, letter-spacing -0.02em to -0.03em.
- Body and UI: **Hanken Grotesk**, weights 400/500/600, line-height 1.6 (light on dark needs the extra room).
- Data and labels (prices, day markers, numeric tags): **Spline Sans Mono**, weight 500, slight positive tracking.

Pairing axis: humanist-grotesque body against a monospace data face. The mono is justified (this is a trading product where figures matter), not costume.

Scale: fluid `clamp()`, modular ratio at or above 1.25.
```
Hero:        clamp(2.75rem, 6vw, 5rem)   /* ceiling under 6rem */
Section h2:  clamp(2rem, 4vw, 3.25rem)
Sub / h3:    clamp(1.25rem, 2vw, 1.6rem)
Body lead:   1.125rem
Body:        1rem
Small:       0.875rem
```
Use `text-wrap: balance` on h1 to h3, `text-wrap: pretty` on prose. Display letter-spacing floor at -0.04em (never tighter).

## Spacing & Radius

8px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
Section padding: `clamp(4rem, 8vw, 7rem)` vertical. Vary spacing for rhythm; do not use one uniform gap everywhere.

Radius: 8px buttons/inputs, 12px cards, 16px large panels, 9999px pills.

## Depth (no glassmorphism)

Surfaces are solid, not blurred glass. Depth comes from layered near-blacks plus a 1px hairline border, not `backdrop-filter`.
```
Hairline card:   background var(--surface); border 1px var(--border)
Lit top edge:    inset 0 1px 0 rgba(255,255,255,0.04)
Elevated:        0 24px 48px -24px rgba(0,0,0,0.7)
Emerald focus:   0 0 0 1px rgba(16,185,129,0.35), 0 14px 40px -10px rgba(16,185,129,0.35)
```
Emerald glow is reserved for the primary CTA and the hero focal point only.

## Motion

- Easing: ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)`. No bounce, no elastic.
- Durations 200 to 500ms. Hover and focus transitions are subtle.
- One ambient system per surface: the hero market line draws itself in once on load. Section reveals are gentle and enhance an already-visible default (never gate content on a transition).
- `@media (prefers-reduced-motion: reduce)`: all entrance and ambient motion becomes static or an instant crossfade.

## Imagery

This brand ships imagery as custom market visualizations, not stock photos and not fabricated trade screenshots:
- Hero: a crafted SVG/canvas price-action line in emerald to teal that animates in.
- Section accents: a clean equity-curve and an order-flow style motif built in SVG.
- The Alpha Trading "A" logo mark.
No Unsplash people-at-laptops, no invented P&L screenshots, no colored-div placeholders.

## Components

- Primary CTA: emerald fill, `--on-emerald` text, 8px radius, emerald focus glow. One per viewport.
- Secondary CTA: transparent, 1px hairline border, `--text`. Hover lifts border to emerald.
- Package card: solid `--surface`, hairline border. Featured (Intermediate) gets an emerald border, a small "Most chosen" tag, and the only emerald-glow on the card row.
- Terminal section: visually distinct band (`--bg-soft`), framed as a separate product, so it does not read as a 4th mentorship tier.
- Sell-vs-teach contrast: red X column against emerald check column, each item labeled.
- Curriculum: Day 01 to 04 in Spline Sans Mono. This is the one place numbered markers are legitimate (a real ordered sequence).

## Absolute bans (honored from the impeccable skill)

No gradient text. No decorative glassmorphism. No 01/02/03 numbered eyebrows as section scaffolding (the Day sequence is the single sanctioned exception). No identical icon-card grids repeated endlessly. No big-number/small-label hero-metric template. No tiny uppercase tracked eyebrow above every section. No side-stripe borders. No em dashes anywhere in copy. Test every heading at every breakpoint for overflow.
