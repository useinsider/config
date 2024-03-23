# @useinsider/eslint-config/node

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
eslint-plugin-jsdoc \
@cspell/eslint-plugin
```

```bash
npm install -E -D \
eslint-config-airbnb-base \
eslint-plugin-jsdoc \
@cspell/eslint-plugin
```

## Usage

To integrate this preset into your project, modify your `eslint.config.js` file
as follows:

```js
import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['node'],
        config: {
            files: ['src/**/*.{js,cjs,mjs}'],
            // Add additional configurations here
        },
    }),
];
```
