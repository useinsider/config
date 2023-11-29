module.exports = {
    rules: {
        indent: 'off',
        'no-undef': 'off',
        '@typescript-eslint/comma-dangle': ['error', {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
            imports: 'always-multiline',
            objects: 'always-multiline',
        }],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'all', {
            enforceForArrowConditionals: false,
            nestedBinaryExpressions: false,
            returnAssign: false,
        }],
        '@typescript-eslint/space-infix-ops': ['error'],
        '@typescript-eslint/type-annotation-spacing': ['error'],
        '@typescript-eslint/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'always',
        }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array', readonly: 'array' }],
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
            ignoredNodes: [
                'PropertyDefinition[decorators]',
                'TSUnionType',
            ],
        }],
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                requireLast: true,
            },
            singleline: {
                requireLast: false,
            },
        }],
        '@typescript-eslint/no-misused-promises': ['error', {
            checksVoidReturn: { arguments: false },
        }],
        'react/jsx-filename-extension': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true,
        }],

        // TODO enable after SD-80950
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
