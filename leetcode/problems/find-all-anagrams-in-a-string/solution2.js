// solution from Andy Gala

// Time Complexity: O(n) -> going over each array once and doing some constant time operations
// Space Complextiy: O(n) -> 

// Sliding Window

const arrayValuesEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}
/**
 * 
 * @param {string} s 
 * @param {string} p 
 * @return {number[]}
 */


var findAnagrams = function (s, p) {
  const sArr = new Array(26).fill(0)
  const pArr = new Array(26).fill(0)
  const result = []

  // iterate over p string and calculate the freq 
  // mapped to each character index to our p array

  // helper method 
  // charCode % 26 => 0 and 26
  for (let i = 0; i < p.length; i++) {
    let index = p.charCodeAt(i) % 26 // 97 mod(26) = 0
    pArr[index]++
  }

  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) % 26
    sArr[index]++

    // now check if we're outside the window range first

    if (i > p.length - 1) {
      // dec the head
      let headIdx = s.charCodeAt(i - p.length) % 26 // this will give whats at the beg of sArr
      sArr[headIdx]--
    }

    if (i >= p.length - 1) {
      if (arrayValuesEqual(sArr, pArr)) {
        result.push(i - (p.length - 1))
      }
    }
  }
  return result

}


findAnagrams("cbaebabacd", "abc")