/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};
var dfs = function (grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
    return;
  }
  if (grid[i][j] == "0") return;
  grid[i][j] = "0";
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
};
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
