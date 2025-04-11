/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]];
  let used = new Array(nums.length).fill(false);
  function backtrack(start, path) {
    for (let i = start; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      res.push([...path]);
      used[i] = true;
      backtrack(i + 1, path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack(0, []);
  return res;
};
// @lc code=end
let nums = [1, 2, 3];
console.log(subsets(nums));
