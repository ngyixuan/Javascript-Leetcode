/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  let left = 0;
  let right = matrix.length * matrix[0].length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let row = Math.floor(mid / matrix[0].length);
    let col = mid % matrix[0].length;
    let value = matrix[row][col];
    if (value < target) {
      left = mid + 1;
    } else if (value > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
let matrix = [[1, 1]];
target = 2;

console.log(searchMatrix(matrix, target));
