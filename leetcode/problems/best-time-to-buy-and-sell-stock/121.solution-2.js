/**
 * 
 * @param {number[]} prices
 * @returns {number} 
 */


// brute force approach
const maxProfit = function (prices) {
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let price = prices[j] - prices[i]

      if (price > profit) {
        profit = Math.max(profit, price)
      }
    }
  }
  return profit
}

maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([7, 6, 4, 3, 1])