import { resolve } from 'node:path';
import typescript from '@rollup/plugin-typescript';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const watchState = process.argv.includes('--watch');

    return {
        build: {
            lib: {
                entry: {
                    main: resolve(__dirname, 'src/main.ts'),
                    'rules/core': resolve(__dirname, 'src/rules/core.ts'),
                    'rules/cspell': resolve(__dirname, 'src/rules/cspell.ts'),
                    'rules/jsdoc': resolve(__dirname, 'src/rules/jsdoc.ts'),
                    'rules/stylistic': resolve(__dirname, 'src/rules/stylistic.ts'),
                    'rules/typescript': resolve(__dirname, 'src/rules/typescript.ts'),
                    'rules/vue': resolve(__dirname, 'src/rules/vue.ts'),
                },
                name: 'eslint-plugin',
                formats: ['es', 'cjs'],
            },
            minify: !watchState && mode === 'production',
            rollupOptions: {
                external: ['eslint', 'eslint-plugin-import', 'eslint-plugin-jsdoc', 'eslint-plugin-import', '@stylistic/eslint-plugin', '@stylistic/eslint-plugin-migrate', '@cspell/eslint-plugin', 'eslint-config-airbnb-base', 'eslint-plugin-import', 'eslint-plugin-jsdoc', '@eslint/eslintrc', 'node:url', 'node:path', 'node:fs'],
                plugins: [
                    typescriptPaths({ preserveExtensions: true }),
                    typescript({
                        declaration: true,
                        outDir: 'dist',
                        exclude: ['**/__tests__'],
                        resolveJsonModule: true,
                    }),
                    visualizer(),
                ],
            },
        },
        plugins: [
            dts(),
        ],
        test: {
            root: './tests',
            coverage: {
                provider: 'v8',
                reporter: ['text', 'json', 'html'],
                reportsDirectory: './coverage',
            },
        },
    };
});
