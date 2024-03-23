# @useinsider/eslint-config/vue3

This package provides a comprehensive ESLint configuration tailored for Vue 3
projects, ensuring code quality and consistency. It integrates best practices
from the Vue community and extends various ESLint plugins to cover aspects like
JSDoc conventions, and scoped CSS in Vue components.

## Installation

Before proceeding, ensure you have ESLint installed in your project.
If not, install it:

```bash
pnpm add -E -D eslint
```

```bash
npm install -E -D eslint
```

Then, install the ESLint plugins and configurations that our Vue configuration
extends. These are necessary for the configuration to work correctly:

```bash
pnpm add -E -D \
eslint-config-airbnb-base \
eslint-plugin-vue \
eslint-plugin-vue-scoped-css \
eslint-plugin-jsdoc \
@cspell/eslint-plugin \
vue-eslint-parser
```

```bash
npm install -E -D \
eslint-config-airbnb-base \
eslint-plugin-vue \
eslint-plugin-vue-scoped-css \
eslint-plugin-jsdoc \
@cspell/eslint-plugin \
vue-eslint-parser
```

## Usage

To integrate this preset into your Vue 3 project, modify your `eslint.config.js`
file as follows:

```js
import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['vue3'],
        config: {
            files: ['src/**/*.vue'],
            // Add additional configurations here
        },
    }),
];
```

## Reusable config limitation

Before [ESLint Flat Config] becomes stable, in order to work around a
[known limitation in ESLint], we recommend you to use this package alongside
[@rushstack/eslint-patch], so that you don't have to install too many
dependencies:

```bash
pnpm add -E -D @rushstack/eslint-patch
```
```bash
npm install -E -D @rushstack/eslint-patch
```

[ESLint Flat Config]: https://eslint.org/docs/latest/use/configure/configuration-files-new
[known limitation in ESLint]: https://github.com/eslint/eslint/issues/3458
[@rushstack/eslint-patch]: https://www.npmjs.com/package/@rushstack/eslint-patch
