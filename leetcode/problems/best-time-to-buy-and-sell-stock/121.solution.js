/**
 * 
 * @param {number[]} prices
 * @returns {number} 
 */

// two pointer approach

const a = 6 - 1
console.log(a)

const maxProfit = function (prices) {
  let sellIdx = prices.length - 1
  let profit = 0

  for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
    let buyVal = prices[buyIdx]
    let sellVal = prices[sellIdx]

    if (buyVal - sellVal >= 0) {
      sellIdx = buyIdx
    } else {
      // update our profit
      let price = sellVal - buyVal
      profit = Math.max(profit, price)
    }
  }

  return profit
}

maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([7, 6, 4, 3, 1])