/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) return [map[target - nums[i]], i];
    else {
      map[nums[i]] = i;
    }
  }
};
// @lc code=end

let nums = [0, 4, 3, 0];
target = 0;
console.log(twoSum(nums, target));
