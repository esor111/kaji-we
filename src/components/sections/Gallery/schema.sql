-- Run this in the Supabase SQL editor to enable dynamic gallery items.
-- Until this table exists (or while it is empty), the Gallery section
-- falls back to the sample data in sampleGallery.js.

create table if not exists public.gallery (
  id           uuid primary key default gen_random_uuid(),
  image_url    text not null,
  before_url   text,
  title_en     text,
  title_ne     text,
  description_en text,
  description_ne text,
  project_type text default 'Other',
  location     text,
  featured     boolean default false,
  created_at   timestamp with time zone default now()
);

alter table public.gallery enable row level security;

-- Public can read
create policy "gallery public read"
  on public.gallery for select
  using (true);

-- Only authenticated users can write (matches Admin pattern)
create policy "gallery auth insert"
  on public.gallery for insert
  to authenticated
  with check (true);

create policy "gallery auth update"
  on public.gallery for update
  to authenticated
  using (true) with check (true);

create policy "gallery auth delete"
  on public.gallery for delete
  to authenticated
  using (true);
