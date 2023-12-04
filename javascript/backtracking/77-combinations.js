/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let path = [];
  const backtracking = function (n, k, startIndex) {
    // console.log(startIndex, path);
    if (path.length == k) {
      result.push([...path]);

      return;
    }

    for (let i = startIndex; i <= n; i++) {
      path.push(i);

      backtracking(n, k, i + 1);
      path.pop();
    }
  };
  backtracking(n, k, 1);
  return result;
};
combine(4, 2);
