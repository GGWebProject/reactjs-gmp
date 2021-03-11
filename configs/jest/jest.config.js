module.exports = {
  rootDir: '../../',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx}',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
  ],
  transform: { '^.+\\.jsx?$': "babel-jest" },
  setupFilesAfterEnv: ['<rootDir>/configs/jest/jest.setup.js'],
  moduleNameMapper: { '^.+\\.(css|sass|scss)$': 'identity-obj-proxy' },
  testEnvironment: 'jsdom',
  cacheDirectory: '<rootDir>/configs/jest/_cache/',
};
