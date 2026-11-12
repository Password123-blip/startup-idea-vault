-- Startup Idea Vault — schema
-- Safe to run more than once.

create extension if not exists "pgcrypto";

create table if not exists public.startup_idea_vault_ideas (
  id uuid primary key default gen_random_uuid(),
  idea text,
  problem text,
  audience text,
  effort integer,
  noted_on date,
  created_at timestamptz not null default now()
);

create index if not exists startup_idea_vault_ideas_created_idx on public.startup_idea_vault_ideas (created_at desc);

alter table public.startup_idea_vault_ideas enable row level security;

drop policy if exists "startup_idea_vault_ideas_read" on public.startup_idea_vault_ideas;
create policy "startup_idea_vault_ideas_read" on public.startup_idea_vault_ideas for select using (true);

drop policy if exists "startup_idea_vault_ideas_insert" on public.startup_idea_vault_ideas;
create policy "startup_idea_vault_ideas_insert" on public.startup_idea_vault_ideas for insert with check (true);
