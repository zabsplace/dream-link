# Dream Link — Claude Briefing

This is the briefing file at the root of the `dream-link` repo. Claude reads it before every change to understand the project.

---

## What we're building

**Dream Link** is a skill-development and job-placement portal for two affiliated nonprofits serving young adults with intellectual and developmental disabilities (IDD):

- **ZABS Place** (Matthews, NC) — workforce development. Calls participants **Team Members**.
- **Cakeable** (merging into ZABS Place) — cafe/bakery social enterprise. Calls participants **Interns**. Runs Cafe, Bakery, FTC programs.

Both orgs serve the same population. App respects each org's terminology and workflows.

## People who use this app

- **Owner** (Bentzion Groner) — cross-org access.
- **Admin** — org-scoped. Rochel Groner for ZABS, Amanda Jones for Cakeable.
- **Coach** — sees only their assigned individuals.
- **Team Member / Intern** — the individual. Some read fluently. Some don't. All deserve dignity.

iPad is the primary device. Mobile and desktop are supported.

## Tagline & voice

**Look Beyond. Find Potential.**

Warm, personal, mission-driven. Never corporate. Short sentences. Faith-adjacent language is fine. Use "G-d" in any user-facing text where it comes up.

## Tech stack (do not change without asking)

- Next.js 16+ (App Router), TypeScript
- Tailwind CSS 4
- (Phase 1B) Supabase for auth and data
- Vercel hosting
- (Phase 2) Anthropic Claude API for AI Employer-matching
- Browser Speech Synthesis API for audio playback (no third-party TTS)

## Non-negotiable rules

1. **Accessibility-first.** Every text element gets an audio play button when the viewer is a Non-Reader Talent/Intern. Tap targets minimum 44px. Font minimum 16px, scalable.
2. **Photos/videos default to internal-only.** Portfolio sharing is off until a guardian consent flag is set per individual.
3. **NEVER store passwords or credentials.** Cakeable's current job-search spreadsheet has plaintext passwords. This app does not replicate that.
4. **Coach can only see assigned individuals.** Enforce via Supabase Row-Level Security (Phase 1B), not just UI.
5. **Terminology lives in OrgSettings.** No hardcoded "Talent", "Intern", "client", "user" in user-facing copy. ZABS uses "Team Member". Cakeable uses "Intern".
6. **No destructive migrations without a backup.** Always export before schema change.

## Current state

- Single `src/app/page.tsx` with all screens as one client component
- Sample data inline in the file (will move to Supabase later)
- Tailwind classes + custom CSS in `src/app/globals.css`
- No backend, no auth — pure client-side prototype

## Working rhythm

When asked to change something:

1. Read this file.
2. Read the relevant code.
3. Make the change.
4. Tell the user in plain English what changed.
5. Commit and push so Vercel auto-deploys.

## Source of truth for behavior

In the `CLAUDE OUTPUTS/Dream Link/` folder on Bentzion's machine (not in this repo):

- `Dream-Link_Brief_v2.docx` — the full project brief.
- `Dream-Link_Notion-Workspace_v1.md` — the Notion side of the hybrid system.
- `Dream-Link_Deploy-Walkthrough_v1.md` — how this gets deployed.

## Folder convention

```
src/app/page.tsx       — main page (all screens)
src/app/layout.tsx     — root layout
src/app/globals.css    — Tailwind + custom CSS variables
public/                — static assets
```

## Who to ask

- Product decisions, scope, terminology → Bentzion Groner
- ZABS coaching workflow → Rochel Groner
- Cakeable workflow, rubric, employers → Amanda Jones
