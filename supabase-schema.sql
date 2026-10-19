-- Execute no SQL Editor de um projeto Supabase sob seu controle.
-- A chave service role deve existir SOMENTE no servidor Vercel, nunca no client.
create table if not exists public.contact_leads (
 id uuid primary key default gen_random_uuid(),
 created_at timestamptz not null default now(),
 name text not null,
 email text not null,
 phone text not null,
 project text not null,
 city text not null,
 area text,
 budget text,
 message text,
 consent boolean not null
);
alter table public.contact_leads enable row level security;
-- Nenhuma política pública: somente backend com chave service role faz INSERT / leitura.
