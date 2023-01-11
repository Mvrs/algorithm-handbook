/**
 * @param {string} s
 * @return {string}
 */

/**
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

*/

// Time: O(n)
// Space: O(s + bucket)

var sortSentence = function (s) {
  const bucket = []
  const words = s.split(' ')
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let num = word[word.length - 1]
    // sequential execution still O(n)
    bucket[+num] = word.slice().split(num).join(' ')
  }
  return bucket.join('').trim()
};