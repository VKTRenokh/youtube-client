import { Config } from 'jest'

export const jestConfig: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  //transform: { ?????
  //  ...createDefaultPreset({
  //    tsconfig: '<rootDir>/tsconfig.spec.json',
  //    stringifyContentPathRegex: '\\.html$',
  //  }).transform,
  //},
}

export default jestConfig
