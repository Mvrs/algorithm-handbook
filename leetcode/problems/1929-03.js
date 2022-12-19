/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**

Time: O(n)
Space: O(n)

*/

var getConcatenation = function (nums) {
  return [...nums].concat(...nums)
};