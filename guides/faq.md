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

## Typecheck fails with TypeScript errors

The project runs in strict mode. Fix the type errors and try again.

## Pre-push fails on tests

Run `pnpm test` locally and fix the failures before pushing.

## How do I import SVGs as components?

Place the SVG under `src/assets` and import it directly:

```tsx
import Icon from 'assets/icon.svg'
```
