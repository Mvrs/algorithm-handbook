/**
 * @param {number[][]} intervals
 * @return {number}
 */

// Time: O(nlogn)
// Space: O(1)

function minMeetingRooms(intervals) {
  // put all start time in an array, sort
  // put all end time in an array, sort
  // for i from 0 to end of startarray
  // two pointers
  var n = intervals.length;
  var startTime = [],
    endTime = [];
  for (let i = 0; i < n; i++) {
    var interval = intervals[i];
    startTime.push(interval[0]);
    endTime.push(interval[1]);
  }
  // sort start and end times
  startTime.sort((a, b) => a - b);
  endTime.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let res = 0;
  let m = 0; // rooms

  while (i < n) {
    if (startTime[i] < endTime[j]) {
      m++;
      i++;
    } else {
      m--;
      j++;
    }
    res = Math.max(res, m);
  }

  return res;
}

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);

const arr = [
  [1, 5],
  [2, 9],
  [3, 6],
];
const startElements = [];
const endElements = [];

for (let i = 0; i < arr.length; i++) {
  const values = arr[i];
  startElements.push(values[0]);
  endElements.push(values[1]);
}

console.log(startElements);
console.log(endElements);
