/**
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
var merge = function (intervals) {
  // sort
  var res = [];
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  // from 0 to n
  for (var i = 0; i < intervals.length; i++) {
    var pre = res[res.length - 1];
    console.log(res[res.length - 1]);
    console.log(pre);
    console.log(intervals[i][0]);
    if (i == 0 || intervals[i][0] > pre[1]) {
      res.push(intervals[i]);
    } else {
      pre[1] = Math.max(pre[1], intervals[i][1]);
    }
  }
  return res;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
