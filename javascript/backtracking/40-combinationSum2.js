/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  var res = [];
  var path = [];
  candidates.sort((a, b) => a - b);
  var backtracking = function (candidates, target, start, sum, path) {
    if (sum > target) return;
    if (sum === target) {
      res.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(candidates, target, i + 1, sum, path);
      path.pop();
      sum -= candidates[i];
    }
  };

  backtracking(candidates, target, 0, 0, path);
  return res;
};

let candidates = [2, 5, 2, 1, 2];
let target = 5;

console.log(combinationSum2(candidates, target));
