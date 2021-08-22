/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const N = nums.length
  let total = 0

  for (let i = 0; i < N; i++) {
    total += nums[i]
  }

  return (N * (N + 1)) / 2 - total
}

module.exports = missingNumber
