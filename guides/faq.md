# FAQ

## My commit was rejected by Commitlint

Use Conventional Commits, for example:

```text
feat: add login page
fix: handle empty state
chore: update deps
```

## Pre-commit fails on format or lint

Run `pnpm format` then `pnpm lint` for details.

## pnpm install fails with an engine error

The repo enforces Node >= 22 and a pinned pnpm version. Update Node, then run:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Typecheck fails with TypeScript errors

The project runs in strict mode. Fix the type errors and try again.

## Pre-push fails on tests

Run `pnpm test` locally and fix the failures before pushing.

## Pre-commit changed my staged files

Lefthook runs `pnpm format` and then restages files. Re-check `git status`
and review the changes before committing.

## Biome keeps reordering imports or changing line endings

That is expected. Use `pnpm format` and keep your editor set to LF line
endings.

## CI failed with a case-sensitive import error

CI runs on Linux. Fix the import path casing to match the file name exactly.

## Playwright cannot find Chrome

The Playwright config uses `channel: 'chrome'`. Install Google Chrome or
change the config to use Playwright's Chromium.

## Playwright baseURL is undefined

Make sure you run tests from the repo root and that `.env.test` sets
`BASE_URL_TEST`.

## pnpm install fails on Windows

The `postinstall` script uses POSIX shell syntax. Use WSL or Git Bash and see
`guides/troubleshooting-platforms.md` for details.

## How do I import SVGs as components?

Place the SVG under `src/assets` and import it directly:

```tsx
import Icon from 'assets/icon.svg'
```
