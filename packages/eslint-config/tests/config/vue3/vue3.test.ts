import { type Linter } from 'eslint';
import { describe } from 'vitest';
import { testCode, testSingleFile } from '../../test-facility/testers';

function createVueConfig (rules: Linter.RulesRecord, extend = true): Linter.Config {
    if (extend) {
        return {
            extends: [
                require.resolve('@useinsider/eslint-config/vue3-typescript'),
            ],
            parserOptions: {
                project: '<temporary-project>',
            },
            rules,
        };
    }

    return {
        parser: require.resolve('vue-eslint-parser'),
        env: {
            browser: true,
            es2021: true,
        },
        parserOptions: {
            parser: require.resolve('@typescript-eslint/parser'),
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
            extraFileExtensions: ['.vue'],
        },
        plugins: [
            'vue',
            '@typescript-eslint',
        ],
        rules,
    };
}

await testSingleFile(import.meta.url, 'test/case.vue', [
    { line: 4, column: 22, ruleId: 'vue/block-tag-newline' },
    { line: 6, column: 1, ruleId: '@stylistic/no-multiple-empty-lines' },
    { line: 10, column: 5, ruleId: 'vue/no-undef-components' },
    { line: 10, column: 18, ruleId: 'vue/no-bare-strings-in-template' },
    { line: 12, column: 1, ruleId: 'vue/html-indent' },
    { line: 12, column: 7, ruleId: 'vue/no-multi-spaces' },
    { line: 12, column: 7, ruleId: 'vue/html-closing-bracket-spacing' },
    { line: 14, column: 16, ruleId: 'vue/array-bracket-newline' },
    { line: 16, column: 9, ruleId: 'vue/array-bracket-newline' },
    { line: 17, column: 18, ruleId: 'vue/array-bracket-spacing' },
    { line: 17, column: 24, ruleId: 'vue/array-bracket-spacing' },
    { line: 21, column: 15, ruleId: 'vue/array-element-newline' },
    { line: 23, column: 18, ruleId: 'vue/arrow-spacing' },
    { line: 23, column: 21, ruleId: 'vue/arrow-spacing' },
    { line: 26, column: 9, ruleId: 'vue/brace-style' },
    { line: 29, column: 19, ruleId: 'vue/camelcase' },
    { line: 30, column: 35, ruleId: 'vue/comma-dangle' },
    { line: 31, column: 28, ruleId: 'vue/comma-dangle' },
    { line: 34, column: 21, ruleId: 'vue/comma-dangle' },
    { line: 37, column: 18, ruleId: 'vue/comma-dangle' },
    { line: 40, column: 26, ruleId: 'vue/comma-spacing' },
    { line: 40, column: 26, ruleId: 'vue/comma-spacing' },
    { line: 40, column: 30, ruleId: 'vue/comma-spacing' },
    { line: 40, column: 30, ruleId: 'vue/comma-spacing' },
    { line: 41, column: 30, ruleId: 'vue/comma-spacing' },
    { line: 41, column: 30, ruleId: 'vue/comma-spacing' },
    { line: 41, column: 37, ruleId: 'vue/comma-spacing' },
    { line: 41, column: 37, ruleId: 'vue/comma-spacing' },
    { line: 42, column: 27, ruleId: 'vue/comma-spacing' },
    { line: 42, column: 27, ruleId: 'vue/comma-spacing' },
    { line: 43, column: 24, ruleId: 'vue/comma-spacing' },
    { line: 43, column: 24, ruleId: 'vue/comma-spacing' },
    { line: 44, column: 33, ruleId: 'vue/comma-spacing' },
    { line: 44, column: 33, ruleId: 'vue/comma-spacing' },
    { line: 45, column: 27, ruleId: 'vue/no-unused-vars' },
    { line: 45, column: 29, ruleId: 'vue/comma-spacing' },
    { line: 45, column: 29, ruleId: 'vue/comma-spacing' },
    { line: 48, column: 23, ruleId: 'vue/comma-spacing' },
    { line: 48, column: 23, ruleId: 'vue/comma-spacing' },
    { line: 56, column: 13, ruleId: 'vue/comma-style' },
    { line: 57, column: 13, ruleId: 'vue/comma-style' },
    { line: 57, column: 16, ruleId: 'vue/comma-dangle' },
    { line: 61, column: 13, ruleId: 'vue/dot-location' },
    { line: 62, column: 21, ruleId: 'vue/dot-notation' },
    { line: 63, column: 16, ruleId: 'vue/dot-notation' },
    { line: 64, column: 16, ruleId: 'vue/no-constant-condition' },
    { line: 64, column: 22, ruleId: 'vue/eqeqeq' },
    { line: 65, column: 16, ruleId: 'vue/func-call-spacing' },
    { line: 66, column: 20, ruleId: 'vue/key-spacing' },
    { line: 66, column: 22, ruleId: 'vue/key-spacing' },
    { line: 67, column: 25, ruleId: 'vue/key-spacing' },
    { line: 70, column: 13, ruleId: 'vue/keyword-spacing' },
    { line: 72, column: 14, ruleId: 'vue/keyword-spacing' },
    { line: 72, column: 19, ruleId: 'vue/keyword-spacing' },
    { line: 74, column: 14, ruleId: 'vue/keyword-spacing' },
    { line: 74, column: 14, ruleId: 'vue/keyword-spacing' },
    { line: 80, column: 13, ruleId: 'vue/keyword-spacing' },
    { line: 82, column: 14, ruleId: 'vue/keyword-spacing' },
    { line: 82, column: 19, ruleId: 'vue/keyword-spacing' },
    { line: 84, column: 14, ruleId: 'vue/keyword-spacing' },
    { line: 84, column: 14, ruleId: 'vue/keyword-spacing' },
    { line: 90, column: 13, ruleId: 'vue/keyword-spacing' },
    { line: 90, column: 19, ruleId: 'vue/no-extra-parens' },
    { line: 92, column: 1, ruleId: '@stylistic/max-len' },
    { line: 92, column: 1, ruleId: 'vue/max-len' },
    { line: 96, column: 17, ruleId: 'vue/multiline-ternary' },
    { line: 98, column: 21, ruleId: 'vue/no-console' },
    { line: 101, column: 21, ruleId: 'vue/no-console' },
    { line: 104, column: 21, ruleId: 'vue/no-console' },
    { line: 107, column: 25, ruleId: 'vue/no-constant-condition' },
    { line: 108, column: 30, ruleId: 'vue/no-constant-condition' },
    { line: 109, column: 27, ruleId: 'vue/no-constant-condition' },
    { line: 110, column: 25, ruleId: 'vue/no-constant-condition' },
    { line: 111, column: 25, ruleId: 'vue/no-constant-condition' },
    { line: 112, column: 25, ruleId: 'vue/no-constant-condition' },
    { line: 116, column: 17, ruleId: 'vue/no-empty-pattern' },
    { line: 117, column: 17, ruleId: 'vue/no-empty-pattern' },
    { line: 118, column: 22, ruleId: 'vue/no-empty-pattern' },
    { line: 119, column: 22, ruleId: 'vue/no-empty-pattern' },
    { line: 122, column: 29, ruleId: 'vue/no-empty-pattern' },
    { line: 123, column: 18, ruleId: 'vue/no-extra-parens' },
    { line: 124, column: 8, ruleId: 'vue/no-extra-parens' },
    { line: 125, column: 19, ruleId: 'vue/no-parsing-error' },
    { line: 125, column: 20, ruleId: 'vue/no-irregular-whitespace' },
    { line: 125, column: 20, ruleId: 'no-irregular-whitespace' },
    { line: 126, column: 20, ruleId: 'vue/no-irregular-whitespace' },
    { line: 126, column: 20, ruleId: 'no-irregular-whitespace' },
    { line: 131, column: 25, ruleId: 'vue/comma-spacing' },
    { line: 134, column: 23, ruleId: 'vue/dot-notation' },
    { line: 137, column: 24, ruleId: 'vue/dot-notation' },
    { line: 140, column: 20, ruleId: 'vue/func-call-spacing' },
]);

