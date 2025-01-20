/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0;
  let fast = 1;
  if (nums.length <= 1) return nums;
  while (fast < nums.length) {
    while (nums[fast] != nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }

  return slow + 1;
};
// @lc code=end
let nums = [1, 1, 2];
console.log(removeDuplicates(nums));
