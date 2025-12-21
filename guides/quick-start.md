# Quick start

This guide covers the minimum to run the boilerplate and understand the core flow.

## Requirements

- Node >= 22 (see `engines` in `package.json`).
- pnpm (preferably via Corepack).

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

If `pnpm i` fails with an engine error, your Node or pnpm version is out of
range.

## Verify versions

```bash
node -v
pnpm -v
```

## Install

```bash
pnpm i
```

## Development

```bash
pnpm dev
```

During development, keep feedback tight by running:

```bash
pnpm typecheck && pnpm lint
```

## Quality checks

```bash
pnpm format
pnpm lint
pnpm typecheck
pnpm test
```

## First-time issues

- `pnpm i` fails with "Unsupported engine": install Node 22+ and re-run
  `corepack prepare`.

## Next steps

- Quality constraints: `guides/quality-constraints.md`
- Architecture: `guides/architecture.md`
- Workflows: `guides/workflows.md`
- FAQ: `guides/faq.md`
- Troubleshooting by platform: `guides/troubleshooting-platforms.md`
