# Dream Link

_Look Beyond. Find Potential._

A skill-development and job-placement portal for **ZABS Place** + **Cakeable**.

This repo holds the web app — the Team Member-facing experience plus the Admin/Coach demo views. The Cakeable + ZABS admin database lives separately in Notion (see `Dream-Link_Notion-Workspace_v1.md` in CLAUDE OUTPUTS).

## What's here

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS 4**
- A clickable prototype with six demo roles: Bentzion (Owner), Amanda (Cakeable Admin), Rochel (ZABS Admin), Meg (Coach), Sarah G. (Reader Intern), Olivia K. (Non-Reader Team Member with audio mode)
- Sample data drawn from real Cakeable workflows, lightly anonymized

## How to run locally (optional)

```bash
npm install
npm run dev
```

Open http://localhost:3000.

You don't need to run it locally to deploy — Vercel builds it for you on every push.

## How deployments work

1. You push code to this GitHub repo.
2. Vercel detects the change and rebuilds the site automatically (~90 seconds).
3. The live site updates at your Vercel URL.

To trigger a manual update, just commit and push. No build commands needed on your end.

## Status

- **Phase 1A** (current): Static prototype with sample data, no auth, no real database.
- **Phase 1B** (next): Connect to Supabase for real data. Add auth. Wire up to the Notion workspace via API for the placement side.
- **Phase 2**: AI Employer-matching, map view, res