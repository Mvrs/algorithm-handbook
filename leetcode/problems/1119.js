/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
  const removeVowels = new RegExp(/[aeiou]/ig)
  return s.replaceAll(removeVowels, '')
};