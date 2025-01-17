/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let memo = Array.from({ length: m }, () => Array(n).fill(0));
  var dp = function (x, y) {
    if (x == 0 && y == 0) {
      return 1;
    }
    if (x < 0 || y < 0) {
      return 0;
    }
    if (memo[x][y] > 0) return memo[x][y];

    memo[x][y] = dp(x - 1, y) + dp(x, y - 1);
    return memo[x][y];
  };

  return dp(m - 1, n - 1);
};
// @lc code=end
let m = 3,
  n = 2;
console.log(uniquePaths(m, n));
