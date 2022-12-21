/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const count = new Array(n + 1).fill(0)
  const res = []

  for (const [first, last, seats] of bookings) {
    count[first] += seats
    count[last + 1] -= seats
  }

  let sum = 0

  for (let i = 1; i <= n; i++) {
    sum += count[i]
    res.push(sum)
  }

  return res
};