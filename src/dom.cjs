/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('./base.cjs'),
        'airbnb-base',
        'plugin:jsdoc/recommended',
        'plugin:@cspell/recommended',
        require.resolve('./rules/agnostic.cjs'),
        require.resolve('./rules/stylistic.cjs'),
        require.resolve('./rules/jsdoc.cjs'),
    ],
    env: {
        browser: true,
    },
};
