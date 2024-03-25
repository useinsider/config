/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('../base.cjs'),
        'airbnb-base',
        'plugin:jsdoc/recommended',
        'plugin:@cspell/recommended',
        require.resolve('@useinsider/eslint-config/rules/core'),
        require.resolve('@useinsider/eslint-config/rules/cspell'),
        require.resolve('@useinsider/eslint-config/rules/stylistic'),
        require.resolve('@useinsider/eslint-config/rules/jsdoc'),
    ],
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
};
