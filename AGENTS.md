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

# USM Alger project instructions

## Workflow

- Read `README.md`, `package.json`, the lockfile, and the applicable
  repository instructions before editing. Consult the documentation
  bundled with the installed Next.js version for the APIs being changed.
- Inspect Git status and preserve the owner's existing changes.
- Keep each PR focused on one reviewable outcome. If the work expands
  into another feature, propose a follow-up PR. Reuse existing patterns
  and explain the purpose and impact of any new dependency.
- Work on a feature branch and prepare a PR targeting `master` when
  repository access permits. The owner tests the Vercel Preview and
  merges. The owner controls deployment protection, Production settings,
  and the public release.
- Report which URLs a merge to `master` would update when verifiable.
  Keep demo deployments marked `noindex`, including any Production URL
  that still serves a demo. Verify access protection separately and
  report any settings that require the owner's action.

## Design and accessibility

- Create an original football editorial identity with charcoal, warm
  white, restrained red accents, and readable French typography. Use
  spacing, photography, and type hierarchy consistently.
- Use French and LTR for the first design pass. Keep text organised so Arabic RTL can be added later. Apply the appropriate
  language and text direction. Keep navigation and match information
  easy to scan on a narrow phone.
- Give each page a layout suited to its purpose. Use a stadium-led hero
  and a clear score strip on the homepage, a comfortable reading column
  for articles, and clear statuses and predictable actions in admin.
- Use working navigation links, a useful 404 page, and clear empty,
  loading, or error states where they apply.
- Use a temporary wordmark and approved images or intentional
  placeholders. Label fictional club content as demo data.
- Check long French titles, image crops, contrast, visible keyboard focus,
  and reduced-motion preferences. Start with CSS transitions. Consider
  Motion or GSAP when a specific interaction warrants it.
- When the owner provides a reference, use the specific layout or
  interaction requested and adapt it to the USMA design.

## Data and admin

- Use `usma_dev` locally and a separate hosted PostgreSQL database for
  Vercel Preview. Keep demo data separate from official data. Before
  running a migration, state the target database and the intended change.
  Commit reviewed migration files and document how to verify them.
- Keep database access and credentials on the server. Use least-privilege
  application credentials. Document placeholder values in `.env.example`
  and keep real secrets out of Git, client bundles, and logs.
- Prefer Auth.js with an established provider. Explain the tradeoffs and
  get the owner's decision before changing the authentication approach.
- Verify the session and role on the server for every protected read and
  write. Enforce authorization inside each Server Action or Route Handler
  that writes data, using shared authorization logic where appropriate.
  Middleware can provide an additional check.
- Validate input on the server with Zod as features are implemented.
  Use safe database access and safe editorial rendering. Review session
  protections and login rate limits when adding authentication.
- Add automated coverage as the relevant features are implemented:
  reject anonymous and unauthorized writes, hide drafts and unpublished
  articles from public listings, return 404 on their public article URLs,
  exclude them from the sitemap if one exists, and reject invalid scores.
- Verify publishing, unpublishing, and score changes in a separate visitor
  session. If caching is enabled, refresh the affected data or routes and
  test that public views reflect the changes.
- Obtain explicit owner approval before any destructive database
  operation, including a reset, a forced schema push that can cause data
  loss, or a drop. State the target and expected impact first. Use a
  disposable test database for destructive experiments.
- Defer image uploads until the owner approves the scope. When added,
  verify upload authorization, file type, size limits, and storage policy.

## Verification and handoff

- Run the available lint, type checks, production build, and tests
  relevant to the change. Review the changed flow in a browser at
  narrow mobile and desktop widths when possible.
- Report what passed, what could not be verified, and any assumptions.
  Include the PR and Vercel Preview link when available.
- Give the owner three to five acceptance checks and expected results.
  If pgAdmin is useful, name the database and provide a read-only query.
  Document manual Windows, GitHub, or Vercel steps with their expected
  outcomes.
- Update `README.md` with verified project status and commands.

## Approved visual reference

Follow the owner-selected Claude prototype for the homepage composition, white card surfaces, 1px warm-grey borders, 14px card radii, 10px button radii, and overlapping match strip. The current concept uses locally stored AI-generated imagery, pending approved club photography.
