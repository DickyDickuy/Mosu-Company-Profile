# Changelog

All notable changes to the **Modern Solution (MOSU)** company profile project (`mosu-web`) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] - 2026-11-06

### Added
- **AI Context & Navigation System:**
  - Added `llms.txt` navigation guide for AI coding assistants.
  - Added `BRAIN.md` as short-term working memory and active task registry.
  - Added `CHANGELOG.md` documenting historical milestones and version transitions.
- **Codebase Knowledge Graph Integration (`/graphify`):**
  - Generated initial codebase knowledge graph (`graphify-out/graph.json`, `graphify-out/GRAPH_REPORT.md`, `graphify-out/graph.html`).
  - Configured Git post-commit hook for automated incremental graph updates on future code modifications.
- **AI Agent Governance:**
  - Upgraded `AGENTS.md` with Next.js 16 guardrails, MOSU architecture standards, active skills (`/graphify`, `/antislop-ui`, `/antislop-copywriting`, `/antislop-code`, `/ponytail`, `/modern-web-guidance`), and MCP Tool Routing & Execution Profile.

---

## [0.3.0] - 2026-10-27

### Added
- **Service Packages Section (`src/components/Pricing/`):**
  - Interactive package comparison selector featuring *Web Presence & Company Profile* and *Dynamic Business Web & Portal* tiers, plus custom enterprise card.
  - Dynamic WhatsApp deep link generation with pre-filled package inquiry details.
- **Interactive Inventory System Configurator (`src/app/inventory-system/`):**
  - Dedicated route (`/inventory-system`) with modular price calculator (`InventoryConfigurator.jsx`).
  - Modular data schema in `src/data/inventorySystem.js` for custom warehouse and inventory management solutions.

### Fixed
- **Mobile Navigation & Interaction:**
  - Fixed direct card click selection and responsive navigation drawer on mobile viewports (`76a408c`).

---

## [0.2.0] - 2026-10-24

### Added
- **Nomina Creative Client Portfolio:**
  - Added Nomina Creative (`nomina-creative.com`) agency showcase with optimized visual previews and project tags (`5e372d6`, `c7e34a7`).

### Changed
- **UX & Visual Redesign:**
  - Transformed project showcase cards into fully clickable articles and repositioned portfolio above the fold for immediate proof (`55c836c`).
  - Simplified landing page layout to clean, high-contrast, modern aesthetic (`1d0fcaf`).
  - Restored original MOSU brand blue (`#2563EB`) color tokens across components (`d53a2c3`).

---

## [0.1.0] - 2025-07-12 to 2026-09-01

### Added
- Initial foundation of Modern Solution (MOSU) company profile website.
- Added core client projects (Empati Musik, Hayrat Indonesia, Charlotte Essence, Exion PW, PWC Zone, Gio Putra Sinergi, Randy's Portfolio).
- Setup Next.js App Router, responsive layout structure, and base CSS styling.
