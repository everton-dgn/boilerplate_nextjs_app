<div align="center">

<a href="./LICENSE">![GitHub](https://img.shields.io/github/license/everton-dgn/boilerplate_nextjs_app?style=plastic)</a>
![GitHub repo size](https://img.shields.io/github/repo-size/everton-dgn/boilerplate_nextjs_app?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/everton-dgn/boilerplate_nextjs_app?color=yellow&style=plastic)

</div>

<h1 align="center">Boilerplate Complete and updated with Next.js, Typescript, Tests and more</h1>

<br />

# :memo: About the Project

This application is a boilerplate for complex and large systems, especially those that need to scale with security and code quality.

We sought to achieve 3 pillars: readability, reusability, and refactorability.

In the construction of the UI, the Atomic Design structure was chosen, organizing the global components into atoms, molecules, organisms and templates.

In addition to being constantly updated, this project was configured in the smallest details to serve as a basis for professional projects that require standardized and easy-to-maintain code architecture and design.

<br />

---

# :pushpin: Contents

- [Technologies](#globe_with_meridians-technologies)
- [Features](#triangular_flag_on_post-features)
- [Prerequisites](#white_check_mark-prerequisites)
- [How to install and run the project](#question-how-to-install-and-run-the-project)
  - [Clone Repository](#clone-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start Development Environment](#start-development-environment)
  - [Generate Production Build](#generate-production-build)
  - [Start Production Environment](#start-production-environment)
  - [Run Tests](#run-tests)
  - [Run Tests in Watch Mode](#run-tests-in-watch-mode)
  - [Run Lints](#run-lints)
  - [Format code with BiomeJS](#format-code-with-biomejs)
  - [Check for Available Updates for Dependencies](#check-for-available-updates-for-dependencies)
- [Guides](#books-guides)
- [Important Considerations](#rotating_light-important-considerations)
- [References](#link-references)
- [Author](#technologist-author)

<br />

---

# :globe_with_meridians: Technologies

⚛ Next.js

🔥 TypeScript

💅 CSS Modules

🚩 Lints: Lefthook, BiomeJS and Commitlint

✅ Vitest

🐙 React Testing Library

<br />

---

# :triangular_flag_on_post: Features

- [x] Responsive design;

- [x] Atomic Design;

- [x] 100% coverage;

- [x] Detection prefers-reduced-motion;

<br />

---

# :white_check_mark: Prerequisites

- node 24.x (see `package.json` `engines` and `.nvmrc`).

- pnpm 10.x via Corepack (see `package.json` `packageManager`).

<br />

---

# :question: How to install and run the project

## Clone Repository

```bash
git clone https://github.com/everton-dgn/boilerplate_nextjs_app.git
```

## Install Dependencies

```bash
pnpm i
```

## Start Development Environment

```bash
pnpm dev
```

Available in http://localhost:3000

## Generate Production Build

```bash
pnpm build
```

## Start Production Environment

```bash
pnpm start
```

Available in http://localhost:3000

## Run Tests

```bash
pnpm test
```

## Run Tests in Watch Mode

```bash
pnpm test:w
```
Runs in watch mode in the terminal.

## Run Lints

```bash
pnpm lint
```

```bash
pnpm typecheck
```

## Format code with BiomeJS

```bash
pnpm format
```

## Check for Available Updates for Dependencies

```bash
pnpm check:update
```

<br />

---

# :books: Guides

- [Quick start](./guides/quick-start.md)
- [Quality constraints](./guides/quality-constraints.md)
- [Architecture](./guides/architecture.md)
- [Workflows](./guides/workflows.md)
- [FAQ](./guides/faq.md)
- [Troubleshooting by platform](./guides/troubleshooting-platforms.md)

<br />

---

# :rotating_light: Important Considerations

- This boilerplate enforces a strict quality bar. Read `guides/quality-constraints.md` before starting.
- Commits must follow Conventional Commits for the automated release flow.
- Use Node and pnpm versions defined in `package.json`.
- Keep Node versions aligned across `package.json`, `.node-version`, `.nvmrc`, and GitHub Actions.

<br />

---

# :link: References

- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Biome: https://biomejs.dev
- Commitlint: https://commitlint.js.org
- Lefthook: https://github.com/evilmartians/lefthook
- Semantic-release: https://semantic-release.gitbook.io
- Vitest: https://vitest.dev
- Playwright: https://playwright.dev
- TypeScript: https://www.typescriptlang.org/docs

<br />

---

# :technologist: Author

By [Éverton Toffanetto](https://programadordesucesso.com).

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://youtube.com/@toffanettodev
