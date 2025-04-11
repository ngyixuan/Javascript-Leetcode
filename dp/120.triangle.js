/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(triangle[i].length).fill(0);
  }
  for (let i = 0; i < triangle[n - 1].length; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
};
// @lc code=end
// let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
let triangle = [[-10], [1, 2]];
console.log(minimumTotal(triangle));
