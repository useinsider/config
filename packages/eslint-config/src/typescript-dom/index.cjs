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
        require.resolve('../rules/core.cjs'),
        require.resolve('../rules/stylistic.cjs'),
        require.resolve('../rules/jsdoc.cjs'),
        require.resolve('../rules/typescript.cjs'),
    ],
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
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
