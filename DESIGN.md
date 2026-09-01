---
name: MOSU Design System
description: Modern, clean, and confident design tokens and rules for Modern Solution digital studio
colors:
  primary: "#2563EB"
  primary-hover: "#1D4ED8"
  primary-light: "#EFF6FF"
  text: "#0F172A"
  text-secondary: "#334155"
  text-muted: "#64748B"
  text-subtle: "#94A3B8"
  bg: "#FFFFFF"
  bg-alt: "#F8FAFC"
  bg-dark: "#0B1120"
  border: "#E2E8F0"
typography:
  fontFamily: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif"
  display:
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.25
  body:
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
---

## Overview

MOSU's visual identity reflects high-caliber technical craft, precision, and modern software engineering. It combines high-contrast typography, subtle glassmorphic navigation, distinct blue accents, and purposeful micro-interactions.

## Colors

- **Primary (`#2563EB`)**: Used for primary action buttons, key highlights, badges, and accent text.
- **Primary Hover (`#1D4ED8`)**: Used for hover states on primary interactive elements.
- **Primary Light (`#EFF6FF`)**: Subtle background tint for icon badges, tags, and selection.
- **Text (`#0F172A`)**: Deep slate for high-contrast, readable headings.
- **Text Secondary (`#334155`)**: Subdued slate for body copy and subheadings.
- **Text Muted (`#64748B`)**: Secondary information, metadata labels, and timestamps.
- **Backgrounds**: Pure white (`#FFFFFF`) with alternating soft slate (`#F8FAFC`) sections. Deep navy (`#0B1120`) footer.

## Typography

- **Font Family**: Plus Jakarta Sans (`var(--font-sans)`).
- **Scale**:
  - H1: `clamp(2.25rem, 5vw, 3.5rem)` (800 weight)
  - H2: `clamp(1.75rem, 3.5vw, 2.5rem)` (700 weight)
  - H3: `1.25rem - 1.4rem` (700 weight)
  - Body: `1rem` (400/500 weight, 1.65 line-height)

## Layout

- **Max Container Width**: 1140px centered with 1.5rem padding.
- **Grid Layouts**:
  - Services: 3 columns on desktop, 1 column on mobile/tablet (`< 960px`).
  - About: 2 columns (story text + 2x2 stat cards), stacked on mobile.
  - Projects: 2 columns (image container + content info), stacked on mobile.

## Elevation & Depth

- **Shadow SM**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` (cards at rest)
- **Shadow MD**: `0 4px 6px -1px rgba(0, 0, 0, 0.08)` (button hover, stat card hover)
- **Shadow LG**: `0 10px 15px -3px rgba(0, 0, 0, 0.08)` (project cards & service cards on hover)

## Shapes

- **Badges/Pills**: Full pill radius (`9999px`)
- **Cards/Containers**: Medium (`10px`) to Large (`16px`) rounded corners
- **Buttons/Inputs**: Small (`6px`) rounded corners

## Components

- **Header / Navigation**: Sticky top header with backdrop blur, brand logo on the left, navigation links in center, WhatsApp CTA and mobile hamburger on the right.
- **Primary CTA**: `#2563EB` solid fill with white text, subtle hover lift (`translateY(-2px)`).
- **Outline CTA**: Transparent with subtle border, primary tint on hover.
- **Project Cards**: Two-column layout featuring image on the left and project details on the right with tag badges and external link arrows.

## Do's and Don'ts

### Do's
- Use semantic HTML tags (`<nav>`, `<header>`, `<main>`, `<article>`, `<footer>`).
- Maintain consistent 1.65 line height for comfortable readability.
- Use vector SVG icons with consistent stroke weight.
- Provide responsive `sizes` attribute on all Next.js images.

### Don'ts
- Do not use emoji icons in place of structured SVG icons.
- Do not hide mobile navigation without providing an accessible toggle.
- Do not hardcode hex colors directly in components when CSS tokens exist in `globals.css`.
