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
- French LTR public pages and an interactive admin UI prototype are implemented
  with fictional content and locally stored generated images. Database
  persistence and real admin authentication are planned.
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
project. No test script is currently configured. The demo uses locally hosted Barlow Condensed and Source Sans 3 fonts
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

Work on a feature branch and open a pull request targeting `master`.
The owner reviews the Vercel Preview on a phone and desktop, then merges.

Before sharing a demo URL, verify access protection in a browser signed out
of Vercel. Apply `noindex` to deployments that are still demos, including
the Production URL if it serves the demo. Access protection controls who
can open the site. Indexing directives guide search engines.

Record which branch deploys to Production, which URLs a merge updates, and
how the demo is protected. Mark each item as pending until verified.
The owner controls when the official site becomes public.

## Milestones and acceptance

1. **Homepage foundation.** Verify the French LTR layout, working
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

## Implemented visual routes

- `/`: homepage with linked news and player previews.
- `/actualites` and `/actualites/[slug]`: category filtering and article layouts.
- `/matchs` and `/matchs/[slug]`: fixtures, results, and match detail pages.
- `/equipe` and `/equipe/[slug]`: squad groups and player profiles.
- `/histoire`: selectable editorial chapters.
- `/palmares`: selectable trophy categories with conceptual descriptions.
- `/partenaires`: neutral sponsor presentation.
- `/boutique`: merchandise preview and an explicit unavailable-store state.
- `/contact`: local form validation and a simulated confirmation.
- `/admin`: explicitly public UI prototype with local article editing,
  publishing/unpublishing previews, score editing, and a read-only squad view.

The admin prototype is a design review tool. It has no authentication or
server write endpoint. Its state resets when it is remounted or reloaded,
and changes do not update the static public pages. The contact form sends
and stores no data. Real authentication, persistence, uploads, and delivery
remain future work.

The demo emits `noindex, nofollow`. Verify Vercel access protection separately.

## Approved homepage direction

The homepage follows the owner-selected Claude prototype with warm off-white surfaces, white bordered cards, 14px image/card corners, 10px buttons, a photographic hero, and an overlapping match strip. It includes news, squad, history, trophy, merchandise, and partner previews. Navigation links to the corresponding visual routes.

`public/images/concept-assets.webp` was generated for this demo with OpenAI image generation. It depicts a fictional crowd, player, trophy, and kit. The same portrait and product composition are reused as temporary concept assets. Replace them with approved individual photographs before an official release. No external image or font download is required to build.

The GitHub default branch is `master`. Production branch mapping and Vercel access protection remain to be verified in project settings.

The font files in `app/fonts/` come from Google Fonts and are distributed with their SIL Open Font License files. They are loaded locally through `next/font/local`.

## Remaining delivery stages

1. Approve desktop/mobile layouts and replace repeated concept imagery.
2. Configure Prisma, migrations, a local `usma_dev` connection, and a separate
   hosted Preview connection. Verify targets and safe application roles.
3. Add real admin authentication and authorization tests, then replace the
   local news simulation with persistent draft/publish/unpublish behaviour.
4. Connect fixtures and player data; verify cache freshness and validation.
5. Add approved upload handling if needed. Complete error states, monitoring,
   backup restoration, and pre-release checks.
6. Obtain verified content and asset permissions, review public-launch privacy
   requirements, and prepare indexing and metadata for the approved domain.
7. Add Arabic RTL and the independent store as separate subsequent scopes.
