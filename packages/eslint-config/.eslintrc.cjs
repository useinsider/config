/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    overrides: [
        {
            files: ['./src/**/*.{cjs,js}'],
            extends: [
                require.resolve('./src/node/index.cjs'),
            ],
        },
        {
            files: ['./*.{cjs,js}', './tests/**/eslint*.*'],
            extends: [
                require.resolve('./src/node/index.cjs'),
                require.resolve('./src/config/index.cjs'),
            ],
        },
        {
            files: ['./*.ts', 'tests/test-facility/*.ts', './tests/**/*.test.ts'],
            extends: [
                require.resolve('./src/typescript/index.cjs'),
                require.resolve('./src/config/index.cjs'),
            ],
            parserOptions: {
                project: ['./tsconfig.test.json'],
            },
        },
    ],
};
