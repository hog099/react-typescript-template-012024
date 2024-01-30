/* eslint-disable no-undef */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    collectCoverage: false,
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/(.*)$': '<rootDir>/src/$1',

        // Handle static assets (adjust the regex based on your asset types)
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    roots: ['./src'],
    testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    transform: {
        // Transform files with babel-jest
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['./node_modules/'],
    coverageDirectory: 'coverage', // Output directory for coverage reports
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/utils/**/*',
        '!src/App.tsx',
        '!src/main.tsx',
        '!src/routes/**/*',
        '!src/assets/**/*',
        '!src/styles/**/*',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