describe('irregular whitespace', async () => {
    const irregularWhitespace = [
        '\f',
        '\v',
        '\u0085',
        '\uFEFF',
        '\u00A0',
        '\u1680',
        '\u180E',
        '\u2000',
        '\u2001',
        '\u2002',
        '\u2003',
        '\u2004',
        '\u2005',
        '\u2006',
        '\u2007',
        '\u2008',
        '\u2009',
        '\u200A',
        '\u200B',
        '\u202F',
        '\u205F',
        '\u3000',
    ];
    const irregularLineTerminators = ['\u2028', '\u2029'];
    const allIrregularWhitespace = [
        ...irregularWhitespace,
        ...irregularLineTerminators,
    ];

    await testCode({
        code:
`<template>
    <div>
        ${allIrregularWhitespace.map(space => `<div>${space}</div>`).join('\n        ')}
    </div>
</template>
`,
        fileExtension: 'vue',
        config: createVueConfig({ 'vue/no-irregular-whitespace': 'error' }),
        cases: [
            { line: 3, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 3, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 3, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 4, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 4, column: 13, ruleId: 'vue/no-parsing-error' },
            { line: 4, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 4, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 5, column: 13, ruleId: 'vue/no-parsing-error' },
            { line: 5, column: 14, ruleId: 'vue/no-bare-strings-in-template' },
            { line: 5, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 5, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 6, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 6, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 6, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 7, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 7, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 7, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 8, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 8, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 8, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 9, column: 14, ruleId: 'vue/no-bare-strings-in-template' },
            { line: 9, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 9, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 10, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 10, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 10, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 11, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 11, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 11, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 12, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 12, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 12, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 13, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 13, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 13, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 14, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 14, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 14, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 15, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 15, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 15, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 16, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 16, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 16, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 17, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 17, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 17, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 18, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 18, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 18, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 19, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 19, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 19, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 20, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 20, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 20, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 21, column: 14, ruleId: 'vue/no-bare-strings-in-template' },
            { line: 21, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 21, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 22, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 22, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 22, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 23, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 23, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 23, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 24, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 24, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 24, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 25, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 25, column: 14, ruleId: '@stylistic/linebreak-style' },
            { line: 25, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 25, column: 14, ruleId: 'no-irregular-whitespace' },
            { line: 26, column: 9, ruleId: 'vue/html-self-closing' },
            { line: 27, column: 14, ruleId: '@stylistic/linebreak-style' },
            { line: 27, column: 14, ruleId: 'vue/no-irregular-whitespace' },
            { line: 27, column: 14, ruleId: 'no-irregular-whitespace' },
        ],
    });
});
