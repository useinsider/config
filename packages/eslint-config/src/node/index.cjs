/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        require.resolve('../base.cjs'),
        'airbnb-base',
        'plugin:jsdoc/recommended',
        'plugin:@cspell/recommended',
        require.resolve('../rules/core.cjs'),
        require.resolve('../rules/stylistic.cjs'),
        require.resolve('../rules/jsdoc.cjs'),
    ],
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
};
