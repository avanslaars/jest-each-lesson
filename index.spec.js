const { isPalindrome } = require('./index')

describe('isPalindrome', () => {
  test('isPalindrome("Racecar") - true', () => {
    const input = 'Racecar'
    const result = isPalindrome(input)
    expect(result).toBe(true)
  })

  test('isPalindrome("Typewriter") - false', () => {
    const input = 'Typewriter'
    const result = isPalindrome(input)
    expect(result).toBe(false)
  })

  test('isPalindrome("rotor") - true', () => {
    const input = 'rotor'
    const result = isPalindrome(input)
    expect(result).toBe(true)
  })
})

describe('isPalindrome - each', () => {
  test.each([
    ['Racecar', true],
    ['Typewriter', false],
    ['rotor', true],
    ['kayak', true],
    ['Step on no pets', true]
  ])('isPalindrome("%s") - %s', (input, expected) => {
    const result = isPalindrome(input)
    expect(result).toBe(expected)
  })
})

describe('isPalindrome - each template literal', () => {
  test.each`
  input           | expected
  ${'Racecar'}    | ${true}
  ${'Typewriter'} | ${false}
  ${'rotor'}      | ${true}
  `('isPalindrome("$input") - $expected', ({ input, expected }) => {
    const result = isPalindrome(input)
    expect(result).toBe(expected)
  })
})
