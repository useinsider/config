const eslintConfigRootPath = './packages/eslint-config/src';

/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    overrides: [
        {
            files: ['./*.{cjs,js}'],
            extends: [
                require.resolve(`${eslintConfigRootPath}/node/index.cjs`),
                require.resolve(`${eslintConfigRootPath}/config/index.cjs`),
            ],
        },
        {
            files: ['./*.ts', './scripts/**/*.ts'],
            extends: [
                require.resolve(`${eslintConfigRootPath}/node/index.cjs`),
                require.resolve(`${eslintConfigRootPath}/typescript/index.cjs`),
                require.resolve(`${eslintConfigRootPath}/config/index.cjs`),
            ],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
};
