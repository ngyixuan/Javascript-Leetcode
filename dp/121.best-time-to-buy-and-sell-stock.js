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
  let n = prices.length;
  let dp = Array.from({ length: n }, () => Array(2).fill(0));
  // dp[i][0] 维护最大 profit
  // dp[i][1] 维护最小 cost

  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }

  return dp[n - 1][0];
};
// @lc code=end
let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
