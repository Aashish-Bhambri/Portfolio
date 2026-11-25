---
name: Aashish Bhambri Portfolio
description: High-contrast dark-studio developer portfolio anchored by a crisp white credential card and ember-orange / volt-lime signal accents.
colors:
  ember-signal: "#f46c38"
  ember-ink: "#b84316"
  volt-lime: "#c5ff41"
  espresso-canvas: "#151312"
  surface-veil: "rgba(255, 255, 255, 0.03)"
  obsidian-dock: "rgba(28, 25, 23, 0.9)"
  deep-ink: "#111111"
  charcoal-press: "#252220"
  paper-anchor: "#ffffff"
  alabaster-tint: "#f4f1ed"
  alabaster-hover: "#e8e4dc"
  alabaster-rule: "#f0ece5"
  ghost-mist: "rgba(182, 180, 189, 0.55)"
  taupe-secondary: "#998f8f"
  slate-bio: "#555555"
  stone-micro: "#666666"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif"
    fontSize: "6rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "0em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.333
    letterSpacing: "0.05em"
  micro:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.05em"
  tooltip:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0em"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section-sm: "80px"
  section-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.ember-signal}"
    textColor: "{colors.espresso-canvas}"
    rounded: "{rounded.xl}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.espresso-canvas}"
    textColor: "{colors.paper-anchor}"
    rounded: "{rounded.xl}"
    padding: "10px 16px"
  button-social:
    backgroundColor: "{colors.alabaster-tint}"
    textColor: "{colors.espresso-canvas}"
    rounded: "{rounded.xl}"
    padding: "10px 12px"
  button-social-hover:
    backgroundColor: "{colors.alabaster-hover}"
  card-profile:
    backgroundColor: "{colors.paper-anchor}"
    textColor: "{colors.espresso-canvas}"
    rounded: "{rounded.3xl}"
    padding: "28px"
  card-surface:
    backgroundColor: "{colors.surface-veil}"
    textColor: "{colors.paper-anchor}"
    rounded: "{rounded.3xl}"
    padding: "20px"
  chip-tech:
    backgroundColor: "{colors.alabaster-tint}"
    textColor: "{colors.espresso-canvas}"
    rounded: "{rounded.lg}"
    padding: "4px 10px"
  input-field:
    backgroundColor: "{colors.surface-veil}"
    textColor: "{colors.paper-anchor}"
    rounded: "{rounded.2xl}"
    padding: "12px 16px"
  nav-pill:
    backgroundColor: "{colors.obsidian-dock}"
    textColor: "{colors.taupe-secondary}"
    rounded: "{rounded.full}"
    padding: "8px 10px"
---

# Design System: Aashish Bhambri Portfolio

## Overview

**Creative North Star: "The High-Contrast Workbench"**

The High-Contrast Workbench pairs a deep espresso-dark editorial canvas (`#151312`) with a luminous white credential anchor card (`#ffffff`) and high-voltage Ember Signal (`#f46c38`) and Volt Lime (`#c5ff41`) accents. Built for rapid engineering-manager evaluation, the system balances bold, kinetic oversized typography against crisp, scannable proof blocks—letting visitors read the engineer's credentials at a glance on the left while scrolling through projects, experience milestones, stack capabilities, and direct contact on the right.

The aesthetic is intentionally bold, kinetic, and recruiter-scannable rather than clinical or monochromatic. It rejects generic sterile white SaaS templates and low-contrast monochrome grids in favor of tactile rounded surfaces, stacked two-tone display headlines, and decisive signal colors that mark active stages, completed milestones, and primary conversion paths.

**Key Characteristics:**
- High-contrast polarity between the sticky Paper Anchor (`#ffffff`) profile island and the Espresso Canvas (`#151312`) narrative stage
- Oversized dual-tone uppercase display headings pairing solid white (`#ffffff`) with translucent Ghost Mist (`rgba(182, 180, 189, 0.55)`)
- Tactile, squircle-rounded containers (`16px`–`24px` radii) with hairline borders and selective ambient accent glows
- Dual signal hierarchy: Ember Signal (`#f46c38` paired with `#151312` ink on solid fills, `#b84316` on white surfaces) for primary action and active state; Volt Lime (`#c5ff41` paired with `#000000` ink) for completion and status indicators

