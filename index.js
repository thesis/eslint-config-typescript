"use strict"

module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/quotes": ["error", "double"],
  },
}
