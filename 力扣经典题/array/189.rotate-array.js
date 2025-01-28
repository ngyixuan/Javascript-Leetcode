/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length <= 1) return nums;
  k = k % nums.length;
  nums.reverse();
  for (let i = 0; i < Math.floor(k / 2); i++) {
    [nums[i], nums[k - i - 1]] = [nums[k - i - 1], nums[i]];
  }
  let n = nums.length;
  for (let i = 0; i < Math.floor((n - k) / 2); i++) {
    [nums[k + i], nums[n - 1 - i]] = [nums[n - 1 - i], nums[k + i]];
  }

  return nums;
};
// @lc code=end
let nums = [1, 2];
k = 3;
console.log(rotate(nums, k));
