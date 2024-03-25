/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('../base.cjs'),
        'airbnb-typescript/base',
        'plugin:vue/vue3-recommended',
        'plugin:vue-scoped-css/vue3-recommended',
        'plugin:jsdoc/recommended',
        'plugin:jsdoc/recommended-typescript-error',
        'plugin:@cspell/recommended',
        '@vue/eslint-config-typescript',
        'plugin:@typescript-eslint/recommended',
        require.resolve('@useinsider/eslint-config/rules/core'),
        require.resolve('@useinsider/eslint-config/rules/cspell'),
        require.resolve('@useinsider/eslint-config/rules/stylistic'),
        require.resolve('@useinsider/eslint-config/rules/jsdoc'),
        require.resolve('@useinsider/eslint-config/rules/vue'),
        require.resolve('@useinsider/eslint-config/rules/typescript'),
    ],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
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
