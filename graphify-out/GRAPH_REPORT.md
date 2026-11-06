# Graph Report - Mosu-Company-Profile  (2026-11-06)

## Corpus Check
- 333 files · ~839,326 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 13 file(s) not represented in the graph (top: .css 6, .toml 4, (none) 2)

## Summary
- 104 nodes · 125 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ab5205a6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ESLint & Dependencies Configuration
- Landing Page & Featured Showcase
- Inventory System & Modular Configurator
- Package Build & Development Scripts
- Root Layout, Fonts & Global CSS
- PNPM Workspace & Build Policy
- JSConfig Path Aliases
- Next.js Server Configuration
- ⚡ Active Skills & Enforcement Directives
- Changelog
- MCP Tool Routing & Execution Profile
- BRAIN — Short-Term Working Memory

## God Nodes (most connected - your core abstractions)
1. `next` - 7 edges
2. `BRAIN — Short-Term Working Memory` - 6 edges
3. `Header()` - 6 edges
4. `Modern Solution (MOSU) — Agent Codebase Governance` - 5 edges
5. `⚡ Active Skills & Enforcement Directives` - 5 edges
6. `MCP Tool Routing & Execution Profile` - 5 edges
7. `Changelog` - 5 edges
8. `InventoryConfigurator()` - 5 edges
9. `react` - 5 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `📌 Architectural Decisions in Effect` --references--> `Header()`  [INFERRED]
  BRAIN.md → src/components/Header/Header.jsx
- `📌 Architectural Decisions in Effect` --references--> `InventoryConfigurator()`  [INFERRED]
  BRAIN.md → src/components/InventoryConfigurator/InventoryConfigurator.jsx
- `📌 Architectural Decisions in Effect` --references--> `Pricing()`  [INFERRED]
  BRAIN.md → src/components/Pricing/Pricing.jsx
- `InventoryConfigurator()` --calls--> `formatRupiah()`  [EXTRACTED]
  src/components/InventoryConfigurator/InventoryConfigurator.jsx → src/data/inventorySystem.js
- `Home()` --calls--> `Header()`  [EXTRACTED]
  src/app/page.js → src/components/Header/Header.jsx

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "ESLint & Dependencies Configuration"
Cohesion: 0.15
Nodes (15): eslintConfig, dependencies, next@16.2.4, react@19.2.4, react-dom@19.2.4, devDependencies, eslint@^9, eslint-config-next@16.2.4 (+7 more)

### Community 1 - "Landing Page & Featured Showcase"
Cohesion: 0.21
Nodes (9): 📌 Architectural Decisions in Effect, next, InventorySystemPage(), metadata, Home(), Header(), InventoryConfigurator(), Pricing() (+1 more)

### Community 2 - "Inventory System & Modular Configurator"
Cohesion: 0.48
Nodes (4): ADDONS, BASE_PRICE, CORE_FEATURES, formatRupiah()

### Community 3 - "Package Build & Development Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 5 - "PNPM Workspace & Build Policy"
Cohesion: 0.50
Nodes (3): allowBuilds, sharp, unrs-resolver

### Community 8 - "⚡ Active Skills & Enforcement Directives"
Cohesion: 0.17
Nodes (12): 1. `/graphify` — Codebase Knowledge Graph & Architectural Navigation, 1. Technology Stack, 2. Component Guidelines & Rendering Strategy, 2. `/ponytail` — Full YAGNI Minimalism (`full` mode default), 3. Brand & Conversion Integrity, 3. `/modern-web-guidance` — Modern Web Platform Standards, 4. `/antislop` (`antislop-ui`, `antislop-copywriting`, `antislop-code`) — Default: Mode 1 (DURING), ⚡ Active Skills & Enforcement Directives (+4 more)

### Community 9 - "Changelog"
Cohesion: 0.17
Nodes (11): [0.1.0] - 2025-07-12 to 2026-09-01, [0.2.0] - 2026-10-24, [0.3.0] - 2026-10-27, Added, Added, Added, Added, Changed (+3 more)

### Community 10 - "MCP Tool Routing & Execution Profile"
Cohesion: 0.20
Nodes (9): 🚫 Absolute Operational Restrictions, 🔄 Advanced Multi-Tool Chaining Protocols, 🛠️ Installed MCP Inventory, MCP Tool Routing & Execution Profile, Protocol A: The "New Implementation" Chain, Protocol B: The "Breaking Bug / Production Crash" Chain, Protocol C: The "Tech Stack Evaluation" Chain, This is NOT the Next.js you know (+1 more)

### Community 11 - "BRAIN — Short-Term Working Memory"
Cohesion: 0.22
Nodes (8): 1. AI Context Workflow & Governance Setup (In Progress), 2. Service Packages & Interactive Configurator Readiness, 3. antislop & Impeccable Quality Hygiene, 📋 Backlog & Known Technical Debt, BRAIN — Short-Term Working Memory, 🗺️ Codebase Knowledge Graph State (`graphify-out/`), 💡 How AI Agents Should Maintain This File, 🎯 Today's Active Focus & Objectives

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Landing Page & Featured Showcase` to `ESLint & Dependencies Configuration`, `Inventory System & Modular Configurator`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Why does `📌 Architectural Decisions in Effect` connect `Landing Page & Featured Showcase` to `BRAIN — Short-Term Working Memory`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `BRAIN — Short-Term Working Memory` connect `BRAIN — Short-Term Working Memory` to `Landing Page & Featured Showcase`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._