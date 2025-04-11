/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        board[i][j] === "O" &&
        (i == 0 || j == 0 || i == m - 1 || j == n - 1)
      ) {
        dfs(board, i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "W") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }

  console.log(board);
};

var dfs = function (board, i, j) {
  let m = board.length;
  let n = board[0].length;
  if (
    i < 0 ||
    j < 0 ||
    i >= m ||
    j >= n ||
    board[i][j] === "X" ||
    board[i][j] === "W"
  ) {
    return;
  }
  board[i][j] = "W";

  dfs(board, i - 1, j);
  dfs(board, i + 1, j);
  dfs(board, i, j - 1);
  dfs(board, i, j + 1);
};
// @lc code=end
let board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

solve(board);
