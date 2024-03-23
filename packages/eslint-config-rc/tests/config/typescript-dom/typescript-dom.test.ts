import { describe } from 'vitest';
import { testSingleFile } from '../../test-facility/testers';

describe('node', async () => {
    await testSingleFile(import.meta.url, 'test/case.ts', [
        { line: 2, column: 1, ruleId: '@typescript-eslint/no-unsafe-call' },
        { line: 2, column: 8, ruleId: '@typescript-eslint/no-unsafe-member-access' },
    ]);
});
