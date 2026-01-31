# Quick start

This guide covers the minimum to run the boilerplate and understand the core flow.

## Requirements

- Node 24.x (see `engines` in `package.json`).
- pnpm (preferably via Corepack, using the version in `packageManager`).

```bash
corepack enable
corepack prepare pnpm@10.26.2 --activate
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

- `pnpm i` fails with "Unsupported engine": install Node 24.x and re-run
  `corepack prepare pnpm@10.26.2 --activate`.

## Next steps

- Quality constraints: `./quality-constraints.md`
- Architecture: `./architecture.md`
- Workflows: `./workflows.md`
- FAQ: `./faq.md`
- Troubleshooting by platform: `./troubleshooting-platforms.md`
