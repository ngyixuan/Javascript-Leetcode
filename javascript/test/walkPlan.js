function pathSum(n, obstaclesArray) {
  // 创建一个 n x n 的 dp 数组，初始化为 0
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  // 将障碍物坐标转换为数组索引，并存入 Set 中，方便快速查找
  const obstacles = new Set(
    obstaclesArray.map(([x, y]) => `${x - 1},${y - 1}`),
  );

  // 如果起点是障碍物，则无法开始，返回 0
  if (obstacles.has(`0,0`)) {
    return 0;
  }

  // 初始化起点，即 dp[0][0] 为 1
  dp[0][0] = 1;

  // 遍历 dp 数组，计算到达每个点的路径数
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 如果当前位置是障碍物，则路径数为 0
      if (obstacles.has(`${i},${j}`)) {
        dp[i][j] = 0;
      } else {
        // 计算到达当前位置的路径数，等于到达上方和左方的路径数之和
        if (i > 0) dp[i][j] += dp[i - 1][j];
        if (j > 0) dp[i][j] += dp[i][j - 1];
      }
    }
  }

  // 返回到达终点（右下角）的路径数
  return dp[n - 1][n - 1];
}

// 测试用例
const n = 3;
const obstaclesArray = [
  [1, 3],
  [2, 1],
];
console.log(pathSum(n, obstaclesArray)); // 输出 2
