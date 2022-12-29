/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let richest = 0

  for (const account of accounts) {
    const accountSum = account.reduce((a, b) => a + b, 0)

    if (richest < accountSum) {
      richest = accountSum
    } else {
      richest = Math.max(richest, accountSum)
    }
  }
  return richest
};