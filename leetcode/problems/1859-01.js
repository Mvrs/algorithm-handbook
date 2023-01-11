/**
 * @param {string} s
 * @return {string}
 */

/**
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

*/

// Time: O(nlogn + n) = O(2nlogn)
// Space: O(s + bucket)

var sortSentence = function (s) {
  const bucket = []
  const words = s.split(' ')
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let num = word[word.length - 1]
    // creating the tupe of [[word, position], [...]]
    bucket.push([word.slice().split(num).join(''), +num])
  }

  // sort the bucket basef of the 2 element of each tuple
  // basically the number
  // then concat the words into a string and join them 
  let sortedWords = bucket.sort((a, b) => a[1] - b[1]).map(sublist => sublist[0]);
  return sortedWords.join(' ')
};