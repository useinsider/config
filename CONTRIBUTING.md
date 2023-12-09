# Contributing to the Project

## Table of Contents
- [Contributing to the Project](#contributing-to-the-project)
  - [Table of Contents](#table-of-contents)
  - [Reporting an Issue](#reporting-an-issue)
  - [Adding a New Rule](#adding-a-new-rule)
  - [Project Structure](#project-structure)
    - [`src/**/index.cjs` files](#srcindexcjs-files)
    - [`src/rules/*.cjs` files](#srcrulescjs-files)
      - [`core.cjs`](#corecjs)
  - [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Pushing Your Codes](#pushing-your-codes)
    - [Creating a Branch](#creating-a-branch)
      - [Feature Branches](#feature-branches)
      - [Bugfix Branches](#bugfix-branches)
      - [Hotfix Branches](#hotfix-branches)
      - [Refactor Branches](#refactor-branches)
      - [Documentation Branches](#documentation-branches)
    - [Commit Naming](#commit-naming)
    - [Pull Request](#pull-request)

## Reporting an Issue

If you have any trouble with a rule set, dependency or a test, feel free to
report it in [issues](https://github.com/useinsider/eslint-config/issues).

## Adding a New Rule

Before introducing a new rule, please create a new discussion. Responsible team
will evaluate your needs and the intention of its use cases. Since adding a new
rule will always affect multiple projects and bring additional maintenance
responsibility, we have to be picky about it.

## Project Structure

Public config file paths are in `exports` in
[package.json](package.json#exports).

### [`src/**/index.cjs`](./src/) files

These are consumable (exported publicly) files that has sets of rules extending
third-party libraries and [`rules`](./src/rules/).

### [`src/rules/*.cjs`](./src/rules/) files

Files here contain rules serving the purpose indicated by their names.

#### [`core.cjs`](./src/rules/core.cjs)

Contains ESLint-maintained core-level rules, free of external library
dependencies.

## Development

### Prerequisites

- Node.JS 16+ ([nvm recommended](https://github.com/nvm-sh/nvm#readme))
- [pnpm installation](https://pnpm.io/installation)

### Installation

1. Clone the repository.
2. Install dependencies: `pnpm i` or `pnpm install`
3. Lint files: `pnpm lint`

## Pushing Your Codes

Refer to [`semantic-release`] for understanding the release procedure.
The project has an automatic versioning procedure that bumps itself based on
commit messages.

[`semantic-release`]: https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/release-workflow/pre-releases.md

### Creating a Branch

- Always start a new branch using the formats described below.
- New pull requests should base off the `beta` branch for beta testing.

#### Feature Branches

Name after the feature being developed, prefixed with `feature/`.<br>
Example: `feature/add-new-rules`.

#### Bugfix Branches

Used for bug fixes, prefixed with `bugfix/`.<br>
Example: `bugfix/resolve-syntax-error`.

#### Hotfix Branches

For urgent production fixes, prefixed with `hotfix/`.<br>
Example: `hotfix/security-vulnerability-fix`.

#### Refactor Branches

For code improvements, prefixed with `refactor/`.<br>
Example: `refactor/optimize-code-performance`.

#### Documentation Branches

For documentation updates, prefixed with `docs/`.<br>
Example: `docs/improve-readme`.

### Commit Naming

Commit messages must follow [Conventional Commits] guidelines. Since we use
[semantic release], this format is crucial for automated versioning and release
notes.

Use the following format: `<type>(<scope>): <description>`
- `<type>`: Describes the nature of the change (e.g., `feat`, `fix`).
- `<scope>`: Optional, indicates the section of the codebase affected.
- `<description>`: A concise description of the changes.

For help crafting compliant messages, use the [Commitlint] web form or install
the `Conventional Commits` VSCode extension recommended by the project.

[Conventional Commits]: https://www.conventionalcommits.org/
[semantic release]: https://github.com/semantic-release/semantic-release
[Commitlint]: https://commitlint.io/

### Pull Request

Title should conform to [Commit Naming](#commit-naming) and clearly state intent.
