import { fileURLToPath } from 'node:url';
import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['typescript-dom'],
        config: {
            files: ['**/*.ts'],
            languageOptions: {
                parserOptions: {
                    project: [fileURLToPath(new URL('./tsconfig.json', import.meta.url))],
                },
            },
        },
    }),
];
