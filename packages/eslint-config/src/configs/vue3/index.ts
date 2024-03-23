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
import vue from '../../rules/vue';
import { merge } from '../../utils/merge';
import { mergeAll } from '../../utils/mergeAllConfig';

const compat = new FlatCompat({
    baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default merge(
    mergeAll(compat.extends(
        'airbnb-base',
        'plugin:vue/vue3-recommended',
        'plugin:vue-scoped-css/vue3-recommended'
    )),
    jsdocPlugin.configs.recommended,
    mergeAll(compat.extends('plugin:@cspell/recommended')),
    preConfig(['vue', 'vue-scoped-css']),
    core,
    cspell,
    stylistic,
    jsdoc,
    vue,
    postConfig(),
    mergeAll(compat.config({
        parser: 'vue-eslint-parser',
    })),
    {
        languageOptions: {
            parserOptions: {
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                extraFileExtensions: ['.vue'],
            },
            globals: {
                ...globals.browser,
            },
        },
    } as Linter.FlatConfig
);
