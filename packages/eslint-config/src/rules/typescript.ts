import type { Linter } from 'eslint';

const overriddenRules: Linter.RulesRecord = {
    indent: 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/indent': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
};

export default {
    rules: {
        ...overriddenRules,
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/array-type': ['error', { default: 'array', readonly: 'array' }],
        '@typescript-eslint/no-misused-promises': ['error', {
            checksVoidReturn: { arguments: false },
        }],
        '@typescript-eslint/no-use-before-define': ['error'],
    },
} as Linter.FlatConfig;
