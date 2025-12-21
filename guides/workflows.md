# Workflows

## Local development

```bash
pnpm dev
```

## Quality checks

```bash
pnpm format
pnpm lint
pnpm typecheck
pnpm test
```

## Test variants

```bash
pnpm test:w
pnpm test:ui
pnpm test:c
pnpm test:e2e
pnpm test:e2e:ui
pnpm test:e2e:codegen
```

## End-to-end tests (Playwright)

- `pnpm test:e2e` starts a dev server automatically using `BASE_URL_TEST` from
  `.env.test` (default is `http://localhost:3000`).
- The config uses Chrome via `channel: 'chrome'`, so Google Chrome must be
  installed locally.
- If port 3000 is busy, update `BASE_URL_TEST` and rerun the test.

## Duplicate detection

```bash
pnpm detect:duplicates
```

## Dependency updates

```bash
pnpm check:update
pnpm update:pnpm
```

## Git hooks (Lefthook)

- Installed automatically on `pnpm i` when `.git` is present.
- Hooks run locally only; CI disables them with `LEFTHOOK=0`.

## GitHub Actions

- `playwright.yml`:
  - Runs on PRs and pushes to `main`.
  - Installs browsers and runs Playwright tests.
  - Uploads the HTML report (`playwright-report/`).
- `deploy-vercel.yml`:
  - Runs on pushes to `main`.
  - Uses `pnpm install --frozen-lockfile`.
  - Runs `typecheck`, `biome:ci`, and `test:ci`.
  - Builds and deploys with Vercel CLI.
  - Triggers semantic-release.

Required secrets:

- `ORG_ID`, `PROJECT_ID`, `VERCEL_TOKEN` for Vercel.
- `GITHUB_TOKEN` and `NPM_TOKEN` for semantic-release.

## Release flow

Releases are automatic with semantic-release. Versions are derived from
Conventional Commits.

## Related guides

- SVG imports and Next.js feature flags: `guides/architecture.md`
- Commit rules and import order: `guides/quality-constraints.md`
