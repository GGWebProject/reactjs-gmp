module.exports = {
  rootDir: '../../',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: ['<rootDir>/configs/jest/jest.setup.js'],
  moduleNameMapper: { '^.+\\.(css|sass|scss)$': 'identity-obj-proxy' },
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
};
