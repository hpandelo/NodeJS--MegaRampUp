export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*-protocols.ts',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: [
    '**/*.spec.ts', 
    '**/*.test.ts'
  ],
  preset: '@shelf/jest-mongodb',
  watchPathIgnorePatterns: ['globalConfig'],
}
