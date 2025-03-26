/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let left = 0;
  for (let right = 0; right < prices.length; right++) {
    if (prices[right] - prices[left] < 0) {
      left = right;
    } else {
      profit = Math.max(profit, prices[right] - prices[left]);
    }
  }

  return profit;
};
// @lc code=end
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
