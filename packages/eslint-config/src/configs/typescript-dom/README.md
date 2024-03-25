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

To integrate this preset into your project, modify your `eslint.config.js` file
as follows:

```js
import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['typescript-dom'],
        config: {
            files: ['src/**/*.ts'],
            languageOptions: {
                parserOptions: {
                    // Required for '@typescript-eslint/parser'
                    project: ['./tsconfig.json'],
                },
            },
            // Add additional configurations here
        },
    }),
];
```

<blockquote>
  <p>[!NOTE]<br>
    Ensure that the <code>parserOptions.project</code> path correctly points to
    your <code>tsconfig.json</code> file to enable TypeScript linting.
  </p>
</blockquote>

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
