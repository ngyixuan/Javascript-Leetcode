/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let n = nums.length;
  let length = new Array(n).fill(1); // lengths[i] 表示以 nums[i] 结尾的最长递增子序列的长度
  let counts = new Array(n).fill(1); // lengths[i] 表示以 nums[i] 结尾的最长递增子序列的个数

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (length[j] + 1 > length[i]) {
          length[i] = length[j] + 1;
          counts[i] = counts[j];
        } else if (length[j] + 1 === length[i]) {
          counts[i] += counts[j];
        }
      }
    }
  }
  let maxLen = Math.max(...length);
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (length[i] === maxLen) {
      res += counts[i];
    }
  }

  return res;
};
// @lc code=end
let nums = [1, 3, 5, 4, 7];
console.log(findNumberOfLIS(nums));
