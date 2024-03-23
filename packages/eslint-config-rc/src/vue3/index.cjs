/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('../base.cjs'),
        'airbnb-base',
        'plugin:vue/vue3-recommended',
        'plugin:vue-scoped-css/vue3-recommended',
        'plugin:jsdoc/recommended',
        'plugin:@cspell/recommended',
        require.resolve('@useinsider/eslint-config/rules/core'),
        require.resolve('@useinsider/eslint-config/rules/cspell'),
        require.resolve('@useinsider/eslint-config/rules/stylistic'),
        require.resolve('@useinsider/eslint-config/rules/jsdoc'),
        require.resolve('@useinsider/eslint-config/rules/vue'),
    ],
    env: {
        browser: true,
        es2021: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        extraFileExtensions: ['.vue'],
    },
};
