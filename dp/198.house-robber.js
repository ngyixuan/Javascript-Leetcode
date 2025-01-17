/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let memo = new Array(nums.length).fill(-1);
  return dp(memo, nums, 0);
};
var dp = function (memo, nums, start) {
  if (start >= nums.length) return 0;
  if (memo[start] !== -1) return memo[start];
  let res = Math.max(
    dp(memo, nums, start + 1),
    nums[start] + dp(memo, nums, start + 2)
  );
  memo[start] = res;
  return res;
};
// @lc code=end
let nums = [1, 2, 3, 1];
console.log(rob(nums));
