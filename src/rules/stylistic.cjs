/** @type {import("eslint").Linter.RulesRecord} */
module.exports = {
    rules: {
        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/array-bracket-spacing': ['error', 'never'],
        '@stylistic/array-element-newline': ['error', 'consistent'],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/arrow-spacing': ['error'],
        '@stylistic/brace-style': ['error', '1tbs'],
        '@stylistic/comma-dangle': ['error', {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
            imports: 'always-multiline',
            objects: 'always-multiline',
        }],
        '@stylistic/comma-spacing': ['error'],
        '@stylistic/computed-property-spacing': ['error'],
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/eol-last': ['error', 'always'],
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/function-call-spacing': ['error', 'never'],
        '@stylistic/function-paren-newline': ['error', 'consistent'],
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
        '@stylistic/indent': ['error', 4, {
            SwitchCase: 1,
        }],
        '@stylistic/key-spacing': ['error'],
        '@stylistic/keyword-spacing': ['error'],
        '@stylistic/linebreak-style': ['error', 'unix'],
        '@stylistic/lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true,
        }],
        '@stylistic/max-len': ['error', 120, {
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        }],
        '@stylistic/max-statements-per-line': ['error', {
            max: 2,
        }],
        '@stylistic/member-delimiter-style': ['error', {
            multiline: {
                requireLast: true,
            },
            singleline: {
                requireLast: false,
            },
        }],
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],
        '@stylistic/new-parens': ['error', 'always'],
        '@stylistic/no-extra-parens': ['error', 'all', {
            enforceForArrowConditionals: false,
            nestedBinaryExpressions: false,
            returnAssign: false,
        }],
        '@stylistic/no-extra-semi': ['error'],
        '@stylistic/no-floating-decimal': 'error',
        '@stylistic/no-mixed-operators': ['error', {
            allowSamePrecedence: true,
            groups: [
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof'],
            ],
        }],
        '@stylistic/no-mixed-spaces-and-tabs': ['error'],
        '@stylistic/no-multi-spaces': ['error'],
        '@stylistic/no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 0,
        }],
        '@stylistic/no-trailing-spaces': ['error'],
        '@stylistic/no-whitespace-before-property': ['error'],
        '@stylistic/object-curly-newline': ['error', {
            consistent: true,
        }],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/padded-blocks': ['error', 'never'],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/quotes': ['error', 'single', {
            avoidEscape: true,
        }],
        '@stylistic/rest-spread-spacing': ['error', 'never'],
        '@stylistic/semi': ['error'],
        '@stylistic/semi-spacing': ['error', {
            after: true,
            before: false,
        }],
        '@stylistic/semi-style': ['error', 'last'],
        '@stylistic/space-before-blocks': ['error'],
        '@stylistic/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'always',
        }],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/space-infix-ops': ['error'],
        '@stylistic/spaced-comment': ['error', 'always', {
            markers: ['/'],
        }],
        '@stylistic/template-curly-spacing': ['error', 'never'],
        '@stylistic/template-tag-spacing': ['error', 'never'],
        '@stylistic/type-annotation-spacing': ['error'],
    },
};
