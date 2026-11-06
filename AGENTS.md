<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Modern Solution (MOSU) — Agent Codebase Governance

> This document defines the engineering standards, context protocol, active skills, and MCP routing requirements for AI agents working on the **Modern Solution (MOSU)** company profile codebase (`mosu-web`).

---

## 🔁 Context Workflow Protocol

Every agent interacting with this repository must follow this context workflow:

1. **At Session Start:**
   - Read `llms.txt` to grasp the repository structure and reading order.
   - Read `BRAIN.md` to load short-term working memory and active tasks.
   - Check `graphify-out/GRAPH_REPORT.md` (or run `graphify query "<topic>"`) to map dependencies and architectural relationships before touching code.
   - Cross-reference `PRODUCT.md` (brand facts & live clients) and `DESIGN.md` (design tokens & styling rules).
2. **During Implementation:**
   - Apply active skills (`/graphify`, `/antislop-ui`, `/antislop-copywriting`, `/antislop-code`, `/ponytail`, `/modern-web-guidance`) continuously in **Mode 1 (DURING)**.
   - Adhere strictly to the **MCP Tool Routing & Execution Profile**.
3. **Upon Task Completion:**
   - Update `BRAIN.md` with current progress, decisions taken, and next immediate backlog items.
   - For user-facing or architectural changes, document the release in `CHANGELOG.md`.
   - Ensure the knowledge graph is synchronized via `graphify --update` (or verified through the Git post-commit hook).

---

## 🏗️ Codebase Architecture & Engineering Rules

### 1. Technology Stack
- **Framework:** Next.js `16.2.4` (App Router under `src/app/`).
- **Runtime & React:** React `19.2.4`, Node.js (LTS), `pnpm` as preferred package manager.
- **Styling:** Pure Vanilla CSS Modules (`*.module.css`) scoped per page and component.
  - All color, spacing, radius, and typography variables are defined in `src/app/globals.css` and `DESIGN.md`.
  - Hardcoding arbitrary hex values or inline styles is forbidden when design tokens exist (`var(--color-primary)`, `var(--color-bg)`, etc.).
- **Aliases:** `@/*` is mapped to `./src/*` in `jsconfig.json`.

### 2. Component Guidelines & Rendering Strategy
- **Server Components by Default:** Keep components as React Server Components unless browser interactivity or React hooks (`useState`, `useEffect`) are explicitly required.
- **Client Components (`"use client"`):** Isolate client interactivity to leaf components:
  - `src/components/Header/Header.jsx` (mobile drawer toggle & escape key handler)
  - `src/components/Pricing/Pricing.jsx` (tier selection & dynamic WhatsApp link generation)
  - `src/components/InventoryConfigurator/InventoryConfigurator.jsx` (interactive modular calculator)
- **Image Optimization:** Always use Next.js `<Image />` (`next/image`) with proper `sizes`, `width`, `height`, and semantic `alt` attributes. Never use unoptimized raw `<img>` tags.

### 3. Brand & Conversion Integrity
- **Real Evidence Only:** Every client project, case study, and testimonial must come from verified real-world contracts documented in `PRODUCT.md`. Never invent fictional testimonials, AI personas, or fabricated metrics (e.g. do not invent "100K+ users" or "Fortune 500 partner").
- **Actionable CTAs:** All inquiry and contact links must connect to either valid on-page anchors (e.g., `#projects`, `#pricing`) or the official studio WhatsApp:
  - URL: `https://wa.me/6287725064056`
  - Pre-fill parameter: `?text=<encoded-message>` tailored to the specific package or inquiry context.

---

## ⚡ Active Skills & Enforcement Directives

The following skills are installed and must be utilized actively by agents working on this codebase:

### 1. `/graphify` — Codebase Knowledge Graph & Architectural Navigation
- **Primary Architecture Lookup:** Before answering architectural questions or planning cross-file refactoring, check `graphify-out/GRAPH_REPORT.md` or query `graphify-out/graph.json`.
- **Query First:** Use `graphify query "<question>"` to trace call paths and data flow rather than guessing across files.
- **Continuous Synchronization:** When code files are created, renamed, or modified, run `graphify --update` (or ensure the Git post-commit hook runs) so future sessions maintain a synchronized map.

