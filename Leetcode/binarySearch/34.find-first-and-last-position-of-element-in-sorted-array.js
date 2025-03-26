/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function leftBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (left >= nums.length || nums[left] !== target) return -1;
    return left;
  }
  function rightBound(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((right + left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (right < 0 || nums[right] !== target) return -1;
    return right;
  }

  return [leftBound(nums, target), rightBound(nums, target)];
};
// @lc code=end
let nums = [5, 7, 7, 8, 8, 10],
  target = 6;
console.log(searchRange(nums, target));
