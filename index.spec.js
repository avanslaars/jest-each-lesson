const { isPalindrome } = require('./index')

describe('isPalindrome', () => {
  test('isPalindrome("Racecar") - true', () => {
    const input = 'Racecar'
    const result = isPalindrome(input)
    expect(result).toBe(true)
  })

  test('Typewriter is not a palindrome', () => {
    const input = 'Typewriter'
    const result = isPalindrome(input)
    expect(result).toBe(false)
  })

  test('rotor is a palindrome', () => {
    const input = 'rotor'
    const result = isPalindrome(input)
    expect(result).toBe(true)
  })
})
