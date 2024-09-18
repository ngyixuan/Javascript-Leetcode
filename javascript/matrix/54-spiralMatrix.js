/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let x = 0;
  let y = 0;
  let dx = 1;
  let dy = 0;
  let res = [];
  let totalLen = matrix.length * matrix[0].length;
  for (let i = 0; i < totalLen; i++) {
    console.log(x, y);
    res.push(matrix[y][x]);
    matrix[y][x] = ".";
    if (
      !(
        x + dx >= 0 &&
        y + dy >= 0 &&
        x + dx < matrix[0].length &&
        y + dy < matrix.length
      ) ||
      matrix[y + dy][x + dx] === "."
    ) {
      [dx, dy] = [-dy, dx];
    }
    x += dx;
    y += dy;
  }
  return res;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));
