/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfs(i, j, p) {
    if (p == word.length) return true;
    if (i < 0 || j < 0 || i >= m || j >= n) return false;
    if (board[i][j] !== word[p]) return false;
    let temp = board[i][j];
    board[i][j] = '#';
    for (let dir of direction) {
      let next_x = i + dir[0];
      let next_y = j + dir[1];
      if (dfs(next_x, next_y, p + 1)) return true;
    }
    board[i][j] = temp;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};
// @lc code=end
let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
let word = 'ABCCED';
console.log(exist(board, word));
