/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let path = [];
  let res = [];
  let used = new Array(nums.length).fill(false);
  function backtrack(path) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack(path);

  return res;
};
// @lc code=end
let nums = [1, 2, 3];
console.log(permute(nums));
