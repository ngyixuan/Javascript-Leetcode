/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let n = nums.length;
  let maxDp = new Array(n);
  let minDp = new Array(n);
  let res = nums[0];
  maxDp[0] = nums[0];
  minDp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    let options = [nums[i], nums[i] * maxDp[i - 1], nums[i] * minDp[i - 1]];
    maxDp[i] = Math.max(...options);
    minDp[i] = Math.min(...options);
    res = Math.max(res, maxDp[i]);
  }
  return res;
};
// @lc code=end
let nums = [-2];
console.log(maxProduct(nums));
