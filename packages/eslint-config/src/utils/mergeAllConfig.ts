import type { Linter } from 'eslint';
import { merge } from './merge';

export function mergeAll (...configs: Linter.FlatConfig[][]) {
    return configs.flat().reduce((acc, scope) => merge(acc, scope), {} as Linter.FlatConfig);
}
