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
  function nSum(n, start, target) {
    let res = [];
    if (n == 2) {
      let left = start;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[left] + nums[right];
        let lo = nums[left];
        let hi = nums[right];
        if (sum < target) {
          while (left < right && nums[left] === lo) left++;
        } else if (sum > target) {
          while (left < right && nums[right] === hi) right--;
        } else {
          res.push([nums[left], nums[right]]);
          while (left < right && nums[left] === lo) left++;
          while (left < right && nums[right] === hi) right--;
        }
      }
    } else {
      for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        let sub = nSum(n - 1, i + 1, target - nums[i]);
        for (let arr of sub) {
          arr.push(nums[i]);
          res.push(arr);
        }
      }
    }
    return res;
  }

  return nSum(3, 0, 0);
};
// @lc code=end
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
