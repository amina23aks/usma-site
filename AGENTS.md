# USMA repository instructions

Append this project guidance below the existing Next.js managed block. Preserve the generated block and its markers verbatim.

## Working agreement

Read README.md, package.json, the lockfile, applicable repository instructions, and relevant documentation bundled with the installed Next.js version. Inspect git status and preserve user changes. Work on one reviewable outcome per branch. Use npm and the existing lockfile. Explain new dependencies and architectural tradeoffs. Open a PR targeting main when repository access permits. The owner reviews the Vercel Preview and merges. Leave production settings and releases to the owner.

## Product and visual direction

Build a private USM Alger club demo with news, matches, squad, player profiles, history and trophies, sponsors, a merchandise preview, and an admin workflow. Use clearly labeled fictional fixtures and approved imagery or placeholders. Start with a temporary wordmark. Checkout, payments, and customer data belong to the separate store.

Use a sports editorial layout with charcoal, warm white, and a restrained red accent. Establish a consistent type scale, spacing rhythm, image ratios, and visible focus styles. Translate references into specific decisions such as image crop, layout, or interaction. Keep score and kickoff close to the top on phones. Use readable line lengths on articles and clear forms in admin. Support RTL when rendering Arabic, keyboard navigation, and reduced motion. Start with CSS transitions and consider Motion or GSAP for a specific interaction.

## Application, data, and security

Use Next.js App Router, TypeScript, Tailwind, PostgreSQL, Prisma, and server-side Zod validation. Select an established admin authentication provider and document the account setup when the admin slice begins. Keep role checks on the server for every protected read and mutation. Test anonymous and unauthorized access, including direct draft URLs. Use parameterized database access, render editorial text safely, and review session, CSRF, rate limiting, and upload protections where relevant.

Keep the runtime connection server-only and use least-privilege database credentials. Document required variables with placeholder values in .env.example. Keep local secrets out of Git, logs, and client bundles. Use usma_dev locally and a separate hosted Preview database. Keep the training databases available for exercises. Review and commit migrations. State the target before applying them. Preserve existing data and test restoration in a separate database. Start with simple public reads. If caching is added, test publish, unpublish, and score updates across visitor sessions.

## Acceptance and handoff

Run the repository's lint, typecheck, build, and relevant tests. Add coverage for critical behaviors introduced by the change. Check browser layout at narrow mobile and desktop widths. Report failures and untested paths explicitly. Deliver the PR or commit, working Preview when available, manual steps and expected outcomes, and any configuration or migration work. Ask the owner to check pgAdmin only when useful, with the target database and a read-only query.


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
