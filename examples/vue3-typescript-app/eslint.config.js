import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['vue3-typescript'],
        config: {
            files: ['src/*.vue'],
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
            files: ['src/**/*.ts'],
            // tsconfig doesn't include `.d.ts` files in the initial setup. Must be ignored or added to the project.
            ignores: ['**/*.d.ts'],
            languageOptions: {
                parserOptions: {
                    project: ['./tsconfig.json'],
                },
            },
        },
    }),
            await useInsider({
        preset: ['node', 'config'],
        config: {
            files: ['eslint.config.js'],
        },
    }),
];
