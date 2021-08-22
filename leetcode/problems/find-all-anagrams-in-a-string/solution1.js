/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */


// anything that has to due with substring
// sliding window

// sliding window
// Time: O(S + P) we travel S and P once
// Space: O(1)
var findAnagrams = function (s, p) {
  const codeForA = 'a'.charCodeAt(0)
  const countForP = new Array(26).fill(0)
  for (let i = 0; i < p.length; i++) {
    const index = p.charCodeAt(i) - codeForA
    countForP[index] += 1
  }

  const equal = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
    return true
  }

  const result = []
  const countForS = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {

    const index = s.charCodeAt(i) - codeForA
    countForS[index] += 1

    // check the right side first
    if (i > p.length - 1) {
      // remove the head
      const index = s.charCodeAt(i - p.length) - codeForA
      countForS[index] -= 1
    }
    // characteristics of s matches p
    if (i >= p.length - 1) {
      // check if counts meets
      if (equal(countForS, countForP)) {
        result.push(i - p.length + 1)
      }
    }

  }

  return result
};

findAnagrams('cbaebabacd', 'abc')


