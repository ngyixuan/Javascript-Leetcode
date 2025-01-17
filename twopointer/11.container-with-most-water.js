/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxRes = 0;
  while (left < right) {
    let curArea = (right - left) * Math.min(height[right], height[left]);
    maxRes = Math.max(maxRes, curArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxRes;
};
// @lc code=end
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
