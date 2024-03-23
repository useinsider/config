# @useinsider/eslint-config/config

This rule set specifically targets configuration files typically placed at the
root level of your project. These files are not part of your production build
but are crucial for maintaining consistent coding standards across your
development environment.

**Examples of such files include:**
- `eslint.config.js`
- `vite.config.ts`
- ...and more.

## How to Use

To integrate this preset into your project, modify your `eslint.config.js` file
as follows:

```js
import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['node', 'config'],
        config: {
            // For JavaScript configuration files at root level
            files: ['*.js', '*.cjs'],
            // Add additional configurations here
        },
    }),

    // For TypeScript configuration files, including those in 'scripts' directory
    await useInsider({
        preset: ['typescript', 'config'],
        config: {
            files: ['*.ts'],
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
