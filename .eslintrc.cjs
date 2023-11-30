/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: [
        require.resolve('./src/node.cjs'),
    ],
    rules: {
        '@cspell/spellchecker': ['error', {
            customWordListFile: './cspell.json',
        }],
    },
};