## Colors

A dark-first studio palette anchored by warm espresso neutrals, a single stark white credential surface, and two high-energy signal accents tuned to WCAG AA contrast ratios.

### Primary
- **Ember Signal** (`#f46c38`): Primary brand and conversion accent. Used for the primary "Get in Touch" and "Send Message" CTAs (paired with `#151312` ink for 6.28:1 contrast), active navigation pill highlight, active timeline stage node and border, focus rings, and card hover highlights on dark surfaces.
- **Ember Ink** (`#b84316`): Accessible deep-ember text token used exclusively when orange typography sits on Paper Anchor (`#ffffff`) surfaces (5.9:1+ contrast).

### Secondary
- **Volt Lime** (`#c5ff41`): Verification and completion accent. Used for completed timeline milestone nodes and connectors and contact form success banners.

### Neutral
- **Espresso Canvas** (`#151312`): Global page canvas background, primary dark ink inside the white credential card and on solid Ember Signal buttons, and dark secondary CTA fill.
- **Surface Veil** (`rgba(255, 255, 255, 0.03)`): Resting background for project cards, experience cards, tech stack tiles, and form fields on the dark stage.
- **Obsidian Dock** (`rgba(28, 25, 23, 0.9)`): Frosted floating navigation pill background (`backdrop-blur-xl`).
- **Deep Ink** (`#111111`): Hover/focus tooltip backdrop and reserved input surface token.
- **Charcoal Press** (`#252220`): Hover state fill for dark secondary buttons (`#151312` at rest).
- **Paper Anchor** (`#ffffff`): Surface background for the sticky profile summary card and primary headline/body ink on the dark stage.
- **Alabaster Tint** (`#f4f1ed`): Soft warm neutral surface for technology chips and social action buttons inside the light profile card.
- **Alabaster Hover** (`#e8e4dc`): Pressed/hover state fill for Alabaster Tint social buttons.
- **Alabaster Rule** (`#f0ece5`): Hairline `1px` top divider separating profile summary content from the CTA stack.
- **Ghost Mist** (`rgba(182, 180, 189, 0.55)`): Recessed second-line color for dual-tone section display headers (`DEVELOPER`, `PROJECTS`, `JOURNEY`, `STACK`, `TOGETHER`), passing ≥3:1 large-text WCAG contrast on `#151312`.
- **Taupe Secondary** (`#998f8f`): Warm muted body copy, section descriptions, form labels, and inactive navigation icon ink on dark surfaces.
- **Slate Bio** (`#555555`): Readable secondary paragraph ink inside the white profile card.
- **Stone Micro** (`#666666`): Accessible monospace section micro-label ink inside the white profile card (5.74:1 on `#ffffff`).

### Named Rules
**The Polarity Anchor Rule.** Only the sticky profile summary card uses Paper Anchor (`#ffffff`) as a card canvas; all scrolling narrative sections live on Espresso Canvas (`#151312`) and Surface Veil (`rgba(255, 255, 255, 0.03)`) so the engineer's identity remains permanently anchored in view.

**The Signal Separation Rule.** Ember Signal (`#f46c38`) owns attention, hover intent, and active progress; Volt Lime (`#c5ff41`) owns completed states and success feedback. Never pair solid Ember Signal or Volt Lime fills with white text—always use dark `#151312` / `#000000` ink on solid accent fills, and use Ember Ink (`#b84316`) for orange text on `#ffffff`.

## Typography

