# Architecture

This boilerplate uses Next.js App Router and Atomic Design.

## Main folders

- `src/app`: routes, layouts, and pages (App Router).
- `src/components`: UI components by level (atoms, molecules, organisms).
- `src/hooks`: reusable hooks.
- `src/theme`: tokens and global styles.
- `src/assets`: SVGs imported as components.
- `src/tests`: test helpers and Playwright E2E tests.
- `src/@types`: global types and additional definitions.

## Atomic Design (summary)

- atoms: basic elements with no complex composition.
- molecules: composition of atoms with limited logic.
- organisms: composition of molecules with local business rules.

## SVGs as components

SVGs placed in `src/assets` can be imported as React components:

```tsx
import Logo from 'assets/logo.svg'

export function Header() {
  return <Logo aria-label="Company logo" />
}
```

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
