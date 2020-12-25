/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const { ESLint } = require('eslint');

describe('typescript-react', () => {
  const linter = new ESLint({
    overrideConfigFile: require.resolve('../.eslintrc')
  });

  const repoFiles = [
    path.resolve(__dirname, '../index.js'),
    path.resolve(__dirname, './index.spec.js')
  ];

  it('expect no errors were found', async () => {
    const results = await linter.lintFiles(repoFiles);

    expect(results.length).toBeGreaterThan(1);

    for (const result of results) {
      expect(result.errorCount).toBe(0);
      expect(result.warningCount).toBe(0);
    }
  });
});
