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

### Vue Extension Configuration

To properly lint `.vue` files imported within `.ts` files, it's essential to
update the `parserOptions` in your ESLint configuration. This adjustment helps
prevent ESLint errors that may arise due to the import of Vue components. Add
the following configuration to your `.eslintrc` file:

```js
{
  // Existing configuration...
  parserOptions: {
    // Other existing parser options...
    extraFileExtensions: ['.vue'], // Add this line
  },
},
```

This change ensures that ESLint correctly processes .vue files alongside
TypeScript files, maintaining consistent code quality and style across your
project.
