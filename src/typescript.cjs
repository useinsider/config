/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('./base.cjs'),
        'airbnb-typescript/base',
        'plugin:jsdoc/recommended',
        'plugin:@cspell/recommended',
        'plugin:jsdoc/recommended-typescript-error',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        require.resolve('./rules/agnostic.cjs'),
        require.resolve('./rules/stylistic.cjs'),
        require.resolve('./rules/jsdoc.cjs'),
        require.resolve('./rules/typescript.cjs'),
    ],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        extraFileExtensions: ['.vue'],
    },
    rules: {
        'jsdoc/require-param': 'off',
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-returns': 'off',
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
