/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getConcatenation = function (nums) {
  let res = []
  nums.forEach(e => {
    res.push(e)
  })
  const s = res.concat(...nums)
  return s
};