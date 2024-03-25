import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['node'],
        config: {
            files: ['**/*.js'],
        },
    }),
];
