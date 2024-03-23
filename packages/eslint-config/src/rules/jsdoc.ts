import type { Linter } from 'eslint';

export default {
    rules: {
        'jsdoc/check-param-names': ['error'],
        'jsdoc/check-tag-names': ['error'],
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-param': ['error', {
            enableRestElementFixer: false,
            enableRootFixer: false,
        }],
        'jsdoc/require-jsdoc': ['off'],
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-param-type': ['error'],
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-returns': ['error', {
            contexts: ['TSInterfaceDeclaration', 'TSMethodSignature'],
            forceRequireReturn: true,
            exemptedBy: ['inheritdoc', 'watch'],
        }],
        'jsdoc/require-returns-check': ['error'],
        'jsdoc/require-returns-description': 'off',
        'jsdoc/tag-lines': ['error'],
        'jsdoc/valid-types': 'off',
        'jsdoc/check-types': ['error'],
    },
} as Linter.FlatConfig;
