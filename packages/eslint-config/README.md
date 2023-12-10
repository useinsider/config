# ESLint Config

## Table of Contents
- [ESLint Config](#eslint-config)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Versioning Policy](#versioning-policy)
  - [Available Configurations](#available-configurations)
    - [Vanilla 🍦](#vanilla-)
    - [Framework-specific](#framework-specific)
    - [⏳ Upcoming Configurations](#-upcoming-configurations)
  - [Contributing](#contributing)

## Getting Started

To ensure consistency and prevent version conflicts, we recommend adding this
library as a development dependency with a fixed version. This can be achieved
using the `-D` and `-E` flags in your package manager commands.

### Installation

1. **Install as a Development Dependency:**
   - For npm users:
     ```bash
     npm install -D -E @useinsider/eslint-config
     ```
   - For pnpm users:
     ```bash
     pnpm add -D -E @useinsider/eslint-config
     ```
2. **Create an ESLint config file:**
   You'll need an ESLint config file in your projects root directory.

   You can check the official [ESLint documentation] to get more details.
3. **Extend the Configuration:**
   Add the following to your `.eslintrc` file to extend the configuration:
    ```json5
    {
      "extends": ["@useinsider/eslint-config/dom"],
      // Add the rest of your configuration here
    }
    ```

[ESLint documentation]: https://eslint.org/docs/latest/use/configure/configuration-files

## Versioning Policy

This project follows the [Semantic Versioning](https://semver.org) policy.

## Available Configurations

We provide a variety of configurations to suit different environments and
frameworks. Here's a list of available configurations:

### Vanilla 🍦

| Environment       | Browser (DOM)                                                             | Node                                                                                                      |
| :---------------- | :------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| **EcmaScript/JS** | [`@useinsider/eslint-config/dom`](./src/dom#readme)                       | [`@useinsider/eslint-config`](./src/node#readme)<br>[`@useinsider/eslint-config/node`](./src/node#readme) |
| **TypeScript**    | [`@useinsider/eslint-config/typescript-dom`](./src/typescript-dom#readme) | [`@useinsider/eslint-config/typescript`](./src/typescript#readme)                                         |
| **Config files**  |                                                                           | [`@useinsider/eslint-config/config`](./src/config#readme)                                                 |

### Framework-specific

| Environment | JavaScript                                            | TypeScript                                                                  |
| :---------- | :---------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Vue 3**   | [`@useinsider/eslint-config/vue3`](./src/vue3#readme) | [`@useinsider/eslint-config/vue3-typescript`](./src/vue3-typescript#readme) |

### ⏳ Upcoming Configurations

Not available yet!

| Environment       | Browser (DOM)                                                     | Node                                                      |
| :---------------- | :---------------------------------------------------------------- | :-------------------------------------------------------- |
| **Legacy ES5 💀​** | [`@useinsider/eslint-config/legacy-dom`](./src/legacy-dom#readme) | [`@useinsider/eslint-config/legacy`](./src/legacy#readme) |

| Environment | JavaScript                                            | TypeScript                                                                  |
| :---------- | :---------------------------------------------------- | :-------------------------------------------------------------------------- |
| **Vue 2**   | [`@useinsider/eslint-config/vue2`](./src/vue2#readme) | [`@useinsider/eslint-config/vue2-typescript`](./src/vue2-typescript#readme) |

## Contributing

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on
how to contribute to this project.
