/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    extends: [
        require.resolve('@useinsider/eslint-config-rc'),
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
};
