/**
 *	@param {number[][]} intervals
 *	@returns {number[][]}
 */

// Time: O(n^2)
// Space: O(1)

var merge = function (intervals) {
  if (intervals.length === 0 || intervals.length === 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  // returns positive if a > b
  let i = 0;
  while (i < intervals.length) {
    let replaced = false;

    if (i < intervals.length - 1 && overlap(intervals[i], intervals[i + 1])) {
      intervals[i] = mergeIntervals(intervals[i], intervals[i + 1]);
      intervals.splice(i + 1, 1);
      replaced = true;
    }
    if (!replaced) i++;
  }
  return intervals;
};

const overlap = (a, b) => {
  // a and b overlap when a is between b
  // OR when b is between a
  const aIsBetweenB = a[0] >= b[0] && a[0] <= b[1];
  const bIsBetweenA = b[0] >= a[0] && b[0] <= a[1];

  if (aIsBetweenB || bIsBetweenA) return true;
  else return false;
};

const mergeIntervals = (a, b) => {
  // two cases
  // CONSIDER WHEN THE TWO INTERVALS HAVE SAME START OR SAME END

  if (a[1] > b[1]) [a, b] = [b, a];

  // ========== at this point, b ends after a ==========

  // 1. when one interval contains the other
  //  -. a contains b
  //  -. b contains a
  //
  // a: ---
  // b: --------

  if (a[0] > b[0]) {
    return b;
  } else {
    return [a[0], b[1]];
  }
};

// test solution

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
