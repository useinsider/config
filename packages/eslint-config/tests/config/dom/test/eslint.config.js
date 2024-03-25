import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['dom'],
        config: {
            files: ['**/*.js'],
        },
    }),
];