### 2. `/ponytail` — Full YAGNI Minimalism (`full` mode default)
- **Lazy Senior Dev Filter:** Before writing any new function, abstraction, or helper, ask:
  1. *Does this need to exist at all?*
  2. *Can the native platform, CSS, or standard web API do it directly?*
  3. *Can this be accomplished in one clean line?*
- Build the minimum viable code that solves the problem. No unrequested wrapper components, no premature abstractions, and no avoidable dependencies.
- Mark deliberate architectural simplifications with `// ponytail: <reason>`.

### 3. `/modern-web-guidance` — Modern Web Platform Standards
- **Mandatory Pre-Execution Search:** For all HTML, CSS, layout, and client-side DOM logic (modals, navigations, form interactions, responsive tables, animations, accessibility), execute a search first:
  ```bash
  pnpx modern-web-guidance@latest search "<2-5 word query>"
  ```
- Use modern Baseline platform primitives before adding external JavaScript libraries or custom polyfills.
- Verify WCAG AA compliance (minimum 4.5:1 text contrast) and semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).

### 4. `/antislop` (`antislop-ui`, `antislop-copywriting`, `antislop-code`) — Default: Mode 1 (DURING)
Apply antislop filters actively while designing, writing copy, and editing code:
- **`antislop-ui`:**
  - Pull styling strictly from `DESIGN.md` (`Dial: ENERGY 2 / RHYTHM 2 / MOTION 1`).
  - No generic blue-purple gradients, no harsh neon default themes, and no random background grids.
  - Glassmorphism is dose-capped: header navbar only.
  - Zero decorative emojis in headings, labels, or buttons. Use clean vector SVGs instead.
  - Mobile responsiveness is a hard requirement: zero horizontal scrollbar overflow, 44px minimum tap targets on buttons/links.
  - Full keyboard accessibility: every interactive element must be reachable via `Tab` and activatable via `Enter`/`Space`. Modals and drawers must close on `Escape`.
- **`antislop-copywriting`:**
  - Eliminate generic AI buzzwords: *unlock, elevate, empower, seamless, cutting-edge, revolutionary, next-level, robust*.
  - Strict ban on em dashes (`—`) in user-facing UI copy. Use commas, colons, or clean separate sentences instead.
  - Active voice with clear actors; avoid passive voice and corporate filler.
  - Action-oriented, context-specific CTAs (e.g., "Contact Studio on WhatsApp", "Configure Custom System").
