/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }

  return maxProfit;
};
let prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
