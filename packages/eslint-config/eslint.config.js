// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member, import/extensions
import useInsider from './dist/main.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['typescript'],
        config: {
            files: ['src/**/*.ts'],
            languageOptions: {
                parserOptions: {
                    project: ['tsconfig.lib.json'],
                },
            },
            rules: {
                'import/no-extraneous-dependencies': 'off',
                '@stylistic/max-len': ['error', 120, {
                    ignoreComments: true,
                    ignoreRegExpLiterals: true,
                    ignoreTrailingComments: true,
                    ignoreUrls: true,
                }],
            },
        },
    }),
    await useInsider({
        preset: ['typescript', 'config'],
        config: {
            files: ['*.ts'],
            languageOptions: {
                parserOptions: {
                    project: ['tsconfig.node.json'],
                },
            },
        },
    }),
    await useInsider({
        preset: ['typescript', 'config'],
        config: {
            files: ['tests/test-facility/*.ts', 'tests/**/*.test.ts', 'tests/@types/**/*.ts'],
            languageOptions: {
                parserOptions: {
                    project: ['tsconfig.test.json'],
                },
            },
            rules: {
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
            },
        },
    }),
    await useInsider({
        preset: ['node', 'config'],
        config: {
            files: ['*.{cjs,js}', '**/eslint.config.js'],
        },
    }),
];