- **`antislop-code`:**
  - Strip decorative divider comments (`// ====================`), ALL CAPS banners, and workflow narrations (`// Step 1: Initialize`).
  - Retain only comments that explain business logic, domain constraints, or deliberate technical trade-offs (`ponytail:` markers).

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`
- Code comments: `skills/antislop-code/SKILL.md`
Execution mode: Default to Mode 1 (DURING) for all coding and design generation tasks.
<!-- antislop:end -->

---

# MCP Tool Routing & Execution Profile

You have access to 6 specialized Model Context Protocol (MCP) servers. To maximize accuracy, eliminate hallucinations, and conserve context tokens, you must strictly follow this decision matrix and execution protocol for every task.

## 🛠️ Installed MCP Inventory
1. **ESLint**: Code quality, formatting, syntax checking, and linting.
2. **context7**: Specialized, version-indexed slice for official library and framework documentation.
3. **exa**: Semantic, neural web search engine optimized for developer communities, code bases, and repositories.
4. **parallel-search**: Broad internet search engine optimized for multi-source synthesis, deep extraction, and complex page layouts.
5. **sequential-thinking**: Multi-step, systematic reasoning engine for breaking down architectural or complex logic problems.
6. **n8n**: Workflow automation engine for triggering external workflows or integration pipelines.

---

## 🧭 Tool Selection & Routing Matrix

Before calling a tool, match the user's intent to the exact scenario below. Do not guess or use generalized search tools if a specialized tool is available.

| Category / Intent              | Best Tool             | Triggering Scenario                                                                                                                                                   | Execution Rule                                                                                                  |
| :----------------------------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **Official Syntax & APIs**     | `context7`            | Framework updates (v2 ➡️ v3), installing packages, verifying official function/method signatures, checking native SDK usage.                                          | **Rule:** Always try `context7` first for library specs to avoid deprecated stack overflow answers.             |
| **Bugs, Errors & Code Search** | `exa`                 | Terminal stack traces, obscure error codes, locating GitHub issues, pulling working repository examples, finding alternative community packages.                      | **Rule:** Pass the literal error message or code conceptual block into `exa` to bypass SEO-heavy landing pages. |
| **Deep Research & Analysis**   | `parallel-search`     | Comparing pricing plans, feature matrices of 3+ products, extracting data from JavaScript-heavy Single Page Apps (SPAs), summarizing multi-page architectural series. | **Rule:** State a clear research objective; allow it to run multi-step web fetches to build a unified report.   |
| **Complex Logic / Design**     | `sequential-thinking` | Writing complex algorithms, designing SQL database schemas, diagnosing intricate asynchronous race conditions, heavy code refactoring.                                | **Rule:** Run a sequence of thinking steps *before* emitting the first line of code.                            |
| **Code Refactoring & Health**  | `ESLint`              | Finalizing code generation, cleaning up imports, fixing unused variables, checking type enforcement, ensuring project code styling rules.                             | **Rule:** Run linting validation on newly generated or edited code blocks to guarantee clean execution.         |
| **External Automations**       | `n8n`                 | Triggering deployment hooks, syncing task updates, executing automated scripts across your linked web application ecosystem.                                          | **Rule:** Call only when explicitly tasked with running workflows, triggers, or external node webhooks.         |

---

## 🔄 Advanced Multi-Tool Chaining Protocols

When a task transitions through different states of complexity, you must string your tools together sequentially. Do not answer until the chain is complete.

### Protocol A: The "New Implementation" Chain
*Use case: Implementing a completely new library or external framework feature.*
1. **`context7`** ➡️ Pull the exact, current API signatures and official setup patterns.
2. **`sequential-thinking`** ➡️ Plan the application architecture, data flow, and file layout based on those specs.
3. **`ESLint`** (Post-generation) ➡️ Run lint checks against your freshly written code block to eliminate structural or syntax defects.

### Protocol B: The "Breaking Bug / Production Crash" Chain
*Use case: Fixing a highly obscure error thrown by your local console.*
1. **`exa`** ➡️ Query the precise terminal error message to find matching GitHub Issues or community workarounds.
2. **`sequential-thinking`** ➡️ Evaluate why that bug applies to the local environment and trace the failure point systematically.
3. **`ESLint`** ➡️ Validate that your code patch conforms seamlessly to linting requirements without introducing regressions.

### Protocol C: The "Tech Stack Evaluation" Chain
*Use case: Selecting a new utility package, service provider, or third-party API.*
1. **`parallel-search`** ➡️ Scrape and extract features, pricing structures, and limitations across competing platforms.
2. **`exa`** ➡️ Search developer subreddits, Hacker News, or GitHub stars to cross-reference practical developer sentiment and reliability issues.
3. **`sequential-thinking`** ➡️ Draft a structured pros/cons analysis mapping directly to the current project's constraints.

---

## 🚫 Absolute Operational Restrictions
* **No Outdated Overlaps:** Never use `parallel-search` or general internet search tools to guess framework functions if `context7` handles that specific package registry.
* **Token Efficiency:** When using `parallel-search` or `exa`, pass precise parameters so the servers return pre-trimmed, token-dense fragments. Avoid loading massive, unformatted raw HTML blocks directly into the main context window.
* **Think First:** If the prompt involves high-risk code refactoring or multi-file architectural shifts, you are forbidden from writing code without first invoking at least 3 steps of `sequential-thinking`.
