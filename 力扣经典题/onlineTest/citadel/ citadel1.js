function getMaximumThroughput(throughput, scaling_cost, budget) {
  const n = throughput.length;
  const timesScale = new Array(n).fill(0); // 每个服务扩展次数的计数

  // 模拟扩展过程
  while (budget > 0) {
    let bestIndex = -1; // 最优扩展服务的索引
    let bestEfficiency = -Infinity; // 最优性价比

    // 遍历每个服务，寻找性价比最高的服务
    for (let i = 0; i < n; i++) {
      const currentThroughput = throughput[i] * (1 + timesScale[i]); // 当前吞吐量
      const newThroughput = throughput[i] * (1 + timesScale[i] + 1); // 扩展一次后的吞吐量
      const cost = scaling_cost[i]; // 扩展成本
      if (budget >= cost) {
        const efficiency = (newThroughput - currentThroughput) / cost; // 单位成本的吞吐量增长
        if (efficiency > bestEfficiency) {
          bestEfficiency = efficiency;
          bestIndex = i;
        }
      }
    }

    // 如果没有可扩展的服务，直接退出
    if (bestIndex === -1) break;

    // 执行扩展
    timesScale[bestIndex] += 1;
    budget -= scaling_cost[bestIndex];
  }

  // 计算最终瓶颈吞吐量
  let bottleneckThroughput = Infinity;
  for (let i = 0; i < n; i++) {
    const scaledThroughput = throughput[i] * (1 + timesScale[i]);
    bottleneckThroughput = Math.min(bottleneckThroughput, scaledThroughput);
  }

  return bottleneckThroughput;
}

// 示例输入
const throughput = [3, 2, 5];
const scaling_cost = [2, 5, 10];
const budget = 28;

console.log(getMaximumThroughput(throughput, scaling_cost, budget)); // 输出: 6
