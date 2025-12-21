# Quick start

This guide covers the minimum to run the boilerplate and understand the core flow.

## Requirements

- Node >= 22 (see `engines` in `package.json`).
- pnpm (preferably via Corepack).

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Install

```bash
pnpm i
```

## Development

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

## Next steps

- Quality constraints: `guides/quality-constraints.md`
- Architecture: `guides/architecture.md`
- Workflows: `guides/workflows.md`
- FAQ: `guides/faq.md`
