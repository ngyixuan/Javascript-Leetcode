const calculateMinDistance = function (start, end, bottles) {
  const n = bottles.length;
  const manhattan = (p1, p2) =>
    Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);

  // 计算所有点对之间的曼哈顿距离
  const points = [start, ...bottles, end];
  const dist = Array(points.length)
    .fill()
    .map(() => Array(points.length).fill(0));

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      dist[i][j] = manhattan(points[i], points[j]);
    }
  }

  // BFS 初始化
  const queue = [{ pos: 0, picked: [], cost: 0 }]; // pos: 当前点, picked: 已拾取的瓶子索引列表, cost: 当前代价
  const visited = new Set(); // 用于避免重复访问
  visited.add(JSON.stringify([0, [], 0]));

  let minCost = Infinity;

  while (queue.length > 0) {
    const { pos, picked, cost } = queue.shift();

    // 检查是否已完成所有瓶子的拾取和送达
    if (picked.length === n) {
      minCost = Math.min(minCost, cost + dist[pos][n + 1]);
      continue;
    }

    // 遍历所有瓶子
    for (let i = 1; i <= n; i++) {
      if (!picked.includes(i)) {
        const newPicked = [...picked, i];
        const nextPos = i;
        const newCost = cost + dist[pos][nextPos];
        const state = JSON.stringify([nextPos, newPicked, newCost]);

        if (!visited.has(state)) {
          visited.add(state);
          queue.push({ pos: nextPos, picked: newPicked, cost: newCost });
        }
      }
    }
  }

  return minCost;
};

// 示例
const start = [0, 0];
const end = [1, 1];
const bottles = [
  [1, 0],
  [2, 2],
];
console.log(calculateMinDistance(start, end, bottles)); // 输出最小代价
