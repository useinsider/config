# @useinsider/eslint-config/typescript

This ESLint configuration is ideal for Node.js projects without front-end
elements or DOM libraries. For mixed back-end and front-end projects, separate
override blocks or a combined `node` and `dom` setup in a single block are
possible, but not recommended.

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
module.exports = {
  root: true,
  overrides: [
    {
      files: ['./src/**/*.ts'],
      extends: [
        '@useinsider/eslint-config/typescript',
      ],
      parserOptions: {
        // Required for '@typescript-eslint/parser'
        project: ['./tsconfig.json'],
      },
      // Additional configuration here
    },
  ],
};
```
