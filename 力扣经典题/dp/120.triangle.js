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
  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      triangle[row][col] += Math.min(
        triangle[row + 1][col],
        triangle[row + 1][col + 1]
      );
    }
  }
  return triangle[0][0];
};
// @lc code=end
// let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
let triangle = [[-10]];
minimumTotal(triangle);
