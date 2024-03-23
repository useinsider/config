import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Linter } from 'eslint';
import { FlatCompat } from '@eslint/eslintrc';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import globals from 'globals';
import { postConfig, preConfig } from '../../base';
import core from '../../rules/core';
import cspell from '../../rules/cspell';
import jsdoc from '../../rules/jsdoc';
import stylistic from '../../rules/stylistic';
import typescript from '../../rules/typescript';
import { merge } from '../../utils/merge';
import { mergeAll } from '../../utils/mergeAllConfig';

const compat = new FlatCompat({
    baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default merge(
    mergeAll(compat.extends(
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@cspell/recommended'
    )),
    jsdocPlugin.configs.recommended,
    jsdocPlugin.configs['recommended-typescript-error'],
    mergeAll(compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    )),
    preConfig(['@typescript-eslint']),
    core,
    cspell,
    jsdoc,
    typescript,
    stylistic,
    postConfig(),
    mergeAll(compat.config({
        parser: '@typescript-eslint/parser',
    })),
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            jsdoc: {
                mode: 'typescript',
                tagNamePreference: {
                    callback: 'watch',
                    desc: 'use',
                },
            },
        },
    } as Linter.FlatConfig
);
