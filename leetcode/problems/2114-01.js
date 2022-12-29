/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return sentences.reduce((count, word) => {
    count = Math.max(
      count,
      word.split(' ').length
    )
    return count
  }, 0)
};