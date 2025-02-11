/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === nums[left + 1]) {
      left += 2;
    } else {
      return nums[left];
    }
    if (nums[right] === nums[right - 1]) {
      right -= 2;
    } else {
      return nums[right];
    }
  }
};
// @lc code=end
let nums = [3, 3, 7, 7, 10, 11, 11];
console.log(singleNonDuplicate(nums));
