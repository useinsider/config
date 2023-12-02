# ESLint Config

Welcome to Insider's shared ESLint configuration! This project offers a set of
ESLint rules tailored for both EcmaScript/JavaScript and TypeScript. It is
designed to help you seamlessly integrate Insider's coding style into your
development workflow.

## Table of Contents
- [ESLint Config](#eslint-config)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Available Configurations](#available-configurations)
    - [Upcoming Configurations](#upcoming-configurations)
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

2. **Extend the Configuration:**
   Add the following to your `.eslintrc` file to extend the configuration:
    ```json5
    {
      "extends": ["@useinsider/eslint-config/dom"],
      // Add the rest of your configuration here
    }
    ```

## Available Configurations

We provide a variety of configurations to suit different environments and
frameworks. Here's a list of available configurations:

| Environment       | Browser                                                                | Node                                                                                                |
| :---------------- | :--------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| **EcmaScript/JS** | [`@useinsider/eslint-config/dom`](./src/dom.cjs)                       | [`@useinsider/eslint-config`](./src/node.cjs)<br>[`@useinsider/eslint-config/node`](./src/node.cjs) |
| **TypeScript**    | [`@useinsider/eslint-config/typescript-dom`](./src/typescript-dom.cjs) | [`@useinsider/eslint-config/typescript`](./src/typescript.cjs)                                      |
| **Vue 3**         | [`@useinsider/eslint-config/vue3`](./src/vue3.cjs)                     | -                                                                                                   |

### Upcoming Configurations

Not available yet!

| Environment       | Browser                                                        | Node                                                   |
| :---------------- | :------------------------------------------------------------- | :----------------------------------------------------- |
| **Legacy ES5 💀​** | [`@useinsider/eslint-config/legacy-dom`](./src/legacy-dom.cjs) | [`@useinsider/eslint-config/legacy`](./src/legacy.cjs) |
| **Vue 2**         | [`@useinsider/eslint-config/vue2`](./src/vue2.cjs)             | -                                                      |

## Contributing

Your contributions are welcome!
Please consult the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how
to contribute to this project.
