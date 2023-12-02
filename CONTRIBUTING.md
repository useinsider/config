# Contributing to the Project

## Table of Contents
- [Contributing to the Project](#contributing-to-the-project)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
    - [`src/*.cjs` files](#srccjs-files)
    - [`src/rules/*.cjs` files](#srcrulescjs-files)
      - [`agnostic.cjs`](#agnosticcjs)
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

## Project Structure

Public config file paths are in `exports` in
[package.json](package.json#exports).

### [`src/*.cjs`](./src/) files

These are sets of rules extending third-party libraries and
[`rules`](./src/rules/). They are accessible to users.

### [`src/rules/*.cjs`](./src/rules/) files

Files here contain rules serving the purpose indicated by their names.

#### [`agnostic.cjs`](./src/rules/agnostic.cjs)

Contains ESLint-maintained rules, free of external library dependencies.

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
