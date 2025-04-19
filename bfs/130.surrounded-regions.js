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
  if (!board || board.length == 0) return;
  let m = board.length;
  let n = board[0].length;

  let queue = [];
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      queue.push([i, 0]);
      board[i][0] = 'W';
    }
    if (board[i][n - 1] === 'O') {
      queue.push([i, n - 1]);
      board[i][n - 1] = 'W';
    }
  }
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') {
      queue.push([0, j]);
      board[0][j] = 'W';
    }
    if (board[m - 1][j] === 'O') {
      queue.push([m - 1, j]);
      board[m - 1][j] = 'W';
    }
  }
  let direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  while (queue.length > 0) {
    const [r, c] = queue.shift();
    for (let [dr, dc] of direction) {
      let nr = r + dr;
      let nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'O') {
        board[nr][nc] = 'W';
        queue.push([nr, nc]);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === 'W') {
        board[i][j] = 'O';
      }
    }
  }
};
// @lc code=end

let board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];
solve(board);
