# Startup Idea Vault

**Park ideas before they evaporate**

Park ideas before they evaporate.

A full-stack demo built with **Next.js 14 (App Router)**, **Tailwind CSS** and a
**Supabase (Postgres)** backend. Records are written from the browser straight to
Postgres through row-level security policies — no custom API layer to maintain.

Live: https://password123-blip.github.io/startup-idea-vault/

---

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 14, App Router, TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase Postgres, RLS-secured |
| Hosting | GitHub Pages (static export, GitHub Actions) |

## Run it locally

```bash
npm install
cp .env.example .env.local   # add your Supabase URL + anon key
npm run dev
```

Open http://localhost:3000.

## Set up the database

Run `supabase/migrations/0001_init.sql` in the Supabase SQL editor. It is
idempotent — safe to run more than once. It creates the `startup_idea_vault_ideas` table,
enables row-level security and adds read/insert policies for anonymous users.

## Data model

Table: `startup_idea_vault_ideas`

| Column | Type |
| --- | --- |
| `idea` | text |
| `problem` | text |
| `audience` | text |
| `effort` | integer |
| `noted_on` | date |
| `created_at` | timestamptz |

Every row also has `id uuid`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which builds a static
export and publishes it to GitHub Pages. The workflow reads
`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from repository
Actions secrets — set those before the first deploy.

## What it does

- **Idea plus problem** — An idea without a problem is a hobby.
- **Audience field** — Who exactly, not 'everyone'.
- **Effort score** — Quick triage for weekend builds.

## License

MIT
