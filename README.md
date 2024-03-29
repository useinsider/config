# Insider's Config Library

[![Status Checks](https://flat.badgen.net/github/checks/useinsider/config/main/qa?label=QA+(Lint,+Test+and+Build))](https://github.com/useinsider/config/actions/workflows/qa.yml)
[![License](https://flat.badgen.net/npm/license/@useinsider/eslint-config)](./LICENSE.md)
[![Commit Naming Policy](https://flat.badgen.net/badge/Conventional%20Commits/1.0.0/fa6673)](https://conventionalcommits.org/en/v1.0.0/)


Welcome to Insider's shared configuration library! This monorepo offers a
comprehensive set of configurations for EcmaScript/JavaScript and TypeScript
projects. We aim to facilitate the integration of Insider's coding styles
and configurations into your projects.

## Table of Contents
- [Insider's Config Library](#insiders-config-library)
  - [Table of Contents](#table-of-contents)
  - [ESLint Configurations](#eslint-configurations)
  - [Stylelint Configurations](#stylelint-configurations)
    - [About StyleLint](#about-stylelint)
  - [TypeScript/JavaScript Configurations](#typescriptjavascript-configurations)
  - [Contributing](#contributing)

## ESLint Configurations

[![eslint-config](https://flat.badgen.net/npm/v/@useinsider/eslint-config)](https://npmjs.com/package/@useinsider/eslint-config)

Our ESLint configurations offer a diverse set of rules suitable for various
project structures. To integrate these configurations into your project,
explore the [`eslint-config`] directory and follow the instructions.

[`eslint-config`]: ./packages/eslint-config/#readme

## Stylelint Configurations

[![stylelint-config](https://flat.badgen.net/npm/v/@useinsider/stylelint-config)](https://npmjs.com/package/@useinsider/stylelint-config)

Similarly, our Stylelint configurations provide tailored rule sets for
different project types. Visit the [`stylelint-config`] directory to learn how
to apply these configurations.

<blockquote>
  <p>[!NOTE]<br>
    Stylelint configurations are currently in development and not yet available.
  </p>
</blockquote>

[`stylelint-config`]: ./packages/stylelint-config/#readme

### About StyleLint
Stylelint is a powerful linter designed specifically for styling files,
similar in function to ESLint but focused on stylesheets.

## TypeScript/JavaScript Configurations

[![tsconfig](https://flat.badgen.net/npm/v/@useinsider/tsconfig)](https://npmjs.com/package/@useinsider/tsconfig)

For TypeScript and JavaScript, we provide `tsconfig` and `jsconfig` files,
respectively. These configuration files standardize project structures and
reduce redundancy across projects. To utilize these configurations, head to
the [`tsconfig`] directory and follow the setup instructions.

<blockquote>
  <p>[!NOTE]<br>
    TypeScript/JavaScript configurations are currently in development and not
    yet available
  </p>
</blockquote>

[`tsconfig`]: ./packages/tsconfig/#readme

## Contributing

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on
how to contribute to this project.
