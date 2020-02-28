module.exports = {
  resetMocks: true,
  restoreMocks: true,
  testMatch: ['**/test/**/*-test.*'],
  testPathIgnorePatterns: ['node_modules/', 'test/support/', '.cache'],
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  automock: false,
  setupFiles: ['./setupJest.js'],
};
