function minMovesToArrangeBs(s) {
  const chars = s.split("");
  const bCount = chars.filter((char) => char === "B").length;
  const n = chars.length;

  // 如果 'B' 的数量小于2，不需要移动
  if (bCount < 2) return 0;

  // 计算需要的最小点数
  const minDots = bCount - 1;

  // 统计字符串中 '.' 的数量
  const dotCount = chars.filter((char) => char === ".").length;

  // 如果点的数量不够，无法完成任务
  if (dotCount < minDots) return -1;

  let minMoves = Infinity;

  // 考虑所有可能的起始位置
  for (let start = 0; start <= n - 2 * bCount + 1; start++) {
    let moves = 0;
    for (let i = 0; i < bCount; i++) {
      if (chars[start + i * 2] !== "B") {
        moves++;
      }
    }
    minMoves = Math.min(minMoves, moves);
  }

  return minMoves;
}

// 测试函数
console.log(minMovesToArrangeBs("...B.BB")); // 应该输出 1
console.log(minMovesToArrangeBs("B..B..B")); // 应该输出 2
console.log(minMovesToArrangeBs("B")); // 应该输出 0
console.log(minMovesToArrangeBs("BB")); // 应该输出 -1
console.log(minMovesToArrangeBs(".B.B.B.")); // 应该输出 0
console.log(minMovesToArrangeBs("..BBB..")); // 应该输出 2
