# @yvalkova/cypress-setup

This package simplifies the setup process for Cypress, an end-to-end testing framework, with opinionated defaults, and some useful utils.

## Usage

```
npx @yvalkova/cypress-setup
```

This command will perform the following tasks:

1. Check if TypeScript is already installed. If not, it will install the latest version.
2. Install Cypress.
3. Initialize Cypress files.
4. Add useful utils.
5. Add Cypress scripts to `package.json`.
6. Add Cypress files to `.gitignore`.

## Motivation

I found myself setting up Cypress projects a couple of times, and I ended up copying configuration from previous projects, so I created this package to be able to do that effortlessly.

## TODO

- [ ] Add common utility functions
- [ ] Add a safety check to abort execution if Cypress is already installed.

## License

This package is distributed under the MIT License.
