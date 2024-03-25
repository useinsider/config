/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        es2021: true,
    },
    plugins: [
        'import',
        'jsdoc',
        '@stylistic',
        '@stylistic/migrate',
    ],
    extends: [
        'eslint:recommended',
    ],
};
