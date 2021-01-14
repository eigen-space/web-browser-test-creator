# About

This project is a tool for generating specifications from a set of phrases that describe a scenario.

# Requirements

* node >= 10.12.0

# Install

`yarn add --dev @eigenspace/web-browser-test-generator`

# How to run

1. To use the specification generator, you must implement the **ActionGenerator** interface.
We can take the [implementation](https://github.com/eigenspace/web-wdio-e2e-kit) for webdriverio.

2.Create SpecGenerator Instance

    `const runner = new SpecGenerator(new WebDriverIoActionGenerator(), outputDir);`

3. Run generator with output directory path as parameter

    `runner.run(configsPath);`


# Why do we have that dependencies?

* `@eigenspace/helper-scripts` - helps us to travel directory.
* `prettier` - used for formatting Typescript specifications.

# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes lint rules, config for typescript.
* `@eigenspace/common-types` - includes common types.
* `@types/*` - contains type definitions for specific library.
* `eslint-plugin-eigenspace-script` - Includes set of script linting rules and configuration for them.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
* `husky` - used for configure git hooks.
* `jest` - spec runner.
* `lint-staged` - used for configure linters against staged git files.
* `eslint` - it checks code for readability, maintainability, and functionality errors.
* `ts-jest` - it lets you use Jest to test projects written in TypeScript.
