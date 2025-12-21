# Quality constraints

This boilerplate enforces a strict and predictable quality bar. These rules are
applied locally and in CI.

## Tooling that enforces rules

- Biome (formatting + linting):
  - Scope: `src/` and key config files listed in `biome.json`.
  - `pnpm format` fixes issues and rewrites files.
  - `pnpm lint` and `pnpm biome:ci` fail on violations.
  - Formatter defaults: 2-space indent, 80-char line width, LF line endings.
  - Linting includes recommended rules plus a11y and complexity checks.
- Commitlint (commit format):
  - Conventional Commits are required.
  - Header length max is 120 characters.
  - Body max line length is not enforced.
- Lefthook (local gates):
  - `pre-commit`: `pnpm format`, `pnpm biome:ci`, `pnpm typecheck`.
  - `pre-push`: `pnpm typecheck`, `pnpm test:ci`.
  - After `pnpm format`, Lefthook runs `git update-index --again` so staged
    files stay in sync with formatting changes.
  - You can bypass hooks with `git commit --no-verify` or `LEFTHOOK=0`, but
    do not use this in normal flow.
- Node and pnpm (pinned versions):
  - Node >= 22 and pnpm version from `package.json`.
  - Avoid `npm` or `yarn` to keep the lockfile stable.
- TypeScript (strict mode):
  - `strict: true`, `noImplicitAny`, `noUnusedLocals`, `noUncheckedIndexedAccess`.
  - `tsc --noEmit` fails on type errors.
- Semantic-release (versioning):
  - Versions are generated from Conventional Commits.
  - Do not edit version numbers manually.
  - Requires `GITHUB_TOKEN` and `NPM_TOKEN` in CI.

## Import ordering

Biome organizes imports and inserts blank lines between groups. The order is
configured in `biome.json` and includes:

- Node built-ins
- Next.js (`next`, `next/**`)
- React
- npm packages (`npm:*`, `vitest/*`)
- Aliased modules from `src` (baseUrl)
- Package protocol imports
- Testing library
- `assets/**`
- `tests/**`
- `theme/**`
- `hooks/**` (non-type imports first)
- `components/**` (non-type imports first)
- Other packages
- Parent relative imports (`../**`)
- Relative path imports (`./*` and deeper)

This means you should prefer absolute imports from `src` (enabled by
`baseUrl: "src"` in `tsconfig.json`). Example:

```ts
import Button from 'components/Button'
```

## Commit format

Conventional Commits header format:

```
<type>(<scope>)!: <subject>
```

Notes:

- `scope` is optional.
- Use `!` or `BREAKING CHANGE:` in the body/footer for breaking changes.
- Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
  `build`, `ci`, `chore`, `revert`.
- Header length must be <= 120 characters (this includes type/scope/subject).

Examples:

```
feat(auth): add refresh token flow
fix: handle empty state
refactor(ui)!: migrate to new button API
```

## Semantic-release expectations

- `feat` triggers a minor release.
- `fix` and `perf` trigger a patch release.
- Breaking changes trigger a major release (via `!` or `BREAKING CHANGE:`).
- Releases run on `main` through GitHub Actions.

## If a check fails

1) Run `pnpm format` and retry the commit.
2) Run `pnpm lint`, `pnpm typecheck`, `pnpm test` locally.
3) Fix issues before pushing.
