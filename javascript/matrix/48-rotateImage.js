var rotate = function (matrix) {
  for (let item of matrix) {
    item.reverse();
  }
  let row = matrix.length;
  let col = matrix[0].length;
  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < col - i - 1; j++) {
      [matrix[i][j], matrix[row - j - 1][row - i - 1]] = [
        matrix[row - j - 1][row - i - 1],
        matrix[i][j],
      ];
    }
  }
  return matrix;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);
