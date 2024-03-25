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
        preset: ['dom'],
        config: {
            files: ['src/**/*.js'],
            // Add additional configurations here
        },
    }),
];
```
