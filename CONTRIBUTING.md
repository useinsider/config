# Contributing to the Project

## Table of Contents
- [Contributing to the Project](#contributing-to-the-project)
  - [Table of Contents](#table-of-contents)
  - [Reporting an Issue](#reporting-an-issue)
  - [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Pushing Your Codes](#pushing-your-codes)
  - [Code Release Process](#code-release-process)
    - [Creating a Branch](#creating-a-branch)
      - [Feature Branches](#feature-branches)
      - [Bugfix Branches](#bugfix-branches)
      - [Hotfix Branches](#hotfix-branches)
      - [Refactor Branches](#refactor-branches)
      - [Documentation Branches](#documentation-branches)
      - [Chore Branches](#chore-branches)
    - [Commit Naming](#commit-naming)
    - [Pull Request](#pull-request)

## Reporting an Issue

If you have any trouble with a rule set, dependency or a test, feel free to
report it in [issues](https://github.com/useinsider/config/issues).

## Development

### Prerequisites

- Node.JS 16+ ([nvm recommended](https://github.com/nvm-sh/nvm#readme))
- [pnpm installation](https://pnpm.io/installation)
- Understanding the [`semantic-release`'s Release Workflow]

[`semantic-release`'s Release Workflow]: https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow

### Installation

1. Clone the repository.
2. Install dependencies: `pnpm i` or `pnpm install`
3. Lint files: `pnpm lint`

## Pushing Your Codes

## Code Release Process

This project strictly follows the Conventional Commits specifications.

For detailed guidance on the release procedure, please consult the
[`semantic-release` documentation]. Our project employs an automated versioning
system, which upgrades the version based on the commit messages.


[`semantic-release` documentation]: https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases

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

#### Chore Branches

For other changes that don't modify source or test files, prefixed with `chore/`.<br>
Example: `chore/update-codeowners`.

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
