/** @type {import('ts-jest').JestConfigWithTsJest} */

// Modules needs transpile.
const es6Modules = [
  "@tbd54566975/dwn-sdk-js"
]

export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'node',
  transformIgnorePatterns: [`node_modules/(?!${es6Modules.join("|")})`],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/dist'
  ]
};
