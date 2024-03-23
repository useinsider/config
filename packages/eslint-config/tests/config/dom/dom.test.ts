import { describe } from 'vitest';
import { testSingleFile } from '../../test-facility/testers';

describe('node', async () => {
    await testSingleFile(import.meta.url, 'test/case.js', [
        { line: 3, column: 1, ruleId: 'no-console' },
    ]);
});
