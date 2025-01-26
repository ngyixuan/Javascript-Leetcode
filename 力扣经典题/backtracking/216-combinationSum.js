/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  var res = [];
  var path = [];
  let sum = 0;
  let start = 1;
  var backtracking = function (k, n, start, sum, path) {
    if (path.length == k && sum === n) {
      res.push([...path]);
      return;
    }
    if (path.length !== k && sum === n) return;
    if (path.length >= k && sum !== n) return;
    for (let i = start; i < 10; i++) {
      let temp = sum + i;
      if (temp > n) continue;
      sum = sum + i;
      path.push(i);
      backtracking(k, n, i + 1, sum, path);
      path.pop();
      sum = sum - i;
    }
  };

  backtracking(k, n, start, sum, path);
  return res;
};

let k = 4;
let n = 1;

console.log(combinationSum3(k, n));
