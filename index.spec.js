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
