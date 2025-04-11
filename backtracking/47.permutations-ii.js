/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let used = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  function backtrack(path) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([]);
  return res;
};
// @lc code=end
let nums = [1, 1, 2];
console.log(permuteUnique(nums));
