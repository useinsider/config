# Contributing to the Project

See also the global [CONTRIBUTING.md](../../CONTRIBUTING.md) file for repo-wide
specification.

## Table of Contents
- [Contributing to the Project](#contributing-to-the-project)
  - [Table of Contents](#table-of-contents)
  - [Adding a New Rule](#adding-a-new-rule)
  - [Project Structure](#project-structure)
    - [`src/configs/**` files](#srcconfigs-files)
    - [`src/rules/**` files](#srcrules-files)
      - [`core.ts`](#corets)

## Adding a New Rule

Before introducing a new rule, please create a new discussion. Responsible team
will evaluate your needs and the intention of its use cases. Since adding a new
rule will always affect multiple projects and bring additional maintenance
responsibility, we have to be picky about it.

## Project Structure

Public config file paths are in `exports` in
[package.json](package.json#exports).

### [`src/configs/**`](./src/configs) files

These are consumable (exported publicly) files that has sets of rules extending
third-party libraries and [`rules`](./src/rules/).

### [`src/rules/**`](./src/rules/) files

Files here contain rules serving the purpose indicated by their names.

#### [`core.ts`](./src/rules/core.ts)

Contains ESLint-maintained core-level rules, free of external library
dependencies.

