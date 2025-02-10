/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      //最小值在右边
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
// @lc code=end
let nums = [3, 1, 2];
console.log(findMin(nums));
