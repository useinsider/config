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
import { merge } from '../../utils/merge';
import { mergeAll } from '../../utils/mergeAllConfig';

const compat = new FlatCompat({
    baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default merge(
    mergeAll(compat.extends('eslint-config-airbnb-base')),
    jsdocPlugin.configs.recommended,
    mergeAll(compat.extends('plugin:@cspell/recommended')),
    preConfig(),
    core,
    cspell,
    stylistic,
    jsdoc,
    postConfig(),
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    }
) as Linter.FlatConfig;
