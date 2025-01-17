/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let index = Math.floor((right + left) / 2);
    if (nums[index] > target) {
      right = index - 1;
    } else if (nums[index] < target) {
      left = index + 1;
    } else {
      return index;
    }
  }

  return -1;
};
// @lc code=end
let nums = [-1, 0, 3, 5, 9, 12];
let target = 2;
console.log(search(nums, target));
