<div align="center">

<a href="./LICENSE">![GitHub](https://img.shields.io/github/license/everton-dgn/boilerplate_nextjs_app?style=plastic)</a>
![GitHub repo size](https://img.shields.io/github/repo-size/everton-dgn/boilerplate_nextjs_app?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/everton-dgn/boilerplate_nextjs_app?color=yellow&style=plastic)

</div>

<h1 align="center">Boilerplate Complete and updated with Next.js, Typescript, SASS, Tests and more</h1>

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
  - [Format code with prettier](#format-code-with-prettier)
  - [Check for Available Updates for Dependencies](#check-for-available-updates-for-dependencies)
- [Important Considerations](#rotating_light-important-considerations)
- [Author](#technologist-author)

<br />

---

# :globe_with_meridians: Technologies

⚛ Next.js

🔥 TypeScript

💅 SASS

🚩 Lints: Husky, ESlint, Stylelint, Commitlint, Lint-Staged, Prettier and Typecheck

✅ Jest

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

- node (latest version lts)

- yarn

<br />

---

# :question: How to install and run the project

## Clone Repository

```bash
git clone https://github.com/everton-dgn/boilerplate_nextjs_app.git
```

## Install Dependencies

```bash
yarn
```

## Start Development Environment

```bash
yarn dev
```

Available in http://localhost:3000

## Generate Production Build

```bash
yarn build
```

## Start Production Environment

```bash
yarn start
```

Available in http://localhost:3000

## Run Tests

```bash
yarn test
```

## Run Tests in Watch Mode

```bash
yarn test:w
```

Available in http://localhost:6006

## Run Lints

```bash
yarn lint
```

```bash
yarn next:lint
```

```bash
yarn typecheck
```

```bash
yarn check-format
```

## Format code with prettier

```bash
yarn format
```

## Check for Available Updates for Dependencies

```bash
yarn check-update
```

<br />

---

# :rotating_light: Important Considerations

- The husky is configured to not allow commit if there are any lint and typescript errors. The push can only be done if all tests and builds (of the project and the storybook) pass.

- Due to husky's build check settings, to push with git, the development server must be stopped first or an error will occur in the `git push` command.

---

# :technologist: Author

By [Éverton Toffanetto](https://programadordesucesso.com).

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://youtube.com/@toffanettodev
