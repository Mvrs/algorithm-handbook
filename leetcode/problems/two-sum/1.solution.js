/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */

// One pass through array make the hash
// ANother potential for checking
// Time Complexity: O(n)
// Space Complexity: O(n) 

const twoSum = (nums, target) => {

  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    // lets grab the values and those values as a key
    let value = nums[i]
    hash[value] = i
  }

  for (let i = 0; i < nums.length; i++) {
    let potientialKey = target - nums[i]
    if (hash[potientialKey] && hash[potientialKey] !== i) {
      return [i, hash[potientialKey]]
    }
  }
}


twoSum([2, 7, 11, 15], 9)