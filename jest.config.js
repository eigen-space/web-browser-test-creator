module.exports = {
    clearMocks: true,
    collectCoverageFrom: [
        '<rootDir>/src/app/**/*.ts',
        // Only proxy methods
        '!<rootDir>/src/app/components/fs-manager/**/*',
        // Only proxy methods
        '!<rootDir>/src/app/components/spec-builder/**/*',
        // Only proxy methods
        '!<rootDir>/src/app/components/spec-generator/**/*'
    ],
    coveragePathIgnorePatterns: [
        '.*\\.d\\.ts'
    ],
    testMatch: [
        '<rootDir>/src/app/**/*.spec.ts'
    ],
    modulePathIgnorePatterns: [
        '<rootDir>/dist/'
    ],
    setupFiles: [
        '<rootDir>/config/jest/setup/console.setup.js'
    ],
    testURL: 'http://localhost',
    transform: {
        '^(?!.*\\.(js|ts|tsx|css|json)$)': '<rootDir>/config/jest/transform/file.transform.js',
        '^.+\\.tsx?$': '<rootDir>/config/jest/transform/typescript.transform.js'
    },
    moduleFileExtensions: [
        'web.ts',
        'ts',
        'tsx',
        'web.js',
        'js',
        'json',
        'node'
    ],
    globals: {
        'ts-jest': { tsConfig: 'tsconfig.spec.json' }
    },
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 13,
            functions: 20,
            lines: 32,
            statements: 31
        }
    }
};
