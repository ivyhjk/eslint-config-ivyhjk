module.exports = {
  projects: [
    '<rootDir>/packages/*/jest.config.ts'
  ],
  testRegex: '/__tests__/.*\\.spec\\.js$',
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: [
    'node_modules'
  ]
}
