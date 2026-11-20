# USM Alger Website Demo

A responsive website concept for USM Alger. The demo covers club news,
fixtures and results, squad and player profiles, club history and trophies,
sponsors, and a merchandise preview. The admin area will support editorial
publishing and match updates.

Use clearly labelled demo content and approved assets or placeholders.
Verify club facts and confirm permission to use official branding, player
photos, and sponsor assets before public release. Checkout, payments, and
customer accounts belong to the separate store project.

## Project status

- The Next.js starter runs locally on Windows.
- The repository is on GitHub and has been deployed to Vercel.
- The Arabic RTL demo homepage and 404 page are implemented with fictional
  match data and original CSS illustrations. The application database and
  admin workflows are planned.
- The Vercel production branch and demo access settings still need to be
  recorded after verification.

Update this section as each milestone is verified.

## Local development

Use Node.js 24 LTS and npm. On a fresh checkout with the committed lockfile,
open PowerShell in the repository root and run:

    npm ci
    npm run dev

Open the URL printed in the terminal, usually http://localhost:3000.
Use Ctrl+C to stop the development server.

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` to check the
project. No test script is currently configured. The demo uses system fonts
and needs no database credentials or external image service.

## Stack and environments

- Foundation: Next.js App Router, TypeScript, Tailwind CSS, and npm.
- Planned data layer: PostgreSQL, Prisma migrations, and server-side Zod
  validation.
- Planned admin authentication: Auth.js with an established provider.
- Local development: PostgreSQL 18 on `localhost:5432`. The application
  database is `usma_dev`. Verify the connection during the Prisma task.
- Vercel Preview: a separate hosted PostgreSQL database with demo data.
- Official production: dedicated credentials and a separate database,
  configured when the owner approves the release.

The homepage foundation requires no database credentials. During the
Prisma task, document the required variables and placeholder values in
`.env.example`. Record the actual local environment filename and verified
migration, client generation, and seed commands.

Enter real secrets in the documented local environment file or in the
appropriate Vercel environment. Keep secrets, database URLs, and database
backup files out of Git.

## Review and deployment

Work on a feature branch and open a pull request targeting `main`.
The owner reviews the Vercel Preview on a phone and desktop, then merges.

Before sharing a demo URL, verify access protection in a browser signed out
of Vercel. Apply `noindex` to deployments that are still demos, including
the Production URL if it serves the demo. Access protection controls who
can open the site. Indexing directives guide search engines.

Record which branch deploys to Production, which URLs a merge updates, and
how the demo is protected. Mark each item as pending until verified.
The owner controls when the official site becomes public.

## Milestones and acceptance

1. **Homepage foundation.** Verify the Arabic RTL layout, working
   navigation, useful 404 page, readable typography, and easy-to-find
   latest score and next kickoff on a narrow phone.
2. **Database integration.** Verify the local application connects to
   `usma_dev` and Vercel Preview connects to a separate hosted database
   with demo data. Verify the migrations against their intended targets.
3. **News workflow.** Sign in, save a draft, publish it, and unpublish it.
   Check the public listing and direct URL in a separate visitor session.
   A draft or unpublished article returns 404 on its public URL. If the
   saved status needs confirmation, use a read-only pgAdmin query against
   the database used by the environment under test.
4. **Match workflow.** Update a score and verify it on the homepage and
   match centre. A `0–0` result is a valid score. An unknown score and an
   unknown kickoff have clear display states. The server rejects negative
   scores.
5. **Club pages and demo readiness.** Review news and player pages,
   history and trophies, sponsors, and merchandise links. Check image
   crops, keyboard navigation, reduced motion, and demo access. Restore
   a backup to a separate database and verify row counts and sample records.

See `AGENTS.md` for implementation and handoff instructions.

## Planned routes

Only the homepage (`/`) and the not-found page are implemented in this
foundation. The following paths are proposed for later work; they are not
live links yet:

- `/news` and `/news/[slug]`: news listing and articles.
- `/matches`: fixtures and results.
- `/squad` and `/players/[slug]`: squad and player profiles.
- `/history`: club history and trophies.
- `/sponsors`: sponsors.
- `/merchandise`: merchandise preview.
- `/admin`: editorial and match administration.

The demo emits `noindex, nofollow` metadata. This is an indexing directive,
not access protection; Vercel protection and production-branch settings
remain to be verified by the owner.
