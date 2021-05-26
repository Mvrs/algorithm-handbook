/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
function canAttendMeetings(intervals) {
  if (intervals.length < 2) return true;
  intervals.sort((a, b) => a[0] - b[0]);

  let end = intervals[0][1];
  console.log(end);
  console.log(intervals[1][0]);

  for (let i = 1; i < intervals.length; i++) {
    // if end is greater than my start time
    // if it is then return false
    if (end > intervals[i][0]) return false;
    // otherwise
    // check if my current end interval is
    // less than the next new interval
    // if it's less than we update that number
    // and keep the max of it
    if (end < intervals[i][1]) end = intervals[i][1];
  }
  return true;
}

console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);
