/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  return nSum(nums, 3, 0, 0);
};

var nSum = function (nums, n, start, target) {
  let res = [];
  if (nums.length < n || n < 2) return res;
  if (n == 2) {
    let lo = start;
    let hi = nums.length - 1;
    while (lo < hi) {
      let sum = nums[lo] + nums[hi];
      if (sum < target) {
        lo++;
      } else if (sum > target) {
        hi--;
      } else {
        res.push([nums[lo], nums[hi]]);
        lo++;
        hi--;
        while (lo < hi && nums[lo] === nums[lo - 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi + 1]) hi--;
      }
    }
  } else {
    for (let i = start; i < nums.length; i++) {
      let sub = nSum(nums, n - 1, i + 1, target - nums[i]);
      for (let arr of sub) {
        res.push([nums[i], ...arr]);
      }
      while (i < nums.length && nums[i] === nums[i + 1]) i++;
    }
  }
  return res;
};

// @lc code=end
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
