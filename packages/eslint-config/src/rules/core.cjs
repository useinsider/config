/** @type {import("eslint").Linter.Config} */
module.exports = {
    rules: {
        'arrow-parens': 'off',
        camelcase: ['error', {
            allow: ['^\\$_'],
        }],
        'class-methods-use-this': 'off',
        'comma-dangle': 'off',
        'consistent-return': ['error'],
        curly: ['error', 'all'],
        'dot-notation': ['error'],
        'guard-for-in': 'error',
        'handle-callback-err': ['error'],
        'import/extensions': ['error', {
            js: 'never',
            json: 'always',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            vue: 'always',
        }],
        'import/no-cycle': 'off',
        'import/no-unresolved': 'off',
        'import/order': ['error', {
            alphabetize: {
                caseInsensitive: true,
                order: 'asc',
            },
            groups: ['index', 'builtin', 'object', 'type', 'external', 'parent', 'internal', 'sibling'],
            pathGroups: [{
                group: 'internal',
                pattern: '@/**',
            }],
        }],
        'import/prefer-default-export': 'off',
        indent: 'off',
        'max-len': 'off',
        'new-cap': ['error'],
        'no-alert': ['error'],
        'no-bitwise': ['error', {
            allow: ['~'],
        }],
        'no-caller': ['error'],
        'no-case-declarations': ['error'],
        'no-confusing-arrow': ['error', {
            allowParens: true,
        }],
        'no-console': ['error'],
        'no-debugger': ['error'],
        'no-div-regex': ['error'],
        'no-dupe-args': ['error'],
        'no-dupe-keys': ['error'],
        'no-duplicate-case': ['error'],
        'no-else-return': ['error'],
        'no-empty': ['error'],
        'no-extra-bind': ['error'],
        'no-extra-boolean-cast': 'error',
        'no-fallthrough': ['error'],
        'no-implicit-coercion': ['error', {
            boolean: true,
            number: true,
            string: true,
        }],
        'no-invalid-regexp': ['error'],
        'no-iterator': ['error'],
        'no-multi-str': ['error'],
        'no-native-reassign': 'error',
        'no-nested-ternary': ['error'],
        'no-new': 'off',
        'no-new-object': ['error'],
        'no-new-require': ['error'],
        'no-param-reassign': ['error', {
            props: false,
        }],
        'no-plusplus': 'off',
        'no-process-exit': ['error'],
        'no-return-assign': ['error', 'except-parens'],
        'no-self-compare': ['error'],
        'no-sequences': ['error'],
        'no-shadow': ['error', {
            allow: ['state'],
        }],
        'no-undef': ['error'],
        'no-underscore-dangle': 'off',
        'no-unexpected-multiline': ['error'],
        'no-unreachable': ['error'],
        'no-unused-vars': ['error'],
        'no-use-before-define': 'error',
        'no-useless-call': ['error'],
        'no-void': 'off',
        'no-with': ['error'],
        'object-curly-newline': 'off',
        'object-shorthand': ['error', 'always'],
        'padded-blocks': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: '*',
                prev: ['const', 'let', 'var', 'if', 'block-like', 'directive'],
            },
            {
                blankLine: 'always',
                next: ['const', 'let', 'var', 'if', 'directive', 'return', 'break', 'default', 'cjs-export', 'export'],
                prev: '*',
            },
            {
                blankLine: 'any',
                next: ['cjs-export', 'export'],
                prev: ['cjs-export', 'export'],
            },
            {
                blankLine: 'any',
                next: ['const', 'let', 'var', 'directive'],
                prev: ['const', 'let', 'var', 'directive'],
            },
            {
                blankLine: 'never',
                next: ['singleline-const', 'singleline-let', 'singleline-var'],
                prev: ['singleline-const', 'singleline-let', 'singleline-var'],
            },
            {
                blankLine: 'always',
                next: ['multiline-block-like'],
                prev: ['*'],
            },
            {
                blankLine: 'always',
                next: ['*'],
                prev: ['multiline-block-like'],
            },
            {
                blankLine: 'any',
                next: ['case'],
                prev: ['case'],
            },
            {
                blankLine: 'any',
                next: ['singleline-const', 'singleline-let', 'singleline-var'],
                prev: ['cjs-import'],
            },
        ],
        'prefer-const': ['error', {
            destructuring: 'all',
        }],
        'prefer-destructuring': ['error'],
        radix: ['error', 'as-needed'],
        semi: 'off',
        'space-before-function-paren': 'off',
        strict: ['error'],
        'use-isnan': ['error'],
        'valid-typeof': ['error'],
    },
};
