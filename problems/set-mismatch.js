/**
 * You have a set of integers s, which originally contains all the numbers from 1 to n.
 * Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,
 * which results in repetition of one number and loss of another number.
 * You are given an integer array nums representing the data status of this set after the error.
 * Find the number that occurs twice and the number that is missing and return them in the form of an array.
 */

// Test Cases

// Example 1:
// Input: nums = [1, 2, 2, 4]
// Output: [2, 3]

// Example 2:
// Input: nums = [1, 1]
// Output: [1, 2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findErrNums = nums => {
  const set = {};
  const reference = [];
  const dupsAndMissing = [];

  // lets keep a reference for the nums at index that are missing
  for (let i = 0; i < nums.length; i++) {
    reference.push(i + 1);
    // lets now see what nums we've come across

    if (set[nums[i]]) {
      set[nums[i]]++;
    } else {
      set[nums[i]] = 1;
    }
  }

  for (const key in set) {
    if (set[key] === 2) {
      dupsAndMissing.push(parseInt(key));
    }
  }

  for (let i = 0; i < reference.length; i++) {
    if (!nums.includes(reference[i])) {
      dupsAndMissing.push(reference[i]);
    }
  }

  return dupsAndMissing;
};

console.log(findErrNums([1, 2, 2, 4]));

// Credit: @sgallivan

/**
 * (Note: I've added another solution that has a better space complexity at O(1) extra space vs. the original solution below at O(N) extra space,
 * but it does so at the cost of an extra iteration through nums, though the time complexity remains O(N). Skip down to the Alternate Idea section for the breakdown.)
 * For this problem, we can take advantage of some math, because one thing we know about a
 * sequence of numbers from 1 to N is that their sum should equal the Nth triangular number (N * (N + 1) / 2).
 * Since the only difference between the ideal array ranging from 1 to N and our input array nums is the duplicated number,
 * that means that the difference between the sum of nums and the Nth triangular number is the same as the difference between our duplicated number (dupe) and the missing number.
 * We can easily find the duplicated number by utilizing a boolean array (seen) to keep track of which numbers have already been seen.
 * While iterating through nums, whenever we come across a number for the second time, that number must be our dupe.
 * We can also use this iteration to find the difference in the sums.
 * Then we can just return the dupe and the sum difference applied to the dupe to identify the missing number.
 */

var findErrorNums2 = function (nums) {
  let N = nums.length,
    dupe,
    sum = (N * (N + 1)) / 2,
    seen = new Uint8Array(N + 1);

  for (let i = 0; i < N; i++) {
    let num = nums[i];
    sum -= num; /*? */
    if (seen[num]) dupe = num; /*? */
    seen[num]++; /*? */
  }
  return [dupe, sum + dupe]; /*? */
};

console.log(findErrorNums2([1, 2, 2, 4]));

// Solution 3

/**
 *
 * Altnerate Idea:
 * In order to solve this problem with O(1) extra space, we can use nums directly to keep track of which numbers have been seen so far.
 * To do so, we need to be able to modify the elements of nums in such a way as to be easily able to obtain the original value again.
 * One of the easiest ways to do this is with the use of the mod operator (%). Since the largest value nums[i] is 10^4,
 * we can use that number as our base. By adding 10^4 to the value of an element, it can now tell us two things:
 * the original value of the element (num % 10^4) and whether or not the number equal to the index has been seen (num > 10^4).
 * Since the values in nums are 1-indexed and nums itself is 0-indexed, however, we'll have to shift the mod function to (nums - 1) % 10^4.
 * If we iterate through nums and apply this addition, then at the end, we'll know that the value that was seen twice will be > 20000
 * and the number that was never seen is < 10001.
 * So we just have to iterate through nums a second time, check for these values, add them to our answer (ans), and then return ans.
 *
 */

/**
 * Constraints
 * 2 <= nums.length <= 10^4
 * 1 <= nums[i] <= 10^4
 *
 */

// O(1) Extra Space
// O(N) Time Complexity

var findErrorNums3 = function (nums) {
  let N = nums.length,
    ans = [,];
  for (let i = 0; i < N; i++) {
    nums[(nums[i] - 1) % 10000] += 10000;
  }
  for (let i = 0; i < N; i++) {
    // we found our duplicate numn
    if (nums[i] > 20000) ans[0] = i + 1;
    // the num that was never seen
    else if (nums[i] < 10000) ans[1] = i + 1;
  }
  return ans;
};
