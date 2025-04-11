/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let n = coins.length;
  let dp = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(0));

  // base case
  for (let i = 0; i <= n; i++) dp[i][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++)
      if (j - coins[i - 1] >= 0)
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      else dp[i][j] = dp[i - 1][j];
  }
  return dp[n][amount];
};
// @lc code=end
let amount = 5;
let coins = [1, 2, 5];
change(amount, coins);
