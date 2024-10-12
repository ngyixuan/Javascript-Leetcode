/**
 * @param {number[][]} matrix
 * @return {number}
 */

var dp = function (matrix, memo, i, j) {
  if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length)
    return 99999;
  if (i == 0) return matrix[0][j];
  if (memo[i][j] != 66666) return memo[i][j];

  let up = dp(matrix, memo, i - 1, j);
  let leftTop = dp(matrix, memo, i - 1, j - 1);
  let rightTop = dp(matrix, memo, i - 1, j + 1);

  memo[i][j] = matrix[i][j] + Math.min(up, Math.min(leftTop, rightTop));

  return memo[i][j];
};
var minFallingPathSum = function (matrix) {
  let res = Infinity;
  let memo = Array.from({ length: matrix.length }, () =>
    Array(matrix.length).fill(66666),
  );

  for (let j = 0; j < matrix.length; j++) {
    res = Math.min(res, dp(matrix, memo, matrix.length - 1, j));
  }

  return res;
};

let matrix = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];

console.log(minFallingPathSum(matrix));
