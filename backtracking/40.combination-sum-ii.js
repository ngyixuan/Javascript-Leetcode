/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);
  function backtrack(start, path, sum) {
    if (sum == target) {
      res.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] == candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(i + 1, path, sum + candidates[i]);
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return res;
};
// @lc code=end
let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(combinationSum2(candidates, target));
