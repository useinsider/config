import { describe } from 'vitest';
import { testSingleFile } from '../../test-facility/testers';

describe('node', async () => {
    await testSingleFile(import.meta.url, 'test/case.ts', [
        { line: 2, column: 1, ruleId: '@typescript-eslint/no-unsafe-call' },
        { line: 2, column: 8, ruleId: '@typescript-eslint/no-unsafe-member-access' },
        { line: 2, column: 20, ruleId: '@stylistic/semi' },
        { line: 4, column: 10, ruleId: '@typescript-eslint/no-unused-vars' },
        { line: 4, column: 13, ruleId: '@stylistic/space-before-function-paren' },
        { line: 4, column: 15, ruleId: '@stylistic/comma-spacing' },
        { line: 4, column: 18, ruleId: '@stylistic/space-before-blocks' },
        { line: 5, column: 5, ruleId: '@typescript-eslint/no-unsafe-return' },
        { line: 10, column: 12, ruleId: '@typescript-eslint/no-explicit-any' },
        { line: 13, column: 2, ruleId: '@stylistic/no-extra-parens' },
        { line: 15, column: 24, ruleId: '@stylistic/comma-dangle' },
        { line: 20, column: 5, ruleId: '@typescript-eslint/no-useless-constructor' },
        { line: 20, column: 20, ruleId: '@typescript-eslint/no-empty-function' },
        { line: 25, column: 5, ruleId: '@stylistic/lines-between-class-members' },
        { line: 30, column: 10, ruleId: '@typescript-eslint/array-type' },
        { line: 31, column: 10, ruleId: '@typescript-eslint/array-type' },
        { line: 34, column: 5, ruleId: '@typescript-eslint/no-misused-promises' },
        { line: 38, column: 1, ruleId: '@typescript-eslint/no-floating-promises' },
        { line: 41, column: 1, ruleId: '@stylistic/comma-dangle' },
        { line: 45, column: 15, ruleId: '@stylistic/comma-dangle' },
        { line: 46, column: 15, ruleId: '@stylistic/comma-dangle' },
        { line: 51, column: 19, ruleId: '@stylistic/comma-dangle' },
        { line: 51, column: 19, ruleId: '@stylistic/type-generic-spacing' },
        { line: 53, column: 18, ruleId: '@stylistic/comma-dangle' },
        { line: 58, column: 17, ruleId: '@stylistic/type-generic-spacing' },
        { line: 58, column: 27, ruleId: '@stylistic/semi' },
    ]);
});
