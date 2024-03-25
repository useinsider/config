import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['node'],
        config: {
            files: ['index.js'],
        },
    }),
    await useInsider({
        preset: ['node', 'config'],
        config: {
            files: ['**/eslint.config.js'],
        },
    }),
];
