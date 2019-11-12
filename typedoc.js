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
      'dist'
  ],
  mode: 'file',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true
}