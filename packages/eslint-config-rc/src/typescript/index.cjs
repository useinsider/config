/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('../base.cjs'),
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@cspell/recommended',
        'plugin:jsdoc/recommended',
        'plugin:jsdoc/recommended-typescript-error',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        require.resolve('@useinsider/eslint-config/rules/core'),
        require.resolve('@useinsider/eslint-config/rules/cspell'),
        require.resolve('@useinsider/eslint-config/rules/jsdoc'),
        require.resolve('@useinsider/eslint-config/rules/typescript'),
        require.resolve('@useinsider/eslint-config/rules/stylistic'),
    ],
    env: {
        node: true,
        es2021: true,
    },
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'jsdoc/require-param': 'off',
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/check-param-names': 'off',
    },
    settings: {
        jsdoc: {
            mode: 'typescript',
            tagNamePreference: {
                callback: 'watch',
                desc: 'use',
            },
        },
    },
};
