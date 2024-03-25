import type { Linter } from 'eslint';

export default {
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
    },
} as Linter.FlatConfig;
