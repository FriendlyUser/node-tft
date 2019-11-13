module.exports = {
  out: './docs',
  readme: 'none',
  includes: './',
  exclude: [
      '**/__tests__/**/*',
      '**/__test_utils__/**/*',
      '**/__fixtures__/**/*',
      '**/testsuite/**/*',
      'node_modules',
			'dist',
			'*.test.ts',
			'**/*.test.ts'
  ],
  mode: 'file',
  excludeExternals: false,
  excludeNotExported: false,
  excludePrivate: false
}