/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var res = [];
  var path = [];

  var backtracking = function (start, n, k, path) {
    if (path.length === k) {
      res.push([...path]);
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtracking(i + 1, n, k, path);
      path.pop();
    }
  };

  backtracking(1, n, k, path);
  return res;
};

console.log(combine(1, 1));
