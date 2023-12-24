import { describe } from 'vitest';
import { testSingleFile } from '../../test-facility/testers';

describe('node', async () => {
    /**
     * This test is based on TypeScript tooling but it tests for a JS file.
     */
    await testSingleFile(import.meta.url, 'test/case.js', [
        { line: 2, column: 1, ruleId: '@typescript-eslint/no-unsafe-call' },
        { line: 2, column: 8, ruleId: '@typescript-eslint/no-unsafe-member-access' },
    ]);
});
