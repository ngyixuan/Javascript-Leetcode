/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  var res = [];
  candidates.sort((a, b) => a - b);
  var backtracking = function (candidates, target, path, sum, start) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
      backtracking(candidates, target, path, sum, i);
      sum -= candidates[i];
      path.pop();
    }
  };
  backtracking(candidates, target, [], 0, 0);
  return res;
};

let candidates = [2, 3, 6, 7],
  target = 7;
console.log(combinationSum(candidates, target));
