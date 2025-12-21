# AGENT

This file guides LLMs (Claude, Codex, Cursor, Junie, JetBrains AI etc.)
when working in this repository. Follow these rules before proposing changes.

## Quick context
- Stack: Next.js App Router + React 19 + TypeScript + CSS Modules.
- Package manager: pnpm (do not use npm/yarn). Node >= 22.
- Absolute imports via the `@/` alias (tsconfig `paths`).
- App Router: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`,
  `global-error.tsx`, `not-found.tsx`. Route groups use `(group)`.
- SVGs in `src/assets` can be imported as React components (`@svgr/webpack`).

## Project structure
- `src/app`: routes and layouts for the App Router.
- `src/components`: Atomic Design (atoms, molecules, organisms).
- `src/hooks`: reusable hooks.
- `src/theme`: tokens and global styles.
- `src/assets`: assets imported by code (not public).
- `public/`: assets served by URL.
- `src/tests`: test helpers and Playwright E2E tests.
- `src/@types`: global types.

## Code standards
- Atomic Design: atoms do not depend on organisms; avoid cross-coupling.
- Typical components:
  - `index.tsx` (named export), `types.ts`, `styles.module.css`.
  - tests in `__tests__/test.tsx`.
- CSS Modules for local styles; import as `S` when it makes sense.
- Use `'use client'` only when you need state/effects.
- Type imports must be `import type`.
- Forbidden: `enum`, barrel files, `export *`.
- Keep exact path casing (CI and Linux are case-sensitive).

## Tests
- Unit/integration: Vitest + Testing Library.
  - `pnpm test`, `pnpm test:w`, `pnpm test:c`, `pnpm test:ui`.
  - Helpers in `src/tests/providers` and `src/tests/helpFunctions`.
- E2E: Playwright in `src/tests/**/*.spec.ts`.
  - `pnpm test:e2e`, `pnpm test:e2e:ui`, `pnpm test:e2e:codegen`.
  - Uses `BASE_URL_TEST` from `.env.test` and Chrome (`channel: 'chrome'`).

## Quality and CI
- Biome: formats and validates. Run `pnpm format` and `pnpm lint`.
  - 2 spaces, 80 columns, LF, import ordering.
- TypeScript strict: `pnpm typecheck`.
- Lefthook: pre-commit (`format`, `biome:ci`, `typecheck`) and pre-push
  (`typecheck`, `test:ci`).
- Commits must follow Conventional Commits; releases via semantic-release.

## Recommended flow
1) `pnpm dev`
2) Before opening a PR: `pnpm format`, `pnpm lint`, `pnpm typecheck`, `pnpm test`

## Internal references
- `guides/architecture.md`
- `guides/quality-constraints.md`
- `guides/workflows.md`
