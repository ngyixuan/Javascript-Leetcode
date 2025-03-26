/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums = nums.sort();
  for (let i = 0; i < nums.length; i += 3) {
    if (
      nums[i] !== nums[i + 1] ||
      nums[i] !== nums[i + 2] ||
      nums[i + 1] !== nums[i + 2]
    ) {
      return nums[i];
    }
  }
};
// @lc code=end
let nums = [2, 2, 3, 2];
console.log(singleNumber(nums));
