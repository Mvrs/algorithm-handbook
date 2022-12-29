/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let finalValue = 0

  for (const operation of operations) {
    if (operation[0] === '+' || operation[operation.length - 1] === '+') {
      finalValue++
    } else {
      finalValue--
    }

  }

  return finalValue
};