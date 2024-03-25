import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Linter } from 'eslint';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { merge } from './utils/merge';
import { mergeAll } from './utils/mergeAllConfig';

const compat = new FlatCompat({
    baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export function preConfig (plugins: string[] = []) {
    return merge(
        js.configs.recommended,
        mergeAll(compat.plugins('import', 'jsdoc', '@stylistic', '@stylistic/migrate', '@cspell', ...plugins))
    );
}

export function postConfig (): Linter.FlatConfig {
    return merge(
        {
            languageOptions: {
                ecmaVersion: 2022,
            },
            rules: {
                'jsdoc/require-param': 'off',
                'jsdoc/require-jsdoc': 'off',
                'jsdoc/require-returns': 'off',
                'jsdoc/require-param-type': 'off',
                'jsdoc/check-param-names': 'off',
            },
        } as Linter.FlatConfig
    );
}
