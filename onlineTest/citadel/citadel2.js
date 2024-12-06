function getMinimumOperations(executionTime, x, y) {
  let operations = 0;

  while (executionTime.some((time) => time > 0)) {
    // 找到执行时间最长的任务作为 major job
    let maxIndex = executionTime.indexOf(Math.max(...executionTime));

    // 更新执行时间
    executionTime = executionTime.map((time, index) => {
      if (index === maxIndex) {
        return time - x; // major job 减少 x 时间
      } else {
        return time - y; // 其他任务减少 y 时间
      }
    });

    // 增加一次操作计数
    operations++;
  }

  return operations;
}

// 测试输入
const executionTime = [3, 3, 6, 3, 9];
const x = 3;
const y = 2;

console.log(getMinimumOperations(executionTime, x, y)); // 输出 3
