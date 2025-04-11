/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 1) return nums[0];
  let memo1 = new Array(nums.length).fill(-1);
  let memo2 = new Array(nums.length).fill(-1);

  function dp(memo, start, end) {
    if (start > end) return 0;
    if (memo[start] !== -1) return memo[start];
    memo[start] = Math.max(
      dp(memo, start + 1, end),
      nums[start] + dp(memo, start + 2, end)
    );

    return memo[start];
  }

  let res1 = dp(memo1, 1, nums.length - 1);
  let res2 = dp(memo2, 0, nums.length - 2);

  return Math.max(res1, res2);
};
// @lc code=end
let nums = [1];
console.log(rob(nums));
