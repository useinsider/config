import type { Linter } from 'eslint';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import globals from 'globals';
import { postConfig, preConfig } from '../../base';
import core from '../../rules/core';
import cspell from '../../rules/cspell';
import jsdoc from '../../rules/jsdoc';
import stylistic from '../../rules/stylistic';
import typescript from '../../rules/typescript';
import vue from '../../rules/vue';
import { compat } from '../../utils/compat';
import { merge } from '../../utils/merge';

export default merge(
    compat.extends(
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:vue/vue3-recommended',
        'plugin:vue-scoped-css/vue3-recommended'
    ),
    jsdocPlugin.configs.recommended,
    jsdocPlugin.configs['recommended-typescript-error'],
    compat.extends(
        'plugin:@cspell/recommended',
        '@vue/eslint-config-typescript',
        'plugin:@typescript-eslint/recommended'
    ),
    preConfig(['vue', 'vue-scoped-css', '@typescript-eslint']),
    core,
    cspell,
    stylistic,
    jsdoc,
    vue,
    typescript,
    postConfig(),
    compat.config({
        parser: 'vue-eslint-parser',
    }),
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                extraFileExtensions: ['.vue'],
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
