const isPalindrome = word =>
  word.toLowerCase() ===
  word
    .toLowerCase()
    .split('')
    .reverse()
    .join('')

module.exports = {
  isPalindrome
}
