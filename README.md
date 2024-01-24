# Consultr Front End Challenge

## Features

- [Vite](https://vitejs.dev) with [React](https://reactjs.org), [TypeScript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).
- Use [ESLint](https://eslint.org), [stylelint](https://stylelint.io) and [Prettier](https://prettier.io) on VSCode and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- Write unit and integration tests with [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).
- GitHub Actions for automatic [dependency updates](https://renovatebot.com/), [CodeQL Analysis](https://securitylab.github.com/tools/codeql), running tests and code coverage with [Codecov](https://about.codecov.io/).
- Deploy to [vercel.com](https://vercel.com/) with pre-configured [SPA fallback](https://vercel.com/docs/configuration#routes/advanced/spa-fallback).

## Getting started

Use this repository as a [GitHub template](https://github.com/wtchnm/Vitamin/generate) or use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npx degit wtchnm/Vitamin#main my-app
```

Then, install the dependencies:

```
pnpm install
```

### Before you start coding

- [ ] If you don't plan to use GitHub Actions, delete the `.github` directory.
- [ ] Change the `favicon.png`, `apple-touch-icon.png`, `android-chrome-192x192.png` and `android-chrome-512x512.png`. [favicon.io](https://favicon.io) is a cool tool for generating these assets.
- [ ] In the `src` folder, remove the `__tests__`, `api` and `components` folder and the `types.ts` file.
- [ ] If you don't plan to use `react-query`, remove the query client logic in the `main.tsx` file.
- [ ] Change the title, description and theme color in the `index.html` and `vite.config.ts`. The [Inter](https://rsms.me/inter/) font is included, so remove it if you want.
- [ ] Modify or delete the `LICENSE` file.
- [ ] Change the `name` field in package.json.

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm format` - format all files with Prettier.
- `pnpm lint` - runs TypeScript, ESLint and Stylelint.
