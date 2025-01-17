/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  while (slow < fast) {
    nums[slow] = 0;
    slow++;
  }
  return nums;
};
// @lc code=end
let nums = [0];
console.log(moveZeroes(nums));
