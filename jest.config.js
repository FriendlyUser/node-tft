module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "dist/*.js",
    "./node_modules",
    "./dist"
  ]
}
