# eslint-config-typescript

> [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) config for Thesis wide projects.

## Installation

`yarn add -D https://github.com/thesis/eslint-config-typescript.git`

## Usage

### Setting up a project

 1. Install the linter and config - `yarn add -D https://github.com/thesis/eslint-config-typescript.git`
 2. In your `.eslintrc` add:
 ```js
{
  "extends": ["@thesis-co"],
  "parserOptions": {
    "project": "./.tsconfig-eslint.json"
  },
}
 ```
 3. Add commands for linting to your `package.json`:
 ```json
{
  "scripts": {
    "lint:ts": "eslint . --ext .ts",
    "lint:fix:ts": "eslint . --ext .ts --fix"
  },
}
```

### Adding a pre-commit hook using [pre-commit](https://pre-commit.com)

```yaml
 - repo: local
   hooks:
    - id: lint-ts
      name: 'lint ts'
      entry: /usr/bin/env bash -c "yarn lint:ts"
      files: '\.ts$'
      language: script
      description: "Checks TS code according to the package's linter configuration"
```