**Display Font:** System Sans Stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif`)
**Body Font:** System Sans Stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif`)
**Label/Mono Font:** System Monospace Stack (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`)

**Character:** Tight-tracked, heavy-weight geometric sans headings (`800` weight, `-0.025em` tracking) deliver poster-scale impact using native system rendering for zero font-load latency, while monospace micro-labels add crisp engineering metadata rhythm.

### Hierarchy
- **Display** (`800`, `1.875rem` mobile scaling to `6rem` at `lg+`, `0.95` line-height, `-0.025em` tracking): Stacked two-line uppercase section headers (`FULL-STACK / DEVELOPER` as the single page `<h1>`, followed by `<h2>` headers for `RECENT / PROJECTS`, `EXPERIENCE & / JOURNEY`, `DEVELOPER / STACK`, `LET'S WORK / TOGETHER`). Line 1 renders in Paper Anchor (`#ffffff`); line 2 renders in Ghost Mist (`rgba(182, 180, 189, 0.55)`).
- **Headline** (`800`, `1.5rem`–`1.875rem`, `1.2` line-height, `-0.025em` tracking): Profile card identity name (`Aashish Bhambri`) in `#151312`.
- **Title** (`700`, `1.125rem`–`1.5rem`, `1.375` line-height): Project titles, experience milestone titles, stack item names, and tier headings (`<h3>`).
- **Body** (`400`, `0.75rem`–`1.125rem`, `1.625` line-height): Bio summary (`Slate Bio`), section intro copy (capped at `max-w-2xl` / `672px`), and milestone descriptions (`Taupe Secondary`).
- **Label** (`600`–`700`, `0.75rem`, `0.05em` tracking, uppercase): Form field labels and milestone captions.
- **Micro / Tooltip** (`600`, `0.625rem`–`0.6875rem`): Monospace metadata labels (`11px` / `0.6875rem`) and mobile nav tooltips (`10px` / `0.625rem`).

### Named Rules
**The Dual-Tone Stack Rule.** Every major section opens with a two-line uppercase `800`-weight Display heading at `0.95` line-height: the top phrase in full Paper Anchor (`#ffffff`) and the bottom anchor word in Ghost Mist (`rgba(182, 180, 189, 0.55)`), keeping a single `<h1>` in `About` and `<h2>` on subsequent sections.

## Layout

The application uses a centered `1280px` (`max-w-7xl`) stage with responsive horizontal gutters (`16px` base, `24px` at `sm`, `32px` at `lg`) and Lenis smooth scrolling (automatically bypassed when `prefers-reduced-motion: reduce` is enabled) across anchor sections (`#about`, `#projects`, `#experience`, `#tech-stack`, `#contact`).

- **Mobile / Tablet (`<1024px`):** Single-column stacked flow (`pt-24` / `96px` top offset clearing the fixed navigation dock, `gap-8` / `32px` to `gap-10` / `40px` between the profile card and content stream).
- **Desktop (`1024px+` / `lg` & `xl`):** Asymmetric dual-column split (`gap-12` / `48px`): a sticky left profile sidebar (`380px` at `lg`, `420px` at `xl`, `lg:sticky lg:top-24`, natural content height without fixed viewport height clipping) paired with a `flex-1` right narrative column (`max-w-3xl` / `768px` at `lg`, `max-w-4xl` / `896px` at `xl`, `pt-24` / `96px` top breathing room).
- **Vertical Rhythm:** Generous inter-section spacing (`80px` mobile, `112px` at `sm`, `128px` at `lg`) separates each focal block, paired with `scroll-mt-24` (`96px`) / `scroll-mt-28` (`112px`) anchor offsets so jump-links clear the floating navbar.
- **Internal Grids:** About highlight facts sit in a 3-column definition strip (`sm:grid-cols-3`); Contact name/email inputs use a 2-column responsive split (`sm:grid-cols-2`); Developer Stack cards are grouped by category (`Frontend & Styling`, `Backend & Databases`, `Workflow`) across `1 → 2 → 3` columns (`xl:grid-cols-3`).

## Elevation & Depth

This system uses a **hybrid elevation model**: dark narrative surfaces are flat and hairline-bordered at rest (`1px solid rgba(255, 255, 255, 0.05)`–`0.10`), while selective ambient glows and deep drop shadows elevate only the sticky white profile card, the floating navigation dock, and active accent states.

### Shadow Vocabulary
- **Profile Anchor Lift** (`box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)`): Grounds the white profile summary card (`Paper Anchor`) above the dark canvas.
- **Dock Backdrop Shadow** (`box-shadow: 0 10px 35px rgba(0, 0, 0, 0.6)`): Separates the fixed `backdrop-blur-xl` navigation pill from scrolling content beneath.
- **Ember Active Halo** (`box-shadow: 0 0 14px rgba(244, 108, 56, 0.45)`): Marks the currently active route button in the floating navbar.
- **Timeline Pulse Halo** (`box-shadow: 0 0 0 5px rgba(244, 108, 56, 0.2), 0 0 20px rgba(244, 108, 56, 0.6)`): Draws focus to active current-stage nodes in the experience timeline (pulse respects `prefers-reduced-motion`).
- **Lime Completion Glow** (`box-shadow: 0 0 15px rgba(197, 255, 65, 0.4)`): Highlights completed milestone indicators.
- **Accent Card Ambient Tint** (`box-shadow: 0 10px 30px rgba(244, 108, 56, 0.12)`): Subtle colored elevation beneath active milestone cards.

### Named Rules
**The Flat-At-Rest Surface Rule.** Dark content cards (`Project`, `TechStack`, completed `Experience` cards) carry zero drop shadow at rest; depth comes from subtle `rgba(255, 255, 255, 0.05)` borders, and interactive hover shifts appear only on linked cards (`href` present).

## Shapes

Generous squircle geometry softens the dark technical palette, scaling corner radius down proportionally from large containers to nested interactive controls:

- **Full Pill (`9999px`):** Floating navigation container, active nav icon indicator, timeline milestone dots.
- **Outer Card (`24px` / `rounded-3xl`):** Profile summary card, Project cards, Experience cards (`16px` on compact `<640px` viewports for Experience/Project cards).
- **Nested Frame & Fields (`16px` / `rounded-2xl`):** Monogram avatar container, Contact form inputs and textarea, status alert banners, Tech Stack cards, and Project thumbnails (`12px` mobile / `16px` `sm+`).
- **Action Buttons & Badges (`12px` / `rounded-xl`):** Primary orange CTAs, dark resume button, social links, project arrow action box, and tech icon wells.
- **Micro Chips (`8px` / `rounded-lg`):** Core technology tag pills (`bg-[#f4f1ed]`).

## Components

Tactile and confident: generous squircle radii, brisk `150ms`–`300ms` transitions, crisp `active:scale-[0.98]` press feedback, and accessible focus rings across all interactive surfaces.

### Buttons
- **Shape:** Rounded rectangle (`12px` radius).
- **Primary:** Ember Signal (`#f46c38`) fill with Espresso Canvas (`#151312`) bold text (`14px`), `12px 24px` padding (`Get in Touch`, `Send Message` uses `14px 32px`), subtle orange shadow (`rgba(244, 108, 56, 0.2)`).
- **Hover / Focus:** `brightness(105%)` on hover, `scale(0.98)` on active press, and `2px` Ember Signal focus-visible outline; disabled state drops to `opacity: 0.6` with `cursor: not-allowed`.
- **Secondary:** Espresso Canvas (`#151312`) fill with `#ffffff` semibold `12px` text (`10px 16px` padding), shifting to Charcoal Press (`#252220`) on hover (`View Resume (PDF)`).
- **Social / Utility:** Alabaster Tint (`#f4f1ed`) fill with `#151312` semibold `12px` text (`10px 12px` padding), shifting to Alabaster Hover (`#e8e4dc`) on hover.

### Chips
- **Style:** Alabaster Tint (`#f4f1ed`) fill, `#151312` semibold `12px` text, `8px` radius, `4px 10px` padding, no border.
- **State:** Static informational tags (`Core Technologies` list on the profile card).

### Cards / Containers
- **Corner Style:** `24px` (`rounded-3xl`) for profile, project, and experience cards; `16px` (`rounded-2xl`) for compact tech stack tiles.
- **Background:** Paper Anchor (`#ffffff`) for the profile card; Surface Veil (`rgba(255, 255, 255, 0.03)`) for dark content cards.
- **Shadow Strategy:** `Profile Anchor Lift` on the white card; flat at rest on dark cards (`The Flat-At-Rest Surface Rule`).
- **Border:** `1px solid rgba(0, 0, 0, 0.05)` on the white card; `1px solid rgba(255, 255, 255, 0.05)` on dark cards (interactive project links highlight to `rgba(244, 108, 56, 0.4)` on hover); dashed `rgba(255, 255, 255, 0.15)` for future timeline milestones.
- **Internal Padding:** `20px`–`28px` on the profile card; `14px`–`24px` across project, experience, and stack cards.

### Inputs / Fields
- **Style:** Surface Veil (`rgba(255, 255, 255, 0.03)`) background, `1px solid rgba(255, 255, 255, 0.10)` border, `16px` radius, `12px 16px` padding (`16px` all around on textarea), `#ffffff` text with `rgba(255, 255, 255, 0.55)` placeholders.
- **Focus:** Border shifts to Ember Signal (`#f46c38`) with a `2px` Ember Signal `:focus-visible` outline.
- **Feedback States:** Inline alert banner above fields using `role="alert"` / `role="status"` — Volt Lime (`rgba(197, 255, 65, 0.1)`) fill and `#c5ff41` text/border on success; translucent red (`rgba(251, 44, 54, 0.1)` / `#fca5a5` text) on error.

### Navigation
- **Style:** Fixed top-center floating pill (`top: 16px` mobile / `24px` `sm+`, `z-50`), Obsidian Dock (`rgba(28, 25, 23, 0.9)`) with `backdrop-blur-xl`, `1px solid rgba(255, 255, 255, 0.10)`, `Dock Backdrop Shadow`.
- **States:** Mobile (`<640px`) uses `44×44px` circular icon pills with hover/focus tooltips (`10px`); `sm+` (`>=640px`) displays compact icon + text labels (`About`, `Projects`, `Experience`, `Stack`, `Contact`). Active item uses Ember Signal (`#f46c38`) fill with `#151312` dark ink, `aria-current="location"`, and `Ember Active Halo`.

### Experience Timeline
- **Signature Component:** Vertical connected milestone rail pairing status-coded circular nodes (`32px` mobile / `40px` `sm+`) with `2px` gradient or dashed vertical connectors (`#c5ff41` check circle for completed education, `motion-reduce:animate-none` pulsing `#f46c38` bolt node with gradient card tint for active internship, and dashed `rgba(255, 255, 255, 0.3)` sparkles node for future availability).

## Do's and Don'ts

### Do:
- **Do** preserve the single Paper Anchor (`#ffffff`) sticky profile card against the Espresso Canvas (`#151312`) stage so identity and primary CTAs stay immediately scannable (`The Polarity Anchor Rule`).
- **Do** pair solid Ember Signal (`#f46c38`) and Volt Lime (`#c5ff41`) surfaces strictly with dark (`#151312` / `#000000`) ink, and use Ember Ink (`#b84316`) for orange text on white surfaces (`The Signal Separation Rule`).
- **Do** maintain the nested corner-radius hierarchy (`24px` outer cards → `16px` inner fields/frames → `12px` buttons/icon boxes → `8px` chips).
- **Do** open major content sections with the two-line `800`-weight uppercase Display header (`0.95` line-height) splitting solid white and Ghost Mist (`rgba(182, 180, 189, 0.55)`).

### Don't:
- **Don't** turn dark content sections into sterile white SaaS cards or add `cursor-pointer` / arrow cues to non-interactive cards (`The Flat-At-Rest Surface Rule`).
- **Don't** add unlayered CSS element padding/radius rules in `src/App.css` that override Tailwind v4 utilities, or strip `:focus-visible` outlines without replacement.
- **Don't** place white text on Ember Signal (`#f46c38`) or Volt Lime (`#c5ff41`) solid backgrounds.
- **Don't** load unrequested decorative font families or complex multi-hue gradients that dilute the two-accent Ember Signal + Volt Lime system.
