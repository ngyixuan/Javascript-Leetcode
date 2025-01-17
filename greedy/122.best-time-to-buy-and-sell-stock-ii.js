/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let totalSum = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      totalSum += prices[i + 1] - prices[i];
    }
  }

  return totalSum;
};
// @lc code=end
let prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
