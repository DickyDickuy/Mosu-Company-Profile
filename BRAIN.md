# BRAIN — Short-Term Working Memory

> **Repository:** `mosu-web` (Modern Solution - MOSU)  
> **Last Updated:** 2026-11-06  
> **Active Maintainer/Agent:** Antigravity AI Assistant  
> **Purpose:** Ephemeral working memory tracking active tasks, architectural decisions in flight, and immediate next steps.

---

## 🎯 Today's Active Focus & Objectives

### 1. Portfolio Expansion & Conversion Structure (Completed)
- [x] Capture high-resolution 16:9 screenshots for 3 new client deployments (`PT Krakatau Baja Konstruksi`, `Charlotte Vanilla House`, `PPTQ Muhammadiyah Ibnu Juraimi`).
- [x] Add PT Krakatau Baja Konstruksi as a full-width flagship showcase card spanning 2 columns on desktop.
- [x] Separate Charlotte into two distinct contracts: live `Charlotte Vanilla House` (`charlottevanillahouse.com`) and archived `Charlotte Coco Sugar`.
- [x] Convert 4 unreachable legacy client links (`randy.nominanetwork.tech`, `charlottecocosugar.com`, `exionpw.com`, `pwczone.com`) into non-clickable `Delivered Archive` status badges, eliminating dead controls (R-26).
- [x] Update Scorecard metrics to `20+ Projects Delivered`, `99.9% Server Uptime`, `5 Engineers & Designers`, `100% On-Time Delivery`.
- [x] Reorder page narrative and navigation: `Projects` -> `Services` -> `Tech Stack` -> `About` -> `Pricing`.
- [x] Upgrade Tech Stack & Tools with 16 colored inline SVG brand icons + labels (`Dokploy`, `Astro`, `n8n`, `Tauri`, `Laravel`, `Docker`, `PostgreSQL`, `Cloudflare`, etc.).

### 2. antislop & Impeccable Quality Hygiene
- **UI/Visual (`antislop-ui`):** Verified on desktop (1440px) and mobile (390px). Flagship card adapts to single-column on mobile with zero horizontal overflow.
- **Copywriting (`antislop-copywriting`):** 100% verified zero em dashes (`—`) across Hero, About, and Footer copy. Synchronized all mentions to "20+ delivered projects".
- **Code Hygiene (`antislop-code` & `ponytail`):** Pure native inline SVGs with no external icon library dependencies.

---

## 🗺️ Codebase Knowledge Graph State (`graphify-out/`)

- **Status:** Active.
- **Auto-Update Mechanism:** Verified via Git post-commit hook.

---

## 📌 Architectural Decisions in Effect

1. **Portfolio Hierarchy:** PT Krakatau Baja Konstruksi is the top 2-column flagship card, followed by 6 live two-column cards, followed by 4 archived cards.
2. **Archived Cards Pattern:** Cards for offline domains render `.projectCardArchived` without link lift or external href overlays, preserving portfolio proof without sending prospects to broken URLs.
3. **Conversion Order:** High-intent `Pricing` immediately precedes the `Contact` / WhatsApp footer; proof and capabilities are introduced upfront.
4. **Tech Stack Presentation:** Accessible Brand Icon + Name pills with accurate brand colors.

---

## 📋 Backlog & Known Technical Debt

- [ ] **`README.md` Modernization:** The existing `README.md` describes an earlier project concept ("Virtual Try-On Technology" with "Tailwind CSS via CDN"). It should be updated to accurately describe the current Next.js 16 Digital Studio company profile.
- [ ] **SEO & OpenGraph Assets:** Add custom `opengraph-image.png` and `twitter-image.png` under `src/app/` for rich social preview cards.
