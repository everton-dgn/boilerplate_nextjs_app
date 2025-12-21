# Troubleshooting by platform

This guide covers OS-specific issues and fixes. For general rules, read
`guides/quality-constraints.md`.

## Shared gotchas

- Line endings: the repo expects LF. If you see CRLF warnings or Biome keeps
  touching files, set Git to avoid CRLF and re-clone or renormalize files.
- Case sensitivity: CI runs on Linux, so import paths must match file casing.
- Route groups: folders like `src/app/(home)` use parentheses. Quote the path
  in shells, for example: `ls "src/app/(home)"`.
- Playwright: the config uses `channel: 'chrome'`, so Google Chrome must be
  installed or the config must be adjusted.

## macOS

- Use Node 22+ and enable Corepack for pnpm.
- If Playwright cannot find Chrome, install Google Chrome and retry.

## Linux

- If you see `ENOSPC` file watcher errors, increase inotify limits:
  `sudo sysctl -w fs.inotify.max_user_watches=524288`.
- If you prefer Playwright-managed browsers, run
  `pnpm playwright install --with-deps` and switch the project to `chromium`.

## Windows (native)

- The `postinstall` script uses POSIX shell syntax. If you stay on native
  Windows, run `pnpm i` from Git Bash instead of cmd.exe or PowerShell.
- Disable CRLF conversion or set it to input-only to keep LF line endings.

## WSL

- Clone the repo inside the WSL filesystem (for example, under `/home/...`)
  to avoid slow file watching on `/mnt/c`.
- Install Node and pnpm inside WSL, not the Windows host.
- For Playwright, install Chrome in WSL or switch the project to `chromium`.
