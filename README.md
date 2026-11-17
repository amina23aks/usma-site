# USM Alger Club Website Demo

A private, responsive club website concept. The MVP covers editorial news and matches, squad and player profiles, club history and trophies, sponsors, and a merchandise preview. Club facts, branding, and photography require verified sources or approval before official publication.

## Current state

The Next.js starter has run locally on Windows. Database integration, authentication, and deployment should be recorded here after verification.

## Local development

Open the project root in VS Code. Use Node.js 24 LTS and npm. On a fresh checkout with the committed lockfile, run:

```powershell
npm ci
npm run dev
```

Open the URL printed by the terminal, normally http://localhost:3000. Use Ctrl+C to stop the server. Check package.json for available scripts and run npm run build before submitting a release candidate.

## Environment and database

- Local: PostgreSQL 18 on localhost:5432. Create usma_dev for this app. usma_training and usma_restore_test are practice databases.
- Preview: a hosted PostgreSQL database with demo data. Scope credentials to Preview in Vercel and redeploy after changing variables.
- Production: configure dedicated credentials and database when preparing the official release.

When Prisma is integrated, copy .env.example to the local filename specified by the implementation. Enter the real connection string locally. Store secrets outside Git. Document the verified migration, client generation, and seed commands here after setup.

## Review workflow

Feature branch → PR to main → Vercel Preview → owner acceptance → owner merge. Check how main maps to Production before merging. Protect demo access independently of search indexing.

## Acceptance checks

- Save a draft and verify it persists in admin. A visitor cannot read it from a listing or direct URL.
- Publish, edit, and unpublish the same article. Verify the public result in a separate visitor session.
- Update a match score and verify the home and match pages. Check that the server rejects a negative score.
- Check phone and desktop layout, image cropping, keyboard focus, and reduced motion.
- When testing a backup, restore to a separate database and compare row counts plus sample records.

See AGENTS.md for implementation and handoff rules.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
