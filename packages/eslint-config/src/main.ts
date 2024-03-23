import type { Linter } from 'eslint';
import { merge } from './utils/merge';

const configMap = {
    async node () {
        return import('./configs/node');
    },
    async config () {
        return import('./configs/config');
    },
    async dom () {
        return import('./configs/dom');
    },
    async typescript () {
        return import('./configs/typescript');
    },
    async 'typescript-dom' () {
        return import('./configs/typescript-dom');
    },
    async vue3 () {
        return import('./configs/vue3');
    },
    async 'vue3-typescript' () {
        return import('./configs/vue3-typescript');
    },
} satisfies { [scope: string]: () => Promise<{ default: Linter.FlatConfig }> };

interface Config {
    /** Precedence order will affect how rules applied */
    preset: (keyof typeof configMap)[];
    config: Linter.FlatConfig;
}

export default async function useInsider (config: Config): Promise<Linter.FlatConfig> {
    const configs = config.preset
        .map(async scope => typeof configMap[scope] === 'function' && (await configMap[scope]()).default)
        .filter(Boolean);
    const resolvedConfigs = await Promise.all(configs);

    const mergedConfig = merge(
        resolvedConfigs.reduce((acc, scope) => merge(acc, scope), {}),
        config.config
    );

    if (!mergedConfig) {
        return Promise.reject(new Error('No config found'));
    }

    return mergedConfig;
}
