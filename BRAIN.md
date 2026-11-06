# BRAIN — Short-Term Working Memory

> **Repository:** `mosu-web` (Modern Solution - MOSU)  
> **Last Updated:** 2026-11-06  
> **Active Maintainer/Agent:** Antigravity AI Assistant  
> **Purpose:** Ephemeral working memory tracking active tasks, architectural decisions in flight, and immediate next steps.

---

## 🎯 Today's Active Focus & Objectives

### 1. AI Context Workflow & Governance Setup (In Progress)
- [x] Create `llms.txt` navigation guide at root.
- [x] Update `AGENTS.md` with Next.js 16 rules, MOSU architecture guidelines, active skills (`/graphify`, `/antislop-*`, `/ponytail`, `/modern-web-guidance`), and MCP Routing & Execution Profile.
- [x] Establish `BRAIN.md` as short-term memory.
- [x] Reconstruct `CHANGELOG.md` from repository git history.
- [ ] Initialize `/graphify` knowledge graph (`graphify-out/`) and configure Git post-commit auto-update hook.

### 2. Service Packages & Interactive Configurator Readiness
- **Main Landing Pricing (`src/components/Pricing/Pricing.jsx`):**
  - Features two primary service tiers: *Web Presence & Company Profile* (`starter`: Rp 3.500.000) and *Dynamic Business Web & Portal* (`business`: Rp 8.500.000), plus a custom enterprise inquiry card.
  - Interactive radio selection dynamically populates WhatsApp pre-filled inquiry messages.
- **Dedicated Configurator Route (`src/app/inventory-system/`):**
  - Modular warehouse & inventory system calculator (`InventoryConfigurator.jsx`) reading from `src/data/inventorySystem.js`.
  - Fully responsive with client-side price calculation and instant WhatsApp order estimation handoff.

### 3. antislop & Impeccable Quality Hygiene
- **UI/Visual (`antislop-ui`):** Enforce `DESIGN.md` tokens (brand blue `#2563EB`, background `#FFFFFF`/`#F8FAFC`, dark navy footer `#0B1120`). Header has backdrop blur; no unnecessary glow or decorative icons.
- **Copywriting (`antislop-copywriting`):** Zero buzzwords, no AI-slop phrases, strictly zero em dashes (`—`) in newly written UI copy, verified client proof only.
- **Code Hygiene (`antislop-code` & `ponytail`):** No decorative comment banners, no redundant narration, write minimum necessary abstractions with native platform features.

---

## 🗺️ Codebase Knowledge Graph State (`graphify-out/`)

- **Status:** Initialized.
- **Scan Root:** `.`
- **Key Modules & Clusters:**
  - `src/app/page.js`: Main landing page god node linking layout, header, pricing, and showcase.
  - `src/components/Header/`: Client navigation island with mobile drawer state and escape listeners.
  - `src/components/Pricing/`: Client pricing island with tier state and dynamic WA message generation.
  - `src/components/InventoryConfigurator/`: Client calculator island consuming `src/data/inventorySystem.js`.
- **Auto-Update Mechanism:** Active via Git post-commit hook (`.git/hooks/post-commit`).

---

## 📌 Architectural Decisions in Effect

1. **Routing:** Pure App Router (`src/app/`). Dedicated routes have their own `page.js` and `page.module.css`.
2. **Component Architecture:** Pure React Server Components unless browser state is required. Interactive islands (`Header`, `Pricing`, `InventoryConfigurator`) use `"use client"`.
3. **Styling Paradigm:** CSS Modules only. Shared tokens live in `src/app/globals.css`.
4. **Direct Outreach Conversion:** Inquiries route directly to `https://wa.me/6287725064056` with contextual messages.

---

## 📋 Backlog & Known Technical Debt

- [ ] **`README.md` Modernization:** The existing `README.md` describes an earlier project concept ("Virtual Try-On Technology" with "Tailwind CSS via CDN"). It should be updated to accurately describe the current Next.js 16 Digital Studio company profile.
- [ ] **Cross-Device Tap Target Audit:** Verify mobile drawer link touch targets on small Android and iOS screens to guarantee compliance with the 44px minimum rule.
- [ ] **SEO & OpenGraph Assets:** Add custom `opengraph-image.png` and `twitter-image.png` under `src/app/` for rich social preview cards.

---

## 💡 How AI Agents Should Maintain This File

1. Read this file at the start of any session to resume ongoing work immediately.
2. Mark completed tasks (`[x]`) and add any new blockers or design decisions made during the session.
3. Clean up stale ephemeral notes once features are committed and logged in `CHANGELOG.md`.
