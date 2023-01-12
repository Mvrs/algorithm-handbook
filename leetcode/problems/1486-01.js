/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */

// Time: O(n)
// Space: O(1)

var xorOperation = function (n, start) {
  let next = start + 2
  let operations = 1
  let xor = start

  while (operations < n) {
    xor = next ^ xor
    next += 2
    operations++
  }
  return xor
};