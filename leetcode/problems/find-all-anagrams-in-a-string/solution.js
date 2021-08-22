/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// Time: O(sp)
// space: O(26) => O(1)
var findAnagrams = function (s, p) {

  // naively, compare all the possible substrings 
  // for each s
  // sort to decide anagram
  // n(s * (plogp + p)) => O(splogp)

  // possible is finite
  // try to hash substring? and then compare with O(1) => O(s)
  // how can we do hash
  // since letters are finite
  // we can create an array
  // for something like abc can be like:
  // [1, 1, 1, ....]

  // or counting? [1, 1, 20100, .....] for p => O(p)
  const countForP = new Array(26).fill(0)
  // 1, count for p
  const codeForA = 'a'.charCodeAt(0)
  for (let i = 0; i < p.length; i++) {
    const index = p.charCodeAt(i) - codeForA // the index
    countForP[index] += 1
  }

  const result = []
  // for each starting index
  for (let i = 0; i < s.length - p.length + 1; i++) {
    const count = countForP.slice(0) // clone countForP
    let k = i
    for (; k < i + p.length; k++) {
      const index = s.charCodeAt(k) - codeForA
      if (count[index] === 0) {
        break
      } else {
        count[index] -= 1
      }
    }

    // if we find match
    if (k === i + p.length) {
      result.push(i)
    }
  }

  return result
};

findAnagrams('cbaebabacd', 'abc')


