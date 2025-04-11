/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let maxLen = 0;
  let zeroCount = 0;
  let right = 0;
  for (right = 0; right < nums.length; right++) {
    if (nums[right] == 0) zeroCount++;
    while (zeroCount > k) {
      maxLen = Math.max(maxLen, right - left);
      if (nums[left] == 0) zeroCount--;
      left++;
    }
  }
  return Math.max(maxLen, right - left);
};
// @lc code=end
let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  k = 3;

// let nums = [0, 0, 0, 1],
//   k = 4;
console.log(longestOnes(nums, k));
