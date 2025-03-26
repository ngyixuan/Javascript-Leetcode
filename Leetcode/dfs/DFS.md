## DFS 解题思路

二维矩阵本质上是一幅「图」，所以遍历的过程中需要一个 visited 布尔数组防止走回头路，有基础框架和方向数组的框架，根据个人喜好选择

### 二维矩阵 DFS 基础框架

```js
/**
 * 二维矩阵DFS基础框架（四方向显式调用）
 * @param {number[][]} grid 二维矩阵
 * @param {number} i 当前行索引
 * @param {number} j 当前列索引
 * @param {boolean[][]} visited 访问标记矩阵
 */
var dfs = function (grid, i, j, visited) {
  // 获取矩阵边界
  var m = grid.length,
    n = grid[0].length;

  // 边界检查
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }

  // 访问检查
  if (visited[i][j]) {
    return;
  }

  // 标记当前节点为已访问
  visited[i][j] = true;

  // 递归遍历四个方向
  dfs(grid, i - 1, j, visited); // 上
  dfs(grid, i + 1, j, visited); // 下
  dfs(grid, i, j - 1, visited); // 左
  dfs(grid, i, j + 1, visited); // 右
};
```

### 二维矩阵 DFS 方向数组框架

```js
// 定义四个方向：上、下、左、右
var dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * 二维矩阵DFS优化框架（使用方向数组）
 * @param {number[][]} grid 二维矩阵
 * @param {number} i 当前行索引
 * @param {number} j 当前列索引
 * @param {boolean[][]} visited 访问标记矩阵
 */
function dfs(grid, i, j, visited) {
  // 获取矩阵边界
  let m = grid.length,
    n = grid[0].length;

  // 边界检查
  if (i < 0 || j < 0 || i >= m || j >= n) {
    return;
  }

  // 访问检查
  if (visited[i][j]) {
    return;
  }

  // 标记当前节点为已访问
  visited[i][j] = true;

  // 使用方向数组遍历四个方向
  for (let d of dirs) {
    let next_i = i + d[0];
    let next_j = j + d[1];
    dfs(grid, next_i, next_j, visited);
  }
}
```
