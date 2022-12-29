/**
 * @param {string} s
 * @return {string[]}
 */

var cellsInRange = function (s) {
  const [fromLetter, fromNum, , toLetter, toNum] = s
  const columns = []

  for (let c1 = fromLetter.charCodeAt(0), c2 = toLetter.charCodeAt(0); c1 <= c2; ++c1) {
    for (let r1 = +fromNum, r2 = +toNum; r1 <= r2; ++r1) {
      columns.push(String.fromCharCode(c1) + r1)
    }
  }
  return columns
};