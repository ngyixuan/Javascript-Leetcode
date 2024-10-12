/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let start = 0;
  let end = m * n - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let positionX = Math.floor(mid / n);
    let positionY = mid % n;
    let curr = matrix[positionX][positionY];
    if (curr < target) {
      start = mid + 1;
    } else if (curr > target) {
      end = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 13;
console.log(searchMatrix(matrix, target));
