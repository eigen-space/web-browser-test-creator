# About

This project is a tool for generating specifications from a set of phrases that describe a scenario. An example of how
the configuration for this tool might look is presented in [the article](https://www.notion.so/cybernation/Investigation-of-usage-25f39803f15f42feacd0290aa0239d6f).
Description of the solution can be found [here](https://www.notion.so/cybernation/Describing-a-solution-4735d2a5cb26499fa22cd46dd0c3b2f5).

# Requirements

* node >= 10.12.0

# Why do we have that dependencies?

* `@eigenspace/helper-scripts` - helps us to travel directory.

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
