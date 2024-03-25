import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import { mergeAll } from './mergeAllConfig';

const flatCompat = new FlatCompat({
    baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export const compat = {
    extends: (...configsToExtend: Parameters<FlatCompat['extends']>) => mergeAll(
        flatCompat.extends(...configsToExtend)
    ),
    config: (eslintrcConfig: Parameters<FlatCompat['config']>[0]) => mergeAll(flatCompat.config(eslintrcConfig)),
    plugins: (...plugins: Parameters<FlatCompat['plugins']>) => mergeAll(flatCompat.plugins(...plugins)),
    env: (envConfig: Parameters<FlatCompat['env']>[0]) => mergeAll(flatCompat.env(envConfig)),
};
