/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

// Solution Andy gala
var rotateString = function (s, goal) {
  // base case
  if (s.length !== goal.length) return false
  if (s.length === 0 && goal.length === 0) return true

  s = s + s
  return s.includes(goal)
};

rotateString('abcde', 'cdeab')