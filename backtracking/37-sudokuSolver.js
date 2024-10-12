/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const m = 9;
  var isValid = function (board, row, column, val) {
    for (let i = 0; i < m; i++) {
      if (board[row][i] === val) return false;
      if (board[i][column] === val) return false;
      if (
        board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
          Math.floor(column / 3) * 3 + (i % 3)
        ] === val
      )
        return false;
    }
    return true;
  };
  var backtracking = function (board, i, j) {
    if (j === m) {
      return backtracking(board, i + 1, 0);
    }
    if (i === m) return true;

    if (board[i][j] !== ".") {
      return backtracking(board, i, j + 1);
    }

    for (let ch = 1; ch <= m; ch++) {
      if (!isValid(board, i, j, ch.toString())) continue;
      board[i][j] = ch.toString();
      if (backtracking(board, i, j + 1)) {
        return true;
      }
      board[i][j] = ".";
    }
    return false;
  };

  backtracking(board, 0, 0);
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(board);
console.log(board);
