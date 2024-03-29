/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    extends: [
        require.resolve('@useinsider/eslint-config'),
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
};
