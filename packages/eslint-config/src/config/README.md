# @useinsider/eslint-config/config

This rule set specifically targets configuration files typically placed at the
root level of your project. These files are not part of your production build
but are crucial for maintaining consistent coding standards across your
development environment.

**Examples of such files include:**
- `.eslintrc.js`
- `vite.config.ts`
- `scripts/.../watch-build.js`
- ...and more.

## How to Use

To integrate these rules into your project, modify your `.eslintrc` file as
follows:

```js
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      // For JavaScript configuration files at root level
      files: ['./*.js', './*.cjs'],
      extends: [
        '@useinsider/eslint-config',
        '@useinsider/eslint-config/config',
      ],
      // Add additional configurations here
    },

    {
      // For TypeScript configuration files, including those in 'scripts' directory
      files: ['./*.ts', './scripts/**/*.ts'],
      extends: [
        '@useinsider/eslint-config',
        '@useinsider/eslint-config/typescript',
        '@useinsider/eslint-config/config',
      ],
      parserOptions: {
        // Required for '@typescript-eslint/parser'
        project: ['./tsconfig.json'],
      },
    },
  ],
};
```

<blockquote>
  <p>[!NOTE]<br>
    Ensure that the <code>parserOptions.project</code> path correctly points to
    your <code>tsconfig.json</code> file to enable TypeScript linting.
  </p>
</blockquote>
