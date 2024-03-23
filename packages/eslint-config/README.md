# ESLint Configurations

## Table of Contents
- [ESLint Configurations](#eslint-configurations)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Examples](#examples)
  - [Available Presets](#available-presets)
    - [Vanilla 🍦](#vanilla-)
    - [Framework-specific](#framework-specific)
    - [⏳ Upcoming Configurations](#-upcoming-configurations)
      - [Vanilla 🍦](#vanilla--1)
      - [Framework-specific](#framework-specific-1)
  - [Contributing](#contributing)

## Getting Started

To ensure consistency and prevent version conflicts, we recommend adding this
library as a development dependency with a fixed version. This can be achieved
using the `-D` and `-E` flags in your package manager commands.

### Installation

1. **Install as a Development Dependency:**
   - For pnpm users:
     ```bash
     pnpm add -D -E @useinsider/eslint-config
     ```
   - For npm users:
     ```bash
     npm install -D -E @useinsider/eslint-config
     ```
2. **Create an ESLint config file:**
   You'll need an ESLint config file in your projects root directory.

   You can check the official [ESLint documentation] to get more details.
3. **Extend the Configuration:**
   Add the following to your `eslint.config.js` file to use the presets:
    ```js
    import useInsider from '@useinsider/eslint-config';

    /** @type {import('eslint').Linter.FlatConfig[]} */
    export default [
        await useInsider({
            // See `Available Presets`
            preset: ['dom'],
            config: {
                // Glob file path pattern to specify the target files of the
                // selected presets
                files: ['src/**/*'],
            },
        }),
        await useInsider({
            preset: ['node', 'config'],
            config: {
                files: ['**/eslint.config.js'],
            },
        }),
    ];
    ```
4. Adjust your `eslint.config.js` to your projects needs. Choose the right
   preset for the right folder path

[ESLint documentation]: https://eslint.org/docs/next/use/configure/configuration-files

## Examples

Checkout the [examples directory](../../examples) to see various apps with the extended ESLint
configuration.

## Available Presets

We provide a variety of configurations to suit different environments and
frameworks. Here's a list of available presets:

### Vanilla 🍦

| Environment       | Browser (DOM)                                           | Node                                                                                            |
| :---------------- | :------------------------------------------------------ | :---------------------------------------------------------------------------------------------- |
| **EcmaScript/JS** | [`dom`](./src/configs/dom#readme)                       | [`@useinsider/eslint-config`](./src/configs/node#readme)<br>[`node`](./src/configs/node#readme) |
| **TypeScript**    | [`typescript-dom`](./src/configs/typescript-dom#readme) | [`typescript`](./src/configs/typescript#readme)                                                 |
| **Config files**  |                                                         | [`config`](./src/configs/config#readme)                                                         |

### Framework-specific

| Environment | JavaScript                          | TypeScript                                                |
| :---------- | :---------------------------------- | :-------------------------------------------------------- |
| **Vue 3**   | [`vue3`](./src/configs/vue3#readme) | [`vue3-typescript`](./src/configs/vue3-typescript#readme) |

---

### ⏳ Upcoming Configurations

Following presets are not available yet!

#### Vanilla 🍦

| Environment       | Browser (DOM)                                   | Node                                    |
| :---------------- | :---------------------------------------------- | :-------------------------------------- |
| **Legacy ES5 💀​** | [`legacy-dom`](./src/configs/legacy-dom#readme) | [`legacy`](./src/configs/legacy#readme) |

#### Framework-specific

| Environment | JavaScript                          | TypeScript                                                |
| :---------- | :---------------------------------- | :-------------------------------------------------------- |
| **Vue 2**   | [`vue2`](./src/configs/vue2#readme) | [`vue2-typescript`](./src/configs/vue2-typescript#readme) |

## Contributing

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on
how to contribute to this project.
