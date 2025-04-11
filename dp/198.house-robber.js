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
  let n = nums.length;
  let memo = new Array(n + 1).fill(-1);
  memo[0] = 0;
  function dp(start) {
    if (start < 0) {
      return 0;
    }
    if (memo[start] !== -1) {
      return memo[start];
    }
    memo[start] = Math.max(dp(start - 1), nums[start - 1] + dp(start - 2));
    return memo[start];
  }
  return dp(n);
};
// @lc code=end
let nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
