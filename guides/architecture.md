# Architecture

This boilerplate uses Next.js App Router and Atomic Design.

## Main folders

- `src/app`: routes, layouts, and pages (App Router).
- `src/components`: UI components by level (atoms, molecules, organisms).
- `src/hooks`: reusable hooks.
- `src/theme`: tokens and global styles.
- `src/assets`: SVGs imported as components and private assets imported by code.
- `src/tests`: test helpers and Playwright E2E tests.
- `src/@types`: global types and additional definitions.

## App Router basics

- Every folder under `src/app` is a route segment.
- `page.tsx` defines a route, `layout.tsx` wraps segments, and `loading.tsx`
  provides the suspense fallback.
- `error.tsx`, `global-error.tsx`, and `not-found.tsx` are reserved route files.
- Parentheses in folder names are route groups and do not affect the URL
  (example: `(home)`).

## Atomic Design (summary)

- atoms: basic elements with no complex composition.
- molecules: composition of atoms with limited logic.
- organisms: composition of molecules with local business rules.

## Assets and SVGs as components

Use `src/assets` for files you want bundled and imported in code, including
private assets not served by the web server. Use `public/` for static files
that must be publicly accessible by URL.

SVGs placed in `src/assets` can be imported as React components:

```tsx
import Logo from 'assets/logo.svg'

export function Header() {
  return <Logo />
}
```

## Imports and module resolution

- `tsconfig.json` maps `src` folders via `paths`, so prefer absolute imports
  like `components/Button`.
- Keep import casing exact; CI runs on Linux and is case-sensitive.

## Next.js features enabled

- `reactCompiler: true`
- `reactStrictMode: true`
- `typedRoutes: true`
- Turbopack rule for `*.svg` with `@svgr/webpack`
- Image optimization with custom `deviceSizes` and `remotePatterns`

## Guidelines

- Place new components in the correct Atomic Design level.
- Avoid cross-layer coupling (an atom should not depend on an organism).
- Prefer composition over inheritance.
