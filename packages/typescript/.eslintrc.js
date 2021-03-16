module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import-length',
    'import',
    'simple-import-sort'
  ],
  extends: [
    'eslint:recommended',
    'semistandard',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'import-length/import-length': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': 'error',
    'react/prop-types': 'off',
    'simple-import-sort/imports': 'error'
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};
