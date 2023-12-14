/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('../base.cjs'),
        'airbnb-base',
        'plugin:vue/vue3-recommended',
        'plugin:vue-scoped-css/vue3-recommended',
        'plugin:jsdoc/recommended',
        'plugin:@cspell/recommended',
        require.resolve('../rules/core.cjs'),
        require.resolve('../rules/cspell.cjs'),
        require.resolve('../rules/stylistic.cjs'),
        require.resolve('../rules/jsdoc.cjs'),
        require.resolve('../rules/vue.cjs'),
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
