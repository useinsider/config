import type { Linter } from 'eslint';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import globals from 'globals';
import { postConfig, preConfig } from '../../base';
import core from '../../rules/core';
import cspell from '../../rules/cspell';
import jsdoc from '../../rules/jsdoc';
import stylistic from '../../rules/stylistic';
import typescript from '../../rules/typescript';
import { compat } from '../../utils/compat';
import { merge } from '../../utils/merge';

export default merge(
    compat.extends(
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@cspell/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
    ),
    jsdocPlugin.configs.recommended,
    jsdocPlugin.configs['recommended-typescript-error'],
    compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ),
    preConfig(['@typescript-eslint']),
    core,
    cspell,
    jsdoc,
    typescript,
    stylistic,
    postConfig(),
    compat.config({
        parser: '@typescript-eslint/parser',
    }),
    {
        languageOptions: {
            globals: {
                ...globals.node,
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
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
    } as Linter.FlatConfig
);
