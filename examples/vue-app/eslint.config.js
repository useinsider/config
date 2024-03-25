import useInsider from '@useinsider/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    await useInsider({
        preset: ['vue3'],
        config: {
            files: ['src/*.vue'],
        },
    }),
    await useInsider({
        preset: ['dom'],
        config: {
            files: ['src/**/*.js'],
        },
    }),
    await useInsider({
        preset: ['node', 'config'],
        config: {
            files: ['eslint.config.js'],
        },
    }),
];
