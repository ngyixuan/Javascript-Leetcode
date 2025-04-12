/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length == 0) return 0;
  let rows = grid.length;
  let cols = grid[0].length;
  let islandsCount = 0;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        islandsCount++;
        bfs(i, j);
      }
    }
  }
  function bfs(row, col) {
    const queue = [[row, col]];
    grid[row][col] = '0';

    while (queue.length > 0) {
      const [r, c] = queue.shift();
      let tempQueue = [];
      for (let [dr, dc] of directions) {
        let nr = r + dr;
        let nc = c + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          grid[nr][nc] === '1'
        ) {
          tempQueue.push([nr, nc]);
          grid[nr][nc] = '0';
        }
      }
      queue.push(...tempQueue);
    }
  }
  return islandsCount;
};
// @lc code=end
let grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid));
