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
@typescript-eslint/eslint-plugin
eslint-plugin-jsdoc \
@cspell/eslint-plugin \
```

## Usage

To integrate this preset into your project, modify your `eslint.config.js` file
as follows:

```js
import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['typescript'],
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
