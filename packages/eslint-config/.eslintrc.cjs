/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    overrides: [
        {
            files: ['./**/*.{cjs,js}'],
            extends: [
                require.resolve('./src/node/index.cjs'),
            ],
        },
        {
            files: ['./*.{cjs,js}'],
            extends: [
                require.resolve('./src/config/index.cjs'),
            ],
        },
    ],
};
