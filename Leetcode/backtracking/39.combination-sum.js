/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  function backtrack(start, path, sum) {
    if (sum > target) {
      return;
    }
    if (sum == target) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]);
      path.pop();
    }
  }
  backtrack(0, [], 0);
  return res;
};
// @lc code=end
let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, target));
