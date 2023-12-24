/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    extends: [
        require.resolve('@useinsider/eslint-config/typescript'),
    ],
    parserOptions: {
        project: [require.resolve('./tsconfig.json')],
    },
};
