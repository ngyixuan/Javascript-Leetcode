/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var maxScore = function (a, b) {
  const n = b.length;

  // Initialize dp array
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(5).fill(-Infinity));

  // Base case: choosing 0 elements gives a score of 0
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 4; j++) {
      console.log(i, j);
      // Option 1: Don't choose the current element
      dp[i][j] = dp[i - 1][j];

      // Option 2: Choose the current element
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + a[j - 1] * b[i - 1]);
    }
  }
  return dp[n][4];
};

let a = [3, 2, 5, 6],
  b = [2, -6, 4, -5, -3, 2, -7];
maxScore(a, b);
