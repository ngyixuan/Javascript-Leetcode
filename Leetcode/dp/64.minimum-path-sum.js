/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        dp[i][j] = grid[i][j];
      } else if (i == 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j == 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end
let grid = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(minPathSum(grid));
