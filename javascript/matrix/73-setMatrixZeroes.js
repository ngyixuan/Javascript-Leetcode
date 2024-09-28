/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let zeroesPosition = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        zeroesPosition.push([i, j]);
      }
    }
  }

  for (let i = 0; i < zeroesPosition.length; i++) {
    let [x, y] = zeroesPosition[i];
    matrix[x].fill(0);
    for (let j = 0; j < row; j++) {
      matrix[j][y] = 0;
    }
  }

  return matrix;
};

let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
