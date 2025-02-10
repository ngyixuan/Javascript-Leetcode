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
  let islandsCount = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        islandsCount++;
        dfs(grid, i, j);
      }
    }
  }

  return islandsCount;
};
function dfs(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
  if (grid[i][j] === "0") return;
  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}
// @lc code=end
let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid));
