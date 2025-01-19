/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (i - map.get(nums[i]) <= k) return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
// @lc code=end
let nums = [1, 0, 1, 1];
k = 1;
console.log(containsNearbyDuplicate(nums, k));
