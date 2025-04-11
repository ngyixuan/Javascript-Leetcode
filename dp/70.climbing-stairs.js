/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    if (i <= 2) {
      dp[i] = i;
      continue;
    }
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end
let n = 5;
console.log(climbStairs(n));
