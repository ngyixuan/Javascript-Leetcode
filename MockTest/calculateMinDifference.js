/**
 * Note: 类名、方法名、参数名已经指定，请勿修改
 *
 *
 *
 * @param heights int整型 一维数组 一个整型数组，表示每张图片的高度
 * @return int整型
 */
function waterfallLayout(heights) {
  // write code here
  const totalHeight = heights.reduce((sum, height) => sum + height, 0);
  const halfHeight = Math.floor(totalHeight / 2);
  const n = heights.length;
  let dp = new Array(halfHeight + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = halfHeight; j >= heights[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - heights[i]] + heights[i]);
      console.log(dp[j]);
    }
  }
  const sum1 = dp[halfHeight];
  const sum2 = totalHeight - sum1;
  return Math.abs(sum2 - sum1);
}
let heights = [100, 200, 300, 400, 500];
console.log(waterfallLayout(heights));
