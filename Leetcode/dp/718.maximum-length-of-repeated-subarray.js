/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let maxLen = 0;
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = Math.max(dp[i][j] + 1, dp[i - 1][j - 1] + 1);
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }
  return maxLen;
};
// @lc code=end
let nums1 = [1, 2, 3, 2, 1],
  nums2 = [3, 2, 1, 4, 7];
console.log(findLength(nums1, nums2));
