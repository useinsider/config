# @useinsider/eslint-config/dom

This configuration is designed for production source files typically located in
the `src` directory of your project. It provides ESLint rules specifically for
DOM-related code.

## Installation

Before proceeding, ensure you have ESLint installed in your project.
If not, install it:

```bash
pnpm add -E -D eslint
```

```bash
npm install -E -D eslint
```

Then, install the ESLint plugins that our configuration extends. These are
necessary for the configuration to work correctly:

```bash
pnpm add -E -D \
eslint-config-airbnb-base \
eslint-config-airbnb-typescript \
@cspell/eslint-plugin \
eslint-plugin-jsdoc \
@typescript-eslint/eslint-plugin
```

```bash
npm install -E -D \
eslint-config-airbnb-base \
eslint-config-airbnb-typescript \
@cspell/eslint-plugin \
eslint-plugin-jsdoc \
@typescript-eslint/eslint-plugin
```

## Usage

To integrate these rules into your project, modify your `.eslintrc` file as
follows:

```js
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['./src/**/*.ts'],
      extends: [
        '@useinsider/eslint-config/typescript-dom',
      ],
      parserOptions: {
        // `project` is necessary for `@typescript-eslint/parser` to work
        project: ['./tsconfig.json'],
      },
      // Add additional configuration settings as needed
    },
  ],
};
```
