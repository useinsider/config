import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { Linter } from 'eslint';
import { FlatESLint, type FlatESLintOptions, type LintMessage } from 'eslint/use-at-your-own-risk';
import fs from 'fs-extra';
import { expect, it, describe } from 'vitest';

interface Case {
    ruleId: string;
    line: number;
    column: number;
}

function testMessages (messages: LintMessage[], cases: Case[], filePath?: string) {
    messages.forEach((message, index) => {
        const expected = cases[index];

        if (message.ruleId == null || (message.line ?? message.column) == null) {
            expect.fail(`\n${message.message}`);

            return;
        }

        it(`[${index + 1}] Line ${message.line} have an error for '${message.ruleId}'`, context => {
            context.onTestFailed(() => {
                // eslint-disable-next-line no-console
                console.log(messages.map(({ ruleId, line, column }) => ({ line, column, ruleId })));
            });

            if (!expected) {
                expect.fail(
                    'Missing Test Case'
                    + `\nNo test case found for the '${message.ruleId}' rule. Ensure that a valid test case for this rule is defined in the test file.`
                    + `\nSuggested test case: { line: ${message.line}, column: ${message.column}, ruleId: '${message.ruleId}' },`
                    + `\nESLint error: ${message.message}`
                    + `\n\nSee -> ${filePath ? `${filePath}#` : ''}${message.line}:${message.column}`
                );

                return;
            }

            if (
                expected.ruleId !== message.ruleId
                || expected.line !== message.line
                || expected.column !== message.column
            ) {
                expect.fail(
                    'Invalid Test Case'
                    + `\nExpected rule '${expected.ruleId}' but received '${message.ruleId}'`
                    + `\nSuggested test case: { line: ${message.line}, column: ${message.column}, ruleId: '${message.ruleId}' },`
                    + `\n\nSee -> ${filePath ? `${filePath}#` : ''}${message.line}:${message.column}`
                );

                return;
            }

            expect(message.line).toBe(expected.line);
            expect(message.column).toBe(expected.column);
            expect(message.ruleId).toBe(expected.ruleId);
        });
    });
}

export async function testMultipleFiles (
    root: string,
    tests: { casePath: string; cases: Case[] }[],
    props: { eslintConfig?: Linter.FlatConfig } = {}
) {
    const eslintConfig: FlatESLintOptions = {
        fix: false,
        ignore: false,
        warnIgnored: true,
        cache: false,
    };

    if (props.eslintConfig) {
        eslintConfig.overrideConfig = props.eslintConfig;
    } else {
        eslintConfig.overrideConfigFile = fileURLToPath(new URL('test/eslint.config.js', root));
    }

    const eslint = new FlatESLint(eslintConfig);
    const filePaths = tests.map(({ casePath }) => fileURLToPath(new URL(casePath, root)));
    const results = await eslint.lintFiles(filePaths);

    results.forEach((result: LintMessage, index: number) => {
        const { casePath, cases } = tests[index];

        describe(casePath, () => {
            testMessages(result.messages, cases, casePath);
        });
    });
}

export async function testSingleFile (root: string, casePath: string, cases: Case[]) {
    return testMultipleFiles(root, [{ casePath, cases }]);
}

export async function testCode (
    props: {
        code: string;
        config: NonNullable<Parameters<typeof testMultipleFiles>[2]>['eslintConfig'];
        cases: Case[];
        /** @default 'js' */
        fileExtension?: string;
    }
) {
    const baseURL = new URL('./code', import.meta.url);
    const basePath = fileURLToPath(baseURL);
    const directoryID = crypto.randomBytes(16).toString('hex');
    const testDirectoryName = `test-${directoryID}` as const;
    const testDirectoryPath = `${basePath}/${testDirectoryName}` as const;
    const temporaryTestFilename = `case.${props.fileExtension ?? 'js'}` as const;
    const temporaryTestFilePath = `${testDirectoryPath}/${temporaryTestFilename}` as const;
    const eslintConfig = { ...props.config };

    if (eslintConfig.languageOptions?.parserOptions?.project === '<temporary-project>') {
        eslintConfig.languageOptions.parserOptions.project = `${testDirectoryPath}/tsconfig.json`;
    }

    try {
        await fs.mkdir(testDirectoryPath);
        await fs.writeFile(temporaryTestFilePath, props.code);
        await fs.copy(`${basePath}/tsconfig.json`, `${testDirectoryPath}/tsconfig.json`);
        await testMultipleFiles(
            baseURL.href,
            [{ casePath: `code/${testDirectoryName}/${temporaryTestFilename}`, cases: props.cases }],
            { eslintConfig }
        );
    } finally {
        await fs.remove(testDirectoryPath);
    }

    // const eslint = new ESLint({ ignore: false, useEslintrc: false, baseConfig: config });
    // const [result] = await eslint.lintText(dedent(code));

    // console.log(result);

    // testMessages(result.messages, cases);
}
