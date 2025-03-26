/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = height.length - 1;
  let sum = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        sum += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        sum += rightMax - height[right];
      }
      right--;
    }
  }

  return sum;
};
// @lc code=end
let height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
