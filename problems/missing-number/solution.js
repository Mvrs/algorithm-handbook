/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * The sum of the numbers from 1 to N is the Nth triangular number, defined as N * (N + 1) / 2.
 * It stands to reason, then, that we can simply find the
 * difference between the Nth triangular number and the sum of nums, which should be our missing number.
 */

const missingNumber = nums =>
  (nums.length * (nums.length + 1)) / 2 - nums.reduce((acc, sum) => acc + sum);

// var missingNumber = function (nums) {
//   const N = nums.length
//   let total = 0

//   for (let i = 0; i < N; i++) {
//     total += nums[i]
//   }

//   return (N * (N + 1)) / 2 - total
// }

module.exports = missingNumber;
