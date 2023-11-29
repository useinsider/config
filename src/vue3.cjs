/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('./base.cjs'),
        'airbnb-typescript/base',
        'plugin:vue/vue3-recommended',
        'plugin:vue-scoped-css/vue3-recommended',
        'plugin:jsdoc/recommended',
        'plugin:jsdoc/recommended-typescript-error',
        'plugin:@cspell/recommended',
        '@vue/eslint-config-typescript',
        'plugin:@typescript-eslint/recommended',
        require.resolve('./rules/common.cjs'),
        require.resolve('./rules/jsdoc.cjs'),
        require.resolve('./rules/vue.cjs'),
        require.resolve('./rules/typescript.cjs'),
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
};
