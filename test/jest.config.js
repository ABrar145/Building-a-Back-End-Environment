module.exports = {
  preset: 'ts-jest', // Use ts-jest to process TypeScript files
  testEnvironment: 'node', // Test environment should be Node.js
  transform: {
    '^.+\\.ts$': 'ts-jest', // Handle TypeScript files using ts-jest
  },
  testMatch: ['**/test/**/*.test.ts'], // Match test files with .test.ts extension
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'], // Support for TypeScript and JavaScript files
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Ensure tsconfig.json is used for TypeScript compilation
    },
  },
};
