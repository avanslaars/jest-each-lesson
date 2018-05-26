module.exports = function() {
  return {
    files: ['./index.js'],

    tests: ['./index.spec.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  }
}
