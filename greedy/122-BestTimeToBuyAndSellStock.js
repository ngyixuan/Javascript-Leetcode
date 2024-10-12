/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    result += Math.max(prices[i + 1] - prices[i], 0);
  }
  return result;
};

prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
