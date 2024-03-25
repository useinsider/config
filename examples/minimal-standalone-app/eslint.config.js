import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['typescript'],
        config: {
            files: ['src/server.ts'],
            languageOptions: {
                parserOptions: {
                    project: ['./tsconfig.json'],
                },
            },
        },
    }),
    await useInsider({
        preset: ['typescript-dom'],
        config: {
            files: ['src/client.ts'],
            languageOptions: {
                parserOptions: {
                    project: ['./tsconfig.json'],
                },
            },
        },
    }),
];
